import fs from 'node:fs';

const products = {
  'tus-4.html': {
    model: 'TUS-4',
    title: '2000W Multi-Function Step-Down Voltage Converter | TUS-4 | LONGRICH',
    oldDescription: 'High-power multi-function step-down converter. 2000W · 17W USB',
    description: 'TUS-4 multi-function step-down voltage converter platform with 2000W maximum output, 17W USB and EU, UK, AU or US plug configurations for OEM programs.',
    oldTarget: '<tr><td>Target Market</td><td>US / JP</td></tr>',
    target: '<tr><td>Plug Configuration Markets</td><td>EU / UK / AU / US; final destination and appliance load require engineering confirmation</td></tr>',
    fit: 'For buyers sourcing a compact high-power step-down platform with multiple plug configuration options.',
    why: 'Choose TUS-4 when a multi-function format and EU, UK, AU or US plug configuration options are more important than a single-region folding plug.',
  },
  'tus-8.html': {
    model: 'TUS-8',
    title: '2000W EU Step-Down Voltage Converter | TUS-8 | LONGRICH',
    oldDescription: 'EU foldable-plug step-down converter. 2000W · 17W USB',
    description: 'TUS-8 EU foldable-plug step-down voltage converter platform with 2000W maximum output and 17W USB for EU-focused OEM and private-label programs.',
    oldTarget: '<tr><td>Target Market</td><td>US / JP</td></tr>',
    target: '<tr><td>Plug Configuration Market</td><td>EU; final destination and appliance load require engineering confirmation</td></tr>',
    fit: 'For buyers developing an EU-focused converter program that benefits from a compact folding-plug format.',
    why: 'Choose TUS-8 when the EU folding plug is the priority; use TUS-4 or TUS-8B when broader plug configuration choices are required.',
  },
  'wpg01.html': {
    model: 'WPG01',
    title: '1875W US Wall Outlet with USB | WPG01 | LONGRICH',
    oldDescription: 'US wall outlet with integrated USB charging. 1875W · 15A · 2A + 1C',
    description: 'WPG01 US wall outlet platform rated 125V, 15A and 1875W maximum, with two USB-A ports and one USB-C port for OEM and private-label programs.',
    oldTarget: '<tr><td>Category</td><td>墙插</td></tr>',
    target: '<tr><td>Category</td><td>Wall Outlet</td></tr>',
    fit: 'For US and Japan buyers developing a wall-mounted power and USB charging product rather than a corded power strip.',
    why: 'Choose WPG01 when the brief calls for a 15A wall-outlet format with two USB-A ports and one USB-C port.',
  },
  'ecs-aus03.html': {
    model: 'ECS-AUS03',
    title: '2400W AU Power Strip with 17W USB | ECS-AUS03 | LONGRICH',
    oldDescription: 'AU-standard linear power strip. 2400W · 10A · 17W USB',
    description: 'ECS-AUS03 AU linear power strip platform rated 240V, 10A and 2400W maximum, with 17W USB for Australian OEM and private-label programs.',
    oldTarget: '<tr><td>Target Market</td><td>AU</td></tr>',
    target: '<tr><td>Target Market</td><td>Australia</td></tr>',
    fit: 'For Australian buyers sourcing a linear power strip platform with integrated USB-A and USB-C charging.',
    why: 'Choose ECS-AUS03 for a linear 10A / 2400W AU program with 17W USB; use ECS-AUS05 when a tower format is preferred.',
  },
};

for (const [file, product] of Object.entries(products)) {
  let html = fs.readFileSync(file, 'utf8');
  const replacements = [
    [`<title>${product.model} | LONGRICH</title>`, `<title>${product.title}</title>`],
    [`<meta name="description" content="${product.oldDescription}">`, `<meta name="description" content="${product.description}">`],
    [`"description":"${product.oldDescription}"`, `"description":"${product.description}"`],
    [product.oldTarget, product.target],
    ['assets/site-enhancements.js?v=7', 'assets/site-enhancements.js?v=9'],
    ['href="request-a-quote.html"', `href="request-a-quote.html?model=${encodeURIComponent(product.model)}"`],
    ['</section><section class="detail">', `</section><section class="detail"><div class="wrap"><div class="eyebrow">BUYER FIT</div><h2>Application and Model Selection</h2><div class="table"><table><tr><td>Application</td><td>${product.fit}</td></tr><tr><td>Why this model</td><td>${product.why}</td></tr></table></div></div></section><section class="detail">`],
  ];
  for (const [before, after] of replacements) {
    if (!html.includes(before)) throw new Error(`${file}: expected text not found: ${before.slice(0, 80)}`);
    html = html.replaceAll(before, after);
  }
  fs.writeFileSync(file, html);
}
