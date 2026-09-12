/* Presentation only. Administrator authentication remains in login.js. */
(() => {
  'use strict';
  const brand = document.querySelector('.nl-admin-auth-brand');
  const slides = [...document.querySelectorAll('.nl-admin-hero-media picture')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let active = 0;
  let paused = false;
  brand.addEventListener('mouseenter', () => { paused = true; });
  brand.addEventListener('mouseleave', () => { paused = false; });
  window.setInterval(() => {
    if (paused || document.hidden || reducedMotion.matches || slides.length < 2) return;
    slides[active].classList.remove('is-active');
    active = (active + 1) % slides.length;
    slides[active].classList.add('is-active');
  }, 6000);
  fetch('/backend/api/nurselink/appearance-settings', {
    credentials: 'include', headers: { Accept: 'application/json' },
  }).then(response => response.ok ? response.json() : null).then(body => {
    const logo = body?.data?.branding?.logos?.login;
    const holder = document.querySelector('.nl-admin-brand-logo');
    if (!logo || logo.enabled === false || !logo.source) return;
    const source = String(logo.source).trim();
    const url = new URL(source.startsWith('/api/') ? '/backend' + source : source, location.origin);
    if (!['https:', 'http:'].includes(url.protocol)) return;
    const img = holder.querySelector('img');
    img.src = url.href;
    img.alt = logo.alt || 'LBS NurseLink logo';
    holder.hidden = false;
  }).catch(() => { /* Keep the existing LBS logo fallback. */ });
})();
