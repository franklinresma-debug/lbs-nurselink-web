(function () {
  const ICONS = {
    dashboard: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10.5V20h14v-9.5"/><path d="M9 20v-6h6v6"/>',
    clipboard: '<path d="M9 5h6"/><path d="M9 4a3 3 0 0 1 6 0"/><path d="M8 6H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2"/><path d="M8 13h8"/><path d="M8 17h5"/>',
    document: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h5"/>',
    calendar: '<path d="M7 3v4"/><path d="M17 3v4"/><path d="M4 8h16"/><path d="M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1z"/><path d="M8 12h3"/><path d="M13 12h3"/><path d="M8 16h3"/>',
    briefcase: '<path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M4 7h16v12H4z"/><path d="M4 12h16"/><path d="M10 12v2h4v-2"/>',
    message: '<path d="M4 5h16v11H8l-4 4z"/><path d="M8 9h8"/><path d="M8 13h5"/>',
    user: '<path d="M20 21a8 8 0 0 0-16 0"/><path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>',
    shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/><path d="m9 12 2 2 4-5"/>',
    queue: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M7 4v6"/><path d="M17 14v6"/>',
    chart: '<path d="M4 20h16"/><path d="M7 16V9"/><path d="M12 16V5"/><path d="M17 16v-4"/>',
    settings: '<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.04.04a2 2 0 1 1-2.83 2.83l-.04-.04A1.7 1.7 0 0 0 15 19.37a1.7 1.7 0 0 0-1 .58V20a2 2 0 1 1-4 0v-.05a1.7 1.7 0 0 0-1-.58 1.7 1.7 0 0 0-1.88.34l-.04.04a2 2 0 1 1-2.83-2.83l.04-.04A1.7 1.7 0 0 0 4.63 15a1.7 1.7 0 0 0-.58-1H4a2 2 0 1 1 0-4h.05a1.7 1.7 0 0 0 .58-1 1.7 1.7 0 0 0-.34-1.88l-.04-.04a2 2 0 1 1 2.83-2.83l.04.04A1.7 1.7 0 0 0 9 4.63a1.7 1.7 0 0 0 1-.58V4a2 2 0 1 1 4 0v.05a1.7 1.7 0 0 0 1 .58 1.7 1.7 0 0 0 1.88-.34l.04-.04a2 2 0 1 1 2.83 2.83l-.04.04A1.7 1.7 0 0 0 19.37 9c.2.35.39.68.58 1H20a2 2 0 1 1 0 4h-.05a1.7 1.7 0 0 0-.55 1z"/>',
    support: '<path d="M12 19v.01"/><path d="M9.1 9a3 3 0 1 1 5.35 1.85c-.97.81-1.45 1.33-1.45 2.65"/><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>',
    learning: '<path d="m3 8 9-4 9 4-9 4z"/><path d="M7 10.5v5c2.6 2 7.4 2 10 0v-5"/><path d="M21 8v6"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9z"/><path d="M10 21h4"/>',
    clock: '<path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/><path d="M12 7v5l3 2"/>',
    image: '<path d="M4 5h16v14H4z"/><path d="m7 16 4-4 3 3 2-2 4 4"/><path d="M8.5 9.5h.01"/>',
    medical: '<path d="M12 5v14"/><path d="M5 12h14"/><path d="M6 6h12v12H6z"/>'
  };

  const rules = [
    ['settings', /admin|setting|branding|operation|system|configuration|appearance|color|theme|favicon|logo/i],
    ['message', /message|communication|inbox|notification channel|messenger|whatsapp|chat/i],
    ['bell', /notification|reminder|alert|announcement/i],
    ['calendar', /appointment|interview|schedule|event|visit date/i],
    ['briefcase', /job|opportunit|recruit|employer|principal|deployment|career|workforce/i],
    ['document', /document|cv|resume|file|passport|diploma|certificate|license|licence|upload/i],
    ['shield', /credential|membership|approved|verification|security|audit|privacy|policy|welfare|safety/i],
    ['queue', /queue|ticket|counter|service visit|now serving|walk-in/i],
    ['chart', /dashboard|report|analytics|metric|overview|progress|statistics|intelligence|status/i],
    ['learning', /learning|training|mentor|qualification|assessment|framework|development/i],
    ['support', /help|support|assistance|case|crisis|concern/i],
    ['user', /profile|applicant|member|personal|user|nurse/i],
    ['clipboard', /application|registration|review|checklist|record|history|processing/i],
    ['medical', /health|medical|clinical|nursing|professional/i],
    ['image', /image|photo|asset|preview/i],
    ['dashboard', /home|welcome/i]
  ];

  const selectors = [
    '.page-header h1',
    '.lbs-page h1',
    '.npa-page-heading h1',
    '.nwc-heading h1',
    '.p7-hero h1',
    '.nl410-page > header h1',
    '.nld-card h2',
    '.nld-support h2',
    '.nl-live-card-head h2',
    '.nl-live-card-head h3',
    '.nl-live-list > h2',
    '.nl-phase2-panel > h2',
    '.nl410-panel-head h2',
    '.nl410-learning-head h3',
    '.npa-panel-heading h2',
    '.npa-card-title-row h2',
    '.npa-stat-card strong',
    '.nwc-card-title h2',
    '.nwc-overview h2',
    '.p7-card-top h2',
    '.p7-detail h2',
    '.p7-detail h3',
    '.nl530-card-head h2',
    '.nl530-section-intro h2',
    '.nl530-report-card strong',
    '.nl552-workload-heading h2',
    '.nl640-logo-card-head h3',
    '.mw-hero h2',
    '.mw-card h2',
    '.mw-card h3',
    '.lbs-card h2',
    '.lbs-empty h3',
    '.nld-services a strong',
    '.nld-resource-links a strong'
  ].join(',');

  function iconFor(text) {
    const source = String(text || '').trim();
    const match = rules.find(([, pattern]) => pattern.test(source));
    return match ? match[0] : 'clipboard';
  }

  function createIcon(name) {
    const span = document.createElement('span');
    span.className = `nl-context-icon nl-context-icon--${name}`;
    span.setAttribute('aria-hidden', 'true');
    span.dataset.nlContextIcon = '1';
    span.innerHTML = `<svg viewBox="0 0 24 24" focusable="false">${ICONS[name] || ICONS.clipboard}</svg>`;
    return span;
  }

  function shouldSkip(el) {
    if (!el || el.dataset.nlContextIconized === '1') return true;
    if (el.closest('nav, .sidebar, .nl-admin-sidebar, .nl555-mobile-bar, .topbar, .nl-admin-topbar')) return true;
    if (el.querySelector('.nl-context-icon, svg, img, [data-nurselink-logo-placement]')) return true;
    const text = el.textContent.trim();
    return !text || text.length > 95;
  }

  function decorate(root) {
    const scope = root && root.querySelectorAll ? root : document;
    scope.querySelectorAll(selectors).forEach((el) => {
      if (shouldSkip(el)) return;
      const icon = iconFor(el.textContent);
      el.classList.add('nl-context-iconized');
      el.insertBefore(createIcon(icon), el.firstChild);
      el.dataset.nlContextIconized = '1';
    });
  }

  let scheduled = false;
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      decorate(document);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', schedule, { once: true });
  } else {
    schedule();
  }

  new MutationObserver(schedule).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
