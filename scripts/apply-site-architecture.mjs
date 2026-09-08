import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const origin = 'https://www.longrichpower.com';
const date = '2026-09-07';

const clusters = {
  '/travel-adapters/': {
    title: 'Travel Adapters for OEM & Private Label | LONGRICH',
    description: 'Compare LONGRICH universal, GaN and single-country travel adapters for OEM, ODM and private-label programs.',
    h1: 'Travel Adapters',
    eyebrow: 'GLOBAL TRAVEL POWER',
    intro: 'Universal, GaN and market-specific travel adapter platforms for brands, importers and e-commerce programs.',
    directions: ['Universal Travel Adapters', 'GaN Travel Adapters', 'Single Country Travel Adapters', 'UK Travel Adapters', 'US Travel Adapters', 'EU Travel Adapters'],
    products: ['nt009-all.html','nt009-aus.html','nt009-eu.html','nt009-uk.html','nt010-g.html','nt010.html','nt011-all.html','nt011-us.html'],
    images: ['NT009-ALL-transparent.webp','NT009-AUS-transparent.webp','NT009-EU-transparent.webp','NT009-UK-transparent.webp','NT010-G-transparent.webp','NT010-transparent.webp','NT011-ALL-transparent.webp','NT011-US-transparent.webp'],
    guideLinks: [['20W vs 45W vs 70W Travel Adapter','/20w-vs-45w-vs-70w-travel-adapter.html'],['How to Choose a Universal Travel Adapter','/universal-travel-adapters.html'],['Grounded vs Ungrounded Travel Adapter','/grounded-travel-adapter.html'],['USB-C & GaN Travel Adapter Guide','/gan-travel-adapter.html']]
  },
  '/power-strips/': {
    title: 'Power Strips for OEM & Private Label | LONGRICH',
    description: 'Explore desktop, flat-plug, USB-C, individual-switch and surge protector power strips for B2B sourcing.',
    h1: 'Power Strips', eyebrow: 'DESKTOP POWER',
    intro: 'Regional power strip platforms developed for retail, office and private-label power programs.',
    directions: ['Desktop Power Strips','Flat Plug Power Strips','USB-C Power Strips','Individual Switch Power Strips','Surge Protector Power Strips'],
    products: ['ecs-aus03.html','ecs-bs019.html','ecs-eu016.html','ecs-us013.html'],
    images: ['ECS-AUS03-transparent.webp','ECS-BS019-transparent.webp','ECS-EU016-transparent.webp','ECS-US013-transparent.webp'],
    guideLinks: [['Power Strip Market Insights','/resources/market-insights/'],['Engineering & Testing','/resources/engineering-testing/'],['OEM Packaging & MOQ','/resources/oem-odm-knowledge/']]
  },
  '/wall-outlet-extenders/': {
    title: 'Wall Outlet Extenders for OEM & Private Label | LONGRICH',
    description: 'Source LONGRICH wall outlet extenders, USB wall outlets and surge wall outlet platforms for OEM programs.',
    h1: 'Wall Outlet Extenders', eyebrow: 'WALL-MOUNTED POWER',
    intro: 'A unified wall outlet extender range covering WPG series, wall taps, USB wall outlets and surge wall outlet formats.',
    directions: ['WPG Series','Wall Tap','Outlet Extender','Surge Wall Outlet','USB Wall Outlet'],
    products: ['wpg-aus01.html','wpg-aus02.html','wpg-eu030-7.html','wpg-eu032-7.html','wpg-us012-7.html','wpg-us012-9c.html','wpg01.html','wpg05.html'],
    images: ['WPG-AUS01-transparent.webp','WPG-AUS02-transparent.webp','WPG-EU030-7-transparent.webp','WPG-EU032-7-transparent.webp','WPG-US012-7-transparent.webp','WPG-US012-9C-transparent.webp','WPG01-transparent.webp','WPG05-transparent.webp'],
    guideLinks: [['Wall Outlet Extender Market','/resources/market-insights/'],['Product Testing','/resources/engineering-testing/'],['Private Label Options','/solutions/amazon-sellers/']]
  },
  '/tower-power-strips/': {
    title: 'Tower Power Strips for OEM & Private Label | LONGRICH',
    description: 'Explore USB-C tower power strip platforms for home, office and individual-switch OEM programs.',
    h1: 'Tower Power Strips', eyebrow: 'VERTICAL POWER DISTRIBUTION',
    intro: 'Space-efficient tower power platforms for office, home and retail programs with regional plug configurations.',
    directions: ['Tower Power Strip','Individual Switch Tower','Office Power Tower','Home Power Tower','USB-C Tower Power Strip'],
    products: ['ecs-aus05.html','ecs-eu010.html','ecs-us019.html'],
    images: ['ECS-AUS05-transparent.webp','ECS-EU010-transparent.webp','ECS-US019-transparent.webp'],
    guideLinks: [['Tower Power Strip Market','/resources/market-insights/'],['Engineering & Testing','/resources/engineering-testing/'],['Distributor Programs','/solutions/distributors/']]
  }
};

