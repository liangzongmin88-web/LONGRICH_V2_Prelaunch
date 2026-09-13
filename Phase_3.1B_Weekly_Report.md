# LONGRICH SEO Phase 3.1B Weekly Report — 2026-09-13

## 1. Backlink candidate review

HKTDC is the first-priority candidate and already hosts a public DONGGUAN LONGRICH supplier profile. The profile is relevant and publicly accessible, but no `longrichpower.com` backlink is visible. Updating it appears tied to paid supplier services (entry package observed at US$530 / HK$3,800 per year), so no paid action was taken without budget approval. Global Sources is highly relevant but pricing and platform-internal duplicates remain unconfirmed. GlobalSpec has the strongest exact power-strip relevance and supports public supplier website links, but its onboarding/free route is unconfirmed.

Selected candidate: HKTDC remains first for review because the company profile already exists and avoids duplicate registration. The owner declined paid profile services, so the paid route is now `Skip`; the existing public profile remains usable as evidence but is not a referring domain. Global Sources and GlobalSpec remain `Reviewing` rather than being submitted in parallel.

## 2. Backlink status/evidence

Public HKTDC profile verified: `https://sourcing.hktdc.com/en/Supplier-Store/Profile/DONGGUAN-LONGRICH-ELECTRONIC-CO-LTD/1S00OA07F`. It is a live company profile but not a verified backlink because the public page does not expose the target website link. No candidate was falsely promoted to `Applied`, `Pending Approval`, or referring-domain `Live`.

## 3. RFQ API and HubSpot diagnosis

`api/rfq.js` validates submissions, applies origin/payload controls, and uses Resend to email the sales recipient plus a visitor confirmation. It does not create or update HubSpot records. A connected HubSpot portal exists, but it is not onboarded for this workflow, FORM access requires reauthorization, and no website-to-HubSpot integration has been proven.

## 4. Five core events

All five required events are defined and have real Preview trigger evidence. `sample_request`, `email_click`, `whatsapp_click`, and `contact_form_submit` appeared in GA4 DebugView; `quote_request` appeared in GA4 Realtime. Contact DebugView parameters included the debug flag, CTA/form type, landing page, lead reference, product interest, submission ID, and UTM source/medium/campaign. The WhatsApp prefill was opened and no message was sent.

Preview delivery uses a separate Resend key named `LONGRICH Vercel Preview Test`, restricted to Sending access for `longrichpower.com`. `RFQ_FROM_EMAIL` and `RFQ_TO_EMAIL` are Preview-only and point to `test@longrichpower.com`; no Production secret was copied. Contact and RFQ both reached the success page, created no new `lead_submit_error`, and Resend marked both the notification and visitor-confirmation messages as `delivered`. All submissions are marked `Test Submission` and excluded from real inquiry totals.

Final Preview: `https://longrich-v2-prelaunch-gwormgzvm-liangzongmin88-6175s-projects.vercel.app`.

## 5. GTM change record

No GTM container was found and no GTM changes were made. Tracking is implemented through direct `gtag`; therefore there is no GTM export JSON.

## 6. Hidden fields and privacy

The isolated branch includes `utm_source`, `utm_medium`, `utm_campaign`, `landing_page`, `referrer`, `cta_source`, and `product_interest` on both online forms. Preview verification confirmed these values reach GA4 and the Resend delivery path. Combining them with identity fields may require privacy-policy or consent updates depending on visitor geography; this is recorded for legal/business review.

## 7. Scope isolation and case-study proof

The work was prepared in a clean worktree based on `origin/main`, not in the dirty workspace. The intended diff contains only lead-tracking code/config and the four Phase 3.1B operational deliverables. Verification command before commit/PR: `git diff --name-only origin/main...HEAD` plus `git status --short`, with an explicit assertion that no path begins with `case-studies/` and no `assets/case-studies.css` or `assets/icon.svg` is included.

## Completion status

- Backlink KPI: blocked on paid/account-controlled profile update; no verified referring domain yet.
- Five-event KPI: 5/5 have real GA4 verification evidence (four in DebugView, `quote_request` in Realtime).
- Google Organic attribution: controlled DebugView parameter proof passed; true Google-referral observation remains pending.
- Case-study files in branch: target is 0; final check required before commit.

## Pending confirmations / Phase 3.1C prerequisites

- HubSpot is not connected to the website form path.
- Current inquiries are delivered by Resend email.
- The attribution chain therefore stops after email delivery unless sales manually reconcile later lifecycle stages with `lead_reference`.
- Before Phase 3.1C, choose and implement the CRM handoff, field mapping, ownership, and validation for Lead → Qualified Lead → Sample/RFQ → Order.
- Revoke the Resend key `LONGRICH Vercel Preview Test` and remove the Preview secret when testing is no longer needed.
- HKTDC paid profile update is declined; select a free/account-approved alternative before submission.
