# GA4 → RFQ → Email → WhatsApp Mapping

Measurement ID: `G-09MR5V2JWH`

## Funnel events

| Step | GA4 event | Meaning |
|---|---|---|
| Product/category CTA | `begin_lead` | Visitor clicked through to the RFQ page |
| RFQ page | `generate_lead_view` | Visitor loaded the RFQ page |
| RFQ attempt | `rfq_submit_attempt` | A valid online form was sent to the RFQ API |
| RFQ delivered | `generate_lead` | The email provider accepted the inquiry and the visitor reached the verified thank-you state |
| RFQ error | `rfq_submit_error` | The API or email provider rejected the submission |
| Email handoff | `rfq_email_handoff` | A legacy email-preparation form opened the visitor's mail app; this is not a confirmed lead |
| Direct contact | `contact_click` | Visitor opened Email or WhatsApp |

Every event now carries:

- `lead_reference`
- `product_model`
- `source_page`
- `page_location`
- `ga_client_id`
- `funnel_step`
- `method` where applicable
- available UTM values, `gclid` and `msclkid`

The same `lead_reference` is inserted into the email subject/body and the prefilled WhatsApp message. Every online submission also gets a unique `submission_id`, preventing a second valid inquiry in the same browser session from being treated as an email-provider retry. First-touch URL, first referrer, campaign identifiers and GA client ID are included with the sales inquiry so it can be reconciled with GA4.

## GA4 administration still required

1. Register `lead_reference`, `submission_id`, `product_model`, `source_page`, `ga_client_id`, `funnel_step`, `method`, `form_type` and campaign fields as event-scoped custom dimensions.
2. Mark `generate_lead` as a key event.
3. Optionally mark `contact_click` as a key event, or report it separately as a softer conversion.
4. Build a funnel exploration using `begin_lead` → `generate_lead_view` → `rfq_submit_attempt` → `generate_lead`; report `rfq_submit_error`, `rfq_email_handoff` and `contact_click` as separate branches.

The provider acceptance confirms the website-to-email handoff. A human reply, WhatsApp conversation or won order still requires inbox/CRM status joined by `lead_reference`.

## Production environment required

The Vercel project must define `RESEND_API_KEY`, `RFQ_FROM_EMAIL` using a verified sender domain, and `RFQ_TO_EMAIL`. Keep these values in Vercel; do not commit them to the repository.
