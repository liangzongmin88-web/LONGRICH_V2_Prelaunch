import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const htmlFiles = fs.readdirSync(root).filter(file => file.endsWith('.html')).sort();
const productPattern = /^(nt\d[^/]*|tus-[^/]+|wpg[^/]*|ecs-[^/]+)\.html$/i;
const guideFiles = new Set([
  '20w-vs-45w-vs-70w-travel-adapter.html',
  '70w-gan-travel-adapter-full-load-test.html',
  'flat-travel-adapter.html',
  'gan-travel-adapter.html',
  'grounded-travel-adapter.html',
  'grounding-continuity-test-travel-adapter.html',
  'how-to-choose-travel-adapter-manufacturer.html',
  'oem-odm-travel-adapter.html',
  'plug-lock-insertion-durability-test.html',
  'travel-adapter-manufacturer.html',
  'travel-adapter-quality-control-process.html',
  'travel-adapter-review-mining-engineering-insights.html',
  'travel-adapter-vs-voltage-converter.html',
  'travel-adapter-wall-stability-anti-sag-test.html',
  'why-travel-adapters-fall-out-of-wall-sockets.html'
]);

const clean = value => (value || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const attr = (html, tag, name, value, wanted) => {
  const tags = [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'gi'))].map(match => match[0]);
  const found = tags.find(item => new RegExp(`${name}=["']${value}["']`, 'i').test(item));
  return found?.match(new RegExp(`${wanted}=["']([^"']+)`, 'i'))?.[1] || '';
};
const categoryFor = file => {
  if (/^nt/i.test(file)) return ['Universal Travel Adapters', 'Travel Adapters', '/travel-adapters/'];
  if (/^wpg/i.test(file)) return ['Power Strips & Wall Outlets', 'Wall Outlet Extenders', '/wall-outlet-extenders/'];
  if (/^ecs-(aus05|eu010|us019)/i.test(file)) return ['Power Strips & Wall Outlets', 'Tower Power Strips', '/tower-power-strips/'];
  if (/^ecs/i.test(file)) return ['Power Strips & Wall Outlets', 'Power Strips', '/power-strips/'];
  if (/^tus/i.test(file)) return ['Voltage Converters', 'Voltage Converters (retained adjacent category)', '/voltage-converters.html'];
  return ['', '', ''];
};
const typeFor = file => {
  if (productPattern.test(file)) return 'Product';
  if (guideFiles.has(file)) return 'Guide / Resource';
  if (file === 'products.html' || /^(universal-travel-adapters|power-strips-wall-outlets|voltage-converters|travel-plug-adapters)\.html$/.test(file)) return 'Category / Hub';
  if (file === 'engineering-resources.html') return 'Resources Hub';
  if (file === 'index.html') return 'Home';
  return 'Corporate / Utility';
};

const rows = htmlFiles.map(file => {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const title = clean(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]);
  const canonical = attr(html, 'link', 'rel', 'canonical', 'href');
  const schemas = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  let schemaValid = schemas.length > 0;
  const schemaTypes = new Set();
  for (const block of schemas) {
    try {
      const data = JSON.parse(block[1]);
      const nodes = data['@graph'] || [data];
      nodes.forEach(node => schemaTypes.add(node['@type']));
    } catch { schemaValid = false; }
  }
  const links = [...html.matchAll(/<a\b[^>]+href=["']([^"'#?]+)["']/gi)].map(match => match[1]);
  const [currentCategory, recommendedCategory, categoryUrl] = categoryFor(file);
  const pageType = typeFor(file);
  const sku = productPattern.test(file) ? file.replace(/\.html$/, '').toUpperCase() : '';
  const expectedCanonical = `https://www.longrichpower.com/${file === 'index.html' ? '' : file}`;
  const canonicalStatus = canonical === expectedCanonical ? 'Self-referencing / OK' : canonical ? `Review: ${canonical}` : 'Missing';
  const schemaStatus = schemaValid ? [...schemaTypes].filter(Boolean).join(' + ') || 'JSON-LD present' : schemas.length ? 'Invalid JSON-LD' : 'Missing';
  const categoryLinked = categoryUrl ? links.some(link => link === categoryUrl.slice(1) || link === categoryUrl) : links.length >= 2;
  const internalStatus = categoryLinked ? 'Category link present' : pageType === 'Product' ? 'Add recommended category link' : `${new Set(links).size} internal targets`;
  const actions = [];
  if (canonicalStatus !== 'Self-referencing / OK' && file !== '404.html') actions.push('Fix canonical');
  if (pageType === 'Product' && !schemaTypes.has('Product')) actions.push('Preserve/add Product schema');
  if (!schemaTypes.has('BreadcrumbList') && file !== '404.html') actions.push('Add BreadcrumbList');
  if (pageType === 'Product' && !categoryLinked) actions.push('Link new category');
  if (!actions.length) actions.push('Retain and monitor');
  return { file, pageType, title, sku, currentCategory, recommendedCategory, categoryUrl, canonicalStatus, schemaStatus, internalStatus, actions: actions.join('; '), risk: canonicalStatus === 'Self-referencing / OK' ? (pageType === 'Product' ? 'Medium — indexed URL/content' : 'Low') : 'High' };
});

