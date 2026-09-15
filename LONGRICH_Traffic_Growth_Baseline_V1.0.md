# LONGRICH Phase 2 Traffic Growth Baseline V1.0

**Baseline date:** 2026-09-08
**GSC data through:** 2026-09-06
**Property:** `sc-domain:longrichpower.com`
**Primary host:** `https://www.longrichpower.com/`
**Phase:** Ranking & CTR Growth
**Decision rule:** analyze first; no SEO changes were published in this round.

## Measurement notes

- Sources: signed-in Google Search Console Performance, Generative AI, Pages, Sitemaps and Links reports; current repository HTML; prior tracked `AI_CITATION_WEEKLY_LOG.md`, `GSC_P0_BASELINE.md` and `ANALYTICS_CONVERSION_MAPPING.md`; focused public-web backlink checks.
- GSC's 28-day and 3-month selectors both contain only the site's young effective data range, 2026-08-21–2026-09-06. They therefore return the same 6 clicks / 205 impressions. The 3-month view is supporting evidence, not a mature trend.
- GSC reports 6 sitewide clicks but withholds those clicks from the visible query table. Query rows below are the visible, non-anonymized query subset; they must not be summed to sitewide clicks.
- `Confirmed` query-to-page mappings were opened in GSC. `Inferred` mappings are based on topic/page signals and require confirmation after volume grows. `Withheld` means GSC did not expose enough query detail.
- Average-position change is reported as latest minus previous; a negative number is an improvement.

## 1. Executive Summary

LONGRICH is no longer primarily an indexation-recovery project. GSC shows 62 indexed URLs, 75 URLs discovered in the current www sitemap submission, all 11 previously checked priority URLs indexed, 205 impressions and 6 clicks. The latest seven days produced 5 clicks and 148 impressions versus 1 click and 54 impressions in the previous seven days. That is +400% clicks, +174.1% impressions, +1.5 percentage points CTR and a 12.8-position improvement.

The data is still too small for broad CTR rewrites. Only one visible query meets the strict ranking-opportunity rule (position 4–20 and at least 5 impressions): `longrich link`, with 11 impressions, 0 clicks and position 7.9. Three visible queries qualify only for the 10-impression zero-click observation group. Model queries `nt009` and `nt011` are already at position 5, but have only 3 and 2 impressions respectively; both should be preserved and observed.

The best near-term work is narrow: protect the current Top-10 model/comparison rankings; diagnose the branded-query/entity mismatch without changing the homepage title yet; strengthen internal links and contextual conversion paths; allow recently changed pages to settle; publish at most two evidence-led pieces after validating demand; and begin genuine third-party authority building. GSC's Links report is still processing, and focused public checks found no independently confirmable backlink to `longrichpower.com`.

## 2. GSC Sitewide Baseline

| Window | Date range / effective range | Clicks | Impressions | CTR | Avg position |
|---|---|---:|---:|---:|---:|
| Last 7 Days | 2026-08-31–2026-09-06 | 5 | 148 | 3.4% | 24.5 |
| Previous 7 Days | 2026-08-24–2026-08-30 | 1 | 54 | 1.9% | 37.3 |
| Last 28 Days | selected; effective 2026-08-21–2026-09-06 | 6 | 205 | 2.9% | 28.0 |
| Last 3 Months | selected; effective 2026-08-21–2026-09-06 | 6 | 205 | 2.9% | 28.0 |

| WoW metric | Change |
|---|---:|
| Clicks | +400.0% |
| Impressions | +174.1% |
| CTR | +1.5 percentage points |
| Average position | -12.8 positions (improved) |

### Indexation

- GSC Pages report (updated 2026-09-04): **62 indexed**, **14 not indexed**.
- Exclusion reasons: 8 redirects, 3 404s, 1 duplicate without user-selected canonical, 1 alternate with proper canonical, 1 discovered-not-indexed.
- Current www sitemap: successful, submitted/read 2026-09-08, **75 discovered pages**, 0 videos.
- Legacy non-www sitemap: successful, **63 discovered pages**. Treat as historical discovery data; do not resubmit or restructure.
- Prior verified priority set: 5/5 core P0 pages plus 6/6 additional priority www pages indexed. Do not repeat Request Indexing on those pages.
- The current working tree's sitemap contains 72 URLs while GSC last discovered 75. This is a repository/live-state reconciliation item, not authorization to alter the sitemap.

## 3. Top Queries — Last 28 Days

All visible query rows have 0 disclosed clicks; sitewide query clicks are privacy-withheld. Landing-page status is marked `(C)` confirmed or `(I)` inferred.