const solutions = {
  '/solutions/amazon-sellers/': {
    title: 'OEM Power Products for Amazon & E-commerce Sellers | LONGRICH',
    description: 'Private-label power products with low MOQ, packaging, certification support, fast sampling and product differentiation.',
    h1: 'OEM Power Products for Amazon & E-commerce Sellers',
    intro: 'Build differentiated, Amazon-ready power products on proven travel adapter, power strip and outlet extender platforms.',
    points: ['Private label and ODM','Low MOQ planning','Custom logo, colors and packaging','Certification documentation support','Fast sampling','USB-C and GaN product upgrades']
  },
  '/solutions/travel-brands/': {
    title: 'OEM / ODM Travel Power Solutions for Global Travel Brands | LONGRICH',
    description: 'Compact, grounded and GaN travel power solutions with international plug support, certification and custom industrial design.',
    h1: 'OEM / ODM Travel Power Solutions for Global Travel Brands',
    intro: 'Develop a coherent travel power range with compact structures, grounded plug systems and international market support.',
    points: ['Compact product structures','True grounded plug options','GaN charging platforms','Patented design pathways','International plug support','Custom industrial design and packaging']
  },
  '/solutions/distributors/': {
    title: 'Power Product Supply for Distributors & Importers | LONGRICH',
    description: 'Full-range power product supply with stable capacity, certification support, competitive FOB, MOQ and OEM packaging.',
    h1: 'Power Product Supply for Distributors & Importers',
    intro: 'Consolidate travel adapters, power strips, wall outlet extenders and tower power strips with one long-term manufacturing partner.',
    points: ['Full product range','Stable supply and production capacity','Certification support','Competitive FOB planning','Clear MOQ and lead times','OEM packaging for local channels']
  }
};

