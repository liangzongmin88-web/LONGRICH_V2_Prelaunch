import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const write = (file, value) => fs.writeFileSync(path.join(root, file), value);
const replaceOnce = (file, before, after) => {
  const source = read(file);
  if (!source.includes(before)) throw new Error(`${file}: expected text not found`);
  if (source.split(before).length !== 2) throw new Error(`${file}: expected text is not unique`);
  write(file, source.replace(before, after));
};

const guide = 'how-to-choose-travel-adapter-manufacturer.html';
replaceOnce(
  guide,
  '<p>The best supplier is not simply the factory with the lowest unit price. Travel adapters combine mechanical plug systems, AC safety, USB charging electronics and international compliance, so buyers should evaluate engineering depth, testing, manufacturing control and product-development capability together.</p>',
  '<p>Audit the supplier before comparing price: require evidence for product engineering, plug and grounding design, charging architecture, validation controls, manufacturing consistency and project ownership. Use the checklist below to turn each claim into a document, sample or test item your team can verify.</p>'
);

const auditSection = '<section class="section"><div class="wrap"><div class="eyebrow">IMPORTER AUDIT CHECKLIST</div><h2>Convert Supplier Claims Into Verifiable Evidence</h2><p>Start with the intended market, plug system, charging power and customization scope. Then ask every shortlisted factory to return the same evidence set so your comparison stays like-for-like. Review the supplier\'s <a href="travel-adapter-manufacturer.html">manufacturing scope</a>, examine its documented <a href="quality-testing.html">quality and testing approach</a>, and compare the proposed platform against the <a href="travel-adapters/">travel adapter product range</a> before approving samples.</p><table class="check"><tr><th>Audit gate</th><th>Evidence to request</th><th>Buyer decision</th></tr><tr><td>Product architecture</td><td>Target-market plug layout, grounding path, socket/shutter design and USB-C power-allocation description</td><td>Pass only when the proposed configuration matches the written RFQ</td></tr><tr><td>Validation plan</td><td>Agreed sample checks, load conditions, temperature review and mechanical reliability scope</td><td>Do not treat a generic claim as evidence for the final configuration</td></tr><tr><td>Manufacturing control</td><td>Incoming, in-process and final inspection points plus traceability method</td><td>Confirm who owns each release gate before production</td></tr><tr><td>Commercial readiness</td><td>MOQ, tooling ownership, sample/tooling/production lead times and packaging responsibility</td><td>Compare total project assumptions, not unit price alone</td></tr><tr><td>Market documentation</td><td>List of documents required for the destination market and the party responsible for each item</td><td>Require review against the exact final product; do not rely on unrelated certificates</td></tr></table><div class="actions"><a class="btn primary" href="request-a-quote.html?model=Travel%20Adapter%20Manufacturer%20Audit&amp;source=buyer-guide">Request a Manufacturer Review</a><a class="btn" href="oem-odm-travel-adapter.html">Review OEM / ODM Process</a></div></div></section>';
replaceOnce(guide, '<section class="section soft"><div class="wrap"><h2>14 Questions Every Buyer Should Ask</h2>', `${auditSection}<section class="section soft"><div class="wrap"><h2>14 Questions Every Buyer Should Ask</h2>`);
replaceOnce(guide, 'href="request-a-quote.html">Submit Buyer Requirements</a>', 'href="request-a-quote.html?model=Travel%20Adapter%20Manufacturer%20Audit&amp;source=buyer-guide">Submit Buyer Requirements</a>');

const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'What should I ask a travel adapter supplier before requesting samples?', acceptedAnswer: { '@type': 'Answer', text: 'Define target market, plug system, charging power, grounding, required documentation, target size, MOQ and expected retail positioning first.' } },
  { '@type': 'Question', name: 'Should I choose OEM or ODM?', acceptedAnswer: { '@type': 'Answer', text: 'OEM is suitable for faster customization of an existing platform. ODM is suitable when a brand needs differentiated product architecture.' } },
  { '@type': 'Question', name: 'How important is factory capacity?', acceptedAnswer: { '@type': 'Answer', text: 'Capacity matters after product validation, while engineering and quality systems remain important throughout development.' } },
  { '@type': 'Question', name: 'Is the cheapest supplier usually the best choice?', acceptedAnswer: { '@type': 'Answer', text: 'No. Compare equivalent specifications, materials, safety architecture, testing and compliance assumptions before comparing unit price.' } }
] };
replaceOnce(guide, '</head>', `<script type="application/ld+json">${JSON.stringify(faq)}</script></head>`);

replaceOnce(
  'engineering-resources.html',
  '<article class="card"><h3>How to Choose a Travel Adapter Manufacturer</h3><p>Supplier evaluation framework covering engineering, testing, production, compliance support and development capability.</p><a href="how-to-choose-travel-adapter-manufacturer.html">Read sourcing guide →</a></article>',
  '<article class="card"><h3>Travel Adapter Manufacturer Audit Checklist</h3><p>Updated importer scorecard covering evidence requests, engineering, validation, production control, documentation and project ownership.</p><a href="how-to-choose-travel-adapter-manufacturer.html">Use the audit checklist →</a></article>'
);

replaceOnce(
  'sitemap.xml',
  '<url><loc>https://www.longrichpower.com/how-to-choose-travel-adapter-manufacturer.html</loc><lastmod>2026-09-04</lastmod></url>',
  '<url><loc>https://www.longrichpower.com/how-to-choose-travel-adapter-manufacturer.html</loc><lastmod>2026-09-14</lastmod></url>'
);

const pipeline = read('CONTENT_PIPELINE_20.md');
if (!pipeline.includes('## Weekly publication log')) {
  write('CONTENT_PIPELINE_20.md', `${pipeline.trimEnd()}\n\n## Weekly publication log\n\n| Date | Item | Decision | URL | Status |\n|---|---:|---|---|---|\n| 2026-09-14 | 1 | Existing page already owns the supplier-selection intent; strengthened it instead of creating a near-duplicate URL. | \`/how-to-choose-travel-adapter-manufacturer.html\` | Local content, resource index and sitemap updates complete; validation pending; production deployment/HTTP 200 not yet confirmed. |\n`);
}

console.log('Prepared weekly content item 1 without creating a duplicate URL.');