| Query | Clicks | Impr. | CTR | Pos. | Landing Page | Search Intent | Keyword Type | Priority | Recommended Action |
|---|---:|---:|---:|---:|---|---|---|---|---|
| uk power strip market | 0 | 15 | 0% | 41.8 | `/power-strips-wall-outlets.html` (C) | Informational | Market Research | P2 | Hold title; assess one UK market evidence brief after more data |
| power strip market | 0 | 13 | 0% | 44.5 | `/power-strips-wall-outlets.html` (I) | Informational | Market Research | P2 | Improve internal links/topic support, not CTR copy |
| longrich link | 0 | 11 | 0% | 7.9 | `/` (C) | Navigational | Navigational | P1 | Diagnose entity/brand ambiguity; no title edit at 11 impressions |
| nt009 | 0 | 3 | 0% | 5.0 | `/nt009-all.html` (C); `/nt009-uk.html` secondary | Transactional | Product / Model | P2 | Preserve; monitor split and CTR after ≥30 impressions |
| global plug power adapter manufacturer | 0 | 3 | 0% | 76.3 | `/travel-adapter-manufacturer.html` (I) | Commercial | Manufacturer / Supplier | P3 | Check content-language fit; observe |
| longrich | 0 | 2 | 0% | 3.5 | `/` + `/about-us.html` (I) | Navigational | Navigational | P2 | Strengthen entity citations/off-site profiles, not title |
| 45w vs 70w travel adapter | 0 | 2 | 0% | 5.0 | `/20w-vs-45w-vs-70w-travel-adapter.html` (C) | Informational | Comparison | P2 | Preserve ranking; add contextual product/RFQ path only |
| nt011 | 0 | 2 | 0% | 5.0 | `/nt011-all.html` (C); `/nt011-us.html` secondary | Transactional | Product / Model | P2 | Preserve; monitor cannibalization at higher volume |
| difference between travel adapter and power adapter | 0 | 2 | 0% | 59.5 | `/travel-adapter-vs-voltage-converter.html` (I) | Informational | Comparison | P3 | Validate whether existing comparison answers “power adapter” |
| odm ac dc adapter manufacturer | 0 | 2 | 0% | 60.5 | `/oem-odm.html` (I) | Commercial | OEM / ODM | P3 | Clarify category boundaries if signal repeats |
| adapter factory developments | 0 | 2 | 0% | 65.5 | `/manufacturing.html` (I) | Informational | Manufacturer / Supplier | P3 | Observe; likely low-fit wording |
| power adapter odm supplier | 0 | 2 | 0% | 70.0 | `/oem-odm.html` (I) | Commercial | OEM / ODM | P3 | Reinforce existing OEM hub only after repeated signal |
| what is a travel adapter | 0 | 2 | 0% | 77.5 | `/universal-travel-adapters.html` (I) | Informational | Informational | P3 | Consider concise definition block in existing hub |
| multi plug adapter manufacturer | 0 | 1 | 0% | 31.0 | `/travel-adapter-manufacturer.html` (I) | Commercial | Manufacturer / Supplier | P3 | Observe |
| multi function conversion plug market | 0 | 1 | 0% | 32.0 | `/resources/market-insights/` (I) | Informational | Market Research | P3 | Observe |
| voltage converter odm | 0 | 1 | 0% | 34.0 | `/oem-odm.html` (I) | Commercial | OEM / ODM | P3 | Add to cluster watchlist |
| difference between voltage converter and adapter | 0 | 1 | 0% | 46.0 | `/travel-adapter-vs-voltage-converter.html` (I) | Informational | Comparison | P3 | Existing page is correct; wait |
| odm power adapter | 0 | 1 | 0% | 46.0 | `/oem-odm.html` (I) | Commercial | OEM / ODM | P3 | Observe |
| ac dc adapter odm | 0 | 1 | 0% | 52.0 | `/oem-odm.html` (I) | Commercial | OEM / ODM | P3 | Observe; possibly outside product fit |
| power pack oem/odm manufacturer | 0 | 1 | 0% | 56.0 | `/oem-odm.html` (I) | Commercial | OEM / ODM | P3 | Do not expand beyond real product scope |
| power conversion system quality inspection | 0 | 1 | 0% | 61.0 | `/quality-testing.html` (I) | Informational | Safety / Engineering | P3 | Observe |
| odm usb connector factory | 0 | 1 | 0% | 67.0 | `/manufacturing.html` (I) | Commercial | OEM / ODM | P3 | Low product fit; no action |
| odm power adapter manufacturer | 0 | 1 | 0% | 71.0 | `/oem-odm.html` (I) | Commercial | OEM / ODM | P3 | Observe |
| usb connector oem/odm production service | 0 | 1 | 0% | 71.0 | `/manufacturing.html` (I) | Commercial | OEM / ODM | P3 | Low product fit; no action |
| travel adapter supplier | 0 | 1 | 0% | 73.0 | `/travel-adapter-manufacturer.html` (I) | Commercial | Manufacturer / Supplier | P3 | Strategic watchlist; strengthen only with repeated impressions |
| ul certified power adapter manufacturer | 0 | 1 | 0% | 74.0 | `/travel-adapter-manufacturer.html` (I) | Commercial | Manufacturer / Supplier | P3 | Avoid certification claims beyond evidence |
| power electronics quality inspection | 0 | 1 | 0% | 82.0 | `/quality-testing.html` (I) | Informational | Safety / Engineering | P3 | Observe |
| interchangeable power adapter manufacturer | 0 | 1 | 0% | 84.0 | `/travel-adapter-manufacturer.html` (I) | Commercial | Manufacturer / Supplier | P3 | Observe |
| power module quality control | 0 | 1 | 0% | 85.0 | `/quality-testing.html` (I) | Informational | Safety / Engineering | P3 | Observe |
| powerstripe | 0 | 1 | 0% | 87.0 | `/power-strips-wall-outlets.html` (I) | Informational | Product / Model | P3 | No action; ambiguous/misspelled term |

