/* LBS production workspace adapter. No authentication or write endpoints are replaced. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const label = value => String(value || 'Not provided').replace(/_/g, ' ');
  let rows = [], controller;
  const render = () => {
    const container = $('lbsProcessingRecords');
    if (!container) return;
    const status = $('lbsProcessingFilter')?.value || '';
    const visible = rows.filter(row => !status || row.status === status);
    if (!visible.length) {
      container.innerHTML = '<div class="lbs-empty"><h3>No matching recruitment records</h3><p>Change the filter or open the recruitment workspace. No processing or deployment status has been created by this view.</p></div>';
      return;
    }
    const member = row => typeof row.member === 'object' ? (row.member?.name || row.member?.label || row.user_id) : row.member || row.user_id;
    container.innerHTML = `<p>${visible.length} record(s) displayed. The existing recruitment API returns up to 300 records.</p><div class="lbs-table-scroll" tabindex="0" role="region" aria-label="Applications table; scroll horizontally on a small screen"><table><thead><tr><th scope="col">Applicant</th><th scope="col">Position / employer</th><th scope="col">Recorded status</th><th scope="col">Submitted</th><th scope="col">Action</th></tr></thead><tbody>${visible.map(row => `<tr><td><strong>${esc(member(row))}</strong><br><small>Application #${esc(row.id)}</small></td><td>${esc(row.title)}<br><small>${esc(row.employer_name)}${row.country ? ' · '+esc(row.country) : ''}</small></td><td><span class="lbs-status">${esc(label(row.status))}</span></td><td>${esc(row.submitted_at || 'Not provided')}</td><td><a class="lbs-button" href="#employment">Recruitment workspace</a></td></tr>`).join('')}</tbody></table></div>`;
  };
  async function loadProcessing() {
    if (!document.body.classList.contains('nl-admin-session-ready')) return;
    controller?.abort(); controller = new AbortController();
    const signal = controller.signal, container = $('lbsProcessingRecords'), refresh = $('lbsProcessingRefresh');
    if (!container) return;
    refresh.disabled = true; container.innerHTML = '<p role="status">Loading current recruitment records…</p>';
    try {
      const response = await fetch('/backend/api/reviewer/job-applications', {credentials:'include',headers:{Accept:'application/json'},signal});
      if (!response.ok) throw Object.assign(new Error('Recruitment records are unavailable.'), {status:response.status});
      const result = await response.json();
      rows = Array.isArray(result?.data) ? result.data : [];
      const filter = $('lbsProcessingFilter'), old = filter.value;
      filter.replaceChildren(new Option('All returned statuses',''), ...[...new Set(rows.map(r=>r.status).filter(Boolean))].sort().map(s=>new Option(label(s),s)));
      if ([...filter.options].some(o=>o.value===old)) filter.value=old;
      render();
    } catch (error) {
      if (signal.aborted) return;
      container.innerHTML = `<div class="lbs-empty" role="status"><h3>${[401,403].includes(error.status) ? 'Recruitment access is required' : 'Records could not be loaded'}</h3><p>${[401,403].includes(error.status) ? 'Your existing account permissions do not allow this request. Ask an administrator to review access.' : 'Your records have not been changed. Use Refresh to retry.'}</p></div>`;
    } finally { if (!signal.aborted) refresh.disabled = false; }
  }
  window.LbsUIUX = Object.freeze({ loadProcessing });
  $('lbsProcessingRefresh')?.addEventListener('click',loadProcessing);
  $('lbsProcessingFilter')?.addEventListener('change',render);
  function syncNavigation() {
    document.querySelectorAll('#operationsMenu .lbs-admin-nav-group').forEach(group => {
      const links=[...group.querySelectorAll('[data-tab]')], current=links.some(a=>a.classList.contains('active') && !a.hidden);
      const hidden=links.every(a=>a.hidden);
      if (group.hidden!==hidden) group.hidden=hidden;
      group.classList.toggle('is-current',current);
      if (current) group.open=true;
    });
  }
  window.addEventListener('lbs:tabchange', () => {
    syncNavigation();
    document.querySelectorAll('#operationsMenu .lbs-admin-nav-group').forEach(group => { if (!group.classList.contains('is-current')) group.open=false; });
  });
  const menu=$('operationsMenu');
  if(menu) new MutationObserver(syncNavigation).observe(menu,{subtree:true,attributes:true,attributeFilter:['hidden']});
  syncNavigation();
  let previousOpen=false;
  function syncDrawer() {
    const open=document.body.classList.contains('nl555-nav-open') && matchMedia('(max-width:950px)').matches;
    const main=$('lbs-admin-main'); if(main) main.inert=open;
    if(open && !previousOpen) $('adminMobileMenuClose')?.focus();
    if(!open && previousOpen) $('adminMobileMenuToggle')?.focus();
    previousOpen=open;
  }
  new MutationObserver(syncDrawer).observe(document.body,{attributes:true,attributeFilter:['class']});
  document.addEventListener('keydown',event=>{
    if(event.key!=='Tab' || !previousOpen) return;
    const focusable=[...$('operationsSidebar').querySelectorAll('a[href],button:not([disabled]),summary')].filter(x=>x.getClientRects().length&&!x.closest('[hidden]'));
    const first=focusable[0],last=focusable[focusable.length-1];
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}
  });
})();
