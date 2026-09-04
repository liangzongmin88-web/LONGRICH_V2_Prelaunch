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
1. `/oem-odm-travel-adapter.html`: click **Request Indexing** now that Live Test passed.
2. `/nt011-us.html`: after deployment, run **Test Live URL** once; if the Product enhancement is absent in live test, click **Request Indexing** to refresh Google's stored version.
3. For the four indexed P0 pages, collect Performance > last 28 days > exact Page filter and record impressions, clicks, CTR, average position and top query.
4. Open the 55-URL "Discovered - currently not indexed" group and export or screenshot the URL list so current pages can be separated from obsolete/low-priority URLs.
5. Open the 2-URL "Crawled - currently not indexed" group and inspect those two URLs individually for content duplication, thin content or canonical conflicts.

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
- P0 total impressions
- P0 total clicks
- Number of P0 queries in Top 30
- Number of P0 queries in Top 10
- Organic visits to RFQ page
- Email / WhatsApp / RFQ clicks from organic landing pages
