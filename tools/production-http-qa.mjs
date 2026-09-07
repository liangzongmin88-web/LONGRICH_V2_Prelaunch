import fs from 'node:fs/promises';

const ORIGIN = process.env.LONGRICH_ORIGIN || 'https://www.longrichpower.com';
const sitemap = await fs.readFile(new URL('../sitemap.xml', import.meta.url), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
const priorityPaths = [
  '/',
  '/engineering-resources.html',
  '/request-a-quote.html',
  '/power-strips-wall-outlets.html',
  '/nt011-us.html',
];

async function inspect(url, attempt = 1) {
  const started = Date.now();
  try {
    const response = await fetch(url, {
      redirect: 'manual',
      headers: {
        accept: 'text/html,application/xhtml+xml',
        'user-agent': 'LONGRICH-Production-HTTP-QA/1.0',
      },
      signal: AbortSignal.timeout(20_000),
    });
    return {
      url,
      attempt,
      status: response.status,
      durationMs: Date.now() - started,
      cache: response.headers.get('x-vercel-cache') || response.headers.get('cf-cache-status') || '',
      contentType: response.headers.get('content-type') || '',
      location: response.headers.get('location') || '',
    };
  } catch (error) {
    return {
      url,
      attempt,
      status: 0,
      durationMs: Date.now() - started,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

const sitemapResults = [];
for (let index = 0; index < urls.length; index += 8) {
  sitemapResults.push(...await Promise.all(urls.slice(index, index + 8).map(url => inspect(url))));
}

const repeatedResults = [];
for (let attempt = 1; attempt <= 5; attempt += 1) {
  repeatedResults.push(...await Promise.all(
    priorityPaths.map(path => inspect(new URL(path, ORIGIN).href, attempt)),
  ));
}

const failures = [...sitemapResults, ...repeatedResults].filter(result => (
  result.status === 0 || result.status >= 400 || (result.status >= 300 && !result.location)
));
const summary = {
  checkedAt: new Date().toISOString(),
  origin: ORIGIN,
  sitemapUrlCount: urls.length,
  totalRequests: sitemapResults.length + repeatedResults.length,
  statusCounts: [...sitemapResults, ...repeatedResults].reduce((counts, result) => {
    const key = String(result.status);
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {}),
  failures,
  priorityResults: repeatedResults,
};

console.log(JSON.stringify(summary, null, 2));
process.exitCode = failures.length ? 1 : 0;
