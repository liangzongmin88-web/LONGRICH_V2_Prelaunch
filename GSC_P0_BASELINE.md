# LONGRICH P0 Search Console Baseline

Date started: 2026-09-04

## Purpose
Track the five highest-priority SEO/GEO acquisition pages after the P0 strengthening pass. Use Google Search Console as the source of truth for indexing, impressions, clicks, CTR and average position.

## Site-wide GSC indexing snapshot
Snapshot date: 2026-09-04 (GSC report last updated 2026-08-28)

- Known URLs: 82
- Indexed: 19
- Not indexed: 63
- Indexation rate: 23.2%

### Not-indexed reasons
| Reason | Count | Priority | Interpretation / action |
|---|---:|---|---|
| Discovered - currently not indexed | 55 | P0 | Main issue. Google knows the URLs but has not crawled/indexed them yet. Improve crawl priority, internal links and sitemap freshness; manually request indexing only for the most important URLs. |
| Crawled - currently not indexed | 2 | P0 | Google crawled these pages but did not select them for indexing. Inspect these specific URLs for content quality, duplication, canonical and search intent. |
| Page with redirect | 4 | Low | Usually expected if intentional. Ensure redirects are not listed as canonical target URLs in sitemap/internal links. |
| Duplicate, user-selected canonical differs | 1 | Medium | Inspect canonical target and remove conflicting internal/sitemap signals if accidental. |
| Alternate page with proper canonical tag | 1 | Low | Usually expected if canonical is intentional. |

## 28-day site-wide Search Performance baseline
Captured from GSC on 2026-09-04.

- Total clicks: 3
- Total impressions: 98
- CTR: 3.1%
- Average position: 30.9

### Visible top queries from the current GSC snapshot
| Query | Clicks | Impressions | Interpretation |
|---|---:|---:|---|
| uk power strip market | 0 | 10 | Clear early demand signal for market/research content around power strips. |
| power strip market | 0 | 7 | Confirms Google is already associating LONGRICH with power-strip market content. |
| longrich | 0 | 2 | Brand discovery signal. |
| longrich link | 0 | 2 | Brand/navigation signal; low priority. |
| difference between travel adapter and power adapter | 0 | 2 | Relevant informational long-tail that can support travel-adapter buyer education. |
| what is a travel adapter | 0 | 2 | Informational travel-adapter demand signal. |
| 45w vs 70w travel adapter | 0 | 1 | Direct buyer-guide signal for the 20W/45W/70W comparison page. |
| nt011 | 0 | 1 | Direct model query signal for NT011/NT011-US cluster. |
| difference between voltage converter and adapter | 0 | 1 | Relevant comparison intent for converter-vs-adapter content. |
| global plug power adapter manufacturer | 0 | 1 | Commercial manufacturer-intent signal. |

### Top landing pages visible in the 28-day Pages report
| Page | Clicks | Impressions | CTR | Immediate interpretation |
|---|---:|---:|---:|---|
| https://www.longrichpower.com/ | 1 | 13 | 7.7% | Homepage already earns clicks. Preserve; use it to pass internal-link authority to P0 commercial pages. |
| /nt009-uk.html | 1 | 3 | 33.3% | Very small sample but strong early click signal. Keep visible and strengthen relevant UK/internal links rather than rewriting aggressively. |
| /why-travel-adapters-fall-out-of-wall-sockets.html | 1 | 3 | 33.3% | Engineering/problem-solution content is already attracting clicks; strong GEO/authority signal. |
| /power-strips-wall-outlets.html | 0 | 28 | 0% | Highest-impression visible landing page; first CTR/ranking optimization already completed. |
| /about-us.html | 0 | 16 | 0% | High visibility for a company page but no clicks; likely brand/company discovery. Improve title/meta only if queries justify it. |
| /nt011-us.html | 0 | 12 | 0% | Important P0 product page has impressions but no clicks. Next page for query-level analysis. |
| /20w-vs-45w-vs-70w-travel-adapter.html | 0 | 8 | 0% | Buyer-guide page is surfacing; visible query `45w vs 70w travel adapter` confirms relevance. |
| /nt009-all.html | 0 | 8 | 0% | Product page has early visibility. Check query fit before changing copy. |
| http://longrichpower.com/ | 0 | 7 | 0% | Legacy HTTP homepage appearing in performance data; confirm permanent HTTPS redirect and avoid linking to HTTP anywhere. |
| /contact-us.html | 0 | 7 | 0% | Low-priority SEO landing page; conversion page visibility is acceptable but should not be a ranking focus. |

