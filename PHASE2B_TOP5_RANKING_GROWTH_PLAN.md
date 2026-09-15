# LONGRICH Phase 2B Top 5 Ranking Growth Plan

**Site:** https://www.longrichpower.com
**Production baseline:** `origin/main` / `4ae16b1ba09cb90e081cb42e09f38e7eb970646c`
**Audit date:** 2026-09-08
**GSC data through:** 2026-09-06
**Scope:** Analysis and minimal-change planning only. No page changes, deployment, merge, indexing request or SEO publication were performed.

> **不要为了“做 SEO”而改已经开始排名的页面。先保护排名，再只对确定有 CTR / 内链 / CTA 机会的地方做最小改动。**

## 1. Executive Summary

The five pages should not be treated as five editing jobs. Four already have the requested answer-first copy, product/evidence links and RFQ paths; three have Top-10 or Top-5 signals at very small sample sizes. Their correct action is protection and monitoring.

The only page suitable for active work is `/power-strips-wall-outlets.html`, but not through another Title/Meta rewrite. Its current production Title, Meta and H1 already target manufacturer/OEM/regional B2B intent, while the available GSC data ends on September 6 and therefore predates the September 8 production baseline. Its 0% CTR at average position 40.3 is mainly a ranking/content-authority issue, not a valid snippet-test result. The safe action is at most two relevant inbound internal links, followed by measurement.

No technical errors were found in the five pages: all have self-referencing canonicals, appropriate schema, crawlable internal links and RFQ routes. Product data, images, URLs, H1s and specifications must remain unchanged.

## 2. Top 5 Pages

| Page | Page-level Clicks | Page-level Impressions | CTR | Average Position | Primary Query Signal | Recommended Action | Score | Priority |
|---|---:|---:|---:|---:|---|---|---:|---|
| `/can-70w-travel-adapter-charge-laptop.html` | 0 | 8 | 0% | 4.4 | 70W laptop charging; query detail withheld | HOLD | 82 | P1 |
| `/nt009-all.html` | 0 | 14 | 0% | 5.6 | `nt009`: 3 impressions, position 5.0; correct primary page | HOLD | 85 | P1 |
| `/nt011-us.html` | 0 | 12 | 0% | 15.8 | `nt011`: generic query primarily lands on NT011-ALL; NT011-US secondary at position 8 | HOLD | 78 | P1 |
| `/20w-vs-45w-vs-70w-travel-adapter.html` | 0 | 18 | 0% | 8.6 | `45w vs 70w travel adapter`: 2 impressions, position 5.0 | HOLD | 87 | P1 |
| `/power-strips-wall-outlets.html` | 0 | 44 | 0% | 40.3 | `uk power strip market`: 15 impressions, position 41.8 | INTERNAL LINK ONLY | 74 | P2 |

The score measures opportunity and business value, not permission to edit. A high-scoring page can still be a HOLD when ranking is strong and the sample is too small.

## 3. Page-by-Page Recommendation

### 3.1 `/can-70w-travel-adapter-charge-laptop.html`

```text
Page: /can-70w-travel-adapter-charge-laptop.html
Primary Query: can a 70W travel adapter charge a laptop? (page-level signal; query row withheld)
Current Clicks: 0
Current Impressions: 8
CTR: 0%
Average Position: 4.4
Intent: Informational with strong product-evaluation intent
Current Title: Can a 70W Travel Adapter Charge a Laptop? | LONGRICH
Current Meta: Learn when a 70W USB-C travel adapter can charge a laptop or MacBook, and how USB-C PD profiles, port allocation, cables and device requirements affect charging.
Current H1: Can a 70W Travel Adapter Charge a Laptop?
Primary Internal Links: NT011-US; 70W full-load test; 20W/45W/70W comparison; Travel Adapters category
Relevant Product: NT011-US; NT011-ALL is not directly linked
CTA: “Discuss a 70W OEM Project” → RFQ, plus global Request a Quote
Schema: Organization + Article + BreadcrumbList + FAQPage
Risk Level: High — current average position is Top 5 with only 8 impressions
Recommended Action: HOLD
```

Assessment:

- Title and H1 exactly match the 70W/laptop question.
- The opening paragraph is already answer-first: “Yes—when…” followed by PD profile, per-port output, cable and power-sharing conditions.
- The page already explains MacBook, iPad, iPhone, single-device and multi-device behavior in a structured table.
- NT011-US, the full-load test, comparison guide and OEM RFQ are already present.
- The absence of an additional NT011-ALL link is not a defect. NT011-US is the most relevant representative product and adding another product choice is not justified at 8 impressions.

