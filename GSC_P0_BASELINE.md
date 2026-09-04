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

### Baseline interpretation
- Organic visibility has started: 98 impressions and 3 clicks within the current 28-day window.
- Average position 30.9 means most visible queries are still around page 3-4; the immediate SEO objective is to move relevant queries into Top 20 and then Top 10.
- Current visible demand is broader than the P0 travel-adapter commercial cluster. Power-strip market queries are already surfacing and should be preserved rather than overwritten.
- Do not create many generic articles yet. First identify which existing landing pages are earning these impressions, then improve those pages and internal links.

## P0 pages — URL Inspection result

| Page | Primary query intent | Index status | Current issue | Next action |
|---|---|---|---|---|
| /travel-adapter-manufacturer.html | travel adapter manufacturer / travel adapter factory | Indexed | None shown | Move to Performance/query optimization |
| /oem-odm-travel-adapter.html | OEM travel adapter manufacturer | Not indexed — Discovered, currently not indexed | Live Test passed: URL is indexable | Request Indexing, then monitor recrawl/indexing |
| /universal-travel-adapters.html | universal travel adapter supplier | Indexed | None shown | Move to Performance/query optimization |
| /gan-travel-adapter.html | GaN travel adapter OEM | Indexed | None shown | Move to Performance/query optimization |
| /nt011-us.html | 70W GaN travel adapter manufacturer / OEM | Indexed | Old GSC snapshot still shows invalid Product snippet | Current source now uses WebPage + Organization + BreadcrumbList and `og:type=website`; request recrawl and wait for old Product enhancement snapshot to clear |

P0 indexation: 4 / 5 = 80%

## Current execution status
- OEM/ODM page Live Test: PASSED; page is eligible for Google indexing.
- NT011-US Product rich-result markup: intentionally removed because this is a B2B RFQ page without public offers/reviews/ratings.
- NT011-US Open Graph type: changed from `product` to `website`.

## Immediate execution order
1. In GSC Performance, click the **Pages** tab and capture the top landing pages for the same 28-day period. This is the next required dataset.
2. For the top landing pages, record impressions, clicks, CTR and average position; map each page to its visible queries.
3. `/oem-odm-travel-adapter.html`: click **Request Indexing** now that Live Test passed.
4. `/nt011-us.html`: after deployment, run **Test Live URL** once; if the Product enhancement is absent in live test, click **Request Indexing** to refresh Google's stored version.
5. Open the 55-URL "Discovered - currently not indexed" group and export or screenshot the URL list so current pages can be separated from obsolete/low-priority URLs.
6. Open the 2-URL "Crawled - currently not indexed" group and inspect those two URLs individually for content duplication, thin content or canonical conflicts.

## GSC collection method
For each indexed P0 URL:
1. Performance -> Search results -> Page filter -> exact URL.
2. Use last 28 days for the first baseline.
3. Record impressions, clicks, CTR and average position.
4. Open Queries tab and record the highest-impression relevant query.

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
