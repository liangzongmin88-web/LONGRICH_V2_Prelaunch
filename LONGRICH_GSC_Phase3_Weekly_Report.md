# LONGRICH GSC Phase 3.1 Weekly Report

**Report date:** 2026-09-13  
**GSC data freshness:** through approximately 2026-09-10; interface last updated about 5.5 hours before extraction  
**Operating rule:** 7-day freeze remains active for SEO core elements. Technical defects may be fixed.

## Executive summary

Sitewide 7-day visibility improved from 110 to 169 impressions (+53.6%) and clicks improved from 3 to 6 (+100%). CTR rose from 2.7% to 3.6%, while average position moved from 24.0 to 27.5. The 28-day view reports 309 impressions and 9 clicks, but the previous comparison window is empty because this GSC property does not yet have a mature historical baseline; percentage growth is not meaningful.

The PUSH page /power-strips-wall-outlets.html improved from position 40.8 to 27.3 while impressions increased from 23 to 28. It is not yet a CTR-edit candidate because its position is outside 4–20. Continue authority and internal-link work after the freeze, without changing its core SEO elements now.

## Sitewide KPI dashboard

| Window | Clicks | Impressions | CTR | Average position | Interpretation |
|---|---:|---:|---:|---:|---|
| Last 7 days | 6 | 169 | 3.6% | 27.5 | Visibility and clicks increased; average position weakened as more queries/pages entered the result set. |
| Previous 7 days | 3 | 110 | 2.7% | Baseline. |
| Last 28 days | 9 | 309 | 2.9% | Early baseline only. |
| Previous 28 days | 0 | 0 | 0% | Insufficient history; do not calculate growth. |

## Priority pages — 7 days

| Page | Clicks | Impressions | CTR | Position | Previous 7d | Decision |
|---|---:|---:|---:|---:|---|---|
| /power-strips-wall-outlets.html | 0 | 28 | 0% | 27.3 | 0 clicks / 23 imp / 40.8 | +5 impressions; position improved 13.5. PUSH, not CTR edit. |
| /20w-vs-45w-vs-70w-travel-adapter.html | 0 | 19 | 0% | 8.8 | 0 / 14 / 9.5 | +5 impressions; HOLD and frozen. |
| /about-us.html | 0 | 8 | 0% | 5.0 | 0 / 8 / 5.0 | Stable; OBSERVE as entity/trust page. |
| /nt009-all.html | 0 | 6 | 0% | 5.8 | 0 / 11 / 5.7 | Impressions declined; HOLD, no rewrite. |
| /nt011-us.html | 0 | 1 | 0% | 8.0 | 0 / 12 / 15.8 | Position improved on very low volume; HOLD + OBSERVE. |

## Priority pages — 28 days

| Page | Clicks | Impressions | CTR | Position | Level | Decision |
|---|---:|---:|---:|---:|---|---|
| /power-strips-wall-outlets.html | 0 | 63 | 0% | 37.3 | Action | Ranking/authority action, not CTR action. |
| /20w-vs-45w-vs-70w-travel-adapter.html | 0 | 33 | 0% | 9.1 | Action | Numerical CTR screen met, but frozen/HOLD; no metadata edit. |
| /about-us.html | 0 | 25 | 0% | 10.6 | Watch | Observe entity and manufacturer-query movement. |
| /nt009-all.html | 0 | 17 | 0% | 5.8 | Watch | HOLD; preserve Top 10. |
| /nt011-us.html | 0 | 13 | 0% | 15.2 | Signal | HOLD + OBSERVE. |

## Query signals

Top visible relevant 7-day queries include power strip market (11 impressions, position 35.8), uk power strip market (5, 41.0), tower power strip (4, 22.8), 45w vs 70w travel adapter (2, 4.0), nt009 (2, 7.5), and nt011 (1, 3.0).

New or continuing B2B queries include variants of ODM AC DC adapter manufacturer, adapter factory developments, power adapter ODM supplier, global plug power adapter manufacturer, travel adapter supplier, European standard power strip factory, and voltage converter ODM. Each has only 1–2 impressions. They are early commercial signals; none reaches the 5-impression Strategic B2B threshold or the two-week/15-impression commercial-expansion threshold.

Model-query monitoring found nt009 (2 impressions, position 7.5) and nt011 (1 impression, position 3.0). No visible NT010, WPG, ECS, or TUS query reached the exported table this week.

## Freeze and page state

| Page | State | Last core SEO edit | Earliest review | This week's action |
|---|---|---|---|---|
| /nt009-all.html | HOLD | 2026-09-08 | 2026-09-16 | Monitor only. |
| /20w-vs-45w-vs-70w-travel-adapter.html | HOLD | 2026-09-08 | 2026-09-16 | SERP diagnosis only; no metadata edit. |
| /nt011-us.html | HOLD + OBSERVE | 2026-09-08 | 2026-09-16 | Monitor only. |
| /power-strips-wall-outlets.html | PUSH | 2026-09-08 | 2026-09-16 | Plan internal links and authority; no core edit. |
| /about-us.html | OBSERVE | 2026-09-08 | 2026-09-16 | No edit. |

