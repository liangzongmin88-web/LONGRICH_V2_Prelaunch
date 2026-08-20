(() => {
  const nav = document.querySelector('.nav');
  let links = nav?.querySelector('.links');
  if (nav && !links) {
    [...nav.children].filter(el => el.matches('a') && !el.querySelector('.brand')).forEach(el => el.remove());
    links = document.createElement('nav');
    links.className = 'links';
    links.innerHTML = '<a href="products.html">Products</a><a href="oem-odm.html">OEM / ODM</a><a href="manufacturing.html">Manufacturing</a><a href="quality-testing.html">Quality & Testing</a><a href="about-us.html">About Us</a><a href="contact-us.html">Contact</a><a class="cta" href="request-a-quote.html">Request a Quote</a>';
    nav.append(links);
  }
  if (nav && links) {
    links.id ||= 'primary-navigation';
    const button = document.createElement('button');
    button.className = 'mobileMenuToggle';
    button.type = 'button';
    button.setAttribute('aria-label', 'Open navigation menu');
    button.setAttribute('aria-controls', links.id);
    button.setAttribute('aria-expanded', 'false');
    button.innerHTML = '<span></span>';
    nav.append(button);
    nav.classList.add('mobileNavReady');

    const closeMenu = () => {
      nav.classList.remove('menuOpen');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Open navigation menu');
    };
    button.addEventListener('click', () => {
      const open = nav.classList.toggle('menuOpen');
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    });
    links.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 980) closeMenu();
    });
  }

  const productLinks = {
    'NT011-US': 'nt011-us.html',
    'NT011-ALL': 'nt011-all.html',
    'NT009-ALL': 'nt009-all.html',
    'NT009-AUS': 'nt009-aus.html',
    'NT009-EU': 'nt009-eu.html',
    'NT009-UK': 'nt009-uk.html',
    'NT010': 'nt010.html',
    'NT010-G': 'nt010-g.html',
    'TUS-11': 'tus-11.html',
    'ECS-BS019': 'ecs-bs019.html',
    'ECS-EU010': 'ecs-eu010.html',
    'ECS-US019': 'ecs-us019.html',
    'WPG05': 'wpg05.html'
  };
  const coreProducts = new Set(['NT011-US', 'NT011-ALL', 'NT009-ALL', 'NT010', 'TUS-11', 'ECS-EU010']);
  const cards = [...document.querySelectorAll('#featured .productCard')];
  cards.forEach(card => {
    const model = card.querySelector('img')?.alt;
    const href = productLinks[model];
    if (!href) return;
    card.setAttribute('role', 'link');
    card.tabIndex = 0;
    card.setAttribute('aria-label', `View ${model} product details`);
    if (!coreProducts.has(model)) card.classList.add('productCardExtra');
    const info = card.querySelector('.productInfo');
    if (info && !info.querySelector('.productCardCta')) {
      const cta = document.createElement('a');
      cta.className = 'productCardCta';
      cta.href = href;
      cta.textContent = 'View Details →';
      info.append(cta);
    }
    card.addEventListener('click', event => {
      if (!event.target.closest('a')) window.location.href = href;
    });
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        window.location.href = href;
      }
    });
  });

  const grid = document.querySelector('#featured .productGrid');
  if (grid && cards.some(card => card.classList.contains('productCardExtra'))) {
    const actions = document.createElement('div');
    actions.className = 'featuredActions';
    const button = document.createElement('button');
    button.className = 'viewAllProducts';
    button.type = 'button';
    button.textContent = `View All ${cards.length} Products`;
    button.setAttribute('aria-expanded', 'false');
    actions.append(button);
    grid.after(actions);
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      cards.filter(card => card.classList.contains('productCardExtra')).forEach(card => card.classList.toggle('isRevealed', !expanded));
      button.setAttribute('aria-expanded', String(!expanded));
      button.textContent = expanded ? `View All ${cards.length} Products` : 'Show Core Products';
    });
  }

  document.querySelectorAll('.mailtoForm').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const lines = [];
      for (const [key, value] of data.entries()) {
        const clean = String(value).trim();
        if (clean) lines.push(`${key}: ${clean}`);
      }
      const subject = form.dataset.subject || 'LONGRICH Website Inquiry';
      const href = `mailto:sales7@cnlongrich.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n\n'))}`;
      window.location.href = href;
    });
  });

  const whatsappUrl = 'https://wa.me/8618820000007';
  document.querySelectorAll('a').forEach(link => {
    if (/whatsapp/i.test(link.textContent || '')) {
      link.href = whatsappUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });
  document.querySelectorAll('img[alt*="WhatsApp" i]').forEach(image => {
    const panel = image.closest('.qr');
    if (!panel || panel.querySelector('.whatsappDirect')) return;
    const link = document.createElement('a');
    link.className = 'whatsappDirect';
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Open WhatsApp Chat →';
    panel.append(link);
  });
})();