const mdCell = value => String(value || '—').replace(/\|/g, '\\|').replace(/\n/g, ' ');
const table = [
  '| Current URL | Page Type | Page Title | SKU | Current Category | Recommended New Category | Keep Current URL? Yes/No | Recommended Category URL | Canonical Status | Schema Status | Internal Links Status | Action Required | Risk Level |',
  '|---|---|---|---|---|---|---|---|---|---|---|---|---|',
  ...rows.map(row => `| /${row.file === 'index.html' ? '' : row.file} | ${mdCell(row.pageType)} | ${mdCell(row.title)} | ${mdCell(row.sku)} | ${mdCell(row.currentCategory)} | ${mdCell(row.recommendedCategory)} | Yes | ${mdCell(row.categoryUrl)} | ${mdCell(row.canonicalStatus)} | ${mdCell(row.schemaStatus)} | ${mdCell(row.internalStatus)} | ${mdCell(row.actions)} | ${mdCell(row.risk)} |`)
].join('\n');

const products = rows.filter(row => row.pageType === 'Product');
const counts = Object.fromEntries([...new Set(products.map(row => row.recommendedCategory))].map(category => [category, products.filter(row => row.recommendedCategory === category).length]));
const audit = `# Site Architecture Audit\n\nGenerated from the pre-change repository snapshot on 2026-09-07. This inventory is intentionally captured before architecture edits.\n\n## Baseline\n\n- Root HTML pages scanned: ${rows.length}\n- Existing product URLs preserved by plan: ${products.length}\n- Existing sitemap: \`/sitemap.xml\`\n- Existing robots file: \`/robots.txt\`\n- Git status: unavailable because this workspace contains no \`.git\` directory\n- Guardrail: no existing product URL, model, specification, image structure, canonical, Product schema, guide, or robots crawl permission will be removed.\n\n## Page inventory\n\n${table}\n`;

const mappingRows = products.map(row => `| ${row.sku} | /${row.file} | ${row.currentCategory} | ${row.recommendedCategory} | ${row.categoryUrl} | Keep URL; update category breadcrumb and internal links only |`).join('\n');
const mapping = `# Product Category Mapping\n\nThis mapping was approved for implementation by the supplied architecture brief. Existing product URLs remain canonical. TUS voltage converters remain in their accurate legacy category rather than being forced into one of the four new clusters.\n\n| SKU | Existing URL | Current Category | Recommended Category | Category URL | URL Action |\n|---|---|---|---|---|---|\n${mappingRows}\n\n## Planned cluster totals\n\n${Object.entries(counts).map(([name, count]) => `- ${name}: ${count} existing product pages`).join('\n')}\n`;

const risk = `# SEO Migration Risk Register\n\n## Non-negotiable controls\n\n- Keep all ${products.length} existing product URLs unchanged.\n- Keep self-referencing canonicals on existing pages.\n- Preserve existing Product JSON-LD and factual product specifications.\n- Keep all current guides and indexable sitemap entries.\n- Do not add mass redirects or block crawling in robots.txt.\n\n## Recorded changes that touch indexing signals\n\n| Change | Risk | Mitigation | Approval needed? |\n|---|---|---|---|\n| Add new category, solution, and resource directory URLs | Low | Self-referencing canonical equals sitemap and physical route | No |\n| Update existing product BreadcrumbList category parent | Medium | Product URL and Product schema remain unchanged; only taxonomy parent changes | Covered by supplied brief |\n| Add internal category links to existing products/guides | Low | Additive links only; no content/specification replacement | No |\n| Add new URLs to sitemap.xml | Low | Include only real, indexable routes after link validation | No |\n| Create Git branch / PR | Blocked | Workspace has no .git metadata; reconnect or clone repository before publishing | Yes |\n| Change any existing product URL | High | Not required and not implemented | Yes, if ever proposed |\n\n## Rollback boundary\n\nAll architecture work is additive. Existing canonical product pages remain at their original filenames, so removal of new directories and reversal of breadcrumb/link enhancements restores the prior topology without URL redirects.\n`;

const internalMap = `# Internal Linking Map\n\n## Target funnel\n\n\`Category → Product → Guide → Solution → RFQ\`\n\n## Product clusters\n\n- \`/travel-adapters/\` → NT009 / NT010 / NT011 families → buying guides and engineering tests → Amazon sellers / travel brands / distributors → \`/request-a-quote.html\`\n- \`/power-strips/\` → ECS desktop and regional power strips → market/OEM resources → Amazon sellers / distributors → RFQ\n- \`/wall-outlet-extenders/\` → WPG series → market/OEM resources → Amazon sellers / distributors → RFQ\n- \`/tower-power-strips/\` → ECS-US019 and ECS-EU010 → testing/market resources → Amazon sellers / distributors → RFQ\n- \`/voltage-converters.html\` → TUS series (retained adjacent category) → converter guide → distributors → RFQ\n\n## Resource themes\n\n- \`/resources/buying-guides/\` links to Travel Adapters and relevant NT products.\n- \`/resources/engineering-testing/\` links to products under test and their category.\n- \`/resources/market-insights/\` links to all four product clusters.\n- \`/resources/oem-odm-knowledge/\` links to OEM/ODM, solutions, products, and RFQ.\n`;

fs.writeFileSync(path.join(root, 'SITE_ARCHITECTURE_AUDIT.md'), audit);
fs.writeFileSync(path.join(root, 'PRODUCT_CATEGORY_MAPPING.md'), mapping);
fs.writeFileSync(path.join(root, 'SEO_MIGRATION_RISK.md'), risk);
fs.writeFileSync(path.join(root, 'INTERNAL_LINKING_MAP.md'), internalMap);
console.log(JSON.stringify({ scanned: rows.length, products: products.length, counts }, null, 2));