## Technical validation

- Architecture: 81 HTML pages; 30 product URLs preserved; 12 architecture routes; 79 current Sitemap entries; broken internal links 0.
- Product schema: 30/30; JSON-LD parse errors 0; canonical issues 0; PRODUCT_IMAGE_LOCK violations 0.
- Site validation: 65 validated pages, 63 indexable pages, 63 unique canonicals, errors 0.
- Live HTTP recheck: all five priority URLs were fetchable; the two URLs that produced a transient search-tool 502 were independently rechecked with HTTP HEAD and returned 200 from Vercel.
- Four case-study pages lacked visible Breadcrumb navigation. A minimal visible Breadcrumb was added without changing Title, Meta, H1, canonical, body claims, or Schema. All validators pass after the fix.
- The current validator count is 79 Sitemap entries. This report records repository state and does not change Sitemap architecture.

## Internal-link PUSH audit

Existing links to /power-strips-wall-outlets.html are present from /power-strips/, /manufacturing.html, and /engineering-resources.html. Links are absent from /ecs-us013.html, /wpg05.html, /wpg01.html, /ecs-bs019.html, /resources/, and /resources/market-insights/. Because those pages were changed on 2026-09-08, defer additions until the freeze review on 2026-09-16.

## Authority, trust, and conversion

- Verified new backlinks acquired: **0**. Three qualified opportunities are recorded; no outreach or submission was performed.
- Factory evidence includes assembly, SMT/PCBA, integrated production, USB testing, and Hi-Pot imagery plus the stated six assembly lines.
- Main trust gaps: central certificate evidence with verified screenshots/scope; dated factory video; reviewer attribution on technical resources; evidence owners and refresh dates.
- Lead instrumentation exists for RFQ views/attempts/errors, email handoff, email and WhatsApp clicks, UTM parameters, click IDs, source page, and lead reference.
- Organic sessions and CRM outcomes were not accessible. Organic Leads, qualified leads, samples, RFQs, and orders are **not available**, not zero.
- No Conversion Review is triggered because no verified page has both 30+ organic clicks and confirmed zero leads.

## Required weekly conclusions

1. **Impression growth with low CTR:** /power-strips-wall-outlets.html, the 20W/45W/70W guide, /products.html, /travel-adapter-manufacturer.html, /universal-travel-adapters.html, /voltage-converters.html, and /oem-odm-travel-adapter.html showed growth with 0% CTR.
2. **Position 4–20 opportunities:** the 20W/45W/70W guide, /about-us.html, /nt009-all.html, and /nt011-us.html; volume and freeze status prevent immediate core edits.
3. **New B2B commercial queries:** multiple manufacturer/supplier/OEM/ODM/factory variants appeared at 1–2 impressions; record only.
4. **New model queries:** NT009 and NT011 are visible; NT010/WPG/ECS/TUS are not visible in current rows.
5. **CTR optimization threshold:** only the 20W/45W/70W guide passes the 28-day numerical screen, but it is frozen and HOLD.
6. **Frozen pages:** all five priority pages remain frozen through 2026-09-15; review on 2026-09-16.
7. **HOLD pages:** /nt009-all.html, /20w-vs-45w-vs-70w-travel-adapter.html, /nt011-us.html.
8. **PUSH page:** /power-strips-wall-outlets.html; ranking and authority work takes priority over CTR changes.
9. **New backlinks:** 0 verified.
10. **Backlink opportunities:** HKTDC Sourcing supplier profile, Global Sources verified supplier profile, and GlobalSpec power-strip supplier directory; all require review.
11. **Trust-content gaps:** verified certificate assets/scope, factory video, technical reviewer labels, and evidence ownership/refresh dates.
12. **Organic leads:** unavailable because analytics/CRM outcome data was not accessible; do not infer zero.
13. **Traffic without inquiries:** not determinable without joined landing-page and lead data; no CRO action is triggered.
14. **Next-week Top 5:** listed below.

## Next-week Top 5 actions

1. On 2026-09-16, re-check freeze status and pull fresh 7-day/28-day GSC data before any edit.
2. If the trend persists, add natural links to /power-strips-wall-outlets.html from ECS-US013, WPG05, WPG01, ECS-BS019, Resources, and Market Insights in one focused change set.
3. Repeat SERP diagnosis for the 20W/45W/70W guide; change Title/Meta only if all CTR conditions still hold.
4. Qualify the three authority opportunities for ownership, verification, listing rules, link attributes, and real traffic; do not submit until approved.
5. Connect GA4/Search Console landing-page data with RFQ/CRM outcomes so conversion KPIs become measurable.