**Decision:** No change. Do not alter Title, H1, Meta, URL, answer block or CTA.

### 3.2 `/nt009-all.html`

```text
Page: /nt009-all.html
Primary Query: nt009
Current Clicks: 0
Current Impressions: 14
CTR: 0%
Average Position: 5.6
Intent: Product / model; transactional B2B evaluation
Current Title: 20W OEM Travel Adapter for Global Retail | NT009-ALL
Current Meta: NT009-ALL is a compact 20W OEM universal travel adapter for multi-country retail ranges, with 2 USB-C, 1 USB-A and four integrated plug options.
Current H1: 20W OEM Travel Adapter for Multi-Country Retail
Primary Internal Links: /travel-adapters/; wall-stability guide; universal-vs-country-specific guide; wattage comparison; NT010; NT011-US
Relevant Product: NT009-ALL
CTA: Model-prefilled NT009-ALL RFQ; OEM evaluation; email sales
Schema: Organization + Product + Brand + PropertyValue + BreadcrumbList
Risk Level: High — model query is at position 5 with only 3 disclosed query impressions
Recommended Action: HOLD
```

Assessment:

- Product schema is complete and model-aligned.
- The `/travel-adapters/` category lists and links NT009-ALL as a representative product, so category-to-product support is correct.
- The product page links back to the category and to three relevant buying guides.
- CTA is explicit and model-prefilled.
- The Title is not literally model-first, but changing it now would trade a theoretical formatting preference against a real Top-5 model-query signal. There is no adequate CTR sample to justify that risk.

**Decision:** No change. Reconsider a Title/Meta test only after at least 30–50 impressions for the model query and a persistent 0% CTR.

### 3.3 `/nt011-us.html`

```text
Page: /nt011-us.html
Primary Query: NT011-US / 70W GaN travel adapter; generic “nt011” currently favors NT011-ALL
Current Clicks: 0
Current Impressions: 12
CTR: 0%
Average Position: 15.8
Intent: Product / model; commercial and transactional
Current Title: 70W GaN Travel Adapter Manufacturer | NT011-US OEM | LONGRICH
Current Meta: NT011-US 70W GaN universal travel adapter for OEM/ODM projects with 3 USB-C, 1 USB-A, global plug system and factory engineering support.
Current H1: NT011-US 70W GaN Universal Travel Adapter for OEM Projects.
Primary Internal Links: /travel-adapters/; laptop-charging guide; 70W full-load test; wattage comparison; NT009-ALL; NT010
Relevant Product: NT011-US; NT011-ALL is correctly positioned for broader multi-country intent
CTA: Model-prefilled NT011-US RFQ; OEM evaluation; email sales
Schema: Organization + WebPage + Product + Brand + PropertyValue + BreadcrumbList + FAQPage
Risk Level: High — low sample and a deliberate US-versus-ALL intent split
Recommended Action: HOLD
```

Assessment:

- The generic `nt011` query was confirmed on `/nt011-all.html` as primary, with `/nt011-us.html` appearing once as a secondary result. This is not confirmed harmful cannibalization: the ALL page serves generic/global intent and the US page serves US/JP intent.
- The H1 is model-first and explicitly states 70W GaN, universal adapter and OEM.
- Title also includes NT011-US, 70W GaN, manufacturer and OEM, although not in model-first order. The current 12 page impressions are below the test threshold.
- Laptop-charging, full-load-test and RFQ paths are already present multiple times.

**Decision:** CTR watch only; no page change. Do not consolidate, canonicalize or retitle either NT011 page.

### 3.4 `/20w-vs-45w-vs-70w-travel-adapter.html`

```text
Page: /20w-vs-45w-vs-70w-travel-adapter.html
Primary Query: 45w vs 70w travel adapter
Current Clicks: 0
Current Impressions: 18
CTR: 0%
Average Position: 8.6
Intent: Comparison / B2B product selection
Current Title: 45W vs 70W Travel Adapter: Which Should Buyers Choose? | LONGRICH
Current Meta: Compare 45W vs 70W travel adapters for MacBook, iPad, iPhone and multi-device charging, with 20W as the compact option. Review size, heat, cost and OEM positioning.
Current H1: 45W vs 70W Travel Adapter: Which Power Level Fits Your Market?
Primary Internal Links: NT009-ALL; NT010; NT011-US; laptop-charging guide; full-load test; GaN guide; OEM/ODM page
Relevant Product: NT009, NT010 and NT011 platforms
CTA: “Discuss Your Product Requirement” → RFQ; OEM/ODM options
Schema: Organization + Article + BreadcrumbList + FAQPage
Risk Level: High — query is at position 5 and page average is Top 10 with a small sample
Recommended Action: HOLD
```

