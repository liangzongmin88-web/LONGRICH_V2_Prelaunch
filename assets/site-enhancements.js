(() => {
  const GA4_MEASUREMENT_ID = 'G-09MR5V2JWH';
  const CLARITY_PROJECT_ID = 'y68zlggfxt';

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA4_MEASUREMENT_ID, {
    anonymize_ip: true,
    transport_type: 'beacon'
  });

  window.clarity = window.clarity || function clarity() {
    (window.clarity.q = window.clarity.q || []).push(arguments);
  };
  let analyticsLoaded = false;
  const loadAnalytics = () => {
    if (analyticsLoaded) return;
    analyticsLoaded = true;
    const googleTag = document.createElement('script');
    googleTag.async = true;
    googleTag.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_MEASUREMENT_ID)}`;
    document.head.append(googleTag);
    const clarityTag = document.createElement('script');
    clarityTag.async = true;
    clarityTag.src = `https://www.clarity.ms/tag/${encodeURIComponent(CLARITY_PROJECT_ID)}`;
    document.head.append(clarityTag);
  };
  ['pointerdown', 'keydown', 'touchstart'].forEach(eventName => {
    window.addEventListener(eventName, loadAnalytics, { once: true, passive: true });
  });
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(loadAnalytics, { timeout: 2500 });
  } else {
    window.setTimeout(loadAnalytics, 2000);
  }

  const track = (eventName, params = {}) => {
    window.gtag('event', eventName, params);
  };

  if (/\/request-a-quote\.html$/.test(window.location.pathname)) {
    track('generate_lead_view', { page_location: window.location.href });
  }

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
    'WPG05': 'wpg05.html',
    'WPG-US012-7': 'wpg-us012-7.html',
    'WPG-US012-9C': 'wpg-us012-9c.html',
    'WPG-EU030-7': 'wpg-eu030-7.html',
    'WPG-EU032-7': 'wpg-eu032-7.html',
    'WPG-AUS01': 'wpg-aus01.html',
    'WPG-AUS02': 'wpg-aus02.html',
    'TUS-9': 'tus-9.html',
    'TUS-4': 'tus-4.html',
    'TUS-2F': 'tus-2f.html',
    'TUS-8B': 'tus-8b.html',
    'TUS-13': 'tus-13.html',
    'TUS-8': 'tus-8.html',
    'WPG01': 'wpg01.html',
    'ECS-US013': 'ecs-us013.html',
    'ECS-EU016': 'ecs-eu016.html',
    'ECS-AUS03': 'ecs-aus03.html',
    'ECS-AUS05': 'ecs-aus05.html'
  };
  const coreProducts = new Set(Object.keys(productLinks));
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
    if (info && !info.querySelector('a')) {
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
      track('generate_lead', {
        method: 'rfq_email',
        product_category: String(data.get('Product Category') || ''),
        estimated_quantity: String(data.get('Estimated Quantity') || ''),
        project_type: String(data.get('Project Type') || '')
      });
      window.location.href = href;
    });
  });

  const requestedModel = new URLSearchParams(window.location.search).get('model')?.trim();
  if (requestedModel) {
    document.querySelectorAll('[name="Product / Model"]').forEach(input => {
      if (!input.value) input.value = requestedModel;
    });
    document.querySelectorAll('[name="Project Details"], [name="Message"]').forEach(input => {
      if (!input.value) input.value = `I am interested in ${requestedModel}. `;
    });
  }

  const whatsappUrl = 'https://wa.me/8618820000007';
  document.querySelectorAll('a').forEach(link => {
    if (/whatsapp/i.test(link.textContent || '')) {
      link.href = whatsappUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    link.addEventListener('click', () => {
      if (link.href.startsWith('mailto:')) {
        track('contact_click', { method: 'email', link_url: link.href.split('?')[0] });
      } else if (link.href.startsWith(whatsappUrl)) {
        track('contact_click', { method: 'whatsapp', link_url: whatsappUrl });
      } else if (/request-a-quote\.html(?:$|[?#])/.test(link.href)) {
        track('begin_lead', { method: 'rfq_page', link_url: link.href });
      }
    });
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
    link.addEventListener('click', () => {
      track('contact_click', { method: 'whatsapp', link_url: whatsappUrl });
    });
    panel.append(link);
  });
})();