const resourceThemes = {
  '/resources/buying-guides/': {
    title: 'Power Product Buying Guides | LONGRICH Resources', h1: 'Buying Guides',
    description: 'Buyer-focused guides for choosing travel adapters, power configurations, suppliers and product platforms.',
    links: [['20W vs 45W vs 70W Travel Adapter','/20w-vs-45w-vs-70w-travel-adapter.html'],['How to Choose a Universal Travel Adapter','/universal-travel-adapters.html'],['Grounded vs Ungrounded Travel Adapter','/grounded-travel-adapter.html'],['Travel Adapter vs Voltage Converter','/travel-adapter-vs-voltage-converter.html'],['How to Choose a Travel Adapter Manufacturer','/how-to-choose-travel-adapter-manufacturer.html']]
  },
  '/resources/engineering-testing/': {
    title: 'Engineering & Product Testing | LONGRICH Resources', h1: 'Engineering & Testing',
    description: 'Engineering evidence for travel adapter performance, grounding, durability, temperature and full-load testing.',
    links: [['70W GaN Full-Load Test','/70w-gan-travel-adapter-full-load-test.html'],['Grounding Continuity Test','/grounding-continuity-test-travel-adapter.html'],['Plug Lock Insertion Durability Test','/plug-lock-insertion-durability-test.html'],['Wall Stability & Anti-Sag Test','/travel-adapter-wall-stability-anti-sag-test.html'],['Travel Adapter Quality Control Process','/travel-adapter-quality-control-process.html']]
  },
  '/resources/market-insights/': {
    title: 'Power Accessory Market Insights | LONGRICH Resources', h1: 'Market Insights',
    description: 'Market topic hubs for travel adapters, power strips, tower power strips and wall outlet extenders.',
    links: [['Travel Adapter Market Trends','/travel-adapters/'],['Power Strip Trends','/power-strips/'],['Tower Power Strip Market','/tower-power-strips/'],['Wall Outlet Extender Market','/wall-outlet-extenders/'],['US Power Accessory Trends','/solutions/distributors/']]
  },
  '/resources/oem-odm-knowledge/': {
    title: 'OEM / ODM Power Product Knowledge | LONGRICH Resources', h1: 'OEM / ODM Knowledge',
    description: 'Practical guidance on OEM versus ODM, customization, MOQ, certification, tooling and packaging.',
    links: [['OEM vs ODM','/oem-odm.html'],['Travel Adapter Customization','/oem-odm-travel-adapter.html'],['MOQ & Supplier Selection','/how-to-choose-travel-adapter-manufacturer.html'],['Certification & Quality Control','/travel-adapter-quality-control-process.html'],['Packaging & Private Label Programs','/solutions/amazon-sellers/']]
  }
};

const nav = `<header class="top siteHeader"><div class="wrap nav"><a href="/" class="brandLink"><div class="brand">LONGRICH<small>POWER SOLUTIONS</small></div></a><nav class="links architectureNav" aria-label="Primary navigation"><div class="navGroup"><a href="/products.html">Products</a><div class="navDropdown"><a href="/travel-adapters/">Travel Adapters</a><a href="/power-strips/">Power Strips</a><a href="/wall-outlet-extenders/">Wall Outlet Extenders</a><a href="/tower-power-strips/">Tower Power Strips</a></div></div><div class="navGroup"><a href="/solutions/amazon-sellers/">Solutions</a><div class="navDropdown"><a href="/solutions/amazon-sellers/">Amazon &amp; E-commerce Sellers</a><a href="/solutions/travel-brands/">Travel Brands</a><a href="/solutions/distributors/">Distributors &amp; Importers</a></div></div><a href="/oem-odm.html">OEM / ODM</a><div class="navGroup"><a href="/resources/">Resources</a><div class="navDropdown"><a href="/resources/buying-guides/">Buying Guides</a><a href="/resources/engineering-testing/">Engineering &amp; Testing</a><a href="/resources/market-insights/">Market Insights</a><a href="/resources/oem-odm-knowledge/">OEM / ODM Knowledge</a></div></div><a href="/manufacturing.html">Factory</a><a href="/about-us.html">About</a><a href="/contact-us.html">Contact</a><a class="cta" href="/request-a-quote.html">Request a Quote</a></nav></div></header>`;

const footer = `<footer class="footer siteFooter"><div class="wrap"><div class="footgrid architectureFooter"><div><div class="brand" style="color:white">LONGRICH<small style="color:#8fa7c2">POWER SOLUTIONS</small></div><p>Power products engineered, tested and manufactured for global B2B programs.</p></div><div><h4>Products</h4><a href="/travel-adapters/">Travel Adapters</a><a href="/power-strips/">Power Strips</a><a href="/wall-outlet-extenders/">Wall Outlet Extenders</a><a href="/tower-power-strips/">Tower Power Strips</a></div><div><h4>Solutions &amp; Resources</h4><a href="/solutions/amazon-sellers/">Amazon Sellers</a><a href="/solutions/travel-brands/">Travel Brands</a><a href="/solutions/distributors/">Distributors</a><a href="/resources/">Resources</a><a href="/oem-odm.html">OEM / ODM</a></div><div><h4>Company</h4><a href="/manufacturing.html">Factory</a><a href="/about-us.html">About</a><a href="/contact-us.html">Contact</a><a href="/privacy.html">Privacy</a><a href="/sitemap.xml">Sitemap</a></div></div><div class="copyline">© 2026 LONGRICH Power Solutions.</div></div></footer>`;

