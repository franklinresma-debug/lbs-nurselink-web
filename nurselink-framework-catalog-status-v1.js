/* Framework cards: show source status, country identity, and a responsive desktop catalogue grid. */
(() => {
  'use strict';
  if (location.pathname.replace(/\/+$/, '') !== '/qualifications') return;

  const api = 'https://lbs.amsertech.com/backend/api/qualification-frameworks';
  const flags = {PH:'ph', NZ:'nz', OM:'om', QA:'qa', SA:'sa', KW:'kw', SG:'sg', AE:'ae'};
  const clean = value => String(value || '').replace(/\s+/g, ' ').trim();

  function cardFor(heading) {
    let node = heading.parentElement;
    for (let depth = 0; node && depth < 6; depth += 1, node = node.parentElement) {
      if (/Qualification Framework Reference/i.test(clean(node.textContent))) return node;
    }
    return null;
  }

  function addFlag(heading, item) {
    if (!flags[item.jurisdiction] || heading.querySelector('.nl-framework-country-flag')) return;
    const flag = document.createElement('img');
    flag.className = 'nl-framework-country-flag';
    flag.src = `https://flagcdn.com/24x18/${flags[item.jurisdiction]}.png`;
    flag.width = 24;
    flag.height = 18;
    flag.alt = `${item.jurisdiction} flag`;
    heading.prepend(flag);
  }

  // The framework page contains nested card fragments. Do not re-parent them
  // until the page exposes a dedicated catalogue container.
  function makeGrid() {}

  function apply(items) {
    const byName = new Map(items.map(item => [clean(item.name), item]));
    const cards = [];
    document.querySelectorAll('h1,h2,h3,h4,strong').forEach(heading => {
      const item = byName.get(clean(heading.textContent));
      if (!item) return;
      const card = cardFor(heading);
      if (!card) return;
      cards.push(card);
      card.classList.add('nl-framework-catalog-card');
      addFlag(heading, item);
      if (card.dataset.nlFrameworkStatusApplied === '1') return;
      card.dataset.nlFrameworkStatusApplied = '1';
      const levelCount = Array.isArray(item.levels) ? item.levels.length : Number(item.level_count || 0);
      const status = levelCount > 0
        ? `${levelCount} source-reference level${levelCount === 1 ? '' : 's'}`
        : (item.code === 'KW-REFERENCE' ? 'Official source validation required' : 'Mapping pending governance validation');
      const version = clean(item.version_label) || 'Reference-only catalogue';
      card.querySelectorAll('*').forEach(element => {
        if (element.children.length) return;
        const text = clean(element.textContent);
        if (text === '0 levels' || /^(\d+) levels$/.test(text)) element.textContent = status;
        if (text === 'Current version') element.textContent = version;
      });
    });
    makeGrid(cards);
  }

  let queued = false;
  function scheduleLoad() {
    if (queued) return;
    queued = true;
    setTimeout(() => { queued = false; load(); }, 80);
  }

  async function load() {
    try {
      const response = await fetch(api, {credentials: 'include', headers: {Accept: 'application/json'}});
      const payload = await response.json();
      if (response.ok && Array.isArray(payload.data)) apply(payload.data);
    } catch (_) {}
  }

  const observer = new MutationObserver(scheduleLoad);
  observer.observe(document.documentElement, {childList: true, subtree: true});
  load();
})();