Required-term check: visible signals exist for `manufacturer`, `supplier`, `OEM/ODM`, `NT009` and `NT011`. No visible query rows yet for `travel adapter`, `universal travel adapter`, `grounded travel adapter`, `GaN travel adapter`, `70W travel adapter`, `tower power strip`, `wall outlet extender`, `factory` as an exact standalone term, `NT010`, `TUS`, `WPG` or `ECS`.

## 4. Top Landing Pages — Last 28 Days

`RFQ+Contact` denotes visible/linkable conversion paths in current markup; many product pages also include Email/WhatsApp. Top query is shown only when GSC exposed or directly confirmed it.

| Page | Page Type | Primary Topic | Clicks | Impr. | CTR | Pos. | Top Query / Pos. | Current CTA | Commercial Relevance | Priority | Recommended Action |
|---|---|---|---:|---:|---:|---:|---|---|---|---|---|
| `/` | Homepage | OEM power products | 4 | 30 | 13.3% | 17.6 | `longrich link` / 7.9 | RFQ+Email+WhatsApp | High | P1 | Entity/off-site trust work; preserve title |
| `/why-travel-adapters-fall-out-of-wall-sockets.html` | Engineering Article | Wall stability | 1 | 10 | 10% | 6.1 | Withheld | RFQ+Contact | Medium | P1 | Preserve; ensure relevant product and test links |
| `/nt009-uk.html` | Product | NT009 UK 20W | 1 | 5 | 20% | 4.4 | `nt009` secondary / 12 | RFQ+Email+WhatsApp | High | P1 | Hold |
| `/power-strips-wall-outlets.html` | Category | Power strips / wall outlets | 0 | 44 | 0% | 40.3 | `uk power strip market` / 41.8 | RFQ+Contact | High | P2 | Ranking/content-match work, not CTR rewrite |
| `/about-us.html` | Company / Trust | Manufacturer entity | 0 | 22 | 0% | 11.4 | `longrich` / 3.0 (1 visible impr.) | RFQ+Email+WhatsApp | High | P1 | Wait for query disclosure; build third-party entity corroboration |
| `/20w-vs-45w-vs-70w-travel-adapter.html` | Buying Guide | Wattage comparison | 0 | 18 | 0% | 8.6 | `45w vs 70w travel adapter` / 5 | RFQ+Contact | High | P1 | Hold title; tighten contextual product/RFQ links |
| `/products.html` | Product Hub | Product portfolio | 0 | 16 | 0% | 38.7 | Withheld | RFQ+Email+WhatsApp | High | P2 | Strengthen internal authority to category hubs |
| `/nt009-all.html` | Product | NT009 universal | 0 | 14 | 0% | 5.6 | `nt009` / 5 | RFQ+Email+WhatsApp | High | P1 | Hold until 30–50 impressions |
| `/oem-odm-travel-adapter.html` | OEM / ODM | Travel-adapter development | 0 | 13 | 0% | 56.5 | Withheld | RFQ+Contact | High | P2 | Internal-link and evidence improvement; no title rewrite |
| `/nt011-us.html` | Product | NT011 US 70W GaN | 0 | 12 | 0% | 15.8 | `nt011` secondary / 8 | RFQ+Email+WhatsApp | High | P1 | Wait after recent optimization; monitor split |
| `/contact-us.html` | Company / Trust | Contact | 0 | 11 | 0% | 5.4 | Withheld | RFQ+Email+WhatsApp | High | P2 | Preserve; conversion destination, not acquisition page |
| `http://longrichpower.com/` | Homepage | Legacy redirect host | 0 | 9 | 0% | 4.0 | Withheld | Redirect | Low | P2 | Observe decay; do not change canonical host |
| `/can-70w-travel-adapter-charge-laptop.html` | Buying Guide | 70W laptop charging | 0 | 8 | 0% | 4.4 | Withheld | Live-state review needed | High | P1 | Reconcile live URL with current working tree before any deploy |
| `/universal-travel-adapters.html` | Category | Universal adapters | 0 | 8 | 0% | 23.8 | Withheld | RFQ+Contact | High | P2 | Strengthen internal links; wait |
| `/travel-adapter-vs-voltage-converter.html` | Buying Guide | Adapter vs converter | 0 | 6 | 0% | 60.7 | comparison term inferred | RFQ+Contact | Medium | P3 | Validate exact intent coverage |
| `/engineering-resources.html` | Resource Hub | Engineering evidence | 0 | 5 | 0% | 5.4 | Withheld | RFQ+Contact | Medium | P1 | Preserve; make evidence paths explicit |
| `/grounding-continuity-test-travel-adapter.html` | Engineering Article | Grounding test | 0 | 5 | 0% | 6.0 | Withheld | RFQ+Contact | High | P1 | Add grounded-product contextual link if weak |
| `/nt010.html` | Product | NT010 45W | 0 | 5 | 0% | 6.8 | Withheld | RFQ+Email+WhatsApp | High | P1 | Hold; model query not disclosed |
| `/nt009-aus.html` | Product | NT009 AU | 0 | 5 | 0% | 7.8 | Withheld | RFQ+Email+WhatsApp | High | P1 | Hold |
| `/voltage-converters.html` | Category | Voltage converters | 0 | 5 | 0% | 8.8 | Withheld | RFQ+Contact | High | P1 | Hold; link from comparison content |
| `/travel-adapter-manufacturer.html` | Company / Trust | Manufacturer | 0 | 5 | 0% | 20.0 | Withheld | RFQ+Contact | High | P1 | Strengthen evidence/internal links; no title change |
| `/quality-testing.html` | Company / Trust | Testing capability | 0 | 5 | 0% | 66.0 | Withheld | RFQ+Email+WhatsApp | High | P3 | Use as supporting evidence, not CTR target |
| `/travel-plug-adapters.html` | Category | Country plug adapters | 0 | 4 | 0% | 7.8 | Withheld | RFQ+Contact | High | P2 | Hold |
| `/nt009-eu.html` | Product | NT009 EU | 0 | 4 | 0% | 8.3 | Withheld | RFQ+Email+WhatsApp | High | P2 | Hold |
| `/nt010-g.html` | Product | NT010-G 45W | 0 | 3 | 0% | 3.7 | Withheld | RFQ+Email+WhatsApp | High | P2 | Hold |
| `/request-a-quote.html` | RFQ | Lead capture | 0 | 3 | 0% | 5.0 | Withheld | RFQ form+WhatsApp | High | P2 | Track, do not optimize for acquisition yet |
| `/ecs-us019.html` | Product | US tower strip | 0 | 3 | 0% | 21.7 | Withheld | RFQ+Contact | High | P3 | Observe |
| `/ecs-bs019.html` | Product | UK power strip | 0 | 3 | 0% | 33.7 | Withheld | RFQ+Email+WhatsApp | High | P3 | Link from power-strip category/market content |
| `/oem-odm.html` | OEM / ODM | Power-product OEM | 0 | 3 | 0% | 52.7 | Withheld | RFQ+Email+WhatsApp | High | P3 | Consolidate authority via internal links |
| `/ecs-eu010.html` | Product | EU tower strip | 0 | 3 | 0% | 77.7 | Withheld | RFQ+Email+WhatsApp | High | P3 | Observe |