const escapeHtml = value => value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const labelFromFile = file => file.replace(/\.html$/,'').toUpperCase();
const breadcrumbHtml = items => `<nav class="siteBreadcrumb" aria-label="Breadcrumb"><div class="wrap">${items.map((item, index) => item.href ? `<a href="${item.href}">${escapeHtml(item.name)}</a><span aria-hidden="true">›</span>` : `<span aria-current="page">${escapeHtml(item.name)}</span>`).join('')}</div></nav>`;
const breadcrumbSchema = (url, items) => ({'@type':'BreadcrumbList','@id':`${origin}${url}#breadcrumb`,itemListElement:items.map((item,index)=>({'@type':'ListItem',position:index+1,name:item.name,item:`${origin}${item.href || url}`}))});
const organization = {'@type':'Organization','@id':`${origin}/#organization`,name:'LONGRICH Power Solutions',url:`${origin}/`};

const pageShell = ({url,title,description,h1,eyebrow='B2B POWER SOLUTIONS',intro,body,schema,crumbs}) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(description)}"><link rel="canonical" href="${origin}${url}">
<meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:type" content="website"><meta property="og:url" content="${origin}${url}">
<style>:root{--ink:#0f172a;--muted:#64748b;--blue:#0b63f6;--navy:#0c2f63;--line:#e2e8f0;--soft:#f5f7fa}*{box-sizing:border-box}body{margin:0;font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;color:var(--ink);line-height:1.5}.wrap{width:min(1240px,calc(100% - 48px));margin:auto}.top{background:#fff;border-bottom:1px solid var(--line)}.nav{min-height:76px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{font-size:27px;font-weight:900;color:var(--navy);letter-spacing:-1px}.brand small{display:block;margin-top:-5px;color:#475569;font-size:10px;letter-spacing:3px}.links{display:flex;align-items:center;gap:22px;font-size:14px;font-weight:700}.links a{color:var(--ink);text-decoration:none}.links .cta{padding:11px 16px;border-radius:10px;background:var(--blue);color:#fff!important}.eyebrow{color:#0047b3;font-size:12px;font-weight:850;letter-spacing:.12em;text-transform:uppercase}.footer{padding:52px 0 28px;background:#0b1f38;color:#e5edf7}.footgrid{display:grid;grid-template-columns:1.3fr repeat(3,1fr);gap:34px}.footer h4{margin:0 0 14px;color:#fff}.footer a{display:block;margin:8px 0;color:#e5edf7;text-decoration:none;font-size:13px}.copyline{margin-top:32px;padding-top:18px;border-top:1px solid rgba(255,255,255,.12);font-size:12px}@media(max-width:640px){.wrap{width:calc(100% - 28px)}}</style><link rel="stylesheet" href="/assets/site-enhancements.css?v=9"><script src="/assets/site-enhancements.js?v=9" defer></script>
<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@graph':[organization,schema,breadcrumbSchema(url,crumbs)]})}</script></head>
<body>${nav}${breadcrumbHtml(crumbs)}<main><section class="architectureHero"><div class="wrap"><div class="eyebrow">${escapeHtml(eyebrow)}</div><h1>${escapeHtml(h1)}</h1><p>${escapeHtml(intro)}</p><div class="architectureActions"><a class="architectureBtn primary" href="/request-a-quote.html">Request a Quote</a><a class="architectureBtn" href="/oem-odm.html">Explore OEM / ODM</a></div></div></section>${body}</main>${footer}</body></html>`;

const writeRoute = (url, html) => {
  const directory = path.join(root, url.replace(/^\//,'').replace(/\/$/,''));
  fs.mkdirSync(directory, {recursive:true});
  fs.writeFileSync(path.join(directory,'index.html'), html);
};

for (const [url, data] of Object.entries(clusters)) {
  const products = data.products.map((file,index)=>`<article class="architectureCard productClusterCard"><a href="/${file}"><div class="architectureMedia"><img src="/assets/images/products/${data.images[index]}" alt="${labelFromFile(file)} ${escapeHtml(data.h1)}" loading="lazy"></div><div><span>MODEL</span><h2>${labelFromFile(file)}</h2><p>View specifications, compliance information and OEM options.</p></div></a></article>`).join('');
  const directions = data.directions.map(item=>`<li>${escapeHtml(item)}</li>`).join('');
  const resources = data.guideLinks.map(([label,href])=>`<a class="architectureLinkCard" href="${href}"><strong>${escapeHtml(label)}</strong><span>Read resource →</span></a>`).join('');
  const body = `<section class="architectureSection"><div class="wrap"><div class="architectureIntro"><div><span class="sectionLabel">PRODUCT DIRECTIONS</span><h2>Source the right platform</h2></div><ul class="architecturePills">${directions}</ul></div><div class="architectureGrid productsGrid">${products}</div></div></section><section class="architectureSection architectureSoft"><div class="wrap"><div class="architectureIntro"><div><span class="sectionLabel">BUYER RESOURCES</span><h2>Compare, validate and source</h2></div><p>Move from product selection to technical evidence and an RFQ-ready program.</p></div><div class="architectureLinkGrid">${resources}</div><div class="funnelLinks"><a href="/resources/">Resources</a><span>→</span><a href="/solutions/distributors/">Buyer solutions</a><span>→</span><a href="/request-a-quote.html">RFQ</a></div></div></section>`;
  const crumbs=[{name:'Home',href:'/'},{name:'Products',href:'/products.html'},{name:data.h1}];
  const itemList = {'@type':'ItemList',itemListElement:data.products.map((file,index)=>({'@type':'ListItem',position:index+1,url:`${origin}/${file}`,name:labelFromFile(file)}))};
  const schema={'@type':'CollectionPage','@id':`${origin}${url}#page`,name:data.h1,url:`${origin}${url}`,description:data.description,mainEntity:itemList};
  writeRoute(url,pageShell({url,...data,body,schema,crumbs}));
}

