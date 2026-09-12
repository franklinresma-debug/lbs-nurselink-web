window.NLAppearanceEditor = function(host,config,onChange) {
 const api=window.NLGlobalAppearance;
 if(!api)return;
 config.globalDesign.theme ||= {enabled:false,colors:{...api.defaults}};
 const theme=config.globalDesign.theme;
 theme.colors=api.colors(theme);
 const groups=[...new Set(api.fields.map(f=>f[0]))];
 host.innerHTML=`<div class="nl-theme-heading"><h3>Global colors</h3><p>Choose colors for both portals. Preview them below, save a draft, then publish.</p><label><input id="nlThemeEnabled" type="checkbox" ${theme.enabled?'checked':''}> Use custom global colors</label></div><div class="nl-theme-layout"><div class="nl-theme-fields">${groups.map(group=>`<fieldset><legend>${group}</legend>${api.fields.filter(f=>f[0]===group).map(([,key,label])=>`<label class="nl-theme-field"><span>${label}</span><input type="color" aria-label="${group} ${label}" data-color="${key}" value="${theme.colors[key]}"><code data-value="${key}">${theme.colors[key]}</code></label>`).join('')}</fieldset>`).join('')}</div><div class="nl-theme-sample"><h3>Sample preview</h3><p>Illustrative colors; your records are unchanged.</p><div id="nlThemePreview"><aside>MY NURSELINK<br><span>Dashboard</span></aside><div><header>Member portal</header><main><h3>Welcome to NurseLink</h3><p class="sample-muted">Your next step is ready.</p><article class="sample-card">Card text</article><article class="sample-panel">Panel text</article><section>Section text</section><button type="button" tabindex="-1">Primary button</button><button type="button" tabindex="-1" class="sample-secondary">Secondary button</button><p><a>View details</a></p></main></div></div><p id="nlThemeContrast" role="status"></p><button type="button" id="nlThemeReset">Reset colors to LBS defaults</button><p>Turn off custom colors and publish to return to the portal’s original styles. Status badges, document layouts and credential artwork retain their own styling.</p></div></div>`;
 function luminance(hex){return hex.slice(1).match(/../g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4).reduce((n,x,i)=>n+x*[.2126,.7152,.0722][i],0);}
 function preview(){const el=host.querySelector('#nlThemePreview');for(const[key,value]of Object.entries(theme.colors)){el.style.setProperty('--'+key,value);host.querySelector(`[data-value="${key}"]`).textContent=value;}const pairs=[['text','page','Body'],['cardText','card','Cards'],['panelText','panel','Panels'],['sectionText','section','Sections'],['primaryText','primary','Primary button'],['secondaryText','secondary','Secondary button'],['sidebarText','sidebar','Sidebar'],['category','sidebar','Categories'],['topbarText','topbar','Topbar']];const low=pairs.filter(([a,b])=>{const x=luminance(theme.colors[a]),y=luminance(theme.colors[b]);return(Math.max(x,y)+.05)/(Math.min(x,y)+.05)<4.5;}).map(p=>p[2]);host.querySelector('#nlThemeContrast').textContent=low.length?'Low text contrast: '+low.join(', ')+'. Choose a lighter or darker color.':'All preview text pairs meet a 4.5:1 contrast ratio.';}
 host.querySelectorAll('[data-color]').forEach(input=>input.addEventListener('input',()=>{theme.colors[input.dataset.color]=input.value;preview();onChange();}));
 host.querySelector('#nlThemeEnabled').addEventListener('change',e=>{theme.enabled=e.target.checked;onChange();});
 host.querySelector('#nlThemeReset').addEventListener('click',()=>{theme.colors={...api.defaults};host.querySelectorAll('[data-color]').forEach(input=>input.value=theme.colors[input.dataset.color]);preview();onChange();});
 preview();
};

/*
 * Keep the controlled Bulk Nurse Import workflow inside the canonical
 * NurseLink Administration Operations Center. The legacy HTML remains a
 * compatibility document and is rendered only as a same-origin module frame.
 */
