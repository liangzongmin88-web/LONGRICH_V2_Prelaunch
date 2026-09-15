import fs from 'node:fs';

const args = process.argv.slice(2);
const value = flag => {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : undefined;
};
const base = (value('--base') || 'https://www.longrichpower.com').replace(/\/$/, '');
const output = value('--out') || 'SEO_LIVE_AUDIT';
const corePaths = [
  '/travel-adapter-manufacturer.html',
  '/oem-odm-travel-adapter.html',
  '/universal-travel-adapters.html',
  '/gan-travel-adapter.html',
  '/nt011-us.html',
  '/nt009-uk.html',
  '/flat-travel-adapter.html',
  '/grounded-travel-adapter.html',
  '/70w-gan-travel-adapter-full-load-test.html',
  '/engineering-resources.html'
];

const text = html => html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const attr = (html, name, valueName) => {
  const tags = html.match(new RegExp(`<[^>]+${name}=["']${valueName}["'][^>]*>`, 'gi')) || [];
  return tags.map(tag => tag.match(/(?:href|content)=["']([^"']+)["']/i)?.[1]).filter(Boolean);
};
const localLinks = html => {
  const links = new Set();
  for (const match of html.matchAll(/<a[^>]+href=["']([^"'#]+)["']/gi)) {
    try {
      const url = new URL(match[1], `${base}/`);
      if (url.origin === new URL(base).origin && /(?:\/|\.html)$/.test(url.pathname)) links.add(url.pathname || '/');
    } catch {}
  }
  return [...links];
};
const get = async url => {
  try {
    const response = await fetch(url, { redirect: 'follow', headers: { 'user-agent': 'LONGRICH-SEO-Audit/1.0' } });
    return { status: response.status, finalUrl: response.url, body: await response.text() };
  } catch (error) {
    return { status: 0, finalUrl: url, body: '', error: error.message };
  }
};

const [robots, sitemap] = await Promise.all([get(`${base}/robots.txt`), get(`${base}/sitemap.xml`)]);
const sitemapPaths = new Set([...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => new URL(match[1]).pathname || '/'));
const crawlPaths = [...sitemapPaths];
const pages = new Map();
for (let index = 0; index < crawlPaths.length; index += 8) {
  const batch = crawlPaths.slice(index, index + 8);
  const results = await Promise.all(batch.map(path => get(`${base}${path}`)));
  batch.forEach((path, position) => pages.set(path, results[position]));
}

const incoming = new Map(crawlPaths.map(path => [path, 0]));
for (const page of pages.values()) {
  for (const link of localLinks(page.body)) if (incoming.has(link)) incoming.set(link, incoming.get(link) + 1);
}

const rows = corePaths.map(path => {
  const page = pages.get(path) || { status: 0, body: '', finalUrl: `${base}${path}` };
  const canonicals = attr(page.body, 'rel', 'canonical');
  const canonical = canonicals[0] || '';
  const expected = `${base}${path}`;
  const robotsMeta = attr(page.body, 'name', 'robots').join(' ');
  const links = localLinks(page.body).filter(link => link !== path);
  const title = text(page.body.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '');
  const description = page.body.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)?.[1] || '';
  return {
    path,
    http: page.status,
    sitemap: sitemapPaths.has(path),
    canonical,
    selfCanonical: canonical === expected,
    noindex: /noindex/i.test(robotsMeta),
    internalLinks: links.length,
    incomingLinks: incoming.get(path) || 0,
    title,
    descriptionLength: description.length,
    indexStatus: 'GSC URL Inspection required'
  };
});

const findings = [];
if (robots.status !== 200) findings.push(`robots.txt returned ${robots.status}`);
if (sitemap.status !== 200) findings.push(`sitemap.xml returned ${sitemap.status}`);
if (!/Sitemap:\s*https:\/\/www\.longrichpower\.com\/sitemap\.xml/i.test(robots.body)) findings.push('robots.txt does not declare the expected sitemap');
for (const row of rows) {
  if (row.http !== 200) findings.push(`${row.path}: HTTP ${row.http}`);
  if (!row.sitemap) findings.push(`${row.path}: missing from sitemap`);
  if (!row.selfCanonical) findings.push(`${row.path}: canonical is not self-referencing`);
  if (row.noindex) findings.push(`${row.path}: noindex detected`);
  if (row.internalLinks < 2) findings.push(`${row.path}: fewer than 2 internal links`);
  if (row.incomingLinks < 1) findings.push(`${row.path}: no incoming links found in sitemap crawl`);
  if (!row.title) findings.push(`${row.path}: missing title`);
  if (row.descriptionLength < 70 || row.descriptionLength > 180) findings.push(`${row.path}: meta description length ${row.descriptionLength}`);
}

const report = {
  generatedAt: new Date().toISOString(),
  base,
  robots: { http: robots.status },
  sitemap: { http: sitemap.status, urls: sitemapPaths.size },
  rows,
  findings
};
fs.writeFileSync(`${output}.json`, `${JSON.stringify(report, null, 2)}\n`);
const yn = value => value ? 'Yes' : 'No';
const markdown = `# LONGRICH Live SEO Audit\n\nGenerated: ${report.generatedAt}\n\n- robots.txt: HTTP ${robots.status}\n- sitemap.xml: HTTP ${sitemap.status}; ${sitemapPaths.size} URLs\n- Findings: ${findings.length}\n\n| URL | HTTP | Sitemap | Self-canonical | Noindex | Outbound internal links | Incoming links | Index status |\n| --- | ---: | --- | --- | --- | ---: | ---: | --- |\n${rows.map(row => `| ${row.path} | ${row.http} | ${yn(row.sitemap)} | ${yn(row.selfCanonical)} | ${yn(row.noindex)} | ${row.internalLinks} | ${row.incomingLinks} | ${row.indexStatus} |`).join('\n')}\n\n## Findings\n\n${findings.length ? findings.map(item => `- ${item}`).join('\n') : '- No crawl, sitemap, canonical, noindex, metadata, or core internal-link issues detected.'}\n\n## Important limitation\n\nHTTP 200 and sitemap inclusion do not prove Google indexing. Replace “GSC URL Inspection required” only with current Search Console evidence.\n`;
fs.writeFileSync(`${output}.md`, markdown);
console.log(JSON.stringify({ output, sitemapUrls: sitemapPaths.size, coreUrls: rows.length, findings: findings.length }, null, 2));
if (findings.length) process.exitCode = 1;