for (const [url,data] of Object.entries(solutions)) {
  const points=data.points.map(point=>`<article class="architectureCard"><span>CAPABILITY</span><h2>${escapeHtml(point)}</h2><p>Scoped to your target market, channel and commercial requirements.</p></article>`).join('');
  const productLinks=Object.entries(clusters).map(([href,cluster])=>`<a class="architectureLinkCard" href="${href}"><strong>${cluster.h1}</strong><span>Explore products →</span></a>`).join('');
  const body=`<section class="architectureSection"><div class="wrap"><div class="architectureGrid solutionGrid">${points}</div></div></section><section class="architectureSection architectureSoft"><div class="wrap"><div class="architectureIntro"><div><span class="sectionLabel">PRODUCT PLATFORMS</span><h2>Build a connected product program</h2></div><p>Review the range, choose a platform, then align customization and sourcing requirements.</p></div><div class="architectureLinkGrid">${productLinks}</div><div class="funnelLinks"><a href="/oem-odm.html">OEM / ODM</a><span>→</span><a href="/resources/">Resources</a><span>→</span><a href="/request-a-quote.html">Contact / RFQ</a></div></div></section>`;
  const crumbs=[{name:'Home',href:'/'},{name:'Solutions',href:'/solutions/amazon-sellers/'},{name:data.h1}];
  const schema={'@type':'CollectionPage','@id':`${origin}${url}#page`,name:data.h1,url:`${origin}${url}`,description:data.description};
  writeRoute(url,pageShell({url,...data,eyebrow:'CUSTOMER SOLUTION',body,schema,crumbs}));
}