(() => {
  'use strict';

  const TAB = 'bulk-import';
  const LEGACY_URL = '/nurselink-bulk-nurse-import-admin.html?embedded=1';
  const FRAME_ID = 'nurselinkBulkImportFrame';

  function currentTab() {
    return String(location.hash || '')
      .replace(/^#\/?/, '')
      .trim();
  }

  function installStylesheet() {
    if (document.querySelector('link[data-nl-bulk-import-embedded]')) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/admin/bulk-import-embedded.css?v=20260913';
    link.dataset.nlBulkImportEmbedded = '1';
    document.head.appendChild(link);
  }

  function prepareNavigation() {
    const menu = document.getElementById('operationsMenu');
    if (!menu) return;

    const link = menu.querySelector(
      'a[href="/nurselink-bulk-nurse-import-admin.html"], a[href*="nurselink-bulk-nurse-import-admin"]'
    );

    if (!link) return;

    link.href = '#bulk-import';
    link.dataset.tab = TAB;
    link.dataset.adminModule = 'bulk-import';
    link.setAttribute('aria-label', 'Open Bulk Nurse Import inside NurseLink Administration');
  }

  function installFrameContent(frame) {
    let doc;

    try {
      doc = frame.contentDocument;
    } catch (_) {
      return;
    }

    if (!doc?.documentElement || !doc.body) return;

    doc.documentElement.classList.add('nl-admin-embedded-frame');
    doc.body.classList.add('nl-admin-embedded-frame-body');

    if (!doc.getElementById('nlBulkImportEmbeddedOverrides')) {
      const style = doc.createElement('style');
      style.id = 'nlBulkImportEmbeddedOverrides';
      style.textContent = `
        html.nl-admin-embedded-frame,
        html.nl-admin-embedded-frame body{
          min-height:0 !important;
          background:transparent !important;
        }
        body.nl-admin-embedded-frame-body{
          overflow:hidden !important;
        }
        .nl-admin-shell{
          display:block !important;
          min-height:0 !important;
          background:transparent !important;
        }
        .nl-admin-sidebar,
        .nl-admin-header{
          display:none !important;
        }
        .nl-admin-main.bnai-main{
          width:100% !important;
          max-width:none !important;
          min-height:0 !important;
          margin:0 !important;
          padding:24px !important;
          background:transparent !important;
        }
        @media(max-width:700px){
          .nl-admin-main.bnai-main{padding:16px !important;}
        }
      `;
      doc.head.appendChild(style);
    }

    const resize = () => {
      const height = Math.max(
        doc.documentElement.scrollHeight || 0,
        doc.body.scrollHeight || 0,
        720
      );
      frame.style.height = `${height}px`;
      frame.setAttribute('aria-busy', 'false');
    };

    resize();

    if ('ResizeObserver' in window) {
      const observer = new ResizeObserver(resize);
      observer.observe(doc.documentElement);
      observer.observe(doc.body);
      frame._nlBulkImportResizeObserver?.disconnect?.();
      frame._nlBulkImportResizeObserver = observer;
    } else {
      window.setInterval(resize, 800);
    }
  }

  function createPanel() {
    if (document.querySelector(`[data-panel="${TAB}"]`)) return;

    const main = document.querySelector('.nl-admin-main.nl530-main');
    if (!main) return;

    const panel = document.createElement('section');
    panel.className = 'nl530-panel nl-bulk-import-panel';
    panel.dataset.panel = TAB;
    panel.hidden = true;
    panel.innerHTML = `
      <div class="nl-bulk-import-frame-shell">
        <iframe
          id="${FRAME_ID}"
          class="nl-bulk-import-frame"
          title="NurseLink Bulk Nurse Import Queue"
          aria-busy="true"
          loading="eager"
          referrerpolicy="same-origin"
        ></iframe>
      </div>
    `;

    main.appendChild(panel);

    const frame = panel.querySelector(`#${FRAME_ID}`);
    frame?.addEventListener('load', () => installFrameContent(frame));
  }

  function ensureFrameLoaded() {
    if (currentTab() !== TAB) return;

    const frame = document.getElementById(FRAME_ID);
    if (!frame || frame.dataset.loaded === '1') return;

    frame.dataset.loaded = '1';
    frame.src = LEGACY_URL;
  }

  function syncHeader() {
    if (currentTab() !== TAB) return;

    window.setTimeout(() => {
      const title = document.getElementById('operationsTitle');
      const subtitle = document.getElementById('operationsSubtitle');
      const mobileTitle = document.getElementById('adminMobileTitle');

      if (title) title.textContent = 'Bulk Nurse Import';
      if (mobileTitle) mobileTitle.textContent = 'Bulk Nurse Import';
      if (subtitle) {
        subtitle.textContent =
          'Review encoder-completed nurse records and create controlled unverified applicant accounts.';
      }
    }, 0);
  }

  function syncModule() {
    ensureFrameLoaded();
    syncHeader();
  }

  function init() {
    installStylesheet();
    prepareNavigation();
    createPanel();
    syncModule();

    window.addEventListener('hashchange', syncModule);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, {once: true});
  } else {
    init();
  }
})();
