import fs from 'node:fs';

const file='products.html';
let html=fs.readFileSync(file,'utf8');
const cards=[
  ['Universal Travel Adapters','Travel Adapters','Universal, GaN and country-specific platforms from 20W to 70W for global programs.','/travel-adapters/'],
  ['Voltage Converters','Power Strips','Desktop, flat-plug, USB-C, individual-switch and surge protector platforms.','/power-strips/'],
  ['Travel Plug Adapters','Wall Outlet Extenders','WPG series, wall taps, USB wall outlets and surge wall outlet platforms.','/wall-outlet-extenders/'],
  ['Power Strips &amp; Wall Outlets','Tower Power Strips','Vertical USB-C power platforms for office, home and individual-switch programs.','/tower-power-strips/']
];
for(const [oldName,newName,description,href] of cards){
  const escaped=oldName.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const pattern=new RegExp(`<h3>${escaped}<\\/h3><p>[^<]*<\\/p><a href="[^"]+">Explore Category →<\\/a>`);
  if(!pattern.test(html)) throw new Error(`Products hub category not found: ${oldName}`);
  html=html.replace(pattern,`<h3>${newName}</h3><p>${description}</p><a href="${href}">Explore Category →</a>`);
}
html=html.replace('Thirty Models, Four Clear Categories','Thirty Models Across Core and Adjacent Categories');
html=html.replace('<h3 style="font-size:32px;margin:52px 0 18px">Travel Plug Adapters</h3>','<h3 style="font-size:32px;margin:52px 0 18px">Wall Outlet Extenders</h3>');
html=html.replace('<h3 style="font-size:32px;margin:52px 0 18px">Power Strips & Wall Outlets</h3>','<h3 style="font-size:32px;margin:52px 0 18px">Power Strips, Wall Outlet Extenders & Tower Power Strips</h3>');
fs.writeFileSync(file,html);
console.log('Updated Products hub taxonomy without changing product specifications.');