for (const [url,data] of Object.entries(resourceThemes)) {
  const links=data.links.map(([label,href])=>`<a class="architectureLinkCard" href="${href}"><strong>${escapeHtml(label)}</strong><span>Open resource →</span></a>`).join('');
  const body=`<section class="architectureSection"><div class="wrap"><div class="architectureLinkGrid resourceLinkGrid">${links}</div><div class="funnelLinks"><a href="/travel-adapters/">Travel Adapters</a><span>→</span><a href="/solutions/travel-brands/">Solutions</a><span>→</span><a href="/request-a-quote.html">RFQ</a></div></div></section>`;
  const crumbs=[{name:'Home',href:'/'},{name:'Resources',href:'/resources/'},{name:data.h1}];
  const schema={'@type':'CollectionPage','@id':`${origin}${url}#page`,name:data.h1,url:`${origin}${url}`,description:data.description,mainEntity:{'@type':'ItemList',itemListElement:data.links.map(([label,href],index)=>({'@type':'ListItem',position:index+1,name:label,url:`${origin}${href}`}))}};
  writeRoute(url,pageShell({url,...data,eyebrow:'RESOURCE CENTER',intro:data.description,body,schema,crumbs}));
}

{
  const url='/resources/';
  const cards=Object.entries(resourceThemes).map(([href,data])=>`<a class="architectureLinkCard themeCard" href="${href}"><span>RESOURCE THEME</span><strong>${data.h1}</strong><p>${escapeHtml(data.description)}</p></a>`).join('');
  const body=`<section class="architectureSection"><div class="wrap"><div class="architectureLinkGrid themesGrid">${cards}</div><div class="funnelLinks"><a href="/products.html">Products</a><span>→</span><a href="/solutions/amazon-sellers/">Solutions</a><span>→</span><a href="/request-a-quote.html">RFQ</a></div></div></section>`;
  const title='Power Product Resources | Buying, Testing, Markets & OEM';
  const description='Explore LONGRICH buying guides, engineering tests, market insights and OEM/ODM knowledge for B2B power product sourcing.';
  const crumbs=[{name:'Home',href:'/'},{name:'Resources'}];
  const schema={'@type':'CollectionPage','@id':`${origin}${url}#page`,name:'Resources',url:`${origin}${url}`,description};
  writeRoute(url,pageShell({url,title,description,h1:'Resources',eyebrow:'KNOWLEDGE FOR POWER PRODUCT BUYERS',intro:'Four connected resource themes for product selection, technical validation, market planning and OEM/ODM execution.',body,schema,crumbs}));
}

const productParent = file => {
  if (/^nt/i.test(file)) return {name:'Travel Adapters',href:'/travel-adapters/'};
  if (/^wpg/i.test(file)) return {name:'Wall Outlet Extenders',href:'/wall-outlet-extenders/'};
  if (/^ecs-(aus05|eu010|us019)/i.test(file)) return {name:'Tower Power Strips',href:'/tower-power-strips/'};
  if (/^ecs/i.test(file)) return {name:'Power Strips',href:'/power-strips/'};
  return {name:'Voltage Converters',href:'/voltage-converters.html'};
};
const guideTheme = file => /test|continuity|quality-control|stability|durability|review-mining/.test(file) ? {name:'Engineering & Testing',href:'/resources/engineering-testing/'} : /manufacturer|oem-odm/.test(file) ? {name:'OEM / ODM Knowledge',href:'/resources/oem-odm-knowledge/'} : {name:'Buying Guides',href:'/resources/buying-guides/'};

