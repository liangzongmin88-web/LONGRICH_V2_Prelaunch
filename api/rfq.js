const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_FIELDS = [
  'Name', 'Company', 'Business Email', 'Phone / WhatsApp', 'Product / Model',
  'Estimated Quantity', 'Target Market', 'Required Timeline', 'Project Details',
  'Lead Reference', 'Source Page', 'Form Type', 'Country / Region',
  'Product Interest', 'Message', 'Submission ID', 'GA Client ID',
  'utm_source', 'utm_medium', 'utm_campaign', 'landing_page', 'referrer',
  'cta_source', 'product_interest',
];

function clean(value, maxLength = 3000) {
  return String(value || '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, maxLength);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  })[character]);
}

module.exports = async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store');
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed' });
  }
  if (Number(request.headers['content-length'] || 0) > 30000) {
    return response.status(413).json({ error: 'Request is too large.' });
  }
  const origin = clean(request.headers.origin, 500);
  if (origin) {
    let allowedOrigin = false;
    try {
      const hostname = new URL(origin).hostname.toLowerCase();
      allowedOrigin = hostname === 'longrichpower.com' || hostname === 'www.longrichpower.com' || hostname === 'localhost' || hostname.endsWith('.vercel.app');
    } catch {}
    if (!allowedOrigin) return response.status(403).json({ error: 'Origin not allowed.' });
  }

  const body = request.body && typeof request.body === 'object' ? request.body : {};
  if (clean(body.website)) return response.status(200).json({ ok: true });
  const name = clean(body.Name, 120);
  const company = clean(body.Company, 160);
  const email = clean(body['Business Email'], 254).toLowerCase();
  const isContactForm = clean(body['Form Type'], 20) === 'contact';
  const market = clean(body['Target Market'] || (isContactForm ? body['Country / Region'] : ''), 160);
  const details = clean(body['Project Details'] || (isContactForm ? body.Message : ''));
  const reference = clean(body['Lead Reference'], 80) || `LR-${Date.now().toString(36).toUpperCase()}`;
  const submissionId = clean(body['Submission ID'], 100) || `SUB-${Date.now().toString(36).toUpperCase()}`;
  if (!name || !company || !EMAIL_PATTERN.test(email) || !market || details.length < 10) {
    return response.status(400).json({ error: 'Please complete all required fields with valid information.' });
  }

  const fromEmail = clean(process.env.RFQ_FROM_EMAIL, 254);
  const toEmail = clean(process.env.RFQ_TO_EMAIL, 254);
  if (!process.env.RESEND_API_KEY || !fromEmail || !EMAIL_PATTERN.test(toEmail)) {
    return response.status(503).json({ error: 'RFQ delivery is not configured.' });
  }
  const fields = ALLOWED_FIELDS.map(key => [key, clean(body[key])]).filter(([, value]) => value);
  const html = fields.map(([key, value]) => `<tr><th style="padding:8px;text-align:left;vertical-align:top">${escapeHtml(key)}</th><td style="padding:8px">${escapeHtml(value)}</td></tr>`).join('');
  const formType = isContactForm ? 'Website inquiry' : 'Website RFQ';
  const model = clean(body['Product / Model'] || (isContactForm ? body['Product Interest'] : ''), 120) || 'Product to be confirmed';
  let resendResponse;
  try {
    resendResponse = await fetch('https://api.resend.com/emails/batch', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': `rfq-${submissionId}`.slice(0, 256),
        'User-Agent': 'LONGRICH-RFQ/1.0',
      },
      body: JSON.stringify([
        { from: fromEmail, to: [toEmail], reply_to: email, subject: `[${reference}] ${formType} — ${model}`, html: `<h2>New LONGRICH ${escapeHtml(formType.toLowerCase())}</h2><table style="border-collapse:collapse">${html}</table>` },
        { from: fromEmail, to: [email], reply_to: toEmail, subject: `We received your LONGRICH inquiry — ${reference}`, html: `<h2>Thank you, ${escapeHtml(name)}.</h2><p>We received your inquiry and our sales team will review the project details.</p><p>Reference: ${escapeHtml(reference)}</p><p>LONGRICH Power Solutions</p>` },
      ]),
    });
  } catch (error) {
    console.error('RFQ delivery network failure', error instanceof Error ? error.message : 'unknown');
    return response.status(502).json({ error: 'RFQ delivery failed.' });
  }
  if (!resendResponse.ok) {
    console.error('RFQ delivery failed', resendResponse.status, await resendResponse.text());
    return response.status(502).json({ error: 'RFQ delivery failed.' });
  }
  return response.status(200).json({ ok: true, reference });
};
