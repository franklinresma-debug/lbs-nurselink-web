(() => {
  'use strict';
  const root = document.getElementById('metaWhatsAppSetup');
  if (!root) return;
  const base = '/backend/api/nurselink/admin/operations-center/settings/meta-whatsapp';
  let state = null, loading = false;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const events = [['appointment_reminder','Appointment reminder'],['application_update','Application update'],['document_request','Document request']];
  async function api(method = 'GET', body) {
    const headers = {'Accept':'application/json','X-Requested-With':'XMLHttpRequest'};
    if (method !== 'GET') {
      const csrf = await fetch('/backend/sanctum/csrf-cookie', {credentials:'include',headers});
      if (!csrf.ok) throw new Error('Your secure session could not be refreshed. Sign in again.');
      const row = document.cookie.split(';').map(x=>x.trim()).find(x=>x.startsWith('XSRF-TOKEN='));
      if (row) headers['X-XSRF-TOKEN'] = decodeURIComponent(row.slice(11));
      headers['Content-Type'] = 'application/json';
    }
    const response = await fetch(base + (method === 'CHECK' ? '/check' : ''), {method:method==='CHECK'?'POST':method,headers,credentials:'include',cache:'no-store',body:body?JSON.stringify(body):undefined});
    const payload = await response.json().catch(()=>({}));
    if (!response.ok) throw new Error(response.status===403?'Only Super Administrators can configure this integration.':Object.values(payload.errors||{}).flat()[0] || payload.message || 'Unable to load WhatsApp setup. Please retry.');
    return payload.data;
  }
  function notice(message, error = false) {
    const el=root.querySelector('[data-notice]');
    el.textContent=message;el.classList.toggle('mw-error',error);
  }
  function busy(value) { loading=value;root.querySelectorAll('button').forEach(b=>b.disabled=value); }
  function render() {
    const s=state;
    const configured=Object.values(s.secrets_configured).every(Boolean) && s.phone_number_id && s.business_account_id && s.graph_version;
    const field=(name,label,placeholder='',secret=false)=>`<label for="mw-${name}">${label}<input id="mw-${name}" name="${name}" type="${secret?'password':'text'}" autocomplete="${secret?'new-password':'off'}" ${secret?'':'required'} value="${secret?'':esc(s[name])}" placeholder="${esc(placeholder)}" ${name.includes('_id')?'inputmode="numeric" pattern="[0-9]{5,30}"':''} ${name==='graph_version'?'pattern="v[0-9]{1,3}\\.[0-9]{1,2}"':''}><small>${secret?(s.secrets_configured[name]?'Saved securely. Leave blank to keep it.':'Not yet saved. Enter the value from Meta.'):'From your Meta app dashboard.'}</small></label>`;
    root.innerHTML=`<div class="mw-hero"><div><span class="mw-eyebrow">LBS NURSELINK · DIRECT META INTEGRATION</span><h2>WhatsApp setup</h2><p>Connect your LBS business number and prepare approved notifications.</p></div><span class="mw-badge">Automatic sending off</span></div>
      <p data-notice role="status" aria-live="polite"></p>
      <div class="mw-status-grid"><article><strong>Account details</strong><span>${configured?'Saved':'Setup required'}</span></article><article><strong>Last successful connection</strong><span>${s.connection?esc(s.connection.verified_name || 'Verified with Meta'):'Not checked'}</span></article><article><strong>Webhook verification</strong><span>${s.webhook_verified_at?'Verified by Meta':'Awaiting Meta verification'}</span></article></div>
      <form id="mw-form" autocomplete="off"><section class="mw-card"><h3>1. Connect your Meta account</h3><p>Use an LBS Meta Business portfolio and a registered WhatsApp Business number. <a href="https://developers.facebook.com/apps/" target="_blank" rel="noopener noreferrer">Open Meta developer apps ↗</a></p>
      <div class="mw-fields">${field('phone_number_id','Phone number ID','Numeric ID, not the phone number')}${field('business_account_id','WhatsApp Business Account ID','WABA ID')}${field('graph_version','Graph API version','For example: v25.0')}${field('access_token','Production access token','Enter or replace token',true)}${field('app_secret','Meta app secret','Enter or replace secret',true)}${field('verify_token','Webhook verification token','Generate a token below',true)}</div>
      <div class="mw-actions"><button type="button" data-generate>Generate verification token</button><button type="button" data-copy-token>Copy new token</button></div><p class="mw-help">Credentials are encrypted on the server and are never returned to this form. Copy a newly generated verification token before saving; then enter it in Meta.</p></section>
      <section class="mw-card"><h3>2. Register the webhook</h3><p>In Meta’s WhatsApp configuration, use this callback URL and your verification token. Subscribe to <strong>messages</strong> events.</p><label for="mw-webhook">Callback URL<input id="mw-webhook" readonly value="${esc(s.webhook_url)}"></label><div class="mw-actions"><button type="button" data-copy-url>Copy callback URL</button></div><p class="mw-help">Save credentials before Meta verifies the callback. Reload this page after verification to update its status.</p></section>
      <section class="mw-card"><h3>3. Prepare approved templates</h3><p>Optional during initial setup. Enter the exact template name, language and number of body placeholders from Meta. This setup supports text templates with numbered body placeholders. Event automation will be connected after a controlled delivery test.</p>
      <div class="mw-templates">${events.map(([key,label])=>{const t=s.templates[key]||{};const result=s.connection?.templates?.[key];return `<fieldset><legend>${label}</legend><label for="mw-${key}-name">Template name<input id="mw-${key}-name" name="${key}_name" value="${esc(t.name)}" placeholder="lbs_${key}" pattern="[a-z0-9_]+" maxlength="100"></label><div class="mw-template-details"><label for="mw-${key}-language">Language<input id="mw-${key}-language" name="${key}_language" value="${esc(t.language||'en')}" placeholder="en" maxlength="12"></label><label for="mw-${key}-count">Body placeholders<input id="mw-${key}-count" name="${key}_count" type="number" min="0" max="10" value="${t.parameter_count??0}"></label></div><small>${result?(result.approved?'Approved and compatible':'Not approved or not compatible — review in Meta'):'Not checked'}</small></fieldset>`;}).join('')}</div></section>
      <section class="mw-card"><h3>4. Save and check</h3><p>Save the setup, then check the phone number, account ownership and template approval with Meta. The connection check sends no messages.</p><div class="mw-actions"><button type="submit" class="mw-primary">Save setup</button><button type="button" data-check>Check saved connection</button><button type="button" data-reload>Reload saved setup</button></div><p class="mw-help">${s.updated_at?'Last saved: '+esc(s.updated_at):'No admin setup saved yet.'} ${s.connection?'Last successful check: '+esc(s.connection.checked_at):''}</p></section></form>
      <aside class="mw-next"><h3>Before automatic delivery</h3><p>Complete account and webhook verification, approve the templates, confirm applicant opt-in, and run a controlled delivery test. Event scheduling and sending limits must be enabled before launch. Saving this page does not activate messaging or send to applicants.</p></aside>`;
    root.querySelector('#mw-form').addEventListener('submit',save);
    root.querySelector('[data-generate]').addEventListener('click',()=>{const bytes=crypto.getRandomValues(new Uint8Array(32));root.querySelector('[name=verify_token]').value=Array.from(bytes,x=>x.toString(16).padStart(2,'0')).join('');notice('New verification token generated. Copy it, then save the setup.');});
    root.querySelector('[data-copy-token]').addEventListener('click',()=>copy(root.querySelector('[name=verify_token]').value,'New verification token copied.','Generate or enter a new token first. Saved tokens are not revealed.'));
    root.querySelector('[data-copy-url]').addEventListener('click',()=>copy(s.webhook_url,'Callback URL copied.'));
    root.querySelector('[data-reload]').addEventListener('click',load);
    root.querySelector('[data-check]').addEventListener('click',async()=>{busy(true);notice('Checking saved settings with Meta…');try{state=await api('CHECK',{revision:state.revision});render();const checks=Object.values(state.connection?.templates||{});notice(checks.some(t=>!t.approved)?'Account connection verified. Some templates need attention.':'Account connection verified. No messages were sent.');}catch(e){notice(e.message,true);}finally{busy(false);}});
  }
  async function copy(value,message,empty='Nothing to copy.') {if(!value)return notice(empty,true);try{await navigator.clipboard.writeText(value);notice(message);}catch{notice('Clipboard unavailable. Select the field and copy it manually.',true);}}
  async function save(event) {
    event.preventDefault();const f=new FormData(event.target),body={revision:state.revision,templates:{}};
    for(const key of ['phone_number_id','business_account_id','graph_version','access_token','app_secret','verify_token'])body[key]=String(f.get(key)||'').trim();
    for(const [key] of events)if(f.get(key+'_name').trim())body.templates[key]={name:f.get(key+'_name').trim(),language:f.get(key+'_language').trim(),parameter_count:Number(f.get(key+'_count'))};
    busy(true);notice('Saving encrypted setup…');
    try{state=await api('PUT',body);render();notice('Setup saved securely. Automatic sending remains off.');}catch(e){notice(e.message,true);}finally{busy(false);}
  }
  async function load() {
    if(loading)return;busy(true);
    if(!state)root.innerHTML='<p role="status">Loading WhatsApp setup…</p>';
    try{state=await api();render();}catch(e){if(state)notice(e.message,true);else{root.innerHTML=`<div class="mw-card"><h2>WhatsApp setup</h2><p role="alert">${esc(e.message)}</p><button type="button">Retry</button></div>`;root.querySelector('button').onclick=load;}}finally{busy(false);}
  }
  window.addEventListener('lbs:tabchange',event=>{if(event.detail?.tab==='whatsapp')load();});
  if(location.hash==='#whatsapp')load();
})();
