const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.longrichpower.com/';
const lock = JSON.parse(fs.readFileSync(path.join(ROOT, 'PRODUCT_IMAGE_LOCK.json'), 'utf8'));
const models = Object.keys(lock).filter((key) => key !== 'policy');
const productFiles = models.map((model) => `${model.toLowerCase()}.html`);
const htmlFiles = fs.readdirSync(ROOT).filter((file) => file.endsWith('.html'));
const report = {
  productPagesTotal: productFiles.length,
  pagesWithProductSchema: 0,
  missingProductSchema: [],
  missingOrganization: [],
  missingBreadcrumbList: [],
  missingModel: [],
  missingSku: [],
  missingMpn: [],
  missingBrand: [],
  missingManufacturer: [],
  missingCategory: [],
  missingAdditionalProperty: [],
  productModelRemnants: 0,
  apexUrlRemnants: 0,
  jsonLdParseErrors: [],
  prohibitedCommerceFields: [],
  imageLockIssues: [],
  canonicalIssues: [],
};

const prohibited = new Set([
  'offers', 'price', 'lowPrice', 'highPrice', 'priceCurrency', 'availability',
  'review', 'aggregateRating', 'ratingValue', 'reviewCount', 'priceValidUntil',
]);

const walk = (value, visitor) => {
  if (Array.isArray(value)) return value.forEach((item) => walk(item, visitor));
  if (!value || typeof value !== 'object') return;
  for (const [key, child] of Object.entries(value)) {
    visitor(key, child);
    walk(child, visitor);
  }
};

for (const file of htmlFiles) {
  const source = fs.readFileSync(path.join(ROOT, file), 'utf8');
  report.productModelRemnants += (source.match(/ProductModel|#productmodel/gi) || []).length;
  report.apexUrlRemnants += (source.match(/https:\/\/longrichpower\.com/gi) || []).length;
  for (const match of source.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(match[1]); }
    catch (error) { report.jsonLdParseErrors.push([file, error.message]); }
  }
}

for (const [index, file] of productFiles.entries()) {
  const model = models[index];
  const source = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const canonical = source.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i)?.[1]
    || source.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i)?.[1];
  if (canonical !== `${SITE}${file}`) report.canonicalIssues.push([file, canonical]);
  const nodes = [];
  for (const match of source.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const parsed = JSON.parse(match[1]);
      nodes.push(...(parsed['@graph'] || [parsed]));
    } catch { /* Reported above. */ }
  }
  const product = nodes.find((node) => node['@type'] === 'Product');
  if (!product) {
    report.missingProductSchema.push(file);
    continue;
  }
  report.pagesWithProductSchema += 1;
  if (!nodes.some((node) => node['@type'] === 'Organization')) report.missingOrganization.push(file);
  if (!nodes.some((node) => node['@type'] === 'BreadcrumbList')) report.missingBreadcrumbList.push(file);
  if (product.model !== model) report.missingModel.push(file);
  if (product.sku !== model) report.missingSku.push(file);
  if (product.mpn !== model) report.missingMpn.push(file);
  if (!product.brand?.name) report.missingBrand.push(file);
  if (!product.manufacturer?.['@id']) report.missingManufacturer.push(file);
  if (!product.category) report.missingCategory.push(file);
  if (!Array.isArray(product.additionalProperty) || !product.additionalProperty.length) report.missingAdditionalProperty.push(file);
  walk(product, (key) => {
    if (prohibited.has(key)) report.prohibitedCommerceFields.push([file, key]);
  });
  const expected = `${SITE}${lock[model].replace(/\.png$/, '-transparent.png')}`;
  const accepted = new Set([`${SITE}${lock[model]}`, expected]);
  if (!accepted.has(product.image)) report.imageLockIssues.push([file, product.image]);
}

console.log(JSON.stringify(report, null, 2));
const failures = Object.entries(report)
  .filter(([key]) => !['productPagesTotal', 'pagesWithProductSchema'].includes(key))
  .some(([, value]) => Array.isArray(value) ? value.length : value !== 0);
if (failures || report.pagesWithProductSchema !== report.productPagesTotal) process.exit(1);
