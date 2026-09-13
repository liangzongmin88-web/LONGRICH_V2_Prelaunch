# LONGRICH SEO Phase 3.1B Weekly Report — 2026-09-13

## 1. Backlink candidate review

HKTDC is the first-priority candidate and already hosts a public DONGGUAN LONGRICH supplier profile. The profile is relevant and publicly accessible, but no `longrichpower.com` backlink is visible. The public supplier package page starts at US$530 / HK$3,800. A possible free route exists only if the authorized exhibitor account can publish a website field through `My Online Store > Manage Store Profile`; this has not been verified. Global Sources is highly relevant but pricing and platform-internal duplicates remain unconfirmed. GlobalSpec has the strongest exact power-strip relevance and supports public supplier website links, but its onboarding/free route is unconfirmed.

Selected candidate: HKTDC remains first for review because the company profile already exists and avoids duplicate registration. No paid or free application was submitted. HKTDC paid decision and Global Sources owner assignment are both marked `待人工决策`; neither is allowed to block the completed technical work or to receive a default assumption. The existing HKTDC public profile remains usable as evidence but is not a referring domain.

## 2. Backlink status/evidence

Public HKTDC profile verified: `https://sourcing.hktdc.com/en/Supplier-Store/Profile/DONGGUAN-LONGRICH-ELECTRONIC-CO-LTD/1S00OA07F`. It is a live company profile but not a verified backlink because the public page does not expose the target website link. No candidate was falsely promoted to `Applied`, `Pending Approval`, or referring-domain `Live`.

## 3. RFQ API and HubSpot diagnosis

`api/rfq.js` validates submissions, applies origin/payload controls, and uses Resend to email the sales recipient plus a visitor confirmation. It does not create or update HubSpot records. A connected HubSpot portal exists, but it is not onboarded for this workflow, FORM access requires reauthorization, and no website-to-HubSpot integration has been proven.

## 4. Five core events

All five required events are defined and have real Preview trigger evidence. `sample_request`, `email_click`, `whatsapp_click`, and `contact_form_submit` appeared in GA4 DebugView; `quote_request` appeared in GA4 Realtime. Contact DebugView parameters included the debug flag, CTA/form type, landing page, lead reference, product interest, submission ID, and UTM source/medium/campaign. The WhatsApp prefill was opened and no message was sent.

Preview delivery used a separate Resend key named `LONGRICH Vercel Preview Test`, restricted to Sending access for `longrichpower.com`. `RFQ_FROM_EMAIL` and `RFQ_TO_EMAIL` were Preview-only and pointed to `test@longrichpower.com`; no Production secret was copied. Contact and RFQ both reached the success page, created no new `lead_submit_error`, and Resend marked both the notification and visitor-confirmation messages as `delivered`. All submissions are marked `Test Submission` and excluded from real inquiry totals. After PR #11 merged, the Preview key was revoked and all three Preview variables were removed; Production credentials were preserved.

Final Preview: `https://longrich-v2-prelaunch-gwormgzvm-liangzongmin88-6175s-projects.vercel.app`.

## 5. GTM change record

No GTM container was found and no GTM changes were made. Tracking is implemented through direct `gtag`; therefore there is no GTM export JSON.

## 6. Hidden fields and privacy

The isolated branch includes `utm_source`, `utm_medium`, `utm_campaign`, `landing_page`, `referrer`, `cta_source`, and `product_interest` on both online forms. Preview verification confirmed these values reach GA4 and the Resend delivery path. Combining them with identity fields may require privacy-policy or consent updates depending on visitor geography; this is recorded for legal/business review.

## 7. Scope isolation and case-study proof

The work was prepared in a clean worktree based on `origin/main`, not in the dirty workspace. The intended diff contains only lead-tracking code/config and the four Phase 3.1B operational deliverables. Verification command before commit/PR: `git diff --name-only origin/main...HEAD` plus `git status --short`, with an explicit assertion that no path begins with `case-studies/` and no `assets/case-studies.css` or `assets/icon.svg` is included.

## Completion status

- Backlink KPI: no verified referring domain yet. HKTDC free-route feasibility requires authorized exhibitor-account access; the paid decision remains `待人工决策`.
- Five-event KPI: 5/5 have real GA4 verification evidence (four in DebugView, `quote_request` in Realtime).
- Google Organic attribution: controlled DebugView parameter proof passed; true Google-referral observation remains pending.
- Case-study files in branch: target is 0; final check required before commit.

## Pending confirmations / Phase 3.1C prerequisites

- HubSpot is not connected to the website form path.
- Current inquiries are delivered by Resend email.
- The attribution chain therefore stops after email delivery unless sales manually reconcile later lifecycle stages with `lead_reference`.
- Before Phase 3.1C, choose and implement the CRM handoff, field mapping, ownership, and validation for Lead → Qualified Lead → Sample/RFQ → Order.
- Completed 2026-09-13: revoked the Resend key `LONGRICH Vercel Preview Test` and removed Preview-only `RESEND_API_KEY`, `RFQ_FROM_EMAIL`, and `RFQ_TO_EMAIL`. Production variables were not changed.
- HKTDC paid decision: `待人工决策`.
- Global Sources account owner assignment: `待人工决策`.
- HKTDC free-route next check: an authorized exhibitor-account owner must inspect `My Online Store > Manage Store Profile` and confirm that a website field can be published without a paid upgrade.
