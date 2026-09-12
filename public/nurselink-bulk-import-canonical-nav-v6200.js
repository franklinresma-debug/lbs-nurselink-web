/* NURSELINK_BULK_IMPORT_CANONICAL_NAV_V6200 */
(function () {
  'use strict';

  if (window.__NurseLinkBulkImportCanonicalNavV6200) return;
  window.__NurseLinkBulkImportCanonicalNavV6200 = true;

  var embedded =
    window.self !== window.top
    || new URLSearchParams(window.location.search).get('embedded') === '1';

  /*
   * The legacy URL is retained for bookmarks and for the same-origin module
   * frame used by the canonical Administrator portal. A direct visit must
   * remain inside NurseLink Administration rather than opening a second shell.
   */
  if (!embedded) {
    window.location.replace('/admin/#bulk-import');
    return;
  }

  document.documentElement.setAttribute(
    'data-nurselink-admin-embedded',
    'bulk-import'
  );

  function install() {
    var links = Array.prototype.slice.call(document.querySelectorAll('a[href*="nurselink-admin-dashboard"], a[href*="/admin/"]'));
    links.forEach(function (a) {
      var txt = (a.textContent || '').trim().toLowerCase();
      if (txt.indexOf('dashboard') !== -1 || txt.indexOf('admin') !== -1) {
        a.setAttribute('href','/admin/#dashboard');
        a.setAttribute('target','_top');
      }
    });

    var signout = Array.prototype.slice.call(document.querySelectorAll('a,button')).find(function(el){
      return (el.textContent || '').toLowerCase().indexOf('sign out') !== -1;
    });
    if (signout && !document.getElementById('nl6200BackToAdmin')) {
      var back=document.createElement('a');
      back.id='nl6200BackToAdmin';
      back.href='/admin/#dashboard';
      back.target='_top';
      back.textContent='Back to Administration Center';
      back.style.display='block';
      back.style.margin='8px 10px';
      back.style.padding='10px 12px';
      back.style.textAlign='center';
      back.style.border='1px solid #cbd5e1';
      back.style.borderRadius='8px';
      back.style.textDecoration='none';
      back.style.fontWeight='600';
      signout.parentNode.insertBefore(back,signout);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded',install);
  } else {
    install();
  }
})();
