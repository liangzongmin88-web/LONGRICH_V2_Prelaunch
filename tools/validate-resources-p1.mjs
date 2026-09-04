import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const origin = 'https://www.longrichpower.com/';
const guides = [
  'why-travel-adapters-fall-out-of-wall-sockets.html',
  'universal-travel-adapter-vs-country-specific-adapter.html',
  '20w-vs-45w-vs-70w-travel-adapter.html',
  'can-70w-travel-adapter-charge-laptop.html',
  'travel-adapter-vs-voltage-converter.html',
];
const products = ['nt009-all.html', 'nt010.html', 'nt011-us.html'];
const supportingGuides = [
  'travel-adapter-wall-stability-anti-sag-test.html',
  'flat-travel-adapter.html',
  '70w-gan-travel-adapter-full-load-test.html',
  'gan-travel-adapter.html',
];
const allRelatedGuides = [...guides, ...supportingGuides];
const expectedProductGuides = {
  'nt009-all.html': [
    'why-travel-adapters-fall-out-of-wall-sockets.html',
    'universal-travel-adapter-vs-country-specific-adapter.html',
    '20w-vs-45w-vs-70w-travel-adapter.html',
  ],
  'nt010.html': [
    '20w-vs-45w-vs-70w-travel-adapter.html',
    'can-70w-travel-adapter-charge-laptop.html',
    'why-travel-adapters-fall-out-of-wall-sockets.html',
  ],
  'nt011-us.html': [
    'can-70w-travel-adapter-charge-laptop.html',
    '20w-vs-45w-vs-70w-travel-adapter.html',
    '70w-gan-travel-adapter-full-load-test.html',
    'why-travel-adapters-fall-out-of-wall-sockets.html',
  ],
};

const pages = fs.readdirSync(root).filter(file => file.endsWith('.html'));
const report = {
  brokenInternalLinks: [],
  canonicalMismatches: [],
  jsonLdParseErrors: [],
  schemaErrors: [],
  missingSitemapPages: [],
  duplicateSitemapUrls: [],
  faqCountErrors: [],
  guideClusterErrors: [],
  productGuideLinkErrors: [],
  productSpecificationChanges: [],
  productImageChanges: [],
  productImageLockViolations: [],
};

const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const getCanonical = html => html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i)?.[1]
  || html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i)?.[1];
