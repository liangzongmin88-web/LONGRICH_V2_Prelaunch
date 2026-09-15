(() => {
  const GA4_MEASUREMENT_ID = 'G-09MR5V2JWH';
  const CLARITY_PROJECT_ID = 'y68zlggfxt';

  /* Progressive semantic fixes for legacy/static pages. */
  const header = document.querySelector('body > header');
  const footer = document.querySelector('body > footer, body > .footer');
  let main = document.querySelector('main');
  if (!main && header) {
    main = document.createElement('main');
    main.id = 'main-content';
    const nodes = [];
    let node = header.nextSibling;
    while (node && node !== footer) {
      const next = node.nextSibling;
      nodes.push(node);
      node = next;
    }
    if (nodes.length) {
      header.after(main);
      nodes.forEach(item => main.append(item));
    }
  }

  const primaryNav = document.querySelector('.links');
  if (primaryNav) primaryNav.setAttribute('aria-label', 'Main navigation');
  const brandLink = document.querySelector('.nav > a:has(.brand)');
  if (brandLink) brandLink.setAttribute('aria-label', 'LONGRICH Power Solutions home');
  document.querySelectorAll('.category .icon').forEach(icon => icon.setAttribute('aria-hidden', 'true'));

  /* Sitewide entity identity signal for search engines and AI crawlers. */
  const entityScript = document.createElement('script');
  entityScript.type = 'application/ld+json';
  entityScript.dataset.longrichEntity = 'true';
  entityScript.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.longrichpower.com/#organization',
    name: 'LONGRICH Power Solutions',
    legalName: 'Dongguan LongRich Electronic Co., Ltd.',
    alternateName: ['LONGRICH', 'LongRich Power Solutions', 'Dongguan LongRich Electronic'],
    url: 'https://www.longrichpower.com/',
    foundingDate: '2002',
    email: 'sales@longrichpower.com',
    description: 'B2B manufacturer of travel adapters, voltage converters, power strips and related power products, with OEM/ODM engineering, testing and production capabilities.',
    industry: 'Electrical and electronic product manufacturing',
    address: {
      '@type': 'PostalAddress',
      streetAddress: "3 Heshun Road, Shatou South District, Chang'an Town",
      addressLocality: 'Dongguan',
      addressRegion: 'Guangdong',
      postalCode: '523861',
      addressCountry: 'CN'
    },
    areaServed: ['United States', 'United Kingdom', 'Germany', 'Australia', 'Europe'],
    sameAs: [
      'https://www.linkedin.com/company/dongguan-longrich-electronic-co-ltd',
      'https://sourcing.hktdc.com/en/supplier-store/dglongrich'
    ],
    knowsAbout: [
      'travel adapters',
      'universal travel adapters',
      'GaN travel adapters',
      'grounded travel adapters',
      'voltage converters',
      'power strips',
      'wall outlet extenders',
      'OEM power products',
      'ODM power products',
      'travel power engineering'
    ]
  });
  document.head.append(entityScript);

  if (footer && !footer.querySelector('a[href$="company-identity.html"]')) {
    const identityLink = document.createElement('a');
    identityLink.href = 'company-identity.html';
    identityLink.textContent = 'Company Identity';
    identityLink.setAttribute('aria-label', 'LONGRICH Power Solutions company identity');
    const target = footer.querySelector('.copy, .copyline, .wrap') || footer;
    const separator = document.createTextNode(' · ');
    target.append(separator, identityLink);
  }

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
  window.addEventListener('load', () => {
    window.setTimeout(loadAnalytics, 10000);
  }, { once: true });

  const track = (eventName, params = {}) => {
    loadAnalytics();
    window.gtag('event', eventName, params);
  };

  const queryParams = new URLSearchParams(window.location.search);
  const requestedModel = queryParams.get('model')?.trim() || '';
  const sourcePage = queryParams.get('source_page')?.trim() || document.referrer || '';
  const attributionKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'msclkid'];
  let attribution = {};
  try {
    attribution = JSON.parse(window.sessionStorage.getItem('longrich_attribution') || '{}');
    attributionKeys.forEach(key => {
      const value = queryParams.get(key)?.trim();
      if (value) attribution[key] = value;
    });
    attribution.first_touch_url ||= window.location.href;
    attribution.first_referrer ||= document.referrer || '';
    window.sessionStorage.setItem('longrich_attribution', JSON.stringify(attribution));
  } catch {
    attribution = Object.fromEntries(attributionKeys.map(key => [key, queryParams.get(key)?.trim() || '']).filter(([, value]) => value));
  }
  const gaClientId = (document.cookie.match(/(?:^|;\s*)_ga=GA\d+\.\d+\.([^;]+)/) || [])[1] || '';
  let leadReference = queryParams.get('lead_ref')?.trim() || '';
  try {
    leadReference ||= window.sessionStorage.getItem('longrich_lead_ref') || '';
    if (!leadReference) {
      leadReference = `LR-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    }
    window.sessionStorage.setItem('longrich_lead_ref', leadReference);
  } catch {
    leadReference ||= `LR-${Date.now().toString(36).toUpperCase()}`;
  }
  const pageModel = requestedModel || document.querySelector('.model')?.textContent.replace(/^Model\s+/i, '').trim() || '';
  const funnelParams = (extra = {}) => ({
    lead_reference: leadReference,
    product_model: pageModel,
    source_page: sourcePage || window.location.pathname,
    ga_client_id: gaClientId,
    ...attribution,
    page_location: window.location.href,
    ...extra,
  });

  if (/\/request-a-quote\.html$/.test(window.location.pathname)) {
    track('generate_lead_view', funnelParams({ funnel_step: 'rfq_view' }));
  }

  const nav = document.querySelector('.nav');
  let links = nav?.querySelector('.links');
  if (nav && !links) {
    [...nav.children].filter(el => el.matches('a') && !el.querySelector('.brand')).forEach(el => el.remove());
    links = document.createElement('nav');
    links.className = 'links';
    links.setAttribute('aria-label', 'Main navigation');
    links.innerHTML = '<a href="products.html">Products</a><a href="oem-odm.html">OEM / ODM</a><a href="manufacturing.html">Manufacturing</a><a href="quality-testing.html">Quality & Testing</a><a href="engineering-resources.html">Resources</a><a href="about-us.html">About Us</a><a href="contact-us.html">Contact</a><a class="cta" href="request-a-quote.html">Request a Quote</a>';
    nav.append(links);
  }
  if (nav && links) {
    links.setAttribute('aria-label', 'Main navigation');
    links.id ||= 'primary-navigation';
    if (!links.classList.contains('architectureNav')) {
      let resourceLink = links.querySelector('a[href="engineering-resources.html"]');
      if (!resourceLink) {
        resourceLink = document.createElement('a');
        resourceLink.href = 'engineering-resources.html';
        const qualityLink = links.querySelector('a[href="quality-testing.html"]');
        if (qualityLink) qualityLink.after(resourceLink);
        else {
          const ctaLink = links.querySelector('.cta');
          if (ctaLink) links.insertBefore(resourceLink, ctaLink);
          else links.append(resourceLink);
        }
      }
      resourceLink.textContent = 'Resources';
    }
    const button = document.createElement('button');
    button.className = 'mobileMenuToggle';
    button.type = 'button';
    button.setAttribute('aria-label', 'Open navigation menu');
    button.setAttribute('aria-controls', links.id);
    button.setAttribute('aria-expanded', 'false');
    button.innerHTML = '<span aria-hidden="true"></span>';
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
    const desktopQuery = window.matchMedia('(min-width: 981px)');
    desktopQuery.addEventListener('change', event => {
      if (event.matches) closeMenu();
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
    if (!coreProducts.has(model)) card.classList.add('productCardExtra');
    const info = card.querySelector('.productInfo');
    if (info && !info.querySelector('a')) {
      const cta = document.createElement('a');
      cta.className = 'productCardCta';
      cta.href = href;
      cta.setAttribute('aria-label', `View ${model} product details`);
      cta.textContent = 'View Details →';
      info.append(cta);
    }
  });

  /* Mobile product discovery: let the product image open the same detail page
     as its explicit View Details control, without changing desktop behavior. */
  const mobileViewport = window.matchMedia('(max-width: 980px)');
  const productMediaTargets = [...document.querySelectorAll('.productCard .productMedia, .card .media')]
    .map(media => {
      const card = media.closest('.productCard, .card');
      const detailLink = card?.querySelector('.productCardCta, .body a.btn[href]');
      if (!detailLink || media.closest('a')) return null;
      return { media, detailLink };
    })
    .filter(Boolean);

  const syncMobileProductMedia = () => {
    productMediaTargets.forEach(({ media, detailLink }) => {
      if (mobileViewport.matches) {
        const model = media.querySelector('img')?.alt || media.closest('.productCard, .card')?.querySelector('h2, h3')?.textContent || 'product';
        media.classList.add('mobileProductMediaLink');
        media.setAttribute('role', 'link');
        media.setAttribute('tabindex', '0');
        media.setAttribute('aria-label', `View ${model} product details`);
        media.dataset.mobileDetailHref = detailLink.href;
      } else {
        media.classList.remove('mobileProductMediaLink');
        media.removeAttribute('role');
        media.removeAttribute('tabindex');
        media.removeAttribute('aria-label');
        delete media.dataset.mobileDetailHref;
      }
    });
  };
  productMediaTargets.forEach(({ media }) => {
    const openProduct = event => {
      if (!mobileViewport.matches || !media.dataset.mobileDetailHref) return;
      if (event.type === 'keydown' && !['Enter', ' '].includes(event.key)) return;
      event.preventDefault();
      event.stopPropagation();
      window.location.assign(media.dataset.mobileDetailHref);
    };
    media.addEventListener('click', openProduct);
    media.addEventListener('keydown', openProduct);
  });
  syncMobileProductMedia();
  mobileViewport.addEventListener('change', syncMobileProductMedia);

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
      const subject = `[${leadReference}] ${form.dataset.subject || 'LONGRICH Website Inquiry'}`;
      lines.unshift(`Lead reference: ${leadReference}`, `Source page: ${sourcePage || window.location.href}`);
      const href = `mailto:sales@longrichpower.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n\n'))}`;
      track('rfq_email_handoff', funnelParams({
        method: 'rfq_email',
        product_model: String(data.get('Product / Model') || ''),
        target_market: String(data.get('Target Market') || ''),
        estimated_quantity: String(data.get('Estimated Quantity') || ''),
        funnel_step: 'rfq_submit',
      }));
      window.location.href = href;
    });
  });

  document.querySelectorAll('.onlineRfqForm, .onlineContactForm').forEach(form => {
    const status = form.querySelector('.rfqStatus');
    const button = form.querySelector('.rfqSubmit');
    const setStatus = (message, type) => {
      if (!status) return;
      status.textContent = message;
      status.className = `rfqStatus full isVisible ${type}`;
    };
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const leadInput = form.querySelector('[name="Lead Reference"]');
      const sourceInput = form.querySelector('[name="Source Page"]');
      if (leadInput) leadInput.value = leadReference;
      if (sourceInput) sourceInput.value = sourcePage || window.location.href;
      const originalLabel = button?.textContent || 'Submit RFQ Online';
      const submissionId = `SUB-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
      if (button) {
        button.disabled = true;
        button.textContent = 'Submitting…';
      }
      setStatus('Submitting your RFQ securely…', 'success');
      try {
        const submission = Object.fromEntries(new FormData(form).entries());
        const isContactForm = form.classList.contains('onlineContactForm');
        if (isContactForm) {
          submission['Form Type'] = 'contact';
          submission['Target Market'] = submission['Country / Region'] || '';
          submission['Product / Model'] = submission['Product / Model'] || submission['Product Interest'] || '';
          submission['Project Details'] = submission.Message || '';
        } else {
          submission['Form Type'] = 'rfq';
        }
        submission['Submission ID'] = submissionId;
        submission['GA Client ID'] = gaClientId;
        submission['UTM Source'] = attribution.utm_source || '';
        submission['UTM Medium'] = attribution.utm_medium || '';
        submission['UTM Campaign'] = attribution.utm_campaign || '';
        submission['UTM Term'] = attribution.utm_term || '';
        submission['UTM Content'] = attribution.utm_content || '';
        submission['Google Click ID'] = attribution.gclid || '';
        submission['Microsoft Click ID'] = attribution.msclkid || '';
        submission['First Touch URL'] = attribution.first_touch_url || '';
        submission['First Referrer'] = attribution.first_referrer || '';
        track('rfq_submit_attempt', funnelParams({
          method: isContactForm ? 'online_contact' : 'online_rfq',
          form_type: isContactForm ? 'contact' : 'rfq',
          submission_id: submissionId,
          product_model: submission['Product / Model'] || '',
          funnel_step: 'lead_submit_attempt',
        }));
        const response = await fetch(form.action, {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(submission),
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(result.error || 'Submission failed');
        const reference = result.reference || leadReference;
        try {
          window.sessionStorage.setItem(`longrich_confirmed_lead_${reference}`, 'pending');
          window.sessionStorage.setItem(`longrich_confirmed_lead_data_${reference}`, JSON.stringify({
            method: isContactForm ? 'online_contact' : 'online_rfq',
            form_type: isContactForm ? 'contact' : 'rfq',
            product_model: submission['Product / Model'] || '',
            source_page: submission['Source Page'] || '',
            submission_id: submissionId,
            ga_client_id: gaClientId,
            ...attribution,
          }));
        } catch {}
        const thankYouUrl = new URL('/thank-you.html', window.location.origin);
        thankYouUrl.searchParams.set('ref', reference);
        thankYouUrl.searchParams.set('form', isContactForm ? 'contact' : 'rfq');
        window.location.assign(thankYouUrl.href);
      } catch (error) {
        setStatus('We could not submit the RFQ right now. Please try again, or contact sales@longrichpower.com.', 'error');
        track('rfq_submit_error', funnelParams({
          method: form.classList.contains('onlineContactForm') ? 'online_contact' : 'online_rfq',
          submission_id: submissionId,
          error_message: String(error?.message || 'Submission failed').slice(0, 120),
          funnel_step: 'lead_submit_error',
        }));
      } finally {
        if (button) {
          button.disabled = false;
          button.textContent = originalLabel;
        }
      }
    });
  });

  if (requestedModel) {
    document.querySelectorAll('[name="Product / Model"]').forEach(input => {
      if (!input.value) input.value = requestedModel;
    });
    document.querySelectorAll('[name="Project Details"], [name="Message"]').forEach(input => {
      if (!input.value) input.value = `I am interested in ${requestedModel}. `;
    });
  }

  const topic = queryParams.get('topic')?.trim() || '';
  if (topic) {
    const prompts = {
      moq: 'Please confirm MOQ for the selected model and customization scope. ',
      'lead-time': 'Please confirm sample and mass-production lead time. ',
      sample: 'I would like to request a product sample for evaluation. ',
    };
    document.querySelectorAll('[name="Project Details"]').forEach(input => {
      if (!input.value && prompts[topic]) input.value = prompts[topic];
    });
  }

  const productFile = window.location.pathname.split('/').pop() || '';
  const productModel = Object.entries(productLinks).find(([, href]) => href === productFile)?.[0];
  if (productModel && !document.querySelector('.procurementSection')) {
    const rows = [...document.querySelectorAll('table tr')];
    const findValue = labels => {
      const row = rows.find(item => labels.some(label => (item.cells?.[0]?.textContent || '').trim().toLowerCase().includes(label)));
      return row?.cells?.[1]?.textContent.trim() || '';
    };
    const moq = findValue(['moq']) || 'Confirmed by model and customization';
    const compliance = findValue(['certification', 'compliance']) || 'Reviewed for final configuration and market';
    const anchor = document.querySelector('.contact, footer, .footer');
    if (anchor) {
      const section = document.createElement('section');
      section.className = 'procurementSection';
      section.setAttribute('aria-label', `${productModel} purchasing information`);
      section.innerHTML = `<div class="wrap"><div class="procurementHead"><div><span class="sectionLabel">PURCHASING INFORMATION</span><h2>Plan a ${productModel} sourcing project</h2></div><p>Commercial terms are confirmed against your destination market, configuration, branding scope and order plan.</p></div><div class="procurementFacts"><div class="procurementFact"><small>MOQ</small><strong>${moq}</strong><span>Custom logo, color and packaging may affect the minimum.</span></div><div class="procurementFact"><small>Lead time</small><strong>Quoted by project</strong><span>Sampling and mass production are scheduled separately after requirements are locked.</span></div><div class="procurementFact"><small>Capacity</small><strong>4M+ units / year</strong><span>Factory-wide capacity across 6 assembly lines and 2 SMT lines.</span></div><div class="procurementFact"><small>Compliance</small><strong>${compliance}</strong><span>Documentation applicability is verified for the final build and target market.</span></div><div class="procurementFact"><small>Samples</small><strong>Available on request</strong><span>Share evaluation scope, delivery country and required timing.</span></div></div><div class="buyerActions"><a href="/request-a-quote.html?model=${encodeURIComponent(productModel)}">Request pricing</a><a href="/request-a-quote.html?model=${encodeURIComponent(productModel)}&topic=sample">Request a sample</a></div></div>`;
      anchor.before(section);
    }
  }

  const whatsappBaseUrl = 'https://wa.me/8618820000007';
  const whatsappProductModel = pageModel || productModel || '';
  const whatsappMessage = [
    'Hello LONGRICH, I would like to discuss an OEM/ODM project.',
    whatsappProductModel ? `Product / model: ${whatsappProductModel}` : '',
    `Lead reference: ${leadReference}`,
    `Source: ${window.location.href}`,
  ].filter(Boolean).join('\n');
  const whatsappUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`;
  document.querySelectorAll('a').forEach(link => {
    if (/whatsapp/i.test(link.textContent || '')) {
      link.href = whatsappUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    if (link.href.startsWith('mailto:') && !link.dataset.leadReferenceAdded) {
      const [address, rawQuery = ''] = link.href.split('?');
      const mailParams = new URLSearchParams(rawQuery);
      const originalSubject = mailParams.get('subject') || `${pageModel || 'Website'} Inquiry`;
      if (!originalSubject.includes(leadReference)) {
        mailParams.set('subject', `[${leadReference}] ${originalSubject}`);
      }
      const originalBody = mailParams.get('body') || '';
      mailParams.set('body', [`Lead reference: ${leadReference}`, `Source page: ${window.location.href}`, originalBody].filter(Boolean).join('\n\n'));
      link.href = `${address}?${mailParams.toString()}`;
      link.dataset.leadReferenceAdded = 'true';
    } else if (/request-a-quote\.html(?:$|[?#])/.test(link.href)) {
      const rfqUrl = new URL(link.href, window.location.href);
      rfqUrl.searchParams.set('lead_ref', leadReference);
      rfqUrl.searchParams.set('source_page', window.location.pathname);
      link.href = rfqUrl.href;
    }
    link.addEventListener('click', () => {
      if (link.href.startsWith('mailto:')) {
        track('contact_click', funnelParams({ method: 'email', link_url: link.href.split('?')[0], funnel_step: 'contact_click' }));
      } else if (link.href.startsWith(whatsappBaseUrl)) {
        track('contact_click', funnelParams({ method: 'whatsapp', link_url: whatsappBaseUrl, funnel_step: 'contact_click' }));
      } else if (/request-a-quote\.html(?:$|[?#])/.test(link.href)) {
        track('begin_lead', funnelParams({ method: 'rfq_page', link_url: link.href, funnel_step: 'rfq_click' }));
      }
    });
  });

  /* On phones, quote and product-inquiry calls to action start a WhatsApp
     conversation immediately. Their original RFQ destination is restored on
     tablet/desktop widths. */
  const mobileQuoteLinks = [...document.querySelectorAll('a')].filter(link => {
    const text = (link.textContent || '').trim();
    const href = link.href || '';
    return /request-a-quote\.html(?:$|[?#])/i.test(href)
      || /request (?:an |oem )?(?:quote|pricing|sample)|discuss your project|start your project|product inquiry/i.test(text);
  });
  mobileQuoteLinks.forEach(link => {
    link.dataset.desktopHref = link.href;
    link.dataset.desktopTarget = link.getAttribute('target') || '';
    link.dataset.desktopRel = link.getAttribute('rel') || '';
  });
  const syncMobileQuoteLinks = () => {
    mobileQuoteLinks.forEach(link => {
      if (mobileViewport.matches) {
        link.href = whatsappUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.dataset.mobileWhatsapp = 'true';
      } else {
        link.href = link.dataset.desktopHref;
        if (link.dataset.desktopTarget) link.target = link.dataset.desktopTarget;
        else link.removeAttribute('target');
        if (link.dataset.desktopRel) link.rel = link.dataset.desktopRel;
        else link.removeAttribute('rel');
        delete link.dataset.mobileWhatsapp;
      }
    });
  };
  syncMobileQuoteLinks();
  mobileViewport.addEventListener('change', syncMobileQuoteLinks);

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
      track('contact_click', funnelParams({ method: 'whatsapp', link_url: whatsappBaseUrl, funnel_step: 'contact_click' }));
    });
    panel.append(link);
  });
})();