for (const file of fs.readdirSync(root).filter(file=>file.endsWith('.html'))) {
  const full=path.join(root,file);
  let html=fs.readFileSync(full,'utf8');
  const title=(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]||file).replace(/<[^>]+>/g,'').split('|')[0].trim();
  let crumbs;
  if (file==='index.html') crumbs=[{name:'Home'}];
  else if (/^(nt\d[^/]*|tus-[^/]+|wpg[^/]*|ecs-[^/]+)\.html$/i.test(file)) crumbs=[{name:'Home',href:'/'},{name:'Products',href:'/products.html'},productParent(file),{name:file.replace(/\.html$/,'').toUpperCase()}];
  else if (Object.values(resourceThemes).some(theme=>theme.links.some(([,href])=>href===`/${file}`))) crumbs=[{name:'Home',href:'/'},{name:'Resources',href:'/resources/'},guideTheme(file),{name:title}];
  else crumbs=[{name:'Home',href:'/'},{name:title}];

  html=html.replace(/<header class="top"[\s\S]*?<\/header>/i,nav);
  html=html.replace(/<footer class="footer"[\s\S]*?<\/footer>/i,footer);
  if (!html.includes('class="top siteHeader"')) html=html.replace(/<body[^>]*>/i,match=>`${match}${nav}`);
  if (!html.includes('class="footer siteFooter"')) html=html.replace(/<\/body>/i,`${footer}</body>`);
  if (!html.includes('class="siteBreadcrumb"')) html=html.replace(nav,`${nav}${breadcrumbHtml(crumbs)}`);
  html=html.replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,(whole,json)=>{
    try {
      const data=JSON.parse(json);
      const nodes=data['@graph']||[data];
      if(file==='nt011-us.html'&&nodes.some(node=>node['@type']==='Organization')&&!nodes.some(node=>node['@type']==='Product')) nodes.push({
        '@type':'Product','@id':`${origin}/nt011-us.html#product`,name:'NT011-US 70W GaN Universal Travel Adapter',
        model:'NT011-US',sku:'NT011-US',mpn:'NT011-US',url:`${origin}/nt011-us.html`,
        image:`${origin}/assets/images/products/NT011-US-transparent.webp`,
        description:'NT011-US 70W GaN universal travel adapter with 3 USB-C, 1 USB-A and integrated US, EU, UK and AU plugs.',
        brand:{'@type':'Brand',name:'LONGRICH'},manufacturer:{'@id':`${origin}/#organization`},category:'Universal Travel Adapters',
        additionalProperty:[
          {'@type':'PropertyValue',name:'Model',value:'NT011-US'},
          {'@type':'PropertyValue',name:'Power',value:'70W'},
          {'@type':'PropertyValue',name:'AC Rating',value:'100–250V~, 10A Max, 2500W Max'},
          {'@type':'PropertyValue',name:'Plug Type',value:'US / EU / UK / AU'},
          {'@type':'PropertyValue',name:'Dimensions / Weight',value:'53 × 85 × 33 mm / 168 g'}
        ]
      });
      const index=nodes.findIndex(node=>node['@type']==='BreadcrumbList');
      if(index>=0) nodes[index]=breadcrumbSchema(file==='index.html'?'/':`/${file}`,crumbs);
      else if(file!=='404.html') nodes.push(breadcrumbSchema(file==='index.html'?'/':`/${file}`,crumbs));
      if(data['@graph']) data['@graph']=nodes;
      else if(nodes.length>1) return `<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@graph':nodes.map(node=>{const copy={...node};delete copy['@context'];return copy;})})}</script>`;
      else Object.assign(data,nodes[0]);
      return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
    } catch { return whole; }
  });
  fs.writeFileSync(full,html);
}

const sitemapPath=path.join(root,'sitemap.xml');
let sitemap=fs.readFileSync(sitemapPath,'utf8');
const additions=[...Object.keys(clusters),...Object.keys(solutions),'/resources/',...Object.keys(resourceThemes)];
for(const url of additions){
  const loc=`${origin}${url}`;
  if(!sitemap.includes(`<loc>${loc}</loc>`)) sitemap=sitemap.replace('</urlset>',`  <url><loc>${loc}</loc><lastmod>${date}</lastmod></url>\n</urlset>`);
}
fs.writeFileSync(sitemapPath,sitemap);
console.log(JSON.stringify({createdRoutes:additions.length,enhancedRootPages:fs.readdirSync(root).filter(file=>file.endsWith('.html')).length,sitemapAdditions:additions.length},null,2));