## 5. Ranking 4–20 Opportunities

Strict query filter: position 4–20, impressions ≥5.

| Query | Landing Page | Clicks | Impr. | CTR | Pos. | Intent | Current Content Match | Internal Link Strength | Commercial Value | Recommended Action | Score |
|---|---|---:|---:|---:|---:|---|---|---|---|---|---:|
| longrich link | `/` | 0 | 11 | 0% | 7.9 | Navigational | Medium; brand-name ambiguity | Strong internally, weak externally | Medium | Build consistent entity profiles/citations; observe title until ≥30 impressions | 77 |

Strategic low-volume watchlist (does **not** meet ≥5 impressions): `nt009` → `/nt009-all.html` (3 impressions, position 5); `nt011` → `/nt011-all.html` (2, position 5); `45w vs 70w travel adapter` → comparison guide (2, position 5).

## 6. High Impression / Zero Click

No visible query meets the strict `Clicks=0, Impressions≥20` rule.

### Observation group — query level (≥10 impressions)

| Page | Query | Impr. | Pos. | Current Title | Current Meta | Likely CTR Problem | Title / Meta Direction | Edit Now? |
|---|---|---:|---:|---|---|---|---|---|
| `/power-strips-wall-outlets.html` | uk power strip market | 15 | 41.8 | Power Strips & Wall Outlets \| LONGRICH | Nine power distribution platforms… | Primarily ranking/content-format mismatch, not CTR | If sustained, create/strengthen market evidence rather than retitle category | No |
| `/power-strips-wall-outlets.html` | power strip market | 13 | 44.5 | Same | Same | Position too low for CTR diagnosis | Same | No |
| `/` | longrich link | 11 | 7.9 | Factory-Direct OEM/ODM Power Product Manufacturer \| LONGRICH | Factory-direct OEM and ODM manufacturing… | Ambiguous navigational intent/entity confusion | Preserve commercial direction; earn entity corroboration first | No |

### Page-level observation (query detail mostly withheld)

- `/power-strips-wall-outlets.html`: 44 impressions, position 40.3. It qualifies by page volume but not as a CTR edit; ranking is the constraint.
- `/about-us.html`: 22 impressions, position 11.4. Only 1 impression is disclosed for `longrich`; do not rewrite title/meta without the other query terms.

## 7. Commercial Keyword Opportunities