const getLinks = html => [...html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map(match => match[1]);
const getImageSources = html => [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map(match => match[1]).sort();

for (const file of pages) {
  const html = read(file);
  const noindex = /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html);
  const expectedCanonical = `${origin}${file === 'index.html' ? '' : file}`;
  if (!noindex && file !== '404.html' && getCanonical(html) !== expectedCanonical) {
    report.canonicalMismatches.push({ file, expected: expectedCanonical, actual: getCanonical(html) || null });
  }

  for (const [index, match] of [...html.matchAll(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)].entries()) {
    try { JSON.parse(match[1]); }
    catch (error) { report.jsonLdParseErrors.push({ file, block: index + 1, error: error.message }); }
  }

  for (const href of getLinks(html)) {
    const target = href.split('#')[0].split('?')[0];
    if (!target || /^(?:https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(target)) continue;
    if (!fs.existsSync(path.join(root, target))) report.brokenInternalLinks.push({ file, href });
  }
}

for (const file of guides) {
  const html = read(file);
  const nodes = [];
  for (const match of html.matchAll(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)) {
    try {
      const json = JSON.parse(match[1]);
      nodes.push(...(json['@graph'] || [json]));
    } catch { /* parse errors are reported above */ }
  }
  const article = nodes.find(node => node['@type'] === 'Article');
  const organization = nodes.find(node => node['@type'] === 'Organization')
    || [article?.author, article?.publisher].find(node => node?.['@type'] === 'Organization');
  const breadcrumb = nodes.find(node => node['@type'] === 'BreadcrumbList');
  const canonical = getCanonical(html);
  if (!organization) report.schemaErrors.push(`${file}: missing Organization`);
  if (!article) report.schemaErrors.push(`${file}: missing Article`);
  if (!breadcrumb) report.schemaErrors.push(`${file}: missing BreadcrumbList`);
  if (!article?.headline) report.schemaErrors.push(`${file}: missing Article.headline`);
  const mainEntity = typeof article?.mainEntityOfPage === 'string' ? article.mainEntityOfPage : article?.mainEntityOfPage?.['@id'];
  if (mainEntity !== canonical) report.schemaErrors.push(`${file}: mainEntityOfPage does not match canonical`);
  if (!article?.publisher) report.schemaErrors.push(`${file}: missing Article.publisher`);
  if (article?.url && article.url !== canonical) report.schemaErrors.push(`${file}: Article.url does not match canonical`);

  const faqCount = (html.match(/<summary>/g) || []).length;
  if (faqCount < 5 || faqCount > 7) report.faqCountErrors.push({ file, faqCount });

  const links = getLinks(html).map(href => href.split('#')[0].split('?')[0]);
  const relatedGuideCount = new Set(links.filter(href => allRelatedGuides.includes(href) && href !== file)).size;
  const hasProductOrCategory = links.some(href => products.includes(href)
    || ['universal-travel-adapters.html', 'voltage-converters.html', 'travel-adapter-wall-stability-anti-sag-test.html', 'flat-travel-adapter.html', '70w-gan-travel-adapter-full-load-test.html', 'gan-travel-adapter.html'].includes(href));
  if (relatedGuideCount < 2) report.guideClusterErrors.push(`${file}: fewer than 2 related guides`);
  if (!hasProductOrCategory) report.guideClusterErrors.push(`${file}: missing related product/category`);
  if (!links.includes('engineering-resources.html')) report.guideClusterErrors.push(`${file}: missing Resources Hub link`);
  if (!links.includes('request-a-quote.html')) report.guideClusterErrors.push(`${file}: missing RFQ link`);
}

for (const [file, expectedLinks] of Object.entries(expectedProductGuides)) {
  const html = read(file);
  for (const href of expectedLinks) {
    if (!html.includes(`href="${href}"`)) report.productGuideLinkErrors.push(`${file}: missing ${href}`);
  }
}

const sitemap = read('sitemap.xml');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
const counts = new Map();
for (const url of sitemapUrls) counts.set(url, (counts.get(url) || 0) + 1);
for (const [url, count] of counts) if (count > 1) report.duplicateSitemapUrls.push({ url, count });
for (const file of pages) {
  const html = read(file);
  const noindex = /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html);
  if (noindex || file === '404.html') continue;
  const url = `${origin}${file === 'index.html' ? '' : file}`;
  if (!counts.has(url)) report.missingSitemapPages.push(file);
}
for (const url of sitemapUrls) {
  if (!url.startsWith(origin)) report.missingSitemapPages.push(`non-www sitemap URL: ${url}`);
  const relative = url.slice(origin.length) || 'index.html';
  if (!fs.existsSync(path.join(root, relative))) report.missingSitemapPages.push(`missing file for ${url}`);
}

const lock = JSON.parse(read('PRODUCT_IMAGE_LOCK.json'));
for (const [model, file] of Object.entries(lock)) {
  if (model === 'policy') continue;
  if (!fs.existsSync(path.join(root, file))) report.productImageLockViolations.push(`${model}: missing ${file}`);
}
let changedFiles = [];
try {
  changedFiles = execFileSync('git', ['diff', '--name-only', 'origin/main'], { cwd: root, encoding: 'utf8' }).trim().split('\n').filter(Boolean);
} catch (error) {
  report.productImageLockViolations.push(`unable to compare origin/main: ${error.message}`);
}
report.productImageChanges.push(...changedFiles.filter(file => file === 'PRODUCT_IMAGE_LOCK.json' || file.startsWith('assets/images/')));
for (const file of products) {
  try {
    const baseline = execFileSync('git', ['show', `origin/main:${file}`], { cwd: root, encoding: 'utf8' });
    const specificationSection = html => html.match(/<section class=["']section soft["'] id=["']specifications["']>[\s\S]*?<\/section>/i)?.[0]
      || html.match(/<section[^>]+id=["']specifications["'][^>]*>[\s\S]*?<\/section>/i)?.[0];
    if (specificationSection(baseline) !== specificationSection(read(file))) {
      report.productSpecificationChanges.push(`${file}: specifications section changed`);
    }
    if (JSON.stringify(getImageSources(baseline)) !== JSON.stringify(getImageSources(read(file)))) {
      report.productImageChanges.push(`${file}: image references changed`);
    }
  } catch (error) {
    report.productImageLockViolations.push(`${file}: unable to compare image references (${error.message})`);
  }
}

const summary = Object.fromEntries(Object.entries(report).map(([key, value]) => [key, value.length]));
const result = { summary, details: report };
console.log(JSON.stringify(result, null, 2));
if (Object.values(summary).some(count => count > 0)) process.exitCode = 1;
