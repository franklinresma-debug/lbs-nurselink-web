import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
const names = Object.freeze({ notifications:'Notifications', mentoring:'Mentoring & peer support', engagement:'Engagement', 'career-intelligence':'Career intelligence', 'credential-renewal':'Credential renewal', 'digital-member-id':"Digital applicant ID" })
// The allowlist points only to local, reviewed application documents, never user HTML.
export default function ManagedWorkspace({ name }) {
  const iframe = useRef(null)
  const [html, setHtml] = useState('')
  const [error, setError] = useState('')
  const [attempt, setAttempt] = useState(0)
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  useEffect(() => {
    if (!Object.hasOwn(names, name)) { setError('This workspace is unavailable.'); setLoading(false); return undefined }
    const controller = new AbortController()
    setLoading(true); setError(''); setHtml('')
    fetch(`/lbs-workspaces/${name}.html?v=20260929`, { signal:controller.signal, credentials:'same-origin', cache:'no-cache' })
      .then(response => { if (!response.ok || !response.headers.get('content-type')?.includes('text/html')) throw new Error('The workspace could not be loaded.'); return response.text() })
      .then(text => { if (!controller.signal.aborted) { setHtml(text); setLoading(false) } })
      .catch(e => { if (!controller.signal.aborted) { setError(e.message); setLoading(false) } })
    return () => controller.abort()
  }, [name, attempt])
  useEffect(() => {
    const element = iframe.current
    if (!element || !html) return undefined
    let sizeObserver, scheduled
    const themeMedia = matchMedia('(prefers-color-scheme: dark)')
    const syncTheme = () => { const root=element.contentDocument?.documentElement; if (!root) return; const selected=document.documentElement.dataset.theme || 'light'; const actual=selected==='system' ? (themeMedia.matches?'dark':'light') : selected; root.dataset.theme=actual; root.dataset.nlTheme=actual; root.style.colorScheme=actual }
    const measure = () => {
      cancelAnimationFrame(scheduled)
      scheduled=requestAnimationFrame(() => {
        const main=element.contentDocument?.querySelector('main'); if(!main) return
        const box=main.getBoundingClientRect(), style=getComputedStyle(main)
        const h=Math.max(360,Math.ceil(box.height+Math.max(0,box.top)+parseFloat(style.marginBottom || '0')+24))
        if(element.style.height!==`${h}px`) element.style.height=`${h}px`
      })
    }
    const loaded = () => {
      sizeObserver?.disconnect()
      const doc=element.contentDocument, main=doc?.querySelector('main'); if(!main)return
      syncTheme(); sizeObserver=new ResizeObserver(measure); sizeObserver.observe(main); measure()
      if(location.hash){const target=doc.getElementById(decodeURIComponent(location.hash.slice(1)));target?.scrollIntoView({block:'center'})}
    }
    const observer=new MutationObserver(syncTheme)
    observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']})
    element.addEventListener('load',loaded);themeMedia.addEventListener('change',syncTheme);loaded()
    return () => { sizeObserver?.disconnect();observer.disconnect();cancelAnimationFrame(scheduled);element.removeEventListener('load',loaded);themeMedia.removeEventListener('change',syncTheme) }
  }, [html, location.hash])
  return <section aria-label={names[name] || 'Workspace'} aria-busy={loading}>
    {loading && <div className="lbs-managed-notice" role="status">Loading {names[name] || 'workspace'}…</div>}
    {error && <div className="lbs-managed-notice" role="alert"><h2>Workspace could not be loaded</h2><p>{error} Your saved records have not changed.</p><button className="lbs-button" onClick={()=>setAttempt(n=>n+1)}>Try again</button></div>}
    {!loading && !error && <iframe ref={iframe} title={names[name]} className="lbs-managed-frame" srcDoc={html} />}
  </section>
}
