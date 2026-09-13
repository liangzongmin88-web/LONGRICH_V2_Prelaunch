# Lead Tracking Verification — 2026-09-13

## Current-state evidence

| Check | Result | Evidence |
|---|---|---|
| GA4 installed | Pass | `G-09MR5V2JWH` in `assets/site-enhancements.js`; GA4 property `LONGRICH Power Website` accessible |
| GTM installed | No evidence | No `GTM-*` container ID found in repository |
| DebugView access | Pass | GA4 Admin → DebugView opened successfully |
| Debug devices/events before testing | 0 / 0 | DebugView showed no development devices or events in the prior 30 minutes |
| RFQ API production route | Present | `https://www.longrichpower.com/api/rfq` responded HTTP 405 to HEAD with `Allow: POST` |
| RFQ API Preview route | Pass | Preview responded HTTP 405/`Allow: POST` to HEAD; empty JSON POST returned the expected HTTP 400 validation error and sent no email |
| HubSpot delivery | Not verified / not implemented | `api/rfq.js` sends via Resend; no HubSpot API call exists |

## Core event verification

| Event | Code definition | Real trigger | DebugView evidence | Result |
|---|---|---|---|---|
| `contact_form_submit` | Added | Contact test submitted with `test@longrichpower.com` and marked `Test Submission`; success page returned lead reference `LR-MTZM66RX-JXRG` | GA4 DebugView at 02:27 showed the event and `debug_mode`, `cta_type`, `form_type`, `landing_page`, `lead_reference`, `product_interest`, `submission_id`, `utm_source`, `utm_medium`, and `utm_campaign` parameters | Pass |
| `quote_request` | Added | RFQ test submitted with `test@longrichpower.com` and marked `Test Submission`; success page returned a lead reference | GA4 Realtime event report showed `quote_request` count 1; Resend delivery and the success-page response independently verified the same test path | Pass |
| `sample_request` | Added | Preview URL opened with `topic=sample&model=ECS-US013` | DebugView event at 00:49:49; parameters included `source=google`, `medium=organic`, `cta_type=sample`, `product_interest=ECS-US013`, `landing_page` | Pass |
| `email_click` | Added | Preview email link clicked; external mail navigation was blocked, but the on-page event fired | DebugView event at 00:49:44; parameters included `debug_mode`, `landing_page`, `link_url`, `source`, `medium`, `cta_type` | Pass |
| `whatsapp_click` | Added | WhatsApp prefill opened with approval; no message sent | DebugView event at 01:59:02; parameters included `debug_mode`, `cta_type`, `landing_page`, `link_url`, `source`, `medium` | Pass |

No event is marked verified until it appears in GA4 DebugView with its parameters. A real form test will send email to the configured sales recipient and the test visitor address; explicit test data/authorization is required before submission.

The first authorized Contact and RFQ attempts were recorded as `Test Submission` and appeared as `lead_submit_error` because Preview initially lacked the delivery variables. A separate Resend key named `LONGRICH Vercel Preview Test` was then created with Sending access restricted to `longrichpower.com`. Vercel now has Preview-only `RESEND_API_KEY`, `RFQ_FROM_EMAIL`, and `RFQ_TO_EMAIL` entries; Production values were not copied or changed.

After redeployment, Contact and RFQ both reached the success page without a new `lead_submit_error`. Resend showed the sales-copy and visitor-confirmation messages to `test@longrichpower.com` as `delivered`. Supplemental retries required to verify the GA4 navigation handoff are also test submissions and must not be included in real lead totals. The final implementation waits for the GA4 event callback (with a bounded timeout) before navigating to the thank-you page, preventing the first-interaction Contact event from being dropped.

Final Preview: `https://longrich-v2-prelaunch-gwormgzvm-liangzongmin88-6175s-projects.vercel.app`

Rotation reminder: revoke `LONGRICH Vercel Preview Test` in Resend and remove the Preview-only secret from Vercel when Phase 3.1B testing is finished.

## Organic attribution verification

Code maps a Google referrer without UTMs to `source=google`, `medium=organic`, and carries `landing_page`, `cta_type`, and `product_interest`. A controlled DebugView test confirmed `source=google`, `medium=organic`, `cta_type=sample`, `product_interest=ECS-US013`, and the retained landing page. A true search-engine referral remains a later production observation rather than something that can be fabricated in testing.

Preview evidence URL: `https://longrich-phase31b.vercel.app/request-a-quote.html?ga_debug=1&topic=sample&model=ECS-US013&utm_source=google&utm_medium=organic&utm_campaign=phase31b-test`

## Privacy note

The seven hidden attribution fields become combined identity/behavior data when submitted with contact details. Privacy policy and regional consent requirements remain a business/legal review item.

## Phase 3.1C prerequisite / pending confirmation

HubSpot is not connected to the website submission path. Current inquiries go through Resend email, and the attribution chain stops after email delivery unless sales outcomes are manually reconciled using `lead_reference`. Before Phase 3.1C, decide whether to integrate HubSpot (or another CRM), assign field ownership, and verify the complete Lead → Qualified Lead → Sample/RFQ → Order lifecycle.
