(() => {
  'use strict';
  async function loadSignature() {
    try {
      const response = await fetch('/backend/api/cv-maker', { credentials: 'include', headers: { Accept: 'application/json' } });
      if (!response.ok) return;
      const { data } = await response.json();
      if (!data?.signature?.has_signature || !data.signature.signature_url) return;
      const url = new URL(data.signature.signature_url, location.origin);
      if (url.origin !== location.origin) return;
      const imageResponse = await fetch(url, { credentials: 'include', headers: { Accept: 'image/*' } });
      if (!imageResponse.ok || !imageResponse.headers.get('Content-Type')?.startsWith('image/')) return;
      const blobUrl = URL.createObjectURL(await imageResponse.blob());
      const image = document.getElementById('idMemberSignature');
      image.onload = () => { document.getElementById('idSignatureBlock').hidden = false; };
      image.onerror = () => URL.revokeObjectURL(blobUrl);
      image.src = blobUrl;
      addEventListener('pagehide', () => URL.revokeObjectURL(blobUrl), { once: true });
    } catch (_) { /* A missing signature must not prevent the member ID from loading. */ }
  }
  loadSignature();
})();
