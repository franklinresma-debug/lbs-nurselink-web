(() => {
'use strict';
const fields=[['Page','page','Page background','#f4f6f9'],['Page','text','Body text','#183153'],['Page','heading','Headings','#102540'],['Page','muted','Secondary text','#526b87'],['Cards','card','Background','#ffffff'],['Cards','cardText','Text','#183153'],['Panels','panel','Background','#ffffff'],['Panels','panelText','Text','#183153'],['Sections','section','Background','#edf5fd'],['Sections','sectionText','Text','#183153'],['Buttons','primary','Primary background','#0874db'],['Buttons','primaryText','Primary text','#ffffff'],['Buttons','secondary','Secondary background','#ffffff'],['Buttons','secondaryText','Secondary text','#0861ac'],['Navigation','sidebar','Sidebar background','#174e7c'],['Navigation','sidebarText','Sidebar text','#ffffff'],['Navigation','category','Category headings','#f7931e'],['Navigation','topbar','Topbar background','#ffffff'],['Navigation','topbarText','Topbar text','#183153'],['Details','border','Borders','#d5e2f0'],['Details','link','Links','#0861ac']];
const defaults=Object.fromEntries(fields.map(([,key,,value])=>[key,value]));
const valid=value=>/^#[0-9a-f]{6}$/i.test(value||'');
function colors(theme){return Object.fromEntries(fields.map(([,key])=>[key,valid(theme?.colors?.[key])?theme.colors[key]:defaults[key]]));}
const prefix='html[data-nl-global-theme] body:not(#nl-theme-a):not(#nl-theme-b):not(#nl-theme-c)';
const rule=(selector,css)=>`${prefix} ${selector}:not(#nlThemePreview):not(#nlThemePreview *){${css}}`;
const surface=name=>`background:var(--nlg-${name})!important;color:var(--nlg-${name}Text)!important;border-color:var(--nlg-border)!important;`;
const styles=[
rule(':is(.main-area,.nl530-main,main) :is(p,label,td,li)','color:var(--nlg-text)!important'),
rule(':is(.card,.page-card,.policy-center-card,.nurselink-smart557-card,.nurselink-smart557-upload-card,.nl530-card,.nl-panel-workspaces,[data-theme-surface="card"]) :is(p,label,td,li)','color:var(--nlg-cardText)!important'),
rule(':is(.panel,.member-locked-panel,.nurselink-interview-panel,.nurselink-message-panel,.nl530-panel,[data-theme-surface="panel"]) :is(p,label,td,li)','color:var(--nlg-panelText)!important'),
rule(':is(.section-card,.nurselink-step-context,.nl530-quick-actions,[data-theme-surface="section"]) :is(p,label,td,li)','color:var(--nlg-sectionText)!important'),
rule(':is(.main-area,.nl530-main,main)','background:var(--nlg-page)!important;color:var(--nlg-text)!important'),
rule(':is(.card,.page-card,.policy-center-card,.nurselink-smart557-card,.nurselink-smart557-upload-card,.nl530-card,.nl-panel-workspaces,[data-theme-surface="card"])',surface('card')),
rule(':is(.panel,.member-locked-panel,.nurselink-interview-panel,.nurselink-message-panel,.nl530-panel,[data-theme-surface="panel"])',surface('panel')),
rule(':is(.section-card,.nurselink-step-context,.nl530-quick-actions,[data-theme-surface="section"])',surface('section')),
rule(':is(.main-area,.nl530-main,main) :is(h1,h2,h3,h4)','color:var(--nlg-heading)!important'),
rule(':is(.main-area,.nl530-main,main) :is(.muted,.text-muted,.subtitle)','color:var(--nlg-muted)!important'),
rule(':is(.main-area,.nl530-main,main) a:not([class*="btn"]):not([class*="button"])','color:var(--nlg-link)!important'),
rule(':is(.main-area,.nl530-main,main) :is(button,.btn,.button,.primary-button)','background:var(--nlg-primary)!important;color:var(--nlg-primaryText)!important;border-color:var(--nlg-border)!important'),
rule(':is(.main-area,.nl530-main,main) :is(.secondary,.secondary-button,.btn-secondary,.button-secondary,button[type="reset"])','background:var(--nlg-secondary)!important;color:var(--nlg-secondaryText)!important'),
rule(':is(.sidebar,#operationsSidebar)','background:var(--nlg-sidebar)!important;color:var(--nlg-sidebarText)!important'),
rule(':is(.sidebar,#operationsSidebar) :is(nav a,.nl530-brand strong,.nl530-brand small)','color:var(--nlg-sidebarText)!important'),
rule(':is(.sidebar .nl-member-nav-group,#operationsMenu>:not(a))','color:var(--nlg-category)!important'),
rule(':is(.topbar,.nl530-topbar)','background:var(--nlg-topbar)!important;color:var(--nlg-topbarText)!important')].join('\n');
let style;let originalIcons;
function apply(data){
const theme=data?.globalDesign?.theme;
if(theme?.enabled===true){for(const[key,value]of Object.entries(colors(theme)))document.documentElement.style.setProperty(`--nlg-${key}`,value);if(!style){style=document.createElement('style');style.id='nl-global-appearance';document.head.append(style);}style.textContent=styles;document.documentElement.setAttribute('data-nl-global-theme','');}else{document.documentElement.removeAttribute('data-nl-global-theme');}
if(!originalIcons)originalIcons=Array.from(document.querySelectorAll('link[rel~="icon"]')).map(el=>el.cloneNode(true));
const icon=data?.branding?.logos?.favicon;
document.querySelectorAll('link[data-nl-favicon]').forEach(el=>el.remove());
if(icon?.enabled&&icon.source){try{const url=new URL(icon.source.startsWith('/api/')?'/backend'+icon.source:icon.source,location.origin);if(!['https:','http:'].includes(url.protocol))return;document.querySelectorAll('link[rel~="icon"]').forEach(el=>el.remove());const link=document.createElement('link');link.rel='icon';link.href=url.href;link.dataset.nlFavicon='true';document.head.append(link);}catch(_){}}else if(!document.querySelector('link[rel~="icon"]'))originalIcons.forEach(el=>document.head.append(el.cloneNode(true)));
}
async function refresh(){try{const r=await fetch('/backend/api/nurselink/appearance-settings',{cache:'no-store',headers:{Accept:'application/json'}});if(r.ok)apply((await r.json()).data);}catch(_){}}
window.NLGlobalAppearance={fields,defaults,colors,apply,refresh};refresh();
})();
