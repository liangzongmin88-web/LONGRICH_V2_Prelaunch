# LONGRICH P0 Search Console Baseline

Date started: 2026-09-04

## Current indexation status

### Core P0 pages
- /travel-adapter-manufacturer.html — Indexed
- /oem-odm-travel-adapter.html — Indexed
- /universal-travel-adapters.html — Indexed
- /gan-travel-adapter.html — Indexed
- /nt011-us.html — Indexed

P0 indexation: **5 / 5 = 100%**

### Six priority www pages checked on 2026-09-04
All six returned the same Google Search Console result: **URL is on Google / Indexed / HTTPS valid**.

| Page | Google status | Index status | Enhancements |
|---|---|---|---|
| /oem-odm-travel-adapter.html | On Google | Indexed | HTTPS; 1 valid breadcrumb item |
| /70w-gan-travel-adapter-full-load-test.html | On Google | Indexed | HTTPS; 1 valid breadcrumb item |
| /manufacturing.html | On Google | Indexed | HTTPS |
| /quality-testing.html | On Google | Indexed | HTTPS |
| /grounding-continuity-test-travel-adapter.html | On Google | Indexed | HTTPS; 1 valid breadcrumb item |
| /travel-adapter-quality-control-process.html | On Google | Indexed | HTTPS; 1 valid breadcrumb item |

Conclusion: the priority www pages are no longer an indexation problem. Do not request indexing again unless a materially changed page needs recrawling.

## Site-wide GSC snapshot
Snapshot date: 2026-09-04 (index report last updated 2026-08-28)

- Known URLs: 82
- Indexed in report snapshot: 19
- Not indexed in report snapshot: 63

Important: this site-wide report lags URL Inspection. Several pages now confirmed indexed may still appear inside older report buckets until Google refreshes the report.

## Host canonicalization
- Primary host: https://www.longrichpower.com/
- Vercel domain configuration: `longrichpower.com` permanently redirects (308) to `www.longrichpower.com`.
- Sitemap uses only `www.longrichpower.com` URLs.
- Treat non-www GSC discovery entries as legacy/duplicate-host noise; do not request indexing for non-www URLs.

## 28-day Search Performance baseline
Captured from GSC on 2026-09-04.

- Total clicks: 3
- Total impressions: 98
- CTR: 3.1%
- Average position: 30.9

### Visible query signals
| Query | Clicks | Impressions | Interpretation |
|---|---:|---:|---|
| uk power strip market | 0 | 10 | Strongest early topic signal for power-strip market content. |
| power strip market | 0 | 7 | Confirms power-strip topic relevance. |
| longrich | 0 | 2 | Brand discovery signal. |
| difference between travel adapter and power adapter | 0 | 2 | Buyer education opportunity. |
| what is a travel adapter | 0 | 2 | Informational long-tail signal. |
| 45w vs 70w travel adapter | 0 | 1 | Direct buyer-guide signal. |
| nt011 | 0 | 1 | Model-level query signal. |
| difference between voltage converter and adapter | 0 | 1 | Comparison-content signal. |
| global plug power adapter manufacturer | 0 | 1 | Commercial manufacturer-intent signal. |

### Visible landing-page signals
| Page | Clicks | Impressions | CTR | Current action |
|---|---:|---:|---:|---|
| / | 1 | 13 | 7.7% | Preserve; use as internal-link authority hub. |
| /nt009-uk.html | 1 | 3 | 33.3% | Keep stable; strengthen relevant UK links only. |
| /why-travel-adapters-fall-out-of-wall-sockets.html | 1 | 3 | 33.3% | Strong engineering/GEO signal; preserve and expand cluster links. |
| /power-strips-wall-outlets.html | 0 | 28 | 0% | GSC-driven title/H1/market alignment completed; wait for recrawl. |
| /about-us.html | 0 | 16 | 0% | Monitor query intent before rewriting. |
| /nt011-us.html | 0 | 12 | 0% | GSC-driven model/CTR optimization completed; wait 7–14 days. |
| /20w-vs-45w-vs-70w-travel-adapter.html | 0 | 8 | 0% | GSC-driven 45W vs 70W optimization completed; wait 7–14 days. |
| /nt009-all.html | 0 | 8 | 0% | Next candidate for query-level analysis. |

## Current phase
The site has moved from **indexation recovery** to **ranking and CTR growth** for priority pages.

### Next execution order
1. Collect 28-day page-filtered queries for `/nt009-all.html`.
2. Collect page-filtered queries for `/about-us.html` only if impressions continue rising.
3. Recheck `/power-strips-wall-outlets.html`, `/nt011-us.html`, and `/20w-vs-45w-vs-70w-travel-adapter.html` after 7–14 days before making another change.
4. Continue weekly monitoring of impressions, clicks, CTR, average position, Top 30 queries and Top 10 queries.
5. Do not bulk-request indexing for already indexed www pages or non-www redirect variants.

## Decision rules
- Indexed + impressions: optimize ranking/CTR, not indexation.
- Indexed + 0 impressions: improve internal links and topical relevance; wait for recrawl.
- Average position 8–30: expand the existing page before creating new content.
- Impressions with low CTR: improve title/meta around actual query wording.
- Clicks without inquiry actions: improve RFQ / WhatsApp / email conversion path.
- Non-www URL: rely on permanent redirect to canonical www version; do not request indexing.

## Product snippet policy for B2B pages
Do not fabricate `offers`, `review`, or `aggregateRating`. Quote-only B2B pages should use truthful WebPage/entity semantics instead of forcing retail Product rich-result eligibility.

## Weekly KPI
- Priority pages indexed / total priority pages
- Organic impressions
- Organic clicks
- CTR
- Average position
- Queries in Top 30
- Queries in Top 10
- Organic visits to RFQ
- RFQ / email / WhatsApp clicks from organic landing pages