Assessment:

- The first paragraph already gives the direct 45W-versus-70W answer and positions 20W.
- The comparison matrix covers typical devices, laptop use, enclosure pressure, thermal challenge, retail positioning and representative product platforms.
- Dedicated sections cover 20W, 45W and 70W; phone, tablet and laptop; single/multi-device use; and B2B specification decisions.
- All requested product, evidence, laptop-guide and RFQ links are present.

**Decision:** No additional comparison table, FAQ, answer paragraph or Title edit. Adding duplicate support would increase page length without closing a demonstrated gap.

### 3.5 `/power-strips-wall-outlets.html`

```text
Page: /power-strips-wall-outlets.html
Primary Query: uk power strip market; supporting cluster: power strip market / manufacturer / OEM
Current Clicks: 0
Current Impressions: 44
CTR: 0%
Average Position: 40.3
Intent: B2B sourcing plus regional market research
Current Title: OEM Power Strip Manufacturer | US, UK, EU & AU | LONGRICH
Current Meta: Compare OEM power strip, tower power strip and wall outlet platforms for US, UK, EU and AU markets. Review ratings, USB options and private-label support.
Current H1: OEM Power Strip Manufacturer for US, UK, EU & AU Markets
Primary Internal Links: /power-strips/; /wall-outlet-extenders/; /tower-power-strips/; OEM/ODM; all nine representative ECS/WPG product pages
Relevant Product: ECS-US013, ECS-US019, ECS-BS019, ECS-EU010, ECS-EU016, ECS-AUS03, ECS-AUS05, WPG01, WPG05
CTA: Prefilled Power Strip RFQ; OEM/ODM process; global Request a Quote
Schema: WebPage + BreadcrumbList + ItemList + FAQPage
Risk Level: Medium — largest sample, but average position is too low for a reliable CTR conclusion and the current snippet predates available GSC measurement
Recommended Action: INTERNAL LINK ONLY
```

Assessment:

- Current Title, Meta and H1 already contain OEM/manufacturer, regions and B2B platform language.
- The page contains the Power Strips and Wall Outlet Extenders category links, nine representative product links, US/UK/EU/AU sourcing information, OEM process and a prefilled RFQ.
- A 0% CTR at position 40.3 is not evidence that the new Title/Meta failed. Searchers rarely see results at this depth, and the available GSC data predates the current production version.
- The page's safe growth lever is inbound internal authority from closely related hub/factory pages. Do not add more repeated links inside this already-complete page.

**Decision:** Add at most two inbound contextual links from supporting pages, then hold for 7–14 days. No Title, Meta or H1 test now.

## 4. Do Not Touch Yet

- `/can-70w-travel-adapter-charge-laptop.html` — average position 4.4, 8 impressions; exact intent match and complete answer/product/test/RFQ path.
- `/nt009-all.html` — page average 5.6; `nt009` query position 5; 14 page impressions and only 3 disclosed query impressions.
- `/nt011-us.html` — 12 page impressions; generic model intent is deliberately split between ALL and US variants; no evidence of harmful cannibalization.
- `/20w-vs-45w-vs-70w-travel-adapter.html` — page average 8.6 and exact comparison query position 5; requested content and links already exist.

For these pages, do not change Title, H1, Meta, URL, canonical, schema, product data, SKU, product image, specifications or main content. Do not request indexing for unchanged pages.

## 5. CTR Opportunities

There is no page eligible for an immediate Title/Meta test.

| Page | CTR diagnosis | Test eligibility |
|---|---|---|
| 70W laptop guide | Insufficient sample; Top-5 protection dominates | Wait for ≥30 impressions, preferably 50 |
| NT009-ALL | Insufficient model-query sample | Wait for ≥30–50 model-query impressions |
| NT011-US | Insufficient sample; query-to-variant intent still developing | Wait for ≥20–30 relevant impressions and verify landing page |
| Wattage comparison | 18 page impressions, only 2 exact-query impressions | Wait for ≥30 exact-cluster impressions |
| Power strips / wall outlets | Position 40.3 means ranking, not snippet, is the constraint; current snippet is newer than GSC data | Wait for recrawl and ≥30 post-change impressions; only test when position is consistently ≤20 |

Future test direction for the power-strip page, if it becomes eligible: test one variable at a time. The current Title is already the control. Do not add `supplier` merely to stack keywords unless GSC shows supplier-intent impressions on this page.

## 6. Internal Link Opportunities

