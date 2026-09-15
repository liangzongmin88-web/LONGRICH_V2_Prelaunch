import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const pages=fs.readdirSync(root).filter(f=>f.endsWith('.html'));
const errors=[];
const canonicals=new Map();
const indexablePages=[];
for(const file of pages){
  const html=fs.readFileSync(path.join(root,file),'utf8');
  const noindex=/<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html);
  if(!['seo-dashboard.html','404.html'].includes(file)){
    for(const tag of ['title','h1']) if(!new RegExp(`<${tag}[^>]*>[\\s\\S]*?<\\/${tag}>`,'i').test(html)) errors.push(`${file}: missing ${tag}`);
    if(!/name=["']description["']/i.test(html)) errors.push(`${file}: missing description`);
  }
  if(!noindex && file!=='404.html'){
    indexablePages.push(file);
    const canonical=html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i)?.[1]||html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i)?.[1];
    const expected=`https://www.longrichpower.com/${file==='index.html'?'':file}`;
    if(!canonical) errors.push(`${file}: missing canonical`); else {
      if(canonical!==expected) errors.push(`${file}: canonical is not self-referencing (${canonical})`);
      if(canonicals.has(canonical)) errors.push(`${file}: duplicate canonical with ${canonicals.get(canonical)}`);
      canonicals.set(canonical,file);
    }
  }
  if(!['seo-dashboard.html','404.html'].includes(file)){
    for(const m of html.matchAll(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)){try{JSON.parse(m[1])}catch(e){errors.push(`${file}: invalid JSON-LD (${e.message})`)}}
    const internal=new Set([...html.matchAll(/<a[^>]+href=["']([^"'#?]+)["']/gi)]
      .map(m=>m[1]).filter(href=>!/:|^\/\//.test(href) && /(?:\.html|\/$)/.test(href)));
    if(internal.size<2) errors.push(`${file}: fewer than 2 internal links`);
  }
  for(const m of html.matchAll(/(?:href|src)=["']([^"']+)["']/gi)){
    const target=m[1].split('#')[0].split('?')[0];
    if(!target||/^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(target)) continue;
    if(!fs.existsSync(path.join(root,target))) errors.push(`${file}: missing local target ${target}`);
  }
}
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
const sitemapFiles=new Set();
for(const m of sitemap.matchAll(/<loc>https:\/\/longrichpower\.com\/([^<]*)<\/loc>/g)){
  const file=m[1]||'index.html'; if(!fs.existsSync(path.join(root,file))) errors.push(`sitemap: missing ${file}`);
}
for(const m of sitemap.matchAll(/<loc>https:\/\/www\.longrichpower\.com\/([^<]*)<\/loc>/g)){
  const file=m[1]||'index.html'; sitemapFiles.add(file); if(!fs.existsSync(path.join(root,file))) errors.push(`sitemap: missing ${file}`);
}
for(const file of indexablePages) if(!sitemapFiles.has(file)) errors.push(`${file}: missing from sitemap`);
console.log(JSON.stringify({pages:pages.length,indexablePages:indexablePages.length,uniqueCanonicals:canonicals.size,sitemapUrls:sitemapFiles.size,errors},null,2));
if(errors.length) process.exitCode=1;
