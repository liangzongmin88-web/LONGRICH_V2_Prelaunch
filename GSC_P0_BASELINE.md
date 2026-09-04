# LONGRICH P0 Search Console Baseline

Date started: 2026-09-04

## Purpose
Track the five highest-priority SEO/GEO acquisition pages after the P0 strengthening pass. Use Google Search Console as the source of truth for indexing, impressions, clicks, CTR and average position.

## P0 pages

| Page | Primary query intent | Index status | Impressions (28d) | Clicks (28d) | CTR | Avg position | Top query | Next action |
|---|---|---|---:|---:|---:|---:|---|---|
| /travel-adapter-manufacturer.html | travel adapter manufacturer / travel adapter factory | Verify in GSC |  |  |  |  |  | Request indexing only if not indexed; otherwise monitor queries |
| /oem-odm-travel-adapter.html | OEM travel adapter manufacturer | Verify in GSC |  |  |  |  |  | Strengthen based on query impressions |
| /universal-travel-adapters.html | universal travel adapter supplier | Verify in GSC |  |  |  |  |  | Watch 20W / 45W / 70W query variants |
| /gan-travel-adapter.html | GaN travel adapter OEM | Verify in GSC |  |  |  |  |  | Watch 45W / 70W / GaN OEM variants |
| /nt011-us.html | 70W GaN travel adapter manufacturer / OEM | Verify in GSC |  |  |  |  |  | Link search demand to NT011-US RFQ |

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
- P0 indexed pages / 5
- P0 total impressions
- P0 total clicks
- Number of P0 queries in Top 30
- Number of P0 queries in Top 10
- Organic visits to RFQ page
- Email / WhatsApp / RFQ clicks from organic landing pages

## Public-search note
Public web search is only a secondary signal and should not be treated as a replacement for GSC URL Inspection. The current public search surface visibly returns the LONGRICH homepage and its product/manufacturing content, but exact P0 URL index state must be confirmed in Search Console.