| Query / root | Impr. | Clicks | Pos. | Landing Page | Current Relevance | Missing Content | Commercial Value | Recommended Action |
|---|---:|---:|---:|---|---|---|---|---|
| global plug power adapter manufacturer | 3 | 0 | 76.3 | manufacturer page (I) | Medium | Exact product/category boundary | High | Observe; avoid chasing non-core AC/DC intent |
| odm ac dc adapter manufacturer | 2 | 0 | 60.5 | OEM hub (I) | Low–Medium | Scope clarification | Medium | No new page |
| adapter factory developments | 2 | 0 | 65.5 | manufacturing (I) | Medium | Buyer-oriented factory proof | Medium | Reuse manufacturing evidence |
| power adapter odm supplier | 2 | 0 | 70.0 | OEM hub (I) | Medium | Supplier evaluation proof | High | Strengthen existing hub if repeated |
| multi plug adapter manufacturer | 1 | 0 | 31.0 | manufacturer page (I) | High | Terminology alignment | High | Add to watchlist |
| voltage converter odm | 1 | 0 | 34.0 | OEM hub (I) | High | Converter-specific OEM FAQ | High | Potential existing-page FAQ after more data |
| travel adapter supplier | 1 | 0 | 73.0 | manufacturer page (I) | High | Supplier/factory proof and CTA | High | Strategic watchlist |
| UL certified power adapter manufacturer | 1 | 0 | 74.0 | manufacturer page (I) | Conditional | Verified certification scope | High | Do not claim without model-level evidence |
| private label / custom / wholesale / bulk / distributor / travel brand / Amazon seller | 0 visible | 0 | — | Existing solution/resource hubs | High structural relevance | No measured query signal yet | High | Keep indexed; do not expand until signal appears |

## 8. Product / Model Query Opportunities

| Model Query | Landing Page | Clicks | Impr. | CTR | Pos. | Correct Product Page? | Title Match | Schema Match | Recommended Action |
|---|---|---:|---:|---:|---:|---|---|---|---|
| NT009 | `/nt009-all.html` primary; `/nt009-uk.html` secondary | 0 | 3 | 0% | 5.0 | Yes; 1-impression secondary split | Yes | Yes: Product + Brand + properties | Hold; recheck at 30–50 impressions |
| NT011 | `/nt011-all.html` primary; `/nt011-us.html` secondary | 0 | 2 | 0% | 5.0 | Yes; 1-impression secondary split | Yes | Yes: Product + Brand + properties | Hold; confirm market suffix intent later |
| NT010 | Query not disclosed; page has 5 impressions | 0 | — | — | page 6.8 | Cannot confirm query mapping | Yes | Yes | Hold |
| TUS | No visible query | 0 | 0 visible | — | — | Not testable | Model titles present | Product schema present | Observe |
| WPG | No visible query | 0 | 0 visible | — | — | Not testable | Model titles present | Product schema present | Observe |
| ECS | No visible query | 0 | 0 visible | — | — | Not testable | Model titles present | Product schema present | Observe |

Potential cannibalization is limited and currently benign: the generic model query ranks on the `-all` page while one regional variant also appears once. Do not change URLs, canonicals, titles or internal-link anchors until a meaningful sample shows the regional page displacing the intended primary page.

## 9. Keyword → Page → Product → CTA Matrix

| Keyword Cluster | Intent | Primary Landing Page | Supporting Page | Relevant Product | Representative SKU | CTA | Current Ranking Signal | Content Gap | Priority |
|---|---|---|---|---|---|---|---|---|---|
| travel adapter manufacturer | Commercial | `/travel-adapter-manufacturer.html` | `/manufacturing.html` | Universal adapters | NT011-ALL | OEM RFQ | page: 5 impr., pos. 20 | External proof/authority | P1 |
| universal travel adapter | Transactional | `/universal-travel-adapters.html` | `/travel-adapters/` | 20W–70W adapters | NT009-ALL | Product → RFQ | page: 8, pos. 23.8 | Query not yet disclosed | P2 |
| grounded travel adapter | Safety / Engineering | `/grounded-travel-adapter.html` | grounding test | Grounded adapters | NT011-ALL | Technical review → RFQ | no visible query | Model-level proof mapping | P2 |
| GaN travel adapter | Commercial | `/gan-travel-adapter.html` | full-load test | 45W/70W GaN | NT011-US | Product → RFQ | page: 2, pos. 5.5 | Query not disclosed | P2 |
| 70W travel adapter | Transactional | `/nt011-us.html` | comparison + full-load test | 70W GaN | NT011-US | RFQ/WhatsApp | page: 12, pos. 15.8 | Keep proof links prominent | P1 |
| travel adapter OEM | Commercial | `/oem-odm-travel-adapter.html` | manufacturer page | Adapter portfolio | NT011-ALL | OEM RFQ | page: 13, pos. 56.5 | Authority/internal links | P2 |
| travel adapter supplier | Commercial | `/travel-adapter-manufacturer.html` | `/products.html` | Adapter portfolio | NT009/10/11 | RFQ | query: 1, pos. 73 | Supplier proof | P3 |
| travel adapter factory | Commercial | `/manufacturing.html` | quality testing | Adapter portfolio | NT011-ALL | Factory evaluation → RFQ | page: 2, pos. 8.5 | External corroboration | P2 |
| power strip manufacturer | Commercial | `/power-strips/` | `/power-strips-wall-outlets.html` | Power strips | ECS-BS019 | RFQ | market queries: 28 combined visible imps. | Manufacturer evidence bridge | P1 |
| USB-C / individual switch / flat plug / surge power strip | Transactional | `/power-strips/` | relevant ECS pages | Power strips | ECS-US019 | Product → RFQ | no exact query | Feature-to-SKU comparison | P2 |
| wall outlet extender / USB / surge wall outlet | Transactional | `/wall-outlet-extenders/` | WPG product pages | Wall outlets | WPG05 | Product → RFQ | no visible query | Engineering/use-case proof | P3 |
| wall tap manufacturer | Commercial | `/wall-outlet-extenders/` | `/manufacturing.html` | Wall outlets | WPG05 | OEM RFQ | no visible query | Terminology validation | P3 |
| tower power strip / USB-C / individual switch | Transactional | `/tower-power-strips/` | ECS tower SKUs | Tower strips | ECS-US019 | Product → RFQ | ECS page signals only | Feature comparison | P2 |
| tower power strip manufacturer | Commercial | `/tower-power-strips/` | manufacturing | Tower strips | ECS-EU010 | OEM RFQ | no exact query | Supplier proof | P3 |

