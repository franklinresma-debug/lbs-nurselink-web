import { useEffect, useRef, useState } from 'react'

// Keep print styles isolated while using the actual member portal shell.
export default function CvMakerWorkspace() {
  const frame = useRef(null)
  const [documentHtml, setDocumentHtml] = useState('')
  useEffect(() => {
    const abort = new AbortController()
    fetch('/nurselink-cv-workspace.html', { signal: abort.signal }).then(r => { if (!r.ok) throw new Error(); return r.text() }).then(setDocumentHtml).catch(e => { if (e.name !== 'AbortError') setDocumentHtml('<p>Unable to load CV Maker. Please refresh the page.</p>') })
    return () => abort.abort()
  }, [])
  useEffect(() => {
    const element = frame.current
    let resize
    const syncTheme = () => {
      const root = element.contentDocument?.documentElement
      if (root) root.dataset.theme = document.documentElement.dataset.theme || (document.documentElement.classList.contains('dark') ? 'dark' : 'light')
    }
    const loaded = () => {
      resize?.disconnect()
      const doc = element.contentDocument
      const main = doc?.querySelector('main')
      if (!main) return
      const measure = () => {
        if (element.contentDocument === doc && main.isConnected) {
          element.style.height = `${Math.ceil(main.getBoundingClientRect().height) + 40}px`
        }
      }
      resize = new ResizeObserver(measure)
      resize.observe(main)
      syncTheme()
      measure()
    }
    const theme = new MutationObserver(syncTheme)
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-theme'] })
    element.addEventListener('load', loaded)
    loaded()
    return () => { resize?.disconnect(); theme.disconnect(); element.removeEventListener('load', loaded) }
  }, [])
  return <iframe ref={frame} title="CV Maker workspace" srcDoc={documentHtml} style={{ display: 'block', width: '100%', minHeight: 900, border: 0 }} />
}