Safe, minimal proposals—maximum two changes, both pointing **into** the power-strip commercial page rather than altering ranked travel-adapter pages:

1. On `/power-strips/`, add one contextual link near the buyer-resource section to `/power-strips-wall-outlets.html` with the anchor **“Compare Regional Power Strip & Wall Outlet Platforms”**.
2. On `/manufacturing.html`, add one contextual link from the relevant production-capability section to `/power-strips-wall-outlets.html` with the anchor **“OEM power strip platforms”**.

Do not add sitewide/footer links: the page already receives navigation and homepage buyer-resource links. Do not add extra links to NT009, NT011 or the comparison page; their current product/category/guide relationships are already sufficient.

## 7. CTA Opportunities

No immediate CTA-only change is justified.

- The 70W laptop guide has a topic-specific 70W OEM CTA.
- NT009-ALL and NT011-US have model-prefilled RFQ links plus email.
- The comparison guide has a requirement-discussion RFQ and OEM/ODM route.
- The power-strip page has a prefilled Power Strip RFQ, OEM process link and final OEM quote CTA.

First verify GA4 events (`begin_lead`, `generate_lead_view`, `generate_lead`, `contact_click`) before adding another CTA. Presence is already strong; conversion performance is the missing evidence.

## 8. Priority Score

Weights: Current Ranking Signal 30; Commercial Intent 25; CTR Opportunity 20; Product Fit 15; Conversion Readiness 10.

| Page | Ranking /30 | Commercial /25 | CTR /20 | Product Fit /15 | Conversion /10 | Total | Priority | Action |
|---|---:|---:|---:|---:|---:|---:|---|---|
| Wattage comparison | 28 | 24 | 12 | 15 | 8 | 87 | P1 | HOLD |
| NT009-ALL | 30 | 25 | 5 | 15 | 10 | 85 | P1 | HOLD |
| 70W laptop guide | 30 | 20 | 7 | 15 | 10 | 82 | P1 | HOLD |
| NT011-US | 22 | 25 | 6 | 15 | 10 | 78 | P1 | HOLD |
| Power strips / wall outlets | 12 | 25 | 12 | 15 | 10 | 74 | P2 | INTERNAL LINK ONLY |

Scoring interpretation: the comparison and model pages score highly because they combine real ranking signals with excellent product fit. Their low CTR subscore reflects insufficient sample, which is why HOLD remains the correct action.

## 9. Exact Changes Proposed

### Safe to execute after approval

Only these two content-neutral internal-link additions:

```text
/power-strips/ → /power-strips-wall-outlets.html
Anchor: Compare Regional Power Strip & Wall Outlet Platforms
Purpose: Connect focused category discovery to the regional sourcing overview.
```

```text
/manufacturing.html → /power-strips-wall-outlets.html
Anchor: OEM power strip platforms
Purpose: Connect factory capability to the commercial product cluster.
```

### Not proposed

- No Title/Meta/H1 changes on any of the five pages.
- No answer-first addition: both informational pages already begin with direct answers.
- No new comparison/FAQ module: the comparison and power-strip pages already contain them.
- No new CTA: all five have appropriate RFQ paths.
- No extra schema, URL, canonical, product, image or specification change.

## 10. 7-Day Monitoring Plan

Record the same page-level metrics daily but make decisions only at the seven-day checkpoint:

| Check | What to record | Decision rule |
|---|---|---|
| GSC page metrics | Clicks, impressions, CTR, average position for all five pages | Do not react to one-day volatility |
| Query→page mapping | `nt009`, `nt011`, `45w vs 70w`, `70w laptop`, power-strip commercial/market terms | Flag only repeated wrong-page landings |
| Recrawl timing | Whether Google has refreshed the September 8 Title/Meta for the power-strip page | No snippet judgment before refresh |
| Protected-page rank | Laptop guide, NT009, comparison query | If stable Top 10, keep HOLD |
| Variant split | NT011-ALL vs NT011-US; NT009-ALL vs regional variants | No consolidation without meaningful volume and intent conflict |
| Conversion | Organic RFQ, email and WhatsApp events | CTA changes require measured drop-off, not assumption |

Day-7 decisions:

- Keep all protected pages unchanged if impressions remain below 20–30.
- Keep power-strip Title/Meta unchanged if average position remains above 20; improve topical authority rather than CTR copy.
- Consider a single Title/Meta test only after a page has a meaningful post-recrawl sample, stable relevant queries, position where the snippet is normally visible and persistent weak CTR.
- Extend monitoring to 14–28 days if the sample remains small. Small samples are a reason to wait, not a reason to edit.