## 10. Top 10 Content Opportunities

These are opportunities, not a publication queue. Recommended net-new output in the next 30 days: no more than two pieces.

1. **UK power strip market buyer brief** — strongest unserved query cluster (28 combined visible impressions); validate source quality and link to ECS-BS019. New content only after confirming the category page is not the better destination.
2. **Travel adapter vs power adapter clarification** — extend the existing comparison ecosystem to answer the actual 2-impression wording; likely an existing-page addition, not a new URL.
3. **Power strip manufacturer evaluation checklist** — connect market-interest pages to factory/testing proof and power-strip SKUs; existing hub expansion first.
4. **Voltage converter OEM FAQ** — MOQ, lead time, private label, waveform, load testing and certification; add to existing OEM/converter pages if impressions repeat.
5. **Grounding proof by product platform** — map grounding continuity, plug stability and target-market compliance to actual models; existing engineering content extension.
6. **70W laptop-charging decision block** — preserve the ranking live guide and connect it to NT011 and the one-hour full-load test; reconcile live/repository state first.
7. **NT009 vs NT010 vs NT011 selector** — use existing comparison/product content; avoid a new page until model demand grows.
8. **Power-strip feature-to-SKU table** — USB-C, individual switch, flat plug, surge protection, market plug and certification; enhance `/power-strips/`.
9. **OEM packaging/private-label evidence block** — concrete packaging inputs, approval workflow, MOQ and lead-time dependencies; existing OEM knowledge hub.
10. **Plug stability engineering proof** — connect wall-stability, insertion durability, grounding and relevant flat-adapter SKUs into one evidence path.

## 11. AI / GEO Baseline

### Google generative-AI search performance

- GSC Generative AI beta report, 3-month/effective 2026-08-21–2026-09-06: **6 total impressions**.
- Visible pages: `http://longrichpower.com/` (3), `https://www.longrichpower.com/` (3), `/about-us.html` (1). Page rows can overlap within an impression and should not be summed as unique sitewide impressions.
- GSC exposes pages, not the generating queries. This is a real visibility signal but not proof of citation, link, or recommendation.

### Fixed-query citation test

The prior tracked `AI_CITATION_WEEKLY_LOG.md` contains the fixed protocol and query-to-page baseline but **no completed citation records**. It is deleted in the current working tree, so this report does not restore or mutate it. A valid clean-session platform test was not fabricated.

| Platform | Query | LONGRICH Mentioned? | longrichpower.com Linked? | Cited Page | Topic | Competitor Sources | Opportunity |
|---|---|---|---|---|---|---|---|
| Baseline pending | Who are reliable travel adapter manufacturers for OEM/ODM projects? | Not recorded | Not recorded | target: manufacturer page | OEM supplier choice | Not recorded | Establish first controlled weekly run |
| Baseline pending | How do I choose a travel adapter manufacturer? | Not recorded | Not recorded | target: choosing guide | Evaluation criteria | Not recorded | Preserve fixed wording |
| Baseline pending | What is the difference between a travel adapter and a voltage converter? | Not recorded | Not recorded | target: comparison guide | Technical distinction | Not recorded | Pair answer-first copy with evidence |
| Baseline pending | Can a 70W travel adapter charge a laptop? | Not recorded | Not recorded | target: 70W guide | Charging capability | Not recorded | Reconcile live/repository URL before strengthening |

Do not change a page because one future test fails. Track mention, link and cited topic separately.

## 12. Backlink Baseline

GSC Links report status: **“processing data; return in about one day”**; export unavailable. Focused public searches for the exact domain did not confirm an independent backlink. Results were dominated by LONGRICH's own site and an unrelated `longrich.com` cosmetics/direct-selling entity, which increases brand-entity ambiguity.

