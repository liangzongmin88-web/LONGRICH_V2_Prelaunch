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
| /travel-adapter-manufacturer.html | travel adapter manufacturer / travel adapter factory | Indexed | None shown | Do not request indexing; move to Performance/query optimization |
| /oem-odm-travel-adapter.html | OEM travel adapter manufacturer | Not indexed — Discovered, currently not indexed | Sitemap discovered; no referring page detected in GSC snapshot; never crawled | Run Live Test, then Request Indexing if eligible; strengthen crawl priority |
| /universal-travel-adapters.html | universal travel adapter supplier | Indexed | None shown | Do not request indexing; move to Performance/query optimization |
| /gan-travel-adapter.html | GaN travel adapter OEM | Indexed | None shown | Do not request indexing; move to Performance/query optimization |
| /nt011-us.html | 70W GaN travel adapter manufacturer / OEM | Indexed | Product snippet: 1 invalid item | Keep indexed; fix or intentionally remove unsupported Product rich-result markup |

P0 indexation: 4 / 5 = 80%

## Immediate execution order
1. `/oem-odm-travel-adapter.html`: click **Test Live URL**. If HTTP 200, indexable and self-canonical are confirmed, click **Request Indexing**.
2. Increase crawl priority for the OEM/ODM page with visible internal links from indexed authority pages (Manufacturer, Universal Travel Adapters, GaN and Engineering Resources).
3. `/nt011-us.html`: inspect the Product snippets error details. Current schema has Product name/specification data but no `offers`, `review`, or `aggregateRating`.
4. Because LONGRICH is using the page as a B2B RFQ page rather than a public retail checkout page, do **not** invent price/review/rating data. Either keep the Product entity and accept that it is not eligible for Product snippets, or remove Google-targeted Product rich-result markup while retaining WebPage/entity semantics.
5. For the four indexed P0 pages, collect Performance > last 28 days > exact Page filter and record impressions, clicks, CTR, average position and top query.

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
Google Product snippets require a Product `name` plus at least one of `offers`, `review`, or `aggregateRating`. Do not fabricate any of these fields. For quote-only B2B pages without a public sell price or genuine reviews, rich-result eligibility is optional and should not override data accuracy.

## Weekly KPI
- Indexed URLs / known URLs
- P0 indexed pages / 5
- P0 total impressions
- P0 total clicks
- Number of P0 queries in Top 30
- Number of P0 queries in Top 10
- Organic visits to RFQ page
- Email / WhatsApp / RFQ clicks from organic landing pages
