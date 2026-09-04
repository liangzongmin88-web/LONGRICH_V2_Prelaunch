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

## P0 pages

| Page | Primary query intent | Index status | Impressions (28d) | Clicks (28d) | CTR | Avg position | Top query | Next action |
|---|---|---|---:|---:|---:|---:|---|---|
| /travel-adapter-manufacturer.html | travel adapter manufacturer / travel adapter factory | Verify individually |  |  |  |  |  | P0 URL Inspection; Request Indexing if eligible and not indexed |
| /oem-odm-travel-adapter.html | OEM travel adapter manufacturer | Verify individually |  |  |  |  |  | P0 URL Inspection; Request Indexing if eligible and not indexed |
| /universal-travel-adapters.html | universal travel adapter supplier | Verify individually |  |  |  |  |  | P0 URL Inspection; Request Indexing if eligible and not indexed |
| /gan-travel-adapter.html | GaN travel adapter OEM | Verify individually |  |  |  |  |  | P0 URL Inspection; Request Indexing if eligible and not indexed |
| /nt011-us.html | 70W GaN travel adapter manufacturer / OEM | Verify individually |  |  |  |  |  | P0 URL Inspection; Request Indexing if eligible and not indexed |

## Immediate execution order
1. Inspect the five P0 URLs individually in GSC URL Inspection.
2. For each P0 URL that is not indexed, run Live Test and Request Indexing only if HTTP 200, indexable and self-canonical are confirmed.
3. Open the 55-URL "Discovered - currently not indexed" group and identify which URLs are current sitemap URLs versus old/obsolete URLs.
4. Open the 2-URL "Crawled - currently not indexed" group and review those pages first for thin/duplicate content or canonical conflict.
5. Review the 4 redirects, 1 duplicate and 1 alternate-canonical URL; remove only accidental sitemap/internal-link references.
6. After P0 inspection, record 28-day Performance metrics for each indexed P0 page.

## GSC collection method
For each URL:
1. URL Inspection -> confirm whether URL is on Google.
2. Performance -> Search results -> Page filter -> exact URL.
3. Use last 28 days for the first baseline.
4. Record impressions, clicks, CTR and average position.
5. Open Queries tab and record the highest-impression relevant query.

## Decision rules
- Not indexed + live test eligible: Request Indexing.
- Indexed but 0 impressions: do not request indexing repeatedly; strengthen internal links and wait for recrawl.
- Impressions > 0, average position 8-30: expand the existing page before creating a new page.
- Impressions > 0, CTR low: improve title/meta around the actual query wording.
- Query intent does not match page: adjust internal-link anchor text or create a dedicated page only when the gap is clear.
- Page produces clicks but no inquiry actions: improve product/RFQ CTA rather than adding more traffic content.

## Weekly KPI
- Indexed URLs / known URLs
- P0 indexed pages / 5
- P0 total impressions
- P0 total clicks
- Number of P0 queries in Top 30
- Number of P0 queries in Top 10
- Organic visits to RFQ page
- Email / WhatsApp / RFQ clicks from organic landing pages

## Public-search note
Public web search is only a secondary signal and should not be treated as a replacement for GSC URL Inspection. Exact P0 URL index state must be confirmed in Search Console.