## Power-strip optimization status
- `/power-strips-wall-outlets.html` was aligned to B2B manufacturer intent and regional market wording.
- New title: `Power Strip Manufacturer for US, UK, EU & AU Markets | LONGRICH`.
- Added market-oriented copy and internal links for UK / US / EU / AU platforms.
- Primary observed demand signals: `uk power strip market` and `power strip market`.
- Next step for this page: wait for recrawl, then compare impressions, CTR and average position after 7-14 days.

## P0 pages — URL Inspection result

| Page | Primary query intent | Index status | Current issue | Next action |
|---|---|---|---|---|
| /travel-adapter-manufacturer.html | travel adapter manufacturer / travel adapter factory | Indexed | None shown | Move to Performance/query optimization |
| /oem-odm-travel-adapter.html | OEM travel adapter manufacturer | Not indexed — Discovered, currently not indexed | Live Test passed: URL is indexable | Request Indexing, then monitor recrawl/indexing |
| /universal-travel-adapters.html | universal travel adapter supplier | Indexed | None shown | Move to Performance/query optimization |
| /gan-travel-adapter.html | GaN travel adapter OEM | Indexed | None shown | Move to Performance/query optimization |
| /nt011-us.html | 70W GaN travel adapter manufacturer / OEM | Indexed | Old GSC snapshot still shows invalid Product snippet | Current source now uses WebPage + Organization + BreadcrumbList and `og:type=website`; request recrawl and wait for old Product enhancement snapshot to clear |

P0 indexation: 4 / 5 = 80%

## Immediate execution order
1. In GSC, filter exact page `https://www.longrichpower.com/nt011-us.html`, keep 28 days, then open **Queries**. Capture clicks, impressions and—after enabling the metric card—average position. Do not rewrite NT011-US until this page-specific query list is captured.
2. Then repeat for `https://www.longrichpower.com/20w-vs-45w-vs-70w-travel-adapter.html`.
3. `/oem-odm-travel-adapter.html`: click **Request Indexing** now that Live Test passed.
4. `/nt011-us.html`: after deployment, run **Test Live URL** once; if the Product enhancement is absent in live test, click **Request Indexing** to refresh Google's stored version.
5. Confirm that all internal links and sitemap URLs use `https://www.longrichpower.com/`, not the legacy `http://longrichpower.com/` variant.

## Decision rules
- Not indexed + live test eligible: Request Indexing.
- Indexed but 0 impressions: do not request indexing repeatedly; strengthen internal links and wait for recrawl.
- Impressions > 0, average position 8-30: expand the existing page before creating a new page.
- Impressions > 0, CTR low: improve title/meta around the actual query wording.
- Query intent does not match page: adjust internal-link anchor text or create a dedicated page only when the gap is clear.
- Page produces clicks but no inquiry actions: improve product/RFQ CTA rather than adding more traffic content.

## Product snippet policy for B2B pages
Do not fabricate `offers`, `review`, or `aggregateRating`. For quote-only B2B pages without a public sell price or genuine reviews, use truthful WebPage/entity semantics instead of forcing retail Product rich-result eligibility.

## Weekly KPI
- Indexed URLs / known URLs
- P0 indexed pages / 5
- Site-wide organic impressions
- Site-wide organic clicks
- Site-wide CTR
- Site-wide average position
- P0 total impressions
- P0 total clicks
- Number of P0 queries in Top 30
- Number of P0 queries in Top 10
- Organic visits to RFQ page
- Email / WhatsApp / RFQ clicks from organic landing pages