| Source Domain | Target Page | Link Type | Relevance | Authority / Trust Estimate | Risk | Recommended Action |
|---|---|---|---|---|---|---|
| None independently confirmed | — | — | — | — | No measurable authority baseline yet | Recheck GSC Links after processing |
| `longrich.com` (not a backlink) | — | Other / name collision | Low | Established but unrelated | Entity confusion | Differentiate company name, product category and profiles; do not seek link |

Pages with no confirmed external links: all commercial and content pages until GSC or a verifiable referring URL proves otherwise. Priority link targets: manufacturer page, manufacturing page, quality/testing page, 70W engineering test, grounded engineering test, power-strip hub. Earn links through customers/partners, relevant supplier profiles, industry articles and genuine social/company profiles. Do not buy links or create mass low-quality directory listings.

## 13. Conversion Gaps

GA4 event architecture exists in the prior mapping: `begin_lead` → `generate_lead_view` → `generate_lead`, plus `contact_click`, with lead reference/model/source fields. This baseline did not have GA4 outcome data, so CTA presence is not conversion performance.

| Page | Traffic Signal | Commercial Intent | Current CTA | CTA Visibility | Product Link | RFQ Link | Conversion Gap | Recommended Fix |
|---|---|---|---|---|---|---|---|---|
| `/` | 30 impr., 4 clicks | High | RFQ+Email+WhatsApp | Strong | Yes | Yes | No proven gap; attribution still needs GA4 admin setup | Register dimensions/key events; preserve UI |
| wall-socket article | 10, 1 | Medium | RFQ+Contact | Present | Relevant flat/grounded context should be verified | Yes | Reader may not see next product step | Add/verify one contextual product bridge; no rewrite |
| `/nt009-uk.html` | 5, 1 | High | RFQ+Email+WhatsApp | Strong | Self | Yes | No proven gap | Preserve; measure CTA events |
| power-strip category | 44, 0 | High | RFQ+Contact | Present | Product grid | Yes | Market-research visitors lack an explicit sourcing next step | Add/verify contextual “Discuss UK program” CTA after ranking work |
| `/about-us.html` | 22, 0 | Medium–High | RFQ+Email+WhatsApp | Strong | Portfolio links | Yes | Query intent mostly withheld | No copy change; measure clicks |
| wattage comparison | 18, 0 | High | RFQ+Contact | Present | Product choices | Yes | Guide-to-SKU selection path may be weak | Add/verify CTA after comparison table with selected wattage |
| `/products.html` | 16, 0 | High | RFQ+Email+WhatsApp | Strong | Yes | Yes | Low ranking, not CTA | Internal authority work |
| `/nt009-all.html` | 14, 0 | High | RFQ+Email+WhatsApp | Strong | Self | Yes | Sample too small | Hold and measure |
| OEM travel-adapter page | 13, 0 | Very high | RFQ+Contact | Present | Portfolio | Yes | Weak ranking/authority, not CTA absence | Link proof and representative SKUs into RFQ |
| `/nt011-us.html` | 12, 0 | High | RFQ+Email+WhatsApp | Strong | Self | Yes | Recent optimization needs time | Observe 7–14 days |

## 14. TOP 10 ACTIONS

Score = Search Demand 25 + Ranking Potential 25 + Commercial Intent 25 + Product Fit 15 + Conversion Readiness 10. P1 75–100; P2 50–74; P3 <50.

| Priority | Score | Target Page | Target Query / Cluster | Why Now | Exact Action | Expected Outcome | Do Now / Observe |
|---|---:|---|---|---|---|---|---|
| P1 | 86 | `/20w-vs-45w-vs-70w-travel-adapter.html` | 45W vs 70W | Position 5, 18 page impressions | Verify one post-table NT010/NT011 product choice and prefilled RFQ link; leave title/H1 | Better guide→product→lead path without ranking risk | Do Now |
| P1 | 83 | `/nt009-all.html` | NT009 | Position 5/5.6, correct primary page | Freeze title/URL/spec; weekly query-page check until ≥30 impressions | Protect Top-10 ranking and detect real cannibalization | Observe |
| P1 | 82 | `/` | longrich link / brand entity | 11 query impressions at 7.9; 0 clicks | Standardize verifiable company/category identity on real external profiles and partner citations; keep homepage title | Better entity disambiguation and navigational CTR over time | Do Now |
| P1 | 81 | `/nt011-all.html`, `/nt011-us.html` | NT011 / 70W GaN | Generic model query at 5; US page at 15.8 | Freeze titles; record weekly primary/secondary landing-page split | Protect model visibility; evidence before consolidation | Observe |
| P1 | 79 | `/travel-adapter-manufacturer.html` | manufacturer / supplier / factory | Commercial page at position 20; external authority absent | Add no new claims; audit internal links from home/manufacturing/testing and pursue 3–5 relevant earned citations | Move page from edge of Top 20 with trust support | Do Now |
| P1 | 78 | `/power-strips/` + legacy category | power strip manufacturer / market | 44 page impressions; 28 visible market-query impressions | Define canonical content roles in an analysis note; strengthen hub↔ECS/internal evidence links; no URL/title change | Reduce intent mismatch and support ranking | Do Now |
| P1 | 76 | GA4/RFQ measurement | organic lead funnel | Traffic exists; outcome baseline missing | Register custom dimensions; mark `generate_lead` key event; build organic funnel exploration | Measurable SEO→inquiry conversion baseline | Do Now |
| P2 | 73 | wall-socket article + engineering hub | plug stability / grounding | Article already has 1 click, pos. 6.1 | Verify contextual links to stability test, grounding test and relevant product/RFQ | More commercial value from current traffic | Do Now |
| P2 | 69 | `/about-us.html` | longrich / manufacturer entity | 22 impressions, 11.4, queries withheld; AI report visibility | Preserve title; improve only externally verifiable entity corroboration and monitor disclosed queries | Stronger trust/GEO without premature CTR rewrite | Observe |
| P2 | 66 | Content pipeline | UK power strip market | Strongest visible nonbrand demand; current category ranks ~42 | Produce a sourced outline and SERP/intent brief; publish only if it adds buyer evidence and assigns correct target page | One high-value evidence-led content decision, not mass output | Do Now (research), Publish selectively |

