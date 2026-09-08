import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const origin='https://www.longrichpower.com';
const walk=directory=>fs.readdirSync(directory,{withFileTypes:true}).flatMap(entry=>{
  if(['assets','scripts','.git','.github','.vercel'].includes(entry.name)) return [];
  const full=path.join(directory,entry.name);
  return entry.isDirectory()?walk(full):entry.name.endsWith('.html')?[full]:[];
});
const files=walk(root);
const errors=[];
const warnings=[];
const titles=new Map();
const productPattern=/^(nt\d[^/]*|tus-[^/]+|wpg[^/]*|ecs-[^/]+)\.html$/i;
const productFiles=fs.readdirSync(root).filter(file=>productPattern.test(file)).sort();
const newRoutes=['/travel-adapters/','/power-strips/','/wall-outlet-extenders/','/tower-power-strips/','/solutions/amazon-sellers/','/solutions/travel-brands/','/solutions/distributors/','/resources/','/resources/buying-guides/','/resources/engineering-testing/','/resources/market-insights/','/resources/oem-odm-knowledge/'];

const routeFor=file=>{
  const rel=path.relative(root,file).split(path.sep).join('/');
  if(rel==='index.html') return '/';
  if(rel.endsWith('/index.html')) return `/${rel.slice(0,-10)}`;
  return `/${rel}`;
};
const resolveTarget=href=>{
  let target=href.split('#')[0].split('?')[0];
  if(!target||/^(?:https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(target)) return null;
  if(target.startsWith('/')) target=target.slice(1);
  const full=path.join(root,target);
  if(target===''||target.endsWith('/')) return path.join(full,'index.html');
  return full;
};

for(const file of files){
  const html=fs.readFileSync(file,'utf8');
  const route=routeFor(file);
  const rel=path.relative(root,file);
  const title=(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]||'').replace(/<[^>]+>/g,'').trim();
  const h1Count=(html.match(/<h1\b/gi)||[]).length;
  const description=/<meta[^>]+name=["']description["']/i.test(html);
  const canonical=html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i)?.[1]||html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i)?.[1];
  const expected=`${origin}${route}`;
  const noindex=/<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html);
  if(rel!=='404.html'){
    if(!title) errors.push(`${rel}: missing title`);
    if(!description) errors.push(`${rel}: missing meta description`);
    if(h1Count!==1) errors.push(`${rel}: expected 1 H1, found ${h1Count}`);
    if(canonical!==expected) errors.push(`${rel}: canonical mismatch (${canonical||'missing'} != ${expected})`);
  }
  if(title){
    if(titles.has(title)) errors.push(`${rel}: duplicate title with ${titles.get(title)} (${title})`);
    else titles.set(title,rel);
  }
  const schemaTypes=new Set();
  for(const match of html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)){
    try{
      const data=JSON.parse(match[1]);
      (data['@graph']||[data]).forEach(node=>schemaTypes.add(node['@type']));
    }catch(error){errors.push(`${rel}: invalid JSON-LD (${error.message})`)}
  }
  if(productPattern.test(rel)){
    for(const type of ['Product','BreadcrumbList']) if(!schemaTypes.has(type)) errors.push(`${rel}: missing ${type} schema`);
  }
  if(newRoutes.includes(route)){
    for(const type of ['Organization','CollectionPage','BreadcrumbList']) if(!schemaTypes.has(type)) errors.push(`${rel}: missing ${type} schema`);
  }
  for(const image of html.matchAll(/<img\b([^>]*)>/gi)) if(!/\balt=["'][^"']*["']/i.test(image[1])) errors.push(`${rel}: image missing alt`);
  for(const match of html.matchAll(/(?:href|src)=["']([^"']+)["']/gi)){
    const target=resolveTarget(match[1]);
    if(target&&!fs.existsSync(target)) errors.push(`${rel}: broken local reference ${match[1]}`);
  }
  if(!noindex&&rel!=='404.html'&&!html.includes('siteBreadcrumb')) errors.push(`${rel}: missing visible breadcrumb`);
}

const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
const sitemapUrls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match=>match[1]);
const duplicates=sitemapUrls.filter((url,index)=>sitemapUrls.indexOf(url)!==index);
for(const duplicate of new Set(duplicates)) errors.push(`sitemap: duplicate URL ${duplicate}`);
for(const url of sitemapUrls){
  if(!url.startsWith(origin)) { errors.push(`sitemap: unexpected origin ${url}`); continue; }
  const target=resolveTarget(url.slice(origin.length)||'/');
  if(target&&!fs.existsSync(target)) errors.push(`sitemap: URL has no file ${url}`);
}
for(const route of newRoutes) if(!sitemapUrls.includes(`${origin}${route}`)) errors.push(`sitemap: missing ${route}`);
for(const file of productFiles){
  const html=fs.readFileSync(path.join(root,file),'utf8');
  if(!html.includes(`${origin}/${file}`)) errors.push(`${file}: original canonical/product URL absent`);
  if(!/<script[^>]+application\/ld\+json[\s\S]*?"@type":"Product"/i.test(html)) errors.push(`${file}: Product schema removed`);
  if(!/href="\/(?:travel-adapters|power-strips|wall-outlet-extenders|tower-power-strips)\/"/.test(html)&&!html.includes('href="/voltage-converters.html"')) errors.push(`${file}: no category link`);
}

const result={htmlPages:files.length,existingProductUrlsPreserved:productFiles.length,newRoutes:newRoutes.length,sitemapUrls:sitemapUrls.length,uniqueTitles:titles.size,brokenLinks:errors.filter(error=>error.includes('broken local reference')||error.includes('URL has no file')).length,errors,warnings};
console.log(JSON.stringify(result,null,2));
if(errors.length) process.exitCode=1;
