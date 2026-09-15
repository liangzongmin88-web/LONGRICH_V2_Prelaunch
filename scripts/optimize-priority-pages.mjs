import fs from 'node:fs';

const pages = {
  'nt011-us.html': { model: 'NT011-US', market: 'US / JP', use: 'premium 70W GaN universal travel-adapter programs', links: [['70W GaN full-load test','70w-gan-travel-adapter-full-load-test.html'],['20W vs 45W vs 70W guide','20w-vs-45w-vs-70w-travel-adapter.html']] },
  'nt011-all.html': { model: 'NT011-ALL', market: 'multi-market', use: 'premium multi-market 70W GaN programs', links: [['GaN travel-adapter sourcing','gan-travel-adapter.html'],['Grounding continuity','grounding-continuity-test-travel-adapter.html']] },
  'nt009-all.html': { model: 'NT009-ALL', market: 'multi-market', use: 'value-focused 20W universal travel-adapter programs', links: [['Universal adapter platforms','universal-travel-adapters.html'],['Wall-stability engineering','travel-adapter-wall-stability-anti-sag-test.html']] },
  'nt009-uk.html': { model: 'NT009-UK', market: 'UK / HK', use: '20W UK/HK-market travel-adapter programs', links: [['Grounded travel adapters','grounded-travel-adapter.html'],['Manufacturer evaluation guide','how-to-choose-travel-adapter-manufacturer.html']] },
  'nt010.html': { model: 'NT010', market: 'US / JP / EU', use: 'mainstream 45W universal travel-adapter programs', links: [['Power selection guide','20w-vs-45w-vs-70w-travel-adapter.html'],['OEM/ODM process','oem-odm-travel-adapter.html']] },
  'tus-11.html': { model: 'TUS-11', market: '230V to 115V applications', use: '2000W pure-sine-wave step-down converter programs', links: [['Adapter vs voltage converter','travel-adapter-vs-voltage-converter.html'],['Quality and testing','quality-testing.html']] },
  'ecs-us019.html': { model: 'ECS-US019', market: 'US / JP', use: 'US tower power-strip private-label programs', links: [['Power-strip category','power-strips-wall-outlets.html'],['Manufacturing capability','manufacturing.html']] },
  'ecs-eu010.html': { model: 'ECS-EU010', market: 'EU', use: 'EU tower power-strip OEM programs', links: [['Power-strip category','power-strips-wall-outlets.html'],['Quality and testing','quality-testing.html']] },
  'ecs-bs019.html': { model: 'ECS-BS019', market: 'UK', use: 'UK power-strip OEM programs', links: [['Power-strip category','power-strips-wall-outlets.html'],['OEM/ODM capability','oem-odm.html']] },
  'wpg05.html': { model: 'WPG05', market: 'US / JP', use: 'USB-equipped wall-outlet private-label programs', links: [['Power-strip and outlet category','power-strips-wall-outlets.html'],['Manufacturing capability','manufacturing.html']] },
};

for (const [file, p] of Object.entries(pages)) {
  let html = fs.readFileSync(file, 'utf8');
  if (html.includes('data-priority-product="2026-09"')) continue;
  const section = `\n<section class="section soft" data-priority-product="2026-09"><div class="wrap"><div class="head"><div><div class="eyebrow">BUYER DECISION CHECKLIST</div><h2>Evaluate ${p.model} for Your Program</h2></div><p>${p.model} is positioned for ${p.use}. Confirm the final configuration against your target market and channel requirements before ordering.</p></div><div class="cards"><div class="card"><b>Market fit</b><span>Confirm ${p.market}, plug/socket configuration and required documentation.</span></div><div class="card"><b>Commercial scope</b><span>Share initial order quantity, annual forecast, target cost and launch timing.</span></div><div class="card"><b>Customization</b><span>Define logo, color, packaging, manuals and any structural or electrical changes.</span></div><div class="card"><b>Validation plan</b><span>Agree samples, performance checks and market-specific compliance review before mass production.</span></div></div><div class="btns" style="margin-top:24px"><a class="btn primary" href="request-a-quote.html?model=${encodeURIComponent(p.model)}&source=priority-product">Request ${p.model} Quote</a><a class="btn" href="${p.links[0][1]}">${p.links[0][0]}</a><a class="btn" href="${p.links[1][1]}">${p.links[1][0]}</a></div></div></section>\n`;
  html = html.replace(/<footer class="footer">/, section + '<footer class="footer">');
  html = html.replace(/href="request-a-quote\.html"/g, `href="request-a-quote.html?model=${encodeURIComponent(p.model)}"`);
  fs.writeFileSync(file, html);
}

console.log(`Optimized ${Object.keys(pages).length} priority product pages.`);