## 15. 30-Day Action Plan

### Week 1 — baseline + no large changes

- Freeze product URLs, SKUs, specs, images, sitemap architecture, canonicals and recently optimized titles/H1s.
- Reconcile the live 75-URL sitemap with the current 72-URL working-tree sitemap and deleted live-ranking guides; document only, do not deploy automatically.
- Complete GA4 custom dimensions/key-event setup and validate organic CTA events.
- Recheck GSC Links after processing; export and classify only verified domains.

### Week 2 — optimize existing opportunity paths

- Verify contextual product/RFQ links on the wattage comparison and wall-stability article.
- Audit internal links to manufacturer, manufacturing, testing, power-strip hub and representative SKUs.
- Record query→page split for NT009 and NT011; make no change unless sample materially increases.

### Week 3 — selective content and authority

- Prepare a sourced UK power-strip market intent brief and one power-strip manufacturer evaluation outline.
- Choose at most one for publication after overlap/cannibalization review.
- Establish 3–5 legitimate company/supplier/social/partner citations with consistent company identity and relevant target pages.

### Week 4 — remeasure

- Capture the same four windows and recompute WoW.
- Re-run the four fixed AI questions in controlled sessions and restore a deliberate weekly log only if desired.
- Review CTR only where query impressions reach a reasonable sample (preferably ≥30; stronger at 50+) and position is high enough for snippets to matter.
- Promote or demote opportunity scores using measured conversions and verified backlinks.

## Final Recommendation

### What to do this week

1. Protect current Top-10 query/page matches.
2. Make conversion measurement operational.
3. Verify narrow internal-link/CTA bridges on the two pages already earning clicks or Top-10 rankings.
4. Reconcile live versus working-tree sitemap/page inventory before any deployment.
5. Start earned entity/authority citations and recheck GSC Links.

### What not to change yet

- No product URL migration, SKU/spec/image change or PRODUCT_IMAGE_LOCK violation.
- No mass title/H1 rewrites, mass content generation, mass Request Indexing, sitemap restructuring or canonical-host change.
- No title/meta edit based on 1–15 query impressions.
- No automatic publishing of SEO changes.

## LONGRICH Phase 2 Traffic Growth Baseline

**GSC**
- Clicks: 6 (28-day/effective 17-day baseline)
- Impressions: 205
- CTR: 2.9%
- Avg position: 28.0

**Indexation**
- Sitemap URLs: 75 discovered in GSC current www submission; 72 in current working-tree sitemap
- Priority pages indexed: 11/11 previously verified; 62 URLs indexed sitewide

**Opportunities**
- Ranking 4–20: 1 strict visible query; 3 strategic low-volume watchlist queries
- High impressions / zero clicks: 0 strict query rows; 3 query observation rows; 2 page-level observations
- Commercial keyword opportunities: 8 visible manufacturer/supplier/OEM roots plus unmeasured strategic roots
- Model keyword opportunities: NT009 and NT011 confirmed; NT010 page signal; TUS/WPG/ECS not yet disclosed
- Content gaps: Top 10 listed; maximum two proposed for near-term creation

**AI / GEO**
- Queries tested: 0 valid completed records; 4 fixed queries retained
- LONGRICH mentions: not recorded
- Citation opportunities: manufacturer choice, manufacturer evaluation, adapter vs converter, 70W laptop charging
- Google generative-AI impressions: 6

**Backlinks**
- Relevant external domains: 0 independently confirmed; GSC still processing
- Priority link targets: manufacturer, manufacturing, testing, 70W/grounding proof, power-strip hub

**Conversion**
- Pages with traffic but weak contextual CTA: comparison guide, wall-stability article, power-strip category

**Files Created**
- `LONGRICH_Traffic_Growth_Baseline_V1.0.md`
- `LONGRICH_Traffic_Growth_Opportunity_V1.0.csv`
