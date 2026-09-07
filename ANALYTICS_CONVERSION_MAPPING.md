# GA4 → RFQ → Email → WhatsApp Mapping

Measurement ID: `G-09MR5V2JWH`

## Funnel events

| Step | GA4 event | Meaning |
|---|---|---|
| Product/category CTA | `begin_lead` | Visitor clicked through to the RFQ page |
| RFQ page | `generate_lead_view` | Visitor loaded the RFQ page |
| RFQ form | `generate_lead` | Valid form data was converted into an email inquiry |
| Direct contact | `contact_click` | Visitor opened Email or WhatsApp |

Every event now carries:

- `lead_reference`
- `product_model`
- `source_page`
- `page_location`
- `funnel_step`
- `method` where applicable

The same `lead_reference` is inserted into the email subject/body and the prefilled WhatsApp message. Search the received inquiry for that reference to reconcile it with GA4.

## GA4 administration still required

1. Register `lead_reference`, `product_model`, `source_page`, `funnel_step` and `method` as event-scoped custom dimensions.
2. Mark `generate_lead` as a key event.
3. Optionally mark `contact_click` as a key event, or report it separately as a softer conversion.
4. Build a funnel exploration using `begin_lead` → `generate_lead_view` → `generate_lead` / `contact_click`.

Browser events prove clicks and form handoff. Confirming that an email was actually sent, a WhatsApp conversation was answered, or an order was won requires inbox/CRM status joined by `lead_reference`.
