# LONGRICH SEO Phase 3.1C Prerequisites

Date: 2026-09-13

## Release baseline

- PR #11, `feat: add Phase 3.1B organic lead tracking`, merged into `main`.
- Merge commit: `3b262df837c2196a0c6477cf54d68f9125c37d59`.
- The PR contained 11 expected files, 0 case-study files, and 0 frozen product-page SEO changes.
- The concurrent `main` update changed only `manufacturing.html` and `power-strips/index.html`; the merge check found no overlapping files or conflicts.
- Both Vercel status checks on the PR head were successful.

## Credential cleanup

Completed immediately after merge:

- Revoked the Resend API key named `LONGRICH Vercel Preview Test`.
- Removed Preview-only `RESEND_API_KEY`, `RFQ_FROM_EMAIL`, and `RFQ_TO_EMAIL` from `longrich-v2-prelaunch`.
- Verified that the Vercel project retains only the three Production variables with those names.
- Verified that Resend retains only `LONGRICH Vercel Production`.
- No Production credential was copied, displayed, rotated, or deleted.

## Lead-tracking readiness

Verified in Phase 3.1B:

- `contact_form_submit`: GA4 DebugView.
- `quote_request`: GA4 Realtime.
- `sample_request`: GA4 DebugView.
- `email_click`: GA4 DebugView.
- `whatsapp_click`: GA4 DebugView; the prefilled chat was opened without sending a message.
- Contact and RFQ test submissions completed end to end through the Preview Resend path and were marked `Test Submission`.
- Google Organic attribution logic records source, medium, landing page, CTA type, product interest, and lead reference.

Not yet ready for Phase 3.1C outcome optimization:

- HubSpot is not integrated.
- The current production lead path is `website form > /api/rfq > Resend email`.
- The automatic attribution chain stops at email delivery. Qualified Lead, Sample/RFQ progression, and Order status cannot be joined automatically to the originating session or query.
- True Google Organic production leads have not yet been observed through the full lifecycle; controlled attribution tests do not replace production evidence.

## Required CRM decisions before Phase 3.1C

1. Select the system of record for leads and downstream commercial stages.
2. Assign an owner for the website-to-CRM integration.
3. Define field mappings for `lead_reference`, landing page, source, medium, campaign, CTA type, and product interest.
4. Define lifecycle stages for Lead, Qualified Lead, Sample/RFQ, and Order.
5. Define deduplication and test-submission exclusion rules.
6. Complete one production-like test that proves the same `lead_reference` is visible from website submission through CRM lifecycle updates.
7. Confirm privacy-policy and consent requirements before storing visitor-attribution data with identity data, especially for visitors in regulated regions.

## HKTDC free-route determination

Evidence checked:

- Existing public profile: `https://sourcing.hktdc.com/en/Supplier-Store/Profile/DONGGUAN-LONGRICH-ELECTRONIC-CO-LTD/1S00OA07F`.
- The profile is publicly accessible and relevant, but it does not expose `longrichpower.com`.
- HKTDC's current public `Become a Supplier` page shows paid packages starting at US$530 / HK$3,800; no free package is offered on that page.
- HKTDC support material shows that logged-in supplier accounts may have `My Online Store > Manage Store Profile`.

Decision:

- There is no verified public, self-service free supplier package that can be used now to add the backlink.
- A conditional free path remains possible only through the existing exhibitor entitlement: the authorized account owner must open `Manage Store Profile` and confirm that a public website field can be added without an upgrade.
- Until that account-level check succeeds, HKTDC remains `Reviewing`, not `Applied`, `Pending Approval`, or referring-domain `Live`.
- No HKTDC form was submitted and no paid action was taken.

## Pending human decisions

- HKTDC paid package decision: `待人工决策`.
- Global Sources account owner assignment: `待人工决策`.
- Authorized owner for the existing HKTDC exhibitor account: `待人工决策`.
- CRM choice, integration owner, and lifecycle ownership: `待人工决策`.
- Privacy/legal review for combined identity and attribution data: `待人工决策`.

These items were intentionally not given default values and did not block the PR #11 merge or credential cleanup.

## Phase 3.1C start gate

Phase 3.1C should start only after:

- a CRM/system-of-record decision is recorded;
- an integration owner is assigned;
- website attribution fields are proven through at least Qualified Lead and Sample/RFQ;
- test submissions are excluded from business KPIs;
- privacy handling is approved for the intended visitor regions; and
- backlink status reporting continues to distinguish a public company profile from a verified referring domain.

Until those gates are met, ranking and traffic analysis may continue, but claims about query-to-qualified-lead or query-to-order performance must remain `unavailable`.

## Sources

- HKTDC public supplier profile: https://sourcing.hktdc.com/en/Supplier-Store/Profile/DONGGUAN-LONGRICH-ELECTRONIC-CO-LTD/1S00OA07F
- HKTDC Become a Supplier packages: https://sourcing.hktdc.com/newsbites/become-a-supplier/ecommerce/en/
- HKTDC Sourcing Support: https://sourcingsupport.hktdc.com/hc/en-us
