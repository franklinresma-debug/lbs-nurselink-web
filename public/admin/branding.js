(() => {
  'use strict';

  const API = 'https://lbs.amsertech.com/backend';
  const placements = [
    ['login', 'Member Login', 'Above the welcome message on the member sign-in page.'],
    ['sidebar', 'Shared Sidebar Logo', 'One image for both the member portal and admin panel.'],
    ['favicon', 'Browser Icon (Favicon)', 'Use a square PNG, ideally 64 × 64 px, for browser tabs.']
  ];
  const controls = document.getElementById('adminBrandingControls');
  const saveButton = document.getElementById('adminBrandingSave');
  const publishButton = document.getElementById('adminBrandingPublish');
  const notice = document.getElementById('adminBrandingNotice');
  const version = document.getElementById('adminBrandingVersion');
  let config = null;
  let draftVersion = null;
  let publishedVersion = null;
  let busy = false;

  const clone = value => JSON.parse(JSON.stringify(value));
  const esc = value => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  function cookie(name) {
    const prefix = `${name}=`;
    const row = document.cookie.split(';').map(value => value.trim()).find(value => value.startsWith(prefix));
    return row ? decodeURIComponent(row.slice(prefix.length)) : '';
  }

  async function csrf() {
    const response = await fetch(`${API}/sanctum/csrf-cookie`, {
      credentials: 'include',
      headers: {Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest'}
    });
    if (!response.ok && response.status !== 204) throw new Error('Unable to initialize a secure logo request.');
  }

  async function request(path, options = {}) {
    const method = String(options.method || 'GET').toUpperCase();
    const mutating = !['GET', 'HEAD', 'OPTIONS'].includes(method);
    if (mutating) await csrf();

    const form = options.body instanceof FormData;
    const headers = {
      Accept: 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      ...(form ? {} : {'Content-Type': 'application/json'}),
      ...(options.headers || {})
    };
    const token = cookie('XSRF-TOKEN');
    if (mutating && token) headers['X-XSRF-TOKEN'] = token;

    const response = await fetch(`${API}${path}`, {
      ...options,
      method,
      headers,
      credentials: 'include',
      cache: 'no-store'
    });
    let body = {};
    try { body = await response.json(); } catch (_) {}
    if (!response.ok) {
      const firstValidationError = body?.errors ? Object.values(body.errors).flat().find(Boolean) : '';
      const error = new Error(firstValidationError || body?.message || `Logo request failed (${response.status}).`);
      error.status = response.status;
      throw error;
    }
    return body;
  }

  function fallbackConfig() {
    return {
      version: 2,
      globalDesign: {
        fontFamily: 'Inter, system-ui, sans-serif'
      },
      branding: {logos: {}},
      heroSliders: {
        login: {enabled: true, slides: []},
        registration: {enabled: true, slides: []}
      }
    };
  }

  function normalize(value) {
    const next = clone(value || fallbackConfig());
    next.globalDesign ||= {};
    next.heroSliders ||= {};
    next.heroSliders.login ||= {enabled: true, slides: []};
    next.heroSliders.registration ||= {enabled: true, slides: []};
    next.branding ||= {};
    next.branding.logos ||= {};
    placements.forEach(([key, title]) => {
      next.branding.logos[key] = {
        enabled: false,
        source: '',
        alt: `${title} logo`,
        ...(next.branding.logos[key] || {})
      };
    });
    return next;
  }

  function assetSource(source) {
    const value = String(source || '').trim();
    if (!value) return '';
    if (/^(?:data:|blob:|https?:)/i.test(value)) return value;
    if (value.startsWith('/api/')) return `${API}${value}`;
    return value;
  }

  function applyAdminLogo(branding) {
    const logo = branding?.logos?.sidebar ?? branding?.logos?.admin ?? {};
    const source = assetSource(logo.source);
    const visible = logo.enabled !== false && !!source;
    document.querySelectorAll('[data-nurselink-logo-placement="admin"]').forEach(node => {
      const fallback = node.dataset.logoFallback || 'NL';
      if (!visible) {
        node.classList.remove('nl640-has-logo');
        node.textContent = fallback;
        return;
      }
      node.classList.add('nl640-has-logo');
      let image = node.querySelector('img');
      if (!image) {
        image = document.createElement('img');
        image.decoding = 'async';
        node.replaceChildren(image);
      }
      image.src = source;
      image.alt = logo.alt || 'NurseLink administration logo';
    });
  }

  function showNotice(message = '', tone = '') {
    if (!notice) return;
    notice.textContent = message;
    notice.hidden = !message;
    notice.dataset.tone = tone;
  }

  function updateVersion() {
    if (!version) return;
    version.textContent = `Draft ${draftVersion || 'new'} · Published ${publishedVersion || '—'}`;
  }

  function setBusy(value) {
    busy = value;
    document.getElementById("adminGlobalAppearance")?.querySelectorAll("input,button").forEach(el => { el.disabled=value; });
    if (saveButton) saveButton.disabled = value || !config;
    if (publishButton) publishButton.disabled = value || !draftVersion;
    controls?.querySelectorAll('input').forEach(element => { element.disabled = value; });
    controls?.querySelectorAll('button').forEach(element => {
      const placement = element.dataset.logoRemove;
      element.disabled = value || (placement ? !config?.branding?.logos?.[placement]?.source : false);
    });
  }

  function render() {
    if (!controls || !config) return;
    controls.innerHTML = placements.map(([key, title, description]) => {
      const logo = config.branding.logos[key];
      if (key === "favicon") return renderFavicon(logo);
      const source = assetSource(logo.source);
      return `
        <article class="nl640-logo-card" data-logo-card="${key}">
          <div class="nl640-logo-card-head">
            <div><h3>${esc(title)}</h3><p>${esc(description)}</p></div>
            <label class="nl640-logo-enabled"><input type="checkbox" data-logo-enabled="${key}" ${logo.enabled ? 'checked' : ''}> Show</label>
          </div>
          <div class="nl640-logo-preview">${source ? `<img src="${esc(source)}" alt="${esc(logo.alt)}">` : '<span>No logo selected</span>'}</div>
          <label><span>Upload PNG, JPG or WebP · max 2 MB</span><input type="file" data-logo-file="${key}" accept="image/png,image/jpeg,image/webp"></label>
          <label><span>Or use an image URL</span><input type="url" data-logo-source="${key}" value="${esc(logo.source)}" placeholder="https://…"></label>
          <label><span>Accessible description</span><input type="text" data-logo-alt="${key}" value="${esc(logo.alt)}" maxlength="190"></label>
          <div class="nl640-logo-foot"><span class="nl640-logo-status">${source ? 'Ready to save' : 'Upload a file or enter a URL'}</span><button class="nl640-logo-remove" type="button" data-logo-remove="${key}" ${source ? '' : 'disabled'}>Remove</button></div>
        </article>`;
    }).join('');

    controls.querySelectorAll('[data-logo-enabled]').forEach(input => input.addEventListener('change', () => {
      config.branding.logos[input.dataset.logoEnabled].enabled = input.checked;
      if (input.dataset.logoEnabled === 'sidebar') applyAdminLogo(config.branding);
    }));
    controls.querySelectorAll('[data-logo-source]').forEach(input => input.addEventListener('change', () => {
      const logo = config.branding.logos[input.dataset.logoSource];
      logo.source = input.value.trim();
      if (logo.source) logo.enabled = true;
      if (input.dataset.logoSource === 'sidebar') applyAdminLogo(config.branding);
      render();
    }));
    controls.querySelectorAll('[data-logo-alt]').forEach(input => input.addEventListener('input', () => {
      config.branding.logos[input.dataset.logoAlt].alt = input.value;
    }));
    controls.querySelectorAll('[data-logo-file]').forEach(input => input.addEventListener('change', () => upload(input.dataset.logoFile, input.files?.[0])));
    controls.querySelectorAll('[data-logo-remove]').forEach(button => button.addEventListener('click', () => {
      const logo = config.branding.logos[button.dataset.logoRemove];
      markDirty();
      logo.source = '';
      logo.enabled = button.dataset.logoRemove === 'favicon' && !!logo.icons?.length;
      if (button.dataset.logoRemove === 'sidebar') applyAdminLogo(config.branding);
      render();
    }));
    controls.querySelector('[data-favicon-files]')?.addEventListener('change', e => uploadFaviconSet(Array.from(e.target.files || [])));
    controls.querySelectorAll('[data-favicon-remove]').forEach(button => button.addEventListener('click', () => {
      config.branding.logos.favicon.icons.splice(Number(button.dataset.faviconRemove),1);
      markDirty(); render();
    }));
    window.NLAppearanceEditor?.(document.getElementById('adminGlobalAppearance'),config,markDirty);
    setBusy(busy);
  }

  function markDirty() {
    draftVersion=null;
    updateVersion();
    setBusy(busy);
  }
  controls?.addEventListener('input',markDirty);
  controls?.addEventListener('change',markDirty);

  function renderFavicon(logo) {
    const icons = Array.isArray(logo.icons) ? logo.icons : [];
    return `<article class="nl640-logo-card nl-favicon-set"><div class="nl640-logo-card-head"><div><h3>Favicon set</h3><p>Upload your different sizes together. PNG sizes are detected automatically; ICO can contain several sizes.</p></div><label><input type="checkbox" data-logo-enabled="favicon" ${logo.enabled?'checked':''}> Show</label></div>
      <label><span>Select PNG and ICO files · up to 20 files, 2 MB each</span><input type="file" data-favicon-files multiple accept=".png,.ico,image/png,image/x-icon,image/vnd.microsoft.icon"></label>
      <p>Typical set: 16 × 16, 32 × 32, 48 × 48, 180 × 180, 192 × 192 and 512 × 512. A 180 × 180 PNG is also used as the Apple touch icon.</p>
      <div class="nl-favicon-list">${icons.map((icon,i)=>`<div class="nl-favicon-row"><img src="${esc(assetSource(icon.source))}" alt=""><div><strong>${esc(icon.name)}</strong><small>${esc(icon.sizes)} · ${icon.type==='image/png'?'PNG':'ICO'}</small></div><button type="button" data-favicon-remove="${i}" aria-label="Remove ${esc(icon.name)}">Remove</button></div>`).join('') || '<p>No favicon set uploaded yet.</p>'}</div>
      ${logo.source?`<p>The previous single favicon remains as a fallback.</p><img width="32" height="32" src="${esc(assetSource(logo.source))}" alt="Previous favicon"><button type="button" data-logo-remove="favicon">Remove previous favicon</button>`:''}
      <p>Save the appearance draft, then publish to apply the set to both portals. Select individual files from your set; ZIP archives and manifest files are not uploaded here.</p></article>`;
  }

  async function uploadFaviconSet(files) {
    if (!files.length) return;
    const logo=config.branding.logos.favicon;
    logo.icons=Array.isArray(logo.icons)?logo.icons:[];
    if (files.length+logo.icons.length>20) return showNotice('A favicon set can contain up to 20 files. Remove old entries first.','error');
    setBusy(true);
    const errors=[];let uploaded=0;
    try {
      for (const file of files) {
        showNotice(`Uploading favicon ${uploaded+errors.length+1} of ${files.length}…`);
        if(file.size>2*1024*1024 || !/\.(png|ico)$/i.test(file.name)){errors.push(`${file.name}: use PNG or ICO, up to 2 MB.`);continue;}
        try {
          const body=new FormData();body.append('logo',file);
          const response=await request('/api/nurselink/admin/operations-center/appearance-settings/logos/favicon',{method:'POST',body});
          const icon=response.data;
          const existing=logo.icons.findIndex(item=>item.sizes===icon.sizes&&item.type===icon.type);
          if(existing>=0)logo.icons[existing]=icon;else logo.icons.push(icon);
          logo.enabled=true;uploaded++;markDirty();
        }catch(error){errors.push(`${file.name}: ${error.message}`);}
      }
      render();
      showNotice(`${uploaded} favicon file(s) uploaded. ${errors.join(' ')} ${uploaded?'Save the draft, then publish when ready.':''}`,errors.length?'error':'success');
    } finally {setBusy(false);}
  }

  async function upload(placement, file) {
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) return showNotice('Logo files must be 2 MB or smaller.', 'error');
    setBusy(true);
    showNotice(`Uploading ${placements.find(row => row[0] === placement)?.[1] || 'logo'}…`);
    try {
      const body = new FormData();
      body.append('logo', file);
      const result = await request(`/api/nurselink/admin/operations-center/appearance-settings/logos/${placement}`, {method: 'POST', body});
      config.branding.logos[placement].source = result?.data?.source || '';
      config.branding.logos[placement].enabled = true;
      markDirty();
      if (placement === 'sidebar') applyAdminLogo(config.branding);
      showNotice('Logo uploaded. Save the draft, then publish it when ready.', 'success');
      render();
    } catch (error) {
      showNotice(error.message, 'error');
    } finally {
      setBusy(false);
    }
  }

  async function loadPublishedBranding() {
    try {
      const response = await fetch(`${API}/api/nurselink/appearance-settings`, {headers: {Accept: 'application/json'}, cache: 'no-store'});
      if (!response.ok) return;
      const body = await response.json();
      applyAdminLogo(body?.data?.branding || {});
    } catch (_) {}
  }

  async function load() {
    if (!controls) return;
    try {
      const body = await request('/api/nurselink/admin/operations-center/appearance-settings');
      const draft = body?.data?.draft || null;
      const published = body?.data?.published || null;
      config = normalize(draft?.payload || published?.payload || fallbackConfig());
      draftVersion = draft?.version || null;
      publishedVersion = published?.version || null;
      updateVersion();
      render();
      showNotice('Edit global colors, logos and the browser icon. Save a draft before publishing.', '');
    } catch (error) {
      controls.innerHTML = '<div class="nl530-empty">Logo controls are available after an Administrator session is verified.</div>';
      showNotice(error.message, 'error');
    } finally {
      setBusy(false);
    }
  }

  saveButton?.addEventListener('click', async () => {
    setBusy(true);
    showNotice('Saving appearance draft…');
    try {
      const body = await request('/api/nurselink/admin/operations-center/appearance-settings/draft', {
        method: 'POST', body: JSON.stringify({payload: config})
      });
      draftVersion = body?.data?.version || null;
      updateVersion();
      showNotice('Appearance draft saved. Publish it to update the live pages.', 'success');
    } catch (error) {
      showNotice(error.message, 'error');
    } finally {
      setBusy(false);
    }
  });

  publishButton?.addEventListener('click', async () => {
    if (!draftVersion) return;
    setBusy(true);
    showNotice('Publishing appearance…');
    try {
      await request(`/api/nurselink/admin/operations-center/appearance-settings/${draftVersion}/publish`, {method: 'POST', body: '{}'});
      publishedVersion = draftVersion;
      draftVersion = null;
      updateVersion();
      applyAdminLogo(config.branding);
      window.NLGlobalAppearance?.apply(config);
      showNotice('Appearance published. Other open pages receive it when refreshed.', 'success');
    } catch (error) {
      showNotice(error.message, 'error');
    } finally {
      setBusy(false);
    }
  });

  (async () => {
    await loadPublishedBranding();
    await load();
  })();
})();
