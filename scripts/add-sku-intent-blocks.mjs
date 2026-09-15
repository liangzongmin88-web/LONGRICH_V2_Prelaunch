import { readFile, writeFile } from "node:fs/promises";

const pages = {
  "wpg05.html": {
    title: "Who WPG05 is built for",
    intro: "A US wall-outlet platform for buyers who need fixed AC access and integrated USB charging in one OEM-ready model.",
    cards: [
      ["ICP", "US and Japan brands, distributors and electrical-accessory buyers evaluating a wall-mounted outlet with USB-A and USB-C."],
      ["Search intent", "Qualify a 15A, 125V US wall outlet platform for an OEM or private-label program."],
      ["Application", "Fixed wall-outlet programs combining AC access with low-voltage USB charging."],
      ["Why this model", "Choose WPG05 when the brief calls for a US wall-outlet format with USB-A and USB-C instead of a corded or tower power strip."],
    ],
  },
  "ecs-us013.html": {
    title: "Who ECS-US013 is built for",
    intro: "A compact US power-strip platform for programs where a low-profile footprint matters more than a tower layout.",
    cards: [
      ["ICP", "US and Japan private-label buyers seeking compact 10A desktop power distribution with integrated USB."],
      ["Search intent", "Compare a compact 125V, 1250W US power strip with 17W USB for OEM sourcing."],
      ["Application", "Compact AC and USB power distribution for programs with limited product footprint."],
      ["Why this model", "Choose ECS-US013 for its 103 × 103 × 33mm low-profile format; compare <a href=\"ecs-us019.html\">ECS-US019</a> when a vertical tower layout is preferred."],
    ],
  },
  "ecs-us019.html": {
    title: "Who ECS-US019 is built for",
    intro: "A US tower power-strip platform for buyers who prioritize vertical AC and USB power distribution.",
    cards: [
      ["ICP", "US and Japan brands and distributors evaluating a 10A tower power strip with USB-A and USB-C."],
      ["Search intent", "Qualify a 125V, 1250W US tower power strip for an OEM or private-label program."],
      ["Application", "Vertical power distribution where tower form factor and integrated USB charging are core requirements."],
      ["Why this model", "Choose ECS-US019 for its tower layout; compare <a href=\"ecs-us013.html\">ECS-US013</a> when a compact low-profile format is a better fit."],
    ],
  },
  "ecs-aus05.html": {
    title: "Who ECS-AUS05 is built for",
    intro: "An Australian tower power-strip platform for 10A programs that require integrated 24W USB charging.",
    cards: [
      ["ICP", "Australian brands, distributors and private-label buyers sourcing an AU-format tower power strip."],
      ["Search intent", "Compare a 240V, 10A, 2400W AU tower power strip with 24W USB for OEM sourcing."],
      ["Application", "Vertical AU-format AC power distribution with integrated USB charging."],
      ["Why this model", "Choose ECS-AUS05 for its tower layout and 24W USB; compare <a href=\"ecs-aus03.html\">ECS-AUS03</a> when a linear layout is preferred."],
    ],
  },
  "ecs-eu010.html": {
    title: "Who ECS-EU010 is built for",
    intro: "A 16A EU tower power-strip platform for buyers requiring high-capacity AC distribution with USB-A and USB-C.",
    cards: [
      ["ICP", "European brands, distributors and private-label buyers evaluating a 16A tower power strip."],
      ["Search intent", "Qualify a 240V, 16A, 3680W EU tower power strip with integrated USB for OEM sourcing."],
      ["Application", "Vertical EU-format AC power distribution with USB-A and USB-C charging."],
      ["Why this model", "Choose ECS-EU010 for its 16A, 3680W tower platform; compare <a href=\"ecs-eu016.html\">ECS-EU016</a> when a compact non-tower format is preferred."],
    ],
  },
};

function render({ title, intro, cards }) {
  const headings = {
    ICP: "Ideal customer profile",
    "Search intent": "Procurement query",
    Application: "Best-fit application",
    "Why this model": "Selection reason",
  };
  return `<section class="skuIntentSection" aria-labelledby="sku-intent-title"><div class="wrap"><div class="skuIntentHead"><div><span class="sectionLabel">BUYER FIT &amp; MODEL SELECTION</span><h2 id="sku-intent-title">${title}</h2></div><p>${intro}</p></div><div class="skuIntentGrid">${cards.map(([label, copy]) => `<article class="skuIntentCard"><small>${label}</small><h3>${headings[label]}</h3><p>${copy}</p></article>`).join("")}</div></div></section>`;
}

for (const [file, content] of Object.entries(pages)) {
  let html = await readFile(file, "utf8");
  const existingStart = html.indexOf('<section class="skuIntentSection"');
  if (existingStart !== -1) {
    const existingEnd = html.indexOf("</section>", existingStart);
    if (existingEnd === -1) throw new Error(`${file}: intent section closing tag not found`);
    html = `${html.slice(0, existingStart)}${render(content)}${html.slice(existingEnd + "</section>".length)}`;
    await writeFile(file, html);
    process.stdout.write(`refreshed ${file}\n`);
    continue;
  }
  let heroStart = html.indexOf('<section class="hero"');
  if (heroStart === -1) heroStart = html.indexOf('<section class="detailHero"');
  if (heroStart === -1) throw new Error(`${file}: hero section not found`);
  const heroEnd = html.indexOf("</section>", heroStart);
  if (heroEnd === -1) throw new Error(`${file}: hero closing tag not found`);
  const insertAt = heroEnd + "</section>".length;
  html = `${html.slice(0, insertAt)}${render(content)}${html.slice(insertAt)}`;
  await writeFile(file, html);
  process.stdout.write(`updated ${file}\n`);
}
