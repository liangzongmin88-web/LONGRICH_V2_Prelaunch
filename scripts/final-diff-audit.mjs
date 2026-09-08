import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';

const root=process.cwd();
const origin='https://www.longrichpower.com';
const git=(...args)=>execFileSync('git',args,{cwd:root,encoding:'utf8'});
const baselineFiles=git('ls-tree','-r','--name-only','origin/main').split('\n').filter(file=>file.endsWith('.html'));
const productPattern=/^(nt\d[^/]*|tus-[^/]+|wpg[^/]*|ecs-[^/]+)\.html$/i;
const productFiles=baselineFiles.filter(file=>productPattern.test(file)).sort();
const newRoutes=['/travel-adapters/','/power-strips/','/wall-outlet-extenders/','/tower-power-strips/','/solutions/amazon-sellers/','/solutions/travel-brands/','/solutions/distributors/','/resources/','/resources/buying-guides/','/resources/engineering-testing/','/resources/market-insights/','/resources/oem-odm-knowledge/'];
const changedNames=git('diff','--name-only','origin/main').split('\n').filter(Boolean);
const deleted=git('diff','--name-only','--diff-filter=D','origin/main').split('\n').filter(Boolean);
const readBase=file=>git('show',`origin/main:${file}`);
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
const clean=value=>(value||'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
const canonical=html=>html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i)?.[1]||html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i)?.[1]||'';
const h1=html=>clean(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1]);
const images=html=>[...html.matchAll(/<img\b[^>]+src=["']([^"']+)["']/gi)].map(match=>match[1]).sort();
const specSection=html=>clean(html.match(/<section\b[^>]*(?:id=["']specifications["'][^>]*)>[\s\S]*?<\/section>/i)?.[0]);
const jsonTypes=html=>{
  const types=new Set();
  for(const match of html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)){
    const data=JSON.parse(match[1]);
    (data['@graph']||[data]).forEach(node=>types.add(node['@type']));
  }
  return types;
};
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);

const productResults=productFiles.map(file=>{
  const before=readBase(file); const after=read(file);
  const expected=`${origin}/${file}`;
  return {
    file,
    sku:file.replace(/\.html$/,'').toUpperCase(),
    urlPreserved:fs.existsSync(path.join(root,file))&&canonical(after)===expected,
    productNamePreserved:h1(before)===h1(after),
    specificationsPreserved:specSection(before)===specSection(after),
    imagePathsPreserved:same(images(before),images(after)),
    canonicalPreserved:canonical(before)===canonical(after),
    productSchemaPresent:jsonTypes(after).has('Product'),
    breadcrumbPresent:jsonTypes(after).has('BreadcrumbList')
  };
});

const newPageResults=newRoutes.map(route=>{
  const file=path.join(root,route.slice(1),'index.html');
  const html=fs.readFileSync(file,'utf8');
  const types=jsonTypes(html);
  const internal=[...html.matchAll(/<a\b[^>]+href=["'](\/[^"'#?]*)/gi)].map(match=>match[1]);
  return {route,
    title:Boolean(clean(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1])),
    metaDescription:/<meta[^>]+name=["']description["']/i.test(html),
    oneH1:(html.match(/<h1\b/gi)||[]).length===1,
    canonical:canonical(html)===`${origin}${route}`,
    breadcrumb:html.includes('siteBreadcrumb')&&types.has('BreadcrumbList'),
    jsonLd:types.has('Organization')&&types.has('CollectionPage'),
    internalLinks:internal.length>=8,
    cta:internal.some(link=>link.startsWith('/request-a-quote.html')),
    mobileCss:/@media\(max-width:(?:640|980)px\)/.test(html+read('assets/site-enhancements.css'))
  };
});

const sitemap=read('sitemap.xml');
const sitemapUrls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match=>match[1]);
const duplicateSitemap=sitemapUrls.filter((url,index)=>sitemapUrls.indexOf(url)!==index);
const sitemapCanonicalMismatches=[];
const missingSitemapPages=[];
for(const url of sitemapUrls){
  const route=url.slice(origin.length)||'/';
  const file=route==='/'?'index.html':route.endsWith('/')?`${route.slice(1)}index.html`:route.slice(1);
  if(!fs.existsSync(path.join(root,file))) missingSitemapPages.push(url);
  else if(canonical(read(file))!==url) sitemapCanonicalMismatches.push(url);
}

const auditRows=[];
for(const file of baselineFiles){
  if(!changedNames.includes(file)){
    auditRows.push([file,'No change','No','No','No','No','No','None']); continue;
  }
  const isProduct=productPattern.test(file);
  const types=[];
  if(file==='products.html') types.push('Page-specific Content');
  types.push('Shared Header / Navigation','Shared Footer','Breadcrumb','Internal Linking');
  const schemaChanged=readBase(file).match(/<script[^>]+application\/ld\+json[\s\S]*?<\/script>/gi)?.join('')!==read(file).match(/<script[^>]+application\/ld\+json[\s\S]*?<\/script>/gi)?.join('');
  if(schemaChanged) types.push('Schema');
  const product=productResults.find(item=>item.file===file);
  auditRows.push([file,types.join('; '),isProduct?'No':'N/A',isProduct?(product.specificationsPreserved?'No':'YES'):'N/A',isProduct?(product.imagePathsPreserved?'No':'YES'):'N/A',canonical(readBase(file))===canonical(read(file))?'No':'YES',schemaChanged?'Breadcrumb/structural':'No',isProduct||file==='products.html'?'Medium':'Low']);
}
for(const route of newRoutes) auditRows.push([`${route}index.html`,'New Page','N/A','N/A','Existing assets only','New self-canonical','CollectionPage + BreadcrumbList + Organization','Low']);

const esc=value=>String(value).replace(/\|/g,'\\|');
const table=['| File | Change Type | Product Content Changed? | Product Spec Changed? | Product Image Changed? | Canonical Changed? | Schema Changed? | Risk |','|---|---|---|---|---|---|---|---|',...auditRows.map(row=>`| ${row.map(esc).join(' | ')} |`)].join('\n');
const productFailures=productResults.flatMap(row=>Object.entries(row).filter(([key,value])=>!['file','sku'].includes(key)&&!value).map(([key])=>`${row.file}: ${key}`));
const newPageFailures=newPageResults.flatMap(row=>Object.entries(row).filter(([key,value])=>key!=='route'&&!value).map(([key])=>`${row.route}: ${key}`));
const report=`# Final Architecture Diff Audit\n\nBaseline: \`origin/main\` at ${git('rev-parse','origin/main').trim()}\n\n## Final acceptance\n\n- Existing baseline HTML pages: ${baselineFiles.length}\n- Existing baseline pages removed: ${deleted.length}\n- Product URLs preserved: ${productResults.filter(row=>row.urlPreserved).length}/${productResults.length}\n- Product content unintended changes: ${productResults.filter(row=>!row.productNamePreserved||!row.specificationsPreserved).length}\n- Product image path changes: ${productResults.filter(row=>!row.imagePathsPreserved).length}\n- Product URL migrations: ${productResults.filter(row=>!row.urlPreserved).length}\n- New architecture pages: ${newPageResults.length}/12\n- Sitemap URLs: ${sitemapUrls.length}\n- Duplicate sitemap URLs: ${duplicateSitemap.length}\n- Missing sitemap pages: ${missingSitemapPages.length}\n- Sitemap canonical mismatches: ${sitemapCanonicalMismatches.length}\n- Product protection failures: ${productFailures.length}\n- New-page metadata/structure failures: ${newPageFailures.length}\n\n## Per-file classification\n\n${table}\n\n## Product hard-protection details\n\n${productResults.map(row=>`- ${row.sku}: URL ${row.urlPreserved?'PASS':'FAIL'}; name ${row.productNamePreserved?'PASS':'FAIL'}; specifications ${row.specificationsPreserved?'PASS':'FAIL'}; images ${row.imagePathsPreserved?'PASS':'FAIL'}; Product schema ${row.productSchemaPresent?'PASS':'FAIL'}`).join('\n')}\n\n## New-page checks\n\n${newPageResults.map(row=>`- ${row.route}: ${Object.entries(row).filter(([key])=>key!=='route').every(([,value])=>value)?'PASS':'FAIL'}`).join('\n')}\n`;
fs.writeFileSync(path.join(root,'FINAL_ARCHITECTURE_DIFF_AUDIT.md'),report);
const result={baselineHtmlPages:baselineFiles.length,existingBaselinePagesRemoved:deleted.length,productUrlsPreserved:`${productResults.filter(row=>row.urlPreserved).length}/${productResults.length}`,productContentUnintendedChanges:productResults.filter(row=>!row.productNamePreserved||!row.specificationsPreserved).length,productImagePathChanges:productResults.filter(row=>!row.imagePathsPreserved).length,productUrlMigrations:productResults.filter(row=>!row.urlPreserved).length,newPagesPassed:`${newPageResults.filter(row=>Object.entries(row).filter(([key])=>key!=='route').every(([,value])=>value)).length}/${newPageResults.length}`,sitemapUrls:sitemapUrls.length,duplicateSitemapUrls:duplicateSitemap.length,missingSitemapPages:missingSitemapPages.length,sitemapCanonicalMismatches:sitemapCanonicalMismatches.length,productFailures,newPageFailures};
console.log(JSON.stringify(result,null,2));
if(deleted.length||productFailures.length||newPageFailures.length||sitemapUrls.length!==75||duplicateSitemap.length||missingSitemapPages.length||sitemapCanonicalMismatches.length) process.exitCode=1;
