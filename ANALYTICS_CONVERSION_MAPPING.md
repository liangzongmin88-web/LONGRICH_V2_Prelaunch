# LONGRICH Lead Analytics Mapping — Phase 3.1B

GA4 property: `LONGRICH Power Website`

Measurement ID: `G-09MR5V2JWH`

GTM: no container ID found in repository code; events use direct `gtag`.

## Core events

| Event | Trigger | Required parameters | Verification state |
|---|---|---|---|
| `contact_form_submit` | Contact API returns success | `landing_page`, `cta_type`, `product_interest`, `source`, `medium`, `lead_reference`, `submission_id` | Pass — GA4 DebugView |
| `quote_request` | RFQ API returns success | same as above | Pass — GA4 Realtime |
| `sample_request` | RFQ page is opened with `topic=sample` or matching CTA is clicked | `landing_page`, `cta_type=sample`, `product_interest`, `source`, `medium` | Pass — GA4 DebugView |
| `email_click` | Visitor clicks a `mailto:` link | `landing_page`, `cta_type=email`, `source`, `medium`, `link_url` | Pass — GA4 DebugView |
| `whatsapp_click` | Visitor clicks a WhatsApp link | `landing_page`, `cta_type=whatsapp`, `source`, `medium`, `link_url` | Pass — GA4 DebugView |

Supporting events remain `begin_lead`, `generate_lead_view`, `generate_lead`, and `lead_submit_error`.

## Attribution

First-touch values are retained in `sessionStorage` and attached to events/forms:

- `utm_source`, `utm_medium`, `utm_campaign`
- `landing_page`, `referrer`
- `cta_source`, `product_interest`
- `gclid`, `msclkid`, `ga_client_id`, `lead_reference`

When the first referrer host is Google and no UTM source is present, the browser records `source=google` and `medium=organic`. The form sends the same attribution values to the RFQ delivery email, allowing later manual reconciliation by `lead_reference`.

## Data flow

`Browser → /api/rfq → Resend batch email → sales inbox + visitor confirmation → thank-you page → GA4 generate_lead`

No HubSpot API call exists in this code path. A connected HubSpot portal was found, but the website-to-HubSpot delivery path has not been implemented or proven.

## Privacy follow-up

Attribution fields are not identity data alone, but become combined visitor-behavior and identity data when sent with name, email, company, or phone. Confirm whether the privacy policy/consent flow needs updating for visitor regions such as the EU before expanding retention or CRM synchronization.
