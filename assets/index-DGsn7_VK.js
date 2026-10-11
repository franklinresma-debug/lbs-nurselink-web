import{n as e,r as t}from"./rolldown-runtime-hePW80VL.js";import{a as n,c as r,d as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./react-vendor-CtyEnR5s.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var p=[{id:`hero-01-global-hospital`,name:`Global Hospital`,desktopImage:`/images/registration-hero/nurselink-hero-global-hospital-01.png`,tabletImage:`/images/registration-hero/nurselink-hero-global-hospital-01.png`,mobileImage:`/images/registration-hero/nurselink-hero-global-hospital-01-mob.png`,alt:`Filipino nurses in a global hospital setting`,focus:{desktop:{fit:`cover`,x:72,y:32},tablet:{fit:`cover`,x:78,y:28},mobile:{fit:`cover`,x:50,y:26}}},{id:`hero-02-surgery`,name:`Surgery`,desktopImage:`/images/registration-hero/nurselink-hero-surgery-02.png`,tabletImage:`/images/registration-hero/nurselink-hero-surgery-02.png`,mobileImage:`/images/registration-hero/nurselink-hero-surgery-02-mob.png`,alt:`Nurses working in a surgical care environment`,focus:{desktop:{fit:`cover`,x:72,y:32},tablet:{fit:`cover`,x:78,y:28},mobile:{fit:`cover`,x:50,y:24}}},{id:`hero-03-hallway`,name:`Hospital Hallway`,desktopImage:`/images/registration-hero/nurselink-hero-hallway-03.png`,tabletImage:`/images/registration-hero/nurselink-hero-hallway-03.png`,mobileImage:`/images/registration-hero/nurselink-hero-hallway-03-mob.png`,alt:`Nurses in a modern hospital hallway`,focus:{desktop:{fit:`cover`,x:82,y:30},tablet:{fit:`cover`,x:86,y:27},mobile:{fit:`cover`,x:50,y:24}}},{id:`hero-04-senior-global`,name:`Senior Global`,desktopImage:`/images/registration-hero/nurselink-hero-senior-global-04.png`,tabletImage:`/images/registration-hero/nurselink-hero-senior-global-04.png`,mobileImage:`/images/registration-hero/nurselink-hero-senior-global-04-mob.png`,alt:`Experienced Filipino nurses in an international care setting`,focus:{desktop:{fit:`cover`,x:84,y:30},tablet:{fit:`cover`,x:88,y:27},mobile:{fit:`cover`,x:50,y:24}}},{id:`hero-05-middle-east`,name:`Middle East`,desktopImage:`/images/registration-hero/nurselink-hero-middle-east-05.png`,tabletImage:`/images/registration-hero/nurselink-hero-middle-east-05.png`,mobileImage:`/images/registration-hero/nurselink-hero-middle-east-05-mob.png`,alt:`Filipino nurses working in a Middle East healthcare setting`,focus:{desktop:{fit:`cover`,x:64,y:32},tablet:{fit:`cover`,x:70,y:28},mobile:{fit:`cover`,x:50,y:26}}}],m={desktop:{x:50,y:46},tablet:{x:50,y:44},mobile:{x:50,y:36}};function h(e){let t=e?.desktopImage||e?.tabletImage||e?.mobileImage||``;return p.find(n=>n.id===e?.id||n.desktopImage===t||n.tabletImage===t||n.mobileImage===t)}function g(e,t){let n=e?.responsive?.[t],r=m[t],i=h(e)?.focus?.[t],a=Number(n?.x),o=Number(n?.y),s=!n||!Number.isNaN(a)&&!Number.isNaN(o)&&a===r.x&&o===r.y;return i&&s?i:{fit:n?.fit||i?.fit||`cover`,x:Number.isFinite(a)?a:i?.x??50,y:Number.isFinite(o)?o:i?.y??50}}function _(e){let t={};for(let n of[`desktop`,`tablet`,`mobile`]){let r=g(e,n);t[`--nl-hero-slide-fit-${n}`]=r.fit,t[`--nl-hero-slide-x-${n}`]=`${r.x}%`,t[`--nl-hero-slide-y-${n}`]=`${r.y}%`}return t}function v(e){return e?.desktopImage||e?.tabletImage||e?.mobileImage||``}function y(e){let t=_(e);if(!h(e))return t;for(let e of[`desktop`,`tablet`])t[`--nl-hero-slide-fit-${e}`]=`cover`,t[`--nl-hero-slide-x-${e}`]=`50%`,t[`--nl-hero-slide-y-${e}`]=`50%`;return t[`--nl-hero-slide-fit-mobile`]=`cover`,t[`--nl-hero-slide-x-mobile`]=`50%`,t[`--nl-hero-slide-y-mobile`]=`6%`,t}function b(e,t){e&&Object.entries(_(t)).forEach(([t,n])=>{e.style.setProperty(t,n)})}function x(e,t){e&&Object.entries(y(t)).forEach(([t,n])=>{e.style.setProperty(t,n)})}(()=>{let e=`.app-shell`,t=`https://lbs.amsertech.com/backend`,n=window.fetch.bind(window),r=null,i=!1;function a(){let e=location.pathname.replace(/\/+$/,``)||`/`;return[`/login`,`/register`,`/forgot-password`,`/reset-password`,`/verify-email`].some(t=>e===t||e.startsWith(`${t}/`))}function o(e){let t=`${e}=`,n=document.cookie.split(`;`).map(e=>e.trim()).find(e=>e.startsWith(t));return n?n.slice(t.length):``}async function s(){if(r)return r;r=(async()=>{let e=new Headers({Accept:`application/json`,"X-Requested-With":`XMLHttpRequest`}),r=o(`XSRF-TOKEN`);if(r)try{e.set(`X-XSRF-TOKEN`,decodeURIComponent(r))}catch{e.set(`X-XSRF-TOKEN`,r)}let i=await n(`${t}/api/nurselink/session-bootstrap`,{method:`POST`,credentials:`include`,headers:e,redirect:`error`});if(!i.ok)throw Error(`NurseLink session bootstrap failed (${i.status}).`);let a=await n(`${t}/sanctum/csrf-cookie`,{method:`GET`,credentials:`include`,headers:{Accept:`application/json`,"X-Requested-With":`XMLHttpRequest`},redirect:`error`});if(!a.ok&&a.status!==204)throw Error(`NurseLink CSRF refresh failed (${a.status}).`)})();try{await r}finally{r=null}}window.fetch=async function(e,r={}){let c=typeof e==`string`?e:e instanceof URL?e.href:e?.url||``,l=String(r.method||(typeof Request<`u`&&e instanceof Request?e.method:`GET`)).toUpperCase(),u=c.replace(/\/+$/,``);if(l===`POST`&&u===`${t}/login`){await s();let a=new Headers(typeof Request<`u`&&e instanceof Request?e.headers:void 0);new Headers(r.headers||{}).forEach((e,t)=>{a.set(t,e)}),a.set(`Accept`,`application/json`),a.set(`X-Requested-With`,`XMLHttpRequest`);let c=o(`XSRF-TOKEN`);if(c)try{a.set(`X-XSRF-TOKEN`,decodeURIComponent(c))}catch{a.set(`X-XSRF-TOKEN`,c)}let l=await n(`${t}/api/nurselink/session-login`,{...r,method:`POST`,headers:a,credentials:`include`,redirect:`error`});if(l.ok){i=!0,Y.loaded=!1,Y.loading=null,Y.data=null;let e=new URLSearchParams(location.search).get(`return`)||``;location.pathname.replace(/\/+$/,``)===`/login`&&(e===`/nurselink-partner-portal.html`||e.startsWith(`/nurselink-partner-portal.html?`)||e===`/nurselink-institutional-analytics.html`||e===`/nurselink-production-readiness.html`||e.startsWith(`/dashboard?admin_invite=`))&&setTimeout(()=>{location.replace(e)},0)}return l}return l===`GET`&&u===`${t}/api/nurselink/session-identity`&&a()&&!i?new Response(JSON.stringify({data:{role:`guest`,label:`Guest`,is_super_admin:!1,is_admin:!1,is_reviewer:!1,privileged_session:!1},security:{server_confirmed:!1,public_auth_deferred:!0}}),{status:200,headers:{"Content-Type":`application/json`}}):l===`GET`&&u===`${t}/api/me`&&a()&&!i?new Response(JSON.stringify({authenticated:!1,deferred:!0}),{status:200,headers:{"Content-Type":`application/json`}}):n(e,r)};async function c(){let e=await n(`${t}/sanctum/csrf-cookie`,{method:`GET`,credentials:`include`,headers:{Accept:`application/json`,"X-Requested-With":`XMLHttpRequest`},redirect:`error`});if(!e.ok&&e.status!==204)throw Error(`NurseLink CSRF refresh failed (${e.status}).`)}function l(e,t){if(e?.message)return String(e.message);if(e?.errors&&typeof e.errors==`object`){let t=Object.values(e.errors).flat().find(Boolean);if(t)return String(t)}return t.status===401?`Please sign in to NurseLink.`:t.status===403?`Your NurseLink account is not authorized for this action.`:t.status===419?`Your secure NurseLink session expired. Please try again.`:t.status===422?`Please review the submitted information.`:`NurseLink request failed (${t.status}).`}async function u(e,t=``,r={}){t&&typeof t==`object`&&!Array.isArray(t)&&(r=t,t=``);let i=String(e||``).replace(/\/+$/,``),a=String(t||``);if(!i)throw Error(`LBS NurseLink API endpoint is missing.`);let s=a?`${i}${a.startsWith(`/`)?a:`/${a}`}`:i,u=String(r.method||`GET`).toUpperCase(),d=![`GET`,`HEAD`,`OPTIONS`].includes(u);async function f(e=!0){let t=new Headers(r.headers||{});if(t.set(`Accept`,`application/json`),t.set(`X-Requested-With`,`XMLHttpRequest`),r.body!==void 0&&r.body!==null&&!t.has(`Content-Type`)&&!(typeof FormData<`u`&&r.body instanceof FormData)&&t.set(`Content-Type`,`application/json`),d){let e=o(`XSRF-TOKEN`);if(e||=(await c(),o(`XSRF-TOKEN`)),e)try{t.set(`X-XSRF-TOKEN`,decodeURIComponent(e))}catch{t.set(`X-XSRF-TOKEN`,e)}}let i=await n(s,{...r,method:u,headers:t,credentials:`include`,redirect:`error`});if(i.status===419&&d&&e)return await c(),f(!1);let a=null;if(i.status!==204){if((i.headers.get(`content-type`)||``).includes(`application/json`))try{a=await i.json()}catch{}else try{let e=await i.text();a=e?{message:e.slice(0,500)}:null}catch{}}if(!i.ok){let e=Error(l(a,i));throw e.status=i.status,e.payload=a,e}return a??{}}return f(!0)}async function d(){if(location.pathname.replace(/\/+$/,``)!==`/dashboard`)return;let e=new URLSearchParams(location.search).get(`admin_invite`)||``;if(e.length<32||document.documentElement.dataset.nlAdminInviteHandled===`1`)return;document.documentElement.dataset.nlAdminInviteHandled=`1`;let n=document.createElement(`section`);n.className=`nurselink-admin-invite-banner`,n.setAttribute(`role`,`status`);let r=(e,t,r=``)=>{n.replaceChildren();let i=document.createElement(`strong`);i.textContent=e;let a=document.createElement(`span`);if(a.textContent=t,n.append(i,a),r){let e=document.createElement(`a`);e.href=r,e.textContent=`Open Administrator Login`,n.append(e)}};r(`Administrator invitation`,`Confirming your verified NurseLink account…`),(document.querySelector(`main`)||document.body).prepend(n);try{let n=await u(t,`/api/nurselink/admin/management/invitations/accept`,{method:`POST`,body:JSON.stringify({token:e})}),i=new URL(location.href);i.searchParams.delete(`admin_invite`),history.replaceState(null,``,i.pathname+(i.search||``)+(i.hash||``)),r(`Administrator access activated`,String(n?.message||`Your Administrator invitation has been accepted.`),`/nurselink-admin-login.html`)}catch(e){r(`Administrator invitation needs attention`,String(e?.message||`Unable to accept this Administrator invitation.`))}}let f=[`dashboard`,`profile`,`smart-registration`,`application-status`,`qualifications`,`credentials`,`documents`,`portfolio`,`learning`,`jobs`,`applications`,`messages`,`events`,`organizations`,`mentoring`,`help`,`register`,`signup`,`login`,`signin`,`verify-email`];function m(){return(window.location.pathname||`/`).toLowerCase()}function h(){let e=m().split(`/`).filter(Boolean)[0]||`dashboard`;return f.includes(e)?e:e.replace(/[^a-z0-9_-]/g,``)}function g(){let e=document.documentElement;[...e.classList].filter(e=>e.startsWith(`nurselink-route-`)).forEach(t=>e.classList.remove(t)),e.classList.add(`nurselink-route-${h()||`unknown`}`)}function _(e){e&&(e.classList.remove(`mobile-nav-open`),document.documentElement.classList.remove(`nurselink-nav-lock`))}function v(e){e&&(e.querySelectorAll(`table`).forEach(e=>{if(e.closest(`.nurselink-mobile-scroll`))return;let t=document.createElement(`div`);t.className=`nurselink-mobile-scroll`,e.parentNode.insertBefore(t,e),t.appendChild(e)}),e.querySelectorAll(`img, video, iframe, canvas, svg`).forEach(e=>{e.classList.add(`nurselink-fluid-media`)}))}function y(){return((document.querySelector(`main`)||document.body)?.textContent||``).toLowerCase()}function x(){let e=m();if(/(register|signup|sign-up|create-account|member-registration)/.test(e))return!0;let t=y();return[`create account`,`create your nurselink account`,`member registration`,`continue registration`,`confirm password`].some(e=>t.includes(e))}function S(){let e=m();if(/(login|signin|sign-in)/.test(e))return!0;let t=y();return[`sign in`,`log in`,`welcome back`].some(e=>t.includes(e))&&!!document.querySelector(`input[type="password"]`)}function C(){let e=[...document.querySelectorAll(`form`)];return e.find(e=>e.querySelector(`input[type="password"]`))||e[0]||null}function w(e){if(!e)return null;for(let t of[`.auth-card`,`.register-card`,`.login-card`,`.form-card`,`.registration-card`,`.panel`,`.card`]){let n=e.closest(t);if(n)return n}let t=e.parentElement,n=0;for(;t&&t!==document.body&&n<4;){if(t.children.length<=6)return t;t=t.parentElement,n++}return e}function T(e){let t=document.createElement(`aside`);return t.className=`nurselink-auth-hero`,t.innerHTML=`
      <div class="nurselink-auth-hero-inner">
        <div class="nurselink-auth-brand">
          <div class="nurselink-auth-logo">NL</div>
          <div class="nurselink-auth-brand-copy">
            <strong>NurseLink</strong>
            <span>LBS MEDICAL SERVICES DIVISION</span>
          </div>
        </div>

        <div class="nurselink-auth-copy">
          <span class="nurselink-auth-kicker">${e===`login`?`MEMBER ACCESS`:`MEMBER REGISTRATION`}</span>
          <h1 role="presentation" aria-hidden="true">${e===`login`?`Welcome back to NurseLink`:`Join NurseLink`}</h1>
          <p>${e===`login`?`Access your profile, credentials, learning, opportunities, and professional network.`:`Start your journey. Connect. Grow. Make an impact.`}</p>
        </div>

        <div class="nurselink-auth-points">
          <div class="nurselink-auth-point">
            <div class="nurselink-auth-icon">+</div>
            <div>
              <strong>Built for Nurses</strong>
              <span>A professional community designed around nurses and their careers.</span>
            </div>
          </div>

          <div class="nurselink-auth-point">
            <div class="nurselink-auth-icon">✓</div>
            <div>
              <strong>Secure & Trusted</strong>
              <span>Your information and professional records are handled securely.</span>
            </div>
          </div>

          <div class="nurselink-auth-point">
            <div class="nurselink-auth-icon">↗</div>
            <div>
              <strong>Grow Your Future</strong>
              <span>Build credentials, access learning, and discover opportunities.</span>
            </div>
          </div>
        </div>

        <div class="nurselink-auth-bottom">
          <strong>Connecting Filipino nurses.</strong>
          <span>Together, we elevate care.</span>
        </div>
      </div>
    `,t}function E(e){!e||!e.parentElement||[...e.parentElement.children].forEach(t=>{if(t===e||!(t instanceof HTMLElement)||t.querySelector(`form`))return;let n=(t.textContent||``).replace(/\s+/g,` `).trim().toLowerCase();(n.includes(`join nurselink`)||n.includes(`create your account and begin your membership`)||n.includes(`member registration`))&&t.classList.add(`nurselink-auth-suppressed`)})}function D(e,t,n){if(!e||!t)return;e.classList.add(`nurselink-auth-card-polished`),t.querySelectorAll(`label`).forEach(e=>{e.classList.add(`nurselink-auth-field-label`)}),t.querySelectorAll(`input, select, textarea`).forEach(e=>{e.classList.add(`nurselink-auth-field`)});let r=t.querySelector(`button[type="submit"], input[type="submit"], .primary-button`);r&&r.classList.add(`nurselink-auth-submit`);let i=[...e.querySelectorAll(`h1,h2,h3,h4,strong`)].find(e=>{let t=(e.textContent||``).replace(/\s+/g,` `).trim().toLowerCase();return t===`create account`||t===`create your account`||t===`sign in`||t===`login`});if(i&&(i.classList.add(`nurselink-auth-form-title`),i.setAttribute(`role`,`heading`),i.setAttribute(`aria-level`,`1`),n===`register`||n===`login`?i.textContent=`Create your NurseLink Account`:n===`login`&&(i.textContent=`Welcome back to NurseLink`),!e.querySelector(`.nurselink-auth-form-subtitle`))){let e=document.createElement(`p`);e.className=`nurselink-auth-form-subtitle`,e.textContent=n===`register`?`Create your secure account first. Then upload your documents and NurseLink will pre-fill as much of your membership application as possible.`:`Sign in to continue to your NurseLink account.`,i.insertAdjacentElement(`afterend`,e)}if([...e.querySelectorAll(`span,div,p,strong`)].forEach(e=>{if(e.children.length)return;let t=(e.textContent||``).replace(/\s+/g,` `).trim().toLowerCase();(t===`member registration`||t===`member access`)&&e.classList.add(`nurselink-auth-form-kicker`)}),!e.querySelector(`.nurselink-auth-trust-strip`)){let t=document.createElement(`div`);t.className=`nurselink-auth-trust-strip`,t.setAttribute(`aria-label`,`NurseLink trust and community benefits`),t.innerHTML=`
        <div class="nurselink-auth-trust-item">
          <span class="nurselink-auth-trust-icon" aria-hidden="true">
  <svg viewBox="0 0 24 24" focusable="false">
    <path d="M12 3 5 6v5c0 4.6 2.9 8.8 7 10 4.1-1.2 7-5.4 7-10V6l-7-3Z"/>
    <path d="m8.7 12 2.1 2.1 4.6-5"/>
  </svg>
</span>
          <div>
            <strong>Secure & Private</strong>
            <span>Your data is always protected.</span>
          </div>
        </div>
        <div class="nurselink-auth-trust-item">
          <span class="nurselink-auth-trust-icon" aria-hidden="true">
  <svg viewBox="0 0 24 24" focusable="false">
    <circle cx="9" cy="8" r="3"/>
    <circle cx="17" cy="9" r="2.5"/>
    <path d="M3.5 19c.7-3.2 2.8-5 5.5-5s4.8 1.8 5.5 5"/>
    <path d="M14.5 15c1-.9 2.1-1.3 3.4-1.3 2.2 0 3.7 1.3 4.2 3.7"/>
  </svg>
</span>
          <div>
            <strong>Trusted Community</strong>
            <span>Connect with nurses nationwide.</span>
          </div>
        </div>
        <div class="nurselink-auth-trust-item">
          <span class="nurselink-auth-trust-icon" aria-hidden="true">
  <svg viewBox="0 0 24 24" focusable="false">
    <path d="M5 19 10 14l3 3 6-8"/>
    <path d="M14 9h5v5"/>
  </svg>
</span>
          <div>
            <strong>Career Growth</strong>
            <span>Opportunities and resources for you.</span>
          </div>
        </div>
      `,e.appendChild(t)}}function ee(e){if(document.querySelector(`.nurselink-auth-layout[data-nurselink-auth="1"]`))return!0;let t=C();if(!t)return!1;let n=w(t);if(!n||!n.parentElement)return!1;let r=n.parentElement,i=document.createElement(`section`);i.className=`nurselink-auth-layout nurselink-auth-${e}`,i.dataset.nurselinkAuth=`1`,i.setAttribute(`data-nurselink-version`,`3.1.0`),i.setAttribute(`data-nurselink-hotfix`,`standalone-routing-v321`);let a=T(e);if(e===`register`||e===`login`){let e=document.createElement(`div`);e.className=`nurselink-registration-hero-slider`,e.setAttribute(`aria-hidden`,`true`);let t=p;t.forEach((t,n)=>{let r=document.createElement(`div`);r.className=`nurselink-registration-hero-slide`+(n===0?` is-active`:``),r.dataset.nlDesignSlideId=t.id;let i=document.createElement(`picture`),a=document.createElement(`source`);a.media=`(max-width: 680px)`,a.srcset=t.mobileImage;let o=document.createElement(`img`);o.src=t.desktopImage,o.alt=``,o.loading=n===0?`eager`:`lazy`,o.decoding=`async`,b(o,t),i.appendChild(a),i.appendChild(o),r.appendChild(i),e.appendChild(r)});let n=document.createElement(`div`);n.className=`nurselink-registration-hero-dots`,t.forEach((e,t)=>{let r=document.createElement(`button`);r.type=`button`,r.className=`nurselink-registration-hero-dot`+(t===0?` is-active`:``),r.dataset.slide=String(t),r.setAttribute(`aria-label`,`Show hero image ${t+1}`),n.appendChild(r)}),a.prepend(e),a.appendChild(n);let r=0,i=null,o=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,s=t=>{let i=[...e.querySelectorAll(`.nurselink-registration-hero-slide`)],a=[...n.querySelectorAll(`.nurselink-registration-hero-dot`)];r=(t+i.length)%i.length,i.forEach((e,t)=>e.classList.toggle(`is-active`,t===r)),a.forEach((e,t)=>e.classList.toggle(`is-active`,t===r))},c=()=>{o||(clearInterval(i),i=setInterval(()=>{s(r+1)},6e3))};n.addEventListener(`click`,e=>{let t=e.target.closest(`.nurselink-registration-hero-dot`);t&&(s(Number(t.dataset.slide||0)),c())});let l=0;e.addEventListener(`touchstart`,e=>{l=e.changedTouches[0]?.clientX||0},{passive:!0}),e.addEventListener(`touchend`,e=>{let t=(e.changedTouches[0]?.clientX||0)-l;Math.abs(t)<40||(s(r+(t<0?1:-1)),c())},{passive:!0}),c()}let o=document.createElement(`div`);return o.className=`nurselink-auth-panel-wrap`,i.appendChild(a),i.appendChild(o),r.insertBefore(i,n),o.appendChild(n),n.classList.add(`nurselink-register-panel`),document.documentElement.classList.add(`nurselink-public-${e}`),E(i),t.classList.add(`nurselink-auth-form`),D(n,t,e),t.querySelectorAll(`input`).forEach(e=>{if(!e.getAttribute(`autocomplete`)){let t=(e.name||e.type||``).toLowerCase();t.includes(`email`)?e.autocomplete=`email`:t.includes(`first`)?e.autocomplete=`given-name`:t.includes(`last`)?e.autocomplete=`family-name`:e.type===`password`&&(e.autocomplete=`new-password`)}}),!0}let O=[{number:1,title:`Personal Information`,short:`Personal`,href:`/profile?nlstep=1`,description:`Identity, contact details and current address.`},{number:2,title:`Professional Information`,short:`Professional`,href:`/profile?nlstep=2`,description:`Professional title and nursing experience.`},{number:3,title:`Credentials & Licenses`,short:`Credentials`,href:`/smart-registration?nlstep=3`,description:`PRC license, diploma and professional evidence.`},{number:4,title:`Employment / OFW History`,short:`Employment`,href:`/profile?nlstep=4`,description:`Current or most recent position and employer.`},{number:5,title:`Documents & Missing Info`,short:`Documents`,href:`/smart-registration?nlstep=5`,description:`Upload evidence and complete missing information.`},{number:6,title:`Review & Submit`,short:`Review`,href:`/application-status`,description:`Review completion and submit your application.`}];function k(){let e=(document.querySelector(`.topbar`)?.textContent||``).replace(/\s+/g,` `).trim().toLowerCase();return e.includes(`applicant portal`)||e.includes(`applicantportal`)?!0:(document.querySelector(`.user-chip`)?.textContent||``).toLowerCase().includes(`membership pending`)}function A(){let e=h(),t=new URLSearchParams(window.location.search),n=Number(t.get(`nlstep`)||0);return e===`profile`?[1,2,4].includes(n)?n:1:e===`smart-registration`?[3,5].includes(n)?n:3:e===`application-status`?6:0}function te(e){let t=Math.max(0,Math.min(100,Number(e)||0));return t<25?O[0]:t<50?O[1]:t<65?O[2]:t<75?O[3]:t<90?O[4]:O[5]}function j(){let e=0,t=`Not Started`;return[...document.querySelectorAll(`.stat-card`)].forEach(n=>{let r=(n.textContent||``).replace(/\s+/g,` `).trim();if(/Application Progress/i.test(r)){let t=r.match(/(\d{1,3})\s*%/);t&&(e=Math.max(0,Math.min(100,Number(t[1]))))}if(/Application Status/i.test(r)){let e=n.querySelector(`strong`);e?.textContent?.trim()&&(t=e.textContent.trim())}}),{progress:e,status:t}}function ne(e){let t=O[e-1]||O[0],n=O[e-2]||null,r=O[e]||null,i=document.createElement(`section`);return i.className=`nurselink-application-journey`,i.dataset.nurselinkJourney=`1`,i.setAttribute(`aria-label`,`NurseLink membership application steps`),i.innerHTML=`
      <div class="nurselink-journey-heading">
        <div>
          <span class="nurselink-journey-eyebrow">MEMBERSHIP APPLICATION</span>
          <strong>Complete your application</strong>
          <p>Save your information as you go. You can return to any available step before submission.</p>
        </div>
        <div class="nurselink-journey-count">
          <span>Step</span>
          <strong>${e}</strong>
          <small>of 6</small>
        </div>
      </div>

      <div class="nurselink-journey-mobile-summary">
        <div>
          <span>Step ${e} of 6</span>
          <strong>${t.title}</strong>
          <small>${t.description}</small>
        </div>
        <div class="nurselink-journey-progress" aria-hidden="true">
          <i style="width:${e/6*100}%"></i>
        </div>
      </div>

      <nav class="nurselink-journey-steps">
        ${O.map(t=>`
          <a
            href="${t.href}"
            class="nurselink-journey-step ${t.number===e?`active`:``}"
            ${t.number===e?`aria-current="step"`:``}
          >
            <span class="nurselink-journey-number">${t.number}</span>
            <span class="nurselink-journey-step-copy">
              <strong>${t.title}</strong>
              <small>${t.description}</small>
            </span>
          </a>
        `).join(``)}
      </nav>

      <div class="nurselink-journey-mobile-actions">
        ${n?`<a class="nurselink-journey-back" href="${n.href}">← ${n.short}</a>`:`<span></span>`}
        ${r?`<a class="nurselink-journey-next" href="${r.href}">${r.short} →</a>`:`<a class="nurselink-journey-next" href="/application-status">Review status →</a>`}
      </div>
    `,i}function re(e){if(!e||!k())return;let t=A();if(!t)return;e.classList.add(`nurselink-applicant-flow`),document.documentElement.classList.add(`nurselink-applicant-flow`);let n=e.querySelector(`.nurselink-application-journey`);if(n)Number(n.querySelector(`.nurselink-journey-count strong`)?.textContent||0)!==t&&n.replaceWith(ne(t));else{n=ne(t);let r=e.querySelector(`.page-header`);r?.parentElement===e?r.insertAdjacentElement(`afterend`,n):e.insertBefore(n,e.firstChild)}}function ie(e,t){return(e?.textContent||``).replace(/\s+/g,` `).trim().toLowerCase().startsWith(t.toLowerCase())}function ae(e,t,n,r){if(!e)return null;let i=e.querySelector(`.nurselink-step-context`);if(!i){i=document.createElement(`section`),i.className=`nurselink-step-context`;let t=e.querySelector(`.nurselink-application-journey`);t?t.insertAdjacentElement(`afterend`,i):e.insertBefore(i,e.firstChild)}return i.dataset.context=t,i.innerHTML=`
      <div class="nurselink-step-context-icon" aria-hidden="true">✓</div>
      <div>
        <span>APPLICATION STEP</span>
        <strong>${n}</strong>
        <p>${r}</p>
      </div>
    `,i}function oe(e){if(!e||h()!==`profile`||!k())return;let t=A();e.classList.add(`nurselink-profile-step-${t}`),e.querySelectorAll(`.nurselink-step-focus, .nurselink-section-active`).forEach(e=>e.classList.remove(`nurselink-step-focus`,`nurselink-section-active`));let n=[...e.querySelectorAll(`h2`)],r=n.find(e=>ie(e,`personal information`)),i=n.find(e=>ie(e,`professional information`)),a=[...e.querySelectorAll(`.profile-form label`)],o=a.find(e=>ie(e,`professional title`)),s=a.find(e=>ie(e,`years of experience`)),c=a.find(e=>ie(e,`current position`)),l=a.find(e=>ie(e,`current employer`));r&&(r.id=`nurselink-personal-information`),i&&(i.id=`nurselink-professional-information`);let u=null;t===1&&(r?.classList.add(`nurselink-section-active`),u=r,ae(e,`personal`,`Personal Information`,`Confirm your legal name, contact information and current address. Fields marked with an asterisk are required.`)),t===2&&(i?.classList.add(`nurselink-section-active`),o?.classList.add(`nurselink-step-focus`),s?.classList.add(`nurselink-step-focus`),u=i||o,ae(e,`professional`,`Professional Information`,`Tell NurseLink about your nursing title and experience so your application can be reviewed in the correct professional context.`)),t===4&&(i?.classList.add(`nurselink-section-active`),c?.classList.add(`nurselink-step-focus`),l?.classList.add(`nurselink-step-focus`),u=c||i,ae(e,`employment`,`Employment / OFW History`,`Build a complete record of your local and overseas nursing employment. Add each employer or facility separately, then upload supporting evidence in Step 5.`)),u&&e.dataset.nurselinkScrolledStep!==String(t)&&(e.dataset.nurselinkScrolledStep=String(t),setTimeout(()=>{u.scrollIntoView({behavior:`smooth`,block:`center`})},180))}function se(e){if(!e||h()!==`smart-registration`)return;let t=A();e.classList.add(`nurselink-smart-step-${t}`),t===3?ae(e,`credentials`,`Credentials & Licenses`,`Upload your PRC license, nursing diploma, international license, training certificate or other professional evidence. NurseLink can use supported documents to extract information for review.`):ae(e,`documents`,`Documents & Missing Information`,`Upload your CV, employment certificates, passport or ID and other supporting evidence. Review extracted information and complete anything NurseLink identifies as missing.`)}function ce(e){!e||h()!==`application-status`||!k()||(e.classList.add(`nurselink-review-submit-page`),ae(e,`review`,`Final Review & Submission`,`Check your application completion and current status below. When the application is ready, use the existing NurseLink submission controls to send it for review.`))}function le(e){if(!e||h()!==`dashboard`||!k())return;e.classList.add(`nurselink-applicant-dashboard`);let t=j();te(t.progress);let n=e.querySelector(`.nurselink-applicant-command`);if(!n){n=document.createElement(`section`),n.className=`nurselink-applicant-command`;let t=e.querySelector(`.page-header`);t?t.insertAdjacentElement(`afterend`,n):e.insertBefore(n,e.firstChild)}let r=t.status||`Not Started`;n.style.setProperty(`--nurselink-application-progress`,`${t.progress*3.6}deg`),n.innerHTML=`
      <div class="nurselink-command-main">
        <span class="nurselink-command-eyebrow">APPLICANT JOURNEY</span>
        <h2>Complete your NurseLink membership application</h2>
        <p>Build your application in clear stages, save your information as you go, and review everything before submission.</p>

        <div class="nurselink-command-actions">
          <a class="primary-button" href="/smart-registration?smartstep=1">Continue application →</a>
          <a class="secondary-button" href="/application-status">View application status</a>
        </div>
      </div>

      <div class="nurselink-command-progress-wrap">
        <div class="nurselink-command-ring" aria-label="${t.progress}% application completion">
          <div>
            <strong>${t.progress}%</strong>
            <span>Complete</span>
          </div>
        </div>

        <div class="nurselink-command-facts">
          <div>
            <span>Current status</span>
            <strong>${r}</strong>
          </div>
          <div>
            <span>Next action</span>
            <strong>Smart Registration</strong>
          </div>
          <div>
            <span>What needs attention</span>
            <strong>${t.progress>=90?`Final review and submission`:`Complete remaining application steps`}</strong>
          </div>
        </div>
      </div>
    `}function ue(){if(h()!==`verify-email`)return!1;if(document.querySelector(`.nurselink-auth-layout[data-nurselink-verification="1"]`))return!0;let e=document.querySelector(`.auth-card`);if(!e||!e.parentElement)return!1;let t=e.parentElement,n=document.createElement(`section`);n.className=`nurselink-auth-layout nurselink-auth-verification`,n.dataset.nurselinkVerification=`1`,n.setAttribute(`data-nurselink-version`,`3.1.0`);let r=T(`register`),i=r.querySelector(`.nurselink-auth-kicker`),a=r.querySelector(`.nurselink-auth-copy h1`),o=r.querySelector(`.nurselink-auth-copy p`);i&&(i.textContent=`EMAIL VERIFICATION`),a&&(a.textContent=`Almost there`),o&&(o.textContent=`Verify your email address to secure your account and continue your NurseLink membership application.`);let s=document.createElement(`div`);return s.className=`nurselink-auth-panel-wrap`,t.insertBefore(n,e),n.appendChild(r),n.appendChild(s),s.appendChild(e),e.classList.add(`nurselink-register-panel`,`nurselink-verification-card`),[...e.querySelectorAll(`h1,h2,h3`)].find(e=>ie(e,`check your email`))?.classList.add(`nurselink-auth-form-title`),e.querySelector(`.eyebrow`)?.classList.add(`nurselink-auth-form-kicker`),e.querySelector(`.verification-email`)?.classList.add(`nurselink-verification-email`),document.documentElement.classList.add(`nurselink-public-verification`,`nurselink-route-verify-email`),E(n),!0}function de(e){e&&(k()?(document.documentElement.classList.add(`nurselink-applicant-portal`),re(e),oe(e),se(e),ce(e),le(e)):document.documentElement.classList.remove(`nurselink-applicant-portal`,`nurselink-applicant-flow`))}let M={loaded:!1,loading:null,url:null,objectUrl:null};function fe(){M.objectUrl&&=(URL.revokeObjectURL(M.objectUrl),null)}async function pe(e){if(!e)return fe(),null;let t=await fetch(e,{method:`GET`,credentials:`include`,cache:`no-store`,headers:{Accept:`image/avif,image/webp,image/apng,image/jpeg,image/png,image/*,*/*;q=0.8`}});if(!t.ok)throw Error(`Unable to load the saved profile photo.`);let n=await t.blob();if(!n.type.toLowerCase().startsWith(`image/`))throw Error(`The profile photo response was not an image.`);return fe(),M.objectUrl=URL.createObjectURL(n),M.objectUrl}function me(e){let t=`${e}=`,n=document.cookie.split(`;`).map(e=>e.trim()).find(e=>e.startsWith(t));return n?decodeURIComponent(n.slice(t.length)):``}async function he(){await fetch(`https://lbs.amsertech.com/backend/sanctum/csrf-cookie`,{method:`GET`,credentials:`include`,headers:{Accept:`application/json`}})}async function ge(e=``,t={}){let n=(t.method||`GET`).toUpperCase();[`GET`,`HEAD`].includes(n)||await he();let r=new Headers(t.headers||{});if(r.set(`Accept`,`application/json`),![`GET`,`HEAD`].includes(n)){let e=me(`XSRF-TOKEN`);e&&r.set(`X-XSRF-TOKEN`,e)}let i=await fetch(`https://lbs.amsertech.com/backend/api/profile-photo${e}`,{...t,method:n,headers:r,credentials:`include`});if(!i.ok){let e=`Unable to update profile photo.`;try{let t=await i.json(),n=t?.errors;if(n&&typeof n==`object`){let t=Object.values(n)[0];Array.isArray(t)&&t[0]?e=t[0]:typeof t==`string`&&(e=t)}else t?.message&&(e=t.message)}catch{}throw Error(e)}return i.status===204?null:i.json()}function _e(){let e=(document.querySelector(`.user-chip`)?.textContent||``).replace(/\s+/g,` `).trim();return e?e.charAt(0).toUpperCase():`N`}function ve(e){e&&document.querySelectorAll(`[data-account-photo] .account-header-photo`).forEach(t=>{t.src!==e&&(t.src=e)}),document.querySelectorAll(`.topbar .avatar:not([data-account-photo])`).forEach(t=>{if(t.dataset.nurselinkInitial||(t.dataset.nurselinkInitial=(t.textContent||``).trim()||_e()),t.classList.toggle(`has-profile-photo`,!!e),e){let n=t.querySelector(`img.nurselink-avatar-photo`);n||(t.textContent=``,n=document.createElement(`img`),n.className=`nurselink-avatar-photo`,n.alt=`Profile photo`,t.appendChild(n)),n.onerror=()=>{t.classList.remove(`has-profile-photo`),t.innerHTML=``,t.textContent=t.dataset.nurselinkInitial||_e()},n.src!==e&&(n.src=e)}else t.innerHTML=``,t.textContent=t.dataset.nurselinkInitial||_e()}),document.querySelectorAll(`.nurselink-profile-photo-image`).forEach(t=>{t instanceof HTMLImageElement&&(e?(t.onerror=()=>{t.hidden=!0,t.removeAttribute(`src`);let e=t.parentElement?.querySelector(`.nurselink-profile-photo-fallback`);e&&(e.hidden=!1,e.textContent=_e())},t.src=e,t.hidden=!1):(t.removeAttribute(`src`),t.hidden=!0))}),document.querySelectorAll(`.nurselink-profile-photo-fallback`).forEach(t=>{t.hidden=!!e,e||(t.textContent=_e())}),document.querySelectorAll(`.nurselink-profile-photo-remove`).forEach(t=>{t.hidden=!e})}async function ye(e=!1){return M.loaded&&!e?(ve(M.url),M.url):(M.loading&&!e||(M.loading=ge().then(async e=>(M.url=await pe(e?.data?.profile_photo_url||null),M.loaded=!0,ve(M.url),M.url)).catch(()=>(fe(),M.loaded=!0,M.url=null,ve(null),null)).finally(()=>{M.loading=null})),M.loading)}function be(e,t,n=``){let r=e?.querySelector(`.nurselink-profile-photo-status`);r&&(r.textContent=t||``,r.dataset.tone=n)}function xe(e){return new Promise((t,n)=>{let r=(e?.type||``).toLowerCase();if(![`image/jpeg`,`image/png`,`image/webp`].includes(r)){n(Error(`Please choose a JPG, PNG or WebP image.`));return}if(e.size>5242880){n(Error(`Profile photo must not exceed 5 MB.`));return}let i=new FileReader;i.onerror=()=>n(Error(`Unable to read that image.`)),i.onload=()=>{let e=document.createElement(`div`);e.className=`nurselink-photo-crop-modal`,e.innerHTML=`
          <div class="nurselink-photo-crop-backdrop"></div>
          <section class="nurselink-photo-crop-dialog" role="dialog" aria-modal="true" aria-label="Crop profile photo">
            <div class="nurselink-photo-crop-head">
              <div>
                <span>PROFILE PHOTO</span>
                <strong>Position your photo</strong>
              </div>
              <button type="button" class="nurselink-photo-crop-close" aria-label="Close">×</button>
            </div>

            <div class="nurselink-photo-crop-stage">
              <div class="nurselink-photo-crop-viewport">
                <img alt="Profile photo crop preview">
                <div class="nurselink-photo-crop-guide"></div>
              </div>
              <small>Drag to reposition. Use the slider to zoom.</small>
            </div>

            <label class="nurselink-photo-zoom">
              <span>Zoom</span>
              <input type="range" min="1" max="3" value="1" step="0.01">
            </label>

            <div class="nurselink-photo-crop-actions">
              <button type="button" class="secondary-button nurselink-photo-cancel">Cancel</button>
              <button type="button" class="primary-button nurselink-photo-use">Use Photo</button>
            </div>
          </section>
        `,document.body.appendChild(e),document.documentElement.classList.add(`nurselink-photo-modal-open`);let r=e.querySelector(`img`),a=e.querySelector(`.nurselink-photo-crop-viewport`),o=e.querySelector(`input[type="range"]`),s=e.querySelector(`.nurselink-photo-crop-close`),c=e.querySelector(`.nurselink-photo-cancel`),l=e.querySelector(`.nurselink-photo-use`),u=e.querySelector(`.nurselink-photo-crop-backdrop`),d=0,f=0,p=1,m=1,h=0,g=0,_=null,v=0,y=0,b=0,x=0,S=!1;function C(r,i=null){S||(S=!0,e.remove(),document.documentElement.classList.remove(`nurselink-photo-modal-open`),i?n(i):t(r))}function w(){return a.getBoundingClientRect().width||280}function T(){let e=w(),t=d*m,n=f*m,r=Math.max(0,(t-e)/2),i=Math.max(0,(n-e)/2);h=Math.max(-r,Math.min(r,h)),g=Math.max(-i,Math.min(i,g))}function E(){!d||!f||(T(),r.style.width=`${d*m}px`,r.style.height=`${f*m}px`,r.style.transform=`translate(-50%, -50%) translate(${h}px, ${g}px)`)}r.onload=()=>{if(d=r.naturalWidth,f=r.naturalHeight,d<160||f<160){C(null,Error(`Please choose an image at least 160 × 160 pixels.`));return}let e=w();p=Math.max(e/d,e/f),m=p,E()},r.src=String(i.result),o.addEventListener(`input`,()=>{let e=Number(o.value)||1;m=p*e,E()}),a.addEventListener(`pointerdown`,e=>{d&&(_=e.pointerId,a.setPointerCapture(_),v=e.clientX,y=e.clientY,b=h,x=g)}),a.addEventListener(`pointermove`,e=>{_===e.pointerId&&(h=b+(e.clientX-v),g=x+(e.clientY-y),E())});function D(e){_===e.pointerId&&(_=null)}a.addEventListener(`pointerup`,D),a.addEventListener(`pointercancel`,D),s.addEventListener(`click`,()=>C(null)),c.addEventListener(`click`,()=>C(null)),u.addEventListener(`click`,()=>C(null)),l.addEventListener(`click`,()=>{if(!d||!f){C(null,Error(`Image is still loading.`));return}let e=w()/m,t=d/2-h/m,n=f/2-g/m,i=Math.max(0,Math.min(d-e,t-e/2)),a=Math.max(0,Math.min(f-e,n-e/2)),o=document.createElement(`canvas`);o.width=640,o.height=640;let s=o.getContext(`2d`);if(!s){C(null,Error(`Your browser could not prepare the photo.`));return}s.fillStyle=`#ffffff`,s.fillRect(0,0,640,640),s.drawImage(r,i,a,e,e,0,0,640,640),o.toBlob(e=>{if(!e){C(null,Error(`Unable to create the cropped photo.`));return}C(new File([e],`nurselink-profile-photo.jpg`,{type:`image/jpeg`}))},`image/jpeg`,.9)})},i.readAsDataURL(e)})}async function Se(e,t){let n;try{n=await xe(t)}catch(t){be(e,t.message,`error`);return}if(!n)return;let r=new FormData;r.append(`photo`,n),be(e,`Uploading photo…`,`loading`);try{let t=await ge(``,{method:`POST`,body:r});M.loaded=!0,M.url=await pe(t?.data?.profile_photo_url||null),ve(M.url),be(e,`Profile photo updated.`,`success`)}catch(t){be(e,t.message,`error`)}}function Ce(e){if(!e||h()!==`profile`)return;if(e.querySelector(`.nurselink-profile-photo-card`)){ye();return}let t=document.createElement(`section`);t.className=`nurselink-profile-photo-card`,t.innerHTML=`
      <div class="nurselink-profile-photo-preview">
        <img class="nurselink-profile-photo-image" alt="Your NurseLink profile photo" hidden>
        <span class="nurselink-profile-photo-fallback">${_e()}</span>
        <span class="nurselink-profile-photo-camera" aria-hidden="true">＋</span>
      </div>

      <div class="nurselink-profile-photo-copy">
        <span class="nurselink-profile-photo-eyebrow">PROFILE PHOTO</span>
        <strong>Add a professional profile picture</strong>
        <p>
          Use a clear, recent head-and-shoulders photo. Your picture will appear
          in your NurseLink profile and account avatar.
        </p>
        <small>JPG, PNG or WebP · up to 5 MB · minimum 160 × 160 px</small>

        <div class="nurselink-profile-photo-status" aria-live="polite"></div>
      </div>

      <div class="nurselink-profile-photo-actions">
        <label class="primary-button nurselink-profile-photo-upload">
          <input type="file" accept="image/jpeg,image/png,image/webp" hidden>
          <span>Upload / Change Photo</span>
        </label>

        <label class="secondary-button nurselink-profile-photo-camera-button">
          <input type="file" accept="image/jpeg,image/png,image/webp" capture="user" hidden>
          <span>Take Photo</span>
        </label>

        <button type="button" class="nurselink-profile-photo-remove" hidden>
          Remove
        </button>
      </div>
    `;let n=e.querySelector(`.nurselink-step-context`),r=e.querySelector(`.nurselink-application-journey`),i=e.querySelector(`.profile-form`);n?n.insertAdjacentElement(`afterend`,t):r?r.insertAdjacentElement(`afterend`,t):i?i.insertAdjacentElement(`beforebegin`,t):e.appendChild(t),t.querySelectorAll(`input[type="file"]`).forEach(e=>{e.addEventListener(`change`,async()=>{let n=e.files?.[0];e.value=``,n&&await Se(t,n)})}),t.querySelector(`.nurselink-profile-photo-remove`)?.addEventListener(`click`,async()=>{if(window.confirm(`Remove your NurseLink profile photo?`)){be(t,`Removing photo…`,`loading`);try{await ge(``,{method:`DELETE`}),fe(),M.loaded=!0,M.url=null,ve(null),be(t,`Profile photo removed.`,`success`)}catch(e){be(t,e.message,`error`)}}}),ye()}function we(e){e&&(ye(),h()===`profile`&&Ce(e))}let Te={loaded:!1,loading:null,rows:[]};async function Ee(e=``,t={}){let n=(t.method||`GET`).toUpperCase();[`GET`,`HEAD`].includes(n)||await he();let r=new Headers(t.headers||{});if(r.set(`Accept`,`application/json`),![`GET`,`HEAD`].includes(n)){let e=me(`XSRF-TOKEN`);e&&r.set(`X-XSRF-TOKEN`,e),t.body&&typeof t.body==`string`&&!r.has(`Content-Type`)&&r.set(`Content-Type`,`application/json`)}let i=await fetch(`https://lbs.amsertech.com/backend/api/employment-history${e}`,{...t,method:n,headers:r,credentials:`include`});if(!i.ok){let e=`Unable to update employment history.`;try{let t=await i.json();if(t?.errors&&typeof t.errors==`object`){let n=Object.values(t.errors)[0];Array.isArray(n)&&n[0]?e=n[0]:typeof n==`string`&&(e=n)}else t?.message&&(e=t.message)}catch{}throw Error(e)}return i.status===204?null:i.json()}async function De(e=!1){return Te.loaded&&!e?Te.rows:(Te.loading&&!e||(Te.loading=Ee().then(e=>(Te.rows=Array.isArray(e?.data)?e.data:[],Te.loaded=!0,Te.rows)).finally(()=>{Te.loading=null})),Te.loading)}function Oe(e){return{hospital:`Hospital`,clinic:`Clinic`,care_facility:`Care Facility`,government:`Government`,private_company:`Private Company`,recruitment_agency:`Recruitment Agency`,home_care:`Home Care`,education:`Education / Academe`,full_time:`Full-time`,part_time:`Part-time`,contract:`Contract`,temporary:`Temporary`,project_based:`Project-based`,volunteer:`Volunteer`,licensed_agency:`Licensed Recruitment Agency`,direct_hire:`Direct Hire`,government_to_government:`Government-to-Government`,name_hire:`Name Hire`,local_employment:`Local Employment`,other:`Other`}[e]||e||`—`}function ke(e){if(!e)return`Present`;let t=new Date(`${e}T00:00:00`);return Number.isNaN(t.getTime())?e:new Intl.DateTimeFormat(void 0,{month:`short`,year:`numeric`}).format(t)}function Ae(e){let t=t=>e.elements.namedItem(t)?.value?.trim?.()||``,n=t=>!!e.elements.namedItem(t)?.checked;return{employer_name:t(`employer_name`),facility_type:t(`facility_type`)||null,country:t(`country`),city:t(`city`)||null,position:t(`position`),specialty:t(`specialty`)||null,employment_type:t(`employment_type`)||null,start_date:t(`start_date`)||null,end_date:n(`is_current`)?null:t(`end_date`)||null,is_current:n(`is_current`),is_overseas:n(`is_overseas`),deployment_type:n(`is_overseas`)?t(`deployment_type`)||null:`local_employment`,agency_or_program:n(`is_overseas`)&&t(`agency_or_program`)||null,notes:t(`notes`)||null}}function je(e){let t=e.elements.namedItem(`is_current`),n=e.elements.namedItem(`is_overseas`),r=e.elements.namedItem(`end_date`);r&&(r.disabled=!!t?.checked,t?.checked&&(r.value=``)),e.querySelectorAll(`[data-overseas-only]`).forEach(e=>{let t=!!n?.checked;e.hidden=!t,e.querySelectorAll(`input,select`).forEach(e=>{e.disabled=!t})})}function Me(e=null){let t=document.createElement(`form`);t.className=`nurselink-employment-editor`,t.innerHTML=`
      <div class="nurselink-employment-editor-head">
        <div>
          <span>EMPLOYMENT RECORD</span>
          <strong>${e?`Edit employment record`:`Add employment record`}</strong>
          <p>Add one record for each hospital, employer or facility.</p>
        </div>
        <button type="button" class="nurselink-employment-editor-close" aria-label="Close">×</button>
      </div>

      <div class="nurselink-employment-grid">
        <label class="span-2">
          <span>Employer / Hospital / Facility *</span>
          <input name="employer_name" maxlength="190" required>
        </label>

        <label>
          <span>Facility Type</span>
          <select name="facility_type">
            <option value="">Select type</option>
            <option value="hospital">Hospital</option>
            <option value="clinic">Clinic</option>
            <option value="care_facility">Care Facility</option>
            <option value="government">Government</option>
            <option value="private_company">Private Company</option>
            <option value="recruitment_agency">Recruitment Agency</option>
            <option value="home_care">Home Care</option>
            <option value="education">Education / Academe</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          <span>Country *</span>
          <input name="country" maxlength="120" required>
        </label>

        <label>
          <span>City</span>
          <input name="city" maxlength="120">
        </label>

        <label>
          <span>Position *</span>
          <input name="position" maxlength="150" required placeholder="e.g. Staff Nurse">
        </label>

        <label>
          <span>Specialty / Area</span>
          <input name="specialty" maxlength="150" placeholder="e.g. ICU, ER">
        </label>

        <label>
          <span>Employment Type</span>
          <select name="employment_type">
            <option value="">Select type</option>
            <option value="full_time">Full-time</option>
            <option value="part_time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="temporary">Temporary</option>
            <option value="project_based">Project-based</option>
            <option value="volunteer">Volunteer</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          <span>Start Date</span>
          <input name="start_date" type="date">
        </label>

        <label>
          <span>End Date</span>
          <input name="end_date" type="date">
        </label>

        <label class="toggle">
          <input name="is_current" type="checkbox">
          <span>Currently employed here</span>
        </label>

        <label class="toggle">
          <input name="is_overseas" type="checkbox">
          <span>This was overseas / OFW employment</span>
        </label>

        <label data-overseas-only hidden>
          <span>Deployment / Hiring Type</span>
          <select name="deployment_type" disabled>
            <option value="">Select type</option>
            <option value="licensed_agency">Licensed Recruitment Agency</option>
            <option value="direct_hire">Direct Hire</option>
            <option value="government_to_government">Government-to-Government</option>
            <option value="name_hire">Name Hire</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label data-overseas-only hidden>
          <span>Agency / Program</span>
          <input name="agency_or_program" maxlength="190" disabled>
        </label>

        <label class="span-2">
          <span>Notes</span>
          <textarea name="notes" rows="3" maxlength="2000"></textarea>
        </label>
      </div>

      <div class="nurselink-employment-editor-status" aria-live="polite"></div>

      <div class="nurselink-employment-editor-actions">
        <button type="button" class="secondary-button cancel">Cancel</button>
        <button type="submit" class="primary-button">
          ${e?`Save Changes`:`Add Employment Record`}
        </button>
      </div>
    `;let n=(e,n)=>{let r=t.elements.namedItem(e);r&&(r instanceof HTMLInputElement&&r.type===`checkbox`?r.checked=!!n:n!=null&&(r.value=String(n)))};return e&&([`employer_name`,`facility_type`,`country`,`city`,`position`,`specialty`,`employment_type`,`start_date`,`end_date`,`deployment_type`,`agency_or_program`,`notes`].forEach(t=>n(t,e[t])),n(`is_current`,e.is_current),n(`is_overseas`,e.is_overseas)),t.elements.namedItem(`is_current`)?.addEventListener(`change`,()=>je(t)),t.elements.namedItem(`is_overseas`)?.addEventListener(`change`,()=>je(t)),je(t),t}function Ne(e,t){let n=e.querySelector(`.nurselink-employment-list`),r=e.querySelector(`.nurselink-employment-empty`),i=e.querySelector(`.nurselink-employment-count`);!n||!r||!i||(i.textContent=`${t.length} record${t.length===1?``:`s`}`,r.hidden=t.length>0,n.innerHTML=``,t.forEach(t=>{let r=document.createElement(`article`);r.className=`nurselink-employment-record`,r.innerHTML=`
        <div class="nurselink-employment-record-head">
          <div class="icon">＋</div>
          <div>
            <strong>${R(t.position||`Nursing position`)}</strong>
            <span>${R(t.employer_name||`Employer`)}</span>
          </div>
          ${t.is_current?`<em>Current</em>`:``}
        </div>

        <div class="nurselink-employment-record-meta">
          <span>${t.city?`${R(t.city)}, `:``}${R(t.country||`—`)}</span>
          <span>${ke(t.start_date)} – ${t.is_current?`Present`:ke(t.end_date)}</span>
          ${t.specialty?`<span>${R(t.specialty)}</span>`:``}
          ${t.employment_type?`<span>${Oe(t.employment_type)}</span>`:``}
          <span class="${t.is_overseas?`ofw`:``}">
            ${t.is_overseas?`OFW / Overseas`:`Local employment`}
          </span>
        </div>

        ${t.is_overseas&&t.deployment_type?`
          <div class="nurselink-employment-deployment">
            <span>Deployment</span>
            <strong>${Oe(t.deployment_type)}</strong>
            ${t.agency_or_program?`<small>${R(t.agency_or_program)}</small>`:``}
          </div>
        `:``}

        <div class="nurselink-employment-record-actions">
          <button type="button" data-action="edit">Edit</button>
          <button type="button" data-action="delete">Remove</button>
        </div>
      `,r.querySelector(`[data-action="edit"]`)?.addEventListener(`click`,()=>Fe(e,t)),r.querySelector(`[data-action="delete"]`)?.addEventListener(`click`,async()=>{if(window.confirm(`Remove ${t.position||`this record`} at ${t.employer_name||`this employer`}?`))try{await Ee(`/${t.id}`,{method:`DELETE`}),await Pe(e)}catch(t){let n=e.querySelector(`.nurselink-employment-status`);n&&(n.textContent=t.message,n.dataset.tone=`error`)}}),n.appendChild(r)}))}async function Pe(e){let t=e?.querySelector(`.nurselink-employment-status`);t&&(t.textContent=`Loading employment history…`,t.dataset.tone=`loading`);try{Ne(e,await De(!0)),t&&(t.textContent=``,t.dataset.tone=``)}catch(e){t&&(t.textContent=e.message,t.dataset.tone=`error`)}}function Fe(e,t=null){e.querySelector(`.nurselink-employment-editor-wrap`)?.remove();let n=document.createElement(`div`);n.className=`nurselink-employment-editor-wrap`;let r=Me(t);n.appendChild(r),e.querySelector(`.nurselink-employment-controls`)?.insertAdjacentElement(`afterend`,n);let i=()=>n.remove();r.querySelector(`.nurselink-employment-editor-close`)?.addEventListener(`click`,i),r.querySelector(`.cancel`)?.addEventListener(`click`,i),r.addEventListener(`submit`,async n=>{if(n.preventDefault(),!r.reportValidity())return;let a=r.querySelector(`.nurselink-employment-editor-status`),o=r.querySelector(`button[type="submit"]`);a&&(a.textContent=t?`Saving changes…`:`Adding employment record…`,a.dataset.tone=`loading`),o&&(o.disabled=!0);try{await Ee(t?`/${t.id}`:``,{method:t?`PUT`:`POST`,body:JSON.stringify(Ae(r))}),i(),await Pe(e)}catch(e){a&&(a.textContent=e.message,a.dataset.tone=`error`)}finally{o&&(o.disabled=!1)}}),r.scrollIntoView({behavior:`smooth`,block:`center`})}function Ie(e){if(!e||h()!==`profile`||A()!==4)return;let t=e.querySelector(`.nurselink-employment-history`);if(!t){t=document.createElement(`section`),t.className=`nurselink-employment-history`,t.innerHTML=`
        <div class="nurselink-employment-heading">
          <div>
            <span>STEP 4 · EMPLOYMENT / OFW HISTORY</span>
            <h2>Your Nursing Employment History</h2>
            <p>Add each local or overseas nursing position separately.</p>
          </div>
          <div class="nurselink-employment-count">0 records</div>
        </div>

        <div class="nurselink-employment-controls">
          <button type="button" class="primary-button add">+ Add Employment Record</button>
          <a class="secondary-button" href="/smart-registration?nlstep=5">
            Upload supporting documents →
          </a>
        </div>

        <div class="nurselink-employment-status" aria-live="polite"></div>

        <div class="nurselink-employment-empty">
          <div>＋</div>
          <strong>No employment history added yet</strong>
          <p>Add your current or most recent nursing position first.</p>
        </div>

        <div class="nurselink-employment-list"></div>
      `;let n=e.querySelector(`.nurselink-step-context`),r=e.querySelector(`.profile-form`);n?n.insertAdjacentElement(`afterend`,t):r?r.insertAdjacentElement(`beforebegin`,t):e.appendChild(t),t.querySelector(`.add`)?.addEventListener(`click`,()=>Fe(t))}Pe(t)}function Le(e){let t=e?.querySelector(`.nurselink-application-journey`);t&&(t.classList.add(`nurselink-journey-compact`),t.querySelectorAll(`.nurselink-journey-step-copy small`).forEach(e=>{e.hidden=!0}))}function Re(e){if(!e||h()!==`smart-registration`)return;let t=e.querySelector(`input[type="file"]`);if(!t||t.closest(`.nurselink-smart-dropzone`))return;let n=t.parentElement;if(!n)return;let r=document.createElement(`div`);r.className=`nurselink-smart-dropzone`,r.innerHTML=`
      <div>⇧</div>
      <strong>Drag & drop your document here</strong>
      <span>or choose a file from your device</span>
      <small>PDF, JPG, JPEG, PNG or DOCX · maximum 15 MB</small>
    `,n.insertBefore(r,t),r.appendChild(t),r.addEventListener(`dragover`,e=>{e.preventDefault(),r.classList.add(`dragging`)}),r.addEventListener(`dragleave`,()=>r.classList.remove(`dragging`)),r.addEventListener(`drop`,e=>{e.preventDefault(),r.classList.remove(`dragging`);let n=e.dataTransfer?.files?.[0];if(n)try{let e=new DataTransfer;e.items.add(n),t.files=e.files,t.dispatchEvent(new Event(`change`,{bubbles:!0}))}catch{}})}async function ze(e){if(!e||h()!==`application-status`)return;let t=e.querySelector(`.nurselink-review-checklist`);if(!t){t=document.createElement(`section`),t.className=`nurselink-review-checklist`;let n=e.querySelector(`.nurselink-step-context`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild)}let n=null,r=[];try{n=await ye()}catch{}try{r=await De()}catch{}let i=[[`Profile Photo`,n?`Professional photo added`:`Recommended before submission`,n?`complete`:`attention`,`/profile?nlstep=1`],[`Personal Information`,`Review identity, contact details and current address`,`review`,`/profile?nlstep=1`],[`Professional Information`,`Review title and nursing experience`,`review`,`/profile?nlstep=2`],[`Credentials & Licenses`,`Review PRC license, diploma and professional evidence`,`review`,`/smart-registration?nlstep=3`],[`Employment / OFW History`,r.length?`${r.length} employment record${r.length===1?``:`s`} added`:`Add at least one employment record`,r.length?`complete`:`attention`,`/profile?nlstep=4`],[`Supporting Documents`,`Review uploaded evidence and missing information`,`review`,`/smart-registration?nlstep=5`]];t.innerHTML=`
      <div class="nurselink-review-checklist-head">
        <span>APPLICATION READINESS</span>
        <h1>Review before you submit</h1>
        <p>Open any section below to confirm or complete your information.</p>
      </div>

      <div class="nurselink-review-checklist-grid">
        ${i.map(([e,t,n,r])=>`
          <a href="${r}" class="nurselink-review-item" data-status="${n}">
            <span class="state">${n===`complete`?`✓`:n===`attention`?`!`:`→`}</span>
            <span class="copy">
              <strong>${e}</strong>
              <small>${t}</small>
            </span>
            <span class="open">Review →</span>
          </a>
        `).join(``)}
      </div>
    `}function Be(e){if(!e||!k())return;let t=A();if(!t||t===6||e.querySelector(`.nurselink-step-actions`))return;let n=O[t-2],r=O[t],i=document.createElement(`div`);i.className=`nurselink-step-actions`,i.innerHTML=`
      <div>${n?`<a class="secondary-button" href="${n.href}">← Previous Step</a>`:``}</div>
      <div>
        <span>Save any changes on this page before continuing.</span>
        ${r?`<a class="primary-button" href="${r.href}">Continue to ${r.short} →</a>`:``}
      </div>
    `;let a=t===4&&e.querySelector(`.nurselink-employment-history`)||e.querySelector(`.profile-form`);a?a.insertAdjacentElement(`afterend`,i):e.appendChild(i)}function Ve(e){e&&(Le(e),Re(e),Ie(e),Be(e),ze(e))}let N={loaded:!1,loading:null,rows:[],error:null};async function He(e=``,t={}){let n=(t.method||`GET`).toUpperCase();[`GET`,`HEAD`].includes(n)||await he();let r=new Headers(t.headers||{});if(r.set(`Accept`,`application/json`),![`GET`,`HEAD`].includes(n)){let e=me(`XSRF-TOKEN`);e&&r.set(`X-XSRF-TOKEN`,e),t.body&&typeof t.body==`string`&&!r.has(`Content-Type`)&&r.set(`Content-Type`,`application/json`)}let i=await fetch(`https://lbs.amsertech.com/backend/api/credential-registry${e}`,{...t,method:n,headers:r,credentials:`include`});if(!i.ok){let e=`Unable to update credential.`;try{let t=await i.json();if(t?.errors&&typeof t.errors==`object`){let n=Object.values(t.errors)[0];Array.isArray(n)&&n[0]?e=n[0]:typeof n==`string`&&(e=n)}else t?.message&&(e=t.message)}catch{}throw Error(e)}return i.status===204?null:i.json()}async function Ue(e=!1){if(N.loaded&&!e)return N.rows;if(N.loading)return N.loading;if(N.error&&!e)throw N.error;return e&&(N.error=null),N.loading=He().then(e=>(N.rows=Array.isArray(e?.data)?e.data:[],N.loaded=!0,N.error=null,N.rows)).catch(e=>{throw N.error=e,e}).finally(()=>{N.loading=null}),N.loading}function We(e){return{prc_license:`PRC License`,nursing_diploma:`Nursing Diploma / Degree`,international_license:`International Nursing License`,specialty_certification:`Specialty Certification`,training_certificate:`Training Certificate`,professional_membership:`Professional Membership`,language_certificate:`Language Certificate`,other:`Other Credential`}[e]||e||`Credential`}function Ge(e){return{unverified:`Unverified`,pending:`Pending Verification`,verified:`Verified`,expired:`Expired`}[e]||e}function Ke(e){let t=t=>e.elements.namedItem(t)?.value?.trim?.()||``;return{credential_type:t(`credential_type`),title:t(`title`),issuing_body:t(`issuing_body`)||null,credential_number:t(`credential_number`)||null,country:t(`country`)||null,issue_date:t(`issue_date`)||null,expiry_date:t(`expiry_date`)||null,notes:t(`notes`)||null}}function P(e=null){let t=document.createElement(`form`);t.className=`nurselink-credential-editor`,t.innerHTML=`
      <div class="nurselink-credential-editor-head">
        <div>
          <span>PROFESSIONAL CREDENTIAL</span>
          <strong>${e?`Edit credential`:`Add credential`}</strong>
          <p>Add structured credential details, then attach supporting evidence through Smart Registration.</p>
        </div>
        <button type="button" class="close" aria-label="Close">×</button>
      </div>

      <div class="nurselink-credential-grid">
        <label>
          <span>Credential Type *</span>
          <select name="credential_type" required>
            <option value="">Select type</option>
            <option value="prc_license">PRC License</option>
            <option value="nursing_diploma">Nursing Diploma / Degree</option>
            <option value="international_license">International Nursing License</option>
            <option value="specialty_certification">Specialty Certification</option>
            <option value="training_certificate">Training Certificate</option>
            <option value="professional_membership">Professional Membership</option>
            <option value="language_certificate">Language Certificate</option>
            <option value="other">Other Credential</option>
          </select>
        </label>

        <div class="nurselink-credential-review-state">
          <span>Verification Status</span>
          <strong>${Ge(e?.verification_status||`unverified`)}</strong>
          <small>
            Reviewer-controlled. Saving credential changes will require re-verification.
          </small>
        </div>

        <label class="span-2">
          <span>Credential Title *</span>
          <input name="title" maxlength="190" required placeholder="e.g. Registered Nurse Licensure">
        </label>

        <label>
          <span>Issuing Body</span>
          <input name="issuing_body" maxlength="190" placeholder="e.g. PRC">
        </label>

        <label>
          <span>Credential / License Number</span>
          <input name="credential_number" maxlength="160">
        </label>

        <label>
          <span>Country</span>
          <input name="country" maxlength="120">
        </label>

        <label>
          <span>Issue Date</span>
          <input name="issue_date" type="date">
        </label>

        <label>
          <span>Expiry Date</span>
          <input name="expiry_date" type="date">
        </label>

        <label class="span-2">
          <span>Notes</span>
          <textarea name="notes" rows="3" maxlength="2000"></textarea>
        </label>
      </div>

      <div class="nurselink-credential-editor-status" aria-live="polite"></div>

      <div class="nurselink-credential-editor-actions">
        <button type="button" class="secondary-button cancel">Cancel</button>
        <button type="submit" class="primary-button">
          ${e?`Save Changes`:`Add Credential`}
        </button>
      </div>
    `;let n=(e,n)=>{let r=t.elements.namedItem(e);r&&n!=null&&(r.value=String(n))};return e&&[`credential_type`,`title`,`issuing_body`,`credential_number`,`country`,`issue_date`,`expiry_date`,`notes`].forEach(t=>n(t,e[t])),t}function qe(e){if(!e.expiry_date)return``;let t=new Date(`${e.expiry_date}T00:00:00`);if(Number.isNaN(t.getTime()))return``;let n=Math.ceil((t.getTime()-Date.now())/864e5);return n<0?`Expired`:n<=90?`Expires in ${n} day${n===1?``:`s`}`:``}function Je(e,t){let n=e.querySelector(`.nurselink-credential-list`),r=e.querySelector(`.nurselink-credential-empty`),i=e.querySelector(`.nurselink-credential-count`);!n||!r||!i||(i.textContent=`${t.length} credential${t.length===1?``:`s`}`,r.hidden=t.length>0,n.innerHTML=``,t.forEach(t=>{let r=qe(t),i=document.createElement(`article`);i.className=`nurselink-credential-record`,i.dataset.status=t.verification_status||`unverified`,i.innerHTML=`
        <div class="nurselink-credential-record-head">
          <div class="icon">✓</div>
          <div>
            <span>${We(t.credential_type)}</span>
            <strong>${R(t.title||We(t.credential_type))}</strong>
          </div>
          <em>${Ge(t.verification_status)}</em>
        </div>

        <div class="nurselink-credential-meta">
          ${t.issuing_body?`<span>${R(t.issuing_body)}</span>`:``}
          ${t.credential_number?`<span>No. ${R(t.credential_number)}</span>`:``}
          ${t.country?`<span>${R(t.country)}</span>`:``}
          ${t.expiry_date?`<span>Expires ${t.expiry_date}</span>`:``}
          ${r?`<span class="expiry">${r}</span>`:``}
        </div>

        <div class="nurselink-credential-actions">
          <a href="/smart-registration?nlstep=3">Upload evidence</a>
          <button type="button" data-action="edit">Edit</button>
          <button type="button" data-action="delete">Remove</button>
        </div>
      `,i.querySelector(`[data-action="edit"]`)?.addEventListener(`click`,()=>Xe(e,t)),i.querySelector(`[data-action="delete"]`)?.addEventListener(`click`,async()=>{if(window.confirm(`Remove ${t.title||`this credential`}?`))try{await He(`/${t.id}`,{method:`DELETE`}),await Ye(e,!0)}catch(t){let n=e.querySelector(`.nurselink-credential-status`);n&&(n.textContent=t.message,n.dataset.tone=`error`)}}),n.appendChild(i)}))}async function Ye(e,t=!1){let n=e?.querySelector(`.nurselink-credential-status`);n&&(n.textContent=`Loading credentials…`,n.dataset.tone=`loading`);try{Je(e,await Ue(t)),e&&(e.dataset.nurselinkCredentialsHydrated=`1`),n&&(n.textContent=``,n.dataset.tone=``)}catch(t){e&&(e.dataset.nurselinkCredentialsHydrated=`error`),n&&(n.textContent=t.message,n.dataset.tone=`error`)}}function Xe(e,t=null){e.querySelector(`.nurselink-credential-editor-wrap`)?.remove();let n=document.createElement(`div`);n.className=`nurselink-credential-editor-wrap`;let r=P(t);n.appendChild(r),e.querySelector(`.nurselink-credential-controls`)?.insertAdjacentElement(`afterend`,n);let i=()=>n.remove();r.querySelector(`.close`)?.addEventListener(`click`,i),r.querySelector(`.cancel`)?.addEventListener(`click`,i),r.addEventListener(`submit`,async n=>{if(n.preventDefault(),!r.reportValidity())return;let a=r.querySelector(`.nurselink-credential-editor-status`),o=r.querySelector(`button[type="submit"]`);a&&(a.textContent=t?`Saving changes…`:`Adding credential…`,a.dataset.tone=`loading`),o&&(o.disabled=!0);try{await He(t?`/${t.id}`:``,{method:t?`PUT`:`POST`,body:JSON.stringify(Ke(r))}),i(),await Ye(e,!0)}catch(e){a&&(a.textContent=e.message,a.dataset.tone=`error`)}finally{o&&(o.disabled=!1)}}),r.scrollIntoView({behavior:`smooth`,block:`center`})}function Ze(e){if(!e||h()!==`smart-registration`||A()!==3)return;let t=e.querySelector(`.nurselink-credential-registry`);if(!t){t=document.createElement(`section`),t.className=`nurselink-credential-registry`,t.innerHTML=`
        <div class="nurselink-credential-heading">
          <div>
            <span>STEP 3 · CREDENTIALS & LICENSES</span>
            <h2>Professional Credentials Registry</h2>
            <p>Add structured credential information here, then upload the supporting document below.</p>
          </div>
          <div class="nurselink-credential-count">0 credentials</div>
        </div>

        <div class="nurselink-credential-controls">
          <button type="button" class="primary-button add">+ Add Credential</button>
        </div>

        <div class="nurselink-credential-status" aria-live="polite"></div>

        <div class="nurselink-credential-empty">
          <div>✓</div>
          <strong>No structured credentials added yet</strong>
          <p>Start with your PRC license or nursing diploma.</p>
        </div>

        <div class="nurselink-credential-list"></div>
      `;let n=e.querySelector(`.nurselink-step-context`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild),t.querySelector(`.add`)?.addEventListener(`click`,()=>Xe(t))}t.dataset.nurselinkCredentialsHydrated||(t.dataset.nurselinkCredentialsHydrated=`loading`,Ye(t))}async function Qe(e){if(!e||h()!==`application-status`)return;let t=[];try{t=await Ue()}catch{}e.querySelectorAll(`.nurselink-review-item`).forEach(e=>{if(e.querySelector(`.copy strong`)?.textContent?.trim()!==`Credentials & Licenses`)return;let n=e.querySelector(`.copy small`),r=e.querySelector(`.state`);t.length?(e.dataset.status=`complete`,r&&(r.textContent=`✓`),n&&(n.textContent=`${t.length} structured credential${t.length===1?``:`s`} added`)):(e.dataset.status=`attention`,r&&(r.textContent=`!`),n&&(n.textContent=`Add at least your primary nursing credential`))})}function $e(e){Ze(e),Qe(e)}let et={loaded:!1,loading:null,data:null};function F(){if(document.documentElement.classList.contains(`nurselink-super-admin-test-mode`))return!0;if(G?.loaded&&G.data?.status===`approved`&&!In(G.data)||k())return!1;let t=document.querySelector(e);if(!t)return!1;let n=(t.querySelector(`.sidebar`)?.textContent||``).toLowerCase();return n.includes(`qualifications`)||n.includes(`credentials`)||n.includes(`portfolio`)||n.includes(`learning`)}function tt(e){return e.filter(e=>[`prc_license`,`international_license`].includes(e.credential_type))}function nt(e){return e.filter(e=>[`specialty_certification`,`training_certificate`,`language_certificate`].includes(e.credential_type))}function rt({credentials:e,employment:t,photo:n}){let r=Array.isArray(e)?e:[],i=Array.isArray(t)?t:[],a=tt(r),o=r.filter(e=>e.credential_type===`nursing_diploma`),s=nt(r),c=r.filter(e=>e.verification_status===`verified`),l=r.filter(e=>e.verification_status===`pending`),u=i.filter(e=>e.is_overseas),d=[{key:`license`,title:`Primary Nursing License`,weight:20,score:a.length?20:0,state:a.length?`complete`:`attention`,detail:a.length?`${a.length} primary license record${a.length===1?``:`s`}`:`Add your PRC or current nursing license`,href:`/smart-registration?nlstep=3`},{key:`education`,title:`Nursing Education`,weight:15,score:o.length?15:0,state:o.length?`complete`:`attention`,detail:o.length?`${o.length} nursing education record${o.length===1?``:`s`}`:`Add your nursing diploma or degree`,href:`/smart-registration?nlstep=3`},{key:`employment`,title:`Professional Experience`,weight:25,score:i.length>=2?25:i.length===1?20:0,state:i.length?`complete`:`attention`,detail:i.length?`${i.length} employment record${i.length===1?``:`s`}`:`Add your nursing employment history`,href:`/profile?nlstep=4`},{key:`international`,title:`International / OFW Experience`,weight:10,score:u.length?10:0,state:u.length?`complete`:`optional`,detail:u.length?`${u.length} overseas employment record${u.length===1?``:`s`}`:`Optional: add overseas / OFW nursing experience`,href:`/profile?nlstep=4`},{key:`specialty`,title:`Specialty & Continuing Development`,weight:10,score:s.length>=2?10:s.length===1?7:0,state:s.length?`complete`:`optional`,detail:s.length?`${s.length} training or specialty credential${s.length===1?``:`s`}`:`Add trainings, specialty or language credentials`,href:`/smart-registration?nlstep=3`},{key:`verification`,title:`Credential Verification`,weight:15,score:c.length?Math.min(15,8+Math.min(7,c.length*2)):l.length?5:0,state:c.length?`complete`:l.length?`pending`:`attention`,detail:c.length?`${c.length} verified credential${c.length===1?``:`s`}`:l.length?`${l.length} credential${l.length===1?``:`s`} pending verification`:`No verified credentials yet`,href:`/smart-registration?nlstep=3`},{key:`photo`,title:`Professional Profile Photo`,weight:5,score:n?5:0,state:n?`complete`:`optional`,detail:n?`Profile photo added`:`Add a professional profile photo`,href:`/profile?nlstep=1`}],f=Math.max(0,Math.min(100,Math.round(d.reduce((e,t)=>e+t.score,0)))),p=f>=90?`Excellent`:f>=75?`Strong`:f>=55?`Developing`:`Getting Started`,m=d.find(e=>[`attention`,`pending`].includes(e.state))||d.find(e=>e.state===`optional`)||null;return{score:f,level:p,sections:d,credentials:r,employment:i,photo:!!n,counts:{credentials:r.length,employment:i.length,verified:c.length,overseas:u.length},next:m}}async function it(e=!1){return et.loaded&&!e?et.data:(et.loading&&!e||(et.loading=Promise.all([Ue(e).catch(()=>[]),De(e).catch(()=>[]),ye(e).catch(()=>null)]).then(([e,t,n])=>{let r=rt({credentials:e,employment:t,photo:n});return et.loaded=!0,et.data=r,r}).finally(()=>{et.loading=null})),et.loading)}function at(e){return`${Math.max(0,Math.min(100,Number(e)||0))*3.6}deg`}function ot(e){let t=document.createElement(`section`);return t.className=`nurselink-qualification-readiness`,t.style.setProperty(`--nurselink-qualification-progress`,at(e.score)),t.innerHTML=`
      <div class="nurselink-readiness-hero">
        <div class="nurselink-readiness-copy">
          <span>PROFESSIONAL READINESS</span>
          <h2>NurseLink Qualification Readiness</h2>
          <p>
            A practical view of how complete your NurseLink professional profile is
            based on the credentials, nursing experience and verification information
            currently stored in your account.
          </p>

          <div class="nurselink-readiness-actions">
            ${e.next?`
              <a class="primary-button" href="${e.next.href}">
                Improve ${e.next.title} →
              </a>
            `:``}
            <a class="secondary-button" href="/profile">Review Profile</a>
          </div>
        </div>

        <div class="nurselink-readiness-score-card">
          <div class="nurselink-readiness-ring" aria-label="${e.score}% NurseLink readiness">
            <div>
              <strong>${e.score}%</strong>
              <span>${e.level}</span>
            </div>
          </div>
          <small>NurseLink readiness indicator</small>
        </div>
      </div>

      <div class="nurselink-readiness-metrics">
        <div>
          <span>Credentials</span>
          <strong>${e.counts.credentials}</strong>
        </div>
        <div>
          <span>Verified</span>
          <strong>${e.counts.verified}</strong>
        </div>
        <div>
          <span>Employment Records</span>
          <strong>${e.counts.employment}</strong>
        </div>
        <div>
          <span>Overseas / OFW</span>
          <strong>${e.counts.overseas}</strong>
        </div>
      </div>

      <div class="nurselink-readiness-grid">
        ${e.sections.map(e=>`
          <a
            href="${e.href}"
            class="nurselink-readiness-item"
            data-state="${e.state}"
          >
            <span class="nurselink-readiness-item-state">
              ${e.state===`complete`?`✓`:e.state===`pending`?`…`:e.state===`attention`?`!`:`+`}
            </span>

            <span class="nurselink-readiness-item-copy">
              <strong>${e.title}</strong>
              <small>${e.detail}</small>
            </span>

            <span class="nurselink-readiness-item-score">
              ${e.score}/${e.weight}
            </span>
          </a>
        `).join(``)}
      </div>

      <div class="nurselink-readiness-disclaimer">
        <strong>Important:</strong>
        This score is an internal NurseLink profile-readiness indicator. It is not
        a PRC, Professional Regulation Commission, Philippine Qualifications
        Framework, employer, licensing-board or government qualification decision.
      </div>
    `,t}async function st(e){if(!e||h()!==`qualifications`||!F()||document.documentElement.classList.contains(`nurselink-member-locked`))return;e.classList.add(`nurselink-approved-qualifications`);let t=e.querySelector(`.nurselink-qualification-readiness`),n=e.querySelector(`.nurselink-readiness-loading`);if(!t&&!n){let t=document.createElement(`section`);t.className=`nurselink-readiness-loading`,t.innerHTML=`
        <div></div>
        <strong>Preparing your professional readiness profile…</strong>
      `;let n=e.querySelector(`.page-header`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild)}let r=await it();e.querySelector(`.nurselink-readiness-loading`)?.remove(),t=e.querySelector(`.nurselink-qualification-readiness`);let i=ot(r);if(t)t.replaceWith(i);else{let t=e.querySelector(`.page-header`);t?t.insertAdjacentElement(`afterend`,i):e.insertBefore(i,e.firstChild)}}function ct(e){st(e)}function lt(){let e=document.querySelector(`.user-chip`);if(!e)return``;let t=e.cloneNode(!0);return t.querySelectorAll(`.avatar, small, span, em`).forEach(e=>e.remove()),(t.textContent||``).replace(/\s+/g,` `).trim()}async function ut(){try{return(await li())?.onboarding?.status===`completed`}catch{return!1}}function dt(e){return{...e,locked:!0,href:`#membership`,text:`${e.text} Complete onboarding to unlock.`}}function ft(){return[{href:`/profile`,icon:`◉`,title:`Professional Profile`,text:`Keep your identity, professional information and employment history current.`},{href:`/qualifications`,icon:`✓`,title:`Qualification Readiness`,text:`Review your NurseLink professional readiness and the areas that need strengthening.`},{href:`/credentials`,icon:`◆`,title:`Credentials`,text:`Manage your approved member credentials and verification records.`},{href:`/documents`,icon:`▤`,title:`Documents`,text:`Access professional evidence and important member documents.`},{href:`/portfolio`,onboardingRequired:!0,icon:`▣`,title:`Professional Portfolio`,text:`Build a professional record of your work, achievements and nursing experience.`},{href:`/learning`,icon:`◫`,title:`Learning`,text:`Continue professional development and strengthen your future readiness.`},{href:`/jobs`,onboardingRequired:!0,icon:`↗`,title:`Jobs & Opportunities`,text:`Explore suitable nursing and professional opportunities.`},{href:`/events`,icon:`◇`,title:`Events & Community`,text:`Stay connected with NurseLink professional and community activities.`},{href:`/mentoring`,onboardingRequired:!0,icon:`◎`,title:`Mentoring`,text:`Connect with professional guidance, peer support and mentoring.`}]}function pt(e){return e?.next?{href:e.next.href,title:e.next.title,text:e.next.detail}:{href:`/learning`,title:`Continue Professional Development`,text:`Your core profile is strong. Continue building skills and professional evidence.`}}async function mt(e){if(!e||h()!==`dashboard`||!F())return;e.classList.add(`nurselink-approved-member-dashboard`);let t=e.querySelector(`.nurselink-member-hub`);if(!t){t=document.createElement(`section`),t.className=`nurselink-member-hub nurselink-member-hub-loading`,t.innerHTML=`
        <div class="nurselink-member-hub-loader"></div>
        <strong>Preparing your NurseLink member dashboard…</strong>
      `;let n=e.querySelector(`.page-header`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild)}let n=await it(),r=pt(n);lt();let i=await ut(),a=ft().map(e=>e.onboardingRequired&&!i?dt(e):e);t.className=`nurselink-member-hub`,t.style.setProperty(`--nurselink-member-progress`,at(n.score)),t.innerHTML=`
      <div class="nurselink-member-welcome">
        <div>
          <span>APPROVED MEMBER</span>
          <h2>Your NurseLink Professional Hub</h2>
          <p>
            Manage your professional profile, qualifications, credentials,
            opportunities and continuing development from one place.
          </p>

          <div class="nurselink-member-welcome-actions">
            <a class="primary-button" href="${r.href}">
              ${n.score>=90?`Continue Professional Growth`:`Improve Professional Readiness`} →
            </a>
            <a class="secondary-button" href="/profile">View Profile</a>
          </div>
        </div>

        <div class="nurselink-member-readiness-mini">
          <div class="nurselink-member-readiness-ring">
            <div>
              <strong>${n.score}%</strong>
              <span>Readiness</span>
            </div>
          </div>
          <small>${n.level}</small>
        </div>
      </div>

      <div class="nurselink-member-status-row">
        <div>
          <span>Credentials</span>
          <strong>${n.counts.credentials}</strong>
          <small>${n.counts.verified} verified</small>
        </div>
        <div>
          <span>Employment</span>
          <strong>${n.counts.employment}</strong>
          <small>${n.counts.overseas} overseas / OFW</small>
        </div>
        <div>
          <span>Profile Photo</span>
          <strong>${n.photo?`Added`:`Missing`}</strong>
          <small>${n.photo?`Profile identity ready`:`Recommended`}</small>
        </div>
        <div>
          <span>Next Focus</span>
          <strong>${r.title}</strong>
          <small>${r.text}</small>
        </div>
      </div>

      <div class="nurselink-member-section-head">
        <div>
          <span>YOUR NURSELINK</span>
          <strong>Professional tools and member services</strong>
        </div>
        <a href="/qualifications">View readiness →</a>
      </div>

      <div class="nurselink-member-module-grid">
        ${a.map(e=>`
          <a
            href="${e.href}"
            class="nurselink-member-module-card${e.locked?` nurselink-member-module-locked`:``}"
            ${e.locked?`data-onboarding-locked="1" aria-label="`+R(e.title)+` — complete onboarding to unlock"`:``}
          >
            <span class="nurselink-member-module-icon">${e.icon}</span>
            <span class="nurselink-member-module-copy">
              <strong>${e.title}</strong>
              <small>${e.text}</small>
            </span>
            <span class="nurselink-member-module-arrow">→</span>
          </a>
        `).join(``)}
      </div>

      <div class="nurselink-member-note">
        <strong>Your professional information stays connected.</strong>
        Updates to your credentials, employment history and profile automatically
        improve the readiness information shown across NurseLink.
      </div>
    `}function ht(e){mt(e)}let I={loaded:!1,loading:null,rows:[]};async function gt(e=``,t={}){let n=(t.method||`GET`).toUpperCase();[`GET`,`HEAD`].includes(n)||await he();let r=new Headers(t.headers||{});if(r.set(`Accept`,`application/json`),![`GET`,`HEAD`].includes(n)){let e=me(`XSRF-TOKEN`);e&&r.set(`X-XSRF-TOKEN`,e),t.body&&typeof t.body==`string`&&!r.has(`Content-Type`)&&r.set(`Content-Type`,`application/json`)}let i=await fetch(`https://lbs.amsertech.com/backend/api/portfolio-items${e}`,{...t,method:n,headers:r,credentials:`include`});if(!i.ok){let e=`Unable to update portfolio.`;try{let t=await i.json();if(t?.errors&&typeof t.errors==`object`){let n=Object.values(t.errors)[0];Array.isArray(n)&&n[0]?e=n[0]:typeof n==`string`&&(e=n)}else t?.message&&(e=t.message)}catch{}throw Error(e)}return i.status===204?null:i.json()}async function _t(e=!1){return I.loaded&&!e?I.rows:(I.loading&&!e||(I.loading=gt().then(e=>(I.rows=Array.isArray(e?.data)?e.data:[],I.loaded=!0,I.rows)).finally(()=>{I.loading=null})),I.loading)}function vt(e){return{achievement:`Achievement`,leadership:`Leadership`,research:`Research`,project:`Professional Project`,training:`Training / Development`,volunteer:`Volunteer Work`,recognition:`Recognition / Award`,publication:`Publication`,community_service:`Community Service`,other:`Other`}[e]||e||`Portfolio Item`}function yt(e){return{private:`Private`,members:`NurseLink Members`,public:`Public`}[e]||e}function bt(e){let t=t=>e.elements.namedItem(t)?.value?.trim?.()||``;return{item_type:t(`item_type`),title:t(`title`),organization:t(`organization`)||null,location:t(`location`)||null,start_date:t(`start_date`)||null,end_date:t(`end_date`)||null,description:t(`description`)||null,reference_url:t(`reference_url`)||null,visibility:t(`visibility`)||`members`,is_featured:(t=>!!e.elements.namedItem(t)?.checked)(`is_featured`)}}function xt(e=null){let t=document.createElement(`form`);t.className=`nurselink-portfolio-editor`,t.innerHTML=`
      <div class="nurselink-portfolio-editor-head">
        <div>
          <span>DIGITAL NURSE PROFILE</span>
          <strong>${e?`Edit portfolio item`:`Add portfolio item`}</strong>
          <p>Document professional achievements, leadership, research, service and meaningful nursing work.</p>
        </div>
        <button type="button" class="close" aria-label="Close">×</button>
      </div>

      <div class="nurselink-portfolio-grid">
        <label>
          <span>Item Type *</span>
          <select name="item_type" required>
            <option value="">Select type</option>
            <option value="achievement">Achievement</option>
            <option value="leadership">Leadership</option>
            <option value="research">Research</option>
            <option value="project">Professional Project</option>
            <option value="training">Training / Development</option>
            <option value="volunteer">Volunteer Work</option>
            <option value="recognition">Recognition / Award</option>
            <option value="publication">Publication</option>
            <option value="community_service">Community Service</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          <span>Visibility</span>
          <select name="visibility">
            <option value="members">NurseLink Members</option>
            <option value="private">Private</option>
            <option value="public">Public</option>
          </select>
        </label>

        <label class="span-2">
          <span>Title *</span>
          <input name="title" maxlength="190" required>
        </label>

        <label>
          <span>Organization / Institution</span>
          <input name="organization" maxlength="190">
        </label>

        <label>
          <span>Location</span>
          <input name="location" maxlength="190">
        </label>

        <label>
          <span>Start Date</span>
          <input name="start_date" type="date">
        </label>

        <label>
          <span>End Date</span>
          <input name="end_date" type="date">
        </label>

        <label class="span-2">
          <span>Description</span>
          <textarea name="description" rows="5" maxlength="5000"></textarea>
        </label>

        <label class="span-2">
          <span>Reference URL</span>
          <input name="reference_url" type="url" maxlength="512" placeholder="https://">
        </label>

        <label class="toggle span-2">
          <input name="is_featured" type="checkbox">
          <span>Feature this item on my NurseLink professional profile</span>
        </label>
      </div>

      <div class="nurselink-portfolio-editor-status" aria-live="polite"></div>

      <div class="nurselink-portfolio-editor-actions">
        <button type="button" class="secondary-button cancel">Cancel</button>
        <button type="submit" class="primary-button">
          ${e?`Save Changes`:`Add to Portfolio`}
        </button>
      </div>
    `;let n=(e,n)=>{let r=t.elements.namedItem(e);r&&(r instanceof HTMLInputElement&&r.type===`checkbox`?r.checked=!!n:n!=null&&(r.value=String(n)))};return e&&([`item_type`,`visibility`,`title`,`organization`,`location`,`start_date`,`end_date`,`description`,`reference_url`].forEach(t=>n(t,e[t])),n(`is_featured`,e.is_featured)),t}function St(e){let t=e.start_date?ke(e.start_date):``,n=e.end_date?ke(e.end_date):``;return t&&n?`${t} – ${n}`:t||n||``}function Ct(e,t){let n=e.querySelector(`.nurselink-portfolio-list`),r=e.querySelector(`.nurselink-portfolio-empty`),i=e.querySelector(`.nurselink-portfolio-count`);if(!n||!r||!i)return;let a=t.filter(e=>e.is_featured).length;i.textContent=`${t.length} item${t.length===1?``:`s`} · ${a} featured`,r.hidden=t.length>0,n.innerHTML=``,t.forEach(t=>{let r=document.createElement(`article`);r.className=`nurselink-portfolio-item`,r.innerHTML=`
        <div class="nurselink-portfolio-item-head">
          <span class="icon">◆</span>
          <div>
            <span>${vt(t.item_type)}</span>
            <strong>${R(t.title)}</strong>
          </div>
          ${t.is_featured?`<em>Featured</em>`:``}
        </div>

        <div class="nurselink-portfolio-item-meta">
          ${t.organization?`<span>${R(t.organization)}</span>`:``}
          ${t.location?`<span>${R(t.location)}</span>`:``}
          ${St(t)?`<span>${St(t)}</span>`:``}
          <span>${yt(t.visibility)}</span>
        </div>

        ${t.description?`<p>${R(t.description)}</p>`:``}

        <div class="nurselink-portfolio-item-actions">
          ${t.reference_url?`<a href="${R(t.reference_url)}" target="_blank" rel="noopener noreferrer">View Reference ↗</a>`:``}
          <button type="button" data-action="edit">Edit</button>
          <button type="button" data-action="delete">Remove</button>
        </div>
      `,r.querySelector(`[data-action="edit"]`)?.addEventListener(`click`,()=>Tt(e,t)),r.querySelector(`[data-action="delete"]`)?.addEventListener(`click`,async()=>{if(window.confirm(`Remove "${R(t.title)}" from your portfolio?`))try{await gt(`/${t.id}`,{method:`DELETE`}),await wt(e)}catch(t){let n=e.querySelector(`.nurselink-portfolio-status`);n&&(n.textContent=t.message,n.dataset.tone=`error`)}}),n.appendChild(r)})}async function wt(e){let t=e?.querySelector(`.nurselink-portfolio-status`),n=!1;t&&(t.textContent=`Loading professional portfolio…`,t.dataset.tone=`loading`);try{Ct(e,await _t(!0))}catch(e){n=!0,t&&(t.textContent=e.message,t.dataset.tone=`error`)}finally{t&&!n&&(t.textContent=``,t.dataset.tone=``,t.hidden=!0)}}function Tt(e,t=null){e.querySelector(`.nurselink-portfolio-editor-wrap`)?.remove();let n=document.createElement(`div`);n.className=`nurselink-portfolio-editor-wrap`;let r=xt(t);n.appendChild(r),e.querySelector(`.nurselink-portfolio-controls`)?.insertAdjacentElement(`afterend`,n);let i=()=>n.remove();r.querySelector(`.close`)?.addEventListener(`click`,i),r.querySelector(`.cancel`)?.addEventListener(`click`,i),r.addEventListener(`submit`,async n=>{if(n.preventDefault(),!r.reportValidity())return;let a=r.querySelector(`.nurselink-portfolio-editor-status`),o=r.querySelector(`button[type="submit"]`);a&&(a.textContent=t?`Saving changes…`:`Adding portfolio item…`,a.dataset.tone=`loading`),o&&(o.disabled=!0);try{await gt(t?`/${t.id}`:``,{method:t?`PUT`:`POST`,body:JSON.stringify(bt(r))}),i(),await wt(e)}catch(e){a&&(a.textContent=e.message,a.dataset.tone=`error`)}finally{o&&(o.disabled=!1)}}),r.scrollIntoView({behavior:`smooth`,block:`center`})}async function Et(e){if(!e||h()!==`portfolio`||!F())return;if(e.classList.add(`nurselink-professional-portfolio-page`),!await ut()){let t=e.querySelector(`.nurselink-professional-portfolio`);if(!t){t=document.createElement(`section`),t.className=`nurselink-professional-portfolio nurselink-onboarding-feature-locked`,t.innerHTML=`
          <div class="nurselink-portfolio-heading">
            <div>
              <span>PROFESSIONAL PORTFOLIO</span>
              <h2>Complete onboarding to unlock</h2>
              <p>
                Finish your NurseLink member onboarding before using
                the Professional Portfolio.
              </p>
            </div>
          </div>
          <div class="nurselink-portfolio-controls">
            <a class="primary-button" href="/dashboard#membership">
              Complete Onboarding →
            </a>
          </div>
        `;let n=e.querySelector(`.page-header`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild)}return}let t=e.querySelector(`.nurselink-professional-portfolio`);if(!t){t=document.createElement(`section`),t.className=`nurselink-professional-portfolio`,t.innerHTML=`
        <div class="nurselink-portfolio-heading">
          <div>
            <span>PROFESSIONAL PORTFOLIO</span>
            <h2>Your Digital Nurse Profile</h2>
            <p>
              Build a professional record beyond licenses and employment.
              Highlight leadership, achievements, research, projects, training,
              service and recognitions that show the full story of your nursing career.
            </p>
          </div>
          <div class="nurselink-portfolio-count">0 items</div>
        </div>

        <div class="nurselink-portfolio-controls">
          <button type="button" class="primary-button add">+ Add Portfolio Item</button>
          <a class="secondary-button" href="/qualifications">View Qualification Readiness →</a>
        </div>

        <div class="nurselink-portfolio-status" aria-live="polite"></div>

        <div class="nurselink-portfolio-empty">
          <div>◆</div>
          <strong>Your professional portfolio is ready to grow</strong>
          <p>Add an achievement, leadership role, project, recognition or community contribution.</p>
        </div>

        <div class="nurselink-portfolio-list"></div>
      `;let n=e.querySelector(`.page-header`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild),t.querySelector(`.add`)?.addEventListener(`click`,()=>Tt(t))}wt(t)}function Dt(e){Et(e)}let L=`https://lbs.amsertech.com/backend/api/career-preferences`,Ot=`https://lbs.amsertech.com/backend/api/learning-records`;function R(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}let z={loaded:!1,loading:null,data:null},B={loaded:!1,loading:null,rows:[]};async function kt(e,t=``,n={}){let r=(n.method||`GET`).toUpperCase();[`GET`,`HEAD`].includes(r)||await he();let i=new Headers(n.headers||{});if(i.set(`Accept`,`application/json`),![`GET`,`HEAD`].includes(r)){let e=me(`XSRF-TOKEN`);e&&i.set(`X-XSRF-TOKEN`,e),typeof n.body==`string`&&!i.has(`Content-Type`)&&i.set(`Content-Type`,`application/json`)}let a=await fetch(`${e}${t}`,{...n,method:r,headers:i,credentials:`include`});if(!a.ok){let e=`Unable to save your NurseLink information.`;try{let t=await a.json();if(t?.errors&&typeof t.errors==`object`){let n=Object.values(t.errors)[0];Array.isArray(n)&&n[0]?e=n[0]:typeof n==`string`&&(e=n)}else t?.message&&(e=t.message)}catch{}throw Error(e)}return a.status===204?null:a.json()}async function At(e=!1){return z.loaded&&!e?z.data:(z.loading&&!e||(z.loading=kt(L).then(e=>(z.data=e?.data||null,z.loaded=!0,z.data)).finally(()=>{z.loading=null})),z.loading)}function jt(e){return String(e||``).split(/[,;\n]/).map(e=>e.trim()).filter(Boolean).slice(0,20)}function Mt(e){if(!e)return{score:0,label:`Not Set Up`};let t=[!!e.career_stage,!!e.desired_roles?.length,!!e.specialties?.length,!!e.target_countries?.length,!!e.work_settings?.length,!!e.employment_types?.length,!!e.available_from,!!String(e.career_goal||``).trim()],n=Math.round(t.filter(Boolean).length/t.length*100);return{score:n,label:n>=90?`Match Ready`:n>=70?`Strong`:n>=45?`Developing`:`Getting Started`}}function Nt(e=null){let t=document.createElement(`form`);if(t.className=`nurselink-career-editor`,t.innerHTML=`
      <div class="nurselink-v200-editor-head">
        <div>
          <span>CAREER MATCHING PROFILE</span>
          <strong>Tell NurseLink what opportunity fits you</strong>
          <p>This profile prepares future matching. It does not submit an employer application.</p>
        </div>
        <button type="button" class="close" aria-label="Close">×</button>
      </div>

      <div class="nurselink-v200-grid">
        <label><span>Career Stage</span><select name="career_stage">
          <option value="">Select stage</option>
          <option value="new_graduate">New Graduate</option>
          <option value="early_career">Early Career</option>
          <option value="mid_career">Mid-Career</option>
          <option value="senior">Senior / Experienced Nurse</option>
          <option value="leadership">Leadership / Management</option>
          <option value="returning_ofw">Returning OFW Nurse</option>
          <option value="career_transition">Career Transition</option>
        </select></label>

        <label><span>Available From</span><input name="available_from" type="date"></label>

        <label class="span-2"><span>Desired Roles</span><input name="desired_roles" placeholder="Staff Nurse, Nurse Educator, Head Nurse"><small>Separate multiple values with commas.</small></label>
        <label class="span-2"><span>Preferred Specialties</span><input name="specialties" placeholder="ICU, Emergency, Pediatrics"></label>
        <label class="span-2"><span>Target Countries / Locations</span><input name="target_countries" placeholder="Philippines, Saudi Arabia, Germany"></label>

        <fieldset class="span-2"><legend>Preferred Work Settings</legend><div class="nurselink-v200-checks">
          ${[[`hospital`,`Hospital`],[`clinic`,`Clinic`],[`community`,`Community`],[`home_care`,`Home Care`],[`long_term_care`,`Long-term Care`],[`education`,`Education / Academe`],[`occupational_health`,`Occupational Health`],[`telehealth`,`Telehealth`],[`government`,`Government`],[`other`,`Other`]].map(([e,t])=>`<label><input type="checkbox" name="work_settings" value="${e}"><span>${t}</span></label>`).join(``)}
        </div></fieldset>

        <fieldset class="span-2"><legend>Employment Types</legend><div class="nurselink-v200-checks">
          ${[[`full_time`,`Full-time`],[`part_time`,`Part-time`],[`contract`,`Contract`],[`temporary`,`Temporary`],[`project_based`,`Project-based`],[`other`,`Other`]].map(([e,t])=>`<label><input type="checkbox" name="employment_types" value="${e}"><span>${t}</span></label>`).join(``)}
        </div></fieldset>

        <label class="toggle"><input type="checkbox" name="open_to_overseas"><span>Open to overseas opportunities</span></label>
        <label class="toggle"><input type="checkbox" name="open_to_relocation"><span>Open to relocation</span></label>
        <label class="toggle"><input type="checkbox" name="open_to_telehealth"><span>Open to telehealth / remote nursing</span></label>
        <div></div>

        <label><span>Preferred Currency</span><input name="preferred_currency" maxlength="8" placeholder="PHP, USD, SAR"></label>
        <label><span>Minimum Monthly Compensation</span><input name="minimum_monthly_compensation" type="number" min="0" step="0.01"></label>
        <label class="span-2"><span>Career Goal</span><textarea name="career_goal" rows="4" maxlength="3000"></textarea></label>
      </div>

      <div class="nurselink-v200-status" aria-live="polite"></div>
      <div class="nurselink-v200-editor-actions">
        <button type="button" class="secondary-button cancel">Cancel</button>
        <button type="submit" class="primary-button">Save Career Profile</button>
      </div>`,e){let n=(e,n)=>{let r=t.elements.namedItem(e);r&&n!=null&&(r.value=String(n))};n(`career_stage`,e.career_stage),n(`available_from`,e.available_from),n(`desired_roles`,(e.desired_roles||[]).join(`, `)),n(`specialties`,(e.specialties||[]).join(`, `)),n(`target_countries`,(e.target_countries||[]).join(`, `)),n(`preferred_currency`,e.preferred_currency),n(`minimum_monthly_compensation`,e.minimum_monthly_compensation),n(`career_goal`,e.career_goal),[`open_to_overseas`,`open_to_relocation`,`open_to_telehealth`].forEach(n=>{let r=t.elements.namedItem(n);r instanceof HTMLInputElement&&(r.checked=!!e[n])}),t.querySelectorAll(`input[name="work_settings"]`).forEach(t=>t.checked=e.work_settings?.includes(t.value)||!1),t.querySelectorAll(`input[name="employment_types"]`).forEach(t=>t.checked=e.employment_types?.includes(t.value)||!1)}return t}function Pt(e){let t=t=>e.elements.namedItem(t)?.value?.trim?.()||``;return{desired_roles:jt(t(`desired_roles`)),specialties:jt(t(`specialties`)),target_countries:jt(t(`target_countries`)),work_settings:Array.from(e.querySelectorAll(`input[name="work_settings"]:checked`)).map(e=>e.value),employment_types:Array.from(e.querySelectorAll(`input[name="employment_types"]:checked`)).map(e=>e.value),open_to_overseas:!!e.elements.namedItem(`open_to_overseas`)?.checked,open_to_relocation:!!e.elements.namedItem(`open_to_relocation`)?.checked,open_to_telehealth:!!e.elements.namedItem(`open_to_telehealth`)?.checked,available_from:t(`available_from`)||null,preferred_currency:t(`preferred_currency`)||null,minimum_monthly_compensation:t(`minimum_monthly_compensation`)?Number(t(`minimum_monthly_compensation`)):null,career_stage:t(`career_stage`)||null,career_goal:t(`career_goal`)||null}}function Ft(e,t){let n=Mt(t);e.style.setProperty(`--nurselink-career-progress`,`${n.score*3.6}deg`);let r=e.querySelector(`.nurselink-career-body`);r&&(r.innerHTML=`
      <div class="nurselink-career-readiness">
        <div class="nurselink-career-ring"><div><strong>${n.score}%</strong><span>${n.label}</span></div></div>
        <div><span>JOB MATCHING READINESS</span><strong>${t?`Career preferences saved`:`Create your career matching profile`}</strong><p>Build a clearer picture of the roles, locations and work settings you want.</p></div>
      </div>
      ${t?`<div class="nurselink-career-summary">
        <div><span>Roles</span><strong>${R(t.desired_roles?.join(`, `)||`Not specified`)}</strong></div>
        <div><span>Specialties</span><strong>${R(t.specialties?.join(`, `)||`Not specified`)}</strong></div>
        <div><span>Target Locations</span><strong>${R(t.target_countries?.join(`, `)||`Not specified`)}</strong></div>
        <div><span>Available</span><strong>${R(t.available_from||`Not specified`)}</strong></div>
      </div>`:``}
      <div class="nurselink-v200-actions"><button type="button" class="primary-button edit">${t?`Edit Career Profile`:`Create Career Profile`}</button><a class="secondary-button" href="/qualifications">Review Professional Readiness →</a></div>`,r.querySelector(`.edit`)?.addEventListener(`click`,()=>It(e,t)))}function It(e,t){e.querySelector(`.nurselink-career-editor-wrap`)?.remove();let n=document.createElement(`div`);n.className=`nurselink-career-editor-wrap`;let r=Nt(t);n.appendChild(r),e.appendChild(n);let i=()=>n.remove();r.querySelector(`.close`)?.addEventListener(`click`,i),r.querySelector(`.cancel`)?.addEventListener(`click`,i),r.addEventListener(`submit`,async t=>{t.preventDefault();let n=r.querySelector(`.nurselink-v200-status`),a=r.querySelector(`button[type="submit"]`);n&&(n.textContent=`Saving career profile…`),a&&(a.disabled=!0);try{let t=await kt(L,``,{method:`PUT`,body:JSON.stringify(Pt(r))});z.loaded=!0,z.data=t?.data||null,i(),Ft(e,z.data)}catch(e){n&&(n.textContent=e.message,n.dataset.tone=`error`)}finally{a&&(a.disabled=!1)}}),r.scrollIntoView({behavior:`smooth`,block:`center`})}async function Lt(e,t=!1){if(!e||h()!==`jobs`||!F())return;if(!t){let t=e.querySelector(`.nurselink-career-matching.nurselink-onboarding-feature-locked`);if(!t){t=document.createElement(`section`),t.className=`nurselink-career-matching nurselink-onboarding-feature-locked`,t.innerHTML=`
          <div class="nurselink-v200-heading">
            <span>CAREER MATCHING</span>
            <h2>🔒 Complete onboarding to unlock Career Matching</h2>
            <p>Finish your NurseLink member onboarding before setting career preferences and receiving opportunity matches.</p>
          </div>
          <div class="nurselink-v200-actions">
            <a href="/dashboard#membership">Complete Onboarding →</a>
          </div>
        `;let n=e.querySelector(`.page-header`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild)}return}let n=e.querySelector(`.nurselink-career-matching`);if(!n){n=document.createElement(`section`),n.className=`nurselink-career-matching`,n.innerHTML=`<div class="nurselink-v200-heading"><span>CAREER MATCHING</span><h2>Your NurseLink Career Profile</h2><p>Define the nursing roles, specialties, locations and work settings you want NurseLink to use for future opportunity matching.</p></div><div class="nurselink-career-body"><div class="nurselink-v200-loading">Loading career preferences…</div></div>`;let t=e.querySelector(`.page-header`);t?t.insertAdjacentElement(`afterend`,n):e.insertBefore(n,e.firstChild)}try{Ft(n,await At())}catch(e){n.querySelector(`.nurselink-career-body`).innerHTML=`<div class="nurselink-v200-error">${e.message}</div>`}}async function Rt(e=!1){return B.loading?B.loading:B.loaded&&!e?B.rows:(B.loading=kt(Ot).then(e=>(B.rows=Array.isArray(e?.data)?e.data:[],B.loaded=!0,B.rows)).finally(()=>{B.loading=null}),B.loading)}function zt(e){let t=e.filter(e=>e.status===`completed`);return{total:e.length,completed:t.length,hours:t.reduce((e,t)=>e+Number(t.learning_hours||0),0),units:t.reduce((e,t)=>e+Number(t.cpd_units||0),0)}}function V(e=null){let t=document.createElement(`form`);return t.className=`nurselink-learning-editor`,t.innerHTML=`
      <div class="nurselink-v200-editor-head"><div><span>LEARNING & DEVELOPMENT</span><strong>${e?`Edit learning record`:`Add learning record`}</strong><p>CPD units are self-reported unless independently verified.</p></div><button type="button" class="close" aria-label="Close">×</button></div>
      <div class="nurselink-v200-grid">
        <label><span>Learning Type *</span><select name="learning_type" required><option value="">Select type</option><option value="course">Course</option><option value="webinar">Webinar</option><option value="workshop">Workshop</option><option value="conference">Conference</option><option value="certification">Certification</option><option value="self_study">Self-study</option><option value="mentoring">Mentoring</option><option value="other">Other</option></select></label>
        <label><span>Status *</span><select name="status" required><option value="planned">Planned</option><option value="in_progress">In Progress</option><option value="completed">Completed</option></select></label>
        <label class="span-2"><span>Title *</span><input name="title" maxlength="190" required></label>
        <label><span>Provider / Organization</span><input name="provider" maxlength="190"></label>
        <label><span>Topic / Specialty</span><input name="topic" maxlength="160"></label>
        <label><span>Start Date</span><input name="started_at" type="date"></label>
        <label><span>Completion Date</span><input name="completed_at" type="date"></label>
        <label><span>Learning Hours</span><input name="learning_hours" type="number" min="0" step="0.25"></label>
        <label><span>CPD Units</span><input name="cpd_units" type="number" min="0" step="0.25"><small>Self-reported unless verified.</small></label>
        <label class="span-2"><span>Certificate / Reference URL</span><input name="certificate_url" type="url" maxlength="512" placeholder="https://"></label>
        <label class="span-2"><span>Notes</span><textarea name="notes" rows="4" maxlength="3000"></textarea></label>
      </div>
      <div class="nurselink-v200-status" aria-live="polite"></div>
      <div class="nurselink-v200-editor-actions"><button type="button" class="secondary-button cancel">Cancel</button><button type="submit" class="primary-button">${e?`Save Changes`:`Add Learning Record`}</button></div>`,e&&[`learning_type`,`status`,`title`,`provider`,`topic`,`started_at`,`completed_at`,`learning_hours`,`cpd_units`,`certificate_url`,`notes`].forEach(n=>{let r=t.elements.namedItem(n);r&&e[n]!==null&&e[n]!==void 0&&(r.value=String(e[n]))}),t}function Bt(e){let t=t=>e.elements.namedItem(t)?.value?.trim?.()||``;return{learning_type:t(`learning_type`),title:t(`title`),provider:t(`provider`)||null,topic:t(`topic`)||null,status:t(`status`),started_at:t(`started_at`)||null,completed_at:t(`completed_at`)||null,learning_hours:t(`learning_hours`)?Number(t(`learning_hours`)):null,cpd_units:t(`cpd_units`)?Number(t(`cpd_units`)):null,certificate_url:t(`certificate_url`)||null,notes:t(`notes`)||null}}function Vt(e,t){let n=zt(t),r=e.querySelector(`.nurselink-learning-metrics`);r&&(r.innerHTML=`<div><span>Total Records</span><strong>${n.total}</strong></div><div><span>Completed</span><strong>${n.completed}</strong></div><div><span>Learning Hours</span><strong>${n.hours.toFixed(1)}</strong></div><div><span>Self-Reported CPD</span><strong>${n.units.toFixed(1)}</strong></div>`);let i=e.querySelector(`.nurselink-learning-list`),a=e.querySelector(`.nurselink-learning-empty`);if(!i||!a)return;i.innerHTML=``,a.hidden=t.length>0;let o=e=>({course:`Course`,webinar:`Webinar`,workshop:`Workshop`,conference:`Conference`,certification:`Certification`,self_study:`Self-study`,mentoring:`Mentoring`,other:`Other`})[e]||e,s=e=>({planned:`Planned`,in_progress:`In Progress`,completed:`Completed`})[e]||e;t.forEach(t=>{let n=document.createElement(`article`);n.className=`nurselink-learning-record`,n.dataset.status=t.status,n.innerHTML=`<div class="nurselink-learning-record-head"><span class="icon">◫</span><div><span>${o(t.learning_type)}</span><strong>${R(t.title)}</strong></div><em>${s(t.status)}</em></div><div class="nurselink-learning-meta">${t.provider?`<span>${R(t.provider)}</span>`:``}${t.topic?`<span>${R(t.topic)}</span>`:``}${t.learning_hours===null?``:`<span>${Number(t.learning_hours).toFixed(1)} hours</span>`}${t.cpd_units===null?``:`<span>${Number(t.cpd_units).toFixed(1)} CPD units*</span>`}</div>${t.notes?`<p>${R(t.notes)}</p>`:``}<div class="nurselink-learning-record-actions">${t.certificate_url?`<a href="${t.certificate_url}" target="_blank" rel="noopener noreferrer">View Reference ↗</a>`:``}<button type="button" data-action="edit">Edit</button><button type="button" data-action="delete">Remove</button></div>`,n.querySelector(`[data-action="edit"]`)?.addEventListener(`click`,()=>Ut(e,t)),n.querySelector(`[data-action="delete"]`)?.addEventListener(`click`,async()=>{window.confirm(`Remove "${R(t.title)}" from your learning records?`)&&(await kt(Ot,`/${t.id}`,{method:`DELETE`}),Ht(e))}),i.appendChild(n)})}async function Ht(e){let t=e.querySelector(`.nurselink-learning-status`),n=!1;t&&(t.hidden=!1,t.textContent=`Loading learning records…`,t.dataset.tone=`loading`);try{Vt(e,await Rt(!0))}catch(e){n=!0,t&&(t.textContent=e.message,t.dataset.tone=`error`)}finally{t&&!n&&(t.textContent=``,t.dataset.tone=``,t.hidden=!0)}}function Ut(e,t=null){e.querySelector(`.nurselink-learning-editor-wrap`)?.remove();let n=document.createElement(`div`);n.className=`nurselink-learning-editor-wrap`;let r=V(t);n.appendChild(r),e.querySelector(`.nurselink-learning-controls`)?.insertAdjacentElement(`afterend`,n);let i=()=>n.remove();r.querySelector(`.close`)?.addEventListener(`click`,i),r.querySelector(`.cancel`)?.addEventListener(`click`,i),r.addEventListener(`submit`,async n=>{if(n.preventDefault(),!r.reportValidity())return;let a=r.querySelector(`.nurselink-v200-status`),o=r.querySelector(`button[type="submit"]`);a&&(a.textContent=t?`Saving changes…`:`Adding learning record…`),o&&(o.disabled=!0);try{await kt(Ot,t?`/${t.id}`:``,{method:t?`PUT`:`POST`,body:JSON.stringify(Bt(r))}),i(),await Ht(e)}catch(e){a&&(a.textContent=e.message,a.dataset.tone=`error`)}finally{o&&(o.disabled=!1)}}),r.scrollIntoView({behavior:`smooth`,block:`center`})}async function Wt(e){if(!e||h()!==`learning`||!F())return;let t=e.querySelector(`.nurselink-learning-tracker`);if(!t){t=document.createElement(`section`),t.className=`nurselink-learning-tracker`,t.innerHTML=`<div class="nurselink-v200-heading"><span>LEARNING & DEVELOPMENT</span><h2>Your Professional Learning Record</h2><p>Track continuing education, training and development. CPD units shown here are self-reported unless separately verified.</p></div><div class="nurselink-learning-metrics"><div><span>Total Records</span><strong>0</strong></div><div><span>Completed</span><strong>0</strong></div><div><span>Learning Hours</span><strong>0.0</strong></div><div><span>Self-Reported CPD</span><strong>0.0</strong></div></div><div class="nurselink-learning-controls"><button type="button" class="primary-button add">+ Add Learning Record</button><a class="secondary-button" href="/qualifications">View Qualification Readiness →</a><a class="secondary-button" href="/credential-renewal">Credential Renewal →</a></div><div class="nurselink-learning-status" aria-live="polite"></div><div class="nurselink-learning-empty"><div>◫</div><strong>Start your professional learning record</strong><p>Add a course, webinar, workshop, conference or other learning activity.</p></div><div class="nurselink-learning-list"></div><div class="nurselink-learning-disclaimer">* CPD units entered in NurseLink are self-reported unless the issuing or accrediting body has independently verified them. NurseLink does not replace PRC or other official CPD records.</div>`;let n=e.querySelector(`.page-header`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild),t.querySelector(`.add`)?.addEventListener(`click`,()=>Ut(t))}if(t.dataset.nurselinkLearningInitialized===`1`)return;t.dataset.nurselinkLearningInitialized=`1`,Ht(t);let n=new URLSearchParams(location.search);if(n.get(`nladd`)===`mentoring`&&t.dataset.nurselinkMentoringHandoff!==`1`){t.dataset.nurselinkMentoringHandoff=`1`,Ut(t);let e=t.querySelector(`.nurselink-learning-editor`);if(e){let t=e.elements.namedItem(`learning_type`),r=e.elements.namedItem(`title`),i=e.elements.namedItem(`topic`);t&&(t.value=`mentoring`),r&&(r.value=n.get(`nltitle`)||`Professional Mentoring`),i&&(i.value=n.get(`nltopic`)||``),e.scrollIntoView({behavior:`smooth`,block:`center`})}}}async function Gt(e,t=!1){if(!e||h()!==`dashboard`||!F())return;let n=e.querySelector(`.nurselink-member-hub`);if(!n)return;let r=null,i=[];if(t)try{r=await At()}catch{}try{i=await Rt()}catch{}let a=Mt(r),o=zt(i),s=n.querySelector(`.nurselink-member-v200-strip`);s||(s=document.createElement(`div`),s.className=`nurselink-member-v200-strip`,n.appendChild(s));let c=t?`<a href="/jobs"><span>CAREER MATCHING</span><strong>${a.score}% ready</strong><small>${a.label}</small></a>`:`<a href="#membership" class="nurselink-onboarding-feature-locked"><span>CAREER MATCHING</span><strong>🔒 Complete onboarding to unlock</strong><small>Set career preferences after completing member onboarding.</small></a>`;s.innerHTML=`${c}<a href="/learning"><span>PROFESSIONAL LEARNING</span><strong>${o.completed} completed</strong><small>${o.hours.toFixed(1)} hours · ${o.units.toFixed(1)} self-reported CPD</small></a>`}async function Kt(e){if(!e||!F())return;let t=await ut();Lt(e,t),h()!==`learning`&&Wt(e),Gt(e,t)}if(typeof u!=`function`)throw Error(`NurseLink core JSON request helper failed to initialize.`);let qt=`https://lbs.amsertech.com/backend/api/saved-jobs`,Jt=`https://lbs.amsertech.com/backend/api/job-applications`,H={jobs:[],saved:new Set,applications:[],loaded:!1};async function Yt(e=!1){if(H.loaded&&!e)return H;let[t,n,r]=await Promise.allSettled([u(`https://lbs.amsertech.com/backend/api/job-opportunities`),u(qt),u(Jt)]),i=t.status===`fulfilled`?t.value:null,a=n.status===`fulfilled`?n.value:null,o=r.status===`fulfilled`?r.value:null;H.jobs=Array.isArray(i?.data)?i.data:[],H.saved=new Set(Array.isArray(a?.data)?a.data.map(Number):[]),H.applications=Array.isArray(o?.data)?o.data:[],H.loaded=!0;let s=[t.status===`rejected`?`jobs`:null,n.status===`rejected`?`saved jobs`:null,r.status===`rejected`?`applications`:null].filter(Boolean);if(H.failures=s,s.length===3)throw t.reason||n.reason||r.reason;return s.length&&console.warn(`NurseLink Opportunity Center partially loaded. Unavailable: ${s.join(`, `)}`),H}function Xt(e){return H.applications.find(t=>Number(t.job_opportunity_id)===Number(e))||null}function Zt(e){return e>=85?`Excellent Match`:e>=70?`Strong Match`:e>=50?`Possible Match`:`Explore`}function Qt(e){if(e.salary_min===null&&e.salary_max===null)return``;let t=e.salary_currency||``,n=e=>e==null?``:Number(e).toLocaleString(void 0,{maximumFractionDigits:0});return e.salary_min!==null&&e.salary_max!==null?`${t} ${n(e.salary_min)} – ${n(e.salary_max)}`:e.salary_min===null?`Up to ${t} ${n(e.salary_max)}`:`${t} ${n(e.salary_min)}+`}function $t(e){return{submitted:`Submitted`,under_review:`Under Review`,shortlisted:`Shortlisted`,interview:`Interview`,offer:`Offer`,declined:`Closed`,withdrawn:`Withdrawn`}[e]||e}function en(e,t){e.querySelector(`.nurselink-job-apply-wrap`)?.remove();let n=document.createElement(`div`);n.className=`nurselink-job-apply-wrap`,n.innerHTML=`
      <form class="nurselink-job-apply-form">
        <div class="nurselink-job-apply-head">
          <div>
            <span>APPLICATION TRACKER</span>
            <strong>${R(t.title)}</strong>
            <small>${R(t.employer_name)} · ${t.city?`${R(t.city)}, `:``}${R(t.country)}</small>
          </div>
          <button type="button" class="close" aria-label="Close">×</button>
        </div>

        <p>
          Add this opportunity to your NurseLink application tracker. If the employer
          uses an external application website, complete that external application
          separately using the link provided.
        </p>

        <label>
          <span>Application / Cover Note</span>
          <textarea name="cover_note" rows="5" maxlength="5000" placeholder="Optional note for your own NurseLink application record."></textarea>
        </label>

        <div class="nurselink-job-apply-status" aria-live="polite"></div>

        <div class="nurselink-job-apply-actions">
          <button type="button" class="secondary-button cancel">Cancel</button>
          <button type="submit" class="primary-button">Track Application</button>
        </div>
      </form>
    `,e.querySelector(`.nurselink-opportunity-controls`)?.insertAdjacentElement(`afterend`,n);let r=n.querySelector(`form`),i=()=>n.remove();r.querySelector(`.close`)?.addEventListener(`click`,i),r.querySelector(`.cancel`)?.addEventListener(`click`,i),r.addEventListener(`submit`,async n=>{n.preventDefault();let a=r.querySelector(`.nurselink-job-apply-status`),o=r.querySelector(`button[type="submit"]`);a.textContent=`Adding application to your tracker…`,a.dataset.tone=`loading`,o.disabled=!0;try{await u(Jt,``,{method:`POST`,body:JSON.stringify({job_opportunity_id:Number(t.id),cover_note:r.elements.namedItem(`cover_note`)?.value?.trim()||null})}),H.loaded=!1,await Yt(!0),nn(e),i()}catch(e){a.textContent=e.message,a.dataset.tone=`error`}finally{o.disabled=!1}}),n.scrollIntoView({behavior:`smooth`,block:`center`})}async function tn(e,t){let n=H.saved.has(Number(t));await u(qt,`/${t}`,{method:n?`DELETE`:`POST`}),n?H.saved.delete(Number(t)):H.saved.add(Number(t)),nn(e)}function nn(e){let t=e.querySelector(`.nurselink-opportunity-list`),n=e.querySelector(`.nurselink-opportunity-empty`),r=e.querySelector(`.nurselink-opportunity-summary`);if(!t||!n||!r)return;let i=H.jobs,a=i.filter(e=>Number(e.match_score)>=70).length,o=e.querySelector(`.nurselink-opportunity-partial-notice`);H.failures.length?(o||(o=document.createElement(`div`),o.className=`nurselink-opportunity-partial-notice`,e.querySelector(`.nurselink-opportunity-summary`)?.insertAdjacentElement(`afterend`,o)),o.textContent=`Some career data is temporarily unavailable: ${H.failures.join(`, `)}. The rest of your Opportunity Center is still available.`,o.hidden=!1):o&&(o.hidden=!0);let s=H.applications.filter(e=>e.status!==`withdrawn`).length;r.innerHTML=`
      <div><span>Active Opportunities</span><strong>${i.length}</strong></div>
      <div><span>Strong Matches</span><strong>${a}</strong></div>
      <div><span>Saved Jobs</span><strong>${H.saved.size}</strong></div>
      <div><span>Tracked Applications</span><strong>${s}</strong></div>
    `,n.hidden=i.length>0,t.innerHTML=``,i.forEach(n=>{let r=document.createElement(`article`),i=H.saved.has(Number(n.id)),a=Xt(n.id);r.className=`nurselink-opportunity-card`,r.dataset.band=Number(n.match_score)>=85?`excellent`:Number(n.match_score)>=70?`strong`:Number(n.match_score)>=50?`possible`:`explore`,r.innerHTML=`
        <div class="nurselink-opportunity-card-head">
          <div class="nurselink-opportunity-match">
            <strong>${Number(n.match_score)}%</strong>
            <span>${Zt(Number(n.match_score))}</span>
          </div>

          <div class="nurselink-opportunity-title">
            <span>${R(n.reference_code)}</span>
            <strong>${R(n.title)}</strong>
            <small>${R(n.employer_name)}</small>
          </div>

          <button type="button" class="save" aria-pressed="${i}">
            ${i?`★ Saved`:`☆ Save`}
          </button>
        </div>

        <div class="nurselink-opportunity-meta">
          <span>${n.city?`${R(n.city)}, `:``}${R(n.country)}</span>
          ${n.specialty?`<span>${R(n.specialty)}</span>`:``}
          ${n.work_setting?`<span>${Oe(n.work_setting)}</span>`:``}
          ${n.employment_type?`<span>${Oe(n.employment_type)}</span>`:``}
          ${Qt(n)?`<span>${Qt(n)}</span>`:``}
          ${n.overseas_opportunity?`<span class="overseas">Overseas</span>`:``}
        </div>

        ${n.description?`<p>${R(n.description)}</p>`:``}

        <div class="nurselink-opportunity-explain">
          <div>
            <span>WHY IT MATCHES</span>
            <ul>
              ${(n.match_reasons?.length?n.match_reasons:[`Complete your Career Profile to improve matching.`]).slice(0,4).map(e=>`<li>${e}</li>`).join(``)}
            </ul>
          </div>

          ${n.match_gaps?.length?`
            <div class="gaps">
              <span>CHECK BEFORE APPLYING</span>
              <ul>
                ${n.match_gaps.slice(0,3).map(e=>`<li>${e}</li>`).join(``)}
              </ul>
            </div>
          `:``}
        </div>

        <div class="nurselink-opportunity-actions">
          ${a?`
            <a href="/applications" class="application-status" data-status="${a.status}">
              ${$t(a.status)} →
            </a>
          `:`
            <button type="button" class="primary-button apply">Track Application</button>
          `}

          ${n.apply_url?`
            <a href="${R(n.apply_url)}" target="_blank" rel="noopener noreferrer" class="secondary-button">
              Employer Application ↗
            </a>
          `:``}
        </div>
      `,r.querySelector(`.save`)?.addEventListener(`click`,async()=>{try{await tn(e,n.id)}catch(e){window.alert(e.message)}}),r.querySelector(`.apply`)?.addEventListener(`click`,()=>en(e,n)),t.appendChild(r)})}async function rn(e){if(!e||h()!==`jobs`||!F())return;let t=e.querySelector(`.nurselink-opportunity-center`);if(!t){t=document.createElement(`section`),t.className=`nurselink-opportunity-center`,t.innerHTML=`
        <div class="nurselink-opportunity-heading">
          <div>
            <span>OPPORTUNITY MATCHING</span>
            <h2>Jobs matched to your NurseLink profile</h2>
            <p>
              Match scores are explainable indicators based on your recorded preferences,
              credentials, licenses and professional experience. They are not hiring decisions.
            </p>
          </div>
          <a href="/applications">View Applications →</a>
        </div>

        <div class="nurselink-opportunity-summary">
          <div><span>Active Opportunities</span><strong>0</strong></div>
          <div><span>Strong Matches</span><strong>0</strong></div>
          <div><span>Saved Jobs</span><strong>0</strong></div>
          <div><span>Tracked Applications</span><strong>0</strong></div>
        </div>

        <div class="nurselink-opportunity-controls">
          <a class="secondary-button" href="/qualifications">Professional Readiness</a>
          <a class="secondary-button" href="/profile?nlstep=4">Employment History</a>
        </div>

        <div class="nurselink-opportunity-empty">
          <div>↗</div>
          <strong>No active opportunities are loaded yet</strong>
          <p>
            Your Career Matching Profile is ready. NurseLink will rank opportunities
            here as verified job records are added to the platform.
          </p>
        </div>

        <div class="nurselink-opportunity-list"></div>

        <div class="nurselink-opportunity-disclaimer">
          Match percentages help organize opportunities. They do not guarantee employer
          eligibility, interview selection, licensing approval, visa approval or employment.
        </div>
      `;let n=e.querySelector(`.nurselink-career-matching`);if(n)n.insertAdjacentElement(`afterend`,t);else{let n=e.querySelector(`.page-header`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild)}}try{await Yt(),nn(t)}catch(e){let n=t.querySelector(`.nurselink-opportunity-empty`);n&&(n.hidden=!1,n.querySelector(`strong`).textContent=`Opportunity matching could not be loaded`,n.querySelector(`p`).textContent=e.message)}}function an(e){let t={total:e.length,active:0,interview:0,offers:0};return e.forEach(e=>{[`withdrawn`,`declined`].includes(e.status)||t.active++,e.status===`interview`&&t.interview++,e.status===`offer`&&t.offers++}),t}async function on(e,t){window.confirm(`Withdraw this application from your NurseLink tracker?`)&&(await u(Jt,`/${t}/withdraw`,{method:`PATCH`}),H.loaded=!1,await Yt(!0),cn(e))}function sn(e){return{submitted:{title:`Application tracked`,detail:`Confirm that any required employer application was also submitted, then monitor this pipeline for updates.`,tone:`active`},under_review:{title:`Employer review in progress`,detail:`Keep your profile, credentials and contact details current while the employer reviews your application.`,tone:`active`},shortlisted:{title:`Prepare for the next stage`,detail:`You have progressed beyond initial review. Watch Employer Communication for interview or document requests.`,tone:`attention`},interview:{title:`Interview action required`,detail:`Review Employer Communication below for the interview schedule, location or meeting link, and respond to the invitation.`,tone:`attention`},offer:{title:`Offer received`,detail:`Review the employer communication and formal offer carefully before making any employment decision.`,tone:`success`},declined:{title:`Application closed`,detail:`This application is no longer active. Keep it as history and review new matched opportunities when ready.`,tone:`closed`},withdrawn:{title:`Application withdrawn`,detail:`This record remains in your NurseLink history and is no longer counted as an active application.`,tone:`closed`}}[String(e||``).toLowerCase()]||{title:`Application status updated`,detail:`Review the latest application information and employer communication for any required action.`,tone:`active`}}function cn(e){let t=H.applications,n=e.querySelector(`.nurselink-app-pipeline-metrics`),r=e.querySelector(`.nurselink-app-pipeline-list`),i=e.querySelector(`.nurselink-app-pipeline-empty`),a=an(t);n.innerHTML=`
      <div><span>Total Tracked</span><strong>${a.total}</strong></div>
      <div><span>Active</span><strong>${a.active}</strong></div>
      <div><span>Interviews</span><strong>${a.interview}</strong></div>
      <div><span>Offers</span><strong>${a.offers}</strong></div>
    `,i.hidden=t.length>0,r.innerHTML=``,t.forEach(t=>{let n=document.createElement(`article`),i=sn(t.status);n.className=`nurselink-app-pipeline-card`,n.dataset.status=t.status,n.innerHTML=`
        <div class="nurselink-app-pipeline-card-head">
          <div>
            <span>${R(t.reference_code)}</span>
            <strong>${R(t.title)}</strong>
            <small>${R(t.employer_name)} · ${t.city?`${R(t.city)}, `:``}${R(t.country)}</small>
          </div>

          <em>${$t(t.status)}</em>
        </div>

        <div class="nurselink-app-pipeline-meta">
          ${t.specialty?`<span>${R(t.specialty)}</span>`:``}
          ${t.employment_type?`<span>${Oe(t.employment_type)}</span>`:``}
          ${t.submitted_at?`<span>Tracked ${String(t.submitted_at).slice(0,10)}</span>`:``}
        </div>

        ${t.cover_note?`<p>${R(t.cover_note)}</p>`:``}

        <div class="nurselink-app-next-action" data-tone="${i.tone}">
          <span>NEXT STEP</span>
          <strong>${R(i.title)}</strong>
          <small>${R(i.detail)}</small>
        </div>

        <div class="nurselink-app-pipeline-actions">
          <a href="/jobs">View Job Matches</a>
          ${t.apply_url?`<a href="${R(t.apply_url)}" target="_blank" rel="noopener noreferrer">Employer Site ↗</a>`:``}
          ${[`withdrawn`,`declined`].includes(t.status)?``:`<button type="button" class="withdraw">Withdraw</button>`}
        </div>
      `,n.querySelector(`.withdraw`)?.addEventListener(`click`,async()=>{try{await on(e,t.id)}catch(e){window.alert(e.message)}}),r.appendChild(n)})}async function ln(e){if(!e||h()!==`applications`||!F())return;let t=e.querySelector(`.nurselink-applications-pipeline`);if(!t){t=document.createElement(`section`),t.className=`nurselink-applications-pipeline`,t.innerHTML=`
        <div class="nurselink-app-pipeline-heading">
          <div>
            <span>APPLICATIONS</span>
            <h2>Your NurseLink Application Pipeline</h2>
            <p>
              Keep one clear record of the opportunities you are pursuing and their
              current application status.
            </p>
          </div>
          <a href="/jobs">Find Matches →</a>
        </div>

        <div class="nurselink-app-pipeline-metrics">
          <div><span>Total Tracked</span><strong>0</strong></div>
          <div><span>Active</span><strong>0</strong></div>
          <div><span>Interviews</span><strong>0</strong></div>
          <div><span>Offers</span><strong>0</strong></div>
        </div>

        <div class="nurselink-app-pipeline-empty">
          <div>▤</div>
          <strong>No applications tracked yet</strong>
          <p>Open Jobs, review your matched opportunities, and add one to your tracker.</p>
          <a class="primary-button" href="/jobs">View Job Matches</a>
        </div>

        <div class="nurselink-app-pipeline-list"></div>

        <div class="nurselink-app-pipeline-note">
          Application status shown here is a NurseLink tracking status. Employer or
          recruiter systems remain the authoritative source for formal hiring decisions.
        </div>
      `;let n=e.querySelector(`.page-header`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild)}try{await Yt(),cn(t)}catch(e){let n=t.querySelector(`.nurselink-app-pipeline-empty`);n&&(n.hidden=!1,n.querySelector(`strong`).textContent=`Applications could not be loaded`,n.querySelector(`p`).textContent=e.message)}}async function un(e){if(!e||h()!==`dashboard`||!F())return;let t=e.querySelector(`.nurselink-member-hub`);if(!t)return;try{await Yt()}catch{return}let n=H.jobs[0]||null,r=H.applications.filter(e=>![`withdrawn`,`declined`].includes(e.status)).length,i=t.querySelector(`.nurselink-member-v220-strip`);i||(i=document.createElement(`div`),i.className=`nurselink-member-v220-strip`,t.appendChild(i)),i.innerHTML=`
      <a href="/jobs">
        <span>TOP OPPORTUNITY MATCH</span>
        <strong>${n?`${n.match_score}% · ${n.title}`:`No active opportunities yet`}</strong>
        <small>${n?`${n.employer_name} · ${n.country}`:`Your matching profile is ready.`}</small>
      </a>

      <a href="/applications">
        <span>APPLICATION PIPELINE</span>
        <strong>${r} active application${r===1?``:`s`}</strong>
        <small>${H.saved.size} saved job${H.saved.size===1?``:`s`}</small>
      </a>
    `}async function dn(e){if(!(!e||!F())){if(!await ut()){let t=h();if([`jobs`,`applications`].includes(t)&&!e.querySelector(`.nurselink-onboarding-feature-locked-v560`)){let t=document.createElement(`section`);t.className=`nurselink-onboarding-feature-locked-v560`,t.innerHTML=`
            <div>
              <span>MEMBER ONBOARDING</span>
              <strong>🔒 Complete onboarding to unlock Career & Jobs</strong>
              <small>
                Finish your NurseLink member onboarding before accessing
                opportunity matching and application tools.
              </small>
            </div>
            <a href="/dashboard#membership">Complete Onboarding →</a>
          `;let n=e.querySelector(`.page-header`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild)}return}rn(e),ln(e),un(e)}}let U={summary:null,credentials:[],applications:[],jobs:[],audit:[],loaded:!1};async function fn(e=``,t={}){return u(`https://lbs.amsertech.com/backend/api/reviewer`,e,t)}async function pn(e=!1){if(U.loaded&&!e)return U;let[t,n,r,i]=await Promise.all([fn(`/summary`),fn(`/credentials`),fn(`/job-applications`),fn(`/job-opportunities`)]);return U.summary=t?.data||null,U.credentials=Array.isArray(n?.data)?n.data:[],U.applications=Array.isArray(r?.data)?r.data:[],U.jobs=Array.isArray(i?.data)?i.data:[],U.loaded=!0,U}function mn(){return U.summary?.role||`reviewer`}function hn(e,t,n=null){return`
      <button type="button" data-review-tab="${e}">
        <span>${t}</span>
        ${n===null?``:`<em>${n}</em>`}
      </button>
    `}function gn(e){return We(e)}function _n(e){return $t(e)}function vn(e){return{active:`Active`,paused:`Paused`,closed:`Closed`}[e]||e}async function yn(e,t,n){let r=n.querySelector(`select[name="verification_status"]`)?.value,i=n.querySelector(`textarea[name="review_notes"]`)?.value?.trim()||null,a=n.querySelector(`.nurselink-review-card-status`),o=n.querySelector(`[data-action="save-credential"]`);a.textContent=`Saving review…`,a.dataset.tone=`loading`,o.disabled=!0;try{await fn(`/credentials/${t.id}`,{method:`PATCH`,body:JSON.stringify({verification_status:r,review_notes:i})}),U.loaded=!1,await pn(!0),En(e)}catch(e){a.textContent=e.message,a.dataset.tone=`error`}finally{o.disabled=!1}}async function bn(e,t,n){let r=n.querySelector(`select[name="status"]`)?.value,i=n.querySelector(`textarea[name="reviewer_notes"]`)?.value?.trim()||null,a=n.querySelector(`.nurselink-review-card-status`),o=n.querySelector(`[data-action="save-application"]`);a.textContent=`Saving application review…`,a.dataset.tone=`loading`,o.disabled=!0;try{await fn(`/job-applications/${t.id}`,{method:`PATCH`,body:JSON.stringify({status:r,reviewer_notes:i})}),U.loaded=!1,H.loaded=!1,await pn(!0),En(e)}catch(e){a.textContent=e.message,a.dataset.tone=`error`}finally{o.disabled=!1}}function xn(e){let t=t=>e.elements.namedItem(t)?.value?.trim?.()||``;return{reference_code:t(`reference_code`),title:t(`title`),employer_name:t(`employer_name`),country:t(`country`),city:t(`city`)||null,work_setting:t(`work_setting`)||null,employment_type:t(`employment_type`)||null,specialty:t(`specialty`)||null,required_license_type:t(`required_license_type`)||null,minimum_experience_years:t(`minimum_experience_years`)?Number(t(`minimum_experience_years`)):0,overseas_opportunity:(t=>!!e.elements.namedItem(t)?.checked)(`overseas_opportunity`),salary_min:t(`salary_min`)?Number(t(`salary_min`)):null,salary_max:t(`salary_max`)?Number(t(`salary_max`)):null,salary_currency:t(`salary_currency`)||null,description:t(`description`)||null,requirements:t(`requirements`)||null,apply_url:t(`apply_url`)||null,source_label:t(`source_label`)||null,status:t(`status`)||`paused`,published_at:t(`published_at`)||null,expires_at:t(`expires_at`)||null}}function Sn(e=null){let t=document.createElement(`form`);t.className=`nurselink-review-job-editor`,t.innerHTML=`
      <div class="nurselink-review-job-editor-head">
        <div>
          <span>VERIFIED OPPORTUNITY</span>
          <strong>${e?`Edit opportunity`:`Add opportunity`}</strong>
          <p>
            Admin-only job management. Activate only opportunities whose employer,
            requirements and application channel have been verified.
          </p>
        </div>
        <button type="button" class="close" aria-label="Close">×</button>
      </div>

      <div class="nurselink-review-job-grid">
        <label>
          <span>Reference Code *</span>
          <input name="reference_code" maxlength="120" required>
        </label>

        <label>
          <span>Status *</span>
          <select name="status" required>
            <option value="paused">Paused</option>
            <option value="active">Active</option>
            <option value="closed">Closed</option>
          </select>
        </label>

        <label class="span-2">
          <span>Job Title *</span>
          <input name="title" maxlength="190" required>
        </label>

        <label>
          <span>Employer *</span>
          <input name="employer_name" maxlength="190" required>
        </label>

        <label>
          <span>Country *</span>
          <input name="country" maxlength="120" required>
        </label>

        <label>
          <span>City</span>
          <input name="city" maxlength="120">
        </label>

        <label>
          <span>Specialty</span>
          <input name="specialty" maxlength="150">
        </label>

        <label>
          <span>Work Setting</span>
          <select name="work_setting">
            <option value="">Not specified</option>
            <option value="hospital">Hospital</option>
            <option value="clinic">Clinic</option>
            <option value="community">Community</option>
            <option value="home_care">Home Care</option>
            <option value="long_term_care">Long-term Care</option>
            <option value="education">Education / Academe</option>
            <option value="occupational_health">Occupational Health</option>
            <option value="telehealth">Telehealth</option>
            <option value="government">Government</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          <span>Employment Type</span>
          <select name="employment_type">
            <option value="">Not specified</option>
            <option value="full_time">Full-time</option>
            <option value="part_time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="temporary">Temporary</option>
            <option value="project_based">Project-based</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          <span>Required License</span>
          <select name="required_license_type">
            <option value="">No specific record required</option>
            <option value="prc_license">PRC License</option>
            <option value="nursing_diploma">Nursing Diploma / Degree</option>
            <option value="international_license">International Nursing License</option>
            <option value="specialty_certification">Specialty Certification</option>
            <option value="training_certificate">Training Certificate</option>
            <option value="language_certificate">Language Certificate</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          <span>Minimum Experience (years)</span>
          <input name="minimum_experience_years" type="number" min="0" max="99" step="0.5" value="0">
        </label>

        <label class="toggle">
          <input name="overseas_opportunity" type="checkbox">
          <span>Overseas opportunity</span>
        </label>

        <label>
          <span>Salary Currency</span>
          <input name="salary_currency" maxlength="8" placeholder="PHP, USD, SAR">
        </label>

        <label>
          <span>Salary Minimum</span>
          <input name="salary_min" type="number" min="0" step="0.01">
        </label>

        <label>
          <span>Salary Maximum</span>
          <input name="salary_max" type="number" min="0" step="0.01">
        </label>

        <label class="span-2">
          <span>Description</span>
          <textarea name="description" rows="4" maxlength="12000"></textarea>
        </label>

        <label class="span-2">
          <span>Requirements</span>
          <textarea name="requirements" rows="4" maxlength="12000"></textarea>
        </label>

        <label class="span-2">
          <span>Employer Application URL</span>
          <input name="apply_url" type="url" maxlength="512" placeholder="https://">
        </label>

        <label>
          <span>Source / Verification Label</span>
          <input name="source_label" maxlength="190">
        </label>

        <label>
          <span>Published At</span>
          <input name="published_at" type="datetime-local">
        </label>

        <label>
          <span>Expires At</span>
          <input name="expires_at" type="datetime-local">
        </label>
      </div>

      <div class="nurselink-review-job-editor-status" aria-live="polite"></div>

      <div class="nurselink-review-job-editor-actions">
        <button type="button" class="secondary-button cancel">Cancel</button>
        <button type="submit" class="primary-button">
          ${e?`Save Opportunity`:`Create Opportunity`}
        </button>
      </div>
    `;let n=(e,n)=>{let r=t.elements.namedItem(e);!r||n==null||(r instanceof HTMLInputElement&&r.type===`checkbox`?r.checked=!!n:r.value=r instanceof HTMLInputElement&&r.type===`datetime-local`?String(n).replace(` `,`T`).slice(0,16):String(n))};return e&&([`reference_code`,`status`,`title`,`employer_name`,`country`,`city`,`specialty`,`work_setting`,`employment_type`,`required_license_type`,`minimum_experience_years`,`salary_currency`,`salary_min`,`salary_max`,`description`,`requirements`,`apply_url`,`source_label`,`published_at`,`expires_at`].forEach(t=>n(t,e[t])),n(`overseas_opportunity`,e.overseas_opportunity)),t}function Cn(e,t=null){e.querySelector(`.nurselink-review-job-editor-wrap`)?.remove();let n=document.createElement(`div`);n.className=`nurselink-review-job-editor-wrap`;let r=Sn(t);n.appendChild(r),e.querySelector(`.nurselink-review-tabs`)?.insertAdjacentElement(`afterend`,n);let i=()=>n.remove();r.querySelector(`.close`)?.addEventListener(`click`,i),r.querySelector(`.cancel`)?.addEventListener(`click`,i),r.addEventListener(`submit`,async n=>{if(n.preventDefault(),!r.reportValidity())return;let a=r.querySelector(`.nurselink-review-job-editor-status`),o=r.querySelector(`button[type="submit"]`);a.textContent=t?`Saving opportunity…`:`Creating opportunity…`,a.dataset.tone=`loading`,o.disabled=!0;try{await fn(t?`/job-opportunities/${t.id}`:`/job-opportunities`,{method:t?`PATCH`:`POST`,body:JSON.stringify(xn(r))}),i(),U.loaded=!1,H.loaded=!1,await pn(!0),En(e)}catch(e){a.textContent=e.message,a.dataset.tone=`error`}finally{o.disabled=!1}}),n.scrollIntoView({behavior:`smooth`,block:`center`})}function wn(e){let t=U.credentials;e.innerHTML=`
      <div class="nurselink-review-queue-head">
        <div>
          <strong>Credential Verification Queue</strong>
          <small>${t.length} credential record${t.length===1?``:`s`}</small>
        </div>
      </div>

      <div class="nurselink-review-card-list"></div>
    `;let n=e.querySelector(`.nurselink-review-card-list`);t.forEach(t=>{let r=document.createElement(`article`);r.className=`nurselink-review-card`,r.dataset.status=t.verification_status,r.innerHTML=`
        <div class="nurselink-review-card-head">
          <div>
            <span>${gn(t.credential_type)}</span>
            <strong>${R(t.title)}</strong>
            <small>${R(t.member)}</small>
          </div>
          <em>${Ge(t.verification_status)}</em>
        </div>

        <div class="nurselink-review-card-meta">
          ${t.issuing_body?`<span>${R(t.issuing_body)}</span>`:``}
          ${t.credential_number?`<span>No. ${R(t.credential_number)}</span>`:``}
          ${t.country?`<span>${R(t.country)}</span>`:``}
          ${t.expiry_date?`<span>Expires ${t.expiry_date}</span>`:``}
        </div>

        <div class="nurselink-review-card-fields">
          <label>
            <span>Verification Status</span>
            <select name="verification_status">
              <option value="unverified">Unverified</option>
              <option value="pending">Pending Verification</option>
              <option value="verified">Verified</option>
              <option value="expired">Expired</option>
            </select>
          </label>

          <label>
            <span>Reviewer Notes</span>
            <textarea name="review_notes" rows="3" maxlength="4000"></textarea>
          </label>
        </div>

        <div class="nurselink-review-card-status" aria-live="polite"></div>

        <div class="nurselink-review-card-actions">
          <a href="/smart-registration?nlstep=3">Applicant Evidence →</a>
          <button type="button" class="primary-button" data-action="save-credential">
            Save Review
          </button>
        </div>
      `,r.querySelector(`select[name="verification_status"]`).value=t.verification_status||`unverified`,r.querySelector(`textarea[name="review_notes"]`).value=t.review_notes||``,r.querySelector(`[data-action="save-credential"]`)?.addEventListener(`click`,()=>yn(e.closest(`.nurselink-review-center`),t,r)),n.appendChild(r)}),t.length||(n.innerHTML=`
        <div class="nurselink-review-empty">
          <strong>No credentials are currently in the review queue.</strong>
        </div>
      `)}function W(e){let t=U.applications;e.innerHTML=`
      <div class="nurselink-review-queue-head">
        <div>
          <strong>Job Application Review Queue</strong>
          <small>${t.length} tracked application${t.length===1?``:`s`}</small>
        </div>
      </div>

      <div class="nurselink-review-card-list"></div>
    `;let n=e.querySelector(`.nurselink-review-card-list`);t.forEach(t=>{let r=document.createElement(`article`);r.className=`nurselink-review-card`,r.dataset.status=t.status,r.innerHTML=`
        <div class="nurselink-review-card-head">
          <div>
            <span>${R(t.reference_code)}</span>
            <strong>${R(t.title)}</strong>
            <small>${t.member} · ${t.employer_name}</small>
          </div>
          <em>${_n(t.status)}</em>
        </div>

        <div class="nurselink-review-card-meta">
          <span>${t.city?`${R(t.city)}, `:``}${R(t.country)}</span>
          ${t.specialty?`<span>${R(t.specialty)}</span>`:``}
          ${t.submitted_at?`<span>Submitted ${String(t.submitted_at).slice(0,10)}</span>`:``}
        </div>

        ${t.cover_note?`
          <div class="nurselink-review-member-note">
            <span>MEMBER NOTE</span>
            <p>${R(t.cover_note)}</p>
          </div>
        `:``}

        <div class="nurselink-review-card-fields">
          <label>
            <span>Reviewer Status</span>
            <select name="status">
              <option value="under_review">Under Review</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="interview">Interview</option>
              <option value="offer">Offer</option>
              <option value="declined">Declined / Closed</option>
            </select>
          </label>

          <label>
            <span>Reviewer Notes</span>
            <textarea name="reviewer_notes" rows="3" maxlength="5000"></textarea>
          </label>
        </div>

        <div class="nurselink-review-card-status" aria-live="polite"></div>

        <div class="nurselink-review-card-actions">
          <button type="button" class="primary-button" data-action="save-application">
            Save Application Review
          </button>
        </div>
      `;let i=r.querySelector(`select[name="status"]`);i.value=[`under_review`,`shortlisted`,`interview`,`offer`,`declined`].includes(t.status)?t.status:`under_review`,t.status===`withdrawn`&&(i.disabled=!0,r.querySelector(`[data-action="save-application"]`).disabled=!0),r.querySelector(`textarea[name="reviewer_notes"]`).value=t.reviewer_notes||``,r.querySelector(`[data-action="save-application"]`)?.addEventListener(`click`,()=>bn(e.closest(`.nurselink-review-center`),t,r)),n.appendChild(r)}),t.length||(n.innerHTML=`
        <div class="nurselink-review-empty">
          <strong>No job applications are currently tracked.</strong>
        </div>
      `)}function Tn(e,t){let n=U.jobs,r=mn()===`admin`;e.innerHTML=`
      <div class="nurselink-review-queue-head">
        <div>
          <strong>Verified Opportunity Management</strong>
          <small>${n.length} opportunity record${n.length===1?``:`s`}</small>
        </div>

        ${r?`
          <button type="button" class="primary-button add-job">+ Add Opportunity</button>
        `:`
          <span class="nurselink-review-role-note">Admin access required to edit opportunities</span>
        `}
      </div>

      <div class="nurselink-review-job-list"></div>
    `,e.querySelector(`.add-job`)?.addEventListener(`click`,()=>Cn(t));let i=e.querySelector(`.nurselink-review-job-list`);n.forEach(e=>{let n=document.createElement(`article`);n.className=`nurselink-review-job-card`,n.dataset.status=e.status,n.innerHTML=`
        <div>
          <span>${R(e.reference_code)}</span>
          <strong>${R(e.title)}</strong>
          <small>${R(e.employer_name)} · ${e.city?`${R(e.city)}, `:``}${R(e.country)}</small>
        </div>

        <div class="nurselink-review-job-card-meta">
          <em>${vn(e.status)}</em>
          ${e.specialty?`<span>${R(e.specialty)}</span>`:``}
          ${e.verified_at?`<span>Verified ${String(e.verified_at).slice(0,10)}</span>`:``}
        </div>

        ${r?`
          <button type="button" class="secondary-button edit-job">Edit</button>
        `:``}
      `,n.querySelector(`.edit-job`)?.addEventListener(`click`,()=>Cn(t,e)),i.appendChild(n)}),n.length||(i.innerHTML=`
        <div class="nurselink-review-empty">
          <strong>No opportunities have been loaded yet.</strong>
        </div>
      `)}function En(e,t=null){let n=U.summary||{},r=t||e.querySelector(`.nurselink-review-tabs button[aria-selected="true"]`)?.dataset?.reviewTab||`credentials`;e.innerHTML=`
      <div class="nurselink-review-heading">
        <div>
          <span>AUTHORIZED REVIEW CENTER</span>
          <h2>NurseLink Verification & Opportunity Operations</h2>
          <p>
            Review professional credentials, manage job-application stages and,
            for administrators, publish verified opportunities. Every saved review
            is recorded in the NurseLink audit trail.
          </p>
        </div>

        <em>${n.role===`admin`?`Administrator`:`Reviewer`}</em>
      </div>

      <div class="nurselink-review-metrics">
        <div><span>Credentials Pending</span><strong>${n.credentials_pending??0}</strong></div>
        <div><span>Active Applications</span><strong>${n.job_applications_active??0}</strong></div>
        <div><span>Interviews</span><strong>${n.job_applications_interview??0}</strong></div>
        <div><span>Active Opportunities</span><strong>${n.job_opportunities_active??0}</strong></div>
      </div>

      <div class="nurselink-review-tabs" role="tablist">
        ${hn(`credentials`,`Credentials`,U.credentials.length)}
        ${hn(`applications`,`Applications`,U.applications.length)}
        ${hn(`opportunities`,`Opportunities`,U.jobs.length)}
      </div>

      <div class="nurselink-review-tab-panel"></div>

      <div class="nurselink-review-security-note">
        Reviewer controls are enforced by the API, not only by this screen.
        Ordinary members cannot use these endpoints. Opportunity creation/editing
        requires administrator access.
      </div>
    `;let i=e.querySelector(`.nurselink-review-tab-panel`),a=t=>{e.querySelectorAll(`.nurselink-review-tabs button`).forEach(e=>{e.setAttribute(`aria-selected`,String(e.dataset.reviewTab===t))}),t===`applications`?W(i):t===`opportunities`?Tn(i,e):wn(i)};e.querySelectorAll(`.nurselink-review-tabs button`).forEach(e=>{e.addEventListener(`click`,()=>a(e.dataset.reviewTab))}),a(r)}let Dn={loaded:!1,loading:null};async function On(){return Dn.loaded?!0:(Dn.loading||=u(`${t}/api/nurselink/admin/session`).then(()=>(Dn.loaded=!0,!0)).finally(()=>{Dn.loading=null}),Dn.loading)}async function kn(e){if(!e||h()!==`admin`)return;try{await On()}catch(e){if([401,403,419].includes(e.status)){window.location.replace(`/nurselink-admin-login.html?return=/admin`);return}throw e}let t=e.querySelector(`.nurselink-review-center`);if(!t){t=document.createElement(`section`),t.className=`nurselink-review-center nurselink-review-center-loading`,t.innerHTML=`
        <div class="nurselink-review-loader"></div>
        <strong>Checking reviewer authorization…</strong>
      `;let n=e.querySelector(`.page-header`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild)}try{await pn(),t.classList.remove(`nurselink-review-center-loading`),En(t)}catch(e){t.className=`nurselink-review-center nurselink-review-access-denied`,t.innerHTML=`
        <div class="nurselink-review-denied-icon">🔒</div>
        <strong>Reviewer authorization required</strong>
        <p>${e.message}</p>
        <small>
          Access is denied by default. An existing application administrator may
          already qualify, or explicit reviewer/admin access can be granted from
          the Administrator Management area or the server-side reviewer access utility.
        </small>
      `}}function An(e){kn(e)}let jn=`https://lbs.amsertech.com/backend/api/notifications`,G={loaded:!1,loading:null,data:null},K={loaded:!1,loading:null,rows:[],unread:0};async function Mn(e=!1){return G.loaded&&!e?G.data:(G.loading&&!e||(G.loading=u(`https://lbs.amsertech.com/backend/api/membership`,`/me`).then(e=>(G.data=e?.data||null,G.loaded=!0,G.data)).finally(()=>{G.loading=null})),G.loading)}function Nn(e){return{submitted:`Submitted`,under_review:`Under Review`,needs_information:`Needs Information`,ready_for_approval:`Ready for Approval`,approved:`Approved`,declined:`Declined`}[e]||e}function Pn(e){return{submitted:`info`,under_review:`info`,needs_information:`warning`,ready_for_approval:`info`,approved:`success`,declined:`error`}[e]||`info`}function Fn(e){return{active:`Active`,suspended:`Suspended`,inactive:`Inactive`}[String(e||`active`).toLowerCase()]||String(e||`Active`)}function In(e){if(!e||e.status!==`approved`)return!1;let t=String(e.standing||`active`).toLowerCase().trim();return!t||t===`active`}let Ln=null;function Rn(){return window.QRCode?Promise.resolve(window.QRCode):Ln||(Ln=new Promise((e,t)=>{let n=document.querySelector(`script[data-nurselink-qrcode]`);if(n){n.addEventListener(`load`,()=>e(window.QRCode),{once:!0}),n.addEventListener(`error`,t,{once:!0});return}let r=document.createElement(`script`);r.src=`/nurselink-qrcode.min.js`,r.async=!0,r.dataset.nurselinkQrcode=`1`,r.addEventListener(`load`,()=>{window.QRCode?e(window.QRCode):t(Error(`NurseLink QR library unavailable.`))},{once:!0}),r.addEventListener(`error`,t,{once:!0}),document.head.appendChild(r)}),Ln)}async function zn(e){let r=e.querySelector(`.nurselink-member-id-photo`);if(r)try{let i=await n(`${t}/api/profile-photo/image`,{method:`GET`,credentials:`include`,headers:{Accept:`image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8`}});if(!i.ok)return;let a=await i.blob(),o=URL.createObjectURL(a),s=document.createElement(`img`);s.alt=`NurseLink member profile photo`,s.src=o,s.addEventListener(`load`,()=>{r.querySelector(`.avatar`)?.remove(),r.appendChild(s)},{once:!0}),s.addEventListener(`error`,()=>URL.revokeObjectURL(o),{once:!0}),e.addEventListener(`DOMNodeRemoved`,t=>{t.target===e&&URL.revokeObjectURL(o)},{once:!0})}catch{}}async function Bn(e,t){let n=e.querySelector(`.nurselink-member-id-qr-code`),r=t.verification_url||``;if(!(!n||!r))try{let e=await Rn();n.innerHTML=``,new e(n,{text:r,width:132,height:132,colorDark:`#10204d`,colorLight:`#ffffff`,correctLevel:e.CorrectLevel.M}),n.dataset.ready=`1`}catch{n.innerHTML=`
        <div class="nurselink-qr-fallback">
          QR unavailable
        </div>
      `}}function Vn(e){let t=document.createElement(`section`);t.className=`nurselink-digital-member-card`,t.dataset.nurselinkDigitalId=`v5.5.3`;let n=String(e.standing||`active`).toLowerCase().trim()||`active`,r=Fn(n),i=n===`active`;t.dataset.membershipStanding=n;let a=R(e.member_name||`NurseLink Member`),o=R(e.member_number||``),s=R(e.approved_at?String(e.approved_at).slice(0,10):`—`),c=R(e.verification_code?e.verification_code.slice(0,12).toUpperCase():`—`);return t.innerHTML=`
      <div class="nurselink-member-id-band">
        <div>
          <span>NurseLink</span>
          <small>Professional Membership Network</small>
        </div>
        <em>DIGITAL MEMBER ID</em>
      </div>

      <div class="nurselink-member-id-main">
        <div class="nurselink-member-id-body">
          <div class="nurselink-member-id-photo">
            <span class="avatar">NL</span>
          </div>

          <div class="nurselink-member-id-copy">
            <span>APPROVED MEMBER</span>
            <strong>${a}</strong>
            <small>${o}</small>

            <div class="nurselink-member-id-status"
              data-standing="${R(n)}">
              <span>${i?`✓`:`!`}</span>
              <strong class="nurselink-active-membership-title">
                ${i?`Active NurseLink Membership`:`${R(r)} Membership Standing`}
              </strong>
            </div>

            ${i?``:`
              <div class="nurselink-member-id-standing-notice">
                Member-only services are unavailable while this membership is
                ${R(r)}.
              </div>
            `}
          </div>
        </div>

        <div class="nurselink-member-id-qr">
          <div class="nurselink-member-id-qr-code" aria-label="Membership verification QR code"></div>
          <strong>SCAN TO VERIFY</strong>
          <small>NurseLink membership</small>
        </div>
      </div>

      <div class="nurselink-member-id-footer">
        <div>
          <span>Member Since</span>
          <strong>${s}</strong>
        </div>

        <div>
          <span>Member Number</span>
          <strong>${o||`—`}</strong>
        </div>

        <div>
          <span>Verification Code</span>
          <strong>${c}</strong>
        </div>

        <div>
          <span>Membership Standing</span>
          <strong>${R(r)}</strong>
        </div>

        <div class="nurselink-member-id-actions">
          <button type="button" class="copy-verification">
            Copy Verify Link
          </button>
          <a class="open-verification"
             href="${R(e.verification_url||`#`)}"
             target="_blank"
             rel="noopener noreferrer">
            Open Verification
          </a>
        </div>
      </div>

      <div class="nurselink-member-id-note">
        This digital card confirms NurseLink membership and current NurseLink
        professional standing only. It is not a PRC license, government ID,
        immigration document or employer credential.
      </div>
    `,t.querySelector(`.copy-verification`)?.addEventListener(`click`,async t=>{let n=t.currentTarget,r=e.verification_url||``;if(r)try{await navigator.clipboard.writeText(r),n.textContent=`Copied ✓`,setTimeout(()=>{n.textContent=`Copy Verify Link`},1600)}catch{window.prompt(`Copy this verification link:`,r)}}),zn(t),Bn(t,e),t}async function Hn(e){if(!e)return;let t=h();if(![`dashboard`,`application-status`,`profile`].includes(t))return;let n;try{n=await Mn()}catch{return}if(n){if(t===`application-status`){let t=e.querySelector(`.nurselink-membership-status-card`);if(!t){t=document.createElement(`section`),t.className=`nurselink-membership-status-card`;let n=e.querySelector(`.page-header`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild)}t.dataset.tone=Pn(n.status),t.innerHTML=`
        <div>
          <span>MEMBERSHIP REVIEW</span>
          <strong>${Nn(n.status)}</strong>
          <p>
            ${n.reviewer_notes?n.reviewer_notes:n.status===`approved`?`Your NurseLink membership has been approved.`:`Your application is in the NurseLink membership review workflow.`}
          </p>
        </div>

        ${n.member_number?`
          <div class="nurselink-membership-number">
            <span>Member Number</span>
            <strong>${n.member_number}</strong>
            ${n.status===`approved`?`
              <span>Professional Standing</span>
              <strong data-standing="${R(n.standing||`active`)}">
                ${R(Fn(n.standing||`active`))}
              </strong>
            `:``}
          </div>
        `:``}

        ${Array.isArray(n.status_history)&&n.status_history.length?`
          <div class="nurselink-membership-timeline" aria-label="Membership application timeline">
            <div class="nurselink-membership-timeline-head">
              <span>APPLICATION TIMELINE</span>
              <strong>${n.status_history.length} update${n.status_history.length===1?``:`s`}</strong>
            </div>
            <ol>
              ${n.status_history.slice(-10).reverse().map(e=>{let t=e?.created_at?new Date(e.created_at):null,n=t&&!Number.isNaN(t.getTime())?t.toLocaleString():``;return`<li>
                  <i aria-hidden="true"></i>
                  <div><strong>${R(Nn(e?.to_status||`submitted`))}</strong>${n?`<time>${R(n)}</time>`:``}${e?.reason?`<p>${R(e.reason)}</p>`:``}</div>
                </li>`}).join(``)}
            </ol>
          </div>
        `:``}
      `}if(n.status===`approved`&&!In(n)&&[`dashboard`,`application-status`,`profile`].includes(t)){let t=e.querySelector(`.nurselink-membership-standing-alert`);if(!t){t=document.createElement(`section`),t.className=`nurselink-membership-standing-alert`;let n=e.querySelector(`.page-header`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild)}t.dataset.standing=n.standing||`inactive`,t.innerHTML=`
        <div>
          <span>MEMBERSHIP STANDING</span>
          <strong>
            ${R(Fn(n.standing||`inactive`))}
          </strong>
          <p>
            ${R(n.standing_reason||`Member-only services are unavailable until this membership returns to Active standing.`)}
          </p>
        </div>
        <a href="/application-status">
          View Membership Status
        </a>
      `}if(n.status===`approved`&&[`dashboard`,`profile`].includes(t)&&!e.querySelector(`.nurselink-digital-member-card`)){let t=Vn(n),r=e.querySelector(`.nurselink-member-hub`)||e.querySelector(`.page-header`);r?r.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild)}}}async function q(e=!1){if(K.loaded&&!e)return K;if(K.loading&&!e)return K.loading;let t=u(jn).then(e=>(K.rows=Array.isArray(e?.data)?e.data:[],K.unread=Number(e?.unread_count||0),K.loaded=!0,K)).finally(()=>{K.loading===t&&(K.loading=null)});return K.loading=t,t}async function Un(e){return await u(jn,`/${e}/read`,{method:`PATCH`}),K.loaded=!1,q(!0)}async function Wn(){return await u(jn,`/read-all`,{method:`POST`}),K.loaded=!1,q(!0)}function Gn(e){let t=String(e?.action_url||``).trim(),n=String(e?.type||``).toLowerCase(),r=String(G.data?.status||``).toLowerCase();return n.startsWith(`credential.renewal.`)?r===`approved`?`/credential-renewal`:`/smart-registration?nlstep=3`:n.startsWith(`benefit.`)?r===`approved`?`/nurselink-benefits.html`:`/application-status`:n.startsWith(`mentoring.`)?r===`approved`?`/nurselink-mentoring.html`:`/application-status`:n.startsWith(`chapter.`)?r===`approved`?`/nurselink-chapters.html`:`/application-status`:n.startsWith(`credential.`)?r===`approved`?`/credentials`:`/smart-registration?nlstep=3`:n.startsWith(`membership.`)?`/application-status`:t||null}function Kn(){document.querySelector(`.nurselink-notification-drawer`)?.remove();let t=document.querySelector(`${e} .nurselink-notification-button`);t&&t.setAttribute(`aria-expanded`,`false`),document.documentElement.classList.remove(`nurselink-notification-drawer-open`)}function qn(e){if(document.querySelector(`.nurselink-notification-drawer`)){Kn();return}let t=document.createElement(`aside`);t.className=`nurselink-notification-drawer`,t.id=`nurselink-notification-drawer`,t.dataset.nurselinkNotificationInstant=`1`,t.setAttribute(`data-nurselink-notification-instant`,`1`),t.setAttribute(`role`,`dialog`),t.setAttribute(`aria-modal`,`false`),t.setAttribute(`aria-label`,`NurseLink notifications`),t.innerHTML=`
      <div class="nurselink-notification-drawer-bar">
        <div>
          <span>ACTION CENTER</span>
          <strong>Notifications</strong>
        </div>
        <button type="button"
          class="nurselink-notification-drawer-close"
          aria-label="Close notifications">×</button>
      </div>
      <div class="nurselink-notification-drawer-content">
        <div class="nurselink-notification-drawer-loading">
          Loading notifications…
        </div>
      </div>
    `,document.body.appendChild(t),e?.setAttribute(`aria-expanded`,`true`),document.documentElement.classList.add(`nurselink-notification-drawer-open`),t.querySelector(`.nurselink-notification-drawer-close`)?.addEventListener(`click`,Kn);let n=t.querySelector(`.nurselink-notification-drawer-content`);n&&K.loaded&&(Jn(n),t.dataset.nurselinkNotificationSource=`cache`);let r=G.loaded?Promise.resolve(G.data):Mn().catch(()=>null),i=K.loaded?q(!0):q();Promise.allSettled([r,i]).then(e=>{if(!t.isConnected)return;let n=t.querySelector(`.nurselink-notification-drawer-content`);if(!n)return;let r=e[1];if(r?.status===`fulfilled`||K.loaded){Jn(n),t.dataset.nurselinkNotificationSource=`refreshed`,Yn();return}if(K.loaded){Jn(n);return}let i=r?.reason;n.innerHTML=`
        <div class="nurselink-notification-drawer-error">
          <strong>Notifications unavailable</strong>
          <small>${R(i?.message||`Please try again.`)}</small>
        </div>
      `})}document.addEventListener(`keydown`,e=>{e.key===`Escape`&&Kn()});function Jn(e,t={}){let n=K.rows,r=Number.isFinite(t.limit)?Math.max(0,Number(t.limit)):12,i=!!t.compact,a=!!t.showViewAll,o=r>0?n.slice(0,r):n;e.classList.toggle(`nurselink-notification-center-dashboard-compact`,i),e.innerHTML=`
      <div class="nurselink-notification-head">
        <div>
          <span>ACTION CENTER</span>
          <strong>Notifications</strong>
          <small>${K.unread} unread</small>
        </div>

        <div class="nurselink-notification-head-actions">
          ${a?`
            <a class="view-all" href="/nurselink-notifications.html">
              View all notifications
            </a>
          `:``}
          ${K.unread?`
            <button type="button" class="mark-all">Mark all read</button>
          `:``}
        </div>
      </div>

      <div class="nurselink-notification-list"></div>
    `,e.querySelector(`.mark-all`)?.addEventListener(`click`,async()=>{await Wn(),Jn(e,t),Yn()});let s=e.querySelector(`.nurselink-notification-list`);if(!n.length){s.innerHTML=`
        <div class="nurselink-notification-empty">
          <strong>No notifications yet</strong>
          <small>Membership, credential and application updates will appear here.</small>
        </div>
      `;return}if(o.forEach(n=>{let r=document.createElement(`article`);r.className=`nurselink-notification-item`,r.dataset.severity=n.severity||`info`,r.dataset.read=n.read_at?`true`:`false`,r.innerHTML=`
        <span class="dot"></span>

        <div>
          <strong>${R(n.title)}</strong>
          <p>${R(n.message)}</p>
          <small>${n.created_at?String(n.created_at).replace(`T`,` `).slice(0,16):``}</small>
        </div>

        <div class="nurselink-notification-actions">
          ${Gn(n)?`<a href="${R(Gn(n))}">Open</a>`:``}
          ${n.read_at?``:`<button type="button">Read</button>`}
        </div>
      `,r.querySelector(`button`)?.addEventListener(`click`,async()=>{await Un(n.id),Jn(e,t),Yn()}),s.appendChild(r)}),i&&n.length>o.length){let t=document.createElement(`div`);t.className=`nurselink-notification-compact-footer`,t.innerHTML=`
        <span>Showing ${o.length} of ${n.length} recent notifications</span>
        <a href="/nurselink-notifications.html">View all notifications →</a>
      `,e.appendChild(t)}}async function Yn(){let e;try{e=await q()}catch{return}document.querySelectorAll(`.nurselink-notification-badge`).forEach(t=>{t.textContent=e.unread>99?`99+`:String(e.unread),t.hidden=e.unread<=0})}async function Xn(t){if(!t||!document.querySelector(e))return;let n=document.querySelector(`${e} .topbar`);if(n&&!n.querySelector(`.nurselink-notification-button`)){let e=document.createElement(`button`);e.type=`button`,e.className=`nurselink-notification-button`,e.setAttribute(`aria-label`,`Open notifications`),e.setAttribute(`title`,`Notifications`),e.innerHTML=`
        <span>🔔</span>
        <em class="nurselink-notification-badge" hidden>0</em>
      `,n.appendChild(e),e.setAttribute(`aria-haspopup`,`dialog`),e.setAttribute(`aria-controls`,`nurselink-notification-drawer`),e.setAttribute(`aria-expanded`,`false`),e.addEventListener(`click`,t=>{t.preventDefault(),t.stopPropagation(),qn(e)})}if(await Yn(),document.documentElement.dataset.nurselinkNotificationOutsideClose||(document.documentElement.dataset.nurselinkNotificationOutsideClose=`1`,document.addEventListener(`click`,e=>{let t=document.querySelector(`.nurselink-notification-drawer`),n=e.target.closest?.(`.nurselink-notification-button`);!t||n||t.contains(e.target)||Kn()})),h()===`dashboard`){let e=t.querySelector(`.nurselink-notification-center`);if(!e){e=document.createElement(`section`),e.className=`nurselink-notification-center nurselink-notification-center-compact`;let n=t.querySelector(`.nurselink-digital-member-card`),r=t.querySelector(`.nurselink-member-hub`),i=n||r||t.querySelector(`.page-header`);i?i.insertAdjacentElement(`afterend`,e):t.insertBefore(e,t.firstChild)}let n=t.querySelector(`.nurselink-digital-member-card`);if(n){let r=t.querySelector(`.nurselink-dashboard-primary-grid`);r||(r=document.createElement(`div`),r.className=`nurselink-dashboard-primary-grid`,r.setAttribute(`aria-label`,`Membership identity and notification center`),n.insertAdjacentElement(`beforebegin`,r)),r.append(n,e)}try{await Mn().catch(()=>null),await q(),Jn(e,{limit:4,compact:!0,showViewAll:!0})}catch{}}}async function Zn(){let e=await fn(`/membership-applications`);return Array.isArray(e?.data)?e.data:[]}async function Qn(e,t,n){let r=n.querySelector(`select[name="status"]`)?.value,i=n.querySelector(`textarea[name="reviewer_notes"]`)?.value?.trim()||null,a=n.querySelector(`.nurselink-review-card-status`),o=n.querySelector(`[data-action="save-membership"]`);a.textContent=`Saving membership review…`,a.dataset.tone=`loading`,o.disabled=!0;try{await fn(`/membership-applications/${t.id}`,{method:`PATCH`,body:JSON.stringify({status:r,reviewer_notes:i})}),U.loaded=!1,G.loaded=!1,K.loaded=!1;let n=await Zn();U.memberships=n,await pn(!0),U.memberships=n,En(e,`memberships`)}catch(e){a.textContent=e.message,a.dataset.tone=`error`}finally{o.disabled=!1}}function $n(e){let t=e?.profile||null,n=Array.isArray(e?.documents)?e.documents:[],r=e?.extraction_summary||{},i=e=>R(e||`Not provided`),a=t?[t.first_name,t.middle_name,t.last_name].filter(Boolean).join(` `):``;return`
      <div class="nurselink-membership-evidence-summary">
        <div class="nurselink-smart561-quality" data-review-required="${r.review_required?`true`:`false`}">
          <div>
            <strong>${r.review_required?`Extraction needs reviewer attention`:`No extraction conflicts detected`}</strong>
            <small>${Number(r.fields_detected||0)} fields detected · ${Number(r.applicant_confirmed_fields||0)} applicant-confirmed · ${Number(r.current_documents||0)} current documents</small>
          </div>
          <div class="nurselink-smart561-quality-counts">
            <span><b>${Array.isArray(r.conflicts)?r.conflicts.length:0}</b> conflicts</span>
            <span><b>${Array.isArray(r.low_confidence_fields)?r.low_confidence_fields.length:0}</b> low confidence</span>
            <span><b>${Number(r.documents_needing_manual_input||0)}</b> manual input</span>
          </div>
          ${Array.isArray(r.conflicts)&&r.conflicts.length?`
            <div class="nurselink-smart561-review-issues">
              <strong>Conflicting document values</strong>
              ${r.conflicts.map(e=>`<span><b>${i(String(e.field||``).replace(/_/g,` `))}</b>${(e.candidates||[]).map(e=>`${i(e.value)} (${Math.round(Number(e.confidence||0)*100)}%, ${i(e.source_name)})`).join(` · `)}</span>`).join(``)}
            </div>
          `:``}
          ${Array.isArray(r.low_confidence_fields)&&r.low_confidence_fields.length?`
            <div class="nurselink-smart561-review-issues">
              <strong>Low-confidence values</strong>
              ${r.low_confidence_fields.map(e=>`<span><b>${i(String(e.field||``).replace(/_/g,` `))}</b>${i(e.candidate?.value)} · ${Math.round(Number(e.candidate?.confidence||0)*100)}%</span>`).join(``)}
            </div>
          `:``}
        </div>

        <strong>Applicant-confirmed profile</strong>
        ${t?`
          <div class="nurselink-membership-evidence-grid">
            <span><small>Name</small>${i(a)}</span>
            <span><small>Professional title</small>${i(t.professional_title)}</span>
            <span><small>Current position</small>${i(t.current_position)}</span>
            <span><small>Employer</small>${i(t.current_employer)}</span>
            <span><small>License / registration</small>${i(t.primary_license_number)}</span>
            <span><small>License expiry</small>${i(t.primary_license_expiry)}</span>
            <span><small>Nursing education</small>${i(t.highest_nursing_education)}</span>
            <span><small>Experience</small>${t.years_experience===null||t.years_experience===void 0?`Not provided`:`${Number(t.years_experience)} years`}</span>
          </div>
        `:`<p>No Smart Registration profile is available.</p>`}

        <strong>Supporting evidence (${n.length})</strong>
        <div class="nurselink-membership-evidence-docs">
          ${n.length?n.map(e=>`
            <div>
              <span><b>${i(e.name)}</b><small>${i(e.document_type)} · ${i(e.extraction_status)}${e.is_current===!1?` · Superseded`:``}</small></span>
              <a href="${R(`https://lbs.amsertech.com/backend${e.download_url}`)}" target="_blank" rel="noopener">Open evidence</a>
            </div>
          `).join(``):`<p>No supporting documents were attached.</p>`}
        </div>

        <p class="nurselink-membership-evidence-boundary">Extraction assists data entry only. Reviewers must independently verify credential and identity evidence.</p>
      </div>`}async function er(e,t,n){let r=t.querySelector(`.nurselink-membership-evidence`);if(r){if(!r.hidden){r.hidden=!0,n.textContent=`Inspect Evidence`;return}r.hidden=!1,n.disabled=!0,n.textContent=`Loading Evidence…`,r.innerHTML=`<p>Loading applicant profile and supporting documents…</p>`;try{r.innerHTML=$n((await fn(`/membership-applications/${e.id}/evidence`))?.data||null),n.textContent=`Hide Evidence`}catch(e){r.innerHTML=`<div class="form-error">${R(e.message)}</div>`,n.textContent=`Retry Evidence`}finally{n.disabled=!1}}}function tr(e){let t=U.memberships||[],n=mn()===`admin`;e.innerHTML=`
      <div class="nurselink-review-queue-head">
        <div>
          <strong>Membership Applications Queue</strong>
          <small>${t.length} membership record${t.length===1?``:`s`}</small>
        </div>
      </div>

      <div class="nurselink-review-card-list"></div>
    `;let r=e.querySelector(`.nurselink-review-card-list`);t.forEach(t=>{let i=document.createElement(`article`);i.className=`nurselink-review-card nurselink-membership-review-card`,i.dataset.status=t.status,i.innerHTML=`
        <div class="nurselink-review-card-head">
          <div>
            <span>MEMBERSHIP APPLICATION</span>
            <strong>${t.member}</strong>
            <small>${R(t.member_number||`Membership number pending`)}</small>
          </div>

          <em>${Nn(t.status)}</em>
        </div>

        <div class="nurselink-review-card-meta">
          ${t.updated_at?`<span>Updated ${String(t.updated_at).slice(0,10)}</span>`:``}
          ${t.approved_at?`<span>Approved ${String(t.approved_at).slice(0,10)}</span>`:``}
        </div>

        <div class="nurselink-review-card-fields">
          <label>
            <span>Membership Status</span>
            <select name="status">
              <option value="submitted">Submitted</option>
              <option value="under_review">Under Review</option>
              <option value="needs_information">Needs Information</option>
              <option value="ready_for_approval">Ready for Approval</option>
              ${n?`<option value="approved">Approved</option>`:``}
              <option value="declined">Declined</option>
            </select>
          </label>

          <label>
            <span>Reviewer Notes</span>
            <textarea name="reviewer_notes" rows="3" maxlength="6000"></textarea>
          </label>
        </div>

        <div class="nurselink-review-card-status" aria-live="polite"></div>

        <div class="nurselink-membership-evidence" hidden></div>

        <div class="nurselink-review-card-actions">
          <button type="button" class="secondary-button" data-action="inspect-evidence">Inspect Evidence</button>
          <button type="button" class="primary-button" data-action="save-membership">
            Save Membership Review
          </button>
        </div>
      `;let a=i.querySelector(`select[name="status"]`);a.value=Array.from(a.options).some(e=>e.value===t.status)?t.status:`ready_for_approval`,t.status===`approved`&&(a.disabled=!0,i.querySelector(`[data-action="save-membership"]`).disabled=!0),i.querySelector(`textarea[name="reviewer_notes"]`).value=t.reviewer_notes||``,i.querySelector(`[data-action="save-membership"]`)?.addEventListener(`click`,()=>Qn(e.closest(`.nurselink-review-center`),t,i)),i.querySelector(`[data-action="inspect-evidence"]`)?.addEventListener(`click`,e=>er(t,i,e.currentTarget)),r.appendChild(i)}),t.length||(r.innerHTML=`
        <div class="nurselink-review-empty">
          <strong>No membership records are in the queue yet.</strong>
          <small>
            Membership records are created automatically when authenticated users
            access NurseLink after v5.5.3 is installed.
          </small>
        </div>
      `)}let nr=En;En=function(e,t=null){U.summary;let n=U.memberships||[];nr(e,t);let r=e.querySelector(`.nurselink-review-tabs`),i=e.querySelector(`.nurselink-review-tab-panel`);if(!r||!i)return;if(!r.querySelector(`[data-review-tab="memberships"]`)){let e=document.createElement(`button`);e.type=`button`,e.dataset.reviewTab=`memberships`,e.innerHTML=`<span>Memberships</span><em>${n.length}</em>`,r.prepend(e)}let a=()=>{e.querySelectorAll(`.nurselink-review-tabs button`).forEach(e=>{e.setAttribute(`aria-selected`,String(e.dataset.reviewTab===`memberships`))}),tr(i)},o=r.querySelector(`[data-review-tab="memberships"]`);o.onclick=a,t===`memberships`&&a()};async function rr(e){if(!(!e||h()!==`admin`))try{let t=await Zn();U.memberships=t;let n=e.querySelector(`.nurselink-review-center`);n&&U.loaded&&En(n)}catch{}}function ir(e){Hn(e),Xn(e),rr(e)}let ar=`https://lbs.amsertech.com/backend/api/public-profile`,or={loaded:!1,data:null};async function sr(e=!1){if(or.loaded&&!e)return or.data;let t=await u(ar,`/settings`);return or.data=t?.data||null,or.loaded=!0,or.data}function cr(e){let t=document.createElement(`form`);t.className=`nurselink-public-profile-editor`,t.innerHTML=`
      <div class="nurselink-public-profile-editor-head">
        <div>
          <span>PUBLIC DIGITAL NURSE PROFILE</span>
          <strong>Choose what you want to share</strong>
          <p>
            Only the sections you enable are returned by the public LBS NurseLink API.
            Credential numbers, private notes, addresses and uploaded documents are never published.
          </p>
        </div>
      </div>

      <div class="nurselink-public-profile-grid">
        <label class="toggle span-2">
          <input type="checkbox" name="enabled">
          <span>Enable my shareable NurseLink profile</span>
        </label>

        <label class="span-2">
          <span>Professional Headline</span>
          <input name="headline" maxlength="190" placeholder="Registered Nurse · ICU · International Experience">
        </label>

        <label class="span-2">
          <span>Professional Bio</span>
          <textarea name="bio" rows="4" maxlength="3000" placeholder="Write a concise professional introduction."></textarea>
        </label>

        <fieldset class="span-2">
          <legend>Public Sections</legend>

          <div class="nurselink-public-profile-checks">
            ${[[`show_photo`,`Profile Photo`],[`show_member_number`,`NurseLink Member Number`],[`show_credentials`,`Credentials`],[`show_employment`,`Employment History`],[`show_portfolio`,`Public Portfolio`],[`show_learning`,`Completed Learning / CPD`]].map(([e,t])=>`
              <label>
                <input type="checkbox" name="${e}">
                <span>${t}</span>
              </label>
            `).join(``)}
          </div>
        </fieldset>
      </div>

      <div class="nurselink-public-profile-editor-status" aria-live="polite"></div>

      <div class="nurselink-public-profile-editor-actions">
        <button type="submit" class="primary-button">Save Public Profile</button>
      </div>
    `;let n=(e,n)=>{let r=t.elements.namedItem(e);r&&(r instanceof HTMLInputElement&&r.type===`checkbox`?r.checked=!!n:n!=null&&(r.value=String(n)))};return[`enabled`,`headline`,`bio`,`show_photo`,`show_member_number`,`show_credentials`,`show_employment`,`show_portfolio`,`show_learning`].forEach(t=>n(t,e?.[t])),t}function lr(e){let t=t=>e.elements.namedItem(t)?.value?.trim?.()||``,n=t=>!!e.elements.namedItem(t)?.checked;return{enabled:n(`enabled`),headline:t(`headline`)||null,bio:t(`bio`)||null,show_photo:n(`show_photo`),show_member_number:n(`show_member_number`),show_credentials:n(`show_credentials`),show_employment:n(`show_employment`),show_portfolio:n(`show_portfolio`),show_learning:n(`show_learning`)}}function ur(e,t){e.innerHTML=`
      <div class="nurselink-public-profile-heading">
        <div>
          <span>SHAREABLE PROFILE</span>
          <h2>Digital Nurse Profile</h2>
          <p>
            Create a professional public profile you control. NurseLink publishes
            only the sections you explicitly enable.
          </p>
        </div>

        <em data-enabled="${t.enabled}">
          ${t.enabled?`Public`:`Private`}
        </em>
      </div>

      <div class="nurselink-public-profile-share">
        <div>
          <span>SHARE LINK</span>
          <strong>${R(t.share_url)}</strong>
          <small>${t.enabled?`Anyone with this link can view the enabled sections.`:`This link stays unavailable until you enable the profile.`}</small>
        </div>

        <div>
          ${t.enabled?`<a href="${R(t.share_url)}" target="_blank" rel="noopener">Preview Public Profile ↗</a>`:``}
          <button type="button" class="copy">Copy Link</button>
        </div>
      </div>

      <div class="nurselink-public-profile-editor-wrap"></div>

      <div class="nurselink-public-profile-privacy">
        <strong>Privacy by design:</strong>
        credential numbers, reviewer notes, contact details, addresses, application
        data and uploaded documents are not exposed by the public-profile endpoint.
      </div>
    `,e.querySelector(`.copy`)?.addEventListener(`click`,async e=>{let n=e.currentTarget;try{await navigator.clipboard.writeText(t.share_url),n.textContent=`Copied ✓`,setTimeout(()=>n.textContent=`Copy Link`,1600)}catch{window.prompt(`Copy this public profile link:`,t.share_url)}});let n=e.querySelector(`.nurselink-public-profile-editor-wrap`),r=cr(t);n.appendChild(r),r.addEventListener(`submit`,async t=>{t.preventDefault();let n=r.querySelector(`.nurselink-public-profile-editor-status`),i=r.querySelector(`button[type="submit"]`);n.textContent=`Saving public profile settings…`,n.dataset.tone=`loading`,i.disabled=!0;try{let t=await u(ar,`/settings`,{method:`PUT`,body:JSON.stringify(lr(r))});or.data=t?.data||null,or.loaded=!0,ur(e,or.data)}catch(e){n.textContent=e.message,n.dataset.tone=`error`}finally{i.disabled=!1}})}async function dr(e){if(!e||![`portfolio`,`profile`].includes(h()))return;let t;try{t=await Mn()}catch{return}if(!t||t.status!==`approved`)return;let n=e.querySelector(`.nurselink-public-profile-settings`);if(!n){n=document.createElement(`section`),n.className=`nurselink-public-profile-settings`;let t=e.querySelector(`.nurselink-professional-portfolio`)||e.querySelector(`.nurselink-digital-member-card`)||e.querySelector(`.page-header`);t?t.insertAdjacentElement(`afterend`,n):e.insertBefore(n,e.firstChild)}try{let e=await sr();ur(n,e)}catch(e){n.innerHTML=`
        <div class="nurselink-public-profile-error">
          <strong>Public profile settings unavailable</strong>
          <small>${e.message}</small>
        </div>
      `}}function fr(e){dr(e)}function pr(){try{document.documentElement.setAttribute(`data-nurselink-cache-guard`,`v263`),`serviceWorker`in navigator&&navigator.serviceWorker.getRegistrations().then(e=>{e.forEach(e=>{(e.scope||``).startsWith(location.origin)&&e.unregister().catch(()=>{})})}).catch(()=>{}),`caches`in window&&caches.keys().then(e=>Promise.all(e.filter(e=>/nurselink|vite|workbox|precache/i.test(e)).map(e=>caches.delete(e)))).catch(()=>{})}catch{}}pr();function mr(e){if(!e||new URLSearchParams(location.search).get(`partner`)!==`1`)return;let t=e.querySelector(`.nurselink-partner-portal-launcher`);if(t)return;t=document.createElement(`section`),t.className=`nurselink-partner-portal-launcher`,t.innerHTML=`
      <div>
        <span>EMPLOYER / PARTNER ACCESS</span>
        <strong>NurseLink Partner Portal</strong>
        <small>
          For verified hospitals, health systems, recruitment partners and
          authorized institutional users.
        </small>
      </div>
      <a href="/nurselink-partner-portal.html">Open Partner Portal →</a>
    `;let n=e.querySelector(`.page-header`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild)}function hr(e){mr(e)}let gr=`https://lbs.amsertech.com/backend/api/job-applications`;function J(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function _r(e){return String(e||``).replaceAll(`_`,` `).replace(/\b\w/g,e=>e.toUpperCase())}async function vr(e){return(await u(gr,`/${e}/communications`))?.data||null}async function yr(e,t){return u(gr,`/${e}/messages`,{method:`POST`,body:JSON.stringify({body:t})})}async function br(e){return u(gr,`/${e}/messages/read`,{method:`POST`})}async function xr(e,t,n,r){return u(gr,`/${e}/interviews/${t}/respond`,{method:`PATCH`,body:JSON.stringify({status:n,candidate_notes:r||null})})}function Sr(e,t){let n=Array.isArray(t?.messages)?t.messages:[],r=Array.isArray(t?.interviews)?t.interviews:[],i=t?.application||{};e.innerHTML=`
      <div class="nurselink-comm-heading">
        <div>
          <span>EMPLOYER COMMUNICATION</span>
          <strong>${J(i.partner_name||i.employer_name||`NurseLink Partner`)}</strong>
          <small>${J(i.job_title||``)}</small>
        </div>
        <em>${J(_r(i.status))}</em>
      </div>

      <div class="nurselink-comm-layout">
        <section class="nurselink-message-panel">
          <div class="nurselink-panel-title">
            <strong>Messages</strong>
            <small>Messages are available only for this job application.</small>
          </div>

          <div class="nurselink-message-list">
            ${n.length?n.map(e=>`
              <article data-sender="${J(e.sender_type)}">
                <span>${e.sender_type===`candidate`?`You`:`Employer / Partner`}</span>
                <p>${J(e.body)}</p>
                <small>${J(String(e.created_at||``).replace(`T`,` `).slice(0,16))}</small>
              </article>
            `).join(``):`
              <div class="nurselink-comm-empty">No messages yet.</div>
            `}
          </div>

          <form class="nurselink-message-form">
            <textarea name="body" rows="3" maxlength="5000" required placeholder="Write a message about this application."></textarea>
            <div class="status" aria-live="polite"></div>
            <button type="submit" class="primary-button">Send Message</button>
          </form>
        </section>

        <section class="nurselink-interview-panel">
          <div class="nurselink-panel-title">
            <strong>Interviews</strong>
            <small>Confirm, request a new schedule, or cancel an invitation.</small>
          </div>

          <div class="nurselink-interview-list">
            ${r.length?r.map(e=>`
              <article data-interview-id="${e.id}">
                <div class="nurselink-interview-head">
                  <div>
                    <span>${J(_r(e.mode))} INTERVIEW</span>
                    <strong>${J(String(e.scheduled_start||``).replace(`T`,` `).slice(0,16))}</strong>
                    <small>${J(e.timezone||``)}</small>
                  </div>
                  <em data-status="${J(e.status)}">${J(_r(e.status))}</em>
                </div>

                ${e.location_or_link?`
                  <div class="nurselink-interview-location">
                    ${/^https?:\/\//i.test(e.location_or_link)?`<a href="${J(e.location_or_link)}" target="_blank" rel="noopener">Open Interview Link ↗</a>`:`<span>${J(e.location_or_link)}</span>`}
                  </div>
                `:``}

                ${e.partner_notes?`<p>${J(e.partner_notes)}</p>`:``}

                ${[`completed`,`cancelled`].includes(e.status)?``:`
                  <div class="nurselink-interview-response">
                    <textarea name="candidate_notes" rows="2" maxlength="3000" placeholder="Optional note or preferred reschedule time.">${J(e.candidate_notes||``)}</textarea>
                    <div class="buttons">
                      <button type="button" data-response="confirmed">Confirm</button>
                      <button type="button" data-response="reschedule_requested">Request Reschedule</button>
                      <button type="button" data-response="cancelled">Cancel</button>
                    </div>
                    <div class="status"></div>
                  </div>
                `}
              </article>
            `).join(``):`
              <div class="nurselink-comm-empty">No interview invitations yet.</div>
            `}
          </div>
        </section>
      </div>

      <div class="nurselink-comm-privacy">
        Employer messaging is application-specific. This channel does not expose your
        home address, private documents, credential numbers, or private portfolio content.
      </div>
    `;let a=e.querySelector(`.nurselink-message-form`);a?.addEventListener(`submit`,async t=>{t.preventDefault();let n=a.elements.namedItem(`body`)?.value?.trim()||``,r=a.querySelector(`.status`),o=a.querySelector(`button[type="submit"]`);if(n){r.textContent=`Sending…`,o.disabled=!0;try{await yr(i.id,n),Sr(e,await vr(i.id))}catch(e){r.textContent=e.message}finally{o.disabled=!1}}}),e.querySelectorAll(`[data-response]`).forEach(t=>{t.addEventListener(`click`,async()=>{let n=t.closest(`[data-interview-id]`),r=Number(n?.dataset.interviewId),a=n?.querySelector(`[name="candidate_notes"]`)?.value?.trim()||``,o=n?.querySelector(`.nurselink-interview-response .status`);t.disabled=!0,o.textContent=`Saving response…`;try{await xr(i.id,r,t.dataset.response,a),Sr(e,await vr(i.id))}catch(e){o.textContent=e.message}finally{t.disabled=!1}})}),br(i.id).catch(()=>{})}async function Cr(e){if(!e||h()!==`applications`||!F())return;try{await Yt()}catch{return}if(!H.applications.length)return;let t=e.querySelector(`.nurselink-application-communications`);if(!t){t=document.createElement(`section`),t.className=`nurselink-application-communications`;let n=e.querySelector(`.nurselink-applications-pipeline`);n?n.insertAdjacentElement(`afterend`,t):e.appendChild(t)}let n=[...H.applications].sort((e,t)=>{let n=e=>[`withdrawn`,`declined`].includes(String(e||``).toLowerCase()),r=n(e.status);if(r!==n(t.status))return r?1:-1;let i=new Date(e.updated_at||e.created_at||0).getTime()||0;return(new Date(t.updated_at||t.created_at||0).getTime()||0)-i});t.innerHTML=`
      <div class="nurselink-comm-selector">
        <div>
          <span>MESSAGES & INTERVIEWS</span>
          <strong>Employer Communication</strong>
          <small>Active applications are shown first. Closed applications remain available for history.</small>
        </div>

        <select aria-label="Select application">
          ${n.map(e=>`
            <option value="${Number(e.id)}">
              ${J(e.title||`Application`)} · ${J(e.employer_name||``)} · ${J(_r(e.status))}
            </option>
          `).join(``)}
        </select>
      </div>

      <div class="nurselink-comm-content">
        <div class="nurselink-comm-loading">Loading communication…</div>
      </div>
    `;let r=t.querySelector(`select`),i=t.querySelector(`.nurselink-comm-content`),a=async()=>{i.innerHTML=`<div class="nurselink-comm-loading">Loading communication…</div>`;try{let e=await vr(Number(r.value));Sr(i,e)}catch(e){i.innerHTML=`
          <div class="nurselink-comm-unavailable">
            <strong>Partner communication is not available</strong>
            <small>${J(e.message)}</small>
          </div>
        `}};r.addEventListener(`change`,a),await a()}function wr(e){Cr(e)}function Tr(e){if(!e||h()!==`admin`)return;let t=e.querySelector(`.nurselink-institutional-analytics-launcher`);if(t)return;t=document.createElement(`section`),t.className=`nurselink-institutional-analytics-launcher`,t.innerHTML=`
      <div>
        <span>RECRUITMENT INTELLIGENCE</span>
        <strong>Institutional Analytics</strong>
        <small>Aggregate partner, opportunity, application, interview and offer reporting.</small>
      </div>
      <a href="/nurselink-institutional-analytics.html">Open Analytics →</a>
    `;let n=e.querySelector(`.page-header`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild)}function Er(e){Tr(e)}let Dr=`nurselink-runtime-v326`;document.documentElement.setAttribute(`data-nurselink-runtime`,Dr),document.documentElement.setAttribute(`data-nurselink-release`,`5.5.8`),document.documentElement.setAttribute(`data-nurselink-release-stage`,`production`),document.documentElement.setAttribute(`data-nurselink-production`,`stable`);function Or(e){if(!e||h()!==`admin`)return;let t=e.querySelector(`.nurselink-production-uat-launcher`);if(t)return;t=document.createElement(`section`),t.className=`nurselink-production-uat-launcher`,t.dataset.nurselinkRuntime=Dr,t.dataset.nurselinkRelease=`5.5.8`,t.dataset.nurselinkStage=`production`,t.innerHTML=`
      <div>
        <span>RELEASE VERIFICATION</span>
        <strong>Production UAT & Readiness</strong>
        <small>Run automated environment checks and the formal end-to-end acceptance checklist.</small>
      </div>
      <a href="/nurselink-production-readiness.html">Open UAT Center →</a>
    `;let n=e.querySelector(`.nurselink-institutional-analytics-launcher`);if(n)n.insertAdjacentElement(`afterend`,t);else{let n=e.querySelector(`.page-header`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild)}}function kr(e){if(!e||h()!==`admin`)return;let t=e.querySelector(`.nurselink-operations-center-launcher`);if(t)return;t=document.createElement(`section`),t.className=`nurselink-operations-center-launcher`,t.innerHTML=`
      <div>
        <span>PRODUCTION OPERATIONS</span>
        <strong>Operations Center</strong>
        <small>Health snapshots, incidents, deployment history, backups and reliability monitoring.</small>
      </div>
      <a href="/nurselink-operations-center.html">Open Operations Center →</a>
    `;let n=e.querySelector(`.nurselink-production-uat-launcher`);if(n)n.insertAdjacentElement(`afterend`,t);else{let n=e.querySelector(`.nurselink-institutional-analytics-launcher`);if(n)n.insertAdjacentElement(`afterend`,t);else{let n=e.querySelector(`.page-header`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild)}}}async function Ar(e){if(!e||!F())return;let t=await ut(),n=h();if(![`jobs`,`learning`,`qualifications`].includes(n))return;let r=e.querySelector(`.nurselink-career-intelligence-launcher`);if(r)return;if(r=document.createElement(`section`),r.className=`nurselink-career-intelligence-launcher`,r.innerHTML=`
      <div>
        <span>CAREER INTELLIGENCE</span>
        <strong>Professional Growth & Mobility Insights</strong>
        <small>Readiness score, credential expiry forecast, learning priorities and explainable job-fit guidance.</small>
      </div>
      ${t?`<a href="/career-intelligence">Open Career Intelligence →</a>`:`<a href="/dashboard#membership" class="nurselink-onboarding-locked-link">🔒 Complete onboarding to unlock</a>`}
    `,t||r.classList.add(`nurselink-onboarding-feature-locked`),n===`dashboard`){let t=e.querySelector(`.nurselink-member-hub`);if(t)t.appendChild(r);else{let t=e.querySelector(`.page-header`);t?t.insertAdjacentElement(`afterend`,r):e.insertBefore(r,e.firstChild)}return}let i=e.querySelector(`.nurselink-career-matching`),a=e.querySelector(`.nurselink-learning-tracker`),o=e.querySelector(`.nurselink-qualification-readiness`);if(i)i.insertAdjacentElement(`afterend`,r);else if(a)a.insertAdjacentElement(`afterend`,r);else if(o)o.insertAdjacentElement(`afterend`,r);else{let t=e.querySelector(`.page-header`);t?t.insertAdjacentElement(`afterend`,r):e.insertBefore(r,e.firstChild)}}function jr(e){if(!e||!F())return;let t=h();if(![`learning`,`qualifications`,`credentials`].includes(t))return;let n=e.querySelector(`.nurselink-credential-renewal-launcher`);if(n)return;if(n=document.createElement(`section`),n.className=`nurselink-credential-renewal-launcher`,n.innerHTML=`
      <div>
        <span>CREDENTIAL RENEWAL</span>
        <strong>Professional Compliance Planning</strong>
        <small>
          Track expiry timelines, renewal priorities and credentials that need
          attention before they lapse.
        </small>
      </div>
      <a href="/credential-renewal">
        Open Renewal Center →
      </a>
    `,t===`dashboard`){let t=e.querySelector(`.nurselink-member-hub`);if(t)t.appendChild(n);else{let t=e.querySelector(`.page-header`);t?t.insertAdjacentElement(`afterend`,n):e.insertBefore(n,e.firstChild)}return}let r=e.querySelector(`.nurselink-qualification-readiness`)||e.querySelector(`.nurselink-learning-tracker`)||e.querySelector(`.nurselink-career-intelligence-launcher`)||e.querySelector(`.page-header`);r?r.insertAdjacentElement(`afterend`,n):e.insertBefore(n,e.firstChild)}function Mr(e){if(!e||!F()||h()!==`profile`||e.querySelector(`.nurselink-enterprise-launcher`))return;let t=document.createElement(`section`);t.className=`nurselink-enterprise-launcher`,t.dataset.nurselinkEnterprise=`v5.5.3`,t.innerHTML=`
      <div>
        <span>ENTERPRISE PLATFORM</span>
        <strong>Institutional Cohorts</strong>
        <small>
          View NurseLink institutional cohort assignments linked
          to verified partner organizations.
        </small>
      </div>
      <a href="/nurselink-enterprise.html">
        Open Enterprise →
      </a>
    `;let n=e.querySelector(`.nurselink-benefits-launcher`)||e.querySelector(`.nurselink-engagement-hub-launcher`)||e.querySelector(`.page-header`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild)}function Nr(e){if(!e||!F()||h()!==`profile`||e.querySelector(`.nurselink-benefits-launcher`))return;let t=document.createElement(`section`);t.className=`nurselink-benefits-launcher`,t.dataset.nurselinkBenefits=`v5.5.3`,t.innerHTML=`
      <div>
        <span>MEMBER BENEFITS & RESOURCES</span>
        <strong>Explore Member Support</strong>
        <small>
          Browse NurseLink resources, professional support offers
          and member opportunities subject to listed terms.
        </small>
      </div>
      <a href="/nurselink-benefits.html">
        Browse Benefits →
      </a>
    `;let n=e.querySelector(`.nurselink-engagement-hub-launcher`)||e.querySelector(`.nurselink-mentoring-launcher`)||e.querySelector(`.page-header`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild)}function Pr(e){if(!e||!F()||h()!==`profile`||e.querySelector(`.nurselink-engagement-hub-launcher`))return;let t=document.createElement(`section`);t.className=`nurselink-engagement-hub-launcher`,t.dataset.nurselinkEngagementHub=`v5.5.3`,t.innerHTML=`
      <div>
        <span>MEMBER ENGAGEMENT HUB</span>
        <strong>Your NurseLink Community</strong>
        <small>
          One place for chapters, events, mentoring
          and recommended community actions.
        </small>
      </div>
      <a href="/nurselink-engagement.html">
        Open Engagement Hub →
      </a>
    `;let n=e.querySelector(`.nurselink-mentoring-launcher`)||e.querySelector(`.nurselink-chapters-launcher`)||e.querySelector(`.page-header`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild)}async function Fr(e){if(!e||!F())return;let t=await ut(),n=h();if(![`profile`,`learning`].includes(n)||e.querySelector(`.nurselink-mentoring-launcher`))return;let r=document.createElement(`section`);r.className=`nurselink-mentoring-launcher`,r.dataset.nurselinkMentoring=`v5.5.3`,r.innerHTML=`
      <div>
        <span>MENTORING & PEER SUPPORT</span>
        <strong>Connect with NurseLink Members</strong>
        <small>
          Create an opt-in mentoring profile, discover mentors
          and manage professional mentoring requests.
        </small>
      </div>
      ${t?`<a href="/nurselink-mentoring.html">Open Mentoring →</a>`:`<a href="/dashboard#membership" class="nurselink-onboarding-locked-link">🔒 Complete onboarding to unlock</a>`}
    `,t||r.classList.add(`nurselink-onboarding-feature-locked`);let i=e.querySelector(`.nurselink-chapters-launcher`)||e.querySelector(`.nurselink-events-programs-launcher`)||e.querySelector(`.page-header`);i?i.insertAdjacentElement(`afterend`,r):e.insertBefore(r,e.firstChild)}function Ir(e){if(!e||!F()||h()!==`profile`||e.querySelector(`.nurselink-chapters-launcher`))return;let t=document.createElement(`section`);t.className=`nurselink-chapters-launcher`,t.dataset.nurselinkChapters=`v5.5.3`,t.innerHTML=`
      <div>
        <span>CHAPTERS & COMMUNITIES</span>
        <strong>Connect with Your Nurse Community</strong>
        <small>
          Join regional, overseas, institutional and
          professional-interest NurseLink communities.
        </small>
      </div>
      <a href="/nurselink-chapters.html">
        Explore Chapters →
      </a>
    `;let n=e.querySelector(`.nurselink-events-programs-launcher`)||e.querySelector(`.nurselink-credential-renewal-launcher`)||e.querySelector(`.page-header`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild)}function Lr(e){if(!e||!F())return;let t=h();if(![`learning`,`profile`].includes(t)||e.querySelector(`.nurselink-events-programs-launcher`))return;let n=document.createElement(`section`);n.className=`nurselink-events-programs-launcher`,n.dataset.nurselinkEventsPrograms=`v5.5.3`,n.innerHTML=`
      <div>
        <span>EVENTS & PROGRAMS</span>
        <strong>Connect, Learn & Participate</strong>
        <small>
          Discover NurseLink webinars, workshops, orientations,
          networking activities and member programs.
        </small>
      </div>
      <a href="/nurselink-events.html">
        Browse Events →
      </a>
    `;let r=e.querySelector(`.nurselink-credential-renewal-launcher`)||e.querySelector(`.nurselink-career-intelligence-launcher`)||e.querySelector(`.page-header`);r?r.insertAdjacentElement(`afterend`,n):e.insertBefore(n,e.firstChild)}function Rr(e){h()!==`learning`&&(Ar(e),jr(e),Lr(e),Ir(e),Fr(e),Pr(e),Nr(e),Mr(e))}function zr(e){Or(e),kr(e)}let Br=`${t}/api/nurselink/session-identity`,Y={loaded:!1,loading:null,data:null};async function Vr(e=!1){return Y.loaded&&!e?Y.data:(Y.loading&&!e||(Y.loading=u(Br).then(e=>(Y.data=e?.data||null,Y.loaded=!0,Y.data)).finally(()=>{Y.loading=null})),Y.loading)}function Hr(e){document.documentElement.classList.remove(`nurselink-super-admin-session`),document.documentElement.removeAttribute(`data-nurselink-access-level`),e?.querySelectorAll(`.nurselink-super-admin-badge,.nurselink-super-admin-banner`).forEach(e=>e.remove()),e?.querySelector(`.nurselink-super-admin-center-link[data-nurselink-injected="1"]`)?.remove(),e?.querySelector(`.nurselink-super-admin-test-center-link`)?.remove(),Yr(e),e?.querySelector(`.nurselink-access-membership-summary`)?.remove(),e?.removeAttribute(`data-nurselink-role-membership-clarity`),e?._nurselinkSuperAdminPortalObserver&&(e._nurselinkSuperAdminPortalObserver.disconnect(),delete e._nurselinkSuperAdminPortalObserver);let t=k()?`Applicant Portal`:`Member Portal`,n=e?.querySelector(`.topbar`);n&&[...n.querySelectorAll(`[data-nurselink-super-admin-portal-label="1"]`)].forEach(e=>{e.textContent=t,e.classList.remove(`nurselink-super-admin-portal-label`),e.removeAttribute(`data-nurselink-super-admin-portal-label`)}),e?.querySelectorAll(`.nurselink-super-admin-user`).forEach(e=>{e.classList.remove(`nurselink-super-admin-user`),e.removeAttribute(`data-nurselink-role`)})}let Ur={membershipLoading:null,lastRoute:null};function Wr(e){return e?[e,...e.querySelectorAll(`*`)].filter(e=>{if(!e||e.children.length>0)return!1;let t=(e.textContent||``).replace(/\s+/g,` `).trim();return/^(Applicant|Member|Reviewer|Administrator|Admin|Super Administrator)\s+Portal$/i.test(t)}):[]}function Gr(e){let t=e?.querySelector(`.topbar`);if(!t)return!1;let n=!1;return Wr(t).forEach(e=>{(e.textContent||``).replace(/\s+/g,` `).trim()!==`Applicant Portal`&&(e.textContent=`Applicant Portal`,n=!0),e.classList.add(`nurselink-super-admin-portal-label`),e.setAttribute(`data-nurselink-super-admin-portal-label`,`1`)}),n}function Kr(e){if(!e||e._nurselinkSuperAdminPortalObserver)return;let t=!1,n=()=>{t||(t=!0,window.requestAnimationFrame(()=>{t=!1,document.documentElement.classList.contains(`nurselink-super-admin-session`)&&Gr(e)}))},r=new MutationObserver(n);r.observe(e,{childList:!0,subtree:!0,characterData:!0}),e._nurselinkSuperAdminPortalObserver=r,n()}function qr(e){if(!e)return null;let t=e.querySelector(`.nurselink-super-admin-center-link`);if(t)return t.textContent=`Admin Center`,t;t=document.createElement(`a`),t.className=`nurselink-super-admin-center-link`,t.href=`/admin/login.html`,t.setAttribute(`data-nurselink-injected`,`1`),t.setAttribute(`data-nurselink-system-access`,`super-admin`),t.setAttribute(`aria-label`,`Open separate NurseLink Administrator sign-in`),t.textContent=`Admin Center`;let n=[...e.querySelectorAll(`a,button`)].find(e=>{let t=(e.textContent||``).replace(/\s+/g,` `).trim().toLowerCase();return t===`sign out`||t===`logout`||t===`log out`});return n?.parentElement?n.insertAdjacentElement(`beforebegin`,t):e.appendChild(t),t}function Jr(e){if(!e)return null;let t=e.querySelector(`.nurselink-super-admin-test-center-link`);if(t)return t.textContent=`Test Center`,t;t=document.createElement(`a`),t.className=`nurselink-super-admin-test-center-link`,t.href=`/nurselink-super-admin-test-center.html`,t.setAttribute(`data-nurselink-system-access`,`super-admin-test`),t.setAttribute(`aria-label`,`Open Super Administrator Test Center`),t.textContent=`Test Center`;let n=e.querySelector(`.nurselink-super-admin-center-link`);return n?n.insertAdjacentElement(`afterend`,t):e.appendChild(t),t}let X={loaded:!1,loading:null,data:null,nextRetryAt:0};function Yr(e){document.documentElement.classList.remove(`nurselink-super-admin-test-mode`),document.documentElement.removeAttribute(`data-nurselink-super-admin-test-mode`),e?.querySelector(`.nurselink-super-admin-test-mode-banner`)?.remove(),document.documentElement.classList.remove(`nurselink-member-locked`)}function Xr(e,t,n){if(!e||!n?.active){Yr(e);return}document.documentElement.classList.add(`nurselink-super-admin-test-mode`),document.documentElement.setAttribute(`data-nurselink-super-admin-test-mode`,`v453`),document.documentElement.classList.remove(`nurselink-member-locked`);let r=e.querySelector(`.nurselink-super-admin-test-mode-banner`);if(!r){r=document.createElement(`section`),r.className=`nurselink-super-admin-test-mode-banner`;let e=t?.querySelector(`.page-header`);e?e.insertAdjacentElement(`afterend`,r):t&&t.insertBefore(r,t.firstChild)}let i=Number(n.expires_at||0),a=i?new Date(i*1e3).toLocaleTimeString():`session expiry`;r.innerHTML=`
      <div>
        <strong>SUPER ADMINISTRATOR TEST MODE ACTIVE</strong>
        <small>
          Member-only access is temporarily enabled for functional testing.
          Your real membership status is unchanged.
        </small>
      </div>
      <div>
        <span>Membership: ${R(Nn(n.membership_status||`pending`))}</span>
        <span>Expires: ${R(a)}</span>
        <a href="/nurselink-super-admin-test-center.html">
          Test Center
        </a>
      </div>
    `}async function Zr(e=!1){return window.location.pathname.startsWith(`/admin`)?X.loaded&&!e?X.data:X.loading&&!e?X.loading:!e&&X.nextRetryAt>Date.now()?X.data:(X.loading=u(`${t}/api/nurselink/admin/test-mode/session`).then(e=>(X.data=e?.data||null,X.loaded=!0,X.nextRetryAt=0,X.data)).catch(e=>{throw X.data=null,e?.status===401||e?.status===403?(X.loaded=!0,X.nextRetryAt=0):X.nextRetryAt=Date.now()+3e4,e}).finally(()=>{X.loading=null}),X.loading):{active:!1,enabled:!1,available:!1,test_mode:!1,source:`member_test_mode_function_guard_v1017`}}function Qr(t,n){if(!t||a()||!document.documentElement.classList.contains(`nurselink-super-admin-session`)){Yr(t);return}Jr(t.querySelector(`.sidebar`)),Zr().then(t=>{Xr(document.querySelector(e),document.querySelector(`${e} .page`)||document.querySelector(`${e} main`),t)}).catch(()=>{Yr(t)})}function $r(e){return e&&e.status===`approved`?`Member`:`Applicant`}function ei(e){return e?e.status===`approved`?`Approved`:Nn(e.status||`submitted`):`Pending`}function ti(e,t){if(!e)return;let n=[...e.querySelectorAll(`.stat-card`)].find(e=>{let t=(e.textContent||``).replace(/\s+/g,` `).trim();return/^Role\b/i.test(t)||/Current access level/i.test(t)});if(!n)return;let r=[...n.querySelectorAll(`span,small,p,div`)].filter(e=>e.children.length===0),i=r.find(e=>/^Role$/i.test((e.textContent||``).trim()));i&&(i.textContent=`Membership Role`);let a=n.querySelector(`strong`);a&&(a.textContent=$r(t));let o=r.find(e=>/Current access level/i.test((e.textContent||``).trim()));o&&(o.textContent=`Membership standing`),n.setAttribute(`data-nurselink-membership-role-card`,`1`)}function ni(e,t){if(!e||h()!==`dashboard`)return;let n=e.querySelector(`.nurselink-access-membership-summary`);if(!n){n=document.createElement(`section`),n.className=`nurselink-access-membership-summary`,n.setAttribute(`data-nurselink-identity-clarity`,`system-access-membership`);let t=e.querySelector(`.page-header`);t?t.insertAdjacentElement(`afterend`,n):e.insertBefore(n,e.firstChild)}let r=$r(t),i=ei(t),a=t?.member_number||`Pending`,o=t?.status?Nn(t.status):`Pending`;n.innerHTML=`
      <div class="nurselink-access-membership-summary-head">
        <div>
          <span>ACCESS & MEMBERSHIP</span>
          <strong>Your system authority and membership standing are separate.</strong>
        </div>
        <em>SERVER-CONFIRMED ACCESS</em>
      </div>

      <div class="nurselink-access-membership-summary-grid">
        <div data-kind="system">
          <span>System Access</span>
          <strong>Super Administrator</strong>
          <small>Privileged system session</small>
        </div>

        <div data-kind="membership-role">
          <span>Membership Role</span>
          <strong>${R(r)}</strong>
          <small>Professional membership role</small>
        </div>

        <div data-kind="membership-status">
          <span>Membership Status</span>
          <strong>${R(i)}</strong>
          <small>Application: ${R(o)}</small>
        </div>

        <div data-kind="member-number">
          <span>Member Number</span>
          <strong>${R(a)}</strong>
          <small>${t?.member_number?`Permanent NurseLink member number`:`Issued after membership approval`}</small>
        </div>
      </div>
    `}function ri(e,t,n,r){if(!e||!n?.is_super_admin)return;e.querySelector(`.topbar`);let i=e.querySelector(`.sidebar`);Gr(e),Kr(e),qr(i),Jr(i),t&&(ti(t,r),ni(t,r)),e.setAttribute(`data-nurselink-role-membership-clarity`,`1`),e.setAttribute(`data-nurselink-system-access`,`super-administrator`),e.setAttribute(`data-nurselink-super-admin-portal-persistence`,`v451`)}function ii(t,n,r){!t||!r?.is_super_admin||(ri(t,n,r,G.data),!G.loaded&&(Ur.membershipLoading||=Mn().then(t=>{ri(document.querySelector(e),document.querySelector(`${e} .page`)||document.querySelector(`${e} main`),r,t)}).catch(()=>{}).finally(()=>{Ur.membershipLoading=null})))}function ai(e,t,n){if(!e)return;if(!n?.is_super_admin){Hr(e);return}document.documentElement.classList.add(`nurselink-super-admin-session`),document.documentElement.setAttribute(`data-nurselink-access-level`,`super-admin`),e.querySelector(`.topbar`);let r=e.querySelector(`.user-chip`);if(r&&(r.classList.add(`nurselink-super-admin-user`),r.dataset.nurselinkRole=`super-admin`,r.setAttribute(`aria-label`,`NurseLink user menu — Super Administrator`)),ii(e,t,n),h()!==`admin`||!t)return;let i=t.querySelector(`.nurselink-super-admin-banner`);if(!i){i=document.createElement(`section`),i.className=`nurselink-super-admin-banner`,i.innerHTML=`
        <div class="nurselink-super-admin-banner-mark" aria-hidden="true">SA</div>
        <div>
          <span>SUPER ADMINISTRATOR SESSION</span>
          <strong>You are signed in with elevated NurseLink system administration access.</strong>
          <small>
            This identity is confirmed by the NurseLink server. Administrator and reviewer
            actions remain subject to access controls and audit logging.
          </small>
        </div>
      `;let e=t.querySelector(`.page-header`);e?e.insertAdjacentElement(`afterend`,i):t.insertBefore(i,t.firstChild)}}function oi(t,n){if(t){if(a()){Hr(t);return}if(Y.loaded){ai(t,n,Y.data);return}Y.loading||Vr().then(t=>{a()||ai(document.querySelector(e),document.querySelector(`${e} .page`)||document.querySelector(`${e} main`),t)}).catch(()=>{})}}function si(e){if(!e||h()!==`qualifications`)return;if(document.documentElement.classList.contains(`nurselink-super-admin-test-mode`)){document.documentElement.classList.remove(`nurselink-member-locked`);return}let t=e.textContent||``,n=/membership application is approved/i.test(t)||/available after membership approval/i.test(t);document.documentElement.classList.toggle(`nurselink-member-locked`,n),n&&e.querySelectorAll(`h1,h2,h3,h4`).forEach(e=>{let t=(e.textContent||``).trim().toLowerCase();(t===`qualification framework`||t===`available after membership approval`)&&e.classList.add(`nurselink-ghost-heading`)})}let ci={onboardingLoaded:!1,onboardingLoading:null,onboarding:null};async function li(e=!1){return ci.onboardingLoaded&&!e?ci.onboarding:(ci.onboardingLoading&&!e||(ci.onboardingLoading=u(`${t}/api/membership/onboarding`).then(e=>(ci.onboarding=e?.data||null,ci.onboardingLoaded=!0,ci.onboarding)).finally(()=>{ci.onboardingLoading=null})),ci.onboardingLoading)}function ui(e,t,n,r=``){return`
      <div class="nurselink-member-portal-action" data-done="${e?`1`:`0`}">
        <span aria-hidden="true">${e?`✓`:`○`}</span>
        <div>
          <strong>${R(t)}</strong>
          <small>${R(n)}</small>
        </div>
        ${r?`<a href="${R(r)}">Open</a>`:``}
      </div>
    `}async function di(e,n=!1){if(!e||h()!==`dashboard`||!F())return;let r=e.querySelector(`.nurselink-member-portal-membership-v520`);if(!r){r=document.createElement(`section`),r.className=`nurselink-member-portal-membership-v520`,r.innerHTML=`
        <div class="nurselink-member-portal-loading">
          <strong>Membership & Activation</strong>
          <small>Loading your NurseLink member status…</small>
        </div>
      `;let t=e.querySelector(`.nurselink-member-hub`);if(t)t.insertAdjacentElement(`beforebegin`,r);else{let t=e.querySelector(`.page-header`);t?t.insertAdjacentElement(`afterend`,r):e.insertBefore(r,e.firstChild)}}let i;try{i=await li(n)}catch(e){e?.status===403?r.remove():r.innerHTML=`
          <div class="nurselink-member-portal-loading">
            <strong>Membership & Activation</strong>
            <small>Member activation information is temporarily unavailable.</small>
          </div>
        `;return}if(!i)return;if(!i.onboarding?.welcome_viewed_at)try{await u(`${t}/api/membership/onboarding/progress`,{method:`POST`,body:JSON.stringify({action:`welcome_viewed`})}),ci.onboardingLoaded=!1,i=await li(!0)}catch{}let a=i.membership||{},o=i.onboarding||{},s=i.signals||{},c=JSON.stringify({member_number:a.member_number||``,standing:a.standing||``,onboarding_status:o.status||``,welcome_viewed_at:o.welcome_viewed_at||``,orientation_completed_at:o.orientation_completed_at||``,activation_score:Number(s.activation_score||0),profile_photo_ready:!!s.profile_photo_ready,credentials_registered:Number(s.credentials_registered||0),portfolio_started:!!s.portfolio_started,digital_member_identity_ready:!!s.digital_member_identity_ready});if(r.dataset.onboardingRenderSignature!==c&&(r.dataset.onboardingRenderSignature=c,r.innerHTML=`
      <div class="nurselink-member-portal-head">
        <div>
          <span>MEMBERSHIP</span>
          <strong>Membership & Activation</strong>
          <small>
            Member ${R(a.member_number||`number pending`)}
            · ${R(String(a.standing||``).replace(/_/g,` `))}
          </small>
        </div>
        <div class="nurselink-member-portal-score">
          <strong>${Number(s.activation_score||0)}%</strong>
          <small>Activation</small>
        </div>
      </div>

      <div class="nurselink-member-portal-actions">
        ${ui(!!o.welcome_viewed_at,`Welcome reviewed`,`Your approved NurseLink membership is active.`)}
        ${ui(!!o.orientation_completed_at,`Member orientation`,o.orientation_completed_at?`Internal NurseLink member orientation completed.`:`Review the NurseLink member-use and privacy principles.`)}
        ${ui(!!s.profile_photo_ready,`Professional profile`,`Keep your professional profile current.`,`/profile`)}
        ${ui(Number(s.credentials_registered||0)>0,`Credentials`,`${Number(s.credentials_registered||0)} credential record(s).`,`/credentials`)}
        ${ui(!!s.portfolio_started,`Professional portfolio`,`Build and maintain your NurseLink portfolio.`,`/portfolio`)}
        ${ui(!!s.digital_member_identity_ready,`Digital member identity`,`NurseLink membership identity — not a government or PRC ID.`,`/nurselink-digital-id.html`)}
      </div>

      <div class="nurselink-member-portal-footer">
        <span>
          Onboarding: <strong>${R(String(o.status||`pending`).replace(/_/g,` `))}</strong>
        </span>
        ${o.orientation_completed_at?`<span class="done">Orientation complete</span>`:`<button type="button" data-member-orientation-v520>Complete Orientation</button>`}
      </div>
    `,r.querySelector(`[data-member-orientation-v520]`)?.addEventListener(`click`,async n=>{let r=n.currentTarget;r.disabled=!0,r.textContent=`Saving…`;try{await u(`${t}/api/membership/onboarding/progress`,{method:`POST`,body:JSON.stringify({action:`orientation_completed`})}),ci.onboardingLoaded=!1,await di(e,!0)}catch(e){r.disabled=!1,r.textContent=e?.message||`Try again`}}),location.hash===`#membership`||(()=>{try{return sessionStorage.getItem(`nurselink_member_portal_focus`)===`membership`}catch{return!1}})())){try{sessionStorage.removeItem(`nurselink_member_portal_focus`)}catch{}setTimeout(()=>{r.scrollIntoView({behavior:`smooth`,block:`start`})},100)}}function fi(){if(!S())return;let e=document.querySelector(`.nurselink-auth-form-card`)||document.querySelector(`.auth-card`)||document.querySelector(`form`)?.parentElement;if(!e||e.querySelector(`.nurselink-admin-login-choice-v520`))return;let t=document.createElement(`a`);t.className=`nurselink-admin-login-choice-v520`,t.href=`/admin/login.html`,t.textContent=`Administrator sign in`,e.appendChild(t)}function pi(e){e&&h()===`dashboard`&&di(e),S()&&fi()}function mi(){let t=document.querySelector(e);if(!t)return!1;t.querySelector(`.sidebar`),t.querySelector(`.topbar`);let n=t.querySelector(`.main-area > .page`);return n?(t.querySelectorAll(`.main-area > [class*="-launcher"]`).forEach(e=>e.remove()),t.classList.add(`nurselink-mobile-ready`),h()===`learning`||(h()!==`dashboard`&&n&&n.querySelectorAll(`.nurselink-member-hub, .nurselink-member-portal-membership-v520`).forEach(e=>e.remove()),v(n),si(n),de(n),we(n),Ve(n),$e(n),ct(n),ht(n),Dt(n),Kt(n),dn(n),An(n),ir(n),fr(n),hr(n),wr(n),Er(n),zr(n),Rr(n),pi(n),Fi(n),oi(t,n),Qr(t,n),!0)):!1}let Z={loaded:!1,loading:null,data:null,notice:``,noticeTone:`info`,pollTimer:null},hi=[{number:1,title:`Upload Documents`,short:`Upload`},{number:2,title:`Personal Information`,short:`Personal`},{number:3,title:`Professional Details`,short:`Professional`},{number:4,title:`Review & Submit`,short:`Review`}];function Q(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function gi(){let e=new URLSearchParams(location.search),t=Number(e.get(`smartstep`)||0);if(Number.isFinite(t)&&t>=1&&t<=4)return t;let n=Number(e.get(`nlstep`)||0);return n===3?3:n===5?1:n===6?4:1}function _i(e){let t=Math.max(1,Math.min(4,Number(e)||1)),n=new URL(location.href);n.searchParams.delete(`nlstep`),n.searchParams.set(`smartstep`,String(t)),history.pushState(null,``,n.pathname+n.search+n.hash);let r=document.querySelector(`.page`)||document.querySelector(`main`);Pi(r),r?.querySelector(`.nurselink-smart557`)?.scrollIntoView({behavior:`smooth`,block:`start`})}async function vi(e=``,t={}){return u(`https://lbs.amsertech.com/backend/api/smart-registration`,e,t)}async function yi(e=!1){return Z.loaded&&!e?Z.data:(Z.loading&&!e||(Z.loading=vi(``).then(e=>(Z.data=e?.data||{},Z.loaded=!0,Z.loading=null,Z.data)).catch(e=>{throw Z.loading=null,e})),Z.loading)}function bi(e,t,n){let r=t?.[e];if(r!=null&&String(r).trim()!==``)return{value:r,detected:!1,source:``,confidence:1};let i=n?.[e];return!i||i.value===null||i.value===void 0?{value:``,detected:!1,source:``,confidence:0}:{value:i.value,detected:!0,source:i.source_name||`uploaded document`,confidence:Number(i.confidence||0)}}function xi(e,t,n,r={}){let i=n?.[e]||null,a=r?.[e]?.status||(i?`extracted`:`missing`),o={extracted:`Extracted`,applicant_confirmed:`Applicant Confirmed`,applicant_provided:`Applicant Provided`,needs_review:`Needs Review`,missing:`Missing`},s=Math.round(Number(i?.confidence||0)*100),c=i?.source_name||`uploaded document`,l=Array.isArray(i?.alternatives)?i.alternatives:[];return`
      <span class="nurselink-smart561-field-meta" data-status="${Q(a)}">
        <b>${Q(o[a]||a)}</b>
        ${i?`<small>${Q(c)}${s?` · ${s}% confidence`:``}</small>`:``}
      </span>
      ${i?.conflict?`
        <span class="nurselink-smart561-conflict">
          <strong>Different values were found. Choose the correct one:</strong>
          <span>${l.map(t=>`
            <button type="button" data-smart-use-field="${Q(e)}" data-smart-use-value="${Q(t.value)}">
              ${Q(t.value)} <small>${Q(t.source_name||`document`)} · ${Math.round(Number(t.confidence||0)*100)}%</small>
            </button>
          `).join(``)}</span>
        </span>
      `:``}`}function Si(e,t,n={}){let r={};return e.forEach(e=>{let i=t?.[e],a=n?.[e];i?.source_document_id&&String(a??``).trim()===String(i.value??``).trim()?r[e]={source:`document`,document_id:i.source_document_id,document_name:i.source_name||``,confidence:Number(i.confidence||0)}:r[e]={source:`applicant`}}),r}function Ci(e,t){return(Array.isArray(e)?e:[]).filter(e=>Number(e?.step)===Number(t))}function wi(e,t,n=!1){return`
      <div class="nurselink-smart557-brandbar">
        <div class="nurselink-smart557-brand">
          <span class="logo">NL</span>
          <span><strong>NurseLink</strong><small>Smart Membership Registration</small></span>
        </div>
        ${n?``:`<a href="/login">Already have an account? <strong>Sign In</strong></a>`}
      </div>
      <div class="nurselink-smart557-stepper" aria-label="Registration progress">
        ${hi.map(t=>`
          <button type="button" class="${t.number===e?`active`:t.number<e?`done`:``}" data-smart-step="${t.number}">
            <span>${t.number<e?`✓`:t.number}</span>
            <strong>${Q(t.title)}</strong>
          </button>
        `).join(``)}
      </div>
      <div class="nurselink-smart557-progress" aria-label="${t}% registration completion"><i style="width:${t}%"></i></div>
    `}function Ti(){return Z.notice?`<div class="nurselink-smart557-notice" role="alert" aria-live="assertive" tabindex="-1" data-tone="${Q(Z.noticeTone)}">${Q(Z.notice)}</div>`:``}function Ei(e){let t=e?.membership?.status===`approved`,n=String((t?e?.membership?.profile_update_status:e?.membership?.status)||``).replace(/_/g,` `);return`
      <section class="nurselink-smart557-card nurselink-smart557-locked">
        <div class="nurselink-smart557-card-heading centered">
          <span class="nurselink-smart557-icon" aria-hidden="true">🔒</span>
          <h1>${t?`Your credential update is under review`:`Your submitted application is locked`}</h1>
          <p>Your current status is <strong>${Q(n||`under review`)}</strong>. Information cannot be changed while NurseLink is reviewing it.${t?` Your existing membership remains approved.`:``}</p>
        </div>
        <div class="nurselink-smart557-complete-callout">
          If a reviewer needs corrections, your status will change to <strong>Needs Information</strong>. You can then return here, save the requested details, and resubmit.
        </div>
        <div class="nurselink-smart557-actions centered">
          <a class="primary-button" href="/application-status">View Application Status →</a>
        </div>
      </section>
    `}function Di(e){let t=Array.isArray(e?.documents)?e.documents:[],n=e?.extraction_capabilities||{},r=Ci(e?.missing,1);return`
      <section class="nurselink-smart557-card nurselink-smart557-upload-card">
        <div class="nurselink-smart557-card-heading centered">
          <span class="nurselink-smart557-icon">⇧</span>
          <h1>Start by Uploading Your Documents</h1>
          <p>We’ll extract your information automatically and pre-fill your registration.</p>
        </div>

        <div class="nurselink-smart557-dropzone">
          <span class="docicon">▤</span>
          <strong>Drag & drop your documents here</strong>
          <small>or</small>
          <button type="button" class="browse" data-smart-browse>Browse Files</button>
          <input id="nurselinkSmart557Files" type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,application/pdf,image/jpeg,image/png,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document">
          <em>PDF, JPG, PNG, DOC or DOCX · Up to 15 MB per file</em>
        </div>

        <div class="nurselink-smart557-document-types">
          <strong>Documents we can use</strong>
          <div>
            <span>▤ Nursing License / PRC</span>
            <span>▤ CV / Resume</span>
            <span>▤ Diploma / Degree</span>
            <span>▤ Passport / ID</span>
            <span>▤ Employment Certificate</span>
            <span>▤ Training Certificates</span>
          </div>
        </div>

        ${t.length?`
          <div class="nurselink-smart557-documents">
            <div class="nurselink-smart557-subhead">
              <strong>Uploaded documents</strong>
              <span>${t.length} file${t.length===1?``:`s`}</span>
            </div>
            ${t.map(e=>{let t=Object.keys(e.extracted_fields||{}).length,n=e.security_status===`quarantined`?`Blocked by document security scan`:e.security_status===`unavailable`?`Security scan unavailable · manual entry required`:e.security_status===`scanning`||e.security_status===`pending`?`Security scan in progress`:e.extraction_status===`extracted`?`${t} field${t===1?``:`s`} detected`:e.extraction_status===`needs_input`?`Uploaded · manual confirmation needed`:e.extraction_status===`failed`?`Extraction failed · enter missing information manually`:e.extraction_status===`queued`?`Queued for extraction`:`Processing`;return`
                <div class="nurselink-smart557-document">
                  <span class="file">▤</span>
                  <span class="copy"><strong>${Q(e.name)}</strong><small>${Q(e.document_type||`document`)} · v${Q(e.version||1)} · ${Q(n)}</small></span>
                  <span class="nurselink-smart558-document-actions">
                    <button type="button" class="replace" data-smart-replace-document="${e.id}" aria-label="Replace ${Q(e.name)}">Replace</button>
                    <button type="button" class="remove" data-smart-remove-document="${e.id}" aria-label="Remove ${Q(e.name)}">×</button>
                  </span>
                </div>
              `}).join(``)}
          </div>
        `:``}

        <div class="nurselink-smart557-privacy">
          <span>▣</span>
          <p><strong>Your documents are stored in private application storage and are never published publicly.</strong><br>Extracted values help fill the application, but you will review and confirm everything before submission.</p>
        </div>

        ${!n.image_ocr||!n.pdf_text?`
          <div class="nurselink-smart557-capability-note">
            <strong>Smart extraction adapts to the server.</strong>
            <span>Text PDFs and DOCX files are extracted when supported. Scanned images use OCR when available; otherwise NurseLink keeps the file and asks only for the missing information.</span>
          </div>
        `:``}

        ${r.length?`<div class="nurselink-smart557-missing compact"><strong>Still needed:</strong> ${r.map(e=>Q(e.label)).join(`, `)}</div>`:``}

        <div class="nurselink-smart557-actions end">
          ${t.length?`<a class="primary-button" href="/smart-registration?smartstep=2" data-smart-next="2">Continue to Personal Information →</a>`:`<button type="button" class="primary-button" disabled>Continue to Personal Information →</button>`}
        </div>
      </section>
      <p class="nurselink-smart557-terms">By continuing, you agree to NurseLink’s Terms of Service and Privacy Policy.</p>
    `}function $(e,t,n,r,i,a,o={}){let s=bi(e,r,i),c=o.required?`required`:``,l=o.placeholder?`placeholder="${Q(o.placeholder)}"`:``,u=o.min===void 0?``:`min="${Q(o.min)}"`,d=o.max===void 0?``:`max="${Q(o.max)}"`,f=o.autocomplete?`autocomplete="${Q(o.autocomplete)}"`:``,p=s.value??``;return`
      <label class="nurselink-smart557-field">
        <span>${Q(t)}${o.required?` *`:``}</span>
        <input name="${Q(e)}" type="${Q(n)}" value="${Q(p)}" ${c} ${l} ${u} ${d} ${f}>
        ${xi(e,r,i,a)}
      </label>
    `}function Oi(e,t,n,r,i,a,o=!1){let s=bi(e,n,r);return`
      <label class="nurselink-smart557-field">
        <span>${Q(t)}${o?` *`:``}</span>
        <select name="${Q(e)}" ${o?`required`:``}>
          <option value="">Select</option>
          ${a.map(([e,t])=>`<option value="${Q(e)}" ${String(s.value)===String(e)?`selected`:``}>${Q(t)}</option>`).join(``)}
        </select>
        ${xi(e,n,r,i)}
      </label>
    `}function ki(e){let t=e?.profile||{},n=e?.suggestions||{},r=e?.field_statuses||{},i=Ci(e?.missing,2);return`
      <section class="nurselink-smart557-card">
        <div class="nurselink-smart557-card-heading">
          <span class="nurselink-smart557-eyebrow">STEP 2 OF 4</span>
          <h1>Confirm Your Personal Information</h1>
          <p>NurseLink has pre-filled anything it could confidently detect. Correct any value before continuing.</p>
          <div class="nurselink-smart561-legend"><span data-status="extracted">Extracted</span><span data-status="applicant_confirmed">Applicant Confirmed</span><span data-status="missing">Missing</span><span data-status="needs_review">Needs Review</span></div>
        </div>

        ${i.length?`
          <div class="nurselink-smart557-missing">
            <strong>We still need ${i.length} item${i.length===1?``:`s`} from you.</strong>
            <span>${i.map(e=>Q(e.label)).join(` · `)}</span>
          </div>
        `:`<div class="nurselink-smart557-complete-callout">✓ Personal information looks complete. Please review it once before saving.</div>`}

        <form class="nurselink-smart557-form" data-smart-form="personal">
          <div class="nurselink-smart557-grid three">
            ${$(`first_name`,`First Name`,`text`,t,n,r,{required:!0,autocomplete:`given-name`})}
            ${$(`middle_name`,`Middle Name`,`text`,t,n,r,{autocomplete:`additional-name`})}
            ${$(`last_name`,`Last Name`,`text`,t,n,r,{required:!0,autocomplete:`family-name`})}
          </div>
          <div class="nurselink-smart557-grid two">
            ${$(`birth_date`,`Date of Birth`,`date`,t,n,r,{required:!0,autocomplete:`bday`})}
            ${Oi(`sex`,`Sex`,t,n,r,[[`female`,`Female`],[`male`,`Male`],[`non_binary`,`Non-binary`],[`prefer_not_to_say`,`Prefer not to say`],[`other`,`Other`]])}
          </div>
          <div class="nurselink-smart557-grid two">
            ${$(`nationality`,`Nationality`,`text`,t,n,r,{required:!0})}
            <label class="nurselink-smart557-field"><span>Email Address</span><input type="email" value="${Q(t.email||``)}" disabled><small>Confirmed from your NurseLink account</small></label>
          </div>
          <div class="nurselink-smart557-grid two">
            ${$(`phone`,`Mobile Number`,`tel`,t,n,r,{required:!0,autocomplete:`tel`,placeholder:`+63 9XX XXX XXXX`})}
            ${$(`country`,`Country of Residence`,`text`,t,n,r,{required:!0,autocomplete:`country-name`})}
          </div>
          ${$(`address_line1`,`Street / Address`,`text`,t,n,r,{autocomplete:`street-address`})}
          <div class="nurselink-smart557-grid two">
            ${$(`city`,`City / Municipality`,`text`,t,n,r,{autocomplete:`address-level2`})}
            ${$(`province`,`Province / State`,`text`,t,n,r,{autocomplete:`address-level1`})}
          </div>

          <div class="nurselink-smart557-actions split">
            <button type="button" class="secondary-button" data-smart-next="1">← Documents</button>
            <button type="submit" class="primary-button">Save & Continue →</button>
          </div>
        </form>
      </section>
    `}function Ai(e){let t=e?.profile||{},n=e?.suggestions||{},r=e?.field_statuses||{},i=Ci(e?.missing,3);return`
      <section class="nurselink-smart557-card">
        <div class="nurselink-smart557-card-heading">
          <span class="nurselink-smart557-eyebrow">STEP 3 OF 4</span>
          <h1>Confirm Your Professional Details</h1>
          <p>Review credentials and career information detected from your license, CV, diploma, and certificates.</p>
          <div class="nurselink-smart561-legend"><span data-status="extracted">Extracted</span><span data-status="applicant_confirmed">Applicant Confirmed</span><span data-status="missing">Missing</span><span data-status="needs_review">Needs Review</span></div>
        </div>

        ${i.length?`
          <div class="nurselink-smart557-missing">
            <strong>Complete these professional details.</strong>
            <span>${i.map(e=>Q(e.label)).join(` · `)}</span>
          </div>
        `:`<div class="nurselink-smart557-complete-callout">✓ Required professional information is complete. Please verify it before saving.</div>`}

        <form class="nurselink-smart557-form" data-smart-form="professional">
          <div class="nurselink-smart557-grid two">
            ${$(`professional_title`,`Professional Title`,`text`,t,n,r,{required:!0,placeholder:`Registered Nurse`})}
            ${$(`years_experience`,`Years of Nursing Experience`,`number`,t,n,r,{required:!0,min:0,max:80})}
          </div>
          <div class="nurselink-smart557-grid two">
            ${$(`current_position`,`Current / Most Recent Position`,`text`,t,n,r,{placeholder:`Staff Nurse`})}
            ${$(`current_employer`,`Current / Most Recent Employer`,`text`,t,n,r,{placeholder:`Hospital or facility`})}
          </div>
          ${$(`specialty`,`Specialty / Clinical Area`,`text`,t,n,r,{placeholder:`ICU, ER, Medical-Surgical, etc.`})}
          <div class="nurselink-smart557-grid two">
            ${$(`primary_license_number`,`Primary Nursing License / PRC Number`,`text`,t,n,r,{placeholder:`License or registration number`})}
            ${$(`primary_license_country`,`License Country / Jurisdiction`,`text`,t,n,r,{placeholder:`Philippines, United Kingdom, etc.`})}
          </div>
          <div class="nurselink-smart557-grid two">
            ${$(`primary_license_expiry`,`License Expiry Date`,`date`,t,n,r)}
          </div>
          <div class="nurselink-smart557-grid two">
            ${$(`highest_nursing_education`,`Highest Nursing Education`,`text`,t,n,r,{required:!0,placeholder:`Bachelor of Science in Nursing`})}
            ${$(`graduation_year`,`Graduation Year`,`number`,t,n,r,{min:1940,max:new Date().getFullYear()+1})}
          </div>

          <div class="nurselink-smart557-review-note">
            <strong>Important:</strong> Document extraction does not verify a professional license or credential. Verification remains a separate NurseLink reviewer action.
          </div>

          <div class="nurselink-smart557-actions split">
            <button type="button" class="secondary-button" data-smart-next="2">← Personal</button>
            <button type="submit" class="primary-button">Save & Review →</button>
          </div>
        </form>
      </section>
    `}function ji(e,t,n=!1){return`<div class="nurselink-smart557-review-row ${n?`missing`:``}"><span>${Q(e)}</span><strong>${Q(t||`Missing`)}</strong></div>`}function Mi(e){let t=e?.profile||{},n=Array.isArray(e?.documents)?e.documents:[],r=Array.isArray(e?.missing)?e.missing:[],i=e?.membership||{},a=String(i.status||`draft`),o=String(i.profile_update_status||``),s=a===`approved`&&[`submitted`,`under_review`,`ready_for_approval`].includes(o),c=a===`approved`&&o===`needs_information`,l=r.length===0&&([`draft`,`needs_information`].includes(a)||a===`approved`&&!s),u=[`submitted`,`under_review`,`ready_for_approval`].includes(a)||s,d=a===`approved`,f=e?.eligibility_insights||{},p=f?.pqf||null,m=Array.isArray(f?.suggested_positions)?f.suggested_positions:[],h=Array.isArray(f?.country_readiness)?f.country_readiness:[];return`
      <section class="nurselink-smart557-card">
        <div class="nurselink-smart557-card-heading">
          <span class="nurselink-smart557-eyebrow">STEP 4 OF 4</span>
          <h1>${d?`Review & Submit Your Updates`:`Review & Submit Your Application`}</h1>
          <p>Confirm the information below. You remain responsible for correcting any value that was extracted incorrectly.</p>
        </div>

        ${r.length?`
          <div class="nurselink-smart557-missing strong">
            <strong>${r.length} item${r.length===1?``:`s`} still need attention.</strong>
            <div>${r.map(e=>`<button type="button" data-smart-next="${e.step}">${Q(e.label)} →</button>`).join(``)}</div>
          </div>
        `:`<div class="nurselink-smart557-complete-callout">✓ Your Smart Registration is complete and ready to submit.</div>`}

        <div class="nurselink-smart557-review-grid">
          <section>
            <div class="nurselink-smart557-review-head"><strong>Personal Information</strong><button type="button" data-smart-next="2">Edit</button></div>
            ${ji(`Name`,[t.first_name,t.middle_name,t.last_name].filter(Boolean).join(` `),!t.first_name||!t.last_name)}
            ${ji(`Date of Birth`,t.birth_date,!t.birth_date)}
            ${ji(`Nationality`,t.nationality,!t.nationality)}
            ${ji(`Email`,t.email,!t.email)}
            ${ji(`Mobile`,t.phone,!t.phone)}
            ${ji(`Country`,t.country,!t.country)}
          </section>
          <section>
            <div class="nurselink-smart557-review-head"><strong>Professional Details</strong><button type="button" data-smart-next="3">Edit</button></div>
            ${ji(`Professional Title`,t.professional_title,!t.professional_title)}
            ${ji(`Experience`,t.years_experience!==null&&t.years_experience!==void 0?`${t.years_experience} years`:``,t.years_experience===null||t.years_experience===void 0)}
            ${ji(`Position`,t.current_position||`Not provided`)}
            ${ji(`Employer`,t.current_employer||`Not provided`)}
            ${ji(`License / PRC`,t.primary_license_number||`Document evidence supplied`)}
            ${ji(`License Jurisdiction`,t.primary_license_country||`Not provided`)}
            ${ji(`Education`,t.highest_nursing_education,!t.highest_nursing_education)}
          </section>
        </div>

        <div class="nurselink-smart557-review-documents">
          <div class="nurselink-smart557-review-head"><strong>Supporting Documents</strong><button type="button" data-smart-next="1">Manage</button></div>
          ${n.length?n.map(e=>`<span>▤ ${Q(e.name)} <small>${Q(e.document_type||`document`)}</small></span>`).join(``):`<p>No supporting documents uploaded.</p>`}
        </div>

        <section class="nurselink-smart557-review-documents nurselink-smart-eligibility">
          <div class="nurselink-smart557-review-head"><strong>Qualification & Job-Matching Insights</strong><a href="/qualifications">Open Qualifications</a></div>
          ${p?`<p><strong>Indicative PQF Level ${Q(p.level)}</strong> · ${Q(String(p.status||``).replace(/_/g,` `))}<br><small>${Q(p.basis)}</small></p>`:`<p><strong>PQF level not yet indicated.</strong><br><small>Add and confirm your highest nursing education and supporting evidence.</small></p>`}
          <p><strong>Suggested positions</strong><br>${m.length?m.map(e=>`<span>${Q(e)}</span>`).join(``):`<small>Complete professional details to generate suggestions.</small>`}</p>
          <p><strong>Destination readiness</strong><br><small>${h.length} country framework${h.length===1?``:`s`} available as references. Eligibility will appear only after governed country rules are published and evidence is verified.</small></p>
          <div class="nurselink-smart557-review-note"><strong>Advisory:</strong> ${Q(f.advisory||``)}</div>
        </section>

        ${i.reviewer_notes&&a===`needs_information`||i.profile_update_reviewer_notes&&c?`<div class="nurselink-smart557-reviewer-note"><strong>Reviewer requested more information</strong><p>${Q(c?i.profile_update_reviewer_notes:i.reviewer_notes)}</p></div>`:``}

        <div class="nurselink-smart557-submit-state">
          <span>Status</span><strong>${Q((s||c?`member update ${o}`:a).replace(/_/g,` `))}</strong>
        </div>

        <div class="nurselink-smart557-actions split">
          <button type="button" class="secondary-button" data-smart-next="3">← Professional</button>
          ${u?`<a class="primary-button" href="/application-status">Application in Review · View Status →</a>`:l?`<button type="button" class="primary-button" data-smart-submit>${d?`Submit Updates for Review →`:`Submit Application →`}</button>`:d?`<button type="button" class="primary-button" data-smart-submit disabled>Submit Updates for Review →</button>`:a===`declined`?`<a class="primary-button" href="/application-status">Decision Completed · View Status →</a>`:`<button type="button" class="primary-button" data-smart-submit ${l?``:`disabled`}>${a===`needs_information`?`Resubmit Application →`:`Submit Application →`}</button>`}
        </div>
      </section>
    `}function Ni(e){if(!e)return;e.dataset.smartBound!==`1`&&(e.dataset.smartBound=`1`,e.addEventListener(`click`,async t=>{if(t.target.closest(`[data-smart-browse]`)){t.preventDefault(),e.querySelector(`#nurselinkSmart557Files`)?.click();return}let n=t.target.closest(`[data-smart-step],[data-smart-next]`);if(n){if(n.matches(`a[href]`))return;t.preventDefault(),_i(n.dataset.smartStep||n.dataset.smartNext);return}let r=t.target.closest(`[data-smart-replace-document]`);if(r){t.preventDefault();let e=document.createElement(`input`);e.type=`file`,e.accept=`.pdf,.jpg,.jpeg,.png,.doc,.docx,application/pdf,image/jpeg,image/png,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document`,e.style.display=`none`,e.addEventListener(`change`,async()=>{let t=e.files?.[0];if(e.remove(),t){r.disabled=!0,Z.notice=`Replacing document with ${t.name}…`,Z.noticeTone=`info`,Pi(document.querySelector(`.page`)||document.querySelector(`main`));try{let e=new FormData;e.append(`document`,t),e.append(`replace_document_id`,r.dataset.smartReplaceDocument);let n=await vi(`/documents`,{method:`POST`,body:e});Z.notice=n?.message||`Document replaced and analyzed.`,Z.noticeTone=`success`}catch(e){Z.notice=e.message,Z.noticeTone=`error`}await yi(!0).catch(()=>{}),Pi(document.querySelector(`.page`)||document.querySelector(`main`))}},{once:!0}),document.body.appendChild(e),e.click();return}let i=t.target.closest(`[data-smart-use-field]`);if(i){t.preventDefault();let n=e.querySelector(`[name="${CSS.escape(i.dataset.smartUseField)}"]`);n&&(n.value=i.dataset.smartUseValue||``,n.dispatchEvent(new Event(`change`,{bubbles:!0})),n.focus());return}let a=t.target.closest(`[data-smart-remove-document]`);if(a){if(t.preventDefault(),!confirm(`Remove this document from your application?`))return;a.disabled=!0;try{await vi(`/documents/${a.dataset.smartRemoveDocument}`,{method:`DELETE`}),Z.notice=`Document removed.`,Z.noticeTone=`success`,await yi(!0),Pi(document.querySelector(`.page`)||document.querySelector(`main`))}catch(e){Z.notice=e.message,Z.noticeTone=`error`,Pi(document.querySelector(`.page`)||document.querySelector(`main`))}return}let o=t.target.closest(`[data-smart-submit]`);if(o){t.preventDefault(),o.disabled=!0,o.textContent=`Submitting…`;try{let e=await vi(`/submit`,{method:`POST`,body:JSON.stringify({})});Z.notice=e?.message||`Application submitted.`,Z.noticeTone=`success`,await yi(!0),Pi(document.querySelector(`.page`)||document.querySelector(`main`))}catch(e){Z.notice=e.message,Z.noticeTone=`error`,await yi(!0).catch(()=>{}),Pi(document.querySelector(`.page`)||document.querySelector(`main`))}}}),e.addEventListener(`change`,async e=>{let t=e.target.closest(`#nurselinkSmart557Files`);if(!t||!t.files?.length)return;let n=[...t.files];t.disabled=!0,Z.notice=`Uploading ${n.length} document${n.length===1?``:`s`}…`,Z.noticeTone=`info`,Pi(document.querySelector(`.page`)||document.querySelector(`main`));let r=0,i=[];for(let e of n)try{let t=new FormData;t.append(`document`,e),await vi(`/documents`,{method:`POST`,body:t}),r++}catch(t){i.push(`${e.name}: ${t.message}`)}Z.notice=i.length?`${r} uploaded. ${i.join(` `)}`:`${r} document${r===1?``:`s`} uploaded and analyzed.`,Z.noticeTone=i.length?`warning`:`success`,await yi(!0),Pi(document.querySelector(`.page`)||document.querySelector(`main`))}),e.addEventListener(`submit`,async e=>{let t=e.target.closest(`[data-smart-form]`);if(!t||(e.preventDefault(),!t.reportValidity()))return;let n=t.querySelector(`button[type="submit"]`);n&&(n.disabled=!0,n.textContent=`Saving…`);let r=Object.fromEntries(new FormData(t).entries()),i=t.dataset.smartForm,a=Z.data||{};i===`professional`&&(r.years_experience!==``&&(r.years_experience=Number(r.years_experience)),r.graduation_year===``?delete r.graduation_year:r.graduation_year=Number(r.graduation_year)),r.sources=Si(Object.keys(r),a.suggestions||{},r);try{let e=await vi(`/${i}`,{method:`PATCH`,body:JSON.stringify(r)});Z.notice=e?.message||`Information saved.`,Z.noticeTone=`success`,await yi(!0),_i(i===`personal`?3:4)}catch(e){Z.notice=e.message,Z.noticeTone=`error`,n&&(n.disabled=!1,n.textContent=i===`personal`?`Save & Continue →`:`Save & Review →`),Pi(document.querySelector(`.page`)||document.querySelector(`main`));let t=document.querySelector(`.nurselink-smart557-notice`);t?.focus({preventScroll:!0}),t?.scrollIntoView({behavior:`smooth`,block:`center`})}}));let t=e.querySelector(`.nurselink-smart557-dropzone`);t&&([`dragenter`,`dragover`].forEach(e=>t.addEventListener(e,e=>{e.preventDefault(),t.classList.add(`dragging`)})),[`dragleave`,`drop`].forEach(e=>t.addEventListener(e,e=>{e.preventDefault(),t.classList.remove(`dragging`)})),t.addEventListener(`drop`,t=>{let n=e.querySelector(`#nurselinkSmart557Files`);if(!(!n||!t.dataTransfer?.files?.length))try{let e=new DataTransfer;[...t.dataTransfer.files].forEach(t=>e.items.add(t)),n.files=e.files,n.dispatchEvent(new Event(`change`,{bubbles:!0}))}catch{}}))}function Pi(e){if(!e||h()!==`smart-registration`)return;e.classList.add(`nurselink-smart-registration-v557`),document.documentElement.classList.add(`nurselink-smart-registration-v557`);let t=e.querySelector(`.nurselink-smart557`);if(!t){t=document.createElement(`section`),t.className=`nurselink-smart557`;let n=e.querySelector(`.page-header`);n?n.insertAdjacentElement(`afterend`,t):e.insertBefore(t,e.firstChild)}t.dataset.smartRenderedLocation=location.pathname+location.search+location.hash;let n=Z.data,r=gi();if(!Z.loaded||!n){t.innerHTML=`
        ${wi(r,0)}
        <div class="nurselink-smart557-card nurselink-smart557-loading">
          <span class="spinner"></span>
          <strong>Preparing your Smart Registration…</strong>
          <p>Loading your saved application and document extraction status.</p>
        </div>
      `,Ni(t),yi().then(()=>Pi(e)).catch(e=>{Z.notice=e.message,Z.noticeTone=`error`,t.innerHTML=`${wi(r,0)}${Ti()}<div class="nurselink-smart557-card"><h1>Smart Registration needs attention</h1><p>Unable to load your application right now.</p><button class="primary-button" type="button" onclick="location.reload()">Try Again</button></div>`});return}let i=Number(n.completion||0),a=String(n?.membership?.status||`draft`),o=[`submitted`,`under_review`,`ready_for_approval`].includes(String(n?.membership?.profile_update_status||``)),s=[`draft`,`needs_information`].includes(a)||a===`approved`&&!o,c=s?r===1?Di(n):r===2?ki(n):r===3?Ai(n):Mi(n):Ei(n);t.innerHTML=`${wi(r,i,!!n?.membership)}${Ti()}${a===`approved`&&s?`<div class="nurselink-smart557-complete-callout"><strong>Update your credentials</strong><p>Upload renewed documents and update your details, then choose Submit Updates for Review in step 4. Your membership remains approved while the changes are reviewed.</p></div>`:``}${c}`,Ni(t);let l=(Array.isArray(n.documents)?n.documents:[]).some(e=>[`pending`,`scanning`,`scan_failed`].includes(e?.security_status)||[`queued`,`processing`].includes(e?.extraction_status));l&&!Z.pollTimer?Z.pollTimer=setTimeout(()=>{Z.pollTimer=null,yi(!0).then(()=>Pi(document.querySelector(`.page`)||document.querySelector(`main`))).catch(()=>{})},2500):!l&&Z.pollTimer&&(clearTimeout(Z.pollTimer),Z.pollTimer=null)}function Fi(e){if(!e||h()!==`smart-registration`)return;let t=e.querySelector(`.nurselink-smart557`),n=location.pathname+location.search+location.hash;t?.dataset.smartRenderedLocation!==n&&Pi(e)}function Ii(){g(),mi()||(h()===`verify-email`?ue():x()?(document.documentElement.classList.add(`nurselink-route-register`),ee(`register`)):S()&&(document.documentElement.classList.add(`nurselink-route-login`),document.querySelector(`.nl713-login-shell`)||(ee(`login`),fi())),v(document.body)),d()}function Li(){Ii();let t=!1;new MutationObserver(()=>{t||(t=!0,requestAnimationFrame(()=>{t=!1,Ii()}))}).observe(document.querySelector(`#root`)||document.body,{childList:!0,subtree:!0}),window.addEventListener(`resize`,()=>{window.innerWidth>780&&_(document.querySelector(e))},{passive:!0}),document.addEventListener(`keydown`,t=>{t.key===`Escape`&&_(document.querySelector(e))});let n=()=>setTimeout(Ii,0);[`pushState`,`replaceState`].forEach(e=>{let t=history[e];typeof t==`function`&&(history[e]=function(...e){let r=t.apply(this,e);return n(),r})}),window.addEventListener(`popstate`,n)}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,Li,{once:!0}):Li()})();var S=t(i(),1),C=f(),w=o();function T(){let e=(0,S.useRef)(null),[t,n]=(0,S.useState)(``);return(0,S.useEffect)(()=>{let e=new AbortController;return fetch(`/nurselink-cv-workspace.html`,{signal:e.signal}).then(e=>{if(!e.ok)throw Error();return e.text()}).then(n).catch(e=>{e.name!==`AbortError`&&n(`<p>Unable to load CV Maker. Please refresh the page.</p>`)}),()=>e.abort()},[]),(0,S.useEffect)(()=>{let t=e.current,n,r=()=>{let e=t.contentDocument?.documentElement;e&&(e.dataset.theme=document.documentElement.dataset.theme||(document.documentElement.classList.contains(`dark`)?`dark`:`light`))},i=()=>{n?.disconnect();let e=t.contentDocument,i=e?.querySelector(`main`);if(!i)return;let a=()=>{t.contentDocument===e&&i.isConnected&&(t.style.height=`${Math.ceil(i.getBoundingClientRect().height)+40}px`)};n=new ResizeObserver(a),n.observe(i),r(),a()},a=new MutationObserver(r);return a.observe(document.documentElement,{attributes:!0,attributeFilter:[`class`,`data-theme`]}),t.addEventListener(`load`,i),i(),()=>{n?.disconnect(),a.disconnect(),t.removeEventListener(`load`,i)}},[]),(0,w.jsx)(`iframe`,{ref:e,title:`CV Maker workspace`,srcDoc:t,style:{display:`block`,width:`100%`,minHeight:900,border:0}})}var E=`https://lbs.amsertech.com/backend`;function D(e){let t=document.cookie.split(`; `).find(t=>t.startsWith(`${e}=`));return t?decodeURIComponent(t.substring(e.length+1)):null}async function ee(e){return(e.headers.get(`content-type`)||``).includes(`application/json`)?e.json():e.text()}async function O(e,t={}){let n=(t.method||`GET`).toUpperCase(),r={Accept:`application/json`,...t.headers||{}};if(t.body&&!(t.body instanceof FormData)&&(r[`Content-Type`]=`application/json`),![`GET`,`HEAD`,`OPTIONS`].includes(n)){let e=D(`XSRF-TOKEN`);e&&(r[`X-XSRF-TOKEN`]=e)}let i;try{i=await fetch(`${E}${e}`,{...t,method:n,headers:r,credentials:`include`})}catch(e){let t=Error(`Unable to connect to the LBS NurseLink API.`);throw t.original=e,t.code=`network_error`,t}let a=await ee(i);if(!i.ok){let e=Error(a?.message||a?.error||`Request failed with status ${i.status}.`);throw e.status=i.status,e.data=a,e}return a}async function k(){let e;try{e=await fetch(`${E}/sanctum/csrf-cookie`,{method:`GET`,credentials:`include`,headers:{Accept:`application/json`}})}catch(e){let t=Error(`Unable to initialize the secure NurseLink session.`);throw t.original=e,t.code=`csrf_network_error`,t}if(!e.ok)throw Error(`Unable to initialize secure session. Status ${e.status}.`);return!0}async function A(e,t){return await k(),await O(`/login`,{method:`POST`,body:JSON.stringify({email:e,password:t})}),ce()}async function te({name:e,email:t,password:n,password_confirmation:r,terms_accepted:i,privacy_accepted:a}){return await k(),O(`/api/nurselink/register`,{method:`POST`,body:JSON.stringify({name:e,email:t,password:n,password_confirmation:r||n,terms_accepted:i,privacy_accepted:a})})}async function j(){return O(`/api/registration-status`)}async function ne(){return O(`/api/policy-consent`)}async function re(){return O(`/api/policy-consent`,{method:`POST`,body:JSON.stringify({terms_accepted:!0,privacy_accepted:!0})})}async function ie({token:e,email:t,password:n,password_confirmation:r}){return await k(),O(`/reset-password`,{method:`POST`,body:JSON.stringify({token:e,email:t,password:n,password_confirmation:r})})}async function ae(e){return await k(),O(`/forgot-password`,{method:`POST`,body:JSON.stringify({email:e})})}async function oe(){return O(`/api/send-email-link`,{method:`POST`,body:JSON.stringify({})})}async function se(){return await k(),O(`/logout`,{method:`POST`})}async function ce(){return(await O(`/api/me`)).data}async function le(){return(await O(`/api/applications/me`)).data}async function ue(){return(await O(`/api/members/me`)).data}async function de(e){return(await O(`/api/members/me/profile`,{method:`PATCH`,body:JSON.stringify(e)})).data}async function M(){return(await O(`/api/applications`,{method:`POST`})).data}async function fe(e,t){return(await O(`/api/applications/${e}/profile`,{method:`PATCH`,body:JSON.stringify(t)})).data}async function pe(e){return(await O(`/api/applications/${e}/ready`,{method:`POST`})).data}async function me(e){return(await O(`/api/applications/${e}/submit`,{method:`POST`})).data}async function he(e){return(await O(`/api/applications/${e}/resubmit`,{method:`POST`})).data}async function ge(){return O(`/api/smart-registration`)}async function _e(e){await k();let t=new FormData;return t.append(`document`,e),O(`/api/smart-registration/documents`,{method:`POST`,body:t})}async function ve(){return O(`/api/credentials`)}async function ye(){return O(`/api/credentials/dashboard`)}async function be(e){return O(`/api/credentials`,{method:`POST`,body:JSON.stringify(e)})}async function xe(e,t){return O(`/api/credentials/${e}`,{method:`PATCH`,body:JSON.stringify(t)})}async function Se(e){return O(`/api/credentials/${e}`,{method:`DELETE`})}async function Ce(){return O(`/api/documents`)}async function we(e){await k();let t=new FormData;return t.append(`file`,e.file),t.append(`document_type`,e.document_type),e.title&&t.append(`title`,e.title),e.issued_on&&t.append(`issued_on`,e.issued_on),e.expires_on&&t.append(`expires_on`,e.expires_on),O(`/api/documents`,{method:`POST`,body:t})}async function Te(e){return O(`/api/documents/${e}`,{method:`DELETE`})}async function Ee(){return O(`/api/professional-development`)}async function De(e){return O(`/api/professional-development`,{method:`POST`,body:JSON.stringify(e)})}async function Oe(e){return O(`/api/professional-development/${e}`,{method:`DELETE`})}var ke=(0,S.createContext)(null);function Ae({children:e}){let[t,n]=(0,S.useState)(null),[r,i]=(0,S.useState)(!0);async function a(){try{let e=await ce();return n(e),e}catch(e){throw n(null),e}}(0,S.useEffect)(()=>{ce().then(e=>{n(e)}).catch(()=>{n(null)}).finally(()=>{i(!1)})},[]);async function o(e,t){let r=await A(e,t);return n(r),r}async function s(e){await te(e);try{return{user:await a(),requiresVerification:!1}}catch(e){if(e.status===403||e.status===401)return{user:null,requiresVerification:!0};throw e}}async function c(){try{await se()}finally{n(null)}}return(0,w.jsx)(ke.Provider,{value:{user:t,loading:r,authenticated:!!t,login:o,register:s,logout:c,refreshUser:a},children:e})}function je(){let e=(0,S.useContext)(ke);if(!e)throw Error(`useAuth must be used inside AuthProvider`);return e}function Me(){let[e,t]=(0,S.useState)({loading:!0}),[n,r]=(0,S.useState)(0),i=sessionStorage.getItem(`lbs-walk-in-return`)===`1`;(0,S.useEffect)(()=>{let e=new AbortController,n=!1,r=async()=>{if(!(n||document.hidden)){n=!0;try{let n=await O(`/api/lbs-queue`,{signal:e.signal});if(!Array.isArray(n?.data?.tickets))throw Error(`Invalid visit data`);e.signal.aborted||t({data:n.data})}catch{e.signal.aborted||t({error:!0})}finally{n=!1}}};r();let i=setInterval(r,15e3);return document.addEventListener(`visibilitychange`,r),()=>{e.abort(),clearInterval(i),document.removeEventListener(`visibilitychange`,r)}},[n]);let a=e.data,o=a?.tickets.find(e=>e.visit_date===a.today&&[`reserved`,`waiting`,`called`,`serving`,`missed`].includes(e.status))||a?.tickets.find(e=>e.visit_date===a.today),c=a?.counters.find(e=>String(e.id)===String(o?.counter_id))?.name;return(0,w.jsxs)(`section`,{className:`nld-card nld-queue nld-own-visit`,"aria-labelledby":`own-visit-title`,children:[(0,w.jsxs)(`div`,{className:`nld-card-head`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{className:`nld-eyebrow`,children:`YOUR OFFICE VISIT`}),(0,w.jsx)(`h2`,{id:`own-visit-title`,children:`My queue ticket`})]}),(0,w.jsx)(s,{to:`/appointments`,children:`Visit history →`})]}),i&&(!o||o.status===`reserved`)&&(0,w.jsx)(`p`,{className:`lbs-arrival-banner`,children:(0,w.jsx)(`a`,{href:`/lbs-walk-in.html`,children:`Continue your reception QR check-in →`})}),e.loading?(0,w.jsx)(`p`,{role:`status`,children:`Loading your visit…`}):e.error?(0,w.jsxs)(`div`,{role:`status`,children:[(0,w.jsx)(`p`,{children:`Your ticket could not be refreshed.`}),(0,w.jsx)(`button`,{className:`nld-outline`,onClick:()=>r(e=>e+1),children:`Retry my ticket`})]}):o?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`div`,{className:`lbs-own-ticket`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{className:`nld-eyebrow`,children:o.source===`qr_walkin`?`QR WALK-IN`:o.source===`walkin`?`WALK-IN`:`SERVICE VISIT`}),(0,w.jsx)(`strong`,{children:o.number}),(0,w.jsx)(`span`,{children:a.services.find(e=>e.id===o.service_id)?.name||`Service visit`})]}),(0,w.jsxs)(`div`,{"aria-live":`polite`,children:[(0,w.jsx)(`span`,{className:`nld-badge`,children:{reserved:`Awaiting arrival`,waiting:`Waiting`,called:`Called`,serving:`In service`,missed:`Missed call`,completed:`Completed`,cancelled:`Cancelled`,expired:`Expired`}[o.status]||o.status}),(0,w.jsx)(`p`,{children:[`called`,`serving`].includes(o.status)?`Proceed to ${c||`your assigned counter`}.`:o.status===`waiting`?`${o.waiting_ahead??0} waiting ahead for your service.`:o.status===`reserved`?`Check in when you arrive at reception.`:o.status===`missed`?`Please speak with reception to rejoin the queue.`:`This visit is saved in your history.`})]})]}),(0,w.jsxs)(`p`,{className:`nld-queue-updated`,children:[o.visit_date,` · Asia/Manila · updates every 15 seconds`]})]}):(0,w.jsx)(`p`,{className:`nld-state`,children:`No visit today. Scan the QR poster at LBS reception to receive your walk-in ticket.`})]})}var Ne=[[`Personal Information`,`/profile`],[`Educational Attainment`,`/portfolio`],[`Work Experiences`,`/portfolio`],[`Work References`,`/portfolio`],[`Skills & Languages`,`/portfolio`],[`Trainings & Seminars`,`/portfolio`],[`Achievements & Memberships`,`/portfolio`],[`Career Summary`,`/profile`]];function Pe({applications:e,applicationState:t,user:n,photoUrl:r}){let i=e.filter(e=>[`shortlisted`,`interview`,`offer`].includes(e.status));return(0,w.jsxs)(`section`,{className:`nld-card nld-arms`,"aria-labelledby":`arms-applicant-title`,children:[(0,w.jsxs)(`div`,{className:`nld-card-head`,children:[(0,w.jsx)(`h2`,{id:`arms-applicant-title`,children:`LBS applicant workspace`}),(0,w.jsx)(`a`,{href:`/cv-maker`,children:`Open CV maker →`})]}),(0,w.jsx)(`p`,{className:`nld-muted`,children:`Your recruitment records and NurseLink professional services, together.`}),r&&(0,w.jsx)(`img`,{src:r,alt:`Your profile`,width:`80`,height:`80`,style:{borderRadius:`50%`,objectFit:`cover`}}),(0,w.jsxs)(`div`,{className:`nld-applicant-facts`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Applicant name`}),(0,w.jsx)(`strong`,{children:n?.name||`Not available`})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`ARMS control number`}),(0,w.jsx)(`strong`,{children:`Not linked`}),(0,w.jsx)(`small`,{children:`Existing ARMS records require a verified import.`})]})]}),(0,w.jsx)(`h3`,{children:`Line-up status`}),!t||t.loading?(0,w.jsx)(`p`,{role:`status`,children:`Loading recruitment status…`}):t.error?(0,w.jsxs)(`p`,{children:[`Recruitment status is unavailable with your current access. `,(0,w.jsx)(s,{to:`/application-status`,children:`View membership access`})]}):i.length?i.map(e=>(0,w.jsxs)(`div`,{className:`nld-notification`,children:[(0,w.jsx)(`strong`,{children:e.title}),(0,w.jsxs)(`p`,{children:[e.employer_name,` · `,e.status.replace(/_/g,` `)]}),(0,w.jsx)(s,{to:`/applications`,children:`View application →`})]},e.id)):(0,w.jsx)(`p`,{children:`No active line-ups are recorded in NurseLink.`}),(0,w.jsxs)(`details`,{className:`nld-cv-sections`,children:[(0,w.jsx)(`summary`,{children:`Curriculum Vitae · 8 sections`}),(0,w.jsx)(`div`,{className:`nld-services`,children:Ne.map(([e,t])=>(0,w.jsxs)(s,{to:t,children:[(0,w.jsx)(`strong`,{children:e}),(0,w.jsx)(`span`,{children:`Open source records →`})]},e))}),(0,w.jsx)(`p`,{className:`nld-muted`,children:`Work references can be maintained as private portfolio records. Memberships and achievements belong in your professional portfolio.`})]}),(0,w.jsxs)(`div`,{className:`nld-services`,children:[(0,w.jsxs)(s,{to:`/documents`,children:[(0,w.jsx)(`strong`,{children:`My Documents`}),(0,w.jsx)(`span`,{children:`Initial and processing documents →`})]}),(0,w.jsxs)(s,{to:`/messages`,children:[(0,w.jsx)(`strong`,{children:`My Messages`}),(0,w.jsx)(`span`,{children:`Read and manage conversations →`})]}),(0,w.jsxs)(s,{to:`/jobs`,children:[(0,w.jsx)(`strong`,{children:`LBS Vacancies`}),(0,w.jsx)(`span`,{children:`Recommended jobs and vacancy search →`})]}),(0,w.jsxs)(s,{to:`/applications`,children:[(0,w.jsx)(`strong`,{children:`My Applied Jobs`}),(0,w.jsx)(`span`,{children:`Date, position, company and status →`})]})]}),(0,w.jsxs)(`details`,{children:[(0,w.jsx)(`summary`,{children:`Downloadable forms`}),(0,w.jsx)(`div`,{className:`nld-resource-links`,children:[[`LBS Application Form (Medical)`,`LBS_MSD_FORM_2017_LOGO.pdf`],[`LBS Application Form (Engineering & Skills)`,`LBS_ESD_FORM_2017_LOGO.pdf`],[`LBS CV Format Template (Medical)`,`LBS_MSD_CV_FORMAT_2017.doc`],[`LBS CV Format Template (Engineering & Skills)`,`LBS_ESD_CV_FORMAT_2017.DOC`]].map(([e,t])=>(0,w.jsx)(`a`,{href:`https://arms.lbsrecruitment.com.ph/public/docs/new/${t}`,target:`_blank`,rel:`noopener noreferrer`,children:e},t))}),(0,w.jsx)(`p`,{children:`These downloads use the existing LBS ARMS forms.`}),(0,w.jsx)(`a`,{href:`/cv-maker`,children:`Create and save your NurseLink CV as PDF →`})]})]})}var Fe={membership:`/api/membership/me`,applications:`/api/job-applications`,jobs:`/api/job-opportunities`,notifications:`/api/notifications`,photo:`/api/profile-photo`},Ie=e=>String(e||`Not started`).replace(/_/g,` `).replace(/\b\w/g,e=>e.toUpperCase()),Le=e=>Array.isArray(e?.payload?.data)?e.payload.data:[],Re=e=>{if(!e)return null;let t=new Date(e);return Number.isNaN(t.getTime())?null:t.toLocaleDateString(void 0,{month:`short`,day:`numeric`,year:`numeric`})};function ze({state:e,children:t,empty:n,onRetry:r}){return!e||e.loading?(0,w.jsx)(`p`,{className:`nld-state`,role:`status`,children:`Loading your records…`}):e.error?(0,w.jsxs)(`div`,{className:`nld-state`,role:`status`,children:[(0,w.jsx)(`p`,{children:e.status===403?`This service becomes available when your account meets the membership access requirements.`:`This service is temporarily unavailable. Your records have not been changed.`}),e.status===403?(0,w.jsx)(s,{to:`/application-status`,children:`View membership status →`}):(0,w.jsx)(`button`,{type:`button`,onClick:r,children:`Try again`})]}):n?(0,w.jsx)(`p`,{className:`nld-state`,children:n}):t}function Be({refresh:e}){let[t,n]=(0,S.useState)({loading:!0,rows:[]}),[r,i]=(0,S.useState)(0);return(0,S.useEffect)(()=>{let e=new AbortController,t=!1,r=async()=>{if(!(t||document.hidden)){t=!0;try{let t=await O(`/api/lbs-queue/display`,{signal:e.signal});if(!Array.isArray(t?.data))throw Error(`Invalid queue response`);e.signal.aborted||n({loading:!1,rows:t.data,updated:new Date})}catch{e.signal.aborted||n({loading:!1,rows:[],error:!0})}finally{t=!1}}};r();let i=setInterval(r,15e3);return document.addEventListener(`visibilitychange`,r),()=>{e.abort(),clearInterval(i),document.removeEventListener(`visibilitychange`,r)}},[e,r]),(0,w.jsxs)(`section`,{className:`nld-card nld-queue`,"aria-labelledby":`dashboard-queue-title`,children:[(0,w.jsxs)(`div`,{className:`nld-queue-heading`,children:[(0,w.jsx)(`img`,{src:`/backend/api/nurselink/appearance-assets/sidebar-a0b815a2-5936-4745-a66d-b0eb4e1d9c8d.png`,alt:`LBS Recruitment Solutions`}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{className:`nld-eyebrow`,children:`SERVICE QUEUE`}),(0,w.jsx)(`h2`,{id:`dashboard-queue-title`,children:`Now serving`})]})]}),(0,w.jsx)(`p`,{className:`nld-muted`,children:`Follow your ticket number and proceed to the named counter when called.`}),t.loading?(0,w.jsx)(`p`,{role:`status`,children:`Loading the service queue…`}):t.error?(0,w.jsxs)(`div`,{role:`status`,children:[(0,w.jsx)(`p`,{children:`The live queue is temporarily unavailable.`}),(0,w.jsx)(`button`,{type:`button`,className:`nld-outline`,onClick:()=>i(e=>e+1),children:`Retry queue`})]}):(0,w.jsxs)(w.Fragment,{children:[t.rows.length?(0,w.jsx)(`div`,{className:`nld-queue-tickets`,children:t.rows.slice(0,4).map((e,t)=>(0,w.jsxs)(`article`,{children:[(0,w.jsx)(`strong`,{children:e.number}),(0,w.jsx)(`span`,{children:e.counter||`Service counter`}),(0,w.jsx)(`small`,{children:Ie(e.status)})]},`${e.number}-${t}`))}):(0,w.jsx)(`p`,{className:`nld-state`,children:`No active calls. Your ticket will appear here when it is called.`}),(0,w.jsxs)(`p`,{className:`nld-queue-updated`,children:[`Updated `,t.updated?.toLocaleTimeString(),` · refreshes every 15 seconds`,t.rows.length>4&&` · showing 4 of ${t.rows.length} active calls`]})]}),(0,w.jsxs)(`div`,{className:`nld-queue-links`,children:[(0,w.jsx)(s,{className:`nld-outline`,to:`/appointments`,children:`My service visits →`}),(0,w.jsx)(`a`,{href:`/lbs-queue-display.html`,target:`_blank`,rel:`noopener noreferrer`,children:`Open full queue display ↗`})]})]})}function Ve(){let{user:e}=je(),[t,n]=(0,S.useState)({}),[r,i]=(0,S.useState)(0),[a,o]=(0,S.useState)(null);(0,S.useEffect)(()=>{let e=new AbortController;return Object.entries(Fe).forEach(([t,r])=>{n(e=>({...e,[t]:{loading:!0}})),O(r,{signal:e.signal}).then(r=>{e.signal.aborted||n(e=>({...e,[t]:{payload:r}}))}).catch(r=>{e.signal.aborted||n(e=>({...e,[t]:{error:!0,status:r.status}}))})}),()=>e.abort()},[e?.id,r]);let c=t.membership?.payload?.data,l=Le(t.applications),u=Le(t.jobs),d=Le(t.notifications),f=c?.status===`approved`,p=c?.status===`needs_information`,m=[`submitted`,`resubmitted`,`under_review`,`ready_for_approval`].includes(c?.status),h=Math.max(0,Math.min(100,Number(e?.application?.progress_percent)||0)),g=()=>i(e=>e+1),_=c?p?{title:`Your membership application needs an update`,copy:c.reviewer_notes||`Review the information requested by the NurseLink team and update your application.`,to:`/application-status`,action:`Review requested information`}:f?{title:`Take the next step in your nursing career`,copy:`Explore opportunities and keep your professional profile and credentials up to date.`,to:`/jobs`,action:`Explore opportunities`}:m?{title:`Your membership application is with the team`,copy:`Follow your application status and check Messages for any requests from NurseLink.`,to:`/application-status`,action:`Track membership review`}:{title:`Continue your NurseLink membership application`,copy:`Complete your profile, add supporting information and review your application before submission.`,to:`/smart-registration`,action:`Continue registration`}:{title:`Your NurseLink journey, in one place`,copy:`Review your membership progress, career opportunities and member services.`,to:`/application-status`,action:`View membership status`};return(0,w.jsxs)(`div`,{className:`nld-dashboard`,"data-release":`20260925-uiux`,children:[(0,w.jsxs)(`div`,{className:`nld-heading`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{className:`nld-eyebrow`,children:`LBS NURSELINK · MEDICAL SERVICES DIVISION`}),(0,w.jsxs)(`h1`,{children:[`Welcome back, `,e?.name||`Member`,`.`]}),(0,w.jsx)(`p`,{children:`Your applications, documents and next actions, together.`})]}),(0,w.jsx)(`button`,{className:`nld-outline`,type:`button`,onClick:g,disabled:Object.values(t).some(e=>e.loading),children:`Refresh`})]}),(0,w.jsxs)(`section`,{className:`nld-next`,"aria-labelledby":`nld-next-title`,style:{background:`#0d5f9d`,backgroundImage:`linear-gradient(135deg,#1778bd 0%,#0d5f9d 56%,#084775 100%)`,borderColor:`rgba(255,255,255,.18)`,boxShadow:`0 18px 36px rgba(7,57,104,.18)`},children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{className:`nld-eyebrow`,children:`YOUR NEXT STEP`}),(0,w.jsx)(`h2`,{id:`nld-next-title`,children:_.title}),(0,w.jsx)(`p`,{children:_.copy}),(0,w.jsxs)(s,{className:`nld-primary`,to:_.to,children:[_.action,` `,(0,w.jsx)(`span`,{"aria-hidden":`true`,children:`→`})]})]}),(0,w.jsxs)(`div`,{className:`nld-next-side`,children:[(0,w.jsx)(`span`,{className:`nld-label`,children:`Membership`}),(0,w.jsx)(`strong`,{children:c?Ie(c.status):t.membership?.error?`Status unavailable`:`Checking status…`}),(0,w.jsx)(`span`,{children:c?.member_number||`Member number issued after approval`}),(0,w.jsx)(`small`,{children:`Membership and job applications have separate statuses.`})]})]}),(0,w.jsx)(Me,{}),(0,w.jsx)(Be,{refresh:r}),(0,w.jsxs)(`div`,{className:`nld-columns`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsxs)(`section`,{className:`nld-card`,children:[(0,w.jsxs)(`div`,{className:`nld-card-head`,children:[(0,w.jsx)(`h2`,{children:`My job applications`}),(0,w.jsx)(s,{to:`/applications`,children:`View all →`})]}),(0,w.jsx)(ze,{state:t.applications,onRetry:g,empty:!l.length&&`No job applications yet. Browse opportunities when your member access is active.`,children:l.slice(0,3).map(e=>(0,w.jsxs)(`article`,{className:`nld-application`,children:[(0,w.jsxs)(`div`,{className:`nld-row`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h3`,{children:e.title||`Application #${e.id}`}),(0,w.jsx)(`p`,{children:[e.employer_name,e.city,e.country].filter(Boolean).join(` · `)})]}),(0,w.jsx)(`span`,{className:`nld-badge`,children:Ie(e.status)})]}),(0,w.jsxs)(`div`,{className:`nld-row nld-application-footer`,children:[(0,w.jsx)(`small`,{children:Re(e.submitted_at)?`Submitted ${Re(e.submitted_at)}`:`Submission date not available`}),(0,w.jsx)(`button`,{type:`button`,onClick:()=>o(a===e.id?null:e.id),"aria-expanded":a===e.id,"aria-controls":`nld-application-${e.id}`,children:a===e.id?`Hide details`:`View details`})]}),a===e.id&&(0,w.jsxs)(`div`,{className:`nld-details`,id:`nld-application-${e.id}`,children:[(0,w.jsxs)(`dl`,{children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`dt`,{children:`Reference`}),(0,w.jsx)(`dd`,{children:e.reference_code||e.id})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`dt`,{children:`Employment type`}),(0,w.jsx)(`dd`,{children:e.employment_type||`Not specified`})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`dt`,{children:`Specialty`}),(0,w.jsx)(`dd`,{children:e.specialty||`Not specified`})]})]}),e.cover_note&&(0,w.jsx)(`p`,{children:e.cover_note}),(0,w.jsx)(s,{to:`/applications`,children:`Open application workspace →`})]})]},e.id))})]}),(0,w.jsxs)(`section`,{className:`nld-card`,children:[(0,w.jsxs)(`div`,{className:`nld-card-head`,children:[(0,w.jsx)(`h2`,{children:`Appointments & interviews`}),(0,w.jsx)(s,{to:`/appointments`,children:`View appointments →`})]}),(0,w.jsx)(`p`,{className:`nld-muted`,children:`Check interview schedules linked to your job applications. Manage responses in your application workspace.`})]}),(0,w.jsxs)(`section`,{className:`nld-card`,children:[(0,w.jsxs)(`div`,{className:`nld-card-head`,children:[(0,w.jsx)(`h2`,{children:`Your professional profile`}),(0,w.jsx)(s,{to:`/profile`,children:`Update profile →`})]}),(0,w.jsx)(`p`,{className:`nld-muted`,children:`Keep your clinical experience, qualifications and supporting records current.`}),(0,w.jsxs)(`div`,{className:`nld-services`,children:[(0,w.jsxs)(s,{to:`/portfolio`,children:[(0,w.jsx)(`strong`,{children:`Professional portfolio`}),(0,w.jsx)(`span`,{children:`Experience and achievements →`})]}),(0,w.jsxs)(`a`,{href:`/cv-maker`,children:[(0,w.jsx)(`strong`,{children:`CV maker`}),(0,w.jsx)(`span`,{children:`Build from your profile →`})]}),(0,w.jsxs)(s,{to:`/credentials`,children:[(0,w.jsx)(`strong`,{children:`Credentials`}),(0,w.jsx)(`span`,{children:`Licenses and supporting records →`})]}),(0,w.jsxs)(s,{to:`/documents`,children:[(0,w.jsx)(`strong`,{children:`Documents`}),(0,w.jsx)(`span`,{children:`Manage your supporting files →`})]})]})]}),(0,w.jsxs)(`section`,{className:`nld-card`,children:[(0,w.jsxs)(`div`,{className:`nld-card-head`,children:[(0,w.jsx)(`h2`,{children:`Current job opportunities`}),(0,w.jsx)(s,{to:`/jobs`,children:`Browse jobs →`})]}),(0,w.jsx)(ze,{state:t.jobs,onRetry:g,empty:!u.length&&`No opportunities are available right now. Check back for new listings.`,children:(0,w.jsx)(`div`,{className:`nld-jobs`,children:u.slice(0,2).map(e=>(0,w.jsxs)(`article`,{children:[(0,w.jsx)(`span`,{className:`nld-eyebrow`,children:e.specialty||`NURSING OPPORTUNITY`}),(0,w.jsx)(`h3`,{children:e.title}),(0,w.jsx)(`p`,{children:[e.employer_name,e.country].filter(Boolean).join(` · `)}),e.employment_type&&(0,w.jsx)(`span`,{className:`nld-badge`,children:Ie(e.employment_type)}),(0,w.jsx)(s,{to:`/jobs`,children:`View opportunities →`})]},e.id))})})]}),(0,w.jsxs)(`details`,{className:`lbs-dashboard-extra`,children:[(0,w.jsx)(`summary`,{children:`Additional applicant tools & LBS forms`}),(0,w.jsx)(Pe,{applications:l,applicationState:t.applications,user:e,photoUrl:t.photo?.payload?.data?.profile_photo_url})]})]}),(0,w.jsxs)(`aside`,{children:[(0,w.jsxs)(`section`,{className:`nld-card`,children:[(0,w.jsx)(`div`,{className:`nld-card-head`,children:(0,w.jsx)(`h2`,{children:`NurseLink membership`})}),(0,w.jsxs)(ze,{state:t.membership,onRetry:g,children:[(0,w.jsx)(`span`,{className:`nld-badge`,children:Ie(c?.status)}),(0,w.jsx)(`p`,{className:`nld-muted`,children:f?`Standing: ${c?.standing_label||Ie(c?.standing)}`:`Complete your registration and track the team’s review.`}),!f&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`div`,{className:`nld-progress`,role:`progressbar`,"aria-label":`Membership application completion`,"aria-valuenow":h,"aria-valuemin":0,"aria-valuemax":100,children:(0,w.jsx)(`span`,{style:{width:`${h}%`}})}),(0,w.jsxs)(`small`,{children:[h,`% registration completion`]})]}),(0,w.jsx)(s,{className:`nld-outline`,to:`/application-status`,children:`View membership progress →`})]})]}),(0,w.jsxs)(`section`,{className:`nld-card`,children:[(0,w.jsxs)(`div`,{className:`nld-card-head`,children:[(0,w.jsx)(`h2`,{children:`Recent notifications`}),(0,w.jsx)(s,{to:`/notifications`,children:`View all →`})]}),(0,w.jsx)(ze,{state:t.notifications,onRetry:g,empty:!d.length&&`No notifications yet. Updates from NurseLink will appear here.`,children:d.slice(0,3).map(e=>(0,w.jsxs)(`div`,{className:`nld-notification`,children:[(0,w.jsx)(`strong`,{children:e.title||`NurseLink update`}),(0,w.jsx)(`p`,{children:e.message}),(0,w.jsx)(`small`,{children:Re(e.created_at)})]},e.id))}),(0,w.jsx)(s,{className:`nld-outline`,to:`/messages`,children:`Open messages →`})]}),(0,w.jsxs)(`section`,{className:`nld-card`,children:[(0,w.jsx)(`h2`,{children:`Grow with NurseLink`}),(0,w.jsxs)(`div`,{className:`nld-resource-links`,children:[(0,w.jsxs)(s,{to:`/learning`,children:[(0,w.jsx)(`strong`,{children:`Learning`}),(0,w.jsx)(`span`,{children:`Professional development →`})]}),(0,w.jsxs)(s,{to:`/mentoring`,children:[(0,w.jsx)(`strong`,{children:`Mentoring`}),(0,w.jsx)(`span`,{children:`Career guidance and peer support →`})]}),(0,w.jsxs)(s,{to:`/events`,children:[(0,w.jsx)(`strong`,{children:`Events & community`}),(0,w.jsx)(`span`,{children:`Connect with your network →`})]}),(0,w.jsxs)(s,{to:`/digital-member-id`,children:[(0,w.jsx)(`strong`,{children:`Digital member ID`}),(0,w.jsx)(`span`,{children:`Your membership identity →`})]})]})]}),(0,w.jsxs)(`section`,{className:`nld-support`,children:[(0,w.jsx)(`span`,{className:`nld-eyebrow`,children:`HERE TO HELP`}),(0,w.jsx)(`h2`,{children:`Support, wherever you are`}),(0,w.jsx)(`p`,{children:`Reach the NurseLink team for questions and welfare assistance.`}),(0,w.jsx)(s,{to:`/help`,children:`Open help & support →`})]})]})]})]})}var N=e({APPLICATION_STAGES:()=>Ue,ApplicationApi:()=>Qe,CredentialApi:()=>$e,EventsApi:()=>nt,JobApi:()=>F,MembershipApi:()=>it,MentoringApi:()=>rt,NL_PHASE2_FINAL_VERSION:()=>He,NotificationApi:()=>tt,QualificationApi:()=>et,ROUTES:()=>We,applicationProgress:()=>Ye,applicationStageIndex:()=>Je,computeProfileCompletion:()=>Xe,createPhase2Snapshot:()=>at,installUnsavedChangesGuard:()=>Ze,normalizeApplicationStage:()=>qe}),He=`3.0.0`,Ue=[`Submitted`,`Under Review`,`Needs Information`,`Ready for Approval`,`Approved`],We={application_get:`/api/applications/me`,application_create:`/api/applications`,application_profile:`/api/applications/{application}/profile`,application_ready:`/api/applications/{application}/ready`,application_submit:`/api/applications/{application}/submit`,application_resubmit:`/api/applications/{application}/resubmit`,application_documents:`/api/applications/{application}/documents`,application_missing_refresh:`/api/applications/{application}/missing-fields/refresh`,credentials_dashboard:`/api/credentials/dashboard`,credentials:`/api/credentials`,credential_update:`/api/credentials/{credential}`,credential_documents:`/api/credentials/{credential}/documents`,qualification_frameworks:`/api/qualification-frameworks`,qualification_assessments:`/api/qualification-assessments`,jobs:`/api/job-opportunities`,job_applications:`/api/job-applications`,job_withdraw:`/api/job-applications/{id}/withdraw`,notifications:`/api/notifications`,notification_read:`/api/notifications/{id}/read`,notifications_read_all:`/api/notifications/read-all`,events:`/api/events`,event_register:`/api/events/{event}/register`,event_cancel:`/api/event-registrations/{registration}/cancel`,mentoring_profile:`/api/mentoring/profile`,mentoring_directory:`/api/mentoring/directory`,mentoring_requests:`/api/mentoring/requests`,membership_me:`/api/membership/me`,membership_onboarding:`/api/membership/onboarding`,membership_onboarding_progress:`/api/membership/onboarding/progress`,session_bootstrap:`/api/nurselink/session-bootstrap`,session_login:`/api/nurselink/session-login`};function Ge(){return String(window.NURSELINK_API_BASE||window.NurseLinkConfig?.apiBase||window.NL_API_BASE||`https://lbs.amsertech.com/backend`).replace(/\/+$/,``)}function Ke(e,t={}){let n=We[e];if(!n)throw Error(`Unknown NurseLink Phase 2 route: ${e}`);return Object.entries(t).reduce((e,[t,n])=>e.replace(`{${t}}`,encodeURIComponent(String(n))),n)}async function P(e,{method:t=`GET`,params:n={},body:r,formData:i,headers:a={}}={}){let o={method:t,credentials:`include`,headers:{Accept:`application/json`,...a}};i?o.body=i:r!==void 0&&(o.headers[`Content-Type`]=`application/json`,o.body=JSON.stringify(r));let s=await fetch(Ge()+Ke(e,n),o),c=(s.headers.get(`content-type`)||``).includes(`application/json`)?await s.json():await s.text();if(!s.ok){let e=Error(c?.message||c?.error||`NurseLink request failed (${s.status})`);throw e.status=s.status,e.payload=c,e}return c}function qe(e){return{submitted:`Submitted`,"under review":`Under Review`,review:`Under Review`,returned:`Needs Information`,"needs information":`Needs Information`,"needs info":`Needs Information`,ready:`Ready for Approval`,"ready for approval":`Ready for Approval`,approved:`Approved`}[String(e||``).trim().toLowerCase().replace(/[_-]+/g,` `)]||`Submitted`}function Je(e){return Math.max(0,Ue.indexOf(qe(e)))}function Ye(e){let t=Je(e);return Math.round((t+1)/Ue.length*100)}function Xe(e={}){let t=[`first_name`,`last_name`,`phone`,`country`,`professional_title`,`years_experience`,`primary_license_number`],n=t.filter(t=>{let n=e?.[t];return n!=null&&String(n).trim()!==``}).length;return Math.round(n/t.length*100)}function Ze(e){let t=t=>{e()&&(t.preventDefault(),t.returnValue=``)};return window.addEventListener(`beforeunload`,t),()=>window.removeEventListener(`beforeunload`,t)}var Qe={get:()=>P(`application_get`),create:(e={})=>P(`application_create`,{method:`POST`,body:e}),updateProfile:(e,t)=>P(`application_profile`,{method:`PATCH`,params:{application:e},body:t}),ready:e=>P(`application_ready`,{method:`POST`,params:{application:e}}),submit:e=>P(`application_submit`,{method:`POST`,params:{application:e}}),resubmit:e=>P(`application_resubmit`,{method:`POST`,params:{application:e}}),uploadDocument:(e,t,n=`other`)=>{let r=new FormData;return r.append(`file`,t),r.append(`category`,n),P(`application_documents`,{method:`POST`,params:{application:e},formData:r})},refreshMissing:e=>P(`application_missing_refresh`,{method:`POST`,params:{application:e}})},$e={dashboard:()=>P(`credentials_dashboard`),list:()=>P(`credentials`),create:e=>P(`credentials`,{method:`POST`,body:e}),update:(e,t)=>P(`credential_update`,{method:`PATCH`,params:{credential:e},body:t}),linkDocument:(e,t)=>P(`credential_documents`,{method:`POST`,params:{credential:e},body:t})},et={frameworks:()=>P(`qualification_frameworks`),assessments:()=>P(`qualification_assessments`),createAssessment:e=>P(`qualification_assessments`,{method:`POST`,body:e})},F={opportunities:()=>P(`jobs`),applications:()=>P(`job_applications`),apply:e=>P(`job_applications`,{method:`POST`,body:e}),withdraw:e=>P(`job_withdraw`,{method:`PATCH`,params:{id:e}})},tt={list:()=>P(`notifications`),markRead:e=>P(`notification_read`,{method:`PATCH`,params:{id:e}}),markAllRead:()=>P(`notifications_read_all`,{method:`POST`})},nt={list:()=>P(`events`),register:e=>P(`event_register`,{method:`POST`,params:{event:e}}),cancel:e=>P(`event_cancel`,{method:`POST`,params:{registration:e}})},rt={profile:()=>P(`mentoring_profile`),directory:()=>P(`mentoring_directory`),requests:()=>P(`mentoring_requests`),sendRequest:e=>P(`mentoring_requests`,{method:`POST`,body:e})},it={me:()=>P(`membership_me`),onboarding:()=>P(`membership_onboarding`),markOnboardingProgress:e=>P(`membership_onboarding_progress`,{method:`POST`,body:e})};function at({application:e,profile:t,credentials:n,notifications:r,jobs:i}={}){return{version:He,generated_at:new Date().toISOString(),application_stage:qe(e?.status||e?.stage),application_progress:Ye(e?.status||e?.stage),profile_completion:Xe(t),credential_count:Array.isArray(n)?n.length:0,unread_notifications:Array.isArray(r)?r.filter(e=>!e?.read_at).length:0,job_application_count:Array.isArray(i)?i.length:0}}var ot=`https://lbs.amsertech.com/backend`,st={assisted:`7,125`,resolved:`3,482`,responseTime:`2.6 hrs`,assistance:`₱128.6M`},ct=[{type:`ADVISORY`,title:`Middle East Situation Update`,body:`NurseLink welfare monitoring remains ready to surface verified official advisories and assistance information.`,date:`Demo`},{type:`NEWS`,title:`AKSYON Fund Assistance Information`,body:`Review eligibility, documentary requirements and official DMW channels before relying on assistance figures or program rules.`,date:`Demo`},{type:`REMINDER`,title:`Keep travel and employment documents accessible`,body:`Maintain secure copies of your passport, visa, contract, IDs and emergency contacts.`,date:`Demo`}],lt=[`Abuse, Harassment & Exploitation`,`Passport, Documents & Visa Issues`,`Salary, Benefits & Contract Issues`,`Illegal Recruitment & Trafficking`,`Missing Persons & Lost Contact`,`Health, Medical & Insurance Issues`],ut=[[`AKSYON Fund`,`Financial assistance information for OFWs in distress`],[`Reintegration & Livelihood`,`Support pathways for reintegration and livelihood`],[`Legal Assistance`,`Guidance and referral for legal concerns`],[`Education & Scholarship`,`Programs for eligible OFWs and dependents`]],dt=[[`crisis`,`Report a Crisis / Incident`,`Start a confidential incident report`],[`location`,`Find Help Near You`,`Embassies, shelters and partner support`],[`travel`,`Travel & Repatriation Help`,`Assistance with safe return and travel`],[`money`,`Financial Assistance`,`Programs and eligibility information`],[`legal`,`Legal Assistance`,`Know your rights and available referrals`],[`mental`,`Mental Health Support`,`Counselling and psychosocial resources`]];function ft({name:e}){let t={crisis:[`M12 3 2.8 20h18.4L12 3Z`,`M12 9v4`,`M12 17h.01`],location:[`M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z`,`M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z`],travel:[`M3 12h18`,`m14 7 5 5-5 5`,`M6 5v14`],money:[`M3 6h18v12H3z`,`M7 12h10`,`M12 9v6`],legal:[`M12 3v18`,`M5 7h14`,`M7 7l-3 6h6L7 7Z`,`M17 7l-3 6h6l-3-6Z`],mental:[`M9 4a4 4 0 0 0-4 4v2a4 4 0 0 0 2 3.5V20h5v-5`,`M15 4a4 4 0 0 1 4 4v2a4 4 0 0 1-2 3.5V20h-5`],people:[`M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z`,`M16 11a3 3 0 1 0 0-6`,`M3 20a5 5 0 0 1 10 0`,`M13 20a5 5 0 0 1 8-4`],check:[`M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z`,`m8 12 2.5 2.5L16 9`],clock:[`M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z`,`M12 7v5l3 2`],heart:[`M12 20S4 15 4 9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 6-6 11-6 11Z`],phone:[`M6 3h4l2 5-3 2a15 15 0 0 0 5 5l2-3 5 2v4c0 1-1 2-2 2A17 17 0 0 1 4 5c0-1 1-2 2-2Z`],shield:[`M12 3 20 6v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z`,`m9 12 2 2 4-5`],bell:[`M6 9a6 6 0 0 1 12 0v5l2 3H4l2-3z`,`M10 20h4`]};return(0,w.jsx)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(t[e]||t.shield).map(e=>(0,w.jsx)(`path`,{d:e},e))})}function pt(e){return Array.isArray(e)?e:Array.isArray(e?.data)?e.data:Array.isArray(e?.alerts)?e.alerts:Array.isArray(e?.updates)?e.updates:Array.isArray(e?.locations)?e.locations:[]}function mt(){let[e,t]=(0,S.useState)(null),[n,r]=(0,S.useState)([]),[i,a]=(0,S.useState)([]),[o,s]=(0,S.useState)([]),[c,l]=(0,S.useState)(`seeded-demo`),[u,d]=(0,S.useState)(!1),[f,p]=(0,S.useState)(1),[m,h]=(0,S.useState)({type:``,country:``,date:``,description:``,contact:``}),[g,_]=(0,S.useState)(!1),[v,y]=(0,S.useState)(``);(0,S.useEffect)(()=>{let e=!0;async function n(e){let t=await fetch(`${ot}${e}`,{credentials:`include`,headers:{Accept:`application/json`}});if(!t.ok)throw Error(`HTTP ${t.status}`);return t.json()}return Promise.allSettled([n(`/api/welfare/overview`),n(`/api/welfare/alerts`),n(`/api/welfare/crisis-updates`),n(`/api/welfare/safe-locations`)]).then(n=>{if(!e)return;let[i,o,c,u]=n;i.status===`fulfilled`&&t(i.value?.data||i.value),o.status===`fulfilled`&&r(pt(o.value)),c.status===`fulfilled`&&a(pt(c.value)),u.status===`fulfilled`&&s(pt(u.value));let d=n.some(e=>e.status===`fulfilled`);l(d?`live`:`seeded-demo`)}),()=>{e=!1}},[]);let b=(0,S.useMemo)(()=>({assisted:e?.assisted??e?.members_assisted??st.assisted,resolved:e?.resolved??e?.cases_resolved??st.resolved,responseTime:e?.average_response_time??e?.response_time??st.responseTime,assistance:e?.assistance_provided??e?.assistance_amount??st.assistance}),[e]),x=i.length?i.slice(0,3).map((e,t)=>({type:e.type||e.category||`UPDATE`,title:e.title||e.name||`Crisis update ${t+1}`,body:e.message||e.summary||e.description||`Open for details.`,date:e.published_at||e.updated_at||``})):ct;async function C(){if(window.confirm(`Send an urgent NurseLink welfare alert? Use only when immediate assistance is needed.`)){_(!0),y(``);try{let e=await fetch(`${ot}/api/welfare/panic-alerts`,{method:`POST`,credentials:`include`,headers:{Accept:`application/json`,"Content-Type":`application/json`},body:JSON.stringify({source:`member_welfare_page`,message:`Member requested urgent welfare assistance.`})});if(!e.ok)throw Error(`HTTP ${e.status}`);y(`Urgent alert sent. Keep your phone available for follow-up.`)}catch{y(`The online alert could not be confirmed. Use an official emergency or welfare contact channel immediately.`)}finally{_(!1)}}}function T(e){if(e.preventDefault(),f<3){p(f+1);return}d(!1),p(1),h({type:``,country:``,date:``,description:``,contact:``}),window.alert(`Demo report captured in the page preview. A production case-submission API must be connected before this form is used for official reporting.`)}return(0,w.jsxs)(`main`,{className:`nwc-page`,"data-nurselink-page":`welfare-crisis-canonical-v6490`,children:[(0,w.jsxs)(`header`,{className:`nwc-heading`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h1`,{children:`Welfare & Crisis Support`}),(0,w.jsx)(`p`,{children:`You are not alone. Get help, guidance, and support wherever you are.`})]}),(0,w.jsxs)(`div`,{className:`nwc-source ${c===`live`?`is-live`:``}`,children:[(0,w.jsx)(`span`,{}),c===`live`?`Live welfare services`:`Seeded demo mode`]})]}),(0,w.jsxs)(`section`,{className:`nwc-top-grid`,children:[(0,w.jsxs)(`article`,{className:`nwc-emergency`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:`IN AN EMERGENCY? Get immediate help now.`}),(0,w.jsx)(`p`,{children:`If you are in danger or need urgent assistance, use the competent local emergency service and official government welfare channels.`}),(0,w.jsxs)(`div`,{className:`nwc-hotline`,children:[(0,w.jsx)(ft,{name:`phone`}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`b`,{children:`1348`}),(0,w.jsx)(`span`,{children:`DMW hotline reference`}),(0,w.jsx)(`small`,{children:`Availability and dialing rules must be confirmed from official DMW information.`})]})]}),(0,w.jsxs)(`div`,{className:`nwc-emergency-actions`,children:[(0,w.jsxs)(`button`,{type:`button`,onClick:C,disabled:g,children:[(0,w.jsx)(ft,{name:`bell`}),g?`Sending…`:`Send Urgent NurseLink Alert`]}),(0,w.jsx)(`button`,{type:`button`,className:`secondary`,onClick:()=>d(!0),children:`Report Crisis / Incident`})]}),v&&(0,w.jsx)(`div`,{className:`nwc-panic-result`,children:v})]}),(0,w.jsxs)(`div`,{className:`nwc-emergency-art`,"aria-hidden":`true`,children:[(0,w.jsx)(`div`,{className:`headset`,children:`☎`}),(0,w.jsx)(`div`,{className:`shield`,children:`+`})]})]}),(0,w.jsxs)(`article`,{className:`nwc-card nwc-quick`,children:[(0,w.jsx)(`div`,{className:`nwc-card-title`,children:(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`SUPPORT TOOLS`}),(0,w.jsx)(`h2`,{children:`Quick Access`})]})}),(0,w.jsx)(`div`,{className:`nwc-quick-grid`,children:dt.map(([e,t,n])=>(0,w.jsxs)(`button`,{type:`button`,onClick:()=>t.startsWith(`Report`)&&d(!0),children:[(0,w.jsx)(`i`,{children:(0,w.jsx)(ft,{name:e})}),(0,w.jsxs)(`span`,{children:[(0,w.jsx)(`strong`,{children:t}),(0,w.jsx)(`small`,{children:n})]})]},t))})]})]}),(0,w.jsxs)(`section`,{className:`nwc-overview`,children:[(0,w.jsx)(`h2`,{children:`Welfare Support Overview`}),(0,w.jsxs)(`div`,{className:`nwc-stats`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`i`,{children:(0,w.jsx)(ft,{name:`people`})}),(0,w.jsx)(`strong`,{children:b.assisted}),(0,w.jsx)(`span`,{children:`OFWs / Members Assisted`}),(0,w.jsx)(`small`,{children:c===`live`?`Live overview data`:`Illustrative demo metric`})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`i`,{children:(0,w.jsx)(ft,{name:`check`})}),(0,w.jsx)(`strong`,{children:b.resolved}),(0,w.jsx)(`span`,{children:`Cases Resolved`}),(0,w.jsx)(`small`,{children:c===`live`?`Live overview data`:`Illustrative demo metric`})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`i`,{children:(0,w.jsx)(ft,{name:`clock`})}),(0,w.jsx)(`strong`,{children:b.responseTime}),(0,w.jsx)(`span`,{children:`Average Response Time`}),(0,w.jsx)(`small`,{children:c===`live`?`Live overview data`:`Illustrative demo metric`})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`i`,{children:(0,w.jsx)(ft,{name:`heart`})}),(0,w.jsx)(`strong`,{children:b.assistance}),(0,w.jsx)(`span`,{children:`Assistance Provided`}),(0,w.jsx)(`small`,{children:c===`live`?`Live overview data`:`Illustrative demo metric`})]})]})]}),(0,w.jsxs)(`section`,{className:`nwc-main-grid`,children:[(0,w.jsxs)(`article`,{className:`nwc-card`,children:[(0,w.jsx)(`div`,{className:`nwc-card-title`,children:(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`HELP TOPICS`}),(0,w.jsx)(`h2`,{children:`Common Concerns`})]})}),(0,w.jsx)(`div`,{className:`nwc-concerns`,children:lt.map((e,t)=>(0,w.jsxs)(`button`,{type:`button`,children:[(0,w.jsx)(`i`,{children:t+1}),(0,w.jsx)(`span`,{children:e})]},e))})]}),(0,w.jsxs)(`article`,{className:`nwc-card`,children:[(0,w.jsxs)(`div`,{className:`nwc-card-title`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`VERIFIED INFORMATION`}),(0,w.jsx)(`h2`,{children:`Latest Announcements`})]}),(0,w.jsx)(`button`,{type:`button`,children:`View all`})]}),(0,w.jsx)(`div`,{className:`nwc-announcements`,children:x.map((e,t)=>(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`b`,{className:`t${t%3}`,children:e.type}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`strong`,{children:e.title}),(0,w.jsx)(`p`,{children:e.body}),(0,w.jsx)(`small`,{children:e.date})]})]},e.title+t))})]}),(0,w.jsxs)(`article`,{className:`nwc-card`,children:[(0,w.jsxs)(`div`,{className:`nwc-card-title`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`ASSISTANCE`}),(0,w.jsx)(`h2`,{children:`Programs & Assistance`})]}),(0,w.jsx)(`button`,{type:`button`,children:`View all`})]}),(0,w.jsx)(`div`,{className:`nwc-programs`,children:ut.map(([e,t],n)=>(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`i`,{children:(0,w.jsx)(ft,{name:[`money`,`travel`,`legal`,`people`][n]})}),(0,w.jsxs)(`span`,{children:[(0,w.jsx)(`strong`,{children:e}),(0,w.jsx)(`small`,{children:t})]}),(0,w.jsx)(`b`,{children:`Active`})]},e))})]})]}),(0,w.jsxs)(`section`,{className:`nwc-support-grid`,children:[(0,w.jsxs)(`article`,{className:`nwc-card`,children:[(0,w.jsx)(`div`,{className:`nwc-card-title`,children:(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`SAFETY`}),(0,w.jsx)(`h2`,{children:`Safety Reminders`})]})}),(0,w.jsxs)(`ul`,{children:[(0,w.jsx)(`li`,{children:`Share your location with someone you trust when appropriate.`}),(0,w.jsx)(`li`,{children:`Keep secure copies of important travel and employment documents.`}),(0,w.jsx)(`li`,{children:`Verify emergency numbers and official contacts for your current country.`}),(0,w.jsx)(`li`,{children:`Do not rely on unverified social media posts during a crisis.`})]})]}),(0,w.jsxs)(`article`,{className:`nwc-card`,children:[(0,w.jsxs)(`div`,{className:`nwc-card-title`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`NEARBY SUPPORT`}),(0,w.jsx)(`h2`,{children:`Safe Locations`})]}),(0,w.jsx)(`b`,{children:o.length||`Demo`})]}),(0,w.jsx)(`p`,{className:`nwc-muted`,children:o.length?`Safe-location records are available from the live welfare service.`:`Seeded mode: connect verified embassy, shelter, hospital and partner-location records here.`}),(0,w.jsx)(`button`,{className:`nwc-outline`,type:`button`,children:`Find Help Near You`})]}),(0,w.jsxs)(`article`,{className:`nwc-card`,children:[(0,w.jsxs)(`div`,{className:`nwc-card-title`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`ACTIVE SIGNALS`}),(0,w.jsx)(`h2`,{children:`Crisis Alerts`})]}),(0,w.jsx)(`b`,{children:n.length})]}),(0,w.jsx)(`p`,{className:`nwc-muted`,children:n.length?`Active welfare alerts are available for your account.`:`No live member alerts were returned. Continue to monitor verified official advisories.`})]})]}),(0,w.jsxs)(`div`,{className:`nwc-disclaimer`,children:[(0,w.jsx)(ft,{name:`shield`}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:`Important`}),(0,w.jsx)(`p`,{children:`Welfare information in seeded demo mode is illustrative. Emergency numbers, assistance eligibility, program amounts, government advisories and contact channels can change. Confirm critical information with the competent authority before acting.`})]})]}),u&&(0,w.jsx)(`div`,{className:`nwc-modal-backdrop`,onClick:()=>d(!1),children:(0,w.jsxs)(`form`,{className:`nwc-modal`,onSubmit:T,onClick:e=>e.stopPropagation(),children:[(0,w.jsx)(`button`,{type:`button`,className:`close`,onClick:()=>d(!1),children:`×`}),(0,w.jsx)(`span`,{children:`CONFIDENTIAL SUPPORT INTAKE • DEMO`}),(0,w.jsx)(`h2`,{children:`Report a Crisis / Incident`}),(0,w.jsx)(`p`,{children:`This interface demonstrates the intended intake workflow. It does not submit an official welfare case until a production case API is connected.`}),(0,w.jsxs)(`div`,{className:`nwc-stepper`,children:[(0,w.jsx)(`b`,{className:f>=1?`on`:``,children:`1 Incident`}),(0,w.jsx)(`b`,{className:f>=2?`on`:``,children:`2 Contact`}),(0,w.jsx)(`b`,{className:f>=3?`on`:``,children:`3 Review`})]}),f===1&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`label`,{children:[`Type of incident`,(0,w.jsxs)(`select`,{required:!0,value:m.type,onChange:e=>h({...m,type:e.target.value}),children:[(0,w.jsx)(`option`,{value:``,children:`Select incident type`}),lt.map(e=>(0,w.jsx)(`option`,{children:e},e))]})]}),(0,w.jsxs)(`label`,{children:[`Country / location`,(0,w.jsx)(`input`,{required:!0,value:m.country,onChange:e=>h({...m,country:e.target.value}),placeholder:`Country or location`})]}),(0,w.jsxs)(`label`,{children:[`Date of incident`,(0,w.jsx)(`input`,{type:`date`,value:m.date,onChange:e=>h({...m,date:e.target.value})})]}),(0,w.jsxs)(`label`,{children:[`Description`,(0,w.jsx)(`textarea`,{required:!0,maxLength:`1000`,value:m.description,onChange:e=>h({...m,description:e.target.value}),placeholder:`Describe what happened and what help is needed.`})]})]}),f===2&&(0,w.jsxs)(`label`,{children:[`Preferred contact information`,(0,w.jsx)(`input`,{required:!0,value:m.contact,onChange:e=>h({...m,contact:e.target.value}),placeholder:`Phone, email, or secure contact method`})]}),f===3&&(0,w.jsxs)(`div`,{className:`nwc-review`,children:[(0,w.jsx)(`strong`,{children:`Review demo report`}),(0,w.jsxs)(`p`,{children:[(0,w.jsx)(`b`,{children:`Incident:`}),` `,m.type]}),(0,w.jsxs)(`p`,{children:[(0,w.jsx)(`b`,{children:`Location:`}),` `,m.country]}),(0,w.jsxs)(`p`,{children:[(0,w.jsx)(`b`,{children:`Description:`}),` `,m.description]}),(0,w.jsxs)(`p`,{children:[(0,w.jsx)(`b`,{children:`Contact:`}),` `,m.contact]})]}),(0,w.jsxs)(`div`,{className:`nwc-modal-actions`,children:[f>1&&(0,w.jsx)(`button`,{type:`button`,className:`secondary`,onClick:()=>p(f-1),children:`Back`}),(0,w.jsx)(`button`,{type:`submit`,children:f<3?`Next`:`Finish Demo`})]})]})})]})}function ht(e){if(!e)return``;let t=new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleDateString()}function I(e){return e?String(e).replaceAll(`_`,` `).replace(/\b\w/g,e=>e.toUpperCase()):`Published`}function gt(e){return Array.isArray(e)?e:[]}function _t({value:e}){let t=Math.max(0,Math.min(100,Number(e)||0));return(0,w.jsx)(`div`,{className:`p7-progress`,"aria-label":`Progress ${t}%`,children:(0,w.jsx)(`span`,{style:{width:`${t}%`}})})}function vt({children:e}){return(0,w.jsx)(`div`,{className:`p7-empty`,children:e})}function yt({eyebrow:e,title:t,intro:n,children:r,count:i,onRefresh:a,loading:o}){return(0,w.jsxs)(`div`,{className:`p7-member-page`,children:[(0,w.jsxs)(`section`,{className:`p7-hero`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{className:`p7-eyebrow`,children:e}),(0,w.jsx)(`h1`,{children:t}),(0,w.jsx)(`p`,{children:n})]}),(0,w.jsxs)(`div`,{className:`p7-hero-actions`,children:[(0,w.jsxs)(`div`,{className:`p7-count`,children:[(0,w.jsx)(`strong`,{children:i}),(0,w.jsx)(`span`,{children:`Published`})]}),(0,w.jsx)(`button`,{type:`button`,className:`p7-secondary`,onClick:a,disabled:o,children:o?`Refreshing…`:`Refresh`})]})]}),r]})}function bt(){let[e,t]=(0,S.useState)([]),[n,r]=(0,S.useState)(null),[i,a]=(0,S.useState)(null),[o,s]=(0,S.useState)(!0),[c,l]=(0,S.useState)(!1),[u,d]=(0,S.useState)(``),[f,p]=(0,S.useState)(`all`);async function m(){s(!0),d(``);try{let e=await O(`/api/organization/initiatives`);t(gt(e?.data))}catch(e){d(e?.message||`Unable to load programs and initiatives.`)}finally{s(!1)}}async function h(e){a(e),l(!0),d(``);try{let t=await O(`/api/organization/initiatives/${e}`);r(t||null)}catch(e){d(e?.message||`Unable to load initiative details.`)}finally{l(!1)}}(0,S.useEffect)(()=>{m()},[]);let g=(0,S.useMemo)(()=>[...new Set(e.map(e=>e.status).filter(Boolean))],[e]),_=(0,S.useMemo)(()=>f===`all`?e:e.filter(e=>e.status===f),[e,f]);return(0,w.jsxs)(yt,{eyebrow:`PROGRAMS & PROJECTS`,title:`Programs & Initiatives`,intro:`Follow NurseLink programs, projects, milestones, partners, beneficiary activities and published progress updates.`,count:e.length,onRefresh:m,loading:o,children:[u&&(0,w.jsx)(`div`,{className:`p7-message p7-error`,children:u}),(0,w.jsx)(`section`,{className:`p7-toolbar`,children:(0,w.jsxs)(`label`,{children:[(0,w.jsx)(`span`,{children:`Status`}),(0,w.jsxs)(`select`,{value:f,onChange:e=>p(e.target.value),children:[(0,w.jsx)(`option`,{value:`all`,children:`All published`}),g.map(e=>(0,w.jsx)(`option`,{value:e,children:I(e)},e))]})]})}),(0,w.jsxs)(`section`,{className:`p7-layout`,children:[(0,w.jsxs)(`div`,{className:`p7-list`,children:[o&&(0,w.jsx)(vt,{children:`Loading published programs…`}),!o&&!_.length&&(0,w.jsx)(vt,{children:`No published programs match this view.`}),_.map(e=>{let t=e.progress_percent??e.progress??0;return(0,w.jsxs)(`button`,{type:`button`,className:`p7-list-card ${i===e.id?`is-selected`:``}`,onClick:()=>h(e.id),children:[(0,w.jsxs)(`div`,{className:`p7-card-top`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{className:`p7-kicker`,children:e.type||`Program / Project`}),(0,w.jsx)(`h2`,{children:e.title||e.name||`Initiative #${e.id}`})]}),(0,w.jsx)(`span`,{className:`p7-status`,children:I(e.status)})]}),(e.summary||e.description)&&(0,w.jsx)(`p`,{children:e.summary||e.description}),(0,w.jsx)(_t,{value:t}),(0,w.jsxs)(`div`,{className:`p7-meta`,children:[(0,w.jsxs)(`span`,{children:[Number(t)||0,`% progress`]}),e.target_date&&(0,w.jsxs)(`span`,{children:[`Target `,ht(e.target_date)]}),e.published_at&&(0,w.jsxs)(`span`,{children:[`Published `,ht(e.published_at)]})]})]},e.id)})]}),(0,w.jsxs)(`aside`,{className:`p7-detail`,children:[!i&&(0,w.jsx)(vt,{children:`Select a program or initiative to view its published details.`}),c&&(0,w.jsx)(vt,{children:`Loading details…`}),n&&!c&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`span`,{className:`p7-kicker`,children:n.type||`PROGRAM / PROJECT`}),(0,w.jsx)(`h2`,{children:n.title||n.name||`Initiative #${n.id}`}),(0,w.jsxs)(`div`,{className:`p7-detail-meta`,children:[(0,w.jsx)(`span`,{className:`p7-status`,children:I(n.status)}),n.target_date&&(0,w.jsxs)(`span`,{children:[`Target: `,ht(n.target_date)]})]}),(n.description||n.summary)&&(0,w.jsx)(`p`,{className:`p7-description`,children:n.description||n.summary}),(0,w.jsx)(`h3`,{children:`Milestones`}),(0,w.jsxs)(`div`,{className:`p7-stack`,children:[gt(n.milestones).map(e=>(0,w.jsxs)(`div`,{className:`p7-mini`,children:[(0,w.jsx)(`strong`,{children:e.title||e.name||`Milestone`}),(0,w.jsx)(`span`,{children:I(e.status)}),e.due_date&&(0,w.jsxs)(`small`,{children:[`Due `,ht(e.due_date)]})]},e.id||e.title)),!gt(n.milestones).length&&(0,w.jsx)(`small`,{children:`No published milestones.`})]}),(0,w.jsx)(`h3`,{children:`Partners & stakeholders`}),(0,w.jsxs)(`div`,{className:`p7-chips`,children:[gt(n.partners).map(e=>(0,w.jsx)(`span`,{children:e.name||e.organization_name||`Partner`},e.id||e.name)),!gt(n.partners).length&&(0,w.jsx)(`small`,{children:`No published partners.`})]}),(0,w.jsx)(`h3`,{children:`Beneficiary / impact activity`}),(0,w.jsxs)(`div`,{className:`p7-stack`,children:[gt(n.beneficiaries).slice(0,8).map(e=>(0,w.jsxs)(`div`,{className:`p7-mini`,children:[(0,w.jsx)(`strong`,{children:e.name||e.label||e.beneficiary_type||`Beneficiary record`}),(e.count??e.total)!=null&&(0,w.jsx)(`span`,{children:e.count??e.total})]},e.id||e.name||e.label)),!gt(n.beneficiaries).length&&(0,w.jsx)(`small`,{children:`No published beneficiary records.`})]}),(0,w.jsx)(`h3`,{children:`Latest updates`}),(0,w.jsxs)(`div`,{className:`p7-stack`,children:[gt(n.updates).slice(0,8).map(e=>(0,w.jsxs)(`div`,{className:`p7-mini`,children:[(0,w.jsx)(`strong`,{children:e.title||`Program update`}),e.body&&(0,w.jsx)(`p`,{children:e.body}),e.published_at&&(0,w.jsx)(`small`,{children:ht(e.published_at)})]},e.id||e.title)),!gt(n.updates).length&&(0,w.jsx)(`small`,{children:`No published updates.`})]})]})]})]})]})}var xt=`https://lbs.amsertech.com/backend`,St=[{id:`de-foreign-qualifications-2024`,country:`Germany`,flag:`🇩🇪`,region:`Europe`,category:`Recognition & Registration`,title:`Recognition of Foreign Nursing Qualifications Act (BQFG) – Update 2024`,summary:`Simplified recognition pathways, qualification assessment updates and faster administrative processing for selected foreign-trained professionals.`,status:`Active`,impact:`Positive Opportunity`,effective_date:`18 Dec 2023`,updated_at:`20 May 2024`,source_authority:`Competent German federal / state authorities`,source_url:``,last_verified:`Demo record • Source verification required before production use`,tags:[`Licensing & Recognition`,`EU / Germany`,`Registration`],lmi:!0,explainer:`What changed, who may benefit, and what documents are commonly required.`},{id:`sa-localization-phase2`,country:`Saudi Arabia`,flag:`🇸🇦`,region:`Middle East`,category:`Workforce Localization`,title:`Health Sector Nationalization Program – Phase 2`,summary:`Localization targets may affect recruitment demand by facility type, region, occupation and specialty. Nurses should monitor employer-specific workforce requirements.`,status:`Monitoring`,impact:`Monitor`,effective_date:`01 Jan 2025`,updated_at:`16 May 2024`,source_authority:`Competent Saudi government / health authorities`,source_url:``,last_verified:`Demo record • Source verification required before production use`,tags:[`Localization`,`Vision 2030`,`Nursing Demand`],lmi:!0,explainer:`How localization targets can influence international nurse hiring and specialty demand.`},{id:`uk-skilled-worker-healthcare`,country:`United Kingdom`,flag:`🇬🇧`,region:`Europe`,category:`Migration & Visa`,title:`Skilled Worker Visa: Health & Care – Salary Threshold Update`,summary:`Monitor visa eligibility, salary thresholds, occupation coding and employer sponsorship requirements that may affect internationally recruited nurses.`,status:`Active`,impact:`Action Required`,effective_date:`04 Apr 2024`,updated_at:`04 Apr 2024`,source_authority:`UK Government / competent immigration authority`,source_url:``,last_verified:`Demo record • Source verification required before production use`,tags:[`Visa`,`Migration`,`Employer Sponsorship`],lmi:!0,explainer:`Which salary and sponsorship changes may require action before accepting an offer.`},{id:`ph-cpd-professional-practice`,country:`Philippines`,flag:`🇵🇭`,region:`Philippines`,category:`Professional Practice`,title:`Continuing Professional Development and Nursing Practice Watch`,summary:`Track regulatory guidance, CPD requirements, professional standards, renewal rules and policy developments relevant to registered nurses.`,status:`Active`,impact:`Informational`,effective_date:`Ongoing`,updated_at:`12 Aug 2026`,source_authority:`Competent Philippine professional and regulatory authorities`,source_url:``,last_verified:`Demo record • Source verification required before production use`,tags:[`CPD`,`Professional Practice`,`License Renewal`],lmi:!1,explainer:`What professional-development and renewal changes nurses should watch.`},{id:`au-skilled-migration-nursing`,country:`Australia`,flag:`🇦🇺`,region:`Oceania`,category:`Migration & Skills`,title:`Skilled Migration and Nursing Occupation Demand Watch`,summary:`Monitor occupation lists, registration requirements, state nomination settings and specialty demand signals for internationally educated nurses.`,status:`Monitoring`,impact:`Positive Opportunity`,effective_date:`Ongoing`,updated_at:`07 Aug 2026`,source_authority:`Australian government / competent nursing regulator`,source_url:``,last_verified:`Demo record • Source verification required before production use`,tags:[`Migration`,`Registration`,`Skills Shortage`],lmi:!0,explainer:`How migration and registration signals combine with specialty demand.`},{id:`ca-ien-licensure`,country:`Canada`,flag:`🇨🇦`,region:`North America`,category:`Licensure & Mobility`,title:`Internationally Educated Nurse Licensure Pathway Watch`,summary:`Track provincial licensure modernization, bridging requirements and processing reforms that may influence mobility and hiring timelines.`,status:`Monitoring`,impact:`Positive Opportunity`,effective_date:`Ongoing`,updated_at:`02 Aug 2026`,source_authority:`Provincial regulators / competent authorities`,source_url:``,last_verified:`Demo record • Source verification required before production use`,tags:[`IEN`,`Licensure`,`Bridging`],lmi:!0,explainer:`Which licensure changes may shorten or alter the path to practice.`},{id:`jp-care-worker-language`,country:`Japan`,flag:`🇯🇵`,region:`Asia`,category:`Language & Qualification`,title:`Language, Qualification and Care Workforce Policy Watch`,summary:`Monitor language thresholds, credential recognition, employer programs and healthcare workforce policies relevant to foreign nurses and care professionals.`,status:`Monitoring`,impact:`Monitor`,effective_date:`Ongoing`,updated_at:`29 Jul 2026`,source_authority:`Competent Japanese government / health authorities`,source_url:``,last_verified:`Demo record • Source verification required before production use`,tags:[`Language`,`Qualification`,`Care Workforce`],lmi:!0,explainer:`What language and qualification factors may affect access to nursing roles.`},{id:`ae-emiratization-healthcare`,country:`United Arab Emirates`,flag:`🇦🇪`,region:`Middle East`,category:`Workforce Localization`,title:`Healthcare Emiratization and International Recruitment Watch`,summary:`Track localization targets, licensing changes, facility demand and specialty-specific recruitment signals across the UAE healthcare market.`,status:`Monitoring`,impact:`Possible Demand Reduction`,effective_date:`Ongoing`,updated_at:`25 Jul 2026`,source_authority:`Competent UAE authorities`,source_url:``,last_verified:`Demo record • Source verification required before production use`,tags:[`Emiratization`,`Licensing`,`Recruitment`],lmi:!0,explainer:`Where localization may reduce general demand while specialty shortages remain.`}],Ct=[{title:`Fair and Transparent Recognition of Foreign Qualifications`,status:`Active`},{title:`Ethical International Recruitment and No Exploitative Fees`,status:`Active`},{title:`Safe Working Conditions, Welfare and Professional Protection`,status:`Active`},{title:`Evidence-Based Workforce Planning and Specialty Development`,status:`Active`}],wt=[`Localization: What Nurses Need to Know`,`UK Health & Care Visa: What Nurses Need to Know`,`Germany’s Recognition Law (BQFG) in Plain Language`,`Why a “Nursing Shortage” Can Still Coexist With Localization`];function Tt(e){return Array.isArray(e)?e:Array.isArray(e?.data)?e.data:Array.isArray(e?.policies)?e.policies:Array.isArray(e?.data?.data)?e.data.data:[]}function Et(e,t){let n=e?.tags||e?.topics||e?.keywords||[],r=Array.isArray(n)?n.map(e=>typeof e==`string`?e:e?.name).filter(Boolean):[];return{id:e?.id??e?.uuid??`policy-${t}`,country:e?.country?.name||e?.country||e?.jurisdiction||`Global / Unspecified`,flag:e?.flag||`🌐`,region:e?.region||``,category:e?.category?.name||e?.category||e?.policy_type||`Policy`,title:e?.title||e?.name||`Policy update`,summary:e?.summary||e?.description||e?.excerpt||`Open this policy record for details.`,status:e?.status||e?.workflow_status||`Published`,impact:e?.impact||e?.impact_label||e?.member_impact||`Informational`,effective_date:e?.effective_date||e?.effective_at||e?.published_at||`See source`,updated_at:e?.updated_at||e?.verified_at||e?.published_at||`Current`,source_authority:e?.source_authority||e?.authority||e?.issuer||`Official source`,source_url:e?.source_url||e?.official_url||e?.url||``,last_verified:e?.last_verified||e?.verified_at||e?.updated_at||`Current record`,tags:r,lmi:!!(e?.lmi||e?.labor_market_intelligence||e?.demand_signal),explainer:e?.explainer||`Review the official source and NurseLink policy notes for practical implications.`}}function Dt(e=``){let t=String(e).toLowerCase();return t.includes(`positive`)||t.includes(`opportun`)?`is-positive`:t.includes(`possible demand`)||t.includes(`reduction`)?`is-risk`:t.includes(`action`)?`is-action`:t.includes(`monitor`)?`is-monitor`:`is-info`}function L({name:e}){let t={policy:[`M7 3h10l3 3v15H7z`,`M17 3v4h4`,`M10 11h7`,`M10 15h7`],radar:[`M12 12 20 7`,`M12 5a7 7 0 1 0 7 7`,`M12 8a4 4 0 1 0 4 4`],globe:[`M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z`,`M3 12h18`,`M12 3c2.2 2.5 3.3 5.5 3.3 9S14.2 18.5 12 21`,`M12 3C9.8 5.5 8.7 8.5 8.7 12S9.8 18.5 12 21`],bell:[`M6 9a6 6 0 0 1 12 0v5l2 3H4l2-3z`,`M10 20h4`],filter:[`M4 5h16`,`M7 12h10`,`M10 19h4`],arrow:[`M5 12h14`,`m14 6 6 6-6 6`],check:[`m5 12 4 4L19 6`],source:[`M7 3h10l3 3v15H7z`,`M17 3v4h4`,`M10 11h7`],megaphone:[`M3 11v2l11 4V7L3 11Z`,`M14 9c3 0 5-2 7-4v14c-2-2-4-4-7-4`,`M6 14l1.5 6h4L10 15`],chart:[`M4 19V9`,`M10 19V5`,`M16 19v-7`,`M22 19V3`],bookmark:[`M6 3h12v18l-6-4-6 4z`]};return(0,w.jsx)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(t[e]||t.policy).map(e=>(0,w.jsx)(`path`,{d:e},e))})}function Ot({icon:e,value:t,label:n,note:r}){return(0,w.jsxs)(`article`,{className:`npa-stat-card`,children:[(0,w.jsx)(`div`,{className:`npa-stat-icon`,children:(0,w.jsx)(L,{name:e})}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:t}),(0,w.jsx)(`span`,{children:n}),(0,w.jsx)(`small`,{children:r})]})]})}function R(){let[e,t]=(0,S.useState)([]),[n,r]=(0,S.useState)(!0),[i,a]=(0,S.useState)(``),[o,s]=(0,S.useState)(`All countries`),[c,l]=(0,S.useState)(`All impacts`),[u,d]=(0,S.useState)(`All policy types`),[f,p]=(0,S.useState)(null),[m,h]=(0,S.useState)(`seeded-demo`),[g,_]=(0,S.useState)(()=>new Set);(0,S.useEffect)(()=>{let e=!0;async function n(){try{let n=await fetch(`${xt}/api/organization/policies`,{credentials:`include`,headers:{Accept:`application/json`}});if(!n.ok)throw Error(`HTTP ${n.status}`);let r=await n.json();if(!e)return;let i=Tt(r).map(Et);t(i),h(i.length?`live`:`seeded-demo`)}catch{e&&h(`seeded-demo`)}finally{e&&r(!1)}}return n(),()=>{e=!1}},[]);let v=e.length?e:St,y=(0,S.useMemo)(()=>[`All countries`,...Array.from(new Set(v.map(e=>e.country))).sort()],[v]),b=(0,S.useMemo)(()=>[`All policy types`,...Array.from(new Set(v.map(e=>e.category))).sort()],[v]),x=(0,S.useMemo)(()=>({positive:v.filter(e=>Dt(e.impact)===`is-positive`).length,monitor:v.filter(e=>Dt(e.impact)===`is-monitor`).length,risk:v.filter(e=>Dt(e.impact)===`is-risk`).length,action:v.filter(e=>Dt(e.impact)===`is-action`).length}),[v]),C=(0,S.useMemo)(()=>{let e=i.trim().toLowerCase();return v.filter(t=>{let n=!e||[t.title,t.summary,t.country,t.category,...t.tags||[]].join(` `).toLowerCase().includes(e),r=o===`All countries`||t.country===o,i=c===`All impacts`||t.impact===c,a=u===`All policy types`||t.category===u;return n&&r&&i&&a})},[v,i,o,c,u]);function T(e){_(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})}return(0,w.jsxs)(`main`,{className:`npa-page`,"data-nurselink-page":`policies-advocacy-intelligence-v6480`,children:[(0,w.jsx)(`section`,{className:`npa-page-heading`,children:(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h1`,{children:`Policies & Advocacy`}),(0,w.jsx)(`p`,{children:`Understand the policies shaping nursing careers, migration, professional practice, and future workforce demand.`})]})}),(0,w.jsxs)(`section`,{className:`npa-hero`,children:[(0,w.jsxs)(`div`,{className:`npa-hero-copy`,children:[(0,w.jsx)(`div`,{className:`npa-eyebrow`,children:`POLICY INTELLIGENCE`}),(0,w.jsx)(`h2`,{children:`Know what is changing before it affects your career.`}),(0,w.jsx)(`p`,{children:`We track policy, regulation, workforce reform, migration rules, professional recognition and labor-market signals so nurses can plan ahead with better context.`}),(0,w.jsxs)(`button`,{type:`button`,className:`npa-link-button`,children:[`How we monitor policies `,(0,w.jsx)(L,{name:`arrow`})]})]}),(0,w.jsxs)(`div`,{className:`npa-hero-visual`,"aria-hidden":`true`,children:[(0,w.jsx)(`div`,{className:`npa-visual-globe`,children:`🌐`}),(0,w.jsx)(`div`,{className:`npa-visual-building`,children:`🏛️`}),(0,w.jsx)(`div`,{className:`npa-visual-search`,children:`⌕`}),(0,w.jsx)(`div`,{className:`npa-visual-shield`,children:`✓`})]})]}),(0,w.jsxs)(`section`,{className:`npa-stats`,children:[(0,w.jsx)(Ot,{icon:`policy`,value:v.length,label:`Active Policy Watch`,note:m===`live`?`Live member policy records`:`Seeded demo records`}),(0,w.jsx)(Ot,{icon:`globe`,value:y.length-1,label:`Countries Monitored`,note:`Destination and local markets`}),(0,w.jsx)(Ot,{icon:`bell`,value:x.positive+x.monitor+x.risk+x.action,label:`Updates Affecting Your Profile`,note:`Profile-relevant policy signals`})]}),(0,w.jsxs)(`section`,{className:`npa-content-grid`,children:[(0,w.jsxs)(`div`,{className:`npa-policy-workspace`,children:[(0,w.jsxs)(`div`,{className:`npa-workspace-header`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h2`,{children:`Policy Watch`}),(0,w.jsx)(`p`,{children:`Filter policy intelligence by market, policy type, impact, or keyword.`})]}),(0,w.jsxs)(`div`,{className:`npa-source-mode ${m===`live`?`is-live`:`is-demo`}`,children:[(0,w.jsx)(`span`,{}),n?`Checking live records…`:m===`live`?`Live policy records`:`Seeded demo mode`]})]}),(0,w.jsxs)(`div`,{className:`npa-impact-tabs`,children:[(0,w.jsxs)(`button`,{className:`active`,children:[`All (`,v.length,`)`]}),(0,w.jsxs)(`button`,{children:[`Positive (`,x.positive,`)`]}),(0,w.jsxs)(`button`,{children:[`Monitor (`,x.monitor,`)`]}),(0,w.jsxs)(`button`,{children:[`Possible Reduction (`,x.risk,`)`]}),(0,w.jsxs)(`button`,{children:[`Action Required (`,x.action,`)`]})]}),(0,w.jsxs)(`div`,{className:`npa-filterbar`,children:[(0,w.jsx)(`select`,{value:o,onChange:e=>s(e.target.value),children:y.map(e=>(0,w.jsx)(`option`,{children:e},e))}),(0,w.jsx)(`select`,{value:u,onChange:e=>d(e.target.value),children:b.map(e=>(0,w.jsx)(`option`,{children:e},e))}),(0,w.jsx)(`select`,{value:c,onChange:e=>l(e.target.value),children:[`All impacts`,`Positive Opportunity`,`Monitor`,`Possible Demand Reduction`,`Action Required`,`Informational`].map(e=>(0,w.jsx)(`option`,{children:e},e))}),(0,w.jsxs)(`label`,{className:`npa-search`,children:[(0,w.jsx)(`span`,{className:`sr-only`,children:`Search policies`}),(0,w.jsx)(`input`,{value:i,onChange:e=>a(e.target.value),placeholder:`Search policies…`})]}),(0,w.jsxs)(`button`,{type:`button`,className:`npa-filter-button`,children:[(0,w.jsx)(L,{name:`filter`}),` Filters`]})]}),(0,w.jsxs)(`div`,{className:`npa-policy-list`,children:[C.map(e=>(0,w.jsxs)(`article`,{className:`npa-policy-row`,children:[(0,w.jsx)(`div`,{className:`npa-impact-badge ${Dt(e.impact)}`,children:e.impact}),(0,w.jsxs)(`div`,{className:`npa-policy-main`,children:[(0,w.jsxs)(`div`,{className:`npa-policy-country`,children:[e.flag,` `,(0,w.jsx)(`strong`,{children:e.country})]}),(0,w.jsx)(`h3`,{children:e.title}),(0,w.jsx)(`p`,{children:e.summary}),(0,w.jsxs)(`div`,{className:`npa-policy-tags`,children:[(e.tags||[]).slice(0,3).map(e=>(0,w.jsx)(`span`,{children:e},e)),(0,w.jsxs)(`span`,{children:[`Effective: `,e.effective_date]})]})]}),(0,w.jsxs)(`div`,{className:`npa-policy-side`,children:[(0,w.jsx)(`button`,{type:`button`,className:`npa-bookmark ${g.has(e.id)?`is-saved`:``}`,"aria-label":`Save policy`,onClick:()=>T(e.id),children:(0,w.jsx)(L,{name:`bookmark`})}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Impact on you`}),(0,w.jsx)(`strong`,{className:Dt(e.impact),children:e.impact})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Updated`}),(0,w.jsx)(`strong`,{children:e.updated_at})]}),(0,w.jsx)(`button`,{type:`button`,className:`npa-view-button`,onClick:()=>p(e),children:`View details`})]})]},e.id)),!C.length&&(0,w.jsx)(`div`,{className:`npa-empty`,children:`No policies match your current filters.`})]})]}),(0,w.jsxs)(`aside`,{className:`npa-impact-panel`,children:[(0,w.jsxs)(`div`,{className:`npa-panel-heading`,children:[(0,w.jsx)(`span`,{children:`PERSONALIZED POLICY SIGNALS`}),(0,w.jsx)(`h2`,{children:`Impact on Me`}),(0,w.jsx)(`p`,{children:`Based on your nursing profile, destination interests, qualifications and experience.`})]}),(0,w.jsxs)(`div`,{className:`npa-impact-summary`,children:[(0,w.jsxs)(`div`,{className:`is-positive`,children:[(0,w.jsx)(L,{name:`bell`}),(0,w.jsx)(`strong`,{children:x.positive}),(0,w.jsx)(`span`,{children:`Positive Opportunities`}),(0,w.jsx)(`small`,{children:`Policies that may create more demand or pathways.`})]}),(0,w.jsxs)(`div`,{className:`is-monitor`,children:[(0,w.jsx)(L,{name:`bell`}),(0,w.jsx)(`strong`,{children:x.monitor}),(0,w.jsx)(`span`,{children:`Monitor`}),(0,w.jsx)(`small`,{children:`Policies to watch as implementation develops.`})]}),(0,w.jsxs)(`div`,{className:`is-risk`,children:[(0,w.jsx)(L,{name:`bell`}),(0,w.jsx)(`strong`,{children:x.risk}),(0,w.jsx)(`span`,{children:`Possible Demand Reduction`}),(0,w.jsx)(`small`,{children:`Policies that may reduce demand in some areas.`})]}),(0,w.jsxs)(`div`,{className:`is-action`,children:[(0,w.jsx)(L,{name:`bell`}),(0,w.jsx)(`strong`,{children:x.action}),(0,w.jsx)(`span`,{children:`Action Required`}),(0,w.jsx)(`small`,{children:`Policies requiring profile, visa or eligibility updates.`})]})]}),(0,w.jsx)(`a`,{href:`/profile`,className:`npa-outline-action`,children:`Update My Profile`})]})]}),(0,w.jsxs)(`section`,{className:`npa-bottom-grid`,children:[(0,w.jsxs)(`article`,{className:`npa-bottom-card`,children:[(0,w.jsxs)(`div`,{className:`npa-card-title-row`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`ADVOCACY`}),(0,w.jsx)(`h2`,{children:`Advocacy Priorities`})]}),(0,w.jsx)(`button`,{type:`button`,children:`View all`})]}),(0,w.jsx)(`p`,{children:`NurseLink and partner organizations can monitor and advocate around evidence-based workforce priorities.`}),(0,w.jsx)(`div`,{className:`npa-priority-list`,children:Ct.map(e=>(0,w.jsxs)(`div`,{children:[(0,w.jsx)(L,{name:`check`}),(0,w.jsx)(`span`,{children:e.title}),(0,w.jsx)(`strong`,{children:e.status})]},e.title))})]}),(0,w.jsxs)(`article`,{className:`npa-bottom-card`,children:[(0,w.jsxs)(`div`,{className:`npa-card-title-row`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`EXPLAINERS`}),(0,w.jsx)(`h2`,{children:`Policy Explainers`})]}),(0,w.jsx)(`button`,{type:`button`,children:`View all`})]}),(0,w.jsx)(`p`,{children:`Simplified summaries help members understand what changed and what to do next.`}),(0,w.jsx)(`div`,{className:`npa-explainer-list`,children:wt.map(e=>(0,w.jsxs)(`button`,{type:`button`,children:[(0,w.jsx)(L,{name:`policy`}),e]},e))})]}),(0,w.jsxs)(`article`,{className:`npa-bottom-card npa-lmi-card`,children:[(0,w.jsx)(`div`,{className:`npa-card-title-row`,children:(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`LABOR MARKET INTELLIGENCE`}),(0,w.jsx)(`h2`,{children:`Labor Market Intelligence Connection`})]})}),(0,w.jsx)(`p`,{children:`See how policy changes connect to demand, shortages, specialty hiring, localization and future workforce trends.`}),(0,w.jsxs)(`div`,{className:`npa-lmi-signal`,children:[(0,w.jsx)(L,{name:`chart`}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:`Saudi Arabia – Localization Phase 2`}),(0,w.jsx)(`span`,{children:`Compare localization policy with specialty-level demand and hiring trends.`})]})]}),(0,w.jsxs)(`a`,{href:`/jobs`,className:`npa-primary-action`,children:[`View in LMI `,(0,w.jsx)(L,{name:`arrow`})]})]})]}),(0,w.jsxs)(`section`,{className:`npa-disclaimer`,children:[(0,w.jsx)(`strong`,{children:`Important Disclaimer`}),(0,w.jsx)(`p`,{children:`NurseLink policy intelligence is provided for professional awareness, education and career-planning support. Seeded demo records are illustrative only and must not be treated as verified current legal or regulatory guidance. Always confirm requirements with the competent authority and official source.`})]}),f&&(0,w.jsx)(`div`,{className:`npa-modal-backdrop`,role:`presentation`,onClick:()=>p(null),children:(0,w.jsxs)(`section`,{className:`npa-modal`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`npa-policy-title`,onClick:e=>e.stopPropagation(),children:[(0,w.jsx)(`button`,{type:`button`,className:`npa-modal-close`,onClick:()=>p(null),"aria-label":`Close`,children:`×`}),(0,w.jsxs)(`div`,{className:`npa-policy-country`,children:[f.flag,` `,(0,w.jsx)(`strong`,{children:f.country})]}),(0,w.jsx)(`div`,{className:`npa-impact-badge ${Dt(f.impact)}`,children:f.impact}),(0,w.jsx)(`span`,{className:`npa-modal-kicker`,children:f.category}),(0,w.jsx)(`h2`,{id:`npa-policy-title`,children:f.title}),(0,w.jsx)(`p`,{children:f.summary}),(0,w.jsxs)(`div`,{className:`npa-detail-grid`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Status`}),(0,w.jsx)(`strong`,{children:f.status})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Effective / Published`}),(0,w.jsx)(`strong`,{children:f.effective_date})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Source Authority`}),(0,w.jsx)(`strong`,{children:f.source_authority})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Last Verified`}),(0,w.jsx)(`strong`,{children:f.last_verified})]})]}),(0,w.jsxs)(`div`,{className:`npa-explainer-box`,children:[(0,w.jsx)(`strong`,{children:`Policy Explainer`}),(0,w.jsx)(`p`,{children:f.explainer})]}),f.lmi&&(0,w.jsxs)(`div`,{className:`npa-modal-lmi`,children:[(0,w.jsx)(L,{name:`chart`}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:`Labor Market Intelligence connected`}),(0,w.jsx)(`span`,{children:`Evaluate this policy alongside demand and workforce signals.`})]})]}),f.source_url?(0,w.jsxs)(`a`,{className:`npa-primary-action`,href:f.source_url,target:`_blank`,rel:`noreferrer`,children:[`Open official source `,(0,w.jsx)(L,{name:`arrow`})]}):(0,w.jsx)(`div`,{className:`npa-source-note`,children:`Seeded demo record: official-source URL intentionally omitted until a verified production source is attached.`})]})})]})}var z={version:2,globalDesign:{typography:{fontFamily:`Inter, system-ui, sans-serif`,h1:{size:32,lineHeight:40,weight:700},h2:{size:24,lineHeight:32,weight:650},h3:{size:20,lineHeight:28,weight:650},body:{size:14,lineHeight:22,weight:400},small:{size:12,lineHeight:18,weight:400}},buttons:{radius:8,sizes:{small:36,medium:44,large:52},primary:{variant:`solid`},secondary:{variant:`outline`},tertiary:{variant:`text`}},spacing:[0,4,8,12,16,24,32,48,64],container:{desktop:1280,tablet:1024,mobile:640}},branding:{logos:{login:{enabled:!1,source:``,alt:`NurseLink organization logo`,sizePercent:100},admin:{enabled:!1,source:``,alt:`NurseLink administration logo`,sizePercent:100},sidebar:{enabled:!0,source:`/lbs-sidebar-logo-cropped-clean.png`,alt:`LBS Recruitment Solutions`,sizePercent:220}}},heroSliders:{login:{enabled:!0,autoplay:!0,durationMs:5e3,transition:`fade`,transitionMs:800,loop:!0,showDots:!1,showArrows:!1,pauseOnHover:!0,responsive:{desktop:{fit:`cover`,x:50,y:46},tablet:{fit:`cover`,x:50,y:44},mobile:{fit:`cover`,x:50,y:36}},slides:[{id:`login-hero-01-global-hospital`,name:`Login Hero — Global Hospital`,enabled:!0,desktopImage:`/images/registration-hero/nurselink-hero-global-hospital-01.png`,tabletImage:`/images/registration-hero/nurselink-hero-global-hospital-01.png`,mobileImage:`/images/registration-hero/nurselink-hero-global-hospital-01-mob.png`,alt:`Filipino nurses in a global hospital setting`,headline:``,description:``,buttonLabel:``,buttonUrl:``,openInNewTab:!1,responsive:{desktop:{fit:`cover`,x:50,y:46},tablet:{fit:`cover`,x:50,y:44},mobile:{fit:`cover`,x:50,y:36}}}]},registration:{enabled:!0,autoplay:!0,durationMs:5e3,transition:`fade`,transitionMs:800,loop:!0,showDots:!0,showArrows:!0,pauseOnHover:!0,responsive:{desktop:{fit:`cover`,x:50,y:46},tablet:{fit:`cover`,x:50,y:44},mobile:{fit:`cover`,x:50,y:36}},slides:[{id:`hero-01-global-hospital`,name:`Global Hospital`,enabled:!0,desktopImage:`/images/registration-hero/nurselink-hero-global-hospital-01.png`,tabletImage:`/images/registration-hero/nurselink-hero-global-hospital-01.png`,mobileImage:`/images/registration-hero/nurselink-hero-global-hospital-01-mob.png`,alt:`Filipino nurses in a global hospital setting`,headline:``,description:``,buttonLabel:``,buttonUrl:``,openInNewTab:!1,responsive:{desktop:{fit:`cover`,x:50,y:46},tablet:{fit:`cover`,x:50,y:44},mobile:{fit:`cover`,x:50,y:36}}},{id:`hero-02-surgery`,name:`Surgery`,enabled:!0,desktopImage:`/images/registration-hero/nurselink-hero-surgery-02.png`,tabletImage:`/images/registration-hero/nurselink-hero-surgery-02.png`,mobileImage:`/images/registration-hero/nurselink-hero-surgery-02-mob.png`,alt:`Nurses working in a surgical care environment`,headline:``,description:``,buttonLabel:``,buttonUrl:``,openInNewTab:!1,responsive:{desktop:{fit:`cover`,x:50,y:46},tablet:{fit:`cover`,x:50,y:44},mobile:{fit:`cover`,x:50,y:36}}},{id:`hero-03-hallway`,name:`Hospital Hallway`,enabled:!0,desktopImage:`/images/registration-hero/nurselink-hero-hallway-03.png`,tabletImage:`/images/registration-hero/nurselink-hero-hallway-03.png`,mobileImage:`/images/registration-hero/nurselink-hero-hallway-03-mob.png`,alt:`Nurses in a modern hospital hallway`,headline:``,description:``,buttonLabel:``,buttonUrl:``,openInNewTab:!1,responsive:{desktop:{fit:`cover`,x:50,y:46},tablet:{fit:`cover`,x:50,y:44},mobile:{fit:`cover`,x:50,y:36}}},{id:`hero-04-senior-global`,name:`Senior Global`,enabled:!0,desktopImage:`/images/registration-hero/nurselink-hero-senior-global-04.png`,tabletImage:`/images/registration-hero/nurselink-hero-senior-global-04.png`,mobileImage:`/images/registration-hero/nurselink-hero-senior-global-04-mob.png`,alt:`Experienced Filipino nurses in an international care setting`,headline:``,description:``,buttonLabel:``,buttonUrl:``,openInNewTab:!1,responsive:{desktop:{fit:`cover`,x:50,y:46},tablet:{fit:`cover`,x:50,y:44},mobile:{fit:`cover`,x:50,y:36}}},{id:`hero-05-middle-east`,name:`Middle East`,enabled:!0,desktopImage:`/images/registration-hero/nurselink-hero-middle-east-05.png`,tabletImage:`/images/registration-hero/nurselink-hero-middle-east-05.png`,mobileImage:`/images/registration-hero/nurselink-hero-middle-east-05-mob.png`,alt:`Filipino nurses working in a Middle East healthcare setting`,headline:``,description:``,buttonLabel:``,buttonUrl:``,openInNewTab:!1,responsive:{desktop:{fit:`cover`,x:50,y:46},tablet:{fit:`cover`,x:50,y:44},mobile:{fit:`cover`,x:50,y:36}}}]}}},B=`https://lbs.amsertech.com/backend`.replace(/\/$/,``),kt=`${B}/api/nurselink/admin/operations-center/appearance-settings`,At=`nurselink-admin-appearance-draft-v1`,jt=[[`login`,`Member Login`,`Displayed above the welcome message on the member sign-in page.`],[`admin`,`Admin Panel`,`Displayed in the Administration Operations Center brand area.`],[`sidebar`,`Member Sidebar`,`Displayed above the NurseLink name in the signed-in member sidebar.`]],Mt=e=>JSON.parse(JSON.stringify(e)),Nt=()=>`hero-${Date.now()}-${Math.random().toString(36).slice(2,7)}`;function Pt(e){let t=Mt(e||z);t.globalDesign||={},t.branding||={},t.branding.logos||={};for(let[e]of jt){t.branding.logos[e]={enabled:!1,source:``,alt:`NurseLink organization logo`,sizePercent:100,...t.branding.logos[e]||{}};let n=Number(t.branding.logos[e].sizePercent);t.branding.logos[e].sizePercent=Number.isFinite(n)?Math.max(50,Math.min(220,Math.round(n))):100}t.heroSliders||={};for(let e of[`login`,`registration`]){t.heroSliders[e]||={};let n=t.heroSliders[e];n.enabled??=!0,n.autoplay??=e===`registration`,n.durationMs??=6e3,n.transition??=`fade`,n.transitionMs??=800,n.showDots??=e===`registration`,n.showArrows??=!1,n.loop??=!0,n.pauseOnHover??=!0,n.slides=Array.isArray(n.slides)?n.slides:[]}return t}function Ft(e){let t=`${e}=`,n=document.cookie.split(`;`).map(e=>e.trim()).find(e=>e.startsWith(t));return n?decodeURIComponent(n.slice(t.length)):``}async function It(e=``,t={}){let n=String(t.method||`GET`).toUpperCase(),r=![`GET`,`HEAD`,`OPTIONS`].includes(n);r&&await fetch(`${B}/sanctum/csrf-cookie`,{credentials:`include`,headers:{Accept:`application/json`,"X-Requested-With":`XMLHttpRequest`}});let i={Accept:`application/json`,"X-Requested-With":`XMLHttpRequest`,...t.body instanceof FormData?{}:{"Content-Type":`application/json`},...t.headers||{}},a=Ft(`XSRF-TOKEN`);r&&a&&(i[`X-XSRF-TOKEN`]=a);let o=await fetch(`${kt}${e}`,{credentials:`include`,...t,method:n,headers:i}),s=await o.text(),c;try{c=s?JSON.parse(s):{}}catch{c={message:s}}if(!o.ok){let e=Error(c?.message||`Request failed (${o.status})`);throw e.status=o.status,e.data=c,e}return c}function Lt(e){return e?.data?.draft?.payload||e?.draft?.payload||e?.data?.published?.payload||e?.published?.payload||e?.data?.payload||e?.payload||e?.data?.setting?.payload||e?.setting?.payload||null}function Rt(e){return e?.data?.version||e?.version||e?.data?.setting?.version||e?.setting?.version||null}function zt(e){localStorage.setItem(At,JSON.stringify(e)),window.dispatchEvent(new CustomEvent(`nurselink:design-config-changed`,{detail:e}))}function V({label:e,children:t}){return(0,w.jsxs)(`label`,{className:`nl-ap-field`,children:[(0,w.jsx)(`span`,{children:e}),t]})}function Bt({label:e,checked:t,onChange:n}){return(0,w.jsxs)(`label`,{className:`nl-ap-toggle`,children:[(0,w.jsx)(`input`,{type:`checkbox`,checked:!!t,onChange:e=>n(e.target.checked)}),(0,w.jsx)(`span`,{children:e})]})}function Vt(e){return{id:Nt(),name:e===`login`?`New Login Slide`:`New Registration Slide`,enabled:!0,desktopImage:``,tabletImage:``,mobileImage:``,alt:``,headline:``,description:``,buttonLabel:``,buttonUrl:``,openInNewTab:!1,responsive:{desktop:{fit:`cover`,x:50,y:46},tablet:{fit:`cover`,x:50,y:44},mobile:{fit:`cover`,x:50,y:36}}}}function Ht({slider:e,slide:t,breakpoint:n}){if(!t)return(0,w.jsx)(`div`,{className:`nl-ap-preview-empty`,children:`No slide selected.`});let r=g(t,n),i=n===`mobile`?t.mobileImage||t.tabletImage||t.desktopImage:n===`tablet`&&t.tabletImage||t.desktopImage;return(0,w.jsxs)(`div`,{className:`nl-ap-hero-preview is-${n}`,children:[i?(0,w.jsx)(`img`,{src:i,alt:t.alt||``,style:{objectFit:r.fit||`cover`,objectPosition:`${r.x??50}% ${r.y??50}%`}}):(0,w.jsx)(`div`,{className:`nl-ap-preview-empty`,children:`Choose an image for this breakpoint.`}),(0,w.jsxs)(`div`,{className:`nl-ap-preview-overlay`,children:[t.headline&&(0,w.jsx)(`strong`,{children:t.headline}),t.description&&(0,w.jsx)(`span`,{children:t.description}),t.buttonLabel&&(0,w.jsx)(`button`,{type:`button`,children:t.buttonLabel})]}),(0,w.jsxs)(`div`,{className:`nl-ap-preview-meta`,children:[e.autoplay?`Autoplay ${Math.round((e.durationMs||0)/100)/10}s`:`Autoplay off`,` · `,e.transition||`fade`]})]})}function Ut({scope:e,config:t,setConfig:n}){let r=t.heroSliders[e],[i,a]=(0,S.useState)(r.slides[0]?.id||``),[o,s]=(0,S.useState)(`desktop`);(0,S.useEffect)(()=>{r.slides.some(e=>e.id===i)||a(r.slides[0]?.id||``)},[r.slides,i]);let c=Math.max(0,r.slides.findIndex(e=>e.id===i)),l=r.slides[c]||null;function u(t,r){n(n=>{let i=Mt(n);return i.heroSliders[e][t]=r,zt(i),i})}function d(t,r){n(n=>{let a=Mt(n),o=a.heroSliders[e].slides,s=o.findIndex(e=>e.id===i);if(s<0)return n;let c=o[s],l=t.split(`.`);for(let e=0;e<l.length-1;e++)c[l[e]]||={},c=c[l[e]];return c[l.at(-1)]=r,zt(a),a})}function f(t){n(n=>{let r=Mt(n);return t(r.heroSliders[e].slides),zt(r),r})}function p(){let t=Vt(e);f(e=>e.push(t)),a(t.id)}function m(){if(!l)return;let e=Mt(l);e.id=Nt(),e.name=`${e.name||`Slide`} Copy`,f(t=>t.splice(c+1,0,e)),a(e.id)}function h(e){let t=c+e;!l||t<0||t>=r.slides.length||f(e=>{let[n]=e.splice(c,1);e.splice(t,0,n)})}function g(){if(!l||r.slides.length<=1)return;let e=r.slides[c-1]?.id||r.slides[c+1]?.id||``;f(e=>e.splice(c,1)),a(e)}return(0,w.jsxs)(`div`,{className:`nl-ap-hero-workspace`,children:[(0,w.jsxs)(`section`,{className:`nl-ap-card`,children:[(0,w.jsxs)(`div`,{className:`nl-ap-card-head`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{className:`nl-ap-eyebrow`,children:e===`login`?`LOGIN`:`REGISTRATION`}),(0,w.jsx)(`h2`,{children:`Hero Slider`})]}),(0,w.jsx)(`button`,{className:`nl-ap-primary`,type:`button`,onClick:p,children:`+ Add Slide`})]}),(0,w.jsxs)(`div`,{className:`nl-ap-slider-settings`,children:[(0,w.jsx)(Bt,{label:`Enabled`,checked:r.enabled,onChange:e=>u(`enabled`,e)}),(0,w.jsx)(Bt,{label:`Autoplay`,checked:r.autoplay,onChange:e=>u(`autoplay`,e)}),(0,w.jsx)(Bt,{label:`Dots`,checked:r.showDots,onChange:e=>u(`showDots`,e)}),(0,w.jsx)(Bt,{label:`Arrows`,checked:r.showArrows,onChange:e=>u(`showArrows`,e)}),(0,w.jsx)(Bt,{label:`Loop`,checked:r.loop,onChange:e=>u(`loop`,e)}),(0,w.jsx)(Bt,{label:`Pause on hover`,checked:r.pauseOnHover,onChange:e=>u(`pauseOnHover`,e)}),(0,w.jsx)(V,{label:`Duration (ms)`,children:(0,w.jsx)(`input`,{type:`number`,min:`1000`,step:`250`,value:r.durationMs||6e3,onChange:e=>u(`durationMs`,Number(e.target.value||6e3))})}),(0,w.jsx)(V,{label:`Transition`,children:(0,w.jsxs)(`select`,{value:r.transition||`fade`,onChange:e=>u(`transition`,e.target.value),children:[(0,w.jsx)(`option`,{value:`fade`,children:`Fade`}),(0,w.jsx)(`option`,{value:`slide`,children:`Slide`}),(0,w.jsx)(`option`,{value:`none`,children:`None`})]})}),(0,w.jsx)(V,{label:`Transition ms`,children:(0,w.jsx)(`input`,{type:`number`,min:`0`,step:`50`,value:r.transitionMs??800,onChange:e=>u(`transitionMs`,Number(e.target.value||0))})})]})]}),(0,w.jsxs)(`div`,{className:`nl-ap-columns`,children:[(0,w.jsxs)(`section`,{className:`nl-ap-card nl-ap-slide-list`,children:[(0,w.jsx)(`div`,{className:`nl-ap-card-head`,children:(0,w.jsxs)(`h3`,{children:[`Slides `,(0,w.jsx)(`small`,{children:r.slides.length})]})}),(0,w.jsx)(`div`,{className:`nl-ap-slides`,children:r.slides.map((e,t)=>(0,w.jsxs)(`button`,{type:`button`,className:`nl-ap-slide-row ${e.id===i?`is-active`:``}`,onClick:()=>a(e.id),children:[(0,w.jsx)(`span`,{className:`nl-ap-slide-number`,children:String(t+1).padStart(2,`0`)}),(0,w.jsx)(`span`,{className:`nl-ap-thumb`,children:e.mobileImage||e.desktopImage?(0,w.jsx)(`img`,{src:e.mobileImage||e.desktopImage,alt:``}):(0,w.jsx)(`span`,{children:`IMG`})}),(0,w.jsxs)(`span`,{className:`nl-ap-slide-copy`,children:[(0,w.jsx)(`strong`,{children:e.name||`Slide ${t+1}`}),(0,w.jsx)(`small`,{children:e.enabled===!1?`Disabled`:`Enabled`})]})]},e.id))}),(0,w.jsxs)(`div`,{className:`nl-ap-row-actions`,children:[(0,w.jsx)(`button`,{type:`button`,onClick:()=>h(-1),disabled:c<=0,children:`↑`}),(0,w.jsx)(`button`,{type:`button`,onClick:()=>h(1),disabled:c>=r.slides.length-1,children:`↓`}),(0,w.jsx)(`button`,{type:`button`,onClick:m,disabled:!l,children:`Duplicate`}),(0,w.jsx)(`button`,{type:`button`,className:`danger`,onClick:g,disabled:!l||r.slides.length<=1,children:`Delete`})]})]}),(0,w.jsx)(`section`,{className:`nl-ap-card nl-ap-slide-editor`,children:l?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`div`,{className:`nl-ap-card-head`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsxs)(`span`,{className:`nl-ap-eyebrow`,children:[`SLIDE `,c+1]}),(0,w.jsx)(`h3`,{children:l.name||`Untitled Slide`})]}),(0,w.jsx)(Bt,{label:`Enabled`,checked:l.enabled!==!1,onChange:e=>d(`enabled`,e)})]}),(0,w.jsxs)(`div`,{className:`nl-ap-form-grid`,children:[(0,w.jsx)(V,{label:`Slide name`,children:(0,w.jsx)(`input`,{value:l.name||``,onChange:e=>d(`name`,e.target.value)})}),(0,w.jsx)(V,{label:`Alt text`,children:(0,w.jsx)(`input`,{value:l.alt||``,onChange:e=>d(`alt`,e.target.value)})}),(0,w.jsx)(V,{label:`Desktop image`,children:(0,w.jsx)(`input`,{value:l.desktopImage||``,onChange:e=>d(`desktopImage`,e.target.value)})}),(0,w.jsx)(V,{label:`Tablet image`,children:(0,w.jsx)(`input`,{value:l.tabletImage||``,onChange:e=>d(`tabletImage`,e.target.value)})}),(0,w.jsx)(V,{label:`Mobile image`,children:(0,w.jsx)(`input`,{value:l.mobileImage||``,onChange:e=>d(`mobileImage`,e.target.value)})}),(0,w.jsx)(V,{label:`Headline`,children:(0,w.jsx)(`input`,{value:l.headline||``,onChange:e=>d(`headline`,e.target.value)})}),(0,w.jsx)(V,{label:`Description`,children:(0,w.jsx)(`textarea`,{rows:`3`,value:l.description||``,onChange:e=>d(`description`,e.target.value)})}),(0,w.jsx)(V,{label:`Button label`,children:(0,w.jsx)(`input`,{value:l.buttonLabel||``,onChange:e=>d(`buttonLabel`,e.target.value)})}),(0,w.jsx)(V,{label:`Button URL`,children:(0,w.jsx)(`input`,{value:l.buttonUrl||``,onChange:e=>d(`buttonUrl`,e.target.value)})}),(0,w.jsx)(Bt,{label:`Open button in new tab`,checked:l.openInNewTab,onChange:e=>d(`openInNewTab`,e)})]}),(0,w.jsx)(`div`,{className:`nl-ap-breakpoint-tabs`,children:[`desktop`,`tablet`,`mobile`].map(e=>(0,w.jsx)(`button`,{type:`button`,className:o===e?`is-active`:``,onClick:()=>s(e),children:e},e))}),(0,w.jsxs)(`div`,{className:`nl-ap-responsive-controls`,children:[(0,w.jsx)(V,{label:`Image fit`,children:(0,w.jsxs)(`select`,{value:l.responsive?.[o]?.fit||`cover`,onChange:e=>d(`responsive.${o}.fit`,e.target.value),children:[(0,w.jsx)(`option`,{value:`cover`,children:`Cover`}),(0,w.jsx)(`option`,{value:`contain`,children:`Contain`}),(0,w.jsx)(`option`,{value:`fill`,children:`Fill`})]})}),(0,w.jsx)(V,{label:`Focal X ${l.responsive?.[o]?.x??50}%`,children:(0,w.jsx)(`input`,{type:`range`,min:`0`,max:`100`,value:l.responsive?.[o]?.x??50,onChange:e=>d(`responsive.${o}.x`,Number(e.target.value))})}),(0,w.jsx)(V,{label:`Focal Y ${l.responsive?.[o]?.y??50}%`,children:(0,w.jsx)(`input`,{type:`range`,min:`0`,max:`100`,value:l.responsive?.[o]?.y??50,onChange:e=>d(`responsive.${o}.y`,Number(e.target.value))})})]}),(0,w.jsx)(Ht,{slider:r,slide:l,breakpoint:o})]}):(0,w.jsx)(`div`,{className:`nl-ap-preview-empty`,children:`Add a slide to begin.`})})]})]})}function Wt({config:e,setConfig:t}){let n=e.globalDesign||{},r=(e,n)=>{t(t=>{let r=Mt(t);return r.globalDesign||={},r.globalDesign[e]=n,zt(r),r})};return(0,w.jsxs)(`section`,{className:`nl-ap-card`,children:[(0,w.jsx)(`span`,{className:`nl-ap-eyebrow`,children:`SYSTEM TOKENS`}),(0,w.jsx)(`h2`,{children:`Global Design`}),(0,w.jsx)(`p`,{className:`nl-ap-muted`,children:`Canonical global design values used by the NurseLink runtime.`}),(0,w.jsxs)(`div`,{className:`nl-ap-form-grid`,children:[(0,w.jsx)(V,{label:`Font family`,children:(0,w.jsx)(`input`,{value:n.fontFamily||``,onChange:e=>r(`fontFamily`,e.target.value),placeholder:`Inter, system-ui, sans-serif`})}),(0,w.jsx)(V,{label:`H1 size`,children:(0,w.jsx)(`input`,{value:n.h1Size||``,onChange:e=>r(`h1Size`,e.target.value),placeholder:`56px`})}),(0,w.jsx)(V,{label:`H2 size`,children:(0,w.jsx)(`input`,{value:n.h2Size||``,onChange:e=>r(`h2Size`,e.target.value),placeholder:`40px`})}),(0,w.jsx)(V,{label:`Primary button radius`,children:(0,w.jsx)(`input`,{value:n.buttonRadius||``,onChange:e=>r(`buttonRadius`,e.target.value),placeholder:`12px`})})]})]})}function Gt(e){return e?/^(?:data:|blob:|https?:)/i.test(e)?e:e.startsWith(`/api/`)?`${B}${e}`:e:``}function Kt({config:e,setConfig:t,onError:n}){let[r,i]=(0,S.useState)(``),a=e.branding?.logos||{};function o(e,n,r){t(t=>{let i=Pt(t);return i.branding.logos[e][n]=r,zt(i),i})}async function s(e,r){if(r){if(r.size>2097152){n(`Logo files must be 2 MB or smaller.`);return}i(e),n(``);try{let n=new FormData;n.append(`logo`,r);let i=(await It(`/logos/${e}`,{method:`POST`,body:n}))?.data?.source;if(!i)throw Error(`The server did not return a logo URL.`);t(t=>{let n=Pt(t);return n.branding.logos[e]={...n.branding.logos[e],enabled:!0,source:i,alt:n.branding.logos[e].alt||`${jt.find(t=>t[0]===e)?.[1]} logo`},zt(n),n})}catch(e){n(e.message)}finally{i(``)}}}return(0,w.jsxs)(`section`,{className:`nl-ap-card`,children:[(0,w.jsx)(`span`,{className:`nl-ap-eyebrow`,children:`BRAND IDENTITY`}),(0,w.jsx)(`h2`,{children:`Logo Placement`}),(0,w.jsx)(`p`,{className:`nl-ap-muted`,children:`Upload a separate logo for each location, preview it, then save and publish the appearance draft.`}),(0,w.jsx)(`div`,{className:`nl-ap-logo-grid`,children:jt.map(([e,t,n])=>{let i=a[e]||{},c=Gt(i.source);return(0,w.jsxs)(`article`,{className:`nl-ap-logo-card`,children:[(0,w.jsxs)(`div`,{className:`nl-ap-logo-card-head`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h3`,{children:t}),(0,w.jsx)(`p`,{children:n})]}),(0,w.jsx)(Bt,{label:`Show logo`,checked:i.enabled,onChange:t=>o(e,`enabled`,t)})]}),(0,w.jsx)(`div`,{className:`nl-ap-logo-preview`,children:c?(0,w.jsx)(`img`,{src:c,alt:i.alt||``}):(0,w.jsx)(`span`,{children:`No logo selected`})}),(0,w.jsx)(V,{label:`Upload image (PNG, JPG or WebP · max 2 MB)`,children:(0,w.jsx)(`input`,{type:`file`,accept:`image/png,image/jpeg,image/webp`,disabled:!!r,onChange:t=>{s(e,t.target.files?.[0]),t.target.value=``}})}),(0,w.jsx)(V,{label:`Or use an image URL`,children:(0,w.jsx)(`input`,{value:i.source||``,onChange:t=>o(e,`source`,t.target.value.trim()),placeholder:`https://…`})}),(0,w.jsx)(V,{label:`Accessible description`,children:(0,w.jsx)(`input`,{value:i.alt||``,onChange:t=>o(e,`alt`,t.target.value),placeholder:`${t} logo`})}),(0,w.jsx)(V,{label:`Logo size ${i.sizePercent||100}%`,children:(0,w.jsx)(`input`,{type:`range`,min:`50`,max:`220`,step:`5`,value:i.sizePercent||100,onChange:t=>o(e,`sizePercent`,Number(t.target.value||100))})}),(0,w.jsxs)(`div`,{className:`nl-ap-logo-actions`,children:[(0,w.jsx)(`small`,{children:r===e?`Uploading…`:i.source?`Ready to save`:`Upload a file or enter a URL`}),(0,w.jsx)(`button`,{type:`button`,className:`danger`,disabled:!i.source||!!r,onClick:()=>{o(e,`source`,``),o(e,`enabled`,!1)},children:`Remove`})]})]},e)})})]})}function qt(){let[e,t]=(0,S.useState)(()=>{try{let e=localStorage.getItem(At);return Pt(e?JSON.parse(e):z)}catch{return Pt(z)}}),[n,r]=(0,S.useState)(`global`),[i,a]=(0,S.useState)(!0),[o,s]=(0,S.useState)(!1),[c,l]=(0,S.useState)(``),[u,d]=(0,S.useState)(null),[f,p]=(0,S.useState)(null),[m,h]=(0,S.useState)([]);async function g(){a(!0),l(``);try{let[e,n]=await Promise.all([It(``),It(`/history`)]),r=Lt(e);if(r){let e=Pt(r);t(e),zt(e)}d(e?.data?.draft?.version||e?.draft?.version||Rt(e)),p(e?.data?.published?.version||e?.published?.version||null),h(n?.data?.history||n?.history||n?.data||[])}catch(e){e?.status!==401&&e?.status!==403&&l(e.message)}finally{a(!1)}}(0,S.useEffect)(()=>{g()},[]);async function _(){s(!0),l(``);try{zt(e);let t=await It(`/draft`,{method:`POST`,body:JSON.stringify({payload:e})});d(Rt(t)),await g()}catch(e){l(e.message)}finally{s(!1)}}async function v(){if(u){s(!0),l(``);try{await It(`/${u}/publish`,{method:`POST`,body:`{}`}),await g()}catch(e){l(e.message)}finally{s(!1)}}}async function y(e){s(!0),l(``);try{await It(`/${e}/restore`,{method:`POST`,body:`{}`}),await g()}catch(e){l(e.message)}finally{s(!1)}}let b=(0,S.useMemo)(()=>[[`global`,`Global Design`],[`branding`,`Logos`],[`login`,`Hero Slider · Login`],[`registration`,`Hero Slider · Registration`]],[]);return(0,w.jsxs)(`main`,{className:`nl-ap-shell`,children:[(0,w.jsxs)(`header`,{className:`nl-ap-top`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{className:`nl-ap-eyebrow`,children:`ADMIN CENTER · APPEARANCE`}),(0,w.jsx)(`h1`,{children:`Branding & Appearance`}),(0,w.jsx)(`p`,{children:`Manage logo placement, canonical design tokens and responsive hero experiences.`})]}),(0,w.jsxs)(`div`,{className:`nl-ap-actions`,children:[(0,w.jsxs)(`span`,{className:`nl-ap-version`,children:[`Draft `,u||`local`,` · Published `,f||`—`]}),(0,w.jsx)(`button`,{type:`button`,onClick:()=>zt(e),children:`Preview Local`}),(0,w.jsx)(`button`,{className:`nl-ap-primary`,type:`button`,onClick:_,disabled:o,children:`Save Draft`}),(0,w.jsx)(`button`,{type:`button`,onClick:v,disabled:o||!u,children:`Publish`})]})]}),c&&(0,w.jsx)(`div`,{className:`nl-ap-alert`,children:c}),i&&(0,w.jsx)(`div`,{className:`nl-ap-loading`,children:`Loading server design state…`}),(0,w.jsx)(`nav`,{className:`nl-ap-tabs`,children:b.map(([e,t])=>(0,w.jsx)(`button`,{type:`button`,className:n===e?`is-active`:``,onClick:()=>r(e),children:t},e))}),n===`global`&&(0,w.jsx)(Wt,{config:e,setConfig:t}),n===`branding`&&(0,w.jsx)(Kt,{config:e,setConfig:t,onError:l}),n===`login`&&(0,w.jsx)(Ut,{scope:`login`,config:e,setConfig:t}),n===`registration`&&(0,w.jsx)(Ut,{scope:`registration`,config:e,setConfig:t}),(0,w.jsxs)(`section`,{className:`nl-ap-card nl-ap-history`,children:[(0,w.jsxs)(`div`,{className:`nl-ap-card-head`,children:[(0,w.jsx)(`h3`,{children:`Server Persistence & History`}),(0,w.jsx)(`button`,{type:`button`,onClick:g,children:`Refresh`})]}),m?.length?(0,w.jsx)(`div`,{className:`nl-ap-history-list`,children:m.slice(0,12).map((e,t)=>{let n=e.version??e.id??t;return(0,w.jsxs)(`div`,{className:`nl-ap-history-row`,children:[(0,w.jsxs)(`span`,{children:[(0,w.jsxs)(`strong`,{children:[`Version `,n]}),(0,w.jsx)(`small`,{children:e.status||`saved`})]}),(0,w.jsx)(`button`,{type:`button`,onClick:()=>y(n),disabled:o,children:`Restore`})]},n)})}):(0,w.jsx)(`p`,{className:`nl-ap-muted`,children:`No server history available in this session yet.`})]})]})}var Jt=`nurselink-admin-appearance-draft-v1`,H=`https://lbs.amsertech.com/backend`.replace(/\/$/,``),Yt=null,Xt=!1,Zt=null,Qt=e=>JSON.parse(JSON.stringify(e));function $t(e){if(e)return e;try{let e=window.localStorage.getItem(Jt);if(e)return JSON.parse(e)}catch{}return Qt(z)}function en(){try{return!!window.localStorage.getItem(Jt)}catch{return!1}}function tn(e){let t=String(e||``).trim();return t?/^(?:data:|blob:|https?:)/i.test(t)?t:t.startsWith(`/api/`)?`${H}${t}`:t:``}function nn(e,t){let n=tn(t);return e===`sidebar`&&/sidebar-a0b815a2-5936-4745-a66d-b0eb4e1d9c8d\.png/i.test(n)?`/lbs-sidebar-logo-cropped-clean.png`:n}function rn(e,t){t!=null&&t!==``&&document.documentElement.style.setProperty(e,String(t))}function an(e){let t=e?.globalDesign||{};rn(`--nl-global-font-family`,t.fontFamily),rn(`--nl-global-h1-size`,t.h1Size),rn(`--nl-global-h2-size`,t.h2Size),rn(`--nl-global-button-radius`,t.buttonRadius)}function on(e){let t=e?.heroSliders?.registration||e?.heroSliders?.login||{},n=(t.slides?.find?.(e=>e.enabled!==!1)||t.slides?.[0])?.responsive||t.responsive||{};rn(`--nl-hero-transition`,`${Number(t.transitionMs??800)}ms`);for(let e of[`desktop`,`tablet`,`mobile`]){let t=n[e]||{};rn(`--nl-hero-fit-${e}`,t.fit||`cover`),rn(`--nl-hero-x-${e}`,`${t.x??50}%`),rn(`--nl-hero-y-${e}`,`${t.y??50}%`)}}function sn(e){let t=Zt?.heroSliders?.[e];return(Array.isArray(t?.slides)?t.slides:[]).filter(e=>e&&e.enabled!==!1)}function cn(){document.querySelectorAll(`[data-nurselink-logo-placement]`).forEach(e=>{let t=e.dataset.nurselinkLogoPlacement,n=Zt?.branding?.logos?.[t]||{},r=nn(t,n.source),i=n.enabled!==!1&&!!r;if(e.hidden!==!i&&(e.hidden=!i),e.classList.toggle(`has-nurselink-logo`,i),!i){e.childNodes.length&&e.replaceChildren();return}let a=e.querySelector(`img`);a||(a=document.createElement(`img`),a.decoding=`async`,e.replaceChildren(a)),a.getAttribute(`src`)!==r&&(a.src=r),a.alt=n.alt||`NurseLink organization logo`;let o=Number(n.sizePercent??(t===`sidebar`?220:100)),s=Number.isFinite(o)?Math.max(t===`sidebar`?220:50,Math.min(220,Math.round(o))):t===`sidebar`?220:100;if(t===`sidebar`){let t=Math.round(103*s/100),r=Math.round(38*s/100),i=Number(n.sidePadding??16),o=Number.isFinite(i)?Math.max(0,Math.min(40,Math.round(i))):0,c={width:`${t}px`,minWidth:`${t}px`,maxWidth:`${t}px`,flex:`0 0 auto`,height:`${r}px`,minHeight:`${r}px`,maxHeight:`${r}px`,boxSizing:`border-box`,padding:`0 ${o}px`,overflow:`hidden`};for(let[t,n]of Object.entries(c))e.style.getPropertyValue(t)!==n&&e.style.setProperty(t,n,`important`);for(let[e,t]of Object.entries({width:`100%`,height:`100%`,objectFit:`contain`,transform:`none`}))a.style.getPropertyValue(e)!==t&&a.style.setProperty(e,t,`important`)}if(t===`login`){let e=n.fitBox!==!1,t=Number(n.sidePadding??5),r={"--lbs-logo-width":e?`auto`:`min(220px, 45%)`,"--lbs-logo-width-mobile":e?`auto`:`min(180px, 45%)`,"--lbs-logo-width-tablet":e?`auto`:`min(140px, 35%)`,"--lbs-logo-padding":`${Number.isFinite(t)?Math.max(0,Math.min(40,Math.round(t))):5}px`};for(let[e,t]of Object.entries(r))a.style.getPropertyValue(e)!==t&&a.style.setProperty(e,t)}})}function ln(){if(!Zt?.heroSliders?.login?.enabled)return;let e=sn(`login`)[0];if(!e)return;let t=document.querySelector(`.nl713-login-hero-media`);if(!t||t.dataset.nurselinkReactSlider===`1`)return;let n=t.querySelector(`picture`),r=n?.querySelector(`source`),i=n?.querySelector(`img`);r&&e.mobileImage&&(r.srcset=e.mobileImage),i&&(i.src=v(e)),i&&(i.alt=e.alt||``,x(i,e))}function un(e){let t=document.createElement(`picture`);if(e.mobileImage){let n=document.createElement(`source`);n.media=`(max-width: 680px)`,n.srcset=e.mobileImage,t.appendChild(n)}if(e.tabletImage){let n=document.createElement(`source`);n.media=`(max-width: 1024px)`,n.srcset=e.tabletImage,t.appendChild(n)}let n=document.createElement(`img`);return n.src=e.desktopImage||e.tabletImage||e.mobileImage||``,n.alt=e.alt||``,b(n,e),t.appendChild(n),t}function dn(){let e=Zt?.heroSliders?.registration;if(!e?.enabled)return;let t=sn(`registration`);if(!t.length)return;let n=document.querySelector(`.nurselink-registration-hero-slider`);if(!n)return;let r=[...n.querySelectorAll(`.nurselink-registration-hero-slide`)];if(!(r.length===t.length&&r.every((e,n)=>(e.querySelector(`img`)?.getAttribute(`src`)||``)===(t[n].desktopImage||t[n].tabletImage||t[n].mobileImage||``)))){n.innerHTML=``,t.forEach((e,t)=>{let r=document.createElement(`div`);r.className=`nurselink-registration-hero-slide${t===0?` is-active`:``}`,r.dataset.nlDesignSlideId=e.id||String(t),r.appendChild(un(e)),n.appendChild(r)});let e=document.querySelector(`.nurselink-registration-hero-dots`);e&&(e.innerHTML=``,t.forEach((t,n)=>{let r=document.createElement(`button`);r.type=`button`,r.className=`nurselink-registration-hero-dot${n===0?` is-active`:``}`,r.dataset.slide=String(n),r.setAttribute(`aria-label`,`Show hero image ${n+1}`),e.appendChild(r)}))}document.documentElement.dataset.nlHeroAutoplay=e.autoplay?`1`:`0`,document.documentElement.dataset.nlHeroDuration=String(e.durationMs||6e3),document.documentElement.dataset.nlHeroTransition=e.transition||`fade`,document.documentElement.dataset.nlHeroDots=e.showDots?`1`:`0`,document.documentElement.dataset.nlHeroArrows=e.showArrows?`1`:`0`,document.documentElement.dataset.nlHeroLoop=e.loop?`1`:`0`;let i=document.querySelector(`.nurselink-registration-hero-dots`);i&&(i.hidden=e.showDots===!1),[...n.querySelectorAll(`.nurselink-registration-hero-slide`)].forEach((e,n)=>{let r=t[n],i=e.querySelector(`img`);!r||!i||(b(i,r),i.alt=r.alt||``)})}function U(){cn(),ln(),dn()}async function fn(){if(!en())try{let e=await fetch(`${H}/api/nurselink/appearance-settings`,{credentials:`include`,headers:{Accept:`application/json`}});if(!e.ok)return;let t=(await e.json())?.data?.branding;if(!t)return;let n=Qt(z);n.branding=t,pn(n)}catch{}}function pn(e){return Zt=$t(e),an(Zt),on(Zt),document.documentElement.dataset.nurselinkDesignRuntime=`v6352`,U(),Zt}function mn(){return Xt?pn():(Xt=!0,pn(),fn(),window.addEventListener(`nurselink:design-config-changed`,e=>{pn(e.detail||$t())}),window.addEventListener(`resize`,()=>U(),{passive:!0}),Yt&&Yt.disconnect(),Yt=new MutationObserver(()=>{window.clearTimeout(Yt._nlTimer),Yt._nlTimer=window.setTimeout(U,60)}),Yt.observe(document.documentElement,{childList:!0,subtree:!0}),Zt)}var hn=e({NL_APPLICATION_STAGES:()=>_n,NL_CREDENTIAL_STATES:()=>vn,NL_PHASE2_VERSION:()=>gn,Phase2Api:()=>Tn,applicationStageIndex:()=>bn,computeProfileCompletion:()=>Sn,createWorkflowSnapshot:()=>Cn,installUnsavedChangesGuard:()=>En,normalizeApplicationStage:()=>yn,normalizeCredentialState:()=>xn}),gn=`2.5.0`,_n=[`Submitted`,`Under Review`,`Needs Information`,`Ready for Approval`,`Approved`],vn=[`Not Submitted`,`Submitted`,`Under Verification`,`Verified`,`Needs Information`,`Expired`];function yn(e){return{submitted:`Submitted`,"under review":`Under Review`,review:`Under Review`,"needs information":`Needs Information`,"needs info":`Needs Information`,"ready for approval":`Ready for Approval`,approved:`Approved`}[String(e||``).trim().toLowerCase().replace(/[_-]+/g,` `)]||`Submitted`}function bn(e){return Math.max(0,_n.indexOf(yn(e)))}function xn(e){return{"not submitted":`Not Submitted`,submitted:`Submitted`,"under verification":`Under Verification`,verification:`Under Verification`,verified:`Verified`,"needs information":`Needs Information`,expired:`Expired`}[String(e||``).trim().toLowerCase().replace(/[_-]+/g,` `)]||`Not Submitted`}function Sn(e={}){let t=[`first_name`,`last_name`,`email`,`mobile`,`country`,`profession`,`license_number`,`employment_status`],n=t.filter(t=>{let n=e?.[t];return n!=null&&String(n).trim()!==``}).length;return Math.round(n/t.length*100)}function Cn({application:e={},member:t={},credentials:n=[],documents:r=[]}={}){return{version:gn,generated_at:new Date().toISOString(),application_stage:yn(e.status||e.stage||e.application_status),profile_completion:Sn(t),credentials:Array.isArray(n)?n.map(e=>({...e,normalized_status:xn(e?.status)})):[],documents:Array.isArray(r)?r:[]}}function wn(){return String(window?.NURSELINK_API_BASE||window?.NurseLinkConfig?.apiBase||window?.NL_API_BASE||`https://lbs.amsertech.com/backend`).replace(/\/+$/,``)}async function W(e,t={}){let n=await fetch(`${wn()}${e}`,{credentials:`include`,headers:{Accept:`application/json`,...t.body?{"Content-Type":`application/json`}:{},...t.headers||{}},...t}),r=(n.headers.get(`content-type`)||``).includes(`application/json`)?await n.json():await n.text();if(!n.ok){let e=Error(r?.message||r?.error||`NurseLink request failed (${n.status})`);throw e.status=n.status,e.payload=r,e}return r}var Tn={route(e,t){return window?.NURSELINK_PHASE2_ROUTES?.[e]||t},getRegistration(){return W(this.route(`registration_get`,`/api/nurselink/member/registration`))},saveRegistrationDraft(e){return W(this.route(`registration_draft`,`/api/nurselink/member/registration/draft`),{method:`POST`,body:JSON.stringify(e||{})})},submitRegistration(e){return W(this.route(`registration_submit`,`/api/nurselink/member/registration/submit`),{method:`POST`,body:JSON.stringify(e||{})})},getApplicationStatus(){return W(this.route(`application_status`,`/api/nurselink/member/application/status`))},respondNeedsInformation(e){return W(this.route(`needs_information_response`,`/api/nurselink/member/application/respond`),{method:`POST`,body:JSON.stringify(e||{})})},getProfile(){return W(this.route(`profile_get`,`/api/nurselink/member/profile`))},saveProfile(e){return W(this.route(`profile_save`,`/api/nurselink/member/profile`),{method:`PUT`,body:JSON.stringify(e||{})})},getCredentials(){return W(this.route(`credentials_get`,`/api/nurselink/member/credentials`))},getJobs(){return W(this.route(`jobs_get`,`/api/nurselink/jobs`))},applyToJob(e,t={}){return W(this.route(`job_apply`,`/api/nurselink/jobs/{id}/apply`).replace(`{id}`,encodeURIComponent(e)),{method:`POST`,body:JSON.stringify(t)})},getEnrollments(){return W(this.route(`enrollments_get`,`/api/nurselink/member/enrollments`))},getNotifications(){return W(this.route(`notifications_get`,`/api/nurselink/member/notifications`))}};function En(e){let t=t=>{e()&&(t.preventDefault(),t.returnValue=``)};return window.addEventListener(`beforeunload`,t),()=>window.removeEventListener(`beforeunload`,t)}function Dn({children:e}){let{authenticated:t,loading:n}=je(),r=u();return n?(0,w.jsx)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`,fontFamily:`Arial, sans-serif`},children:`Loading NurseLink...`}):t?e:(0,w.jsx)(a,{to:`/login`,state:{from:r.pathname},replace:!0})}function On(e){if(!e)return``;let t=String(e).trim(),n=t.match(/^(\d{4}-\d{2}-\d{2})/);if(n)return n[1];let r=new Date(t);return Number.isNaN(r.getTime())?``:[r.getUTCFullYear(),String(r.getUTCMonth()+1).padStart(2,`0`),String(r.getUTCDate()).padStart(2,`0`)].join(`-`)}function kn(e={}){return{...e,date_of_birth:On(e.date_of_birth)}}var An={first_name:``,middle_name:``,last_name:``,suffix:``,date_of_birth:``,nationality:`Filipino`,mobile_phone:``,city:``,region:``,country:`Philippines`,professional_title:`Registered Nurse`,current_position:``,current_employer:``,years_experience:``};function jn(){let{refreshUser:e}=je(),[t,n]=(0,S.useState)(null),[r,i]=(0,S.useState)(null),[a,o]=(0,S.useState)(An),[s,c]=(0,S.useState)({}),[l,u]=(0,S.useState)(!0),[d,f]=(0,S.useState)(!1),[p,m]=(0,S.useState)(``),[h,g]=(0,S.useState)(``);(0,S.useEffect)(()=>{async function e(){try{let e=null;try{e=await ue()}catch(e){if(![403,404].includes(e?.status))throw e}if(e){i(e),e.profile&&o({...An,...e.profile,years_experience:e.profile.years_experience??``});return}let t=await le();t||=await M(),n(t),t?.profile_data&&o({...An,...kn(t.profile_data),years_experience:t.profile_data.years_experience??``})}catch(e){g(e?.data?.message||e?.message||`Unable to load your application.`)}finally{u(!1)}}e()},[]);function _(e){let{name:t,value:n}=e.target,r=e.target.dataset.profileField||t;o(e=>({...e,[r]:n}))}function v(e){c(t=>({...t,[e]:!0}))}async function y(o){o.preventDefault(),f(!0),m(``),g(``);try{let o={...a,years_experience:a.years_experience===``?null:Number(a.years_experience),progress_percent:60};if(r){let e=await de(o);i(e)}else{if(!t?.id)throw Error(`Unable to resolve your membership application.`);let e=await fe(t.id,o);n(e)}await e(),m(`Your NurseLink profile has been saved successfully.`)}catch(e){let t=e?.data?.errors;if(t){let e=Object.values(t)[0];g(Array.isArray(e)?e[0]:e)}else g(e?.data?.message||e?.message||`Unable to save your profile.`)}finally{f(!1)}}return l?(0,w.jsx)(`div`,{className:`page`,children:`Loading profile...`}):(0,w.jsxs)(`div`,{className:`page`,children:[(0,w.jsxs)(`div`,{className:`page-header`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`div`,{className:`eyebrow`,children:`Membership Application`}),(0,w.jsx)(`h1`,{children:`My Profile`}),(0,w.jsx)(`p`,{children:r?`Keep your NurseLink member profile current.`:`Complete your personal and professional information for your NurseLink application.`})]}),t&&(0,w.jsx)(`span`,{className:`badge`,children:t.application_no})]}),(0,w.jsxs)(`form`,{className:`panel profile-form`,onSubmit:y,autoComplete:`off`,children:[p&&(0,w.jsx)(`div`,{className:`form-success`,children:p}),h&&(0,w.jsx)(`div`,{className:`form-error`,children:h}),(0,w.jsx)(`h2`,{children:`Personal Information`}),(0,w.jsxs)(`div`,{className:`profile-grid four`,children:[(0,w.jsxs)(`label`,{children:[`First Name *`,(0,w.jsx)(`input`,{name:`first_name`,value:a.first_name,onChange:_,required:!0})]}),(0,w.jsxs)(`label`,{children:[`Middle Name`,(0,w.jsx)(`input`,{name:`middle_name`,value:a.middle_name,onChange:_})]}),(0,w.jsxs)(`label`,{children:[`Last Name *`,(0,w.jsx)(`input`,{name:`last_name`,value:a.last_name,onChange:_,required:!0})]}),(0,w.jsxs)(`label`,{children:[`Suffix`,(0,w.jsx)(`input`,{name:`suffix`,value:a.suffix,onChange:_,placeholder:`Jr., Sr., III`})]})]}),(0,w.jsxs)(`div`,{className:`profile-grid three`,children:[(0,w.jsxs)(`label`,{children:[`Date of Birth`,(0,w.jsx)(`input`,{type:`date`,name:`nurselink_member_birth_date`,"data-profile-field":`date_of_birth`,readOnly:!s.date_of_birth,onFocus:()=>v(`date_of_birth`),autoComplete:`off`,"data-form-type":`other`,value:On(a.date_of_birth),onChange:_})]}),(0,w.jsxs)(`label`,{children:[`Nationality`,(0,w.jsx)(`input`,{name:`nationality`,value:a.nationality,onChange:_})]}),(0,w.jsxs)(`label`,{children:[`Mobile Number`,s.mobile_phone?(0,w.jsx)(`input`,{name:`nurselink_member_mobile_phone`,"data-profile-field":`mobile_phone`,autoComplete:`one-time-code`,"data-form-type":`other`,value:a.mobile_phone,onChange:_}):(0,w.jsxs)(`span`,{className:`profile-readonly-value`,children:[(0,w.jsx)(`strong`,{children:a.mobile_phone||`Not provided`}),(0,w.jsx)(`button`,{type:`button`,onClick:()=>v(`mobile_phone`),children:`Change`})]})]})]}),(0,w.jsx)(`h2`,{children:`Current Address`}),(0,w.jsxs)(`div`,{className:`profile-grid three`,children:[(0,w.jsxs)(`label`,{children:[`City`,(0,w.jsx)(`input`,{name:`city`,value:a.city,onChange:_})]}),(0,w.jsxs)(`label`,{children:[`Region / Province`,(0,w.jsx)(`input`,{name:`region`,value:a.region,onChange:_})]}),(0,w.jsxs)(`label`,{children:[`Country`,(0,w.jsx)(`input`,{name:`country`,value:a.country,onChange:_})]})]}),(0,w.jsx)(`h2`,{children:`Professional Information`}),(0,w.jsxs)(`div`,{className:`profile-grid two`,children:[(0,w.jsxs)(`label`,{children:[`Professional Title`,(0,w.jsx)(`input`,{name:`professional_title`,value:a.professional_title,onChange:_})]}),(0,w.jsxs)(`label`,{children:[`Years of Experience`,(0,w.jsx)(`input`,{type:`number`,min:`0`,max:`70`,name:`years_experience`,value:a.years_experience,onChange:_})]}),(0,w.jsxs)(`label`,{children:[`Current Position`,(0,w.jsx)(`input`,{name:`current_position`,value:a.current_position,onChange:_})]}),(0,w.jsxs)(`label`,{children:[`Current Employer`,(0,w.jsx)(`input`,{name:`current_employer`,value:a.current_employer,onChange:_})]})]}),(0,w.jsx)(`div`,{className:`profile-actions`,children:(0,w.jsx)(`button`,{className:`primary-button`,type:`submit`,disabled:d,children:d?`Saving...`:`Save Profile`})})]})]})}function G(){let[e,t]=(0,S.useState)(null),[n,r]=(0,S.useState)(null),[i,a]=(0,S.useState)(null),[o,s]=(0,S.useState)(!0),[c,l]=(0,S.useState)(!1),[u,d]=(0,S.useState)(``),[f,p]=(0,S.useState)(``);async function m(){try{let e=await ge();r(e.application);try{let e=await le();e||=await M(),t(e)}catch{t(null)}}catch(e){p(e?.data?.message||e?.message||`Unable to load Smart Registration.`)}finally{s(!1)}}(0,S.useEffect)(()=>{m()},[]);async function h(t){if(t.preventDefault(),!(!i||!e)){l(!0),d(``),p(``);try{await _e(i),await m(),a(null),t.target.reset(),d(`Document uploaded successfully. Review the extracted fields and complete anything NurseLink could not detect.`)}catch(e){let t=e?.data?.errors;if(t){let e=Object.values(t)[0];p(Array.isArray(e)?e[0]:e)}else p(e?.data?.message||e?.message||`Unable to upload the document.`)}finally{l(!1)}}}if(o)return(0,w.jsx)(`div`,{className:`page`,children:`Loading Smart Registration...`});let g=n?.documents||[];return(0,w.jsxs)(`div`,{className:`page`,children:[(0,w.jsxs)(`div`,{className:`page-header`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`div`,{className:`eyebrow`,children:`Smart Registration`}),(0,w.jsx)(`h1`,{children:`Upload Your Documents`}),(0,w.jsx)(`p`,{children:`Add your CV and professional documents to accelerate your NurseLink application.`})]}),e&&(0,w.jsx)(`span`,{className:`badge`,children:e.application_no})]}),(0,w.jsxs)(`div`,{className:`content-grid`,children:[(0,w.jsxs)(`form`,{className:`panel upload-panel`,onSubmit:h,children:[(0,w.jsx)(`h2`,{children:`Upload Document`}),(0,w.jsx)(`p`,{children:`Accepted formats: PDF, JPG, JPEG, PNG and DOCX. Maximum file size: 15 MB.`}),u&&(0,w.jsx)(`div`,{className:`form-success`,children:u}),f&&(0,w.jsx)(`div`,{className:`form-error`,children:f}),(0,w.jsxs)(`label`,{children:[`Select File`,(0,w.jsx)(`input`,{type:`file`,accept:`.pdf,.jpg,.jpeg,.png,.docx`,onChange:e=>a(e.target.files?.[0]||null),required:!0})]}),i&&(0,w.jsxs)(`div`,{className:`selected-file`,children:[(0,w.jsx)(`strong`,{children:`Selected:`}),` `,i.name]}),(0,w.jsx)(`button`,{className:`primary-button`,type:`submit`,disabled:c||!i,children:c?`Uploading...`:`Upload Document`})]}),(0,w.jsxs)(`div`,{className:`panel`,children:[(0,w.jsx)(`h2`,{children:`How Smart Registration Works`}),(0,w.jsxs)(`div`,{className:`checklist smart-steps`,children:[(0,w.jsx)(`div`,{children:`1. Upload your CV and credentials.`}),(0,w.jsx)(`div`,{children:`2. NurseLink performs a security review.`}),(0,w.jsx)(`div`,{children:`3. Eligible documents are processed for data extraction.`}),(0,w.jsx)(`div`,{children:`4. You review and confirm extracted information.`}),(0,w.jsx)(`div`,{children:`5. Missing application fields are highlighted.`})]})]})]}),(0,w.jsxs)(`div`,{className:`panel`,children:[(0,w.jsxs)(`div`,{className:`panel-title`,children:[(0,w.jsx)(`h2`,{children:`Uploaded Documents`}),(0,w.jsxs)(`span`,{className:`muted`,children:[g.length,` `,`document(s)`]})]}),g.length===0?(0,w.jsx)(`p`,{children:`No documents have been uploaded yet.`}):(0,w.jsx)(`div`,{className:`document-list`,children:g.map(e=>(0,w.jsxs)(`div`,{className:`document-row`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:e.original_name||e.category||`Document`}),(0,w.jsx)(`small`,{children:e.category})]}),(0,w.jsx)(`span`,{className:`document-status`,children:e.malware_scan_status||e.security_status||`Pending`})]},e.id))})]})]})}var K={draft:`Draft`,in_progress:`In Progress`,ready_to_submit:`Ready to Submit`,submitted:`Submitted`,under_review:`Under Review`,returned_for_information:`Returned for Information`,resubmitted:`Resubmitted`,approved:`Approved`,rejected:`Rejected`},Mn={draft:`Your NurseLink membership application has been created.`,in_progress:`Complete your profile and supporting information before submitting your application.`,ready_to_submit:`Your application is ready. Review your information and submit it for evaluation.`,submitted:`Your application has been submitted and is waiting for NurseLink review.`,under_review:`Your membership application is currently being reviewed.`,returned_for_information:`The reviewer requires additional information before your application can continue.`,resubmitted:`Your updated application has been resubmitted and is waiting for review.`,approved:`Congratulations. Your NurseLink membership application has been approved.`,rejected:`Your membership application was not approved. Please review the decision information below.`};function Nn(e){if(e?.data?.errors){let t=Object.values(e.data.errors)[0];return Array.isArray(t)?t[0]:t}return e?.data?.message||e?.message||`The request could not be completed.`}function Pn(e){if(!e)return null;try{return new Date(e).toLocaleString()}catch{return e}}function Fn(){let{refreshUser:e}=je(),[t,n]=(0,S.useState)(null),[r,i]=(0,S.useState)(!0),[a,o]=(0,S.useState)(!1),[s,c]=(0,S.useState)(``),[l,u]=(0,S.useState)(``);async function d(){try{u(``);let e=await le();n(e)}catch(e){u(Nn(e))}finally{i(!1)}}(0,S.useEffect)(()=>{d()},[]);async function f(){if(t){o(!0),c(``),u(``);try{let r=await pe(t.id);n(r),await e(),c(`Your application is now ready for submission.`)}catch(e){u(Nn(e))}finally{o(!1)}}}async function p(){if(t&&window.confirm(`Submit your NurseLink membership application for review?`)){o(!0),c(``),u(``);try{let r=await me(t.id);n(r),await e(),c(`Your NurseLink membership application has been submitted successfully.`)}catch(e){u(Nn(e))}finally{o(!1)}}}async function m(){if(t&&window.confirm(`Resubmit your updated NurseLink application?`)){o(!0),c(``),u(``);try{let r=await he(t.id);n(r),await e(),c(`Your updated application has been resubmitted.`)}catch(e){u(Nn(e))}finally{o(!1)}}}if(r)return(0,w.jsx)(`div`,{className:`page`,children:`Loading application status...`});if(!t)return(0,w.jsx)(`div`,{className:`page`,children:(0,w.jsxs)(`div`,{className:`panel`,children:[(0,w.jsx)(`h2`,{children:`No membership application found`}),(0,w.jsx)(`p`,{children:`Complete your NurseLink profile to begin your membership application.`})]})});let h=t.status,g=t.progress_percent??0,_=h===`in_progress`&&g>=60,v=h===`ready_to_submit`,y=h===`returned_for_information`;return(0,w.jsxs)(`div`,{className:`page`,children:[(0,w.jsxs)(`div`,{className:`page-header`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`div`,{className:`eyebrow`,children:`Membership Application`}),(0,w.jsx)(`h1`,{children:`Application Status`}),(0,w.jsx)(`p`,{children:`Track, complete and submit your NurseLink membership application.`})]}),(0,w.jsx)(`span`,{className:`badge`,children:t.application_no})]}),s&&(0,w.jsx)(`div`,{className:`form-success`,children:s}),l&&(0,w.jsx)(`div`,{className:`form-error`,children:l}),(0,w.jsxs)(`div`,{className:`application-status-grid`,children:[(0,w.jsxs)(`div`,{className:`panel application-status-main`,children:[(0,w.jsxs)(`div`,{className:`application-status-heading`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{className:`application-status-label`,children:`Current Status`}),(0,w.jsx)(`h2`,{children:K[h]||h})]}),(0,w.jsx)(`span`,{className:`application-status-badge status-${h}`,children:K[h]||h})]}),(0,w.jsx)(`p`,{children:Mn[h]||`Your application is being processed.`}),(0,w.jsxs)(`div`,{className:`application-progress-header`,children:[(0,w.jsx)(`span`,{children:`Application Completion`}),(0,w.jsxs)(`strong`,{children:[g,`%`]})]}),(0,w.jsx)(`div`,{className:`progress`,children:(0,w.jsx)(`div`,{className:`progress-bar`,style:{width:`${g}%`}})}),t.return_reason&&(0,w.jsxs)(`div`,{className:`application-notice warning`,children:[(0,w.jsx)(`strong`,{children:`Additional information required`}),(0,w.jsx)(`p`,{children:t.return_reason})]}),t.rejection_reason&&(0,w.jsxs)(`div`,{className:`application-notice danger`,children:[(0,w.jsx)(`strong`,{children:`Review Decision`}),(0,w.jsx)(`p`,{children:t.rejection_reason})]}),(0,w.jsxs)(`div`,{className:`application-actions`,children:[_&&(0,w.jsx)(`button`,{type:`button`,className:`primary-button`,disabled:a,onClick:f,children:a?`Processing...`:`Mark Ready for Submission`}),v&&(0,w.jsx)(`button`,{type:`button`,className:`primary-button`,disabled:a,onClick:p,children:a?`Submitting...`:`Submit Application`}),y&&(0,w.jsx)(`button`,{type:`button`,className:`primary-button`,disabled:a,onClick:m,children:a?`Submitting...`:`Resubmit Application`}),[`submitted`,`under_review`,`resubmitted`].includes(h)&&(0,w.jsx)(`div`,{className:`application-waiting`,children:`Your application is already with NurseLink for review.`}),h===`approved`&&(0,w.jsx)(`div`,{className:`application-approved`,children:`Membership activated. Member services are now available.`})]})]}),(0,w.jsxs)(`div`,{className:`panel`,children:[(0,w.jsx)(`h2`,{children:`Application Details`}),(0,w.jsxs)(`div`,{className:`application-details`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Application Number`}),(0,w.jsx)(`strong`,{children:t.application_no})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Progress`}),(0,w.jsxs)(`strong`,{children:[g,`%`]})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Status`}),(0,w.jsx)(`strong`,{children:K[h]||h})]}),t.submitted_at&&(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Submitted`}),(0,w.jsx)(`strong`,{children:Pn(t.submitted_at)})]}),t.review_started_at&&(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Review Started`}),(0,w.jsx)(`strong`,{children:Pn(t.review_started_at)})]}),t.approved_at&&(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Approved`}),(0,w.jsx)(`strong`,{children:Pn(t.approved_at)})]}),t.rejected_at&&(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Decision Date`}),(0,w.jsx)(`strong`,{children:Pn(t.rejected_at)})]})]})]})]}),(0,w.jsxs)(`div`,{className:`panel`,children:[(0,w.jsx)(`h2`,{children:`Application Journey`}),(0,w.jsxs)(`div`,{className:`application-journey`,children:[(0,w.jsxs)(`div`,{className:`journey-step complete`,children:[(0,w.jsx)(`span`,{children:`1`}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:`Account Created`}),(0,w.jsx)(`small`,{children:`NurseLink account verified`})]})]}),(0,w.jsxs)(`div`,{className:`journey-step ${g>=60?`complete`:``}`,children:[(0,w.jsx)(`span`,{children:`2`}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:`Profile Completed`}),(0,w.jsx)(`small`,{children:`Personal and professional information`})]})]}),(0,w.jsxs)(`div`,{className:`journey-step ${[`ready_to_submit`,`submitted`,`under_review`,`returned_for_information`,`resubmitted`,`approved`,`rejected`].includes(h)?`complete`:``}`,children:[(0,w.jsx)(`span`,{children:`3`}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:`Ready for Submission`}),(0,w.jsx)(`small`,{children:`Applicant review completed`})]})]}),(0,w.jsxs)(`div`,{className:`journey-step ${[`submitted`,`under_review`,`returned_for_information`,`resubmitted`,`approved`,`rejected`].includes(h)?`complete`:``}`,children:[(0,w.jsx)(`span`,{children:`4`}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:`Submitted`}),(0,w.jsx)(`small`,{children:`Sent to NurseLink`})]})]}),(0,w.jsxs)(`div`,{className:`journey-step ${[`under_review`,`returned_for_information`,`resubmitted`,`approved`,`rejected`].includes(h)?`complete`:``}`,children:[(0,w.jsx)(`span`,{children:`5`}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:`Membership Review`}),(0,w.jsx)(`small`,{children:`Application evaluation`})]})]}),(0,w.jsxs)(`div`,{className:`journey-step ${h===`approved`?`complete`:``}`,children:[(0,w.jsx)(`span`,{children:`6`}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:`NurseLink Member`}),(0,w.jsx)(`small`,{children:`Member services activated`})]})]})]})]})]})}var In={category:`license`,credential_type:`PRC Nursing License`,title:`Registered Nurse License`,credential_number:``,issuing_authority:`Professional Regulation Commission`,country:`PH`,issued_on:``,expires_on:``,does_not_expire:!1,primary_document_id:``},Ln={document_type:`prc_license`,title:``,issued_on:``,expires_on:``,file:null},Rn={record_type:`cpd`,title:``,provider:``,country:`PH`,completed_on:``,cpd_units:``,hours:``};function zn(e){if(e?.data?.errors){let t=Object.values(e.data.errors)[0];return Array.isArray(t)?t[0]:t}return e?.data?.message||e?.message||`The request could not be completed.`}function Bn(e){return Array.isArray(e)?e:Array.isArray(e?.data)?e.data:Array.isArray(e?.data?.data)?e.data.data:[]}function Vn(){let[e,t]=(0,S.useState)([]),[n,r]=(0,S.useState)([]),[i,a]=(0,S.useState)([]),[o,s]=(0,S.useState)(null),[c,l]=(0,S.useState)({...In}),[u,d]=(0,S.useState)({...Ln}),[f,p]=(0,S.useState)({...Rn}),[m,h]=(0,S.useState)(!0),[g,_]=(0,S.useState)(!1),[v,y]=(0,S.useState)(null),[b,x]=(0,S.useState)(!1),[C,T]=(0,S.useState)(!1),[E,D]=(0,S.useState)(``),[ee,O]=(0,S.useState)(``);async function k(){try{O(``);let[e,n,i,o]=await Promise.all([ve(),Ce(),Ee(),ye()]);t(Bn(e)),r(Bn(n)),a(Bn(i)),s(o?.data||o||null)}catch(e){O(zn(e))}finally{h(!1)}}(0,S.useEffect)(()=>{k()},[]);function A(e){let{name:t,value:n,type:r,checked:i}=e.target;l(e=>({...e,[t]:r===`checkbox`?i:n}))}function te(e){let{name:t,value:n,files:r}=e.target;d(e=>({...e,[t]:t===`file`?r?.[0]||null:n}))}function j(e){let{name:t,value:n}=e.target;p(e=>({...e,[t]:n}))}async function ne(e){e.preventDefault(),_(!0),D(``),O(``);try{let e={category:c.category,credential_type:c.credential_type,title:c.title,credential_number:c.credential_number||null,issuing_authority:c.issuing_authority||null,country:c.country||null,issued_on:c.issued_on||null,expires_on:c.does_not_expire?null:c.expires_on||null,does_not_expire:c.does_not_expire,primary_document_id:c.primary_document_id||null};v?await xe(v,e):await be(e),l({...In}),y(null),D(v?`Professional credential updated and returned to unverified review status.`:`Professional credential added successfully.`),await k()}catch(e){O(zn(e))}finally{_(!1)}}function re(e){y(e.id),l({category:e.category||In.category,credential_type:e.credential_type||``,title:e.title||``,credential_number:e.credential_number||``,issuing_authority:e.issuing_authority||``,country:e.country||``,issued_on:e.issued_on||``,expires_on:e.expires_on||``,does_not_expire:!!e.does_not_expire,primary_document_id:e.primary_document_id||e.primary_document?.id||``}),D(`Editing credential. Saving changes will require reviewer verification.`),O(``),window.scrollTo({top:0,behavior:`smooth`})}function ie(){y(null),l({...In}),D(``)}async function ae(e){if(e.preventDefault(),!u.file){O(`Please select a document.`);return}x(!0),D(``),O(``);try{await we({file:u.file,document_type:u.document_type,title:u.title,issued_on:u.issued_on,expires_on:u.expires_on}),d({...Ln}),e.target.reset(),D(`Supporting document uploaded successfully.`),await k()}catch(e){O(zn(e))}finally{x(!1)}}async function oe(e){e.preventDefault(),T(!0),D(``),O(``);try{await De({record_type:f.record_type,title:f.title,provider:f.provider||null,country:f.country||null,completed_on:f.completed_on||null,cpd_units:f.cpd_units===``?null:Number(f.cpd_units),hours:f.hours===``?null:Number(f.hours)}),p({...Rn}),D(`Professional development record added successfully.`),await k()}catch(e){O(zn(e))}finally{T(!1)}}async function se(e){if(window.confirm(`Are you sure you want to delete this credential?`))try{await Se(e),await k()}catch(e){O(zn(e))}}async function ce(e){if(window.confirm(`Are you sure you want to delete this document?`))try{await Te(e),await k()}catch(e){O(zn(e))}}async function le(e){if(window.confirm(`Are you sure you want to delete this professional development record?`))try{await Oe(e),await k()}catch(e){O(zn(e))}}return m?(0,w.jsx)(`div`,{className:`page`,children:`Loading credentials...`}):(0,w.jsxs)(`div`,{className:`page`,children:[(0,w.jsx)(`div`,{className:`page-header`,children:(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`div`,{className:`eyebrow`,children:`Professional Credentials`}),(0,w.jsx)(`h1`,{children:`Credentials & Professional Development`}),(0,w.jsx)(`p`,{children:`Manage licenses, certifications, supporting documents, training, seminars and CPD records.`})]})}),E&&(0,w.jsx)(`div`,{className:`form-success`,children:E}),ee&&(0,w.jsx)(`div`,{className:`form-error`,children:ee}),(0,w.jsxs)(`div`,{className:`stats-grid`,children:[(0,w.jsxs)(`div`,{className:`stat-card`,children:[(0,w.jsx)(`span`,{children:`Credentials`}),(0,w.jsx)(`strong`,{children:e.length}),(0,w.jsx)(`small`,{children:`Licenses and certifications`})]}),(0,w.jsxs)(`div`,{className:`stat-card`,children:[(0,w.jsx)(`span`,{children:`Documents`}),(0,w.jsx)(`strong`,{children:n.length}),(0,w.jsx)(`small`,{children:`Supporting evidence`})]}),(0,w.jsxs)(`div`,{className:`stat-card`,children:[(0,w.jsx)(`span`,{children:`Professional Development`}),(0,w.jsx)(`strong`,{children:i.length}),(0,w.jsx)(`small`,{children:`CPD and training`})]}),(0,w.jsxs)(`div`,{className:`stat-card`,children:[(0,w.jsx)(`span`,{children:`Credential Status`}),(0,w.jsx)(`strong`,{className:`status-word`,children:o?.status||`In Progress`}),(0,w.jsx)(`small`,{children:`Verification monitoring`})]})]}),(0,w.jsxs)(`div`,{className:`credentials-layout`,children:[(0,w.jsxs)(`form`,{className:`panel credentials-form`,onSubmit:ne,children:[(0,w.jsx)(`h2`,{children:v?`Edit Professional Credential`:`Add Professional Credential`}),(0,w.jsxs)(`div`,{className:`profile-grid two`,children:[(0,w.jsxs)(`label`,{children:[`Category`,(0,w.jsxs)(`select`,{name:`category`,value:c.category,onChange:A,children:[(0,w.jsx)(`option`,{value:`license`,children:`License`}),(0,w.jsx)(`option`,{value:`registration`,children:`Registration`}),(0,w.jsx)(`option`,{value:`certification`,children:`Certification`}),(0,w.jsx)(`option`,{value:`training`,children:`Training`}),(0,w.jsx)(`option`,{value:`cpd`,children:`CPD`})]})]}),(0,w.jsxs)(`label`,{children:[`Credential Type *`,(0,w.jsx)(`input`,{name:`credential_type`,value:c.credential_type,onChange:A,required:!0})]}),(0,w.jsxs)(`label`,{children:[`Title *`,(0,w.jsx)(`input`,{name:`title`,value:c.title,onChange:A,required:!0})]}),(0,w.jsxs)(`label`,{children:[`Credential Number`,(0,w.jsx)(`input`,{name:`credential_number`,value:c.credential_number,onChange:A})]}),(0,w.jsxs)(`label`,{children:[`Issuing Authority`,(0,w.jsx)(`input`,{name:`issuing_authority`,value:c.issuing_authority,onChange:A})]}),(0,w.jsxs)(`label`,{children:[`Country Code`,(0,w.jsx)(`input`,{name:`country`,maxLength:`2`,value:c.country,onChange:A})]}),(0,w.jsxs)(`label`,{children:[`Date Issued`,(0,w.jsx)(`input`,{type:`date`,name:`issued_on`,value:c.issued_on,onChange:A})]}),(0,w.jsxs)(`label`,{children:[`Expiry Date`,(0,w.jsx)(`input`,{type:`date`,name:`expires_on`,value:c.expires_on,disabled:c.does_not_expire,onChange:A})]}),(0,w.jsxs)(`label`,{children:[`Supporting Evidence`,(0,w.jsxs)(`select`,{name:`primary_document_id`,value:c.primary_document_id,onChange:A,children:[(0,w.jsx)(`option`,{value:``,children:`No document selected`}),n.map(e=>(0,w.jsx)(`option`,{value:e.id,children:e.title||e.original_name||`Document`},e.id))]})]})]}),(0,w.jsxs)(`label`,{className:`checkbox-row`,children:[(0,w.jsx)(`input`,{type:`checkbox`,name:`does_not_expire`,checked:c.does_not_expire,onChange:A}),(0,w.jsx)(`span`,{children:`This credential does not expire`})]}),(0,w.jsx)(`button`,{className:`primary-button`,disabled:g,children:g?`Saving...`:v?`Save Credential`:`Add Credential`}),v&&(0,w.jsx)(`button`,{type:`button`,className:`secondary-button`,onClick:ie,disabled:g,children:`Cancel Edit`})]}),(0,w.jsxs)(`div`,{className:`panel`,children:[(0,w.jsxs)(`div`,{className:`panel-title`,children:[(0,w.jsx)(`h2`,{children:`My Credentials`}),(0,w.jsxs)(`span`,{className:`muted`,children:[e.length,` `,`record(s)`]})]}),e.length===0?(0,w.jsx)(`p`,{children:`No professional credentials added yet.`}):(0,w.jsx)(`div`,{className:`credential-list`,children:e.map(e=>(0,w.jsxs)(`div`,{className:`credential-card`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:e.title}),(0,w.jsx)(`small`,{children:e.credential_type}),e.credential_number&&(0,w.jsxs)(`span`,{children:[`No.`,` `,e.credential_number]}),e.issuing_authority&&(0,w.jsx)(`span`,{children:e.issuing_authority})]}),(0,w.jsxs)(`div`,{className:`credential-actions`,children:[(0,w.jsx)(`span`,{className:`document-status`,children:e.verification_status||e.status||`Pending`}),(0,w.jsx)(`button`,{type:`button`,className:`secondary-button`,onClick:()=>re(e),children:`Edit`}),(0,w.jsx)(`button`,{type:`button`,className:`danger-link`,onClick:()=>se(e.id),children:`Delete`})]})]},e.id))})]})]}),(0,w.jsxs)(`div`,{className:`credentials-layout`,children:[(0,w.jsxs)(`form`,{className:`panel credentials-form`,onSubmit:ae,children:[(0,w.jsx)(`h2`,{children:`Upload Supporting Document`}),(0,w.jsxs)(`label`,{children:[`Document Type *`,(0,w.jsx)(`input`,{name:`document_type`,value:u.document_type,onChange:te,required:!0})]}),(0,w.jsxs)(`label`,{children:[`Document Title`,(0,w.jsx)(`input`,{name:`title`,value:u.title,onChange:te})]}),(0,w.jsxs)(`div`,{className:`profile-grid two`,children:[(0,w.jsxs)(`label`,{children:[`Date Issued`,(0,w.jsx)(`input`,{type:`date`,name:`issued_on`,value:u.issued_on,onChange:te})]}),(0,w.jsxs)(`label`,{children:[`Expiry Date`,(0,w.jsx)(`input`,{type:`date`,name:`expires_on`,value:u.expires_on,onChange:te})]})]}),(0,w.jsxs)(`label`,{children:[`File *`,(0,w.jsx)(`input`,{type:`file`,name:`file`,accept:`.pdf,.jpg,.jpeg,.png,.docx`,onChange:te,required:!0})]}),(0,w.jsx)(`button`,{className:`primary-button`,disabled:b,children:b?`Uploading...`:`Upload Document`})]}),(0,w.jsxs)(`div`,{className:`panel`,children:[(0,w.jsxs)(`div`,{className:`panel-title`,children:[(0,w.jsx)(`h2`,{children:`Credential Documents`}),(0,w.jsxs)(`span`,{className:`muted`,children:[n.length,` `,`file(s)`]})]}),n.length===0?(0,w.jsx)(`p`,{children:`No credential documents uploaded yet.`}):(0,w.jsx)(`div`,{className:`document-list`,children:n.map(e=>(0,w.jsxs)(`div`,{className:`document-row`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:e.title||e.original_name||`Document`}),(0,w.jsx)(`small`,{children:e.document_type})]}),(0,w.jsxs)(`div`,{className:`credential-actions`,children:[(0,w.jsx)(`span`,{className:`document-status`,children:e.security_status||e.malware_scan_status||`Pending`}),(0,w.jsx)(`button`,{type:`button`,className:`danger-link`,onClick:()=>ce(e.id),children:`Delete`})]})]},e.id))})]})]}),(0,w.jsxs)(`div`,{className:`credentials-layout`,children:[(0,w.jsxs)(`form`,{className:`panel credentials-form`,onSubmit:oe,children:[(0,w.jsx)(`h2`,{children:`Add Professional Development`}),(0,w.jsxs)(`label`,{children:[`Record Type`,(0,w.jsxs)(`select`,{name:`record_type`,value:f.record_type,onChange:j,children:[(0,w.jsx)(`option`,{value:`training`,children:`Training`}),(0,w.jsx)(`option`,{value:`seminar`,children:`Seminar`}),(0,w.jsx)(`option`,{value:`cpd`,children:`CPD`}),(0,w.jsx)(`option`,{value:`workshop`,children:`Workshop`}),(0,w.jsx)(`option`,{value:`conference`,children:`Conference`})]})]}),(0,w.jsxs)(`label`,{children:[`Title *`,(0,w.jsx)(`input`,{name:`title`,value:f.title,onChange:j,required:!0})]}),(0,w.jsxs)(`label`,{children:[`Provider`,(0,w.jsx)(`input`,{name:`provider`,value:f.provider,onChange:j})]}),(0,w.jsxs)(`div`,{className:`profile-grid two`,children:[(0,w.jsxs)(`label`,{children:[`Country Code`,(0,w.jsx)(`input`,{name:`country`,maxLength:`2`,value:f.country,onChange:j})]}),(0,w.jsxs)(`label`,{children:[`Completed On`,(0,w.jsx)(`input`,{type:`date`,name:`completed_on`,value:f.completed_on,onChange:j})]}),(0,w.jsxs)(`label`,{children:[`CPD Units`,(0,w.jsx)(`input`,{type:`number`,min:`0`,step:`0.01`,name:`cpd_units`,value:f.cpd_units,onChange:j})]}),(0,w.jsxs)(`label`,{children:[`Hours`,(0,w.jsx)(`input`,{type:`number`,min:`0`,step:`0.01`,name:`hours`,value:f.hours,onChange:j})]})]}),(0,w.jsx)(`button`,{className:`primary-button`,disabled:C,children:C?`Saving...`:`Add Development Record`})]}),(0,w.jsxs)(`div`,{className:`panel`,children:[(0,w.jsxs)(`div`,{className:`panel-title`,children:[(0,w.jsx)(`h2`,{children:`Professional Development History`}),(0,w.jsxs)(`span`,{className:`muted`,children:[i.length,` `,`record(s)`]})]}),i.length===0?(0,w.jsx)(`p`,{children:`No professional development records yet.`}):(0,w.jsx)(`div`,{className:`credential-list`,children:i.map(e=>(0,w.jsxs)(`div`,{className:`credential-card`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:e.title}),(0,w.jsx)(`small`,{children:e.record_type}),e.provider&&(0,w.jsx)(`span`,{children:e.provider}),e.cpd_units!=null&&(0,w.jsxs)(`span`,{children:[e.cpd_units,` `,`CPD units`]})]}),(0,w.jsx)(`button`,{type:`button`,className:`danger-link`,onClick:()=>le(e.id),children:`Delete`})]},e.id))})]})]})]})}var Hn=[`ID Picture (2×2, white background)`,`LBS Application Form`,`LBS CV Format Template`,`My Resume`,`Certificate of Employment`,`Reference Letter`,`College Diploma`,`High School Diploma`,`Transcript of Record / RLE`,`PRC License Card (Front & Back)`,`PRC Board Rating`],q=()=>window.NurseLinkPhase2Final||{};function Un(e){return Array.isArray(e)?e:Array.isArray(e?.data)?e.data:Array.isArray(e?.items)?e.items:Array.isArray(e?.results)?e.results:[]}function Wn({eyebrow:e=`NurseLink Member Services`,title:t,description:n,children:r}){return(0,w.jsxs)(`div`,{className:`page nl-live-page`,children:[(0,w.jsx)(`div`,{className:`page-header`,children:(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`div`,{className:`eyebrow`,children:e}),(0,w.jsx)(`h1`,{children:t}),(0,w.jsx)(`p`,{children:n})]})}),r]})}function Gn({loading:e,error:t,empty:n,children:r}){return e?(0,w.jsx)(`div`,{className:`nl-phase2-panel`,children:(0,w.jsx)(`p`,{children:`Loading NurseLink data…`})}):t?(0,w.jsxs)(`div`,{className:`nl-phase2-error`,role:`alert`,children:[(0,w.jsx)(`strong`,{children:`Unable to load this service.`}),(0,w.jsx)(`div`,{children:t})]}):n?(0,w.jsx)(`div`,{className:`nl-phase2-panel`,children:(0,w.jsx)(`p`,{children:`No records are available yet.`})}):r}function Kn(e){let[t,n]=(0,S.useState)(null),[r,i]=(0,S.useState)(!0),[a,o]=(0,S.useState)(``),s=async()=>{i(!0),o(``);try{n(await e())}catch(e){o(e?.message||`Request failed`)}finally{i(!1)}};return(0,S.useEffect)(()=>{s()},[]),{data:t,loading:r,error:a,reload:s}}function qn(){let{data:e,loading:t,error:n,reload:r}=Kn(()=>q().JobApi.opportunities()),[i,a]=(0,S.useState)(``),o=Un(e).filter(e=>[e.title,e.employer_name,e.country,e.specialty].filter(Boolean).join(` `).toLowerCase().includes(i.toLowerCase())),[s,c]=(0,S.useState)(null),[l,u]=(0,S.useState)(``);async function d(e){c(e.id),u(``);try{await q().JobApi.apply({job_opportunity_id:e.id}),u(`Application submitted.`)}catch(e){u(e?.message||`Unable to apply.`)}finally{c(null)}}return(0,w.jsxs)(Wn,{eyebrow:`Career & Jobs`,title:`LBS Vacancies`,description:`Explore verified NurseLink opportunities and apply from your member account.`,children:[(0,w.jsxs)(`label`,{children:[`Search vacancies`,(0,w.jsx)(`input`,{type:`search`,value:i,onChange:e=>a(e.target.value),placeholder:`Position, company, country or specialty`})]}),(0,w.jsx)(`p`,{children:`Jobs are ordered by NurseLink’s existing matching service. Review the requirements before applying.`}),l&&(0,w.jsx)(`div`,{className:`nl-phase2-note`,children:l}),(0,w.jsx)(Gn,{loading:t,error:n,empty:!o.length,children:(0,w.jsx)(`div`,{className:`nl-live-list`,children:o.map(e=>(0,w.jsxs)(`article`,{className:`nl-phase2-panel`,children:[(0,w.jsxs)(`div`,{className:`nl-live-card-head`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h2`,{children:e.title||`Opportunity`}),(0,w.jsxs)(`p`,{children:[e.employer_name||e.partner_organization?.name||`NurseLink partner`,e.country?` · ${e.country}`:``]})]}),(0,w.jsx)(`span`,{className:`badge`,children:e.status||`open`})]}),e.description&&(0,w.jsx)(`p`,{children:e.description}),(0,w.jsxs)(`p`,{children:[(0,w.jsx)(`strong`,{children:`Salary: `}),e.salary_min==null?`Not disclosed`:`${e.salary_currency||``} ${e.salary_min.toLocaleString()}${e.salary_max==null?` minimum`:` to ${e.salary_max.toLocaleString()}`}`]}),(0,w.jsxs)(`div`,{className:`nl-live-meta`,children:[(0,w.jsx)(`span`,{children:e.employment_type||`Employment`}),(0,w.jsx)(`span`,{children:e.work_setting||`Work setting not specified`}),e.minimum_experience_years!=null&&(0,w.jsxs)(`span`,{children:[e.minimum_experience_years,`+ yrs experience`]})]}),(0,w.jsxs)(`div`,{className:`nl-phase2-actions`,children:[(0,w.jsx)(`button`,{type:`button`,className:`primary-button`,disabled:s===e.id,onClick:()=>d(e),children:s===e.id?`Applying…`:`Apply`}),e.apply_url&&(0,w.jsx)(`a`,{className:`secondary-button`,href:e.apply_url,target:`_blank`,rel:`noreferrer`,children:`External details`})]})]},e.id))})})]})}function Jn(){let{data:e,loading:t,error:n}=Kn(()=>q().JobApi.applications()),r=Un(e),[i,a]=(0,S.useState)(null),[o,s]=(0,S.useState)(``);async function c(e){if(window.confirm(`Withdraw this job application?`)){a(e);try{await q().JobApi.withdraw(e),s(`Application withdrawn. Refresh the page to see the latest status.`)}catch(e){s(e?.message||`Unable to withdraw.`)}finally{a(null)}}}return(0,w.jsxs)(Wn,{eyebrow:`Career & Jobs`,title:`My Applied Jobs`,description:`Track applications, review status changes and manage active submissions.`,children:[o&&(0,w.jsx)(`div`,{className:`nl-phase2-note`,children:o}),(0,w.jsx)(Gn,{loading:t,error:n,empty:!1,children:r.length?(0,w.jsx)(`div`,{className:`nl-live-list`,children:r.map(e=>(0,w.jsxs)(`article`,{className:`nl-phase2-panel`,children:[(0,w.jsxs)(`div`,{className:`nl-live-card-head`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h2`,{children:e.title||e.job_opportunity?.title||e.job?.title||`Application #${e.id}`}),(0,w.jsx)(`p`,{children:e.employer_name||e.job_opportunity?.employer_name||e.job?.employer_name||`NurseLink opportunity`})]}),(0,w.jsx)(`span`,{className:`badge`,children:e.status||`submitted`})]}),(0,w.jsxs)(`details`,{children:[(0,w.jsx)(`summary`,{children:`View application details`}),(0,w.jsxs)(`p`,{children:[(0,w.jsx)(`strong`,{children:`Position:`}),` `,e.title]}),(0,w.jsxs)(`p`,{children:[(0,w.jsx)(`strong`,{children:`Company:`}),` `,e.employer_name]}),(0,w.jsxs)(`p`,{children:[(0,w.jsx)(`strong`,{children:`Salary:`}),` `,e.salary_min==null?`Not disclosed`:`${e.salary_currency||``} ${e.salary_min.toLocaleString()}${e.salary_max==null?` minimum`:` – ${e.salary_max.toLocaleString()}`}`]}),e.cover_note&&(0,w.jsx)(`p`,{children:e.cover_note})]}),(0,w.jsxs)(`div`,{className:`nl-live-meta`,children:[e.country&&(0,w.jsx)(`span`,{children:e.country}),e.submitted_at&&(0,w.jsxs)(`span`,{children:[`Date applied `,new Date(e.submitted_at).toLocaleDateString()]}),e.reviewed_at&&(0,w.jsxs)(`span`,{children:[`Reviewed `,new Date(e.reviewed_at).toLocaleDateString()]})]}),![`withdrawn`,`rejected`,`hired`,`closed`].includes(String(e.status||``).toLowerCase())&&(0,w.jsx)(`div`,{className:`nl-phase2-actions`,children:(0,w.jsx)(`button`,{type:`button`,className:`secondary-button`,disabled:i===e.id,onClick:()=>c(e.id),children:i===e.id?`Withdrawing…`:`Withdraw application`})})]},e.id))}):(0,w.jsx)(`p`,{children:`No online job applications are recorded in NurseLink yet.`})})]})}function Yn(){let[e,t]=(0,S.useState)([]),[n,r]=(0,S.useState)([]),[i,a]=(0,S.useState)(!0),[o,s]=(0,S.useState)(``);return(0,S.useEffect)(()=>{(async()=>{try{let[e,n]=await Promise.all([q().QualificationApi.frameworks(),q().QualificationApi.assessments()]);t(Un(e)),r(Un(n))}catch(e){s(e?.message||`Request failed`)}finally{a(!1)}})()},[]),(0,w.jsx)(Wn,{eyebrow:`Professional Development`,title:`Qualifications`,description:`Review NurseLink qualification frameworks and your assessment readiness.`,children:(0,w.jsx)(Gn,{loading:i,error:o,empty:!e.length&&!n.length,children:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`div`,{className:`nl-live-summary`,children:[(0,w.jsxs)(`div`,{className:`nl-phase2-panel`,children:[(0,w.jsx)(`strong`,{children:e.length}),(0,w.jsx)(`span`,{children:`Frameworks`})]}),(0,w.jsxs)(`div`,{className:`nl-phase2-panel`,children:[(0,w.jsx)(`strong`,{children:n.length}),(0,w.jsx)(`span`,{children:`Assessments`})]})]}),!!n.length&&(0,w.jsxs)(`div`,{className:`nl-live-list`,children:[(0,w.jsx)(`h2`,{children:`Your assessments`}),n.map(e=>(0,w.jsxs)(`article`,{className:`nl-phase2-panel`,children:[(0,w.jsxs)(`div`,{className:`nl-live-card-head`,children:[(0,w.jsx)(`h3`,{children:e.framework?.name||e.framework_name||`Qualification assessment`}),(0,w.jsx)(`span`,{className:`badge`,children:e.status||`draft`})]}),(0,w.jsxs)(`p`,{children:[`Readiness: `,e.readiness_score??0,`% `,e.readiness_label?`· ${e.readiness_label}`:``]})]},e.id))]}),!!e.length&&(0,w.jsxs)(`div`,{className:`nl-live-list`,children:[(0,w.jsx)(`h2`,{children:`Available frameworks`}),e.map(e=>(0,w.jsxs)(`article`,{className:`nl-phase2-panel`,children:[(0,w.jsx)(`h3`,{children:e.name||e.code}),(0,w.jsx)(`p`,{children:e.description||`${e.jurisdiction||`NurseLink`} qualification framework`}),(0,w.jsxs)(`div`,{className:`nl-live-meta`,children:[(0,w.jsx)(`span`,{children:e.version_label||`Current version`}),(0,w.jsxs)(`span`,{children:[e.level_count||0,` levels`]})]})]},e.id))]})]})})})}function Xn(e,t=[],n=new Set){return!e||typeof e!=`object`||n.has(e)?t:(n.add(e),Array.isArray(e)?(e.forEach(e=>Xn(e,t,n)),t):((`original_name`in e||`document_type`in e||`mime_type`in e)&&(`id`in e||`path`in e||`storage_path`in e)&&t.push(e),Object.values(e).forEach(e=>Xn(e,t,n)),t))}function Zn(){let[e,t]=(0,S.useState)(`initial`),[n,r]=(0,S.useState)(null),[i,a]=(0,S.useState)(!0),[o,s]=(0,S.useState)(``);(0,S.useEffect)(()=>{(async()=>{try{let[e,t]=await Promise.allSettled([q().CredentialApi.dashboard(),O(`/api/smart-registration`)]);if(e.status===`rejected`&&t.status===`rejected`)throw Error(`Unable to load your documents. Please try again.`);r({cred:e.status===`fulfilled`?e.value:null,app:t.status===`fulfilled`?t.value:null})}catch(e){s(e?.message||`Request failed`)}finally{a(!1)}})()},[]);let c=(0,S.useMemo)(()=>Xn(n||[]).filter((e,t,n)=>n.findIndex(t=>String(t.id??t.path??t.storage_path)===String(e.id??e.path??e.storage_path))===t),[n]);return(0,w.jsxs)(Wn,{eyebrow:`Professional Records`,title:`Documents`,description:`View evidence associated with your application and credentials.`,children:[(0,w.jsxs)(`div`,{className:`nl-phase2-actions`,role:`group`,"aria-label":`Document stages`,children:[(0,w.jsx)(`button`,{type:`button`,"aria-pressed":e===`initial`,onClick:()=>t(`initial`),children:`Initial Documents`}),(0,w.jsx)(`button`,{type:`button`,"aria-pressed":e===`processing`,onClick:()=>t(`processing`),children:`Processing Documents`})]}),(0,w.jsx)(`section`,{className:`nl-phase2-panel`,children:e===`initial`?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`h2`,{children:`Initial document checklist`}),(0,w.jsx)(`p`,{children:`Use this list to prepare your applicant file. Submit only documents requested by the LBS team.`}),(0,w.jsx)(`ul`,{children:Hn.map(e=>(0,w.jsx)(`li`,{children:e},e))}),(0,w.jsx)(`a`,{className:`primary-button`,href:`/smart-registration`,children:`Upload application documents`})]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`h2`,{children:`Processing documents`}),(0,w.jsx)(`p`,{children:`Follow the specific requirements provided by your recruiter for your job application. Check Messages for requests and manage professional evidence in Credentials.`}),(0,w.jsx)(`a`,{className:`secondary-button`,href:`/messages`,children:`Open messages`}),` `,(0,w.jsx)(`a`,{className:`secondary-button`,href:`/credentials`,children:`Manage credential evidence`})]})}),(0,w.jsx)(`h2`,{children:`Your recorded documents`}),(0,w.jsx)(Gn,{loading:i,error:o,empty:!c.length,children:(0,w.jsx)(`div`,{className:`nl-live-list`,children:c.map((e,t)=>(0,w.jsxs)(`article`,{className:`nl-phase2-panel`,children:[(0,w.jsxs)(`div`,{className:`nl-live-card-head`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h2`,{children:e.title||e.original_name||e.document_type||`Document`}),(0,w.jsx)(`p`,{children:e.document_type||e.category||e.mime_type||`Evidence`})]}),(0,w.jsx)(`span`,{className:`badge`,children:e.security_status||e.upload_status||e.verification_status||`recorded`})]}),e.expires_on&&(0,w.jsxs)(`p`,{children:[`Expires: `,e.expires_on]})]},e.id||e.path||t))})}),!i&&!o&&!c.length&&(0,w.jsx)(`div`,{className:`nl-phase2-note`,children:`No supporting documents were returned for this account. Upload and manage application evidence in Smart Registration and credential evidence in Credentials.`})]})}function Qn(){let{data:e,loading:t,error:n,reload:r}=Kn(()=>q().EventsApi.list()),i=Un(e),[a,o]=(0,S.useState)(null),[s,c]=(0,S.useState)(``);async function l(e){o(e),c(``);try{await q().EventsApi.register(e),c(`Registration submitted.`),await r()}catch(e){c(e?.message||`Unable to register.`)}finally{o(null)}}return(0,w.jsxs)(Wn,{eyebrow:`Community & Learning`,title:`Events`,description:`View NurseLink events and register for available activities.`,children:[s&&(0,w.jsx)(`div`,{className:`nl-phase2-note`,children:s}),(0,w.jsx)(Gn,{loading:t,error:n,empty:!1,children:i.length?(0,w.jsx)(`div`,{className:`nl-live-list`,children:i.map(e=>(0,w.jsxs)(`article`,{className:`nl-phase2-panel`,children:[(0,w.jsxs)(`div`,{className:`nl-live-card-head`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h2`,{children:e.title||`Event`}),(0,w.jsx)(`p`,{children:e.venue_name||e.venue||e.delivery_mode||e.format||`NurseLink event`})]}),(0,w.jsx)(`span`,{className:`badge`,children:e.status||`scheduled`})]}),e.description&&(0,w.jsx)(`p`,{children:e.description}),(0,w.jsxs)(`div`,{className:`nl-live-meta`,children:[e.starts_at&&(0,w.jsx)(`span`,{children:new Date(e.starts_at).toLocaleString()}),e.capacity!=null&&(0,w.jsxs)(`span`,{children:[`Capacity `,e.capacity]})]}),(0,w.jsx)(`div`,{className:`nl-phase2-actions`,children:(0,w.jsx)(`button`,{type:`button`,className:`primary-button`,disabled:a===e.id,onClick:()=>l(e.id),children:a===e.id?`Registering…`:`Register`})})]},e.id))}):(0,w.jsxs)(`div`,{className:`nl-phase2-panel nl-event-empty-v330`,children:[(0,w.jsx)(`div`,{className:`nl-empty-icon`,"aria-hidden":`true`,children:`◫`}),(0,w.jsx)(`h2`,{children:`No upcoming events yet`}),(0,w.jsx)(`p`,{children:`New NurseLink training activities, webinars, workshops and community events will appear here when they are published.`})]})})]})}function $n(e,t=[],n=new Set){if(!e||typeof e!=`object`||n.has(e))return t;if(n.add(e),Array.isArray(e))return e.forEach(e=>$n(e,t,n)),t;let r=Object.keys(e).map(e=>e.toLowerCase());return(r.includes(`credential_type`)||r.includes(`license_number`)||r.includes(`credential_number`)||r.includes(`issuing_authority`))&&(r.includes(`id`)||r.includes(`uuid`)||r.includes(`title`)||r.includes(`name`))&&t.push(e),Object.values(e).forEach(e=>$n(e,t,n)),t}function er(e){let t=new Set;return e.filter(e=>{let n=String(e?.id??e?.uuid??e?.credential_number??e?.license_number??e?.title??e?.name??JSON.stringify(e));return!t.has(n)&&(t.add(n),!0)})}function tr({children:e}){let[t,n]=(0,S.useState)([]),[r,i]=(0,S.useState)(null),[a,o]=(0,S.useState)(!1);(0,S.useEffect)(()=>{let e=!0;return(async()=>{try{let t=window.NurseLinkPhase2Final,[r,a]=await Promise.allSettled([t?.ApplicationApi?.get?.(),t?.CredentialApi?.list?.()]);if(!e)return;if(r.status===`fulfilled`&&n(er($n(r.value))),a.status===`fulfilled`){let e=a.value,t=Array.isArray(e)?e:Array.isArray(e?.data)?e.data:Array.isArray(e?.items)?e.items:[];i(t.length)}}finally{e&&o(!0)}})(),()=>{e=!1}},[]);let s=t.length;return(0,w.jsxs)(`div`,{className:`nl-credential-reconcile-v330`,children:[a&&(s>0||r!==null)&&(0,w.jsxs)(`section`,{className:`nl-phase2-panel nl-credential-context`,"aria-label":`Credential record context`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`div`,{className:`eyebrow`,children:`Credential Record Context`}),(0,w.jsx)(`h1`,{children:`Your NurseLink credential records`}),(0,w.jsx)(`p`,{children:`Application credentials and post-approval professional credentials are maintained as separate record sets.`})]}),(0,w.jsxs)(`div`,{className:`nl-credential-context-stats`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:s}),(0,w.jsxs)(`span`,{children:[`Application credential`,s===1?``:`s`]})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:r??`—`}),(0,w.jsxs)(`span`,{children:[`Professional credential`,r===1?``:`s`]})]})]}),s>0&&r===0&&(0,w.jsx)(`div`,{className:`nl-phase2-note`,children:`Your Smart Registration credentials are already recorded. The professional credential workspace below starts separately so you can maintain post-approval licenses, certificates and renewals without duplicating application evidence.`})]}),e]})}async function nr(e,t={}){let n=await fetch(e,{credentials:`include`,headers:{Accept:`application/json`,...t.body&&!(t.body instanceof FormData)?{"Content-Type":`application/json`}:{},...t.headers||{}},...t,body:t.body&&!(t.body instanceof FormData)&&typeof t.body!=`string`?JSON.stringify(t.body):t.body});if(n.status===204)return null;let r=await n.json().catch(()=>({}));if(!n.ok){let e=r?.errors?Object.values(r.errors).flat().find(Boolean):null;throw Error(e||r?.message||`Request failed (${n.status})`)}return r}function rr({loading:e,error:t,empty:n,emptyTitle:r,emptyText:i,children:a}){return e?(0,w.jsx)(`div`,{className:`nl410-state`,children:`Loading…`}):t?(0,w.jsx)(`div`,{className:`nl410-state nl410-error`,role:`alert`,children:t}):n?(0,w.jsxs)(`div`,{className:`nl410-state`,children:[(0,w.jsx)(`strong`,{children:r}),(0,w.jsx)(`span`,{children:i})]}):a}function ir(e){if(!e)return``;let t=new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleString()}function ar(e){let t=e?.data;return Array.isArray(t)?t:Array.isArray(t?.data)?t.data:[]}function or(){let e=(0,S.useRef)(null);return(0,S.useEffect)(()=>window.NLConversations?.mount(e.current,!1),[]),(0,w.jsx)(`div`,{ref:e})}function sr(){let[e,t]=(0,S.useState)(null),[n,r]=(0,S.useState)(!0),[i,a]=(0,S.useState)(``),[o,s]=(0,S.useState)(null),[c,l]=(0,S.useState)(null),[u,d]=(0,S.useState)(null),[f,p]=(0,S.useState)(!1),[m,h]=(0,S.useState)(``),g=(0,S.useCallback)(async()=>{r(!0),a(``);try{let[e,n]=await Promise.all([nr(`/api/messages`),nr(`/api/notification-preferences`).catch(()=>null)]);t(e),n?.data&&d(n)}catch(e){a(e?.message||`Unable to load your inbox.`)}finally{r(!1)}},[]);(0,S.useEffect)(()=>{g()},[g]);let _=(0,S.useMemo)(()=>ar(e),[e]),v=Number(e?.unread_count||_.filter(e=>!e.read_at).length||0);async function y(e){s(e.id);try{let t=await nr(`/api/messages/${encodeURIComponent(e.id)}`);l(t?.data||e),await g()}catch(e){a(e?.message||`Unable to open message.`)}finally{s(null)}}async function b(e){s(e.id);try{await nr(`/api/messages/${encodeURIComponent(e.id)}/read`,{method:`POST`}),await g()}catch(e){a(e?.message||`Unable to mark message as read.`)}finally{s(null)}}async function x(e){if(window.confirm(`Archive this NurseLink message?`)){s(e.id);try{await nr(`/api/messages/${encodeURIComponent(e.id)}/archive`,{method:`POST`}),c?.id===e.id&&l(null),await g()}catch(e){a(e?.message||`Unable to archive message.`)}finally{s(null)}}}async function C(e){p(!0),h(``);try{let t=await nr(`/api/notification-preferences`,{method:`PATCH`,body:{in_app_enabled:!!e.in_app_enabled,email_enabled:!!e.email_enabled,sms_enabled:!!e.sms_enabled,push_enabled:!!e.push_enabled,whatsapp_enabled:!!e.whatsapp_enabled,...e.timezone?{timezone:e.timezone}:{}}});d(t)}catch(e){h(e?.message||`Unable to save notification preferences.`)}finally{p(!1)}}let T=u?.data||null;return(0,w.jsxs)(`section`,{className:`nl410-page`,children:[(0,w.jsxs)(`header`,{className:`nl410-page-head`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`COMMUNICATIONS`}),(0,w.jsx)(`h1`,{children:`Messages`}),(0,w.jsx)(`p`,{children:`Your real NurseLink inbox, action messages and communication preferences.`})]}),(0,w.jsxs)(`div`,{className:`nl410-count`,children:[(0,w.jsx)(`strong`,{children:v}),(0,w.jsx)(`span`,{children:`Unread`})]})]}),(0,w.jsx)(or,{}),(0,w.jsxs)(`div`,{className:`nl410-grid`,children:[(0,w.jsxs)(`section`,{className:`nl410-panel`,children:[(0,w.jsxs)(`div`,{className:`nl410-panel-head`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`INBOX`}),(0,w.jsx)(`h2`,{children:`Member messages`})]}),(0,w.jsx)(`button`,{type:`button`,className:`secondary-button`,onClick:g,children:`Refresh`})]}),(0,w.jsx)(rr,{loading:n,error:i,empty:!_.length,emptyTitle:`Your inbox is clear`,emptyText:`New NurseLink messages will appear here.`,children:(0,w.jsx)(`div`,{className:`nl410-list`,children:_.map(e=>(0,w.jsxs)(`article`,{className:`nl410-message ${e.read_at?``:`is-unread`}`,children:[(0,w.jsxs)(`button`,{type:`button`,className:`nl410-message-main`,onClick:()=>y(e),disabled:o===e.id,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:e.subject||`NurseLink message`}),(0,w.jsx)(`p`,{children:e.body||``})]}),(0,w.jsxs)(`div`,{className:`nl410-message-meta`,children:[(0,w.jsx)(`span`,{children:e.priority||e.category||`message`}),(0,w.jsx)(`small`,{children:ir(e.published_at)})]})]}),(0,w.jsxs)(`div`,{className:`nl410-row-actions`,children:[!e.read_at&&(0,w.jsx)(`button`,{type:`button`,className:`secondary-button`,onClick:()=>b(e),disabled:o===e.id,children:`Mark read`}),e.action_url&&(0,w.jsx)(`a`,{className:`secondary-button`,href:e.action_url,children:`Open action`}),(0,w.jsx)(`button`,{type:`button`,className:`secondary-button`,onClick:()=>x(e),disabled:o===e.id,children:`Archive`})]})]},e.id))})})]}),(0,w.jsxs)(`aside`,{className:`nl410-stack`,children:[(0,w.jsxs)(`section`,{className:`nl410-panel nl410-detail`,children:[(0,w.jsx)(`div`,{className:`nl410-panel-head`,children:(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`MESSAGE DETAIL`}),(0,w.jsx)(`h2`,{children:c?.subject||`Select a message`})]})}),c?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`p`,{className:`nl410-detail-body`,children:c.body||``}),(0,w.jsxs)(`div`,{className:`nl410-meta-grid`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Category`}),(0,w.jsx)(`strong`,{children:c.category||`—`})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Priority`}),(0,w.jsx)(`strong`,{children:c.priority||`—`})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Published`}),(0,w.jsx)(`strong`,{children:ir(c.published_at)||`—`})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Status`}),(0,w.jsx)(`strong`,{children:c.read_at?`Read`:`Unread`})]})]}),c.action_url&&(0,w.jsx)(`a`,{className:`primary-button`,href:c.action_url,children:`Open NurseLink action`})]}):(0,w.jsx)(`div`,{className:`nl410-state`,children:`Choose a message to view its complete content.`})]}),T&&(0,w.jsxs)(`section`,{className:`nl410-panel`,children:[(0,w.jsx)(`div`,{className:`nl410-panel-head`,children:(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`PREFERENCES`}),(0,w.jsx)(`h2`,{children:`Notification channels`}),(0,w.jsx)(`p`,{children:`Mandatory categories remain governed by NurseLink policy.`})]})}),m&&(0,w.jsx)(`div`,{className:`nl410-inline-error`,role:`alert`,children:m}),(0,w.jsx)(`div`,{className:`nl410-pref-list`,children:[[`in_app_enabled`,`In-app`],[`email_enabled`,`Email`],[`sms_enabled`,`SMS`],[`push_enabled`,`Push`],[`whatsapp_enabled`,`WhatsApp`]].map(([e,t])=>(0,w.jsxs)(`label`,{children:[(0,w.jsx)(`span`,{children:t}),(0,w.jsx)(`input`,{type:`checkbox`,checked:!!T[e],onChange:t=>d({...u,data:{...T,[e]:t.target.checked}})})]},e))}),(0,w.jsx)(`button`,{type:`button`,className:`primary-button`,disabled:f,onClick:()=>C(T),children:f?`Saving…`:`Save preferences`})]})]})]})]})}var cr={record_type:`training`,title:``,provider:``,completed_on:``,cpd_units:``,hours:``};function lr(e){return{record_type:e.record_type,title:e.title.trim(),provider:e.provider.trim()||null,completed_on:e.completed_on||null,cpd_units:e.cpd_units===``?null:Number(e.cpd_units),hours:e.hours===``?null:Number(e.hours)}}function ur(){let[e,t]=(0,S.useState)([]),[n,r]=(0,S.useState)(!0),[i,a]=(0,S.useState)(``),[o,s]=(0,S.useState)(``),[c,l]=(0,S.useState)(cr),[u,d]=(0,S.useState)(null),[f,p]=(0,S.useState)(!1),m=(0,S.useRef)(null);(0,S.useLayoutEffect)(()=>{let e=m.current;if(!e)return;let t=(e,t,n)=>{!e||e.style.getPropertyValue(t)===n&&e.style.getPropertyPriority(t)===`important`||e.style.setProperty(t,n,`important`)},n=()=>{let n=window.matchMedia(`(max-width: 760px)`).matches;t(e,`display`,`block`),t(e,`width`,`100%`);let r=e.querySelector(`.nl410-page-head`),i=e.querySelector(`.nl410-stats`),a=e.querySelector(`.nl410-learning-grid`);t(r,`display`,`flex`),t(r,`width`,`100%`),t(i,`display`,`grid`),t(i,`width`,`100%`),t(i,`grid-template-columns`,n?`repeat(2,minmax(0,1fr))`:`repeat(4,minmax(0,1fr))`),t(a,`display`,`grid`),t(a,`width`,`100%`),t(a,`grid-template-columns`,n?`1fr`:`minmax(300px,380px) minmax(0,1fr)`)};n();let r=new MutationObserver(n);return r.observe(e,{subtree:!0,attributes:!0,attributeFilter:[`class`,`style`]}),window.addEventListener(`resize`,n),()=>{r.disconnect(),window.removeEventListener(`resize`,n)}},[]);let h=(0,S.useCallback)(async()=>{r(!0),a(``);try{let e=await nr(`/api/professional-development`);t(Array.isArray(e?.data)?e.data:[])}catch(e){a(e?.message||`Unable to load professional learning records.`)}finally{r(!1)}},[]);(0,S.useEffect)(()=>{h()},[h]);let g=(0,S.useMemo)(()=>e.reduce((e,t)=>(e.hours+=Number(t.hours||0),e.cpd+=Number(t.cpd_units||0),t.status===`verified`&&(e.verified+=1),e),{hours:0,cpd:0,verified:0}),[e]);function _(e){d(e.id),l({record_type:e.record_type||`training`,title:e.title||``,provider:e.provider||``,completed_on:e.completed_on?String(e.completed_on).slice(0,10):``,cpd_units:e.cpd_units??``,hours:e.hours??``}),window.scrollTo({top:0,behavior:`smooth`})}function v(){d(null),l(cr),s(``)}async function y(e){e.preventDefault(),p(!0),a(``),s(``);try{await nr(u?`/api/professional-development/${encodeURIComponent(u)}`:`/api/professional-development`,{method:u?`PATCH`:`POST`,body:lr(c)}),s(u?`Learning record updated. Verification status was reset to self-declared for review.`:`Learning record added as self-declared.`),d(null),l(cr),await h()}catch(e){a(e?.message||`Unable to save learning record.`)}finally{p(!1)}}async function b(e){if(window.confirm(`Delete "${e.title}" from your professional learning record?`)){p(!0),a(``),s(``);try{await nr(`/api/professional-development/${encodeURIComponent(e.id)}`,{method:`DELETE`}),s(`Learning record deleted.`),await h()}catch(e){a(e?.message||`Unable to delete learning record.`)}finally{p(!1)}}}return(0,w.jsx)(`section`,{className:`nl410-page`,children:(0,w.jsxs)(`div`,{className:`nl410-learning-flow`,ref:m,children:[(0,w.jsx)(`header`,{className:`nl410-page-head`,children:(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`PROFESSIONAL LEARNING`}),(0,w.jsx)(`h1`,{children:`Learning`}),(0,w.jsx)(`p`,{children:`Maintain your actual NurseLink professional development record.`})]})}),(0,w.jsxs)(`div`,{className:`nl410-stats`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Total records`}),(0,w.jsx)(`strong`,{children:e.length})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Verified`}),(0,w.jsx)(`strong`,{children:g.verified})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Learning hours`}),(0,w.jsx)(`strong`,{children:g.hours.toFixed(1)})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`CPD units`}),(0,w.jsx)(`strong`,{children:g.cpd.toFixed(1)})]})]}),(i||o)&&(0,w.jsx)(`div`,{className:`nl410-notice ${i?`is-error`:`is-success`}`,role:i?`alert`:`status`,children:i||o}),(0,w.jsxs)(`div`,{className:`nl410-grid nl410-learning-grid`,children:[(0,w.jsxs)(`form`,{className:`nl410-panel nl410-form`,onSubmit:y,children:[(0,w.jsx)(`div`,{className:`nl410-panel-head`,children:(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:u?`EDIT RECORD`:`ADD RECORD`}),(0,w.jsx)(`h2`,{children:u?`Update professional learning`:`Add professional learning`}),(0,w.jsx)(`p`,{children:`Self-declared records may later be independently verified.`})]})}),(0,w.jsxs)(`label`,{children:[(0,w.jsx)(`span`,{children:`Activity type *`}),(0,w.jsxs)(`select`,{value:c.record_type,onChange:e=>l({...c,record_type:e.target.value}),required:!0,children:[(0,w.jsx)(`option`,{value:`training`,children:`Training`}),(0,w.jsx)(`option`,{value:`seminar`,children:`Seminar`}),(0,w.jsx)(`option`,{value:`cpd`,children:`CPD`}),(0,w.jsx)(`option`,{value:`workshop`,children:`Workshop`}),(0,w.jsx)(`option`,{value:`conference`,children:`Conference`})]})]}),(0,w.jsxs)(`label`,{children:[(0,w.jsx)(`span`,{children:`Title *`}),(0,w.jsx)(`input`,{value:c.title,onChange:e=>l({...c,title:e.target.value}),maxLength:`180`,required:!0})]}),(0,w.jsxs)(`label`,{children:[(0,w.jsx)(`span`,{children:`Provider`}),(0,w.jsx)(`input`,{value:c.provider,onChange:e=>l({...c,provider:e.target.value}),maxLength:`180`})]}),(0,w.jsxs)(`div`,{className:`nl410-form-two`,children:[(0,w.jsxs)(`label`,{children:[(0,w.jsx)(`span`,{children:`Completed on`}),(0,w.jsx)(`input`,{type:`date`,value:c.completed_on,onChange:e=>l({...c,completed_on:e.target.value})})]}),(0,w.jsxs)(`label`,{children:[(0,w.jsx)(`span`,{children:`Hours`}),(0,w.jsx)(`input`,{type:`number`,min:`0`,max:`9999.99`,step:`0.01`,value:c.hours,onChange:e=>l({...c,hours:e.target.value})})]})]}),(0,w.jsxs)(`label`,{children:[(0,w.jsx)(`span`,{children:`CPD units`}),(0,w.jsx)(`input`,{type:`number`,min:`0`,max:`9999.99`,step:`0.01`,value:c.cpd_units,onChange:e=>l({...c,cpd_units:e.target.value})})]}),(0,w.jsxs)(`div`,{className:`nl410-row-actions`,children:[(0,w.jsx)(`button`,{className:`primary-button`,type:`submit`,disabled:f,children:f?`Saving…`:u?`Update record`:`Add learning record`}),u&&(0,w.jsx)(`button`,{className:`secondary-button`,type:`button`,onClick:v,disabled:f,children:`Cancel`})]})]}),(0,w.jsxs)(`section`,{className:`nl410-panel`,children:[(0,w.jsxs)(`div`,{className:`nl410-panel-head`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`LEARNING RECORD`}),(0,w.jsx)(`h2`,{children:`Your professional development`})]}),(0,w.jsx)(`button`,{type:`button`,className:`secondary-button`,onClick:h,children:`Refresh`})]}),(0,w.jsx)(rr,{loading:n,error:``,empty:!e.length,emptyTitle:`Start your professional learning record`,emptyText:`Add a course, webinar, workshop, conference or other supported learning activity.`,children:(0,w.jsx)(`div`,{className:`nl410-list`,children:e.map(e=>(0,w.jsxs)(`article`,{className:`nl410-learning-card`,children:[(0,w.jsxs)(`div`,{className:`nl410-learning-head`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:e.record_type||`learning`}),(0,w.jsx)(`h3`,{children:e.title}),(0,w.jsx)(`p`,{children:e.provider||`Provider not recorded`})]}),(0,w.jsx)(`span`,{className:`nl410-status ${e.status===`verified`?`is-verified`:``}`,children:e.status||`self_declared`})]}),(0,w.jsxs)(`div`,{className:`nl410-meta-grid`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Completed`}),(0,w.jsx)(`strong`,{children:e.completed_on?String(e.completed_on).slice(0,10):`—`})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Hours`}),(0,w.jsx)(`strong`,{children:Number(e.hours||0).toFixed(1)})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`CPD units`}),(0,w.jsx)(`strong`,{children:Number(e.cpd_units||0).toFixed(1)})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:`Evidence`}),(0,w.jsx)(`strong`,{children:e.evidence_document_id?`Linked`:`None`})]})]}),e.verification_note&&(0,w.jsx)(`p`,{className:`nl410-verification-note`,children:e.verification_note}),(0,w.jsxs)(`div`,{className:`nl410-row-actions`,children:[(0,w.jsx)(`button`,{type:`button`,className:`secondary-button`,onClick:()=>_(e),disabled:f,children:`Edit`}),(0,w.jsx)(`button`,{type:`button`,className:`secondary-button danger`,onClick:()=>b(e),disabled:f,children:`Delete`})]})]},e.id))})})]})]})]})})}var dr=`NURSELINK_IOS_FIRST_TAP_V406`;function fr(){return typeof navigator>`u`?!1:/iP(hone|ad|od)/.test(navigator.userAgent)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1}function pr(){if(typeof window>`u`||typeof document>`u`||!fr()||window.__nurselinkIOSFirstTapV406)return;window.__nurselinkIOSFirstTapV406=!0,document.documentElement.setAttribute(`data-nurselink-ios-first-tap`,`v4.0.6`);let e=0,t=0,n=null,r=!1,i=0,a=null,o=[`button`,`a[href]`,`[role="button"]`,`input[type="button"]`,`input[type="submit"]`].join(`,`);document.addEventListener(`touchstart`,i=>{if(i.touches.length!==1){n=null;return}let a=i.touches[0];e=a.clientX,t=a.clientY,n=i.target,r=!1},{capture:!0,passive:!0}),document.addEventListener(`touchmove`,i=>{if(!n||i.touches.length!==1)return;let a=i.touches[0];(Math.abs(a.clientX-e)>10||Math.abs(a.clientY-t)>10)&&(r=!0)},{capture:!0,passive:!0}),document.addEventListener(`touchend`,s=>{if(!n||r){n=null;return}let c=(s.target instanceof Element?s.target:null)?.closest(o);if(!c){n=null;return}if(c.matches(`input:not([type="button"]):not([type="submit"])`)||c.matches(`select, textarea`)||c.closest(`[contenteditable="true"]`)){n=null;return}if(c.hasAttribute(`disabled`)||c.getAttribute(`aria-disabled`)===`true`){n=null;return}let l=c.getBoundingClientRect();if(e<l.left-8||e>l.right+8||t<l.top-8||t>l.bottom+8){n=null;return}s.preventDefault(),i=Date.now(),a=c,c.click(),n=null},{capture:!0,passive:!1}),document.addEventListener(`click`,e=>{if(a){if(Date.now()-i>700){a=null;return}(e.target instanceof Element?e.target:null)?.closest(o)===a&&e.isTrusted&&(e.preventDefault(),e.stopImmediatePropagation()),a=null}},!0),console.info(dr)}function mr(e){if(e?.data?.errors){let t=Object.values(e.data.errors)[0];if(Array.isArray(t)&&t.length)return t[0]}return e?.data?.message||e?.message||`Unable to replace your password.`}function hr(){let e=u(),t=r(),n=new URLSearchParams(e.search),i=n.get(`token`)||``,a=n.get(`email`)||``,[o,s]=(0,S.useState)(``),[c,l]=(0,S.useState)(``),[d,f]=(0,S.useState)(``),[p,m]=(0,S.useState)(!1);async function h(e){if(e.preventDefault(),f(``),!i||!a){f(`This password-reset link is incomplete or invalid.`);return}if(o!==c){f(`Passwords do not match.`);return}m(!0);try{await ie({token:i,email:a,password:o,password_confirmation:c}),t(`/login`,{replace:!0})}catch(e){f(mr(e))}finally{m(!1)}}return(0,w.jsxs)(`div`,{className:`auth-screen`,children:[(0,w.jsxs)(`div`,{className:`auth-brand`,children:[(0,w.jsx)(`div`,{className:`brand-mark`,children:`NL`}),(0,w.jsx)(`h1`,{children:`NurseLink`}),(0,w.jsx)(`p`,{children:`Choose a new password for your NurseLink account.`})]}),(0,w.jsxs)(`div`,{className:`auth-card`,children:[(0,w.jsx)(`div`,{className:`eyebrow`,children:`Account Recovery`}),(0,w.jsx)(`h2`,{children:`Replace your password`}),(0,w.jsx)(`p`,{children:a||`Open the complete link from your reset email.`}),d&&(0,w.jsx)(`div`,{className:`form-error`,children:d}),(0,w.jsxs)(`form`,{onSubmit:h,children:[(0,w.jsxs)(`label`,{children:[`New password`,(0,w.jsx)(`input`,{type:`password`,value:o,onChange:e=>s(e.target.value),autoComplete:`new-password`,minLength:`8`,required:!0})]}),(0,w.jsxs)(`label`,{children:[`Confirm new password`,(0,w.jsx)(`input`,{type:`password`,value:c,onChange:e=>l(e.target.value),autoComplete:`new-password`,minLength:`8`,required:!0})]}),(0,w.jsx)(`button`,{type:`submit`,className:`primary-button full`,disabled:p||!i||!a,children:p?`Replacing password...`:`Replace password`})]})]})]})}var gr=Object.freeze({notifications:`Notifications`,mentoring:`Mentoring & peer support`,engagement:`Engagement`,"career-intelligence":`Career intelligence`,"credential-renewal":`Credential renewal`,"digital-member-id":`Digital member ID`});function J({name:e}){let t=(0,S.useRef)(null),[n,r]=(0,S.useState)(``),[i,a]=(0,S.useState)(``),[o,s]=(0,S.useState)(0),[c,l]=(0,S.useState)(!0),d=u();return(0,S.useEffect)(()=>{if(!Object.hasOwn(gr,e)){a(`This workspace is unavailable.`),l(!1);return}let t=new AbortController;return l(!0),a(``),r(``),fetch(`/lbs-workspaces/${e}.html?v=20260929`,{signal:t.signal,credentials:`same-origin`,cache:`no-cache`}).then(e=>{if(!e.ok||!e.headers.get(`content-type`)?.includes(`text/html`))throw Error(`The workspace could not be loaded.`);return e.text()}).then(e=>{t.signal.aborted||(r(e),l(!1))}).catch(e=>{t.signal.aborted||(a(e.message),l(!1))}),()=>t.abort()},[e,o]),(0,S.useEffect)(()=>{let e=t.current;if(!e||!n)return;let r,i,a=matchMedia(`(prefers-color-scheme: dark)`),o=()=>{let t=e.contentDocument?.documentElement;if(!t)return;let n=document.documentElement.dataset.theme||`light`,r=n===`system`?a.matches?`dark`:`light`:n;t.dataset.theme=r,t.dataset.nlTheme=r,t.style.colorScheme=r},s=()=>{cancelAnimationFrame(i),i=requestAnimationFrame(()=>{let t=e.contentDocument?.querySelector(`main`);if(!t)return;let n=t.getBoundingClientRect(),r=getComputedStyle(t),i=Math.max(360,Math.ceil(n.height+Math.max(0,n.top)+parseFloat(r.marginBottom||`0`)+24));e.style.height!==`${i}px`&&(e.style.height=`${i}px`)})},c=()=>{r?.disconnect();let t=e.contentDocument,n=t?.querySelector(`main`);n&&(o(),r=new ResizeObserver(s),r.observe(n),s(),d.hash&&t.getElementById(decodeURIComponent(d.hash.slice(1)))?.scrollIntoView({block:`center`}))},l=new MutationObserver(o);return l.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`]}),e.addEventListener(`load`,c),a.addEventListener(`change`,o),c(),()=>{r?.disconnect(),l.disconnect(),cancelAnimationFrame(i),e.removeEventListener(`load`,c),a.removeEventListener(`change`,o)}},[n,d.hash]),(0,w.jsxs)(`section`,{"aria-label":gr[e]||`Workspace`,"aria-busy":c,children:[c&&(0,w.jsxs)(`div`,{className:`lbs-managed-notice`,role:`status`,children:[`Loading `,gr[e]||`workspace`,`…`]}),i&&(0,w.jsxs)(`div`,{className:`lbs-managed-notice`,role:`alert`,children:[(0,w.jsx)(`h2`,{children:`Workspace could not be loaded`}),(0,w.jsxs)(`p`,{children:[i,` Your saved records have not changed.`]}),(0,w.jsx)(`button`,{className:`lbs-button`,onClick:()=>s(e=>e+1),children:`Try again`})]}),!c&&!i&&(0,w.jsx)(`iframe`,{ref:t,title:gr[e],className:`lbs-managed-frame`,srcDoc:n})]})}var _r=[{title:`My Applications`,links:[[`Job applications`,`/applications`],[`Processing checklist`,`/processing`],[`Membership review`,`/application-status`],[`Registration`,`/smart-registration`]]},{title:`Documents & CV`,links:[[`My documents`,`/documents`],[`CV maker`,`/cv-maker`],[`Credentials`,`/credentials`],[`Renewals`,`/credential-renewal`],[`Qualifications`,`/qualifications`],[`Portfolio`,`/portfolio`]]},{title:`Help & Support`,links:[[`Help centre`,`/help`],[`Welfare assistance`,`/welfare`],[`Policy & privacy`,`/policy-center`]]}],vr={"/dashboard":`Home`,"/jobs":`Job Opportunities`,"/appointments":`Appointments`,"/messages":`Messages`,"/profile":`My Profile`,"/notifications":`Notifications`,"/career-intelligence":`Career intelligence`,"/learning":`Learning`,"/mentoring":`Mentoring`,"/events":`Events`,"/engagement":`Engagement`,"/initiatives":`Programs`,"/digital-member-id":`Digital member ID`,"/policies":`Policies & advocacy`};function yr({pathname:e}){let t=_r.find(t=>t.links.some(([,t])=>e===t)),n=t?.links.find(([,t])=>t===e)?.[0]||vr[e]||`Workspace`;return(0,w.jsxs)(`div`,{className:`lbs-route-context`,children:[(0,w.jsxs)(`nav`,{className:`lbs-breadcrumbs`,"aria-label":`Breadcrumb`,children:[(0,w.jsx)(s,{to:`/dashboard`,children:`Home`}),e!==`/dashboard`&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`span`,{"aria-hidden":`true`,children:`/`}),(0,w.jsx)(`span`,{"aria-current":`page`,children:n})]})]}),t&&(0,w.jsx)(`nav`,{className:`lbs-workspace-tabs`,"aria-label":t.title,children:t.links.map(([e,t])=>(0,w.jsx)(l,{to:t,children:e},t))})]})}function br({open:e,setOpen:t}){return(0,S.useEffect)(()=>{let n=document.getElementById(`lbs-member-sidebar`),r=document.getElementById(`lbs-main-content`),i=window.matchMedia(`(max-width: 950px)`);if(!n||!r)return;let a=document.activeElement,o,s=()=>{n.inert=i.matches&&!e,r.inert=i.matches&&e,!i.matches&&e&&t(!1)};s(),e&&i.matches&&(o=requestAnimationFrame(()=>n.querySelector(`button`)?.focus()));let c=r=>{if(!e||!i.matches)return;if(r.key===`Escape`){r.preventDefault(),t(!1);return}if(r.key!==`Tab`)return;let a=[...n.querySelectorAll(`a[href],button:not([disabled]),input,select,[tabindex="0"]`)].filter(e=>e.getClientRects().length&&!e.closest(`[hidden]`));if(!a.length)return;let o=a[0],s=a[a.length-1];r.shiftKey&&document.activeElement===o?(r.preventDefault(),s.focus()):!r.shiftKey&&document.activeElement===s&&(r.preventDefault(),o.focus())};return document.addEventListener(`keydown`,c),i.addEventListener(`change`,s),()=>{cancelAnimationFrame(o),n.inert=!1,r.inert=!1,document.removeEventListener(`keydown`,c),i.removeEventListener(`change`,s),e&&a?.isConnected&&a.focus()}},[e,t]),null}function xr({error:e,retry:t}){return(0,w.jsxs)(`div`,{className:`lbs-empty`,role:`status`,children:[(0,w.jsx)(`h2`,{children:e?.status===403?`Membership access is required`:`Appointments could not be loaded`}),(0,w.jsx)(`p`,{children:e?.status===403?`Check your membership review for the next required action. No appointment information has been changed.`:`Your records have not been changed. Please retry or contact the recruitment team.`}),(0,w.jsx)(s,{className:`lbs-button`,to:`/application-status`,children:`View membership review`}),e?.status!==403&&(0,w.jsx)(`button`,{className:`lbs-button`,onClick:t,children:`Try again`})]})}function Sr(){let[e,t]=(0,S.useState)({loading:!0,rows:[]}),[n,r]=(0,S.useState)(0),[i,a]=(0,S.useState)(`all`);(0,S.useEffect)(()=>{let e=new AbortController;return t({loading:!0,rows:[]}),(async()=>{try{let n=await O(`/api/job-applications`,{signal:e.signal}),r=Array.isArray(n?.data)?n.data:[],i=r.slice(0,50),a=[],o=0,s=0,c=0;await Promise.all(Array.from({length:Math.min(4,i.length)},async()=>{for(;c<i.length&&!e.signal.aborted;){let t=i[c++];try{let n=await O(`/api/job-applications/${encodeURIComponent(t.id)}/communications`,{signal:e.signal});for(let e of n?.data?.interviews||[])a.push({...e,job:t})}catch(t){t.status===404?s++:e.signal.aborted||o++}}})),a.sort((e,t)=>String(e.scheduled_start||``).localeCompare(String(t.scheduled_start||``))),e.signal.aborted||t({rows:a,unavailable:o,unsupported:s,limited:r.length>50})}catch(n){e.signal.aborted||t({error:n,rows:[]})}})(),()=>e.abort()},[n]);let o=e=>String(e||`Not provided`).replace(/_/g,` `),c=e.rows.filter(e=>i===`all`||(i===`closed`?[`completed`,`cancelled`].includes(e.status):![`completed`,`cancelled`].includes(e.status)));return(0,w.jsxs)(`div`,{className:`lbs-page`,children:[(0,w.jsxs)(`header`,{className:`lbs-page-heading`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{className:`lbs-eyebrow`,children:`YOUR SCHEDULE`}),(0,w.jsx)(`h1`,{children:`Appointments & interviews`}),(0,w.jsx)(`p`,{children:`Interview schedules linked to your existing job applications.`})]}),(0,w.jsx)(`button`,{className:`lbs-button`,disabled:e.loading,onClick:()=>r(e=>e+1),children:`Refresh`})]}),(0,w.jsxs)(`section`,{className:`lbs-card`,children:[(0,w.jsxs)(`div`,{className:`lbs-section-heading`,children:[(0,w.jsx)(`h2`,{children:`Your interviews`}),(0,w.jsxs)(`label`,{className:`lbs-filter`,children:[`Show`,(0,w.jsxs)(`select`,{value:i,onChange:e=>a(e.target.value),children:[(0,w.jsx)(`option`,{value:`all`,children:`All interviews`}),(0,w.jsx)(`option`,{value:`active`,children:`Open interviews`}),(0,w.jsx)(`option`,{value:`closed`,children:`Completed or cancelled`})]})]})]}),e.loading?(0,w.jsx)(`p`,{role:`status`,children:`Checking appointment records…`}):e.error?(0,w.jsx)(xr,{error:e.error,retry:()=>r(e=>e+1)}):(0,w.jsxs)(w.Fragment,{children:[(e.unavailable>0||e.limited)&&(0,w.jsxs)(`p`,{className:`lbs-information`,role:`status`,children:[e.limited?`The latest 50 applications are included. `:``,e.unavailable>0?`${e.unavailable} application schedule(s) could not be checked. `:``,`Use My Applications to review individual records.`]}),c.length?(0,w.jsx)(`div`,{className:`lbs-appointment-list`,children:c.map(e=>(0,w.jsxs)(`article`,{className:`lbs-appointment`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{className:`lbs-status`,children:o(e.status)}),(0,w.jsx)(`h3`,{children:e.job.title||`Interview`}),(0,w.jsx)(`p`,{children:e.job.employer_name||`Employer details unavailable`}),(0,w.jsxs)(`dl`,{children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`dt`,{children:`Schedule`}),(0,w.jsxs)(`dd`,{children:[e.scheduled_start?String(e.scheduled_start).replace(`T`,` `).slice(0,16):`Schedule not provided`,e.timezone?` · ${e.timezone}`:` · timezone not provided`]})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`dt`,{children:`Format`}),(0,w.jsx)(`dd`,{children:o(e.mode)})]}),e.location_or_link&&(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`dt`,{children:`Location / joining details`}),(0,w.jsx)(`dd`,{className:`lbs-wrap`,children:e.location_or_link})]})]}),e.partner_notes&&(0,w.jsx)(`p`,{children:e.partner_notes})]}),(0,w.jsx)(s,{className:`lbs-button`,to:`/applications`,children:`Manage in My Applications`})]},`${e.job.id}-${e.id}`))}):(0,w.jsxs)(`div`,{className:`lbs-empty`,children:[(0,w.jsx)(`h3`,{children:`No interviews to display`}),(0,w.jsx)(`p`,{children:e.unsupported?`Some applications do not yet have a verified partner scheduling connection. Check My Applications or message the team for updates.`:`When an employer schedules an interview through NurseLink, it will appear here.`}),(0,w.jsx)(s,{className:`lbs-button`,to:`/applications`,children:`View my applications`})]})]})]}),(0,w.jsx)(`lbs-service-queue`,{})]})}function Cr(){return(0,w.jsxs)(`div`,{className:`lbs-page`,children:[(0,w.jsxs)(`header`,{className:`lbs-page-heading`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{className:`lbs-eyebrow`,children:`HERE TO HELP`}),(0,w.jsx)(`h1`,{children:`Help & support`}),(0,w.jsx)(`p`,{children:`Find the right workspace or contact the NurseLink team.`})]}),(0,w.jsx)(s,{className:`lbs-button primary`,to:`/messages`,children:`Message the team`})]}),(0,w.jsxs)(`section`,{className:`lbs-card`,children:[(0,w.jsx)(`h2`,{children:`Common questions`}),[[`How do I check my application?`,`Open My Applications for each job’s current status. Membership review is a separate process and has its own page.`,`/applications`,`View job applications`],[`Where do I update my CV?`,`Update your profile and professional portfolio, then open the CV maker. Keep source records current instead of maintaining separate copies of the same details.`,`/cv-maker`,`Open CV maker`],[`Where are my documents?`,`Documents & CV brings together uploaded files, credentials, qualifications and your CV. Use the relevant section for each record.`,`/documents`,`Open documents`],[`How do I check an interview?`,`Appointments lists interview records available through your applications. Open the application workspace to manage a response or contact the team.`,`/appointments`,`View appointments`],[`Can I request a service visit online?`,`Open Appointments to request a visit for an enabled office service. Check in when you arrive. A service visit does not change your recruitment application.`,`/appointments`,`View service visits`]].map(([e,t,n,r])=>(0,w.jsxs)(`details`,{className:`lbs-faq`,children:[(0,w.jsx)(`summary`,{children:e}),(0,w.jsx)(`p`,{children:t}),(0,w.jsxs)(s,{to:n,children:[r,` →`]})]},n))]}),(0,w.jsxs)(`div`,{className:`lbs-card-grid`,children:[(0,w.jsxs)(`section`,{className:`lbs-card`,children:[(0,w.jsx)(`h2`,{children:`Welfare assistance`}),(0,w.jsx)(`p`,{children:`Open the existing welfare workspace for assistance and case follow-up.`}),(0,w.jsx)(s,{className:`lbs-button`,to:`/welfare`,children:`Open welfare services`})]}),(0,w.jsxs)(`section`,{className:`lbs-card`,children:[(0,w.jsx)(`h2`,{children:`Your account & privacy`}),(0,w.jsx)(`p`,{children:`Review your account details, current policies and privacy information.`}),(0,w.jsx)(s,{className:`lbs-button`,to:`/policy-center`,children:`View policies`})]})]})]})}typeof window<`u`&&(document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,()=>mn(),{once:!0}):mn()),window.NurseLinkPhase2Final=N,window.NURSELINK_PHASE2_ROUTES={},window.NurseLinkPhase2=hn;var wr=`nurselink-admin-appearance-draft-v1`,Tr={enabled:!0,autoplay:!0,durationMs:5e3,transition:`fade`,transitionMs:800,loop:!0,showDots:!1,showArrows:!1,pauseOnHover:!0,slides:p};function Er(e){let t=e?.heroSliders?.login||{},n=Array.isArray(t.slides)?t.slides.filter(e=>e&&e.enabled!==!1):[],r=n.length===1&&n[0].desktopImage===p[0].desktopImage;return{...Tr,...t,showDots:!1,showArrows:!1,slides:n.length>0&&!r?n:p}}function Dr(){try{let e=window.localStorage.getItem(wr);return Er(e?JSON.parse(e):null)}catch{return Er(null)}}var Or=[{id:`home`,label:`Home`,icon:`dashboard`,items:[[`Home`,`/dashboard`,`dashboard`]]},{id:`applications`,label:`My Applications`,icon:`applications`,items:[[`Job applications`,`/applications`,`applications`],[`Membership review`,`/application-status`,`status`],[`Registration`,`/smart-registration`,`scan`]]},{id:`jobs`,label:`Job Opportunities`,icon:`jobs`,items:[[`Job Opportunities`,`/jobs`,`jobs`]]},{id:`documents`,label:`Documents & CV`,icon:`documents`,items:[[`My documents`,`/documents`,`documents`],[`CV maker`,`/cv-maker`,`portfolio`],[`Credentials`,`/credentials`,`credentials`],[`Qualifications`,`/qualifications`,`qualifications`],[`Professional portfolio`,`/portfolio`,`portfolio`],[`Credential renewal`,`/credential-renewal`,`credentials`]]},{id:`appointments`,label:`Appointments`,icon:`events`,items:[[`Appointments`,`/appointments`,`events`]]},{id:`processing`,label:`My Processing`,icon:`documents`,items:[[`My Processing`,`/processing`,`documents`]]},{id:`messages`,label:`Messages`,icon:`messages`,items:[[`Messages`,`/messages`,`messages`]]},{id:`profile`,label:`My Profile`,icon:`profile`,items:[[`My Profile`,`/profile`,`profile`]]},{id:`services`,label:`More Services`,icon:`learning`,items:[[`Career intelligence`,`/career-intelligence`,`jobs`],[`Learning`,`/learning`,`learning`],[`Mentoring`,`/mentoring`,`mentoring`],[`Engagement`,`/engagement`,`engagement`],[`Events`,`/events`,`events`],[`Programs`,`/initiatives`,`programs`],[`Digital member ID`,`/digital-member-id`,`member-id`],[`Notifications`,`/notifications`,`messages`],[`Policies & advocacy`,`/policies`,`advocacy`]]},{id:`help`,label:`Help & Support`,icon:`welfare`,items:[[`Help & Support`,`/help`,`welfare`],[`Welfare assistance`,`/welfare`,`welfare`],[`Policy & privacy`,`/policy-center`,`privacy`]]}];function kr(e){return Or.find(t=>t.items.some(([,t])=>e===t||e.startsWith(`${t}/`)))?.id||`home`}var Ar={dashboard:[`M3 11.5 12 4l9 7.5`,`M5 10.5V20h14v-9.5`,`M9 20v-6h6v6`],profile:[`M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z`,`M4 21a8 8 0 0 1 16 0`],scan:[`M4 7V4h3`,`M17 4h3v3`,`M20 17v3h-3`,`M7 20H4v-3`,`M8 12h8`,`M12 8v8`],status:[`M6 3h12v18H6z`,`M9 8h6`,`M9 12h6`,`m9 16 2 2 4-4`],portfolio:[`M4 7h16v13H4z`,`M8 7V4h8v3`,`M4 12h16`],jobs:[`M4 7h16v12H4z`,`M9 7V4h6v3`,`M4 12h16`],applications:[`M6 3h9l3 3v15H6z`,`M15 3v4h4`,`M9 12h6`,`M9 16h6`],mentoring:[`M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z`,`M16 13a3 3 0 1 0 0-6`,`M3 21a5 5 0 0 1 10 0`,`M13 21a5 5 0 0 1 8-4`],engagement:[`M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10Z`],learning:[`M3 6.5 12 3l9 3.5-9 3.5z`,`M6 8.5V15c3 2 9 2 12 0V8.5`,`M21 7v7`],credentials:[`M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6z`,`m9 12 2 2 4-4`],qualifications:[`M12 3l3 5 6 1-4 4 .8 6-5.8-2.5L6.2 19 7 13 3 9l6-1z`],documents:[`M6 3h9l3 3v15H6z`,`M15 3v4h4`,`M9 12h6`,`M9 16h5`],"member-id":[`M3 6h18v12H3z`,`M7 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z`,`M5 16c.5-2 3.5-2 4 0`,`M13 10h5`,`M13 14h4`],messages:[`M4 5h16v12H8l-4 4z`,`M8 9h8`,`M8 13h5`],events:[`M5 5h14v15H5z`,`M8 3v4`,`M16 3v4`,`M5 9h14`],programs:[`M4 4h6v6H4z`,`M14 4h6v6h-6z`,`M4 14h6v6H4z`,`M14 14h6v6h-6z`],advocacy:[`M4 13V8l11-4v13L4 13Z`,`M15 8h3a3 3 0 0 1 0 6h-3`,`M6 13l2 7h4l-2-6`],welfare:[`M12 21s-7-4-7-10a4 4 0 0 1 7-3 4 4 0 0 1 7 3c0 6-7 10-7 10Z`,`M12 9v6`,`M9 12h6`],privacy:[`M6 10V7a6 6 0 0 1 12 0v3`,`M5 10h14v11H5z`,`M12 14v3`]};function jr({name:e}){let t=Ar[e]||Ar.dashboard;return(0,w.jsx)(`span`,{className:`member-admin-nav-icon`,"aria-hidden":`true`,children:(0,w.jsx)(`svg`,{viewBox:`0 0 24 24`,focusable:`false`,children:t.map((t,n)=>(0,w.jsx)(`path`,{d:t},`${e}-${n}`))})})}var Mr=[`/portfolio`,`/jobs`,`/applications`,`/mentoring`,`/engagement`,`/learning`,`/credentials`,`/qualifications`,`/documents`,`/digital-member-id`];function Nr(e){if(e?.data?.errors){let t=Object.values(e.data.errors)[0];if(Array.isArray(t)&&t.length)return t[0]}return e?.data?.message||e?.message||`Something went wrong. Please try again.`}function Pr(){let e=r(),t=u(),{login:n,authenticated:i}=je(),o=new URLSearchParams(t.search).get(`verification_url`),[s,c]=(0,S.useState)(``),[d,f]=(0,S.useState)(``),[p,m]=(0,S.useState)(``),[h,g]=(0,S.useState)(!1),[_,b]=(0,S.useState)(Dr),[x,C]=(0,S.useState)(0),[T,E]=(0,S.useState)(!1),D=(0,S.useMemo)(()=>_.slides.filter(e=>e&&e.enabled!==!1),[_]);if((0,S.useEffect)(()=>{let e=e=>{b(Er(e.detail)),C(0)};return window.addEventListener(`nurselink:design-config-changed`,e),()=>{window.removeEventListener(`nurselink:design-config-changed`,e)}},[]),(0,S.useEffect)(()=>{x<D.length||C(0)},[x,D.length]),(0,S.useEffect)(()=>{if(!_.enabled||!_.autoplay||T||D.length<2||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;let e=window.setInterval(()=>{C(e=>(e+1)%D.length)},Math.max(2500,Number(_.durationMs)||5e3));return()=>window.clearInterval(e)},[T,D.length,_]),(0,S.useEffect)(()=>{i&&o&&window.location.assign(o)},[i,o]),i&&o)return(0,w.jsx)(`div`,{className:`nl713-login-verifying`,role:`main`,children:`Completing email verification...`});if(i&&!o)return(0,w.jsx)(a,{to:`/dashboard`,replace:!0});async function ee(r){r.preventDefault(),g(!0),m(``);try{if(await n(s.trim(),d),o){window.location.href=o;return}let r=t.state?.from||`/dashboard`;e(r,{replace:!0})}catch(e){m(Nr(e))}finally{g(!1)}}return(0,w.jsxs)(`main`,{className:`nl713-login-shell`,children:[(0,w.jsxs)(`section`,{className:`nl713-login-hero`,"aria-label":`NurseLink member community`,style:{"--nl-login-hero-transition":_.transition===`none`?`0ms`:`${Math.max(0,Number(_.transitionMs)||800)}ms`},onMouseEnter:()=>{_.pauseOnHover&&E(!0)},onMouseLeave:()=>E(!1),children:[(0,w.jsxs)(`div`,{className:`nl713-login-hero-media`,"data-nurselink-react-slider":`1`,children:[D.map((e,t)=>(0,w.jsxs)(`picture`,{className:`nl713-login-hero-slide`+(t===x?` is-active`:``),"aria-hidden":`true`,children:[e.mobileImage&&(0,w.jsx)(`source`,{media:`(max-width: 680px)`,srcSet:e.mobileImage}),e.tabletImage&&(0,w.jsx)(`source`,{media:`(max-width: 1050px)`,srcSet:e.tabletImage}),(0,w.jsx)(`img`,{src:v(e),alt:``,loading:t===0?`eager`:`lazy`,decoding:`async`,style:y(e)})]},e.id||e.desktopImage||t)),D.length>1&&(_.showArrows||_.showDots)&&(0,w.jsxs)(`div`,{className:`nl713-login-hero-controls`,"aria-label":`NurseLink hero images`,onFocus:()=>E(!0),onBlur:()=>E(!1),children:[_.showArrows&&(0,w.jsx)(`button`,{type:`button`,className:`nl713-login-hero-arrow`,"aria-label":`Previous hero image`,onClick:()=>{C(e=>(e-1+D.length)%D.length)},children:(0,w.jsx)(`span`,{"aria-hidden":`true`,children:`‹`})}),_.showDots&&(0,w.jsx)(`div`,{className:`nl713-login-hero-dots`,children:D.map((e,t)=>(0,w.jsx)(`button`,{type:`button`,className:t===x?`is-active`:``,"aria-label":`Show hero image ${t+1}`,"aria-current":t===x?`true`:void 0,onClick:()=>C(t)},e.id||e.desktopImage||t))}),_.showArrows&&(0,w.jsx)(`button`,{type:`button`,className:`nl713-login-hero-arrow`,"aria-label":`Next hero image`,onClick:()=>{C(e=>(e+1)%D.length)},children:(0,w.jsx)(`span`,{"aria-hidden":`true`,children:`›`})})]})]}),(0,w.jsx)(`div`,{className:`nl713-login-hero-content`,children:(0,w.jsxs)(`div`,{className:`nl713-login-intro`,children:[(0,w.jsx)(`div`,{className:`nurselink-runtime-logo nurselink-login-logo`,"data-nurselink-logo-placement":`login`,hidden:!0}),(0,w.jsxs)(`div`,{className:`nl713-login-message`,children:[(0,w.jsx)(`span`,{className:`nl-login-public-brand`,children:`NurseLink by LBS`}),(0,w.jsx)(`h1`,{children:`Your global nursing career, in one secure portal.`}),(0,w.jsx)(`p`,{children:`One account for your professional file, compliance documents, skills development, and overseas opportunities with LBS principals.`})]})]})})]}),(0,w.jsx)(`section`,{className:`nl713-login-panel`,children:(0,w.jsxs)(`div`,{className:`nl713-login-card`,children:[(0,w.jsx)(`div`,{className:`nl713-login-card-kicker`,children:`Member portal`}),o&&(0,w.jsx)(`h2`,{children:`Sign in to verify your email`}),(0,w.jsx)(`p`,{className:`nl713-login-card-intro`,children:o?`Sign in using the NurseLink account associated with this verification email.`:`Sign in to your NurseLink by LBS account.`}),p&&(0,w.jsx)(`div`,{className:`nl713-login-error`,role:`alert`,children:p}),(0,w.jsxs)(`form`,{className:`nl713-login-form`,onSubmit:ee,children:[(0,w.jsxs)(`label`,{className:`nl713-login-field`,children:[(0,w.jsx)(`span`,{children:`Email address`}),(0,w.jsx)(`input`,{type:`email`,value:s,onChange:e=>c(e.target.value),autoComplete:`email`,required:!0})]}),(0,w.jsxs)(`label`,{className:`nl713-login-field`,children:[(0,w.jsx)(`span`,{children:`Password`}),(0,w.jsx)(`input`,{type:`password`,value:d,onChange:e=>f(e.target.value),autoComplete:`current-password`,required:!0})]}),(0,w.jsx)(`p`,{className:`nl713-login-forgot`,children:(0,w.jsx)(l,{to:`/forgot-password`,children:`Forgot password?`})}),(0,w.jsx)(`button`,{type:`submit`,className:`nl713-login-submit`,disabled:h,children:h?`Signing in...`:o?`Sign In & Verify Email`:`Sign in`})]}),(0,w.jsx)(`p`,{className:`nl-login-protected`,children:`Protected member access for LBS-registered nurses and healthcare professionals.`}),(0,w.jsxs)(`p`,{className:`nl713-login-register`,children:[`New to LBS?`,` `,(0,w.jsx)(l,{to:`/register`,children:`Create your NurseLink profile`}),` `,`to start pre-screening.`]}),(0,w.jsxs)(`div`,{className:`nl713-login-trust`,"aria-label":`NurseLink career support`,children:[(0,w.jsxs)(`div`,{className:`nl713-login-trust-item`,children:[(0,w.jsxs)(`svg`,{className:`nl-login-benefit-symbol`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,w.jsx)(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z`}),(0,w.jsx)(`path`,{d:`M14 2v6h6M8 13h8M8 17h5`})]}),(0,w.jsx)(`strong`,{children:`Professional readiness`}),(0,w.jsx)(`span`,{children:`Keep your credentials and supporting documents organized.`})]}),(0,w.jsxs)(`div`,{className:`nl713-login-trust-item`,children:[(0,w.jsx)(`svg`,{className:`nl-login-benefit-symbol`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,w.jsx)(`path`,{d:`m2 9 10-5 10 5-10 5-10-5Zm4 2v6c4 3 8 3 12 0v-6M22 9v7`})}),(0,w.jsx)(`strong`,{children:`Skills development`}),(0,w.jsx)(`span`,{children:`Follow learning relevant to your career.`})]}),(0,w.jsxs)(`div`,{className:`nl713-login-trust-item`,children:[(0,w.jsx)(`svg`,{className:`nl-login-benefit-symbol`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,w.jsx)(`path`,{d:`M4 22V4h16v18M2 22h20M9 22v-5h6v5M9 8h6M12 5v6M8 14h1M15 14h1`})}),(0,w.jsx)(`strong`,{children:`Hospital opportunities`}),(0,w.jsx)(`span`,{children:`Explore openings through LBS.`})]}),(0,w.jsxs)(`div`,{className:`nl713-login-trust-item`,children:[(0,w.jsxs)(`svg`,{className:`nl-login-benefit-symbol`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,w.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`}),(0,w.jsx)(`path`,{d:`m8 12 3 3 5-6`})]}),(0,w.jsx)(`strong`,{children:`Application progress`}),(0,w.jsx)(`span`,{children:`Stay informed about reviews and next steps.`})]})]}),(0,w.jsx)(`p`,{className:`nl-login-system-name`,children:`Member portal of the LBS Advance Recruitment Management System (ARMS)`}),(0,w.jsx)(`a`,{className:`nl713-login-admin`,href:`/admin/login.html`,children:`Administrator sign in`})]})})]})}function Fr(){let[e,t]=(0,S.useState)(``),[n,r]=(0,S.useState)(``),[i,a]=(0,S.useState)(``),[o,s]=(0,S.useState)(!1);async function c(t){t.preventDefault(),r(``),a(``),s(!0);try{await ae(e.trim()),r(`If an account matches that email, a password reset link has been sent.`)}catch(e){e.status===422?r(`If an account matches that email, a password reset link has been sent.`):a(Nr(e))}finally{s(!1)}}return(0,w.jsxs)(`div`,{className:`auth-screen`,role:`main`,children:[(0,w.jsxs)(`div`,{className:`auth-brand`,children:[(0,w.jsx)(`div`,{className:`brand-mark`,children:`NL`}),(0,w.jsx)(`h1`,{"aria-hidden":`true`,children:`NurseLink`}),(0,w.jsx)(`p`,{children:`Securely recover access to your NurseLink account.`})]}),(0,w.jsxs)(`div`,{className:`auth-card`,children:[(0,w.jsx)(`div`,{className:`eyebrow`,children:`Account Recovery`}),(0,w.jsx)(`h2`,{children:`Forgot your password?`}),(0,w.jsx)(`p`,{children:`Enter your registered email address and we’ll send you a secure reset link.`}),n&&(0,w.jsx)(`div`,{className:`form-success`,children:n}),i&&(0,w.jsx)(`div`,{className:`form-error`,children:i}),(0,w.jsxs)(`form`,{onSubmit:c,children:[(0,w.jsxs)(`label`,{children:[`Email address`,(0,w.jsx)(`input`,{type:`email`,value:e,onChange:e=>t(e.target.value),autoComplete:`email`,required:!0})]}),(0,w.jsx)(`button`,{type:`submit`,className:`primary-button full`,disabled:o,children:o?`Sending…`:`Send password reset link`})]}),(0,w.jsx)(`p`,{className:`auth-footer`,children:(0,w.jsx)(l,{to:`/login`,children:`Return to Sign In`})})]})]})}function Ir(){let e=r(),{register:t,authenticated:n}=je(),[i,o]=(0,S.useState)(``),[s,c]=(0,S.useState)(``),[u,d]=(0,S.useState)(``),[f,p]=(0,S.useState)(``),[m,h]=(0,S.useState)(``),[g,_]=(0,S.useState)(``),[v,y]=(0,S.useState)(!1),[b,x]=(0,S.useState)(!1),[C,T]=(0,S.useState)(!1),[E,D]=(0,S.useState)(`open`);if((0,S.useEffect)(()=>{let e=!0;return j().then(t=>{e&&D(t?.data?.mode||`closed`)}).catch(()=>{}),()=>{e=!1}},[]),n)return(0,w.jsx)(a,{to:`/dashboard`,replace:!0});async function ee(n){if(n.preventDefault(),_(``),f!==m){_(`Passwords do not match.`);return}if(!b||!C){_(`Please review and accept the Terms of Use and Privacy Notice to continue.`);return}y(!0);try{let n=`${i.trim()} ${s.trim()}`.trim(),r=await t({name:n,email:u.trim(),password:f,password_confirmation:m,terms_accepted:b,privacy_accepted:C});if(r?.requiresVerification||r?.requires_verification){e(`/verify-email`,{replace:!0,state:{email:u.trim()}});return}e(`/dashboard`,{replace:!0})}catch(e){_(Nr(e))}finally{y(!1)}}return(0,w.jsxs)(`div`,{className:`auth-screen`,role:`main`,children:[(0,w.jsxs)(`div`,{className:`auth-brand`,children:[(0,w.jsx)(`div`,{className:`brand-mark`,children:`NL`}),(0,w.jsx)(`h1`,{"aria-hidden":`true`,children:`Join NurseLink`}),(0,w.jsx)(`p`,{children:`Create your account and begin your membership application.`})]}),(0,w.jsxs)(`div`,{className:`auth-card`,children:[(0,w.jsx)(`div`,{className:`eyebrow`,children:`Member Registration`}),(0,w.jsx)(`h2`,{children:`Create account`}),E===`pilot`&&(0,w.jsx)(`div`,{className:`form-notice`,children:`NurseLink registration is currently available to invited pilot participants only.`}),E===`closed`&&(0,w.jsx)(`div`,{className:`form-notice form-notice-closed`,children:`New member registration is temporarily closed. Existing members may still sign in.`}),g&&(0,w.jsx)(`div`,{className:`form-error`,children:g}),(0,w.jsxs)(`form`,{onSubmit:ee,children:[(0,w.jsxs)(`div`,{className:`form-row`,children:[(0,w.jsxs)(`label`,{children:[`First name`,(0,w.jsx)(`input`,{value:i,onChange:e=>o(e.target.value),required:!0})]}),(0,w.jsxs)(`label`,{children:[`Last name`,(0,w.jsx)(`input`,{value:s,onChange:e=>c(e.target.value),required:!0})]})]}),(0,w.jsxs)(`label`,{children:[`Email address`,(0,w.jsx)(`input`,{type:`email`,value:u,onChange:e=>d(e.target.value),autoComplete:`email`,required:!0})]}),(0,w.jsxs)(`label`,{children:[`Password`,(0,w.jsx)(`input`,{type:`password`,value:f,onChange:e=>p(e.target.value),autoComplete:`new-password`,required:!0})]}),(0,w.jsxs)(`label`,{children:[`Confirm password`,(0,w.jsx)(`input`,{type:`password`,value:m,onChange:e=>h(e.target.value),autoComplete:`new-password`,required:!0})]}),(0,w.jsxs)(`div`,{className:`registration-consent`,role:`group`,"aria-label":`Registration consent`,children:[(0,w.jsxs)(`label`,{className:`consent-option`,children:[(0,w.jsx)(`input`,{type:`checkbox`,checked:b,onChange:e=>x(e.target.checked),required:!0}),(0,w.jsxs)(`span`,{children:[`I have read and agree to the `,(0,w.jsx)(l,{to:`/terms`,target:`_blank`,children:`Terms of Use`}),`.`]})]}),(0,w.jsxs)(`label`,{className:`consent-option`,children:[(0,w.jsx)(`input`,{type:`checkbox`,checked:C,onChange:e=>T(e.target.checked),required:!0}),(0,w.jsxs)(`span`,{children:[`I have read the `,(0,w.jsx)(l,{to:`/privacy`,target:`_blank`,children:`Privacy Notice`}),` and understand how my information is handled.`]})]})]}),(0,w.jsx)(`button`,{type:`submit`,className:`primary-button full`,disabled:v||E===`closed`,children:E===`closed`?`Registration Closed`:v?`Creating account...`:`Continue Registration`})]}),(0,w.jsxs)(`p`,{className:`auth-footer`,children:[`Already registered?`,` `,(0,w.jsx)(l,{to:`/login`,children:`Sign in`})]})]})]})}function Lr({type:e}){let t=e===`privacy`;return(0,w.jsx)(`main`,{className:`policy-screen`,children:(0,w.jsxs)(`article`,{className:`policy-document`,children:[(0,w.jsx)(l,{className:`policy-back`,to:`/register`,children:`← Back to registration`}),(0,w.jsx)(`div`,{className:`eyebrow`,children:`LBS NurseLink Medical Services Division`}),(0,w.jsx)(`h1`,{children:t?`Privacy Notice`:`Terms of Use`}),(0,w.jsx)(`p`,{className:`policy-version`,children:`Effective 18 August 2026 · Version 2026-08-18`}),t?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`h2`,{children:`Information we collect`}),(0,w.jsx)(`p`,{children:`NurseLink collects account details, contact information, professional history, credentials, uploaded documents, application records, and service activity needed to administer membership and member services.`})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`h2`,{children:`Why we use it`}),(0,w.jsx)(`p`,{children:`We use this information to verify identity and qualifications, process applications, maintain the professional registry, deliver requested services, protect the platform, meet governance obligations, and communicate important membership updates.`})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`h2`,{children:`Document processing and OCR`}),(0,w.jsx)(`p`,{children:`Documents submitted through Smart Registration may be scanned for malware and processed with optical character recognition. Extracted values assist data entry and remain subject to applicant confirmation and authorized reviewer verification.`})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`h2`,{children:`Access and disclosure`}),(0,w.jsx)(`p`,{children:`Access is limited by role. Authorized NurseLink reviewers, administrators, and service providers may process information only for approved operational purposes. NurseLink does not publish private evidence documents as part of a member profile.`})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`h2`,{children:`Retention and protection`}),(0,w.jsx)(`p`,{children:`Records are retained only as required for membership administration, audit, legal, security, and continuity purposes. NurseLink uses access controls, encryption in transit, monitoring, restricted backups, and audit records to protect information.`})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`h2`,{children:`Your choices and rights`}),(0,w.jsx)(`p`,{children:`You may request access, correction, a copy, restriction, or deletion where applicable through NurseLink support and privacy-request services. Some records may need to be retained for legal, security, or governance reasons.`})]})]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`h2`,{children:`Using NurseLink`}),(0,w.jsx)(`p`,{children:`You must provide accurate information, maintain the security of your account, and use NurseLink only for lawful membership and professional purposes. You are responsible for reviewing extracted information before confirming or submitting it.`})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`h2`,{children:`Applications and credentials`}),(0,w.jsx)(`p`,{children:`Submitting information does not guarantee membership, credential verification, employment, placement, or access to a particular service. NurseLink reviewers may request additional evidence and make governed decisions under current membership rules.`})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`h2`,{children:`Acceptable use`}),(0,w.jsx)(`p`,{children:`Do not impersonate another person, upload malicious or misleading material, attempt unauthorized access, interfere with the service, or misuse member information. Access may be restricted or suspended to protect members and the platform.`})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`h2`,{children:`Service availability`}),(0,w.jsx)(`p`,{children:`NurseLink works to keep services available and records protected, but maintenance, security events, or circumstances outside its control may temporarily interrupt access.`})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`h2`,{children:`Changes`}),(0,w.jsx)(`p`,{children:`Material updates will be identified by a new version and effective date. NurseLink may request renewed acceptance when changes affect how the service or member information is governed.`})]})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`h2`,{children:`Questions or requests`}),(0,w.jsxs)(`p`,{children:[`Use the NurseLink Support Cases service for policy questions and account concerns. Privacy requests may also be sent to the LBS MEDICAL SERVICES DIVISION privacy contact at`,` `,(0,w.jsx)(`a`,{href:`mailto:privacy@lbs-nurselink.local`,children:`privacy@lbs-nurselink.local`}),`. Urgent security concerns should be reported as soon as possible.`]})]})]})})}function Rr({onAccepted:e}){let[t,n]=(0,S.useState)(null),[r,i]=(0,S.useState)(!0),[a,o]=(0,S.useState)(!1),[s,c]=(0,S.useState)(``);(0,S.useEffect)(()=>{ne().then(e=>n(e?.data||null)).catch(e=>c(Nr(e))).finally(()=>i(!1))},[]);async function u(){o(!0),c(``);try{let t=(await re())?.data||{current:!0};n(t),e?.(t)}catch(e){c(Nr(e))}finally{o(!1)}}return(0,w.jsxs)(`div`,{className:`page policy-center-page`,children:[(0,w.jsx)(`div`,{className:`page-heading`,children:(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`div`,{className:`eyebrow`,children:`Account Governance`}),(0,w.jsx)(`h1`,{children:`Policy & Privacy Center`}),(0,w.jsx)(`p`,{children:`Review NurseLink’s current policies and your recorded acceptance status.`})]})}),r&&(0,w.jsx)(`div`,{className:`panel policy-center-loading`,children:`Loading policy status…`}),s&&(0,w.jsx)(`div`,{className:`form-error`,children:s}),!r&&t&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`section`,{className:`policy-center-status ${t.current?`is-current`:`is-pending`}`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`span`,{children:t.current?`CURRENT`:`ACTION REQUESTED`}),(0,w.jsx)(`h2`,{children:t.current?`Your policy acceptance is up to date`:`Please review and accept the current policies`}),(0,w.jsx)(`p`,{children:t.current?`NurseLink has recorded your explicit acceptance of both current documents.`:`Your access remains available while you review. Acceptance is recorded only when you select the button below.`})]}),!t.current&&(0,w.jsx)(`button`,{type:`button`,onClick:u,disabled:a,children:a?`Recording acceptance…`:`Accept both policies`})]}),(0,w.jsxs)(`div`,{className:`policy-center-grid`,children:[(0,w.jsxs)(`article`,{className:`panel policy-center-card`,children:[(0,w.jsx)(`div`,{className:`eyebrow`,children:`Terms`}),(0,w.jsx)(`h2`,{children:`Terms of Use`}),(0,w.jsxs)(`p`,{children:[`Current version: `,(0,w.jsx)(`strong`,{children:t.terms_version})]}),(0,w.jsxs)(`p`,{children:[`Accepted: `,(0,w.jsx)(`strong`,{children:t.terms_accepted_at?new Date(t.terms_accepted_at).toLocaleString():`Not yet recorded`})]}),(0,w.jsx)(l,{to:`/terms`,target:`_blank`,children:`Read Terms of Use`})]}),(0,w.jsxs)(`article`,{className:`panel policy-center-card`,children:[(0,w.jsx)(`div`,{className:`eyebrow`,children:`Privacy`}),(0,w.jsx)(`h2`,{children:`Privacy Notice`}),(0,w.jsxs)(`p`,{children:[`Current version: `,(0,w.jsx)(`strong`,{children:t.privacy_version})]}),(0,w.jsxs)(`p`,{children:[`Accepted: `,(0,w.jsx)(`strong`,{children:t.privacy_accepted_at?new Date(t.privacy_accepted_at).toLocaleString():`Not yet recorded`})]}),(0,w.jsx)(l,{to:`/privacy`,target:`_blank`,children:`Read Privacy Notice`})]})]}),(0,w.jsxs)(`section`,{className:`panel policy-center-help`,children:[(0,w.jsx)(`h2`,{children:`Questions or privacy requests`}),(0,w.jsxs)(`p`,{children:[`Use NurseLink Support Cases for questions, correction requests, or account concerns. You may also contact LBS MEDICAL SERVICES DIVISION at `,(0,w.jsx)(`a`,{href:`mailto:privacy@lbs-nurselink.local`,children:`privacy@lbs-nurselink.local`}),` for privacy requests. Policy acceptance does not waive rights available under applicable law.`]})]})]})]})}function zr(){let e=u().state?.email||`your registered email`,[t,n]=(0,S.useState)(``),[r,i]=(0,S.useState)(``),[a,o]=(0,S.useState)(!1);async function s(){n(``),i(``),o(!0);try{let e=await oe();n(e?.message||`Verification link sent.`)}catch(e){i(Nr(e))}finally{o(!1)}}return(0,w.jsxs)(`div`,{className:`auth-screen`,role:`main`,children:[(0,w.jsxs)(`div`,{className:`auth-brand`,children:[(0,w.jsx)(`div`,{className:`brand-mark`,children:`NL`}),(0,w.jsx)(`h1`,{"aria-hidden":`true`,children:`NurseLink`}),(0,w.jsx)(`p`,{children:`Verify your email before continuing.`})]}),(0,w.jsxs)(`div`,{className:`auth-card`,children:[(0,w.jsx)(`div`,{className:`eyebrow`,children:`Email Verification`}),(0,w.jsx)(`h2`,{children:`Check your email`}),(0,w.jsx)(`p`,{children:`We sent a verification message to:`}),(0,w.jsx)(`div`,{className:`verification-email`,children:e}),(0,w.jsx)(`p`,{children:`Follow the secure link in the email to activate your account.`}),t&&(0,w.jsx)(`div`,{className:`form-success`,children:t}),r&&(0,w.jsx)(`div`,{className:`form-error`,children:r}),(0,w.jsx)(`button`,{type:`button`,className:`secondary-button full`,onClick:s,disabled:a,children:a?`Sending…`:`Resend verification email`}),(0,w.jsx)(l,{to:`/login`,className:`primary-button full auth-button-link`,children:`Return to Sign In`})]})]})}function Br(){return(0,w.jsx)(`div`,{className:`page nurselink-portfolio-route`})}function Y({title:e}){return(0,w.jsxs)(`div`,{className:`page`,children:[(0,w.jsx)(`div`,{className:`page-header`,children:(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`div`,{className:`eyebrow`,children:`Member Feature`}),(0,w.jsx)(`h1`,{children:e}),(0,w.jsx)(`p`,{children:`This feature becomes available after your NurseLink membership application is approved.`})]})}),(0,w.jsxs)(`div`,{className:`panel member-locked-panel`,children:[(0,w.jsx)(`div`,{className:`member-lock-icon`,children:`🔒`}),(0,w.jsx)(`h2`,{children:`Available after membership approval`}),(0,w.jsx)(`p`,{children:`Complete and submit your membership application. Once approved, NurseLink will automatically activate this member service.`}),(0,w.jsx)(l,{to:`/application-status`,className:`primary-button`,children:`View Application Status`})]})]})}function Vr({open:e,isMember:t,onClose:n}){let[r,i]=(0,S.useState)(0),[a,o]=(0,S.useState)(`navigation`),s=(0,S.useMemo)(()=>[{path:`/dashboard`,title:`Your NurseLink dashboard`,text:`Start here for membership progress, readiness and the next action NurseLink recommends.`},{path:`/profile`,title:`Keep your profile current`,text:`Update your personal and professional information so applications and services use accurate details.`},{path:`/smart-registration`,title:`Smart Registration`,text:`Upload documents, review extracted information and supply anything the document could not provide.`},{path:`/application-status`,title:`Follow your application`,text:`See the current review stage, decisions and requests for additional information.`},...t?[{path:`/credentials`,title:`Credentials and evidence`,text:`Maintain licenses and certificates, attach supporting files and follow verification status.`},{path:`/documents`,title:`Your private documents`,text:`Find documents you uploaded or that NurseLink retained from your approved application.`}]:[],{path:`/messages`,title:`Messages and notifications`,text:`Check updates from NurseLink and respond when an action is required.`}],[t]),c=(0,S.useMemo)(()=>[{path:`/smart-registration`,title:`1. Upload your documents`,text:`Upload a clear PRC license, résumé, diploma, passport, ID or employment certificate. Supported files are PDF, JPG, PNG and DOCX, up to 15 MB each.`},{path:`/smart-registration`,title:`2. Review OCR suggestions`,text:`NurseLink proposes information extracted from your documents. Compare every proposed value with the evidence and correct anything that was interpreted incorrectly.`},{path:`/profile`,title:`3. Complete missing information`,text:`Fill in required details OCR could not find clearly, such as your birth date, mobile number, address, employer or nursing experience. You can save and return later.`},{path:`/smart-registration`,title:`4. Add credentials and evidence`,text:`Record your PRC license and other credentials, enter dates exactly as issued, and attach the matching evidence. Member confirmation is not reviewer verification.`},{path:`/application-status`,title:`5. Review application readiness`,text:`Open each Review or Attention item and confirm personal information, professional details, employment history, credentials and uploaded documents.`},{path:`/application-status`,title:`6. Submit and track review`,text:`Submit when all required information is complete. Watch Application Status, email and notifications for assignment, requests for information, decisions and onboarding.`}],[]),l=a===`smart-registration`?c:s;if((0,S.useEffect)(()=>{if(!e)return;let t=l[r],a=document.querySelector(`[data-tour-path="${t.path}"]`);a?.classList.add(`navigation-tour-target`),a?.scrollIntoView({block:`nearest`});function o(e){e.key===`Escape`&&(i(0),n(!1)),e.key===`ArrowRight`&&r<l.length-1&&i(e=>e+1),e.key===`ArrowLeft`&&r>0&&i(e=>e-1)}return document.addEventListener(`keydown`,o),()=>{a?.classList.remove(`navigation-tour-target`),document.removeEventListener(`keydown`,o)}},[n,e,r,l]),!e)return null;let u=l[r],d=r===l.length-1;return(0,w.jsxs)(`div`,{className:`navigation-tour-layer`,role:`presentation`,children:[(0,w.jsx)(`div`,{className:`navigation-tour-backdrop`}),(0,w.jsxs)(`section`,{className:`navigation-tour-box`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`navigation-tour-title`,children:[(0,w.jsxs)(`div`,{className:`navigation-tour-guides`,"aria-label":`Help topics`,children:[(0,w.jsx)(`button`,{type:`button`,"aria-pressed":a===`navigation`,onClick:()=>{o(`navigation`),i(0)},children:`Navigation`}),(0,w.jsx)(`button`,{type:`button`,"aria-pressed":a===`smart-registration`,onClick:()=>{o(`smart-registration`),i(0)},children:`Smart Registration`})]}),(0,w.jsxs)(`div`,{className:`navigation-tour-progress`,children:[(0,w.jsx)(`span`,{children:a===`smart-registration`?`Smart Registration guide`:`Navigation guide`}),(0,w.jsxs)(`strong`,{children:[r+1,` of `,l.length]})]}),(0,w.jsx)(`h2`,{id:`navigation-tour-title`,children:u.title}),(0,w.jsx)(`p`,{children:u.text}),(0,w.jsxs)(`div`,{className:`navigation-tour-actions`,children:[(0,w.jsx)(`button`,{type:`button`,className:`tour-skip`,onClick:()=>{i(0),n(a===`navigation`)},children:a===`navigation`?`Skip tour`:`Close guide`}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`button`,{type:`button`,className:`tour-secondary`,disabled:r===0,onClick:()=>i(e=>e-1),children:`Back`}),(0,w.jsx)(`button`,{type:`button`,className:`tour-primary`,onClick:()=>{d?(i(0),n(a===`navigation`)):i(e=>e+1)},children:d?`Finish`:`Next`})]})]})]})]})}function Hr(){pr(),document.documentElement.setAttribute(`data-nurselink-iphone-typography`,`v4.0.7`),document.documentElement.setAttribute(`data-nurselink-iphone-typography-parity`,`v4.0.8`),document.documentElement.setAttribute(`data-nurselink-drawer-brand-fix`,`v4.3.3`),r();let e=u(),{user:t,logout:i}=je(),[o,s]=(0,S.useState)(!1),[d,f]=(0,S.useState)(!1),[p,m]=(0,S.useState)(()=>kr(e.pathname));(0,S.useEffect)(()=>{if(!d)return;let e=document.body.style.overflow,t=document.body.style.overscrollBehavior;return document.documentElement.classList.add(`nurselink-nav-lock`),document.body.style.overflow=`hidden`,document.body.style.overscrollBehavior=`none`,()=>{document.documentElement.classList.remove(`nurselink-nav-lock`),document.body.style.overflow=e,document.body.style.overscrollBehavior=t}},[d]);let[h,g]=(0,S.useState)(!1),[_,v]=(0,S.useState)(()=>{let e=window.localStorage.getItem(`nurselink-member-theme`);return[`light`,`dark`,`system`].includes(e)?e:`light`});(0,S.useEffect)(()=>{document.documentElement.dataset.theme=_,document.documentElement.setAttribute(`data-nurselink-ios-theme-fix`,`v4.0.4`),document.documentElement.setAttribute(`data-nurselink-iphone-tap-fix`,`v4.0.5`),window.localStorage.setItem(`nurselink-member-theme`,_);let e=document.documentElement;e.setAttribute(`data-theme`,_),e.setAttribute(`data-nurselink-theme-runtime`,`v4.0.1`),_===`light`?e.style.colorScheme=`light`:_===`dark`?e.style.colorScheme=`dark`:e.style.colorScheme=``,document.body?.setAttribute(`data-theme`,_)},[_]);let[y,b]=(0,S.useState)(null),[x,C]=(0,S.useState)(!1),[E,D]=(0,S.useState)(``),ee=t?.roles?.includes(`member`)||!!t?.member,O=t?.roles?.some(e=>[`administrator`,`super_administrator`].includes(e)),k=`nurselink-navigation-tour-v1:${t?.id||t?.email||`member`}`;(0,S.useEffect)(()=>{f(!1),m(kr(e.pathname))},[e.pathname]),(0,S.useEffect)(()=>{let e=!0;return ne().then(t=>{e&&b(t?.data||null)}).catch(()=>{e&&D(`Policy status is temporarily unavailable. You can continue using NurseLink.`)}),()=>{e=!1}},[t?.id]);async function A(){C(!0),D(``);try{let e=await re();b(e?.data||{current:!0})}catch(e){D(Nr(e))}finally{C(!1)}}async function te(){s(!0);try{await i(),window.location.replace(`/`)}catch(e){console.warn(`NurseLink sign-out request completed with a client-side error.`,e)}finally{s(!1)}}function j(e,t){return ee?t:(0,w.jsx)(Y,{title:e})}return(0,w.jsxs)(`div`,{className:[`app-shell`,`lbs-uiux`,`member-react-safe-shell-v108`,`member-shell-v636`,d?`mobile-nav-open`:``].filter(Boolean).join(` `),children:[(0,w.jsx)(`a`,{href:`#lbs-main-content`,className:`lbs-skip-link`,children:`Skip to main content`}),(0,w.jsx)(`button`,{type:`button`,className:`mobile-nav-backdrop`,"aria-label":`Close navigation`,onClick:()=>f(!1)}),(0,w.jsx)(br,{open:d,setOpen:f}),(0,w.jsxs)(`aside`,{className:`sidebar`,id:`lbs-member-sidebar`,children:[(0,w.jsx)(`button`,{type:`button`,className:`mobile-nav-close`,"aria-label":`Close navigation`,onClick:()=>f(!1),children:(0,w.jsx)(`span`,{"aria-hidden":`true`,children:`×`})}),(0,w.jsxs)(`div`,{className:`logo nurselink-sidebar-brand`,"aria-label":`NurseLink Medical Services Division`,style:{alignItems:`center`,display:`flex`,flexDirection:`column`,gap:`8px`,justifyContent:`center`,minHeight:162,padding:`6px 8px 20px`,textAlign:`center`},children:[(0,w.jsx)(`div`,{className:`nurselink-runtime-logo nurselink-sidebar-logo`,"data-nurselink-logo-placement":`sidebar`,style:{background:`#fff`,borderRadius:10,boxShadow:`0 10px 22px rgba(2,30,56,.24)`,flex:`0 0 auto`,height:84,maxHeight:84,maxWidth:226,minHeight:84,minWidth:226,overflow:`hidden`,padding:0,width:226},children:(0,w.jsx)(`img`,{src:`/lbs-sidebar-logo-cropped-clean.png`,alt:`LBS Recruitment Solutions`,style:{display:`block`,height:`100%`,objectFit:`contain`,width:`100%`}})}),(0,w.jsxs)(`div`,{className:`nurselink-sidebar-brand-copy`,style:{alignItems:`center`,display:`flex`,flexDirection:`column`,justifyContent:`center`,minWidth:0,textAlign:`center`,width:`100%`},children:[(0,w.jsx)(`strong`,{children:`NurseLink`}),(0,w.jsx)(`small`,{children:`Medical Services Division`})]})]}),(0,w.jsx)(`div`,{className:`lbs-workspace-label`,children:`APPLICANT PORTAL`}),(0,w.jsx)(`nav`,{className:`nl-member-accordion-nav`,"aria-label":`Applicant navigation`,children:Or.map(t=>{let n=p===t.id,r=kr(e.pathname)===t.id;if(t.items.length===1){let[e,n,r]=t.items[0],i=Mr.includes(n)&&!ee;return(0,w.jsxs)(l,{to:n,"data-tour-path":n,onClick:()=>f(!1),className:({isActive:e})=>`lbs-direct-nav${e?` active`:``}${i?` locked-nav`:``}`,children:[(0,w.jsx)(jr,{name:r}),(0,w.jsx)(`span`,{children:e}),i&&(0,w.jsx)(`small`,{"aria-label":`Membership access required`,children:`🔒`})]},t.id)}return(0,w.jsxs)(`section`,{className:`nl-member-nav-section${n?` is-expanded`:``}`,children:[(0,w.jsxs)(`button`,{type:`button`,className:`nl-member-nav-toggle`,"aria-expanded":n,"aria-controls":`nl-member-nav-${t.id}`,onClick:()=>m(e=>e===t.id?null:t.id),children:[(0,w.jsx)(jr,{name:t.icon}),(0,w.jsx)(`span`,{className:`nl-member-nav-toggle-label`,children:t.label}),r&&!n&&(0,w.jsx)(`span`,{className:`nl-member-nav-current-dot`,"aria-label":`Contains current page`}),(0,w.jsx)(`svg`,{className:`nl-member-nav-chevron`,viewBox:`0 0 24 24`,"aria-hidden":`true`,focusable:`false`,children:(0,w.jsx)(`path`,{d:`m9 18 6-6-6-6`})})]}),(0,w.jsx)(`div`,{id:`nl-member-nav-${t.id}`,className:`nl-member-nav-items`,hidden:!n,children:t.items.map(([e,t,n])=>{if(t.endsWith(`.html`))return(0,w.jsxs)(`a`,{href:t,onClick:()=>f(!1),children:[(0,w.jsx)(jr,{name:n}),(0,w.jsx)(`span`,{className:`member-admin-nav-label`,children:e})]},t);let r=Mr.includes(t)&&!ee;return(0,w.jsxs)(l,{onClick:()=>f(!1),to:t,"data-tour-path":t,className:({isActive:e})=>[e?`active`:``,r?`locked-nav`:``].filter(Boolean).join(` `),children:[(0,w.jsx)(jr,{name:n}),(0,w.jsx)(`span`,{className:`member-admin-nav-label`,children:e}),r&&(0,w.jsx)(`small`,{children:`🔒`})]},t)})})]},t.id)})}),(0,w.jsxs)(`div`,{className:`sidebar-bottom`,children:[e.pathname===`/dashboard`&&t?.roles?.includes(`super_administrator`)&&(0,w.jsx)(`a`,{className:`nurselink-admin-center-link`,href:`/nurselink-super-admin-test-center.html`,children:`Test Center`}),O&&(0,w.jsx)(`a`,{className:`nurselink-admin-center-link nurselink-super-admin-center-link`,href:`/admin/login.html`,"aria-label":`Open NurseLink Administration Operations Center`,children:`Admin Center`}),(0,w.jsx)(`button`,{className:`sidebar-logout`,onClick:te,disabled:o,children:o?`Signing Out...`:`Sign Out`})]})]}),(0,w.jsxs)(`main`,{className:`main-area`,id:`lbs-main-content`,tabIndex:-1,children:[(0,w.jsxs)(`header`,{className:`topbar`,children:[(0,w.jsxs)(`button`,{type:`button`,className:`mobile-menu-button`,"aria-label":`Open navigation`,"aria-expanded":d,onClick:()=>f(e=>!e),children:[(0,w.jsx)(`span`,{}),(0,w.jsx)(`span`,{}),(0,w.jsx)(`span`,{})]}),(0,w.jsxs)(`div`,{className:`lbs-topbar-title`,children:[(0,w.jsx)(`strong`,{children:`Applicant Portal`}),(0,w.jsx)(`span`,{children:`NurseLink member workspace`})]}),(0,w.jsxs)(`div`,{className:`topbar-member-actions`,children:[(0,w.jsx)(l,{to:`/notifications`,className:`nld-notification-link`,"aria-label":`Open notifications`,children:(0,w.jsxs)(`svg`,{"aria-hidden":`true`,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,w.jsx)(`path`,{d:`M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9`}),(0,w.jsx)(`path`,{d:`M10 21h4`})]})}),(0,w.jsxs)(`button`,{type:`button`,className:`navigation-help-button`,onClick:()=>g(!0),"aria-label":`Open member navigation guide`,title:`Help`,children:[`? `,(0,w.jsx)(`span`,{children:`Help`})]}),(0,w.jsxs)(`div`,{className:`member-theme-control-v337`,role:`group`,"aria-label":`Appearance`,children:[(0,w.jsx)(`button`,{type:`button`,"aria-label":`Use light mode`,title:`Light`,"aria-pressed":_===`light`,onClick:()=>v(`light`),children:(0,w.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,w.jsx)(`circle`,{cx:`12`,cy:`12`,r:`4`}),(0,w.jsx)(`path`,{d:`M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41`})]})}),(0,w.jsx)(`button`,{type:`button`,"aria-label":`Use dark mode`,title:`Dark`,"aria-pressed":_===`dark`,onClick:()=>v(`dark`),children:(0,w.jsx)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:(0,w.jsx)(`path`,{d:`M20.5 14.1A8.5 8.5 0 0 1 9.9 3.5 8.5 8.5 0 1 0 20.5 14.1Z`})})}),(0,w.jsx)(`button`,{type:`button`,"aria-label":`Follow system appearance`,title:`System`,"aria-pressed":_===`system`,onClick:()=>v(`system`),children:(0,w.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[(0,w.jsx)(`rect`,{x:`3`,y:`4`,width:`18`,height:`13`,rx:`2`}),(0,w.jsx)(`path`,{d:`M8 21h8M12 17v4`})]})})]}),(0,w.jsxs)(`div`,{className:`user-chip`,children:[(0,w.jsxs)(`div`,{className:`avatar`,"data-account-photo":`true`,children:[(0,w.jsx)(`img`,{className:`account-header-photo`,src:`/backend/api/profile-photo/image`,alt:`Your profile photo`,onLoad:e=>{e.currentTarget.style.opacity=`1`},onError:e=>{e.currentTarget.style.opacity=`0`}}),t?.name?.charAt(0)?.toUpperCase()||`N`]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{children:t?.name||`Member`}),(0,w.jsx)(`small`,{children:t?.member?t.member.member_no:`Membership pending`})]})]})]})]}),y&&!y.current&&(0,w.jsxs)(`section`,{className:`policy-consent-banner`,"aria-labelledby":`policy-consent-title`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`strong`,{id:`policy-consent-title`,children:`Please review NurseLink’s current policies`}),(0,w.jsx)(`p`,{children:`The Terms of Use and Privacy Notice were updated on 18 August 2026. Review both documents before recording your acceptance. Your access remains available while you review.`}),(0,w.jsxs)(`div`,{className:`policy-consent-links`,children:[(0,w.jsx)(l,{to:`/terms`,target:`_blank`,children:`Read Terms of Use`}),(0,w.jsx)(l,{to:`/privacy`,target:`_blank`,children:`Read Privacy Notice`})]}),E&&(0,w.jsx)(`div`,{className:`policy-consent-error`,children:E})]}),(0,w.jsx)(`button`,{type:`button`,onClick:A,disabled:x,children:x?`Recording acceptance…`:`Accept both policies`})]}),!y&&E&&(0,w.jsx)(`div`,{className:`policy-consent-advisory`,children:E}),(0,w.jsx)(yr,{pathname:e.pathname}),(0,w.jsx)(Vr,{open:h,isMember:ee,onClose:(e=!1)=>{e&&window.localStorage.setItem(k,`completed`),g(!1)}}),(0,w.jsxs)(c,{children:[(0,w.jsx)(n,{path:`/appointments`,element:(0,w.jsx)(Sr,{})}),(0,w.jsx)(n,{path:`/processing`,element:(0,w.jsx)(`div`,{className:`lbs-page`,children:(0,w.jsx)(`lbs-processing`,{})})}),(0,w.jsx)(n,{path:`/help`,element:(0,w.jsx)(Cr,{})}),(0,w.jsx)(n,{path:`/cv-maker`,element:(0,w.jsx)(T,{})}),(0,w.jsx)(n,{path:`/dashboard`,element:(0,w.jsx)(Ve,{})}),(0,w.jsx)(n,{path:`/profile`,element:(0,w.jsx)(jn,{})}),(0,w.jsx)(n,{path:`/smart-registration`,element:(0,w.jsx)(G,{})}),(0,w.jsx)(n,{path:`/application-status`,element:(0,w.jsx)(Fn,{})}),(0,w.jsx)(n,{path:`/portfolio`,element:j(`Professional Portfolio`,(0,w.jsx)(Br,{}))}),(0,w.jsx)(n,{path:`/jobs`,element:j(`Career & Jobs`,(0,w.jsx)(qn,{}))}),(0,w.jsx)(n,{path:`/applications`,element:j(`Applications`,(0,w.jsx)(Jn,{}))}),(0,w.jsx)(n,{path:`/credential-renewal`,element:j(`Credential Renewal`,(0,w.jsx)(J,{name:`credential-renewal`},`credential-renewal`))}),(0,w.jsx)(n,{path:`/career-intelligence`,element:j(`Career Intelligence`,(0,w.jsx)(J,{name:`career-intelligence`},`career-intelligence`))}),(0,w.jsx)(n,{path:`/notifications`,element:(0,w.jsx)(J,{name:`notifications`},`notifications`)}),(0,w.jsx)(n,{path:`/mentoring`,element:j(`Mentoring & Peer Support`,(0,w.jsx)(J,{name:`mentoring`},`mentoring`))}),(0,w.jsx)(n,{path:`/engagement`,element:j(`Member Engagement Hub`,(0,w.jsx)(J,{name:`engagement`},`engagement`))}),(0,w.jsx)(n,{path:`/learning`,element:j(`Professional Learning`,(0,w.jsx)(ur,{}))}),(0,w.jsx)(n,{path:`/credentials`,element:j(`Credentials`,(0,w.jsx)(tr,{children:(0,w.jsx)(Vn,{})}))}),(0,w.jsx)(n,{path:`/qualifications`,element:j(`Qualification Framework`,(0,w.jsx)(Yn,{}))}),(0,w.jsx)(n,{path:`/documents`,element:j(`Documents`,(0,w.jsx)(Zn,{}))}),(0,w.jsx)(n,{path:`/digital-member-id`,element:j(`Digital Member ID`,(0,w.jsx)(J,{name:`digital-member-id`},`digital-member-id`))}),(0,w.jsx)(n,{path:`/messages`,element:(0,w.jsx)(sr,{})}),(0,w.jsx)(n,{path:`/events`,element:(0,w.jsx)(Qn,{})}),(0,w.jsx)(n,{path:`/initiatives`,element:j(`Programs & Initiatives`,(0,w.jsx)(bt,{}))}),(0,w.jsx)(n,{path:`/policies`,element:j(`Policies & Advocacy`,(0,w.jsx)(R,{}))}),(0,w.jsx)(n,{path:`/welfare`,element:j(`Welfare & Crisis Support`,(0,w.jsx)(mt,{}))}),(0,w.jsx)(n,{path:`/policy-center`,element:(0,w.jsx)(Rr,{onAccepted:b})}),O&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(n,{path:`/admin`,element:(0,w.jsx)(qt,{})}),(0,w.jsx)(n,{path:`/admin/appearance`,element:(0,w.jsx)(qt,{})})]}),(0,w.jsx)(n,{path:`*`,element:(0,w.jsx)(a,{to:`/dashboard`,replace:!0})})]})]})]})}function Ur(){return(0,w.jsx)(d,{children:(0,w.jsxs)(c,{children:[(0,w.jsx)(n,{path:`/login`,element:(0,w.jsx)(Pr,{})}),(0,w.jsx)(n,{path:`/register`,element:(0,w.jsx)(Ir,{})}),(0,w.jsx)(n,{path:`/terms`,element:(0,w.jsx)(Lr,{type:`terms`})}),(0,w.jsx)(n,{path:`/privacy`,element:(0,w.jsx)(Lr,{type:`privacy`})}),(0,w.jsx)(n,{path:`/reset-password`,element:(0,w.jsx)(hr,{})}),(0,w.jsx)(n,{path:`/forgot-password`,element:(0,w.jsx)(Fr,{})}),(0,w.jsx)(n,{path:`/verify-email`,element:(0,w.jsx)(zr,{})}),(0,w.jsx)(n,{path:`/*`,element:(0,w.jsx)(Dn,{children:(0,w.jsx)(Hr,{})})})]})})}(0,C.createRoot)(document.getElementById(`root`)).render((0,w.jsx)(S.StrictMode,{children:(0,w.jsx)(Ae,{children:(0,w.jsx)(Ur,{})})}));