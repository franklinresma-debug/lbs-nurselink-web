import { useEffect, useRef, useState } from 'react'
import './SmartRegistrationOcrTest.css'
import MsdApplicationForm from './MsdApplicationForm'
import { mapMsdForm } from './msdFormMapping'

const endpoint = `${import.meta.env.VITE_API_URL || '/backend'}/api/nurselink/admin/registration-support/ocr-review`
const csrfCookie = import.meta.env.VITE_OCR_SANDBOX_CSRF_COOKIE || 'XSRF-TOKEN'
const recordValues = item => Object.fromEntries(Object.entries(item).filter(([key]) => !['key','confidence','flagged','field_provenance','ocr_quality','source_page','source_pages','source_excerpt','source_method','source_methods','normalization_version','review_status','review_required','alternatives','conflict'].includes(key)))
export default function SmartRegistrationOcrTest() {
  const [files, setFiles] = useState([]), [selected, setSelected] = useState(0), [busy, setBusy] = useState(false)
  const [tab, setTab] = useState('structured')
  const generation = useRef(0), requests = useRef(new Set()), picker = useRef(null)
  function cancel() { generation.current++; for (const xhr of requests.current) xhr.abort(); requests.current.clear() }
  useEffect(() => () => cancel(), [])
  function reset() { cancel(); setBusy(false); setFiles([]); setSelected(0); if (picker.current) picker.current.value = '' }
  function update(id, patch) { setFiles(rows => rows.map(row => row.id === id ? { ...row, ...patch } : row)) }
  function call(body, onUpload) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest(); requests.current.add(xhr)
      xhr.open('POST', endpoint); xhr.withCredentials = true; xhr.timeout = 150000
      xhr.setRequestHeader('Accept', 'application/json')
      const cookie = document.cookie.split('; ').find(s => s.startsWith(`${csrfCookie}=`))
      if (cookie) xhr.setRequestHeader('X-XSRF-TOKEN', decodeURIComponent(cookie.slice(csrfCookie.length + 1)))
      if (!(body instanceof FormData)) { xhr.setRequestHeader('Content-Type', 'application/json'); body = JSON.stringify(body) }
      xhr.upload.onprogress = e => { if (e.lengthComputable) onUpload?.(e.loaded / e.total) }
      xhr.onload = () => { requests.current.delete(xhr); let data; try { data = JSON.parse(xhr.responseText) } catch { reject(new Error(`Invalid API response (${xhr.status})`)); return } if (xhr.status >= 200 && xhr.status < 300) resolve(data); else reject(new Error(data.message || `HTTP ${xhr.status}`)) }
      xhr.onerror = () => { requests.current.delete(xhr); reject(new Error('Connection failed')) }
      xhr.ontimeout = () => { requests.current.delete(xhr); reject(new Error('Processing timed out; retry this file')) }
      xhr.onabort = () => { requests.current.delete(xhr); reject(new Error('Cancelled')) }
      xhr.send(body)
    })
  }
  async function process(row, token) {
    const started = performance.now(); let pages = []
    const patch = value => { if (token === generation.current) update(row.id, value) }
    const upload = (action, page, callback) => {
      const data = new FormData(); data.append('action', action); data.append('file', row.file); if (page) data.append('page', page)
      return call(data, callback)
    }
    try {
      patch({ status: 'Uploading / inspecting', progress: 0, pages: [], result: null, msdForm: null, error: null, upload: 0 })
      const info = await upload('inspect', null, fraction => patch({ upload: fraction * 100, progress: fraction * 10 }))
      if (token !== generation.current) return
      patch({ total: info.total_pages, progress: 10, upload: 100 })
      for (let page = 1; page <= info.total_pages; page++) {
        patch({ status: `OCR / reading page ${page} of ${info.total_pages}`, page, upload: 0 })
        // Repeated request-temporary uploads avoid retaining documents or creating production jobs.
        const result = await upload('page', page, fraction => patch({ upload: fraction * 100 }))
        if (token !== generation.current) return
        pages = [...pages, result]; patch({ pages, progress: 10 + 80 * pages.length / info.total_pages })
      }
      patch({ status: 'Parsing extracted text', progress: 90 })
      const result = await call({ action: 'parse', pages })
      patch({ result, msdForm: mapMsdForm(result), status: 'Complete — review required', progress: 100, seconds: (performance.now() - started) / 1000 })
      if (token === generation.current) setTab('structured')
    } catch (error) { patch({ status: 'Failed', error: error.message, pages, seconds: (performance.now() - started) / 1000 }) }
  }
  async function run(rows = files) {
    if (busy) return; setBusy(true); const token = generation.current
    for (const row of rows) { if (token !== generation.current) break; await process(row, token) }
    if (token === generation.current) setBusy(false)
  }
  function choose(event) {
    const chosen = Array.from(event.target.files || [])
    reset()
    setFiles(chosen.slice(0, 20).map((file, id) => ({ id, file, name: file.name, status: 'Queued', progress: 0, pages: [], error: file.size > 15 * 1024 * 1024 || !/\.(pdf|jpe?g|png)$/i.test(file.name) ? 'Choose a PDF, JPEG or PNG of at most 15 MB' : null })))
  }
  const row = files[selected], overall = files.length ? files.reduce((sum, f) => sum + f.progress, 0) / files.length : 0
  function exportResults() {
    const blob = new Blob([JSON.stringify({ sandbox: true, exported_at: new Date().toISOString(), files: files.map(({ file, ...rest }) => rest) }, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = 'nurselink-ocr-review.json'; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000)
  }
  return <main className="ocr-sandbox"><header><span className="sandbox-tag">ADMIN · DOCUMENT REVIEW</span><h1>Smart Registration OCR Review</h1><p>Document extraction and MSD application review. Results stay in this page and are never saved to applicant records.</p></header>
    <section className="sandbox-panel"><label>Choose up to 20 test documents (PDF, JPG/JPEG, PNG; 15 MB each)<input ref={picker} type="file" multiple accept=".pdf,.jpg,.jpeg,.png" onChange={choose} disabled={busy} /></label><div className="sandbox-actions"><button disabled={busy || !files.length || files.some(f => f.error && f.status === 'Queued')} onClick={() => run()}>Extract documents</button><button onClick={reset}>Reset review</button><button disabled={!files.some(f => f.result)} onClick={exportResults}>Export Results (JSON)</button></div><label>Overall total progress: {overall.toFixed(1)}%<progress max="100" value={overall} /></label><small>Equal weight per file: inspection/upload 10%, completed pages 80%, parsing 10%. Progress pauses while an OCR page is running; elapsed time is reported after each request.</small></section>
    <div className="sandbox-layout"><nav aria-label="Test documents">{files.map((f, i) => <button className={selected === i ? 'selected' : ''} key={f.id} onClick={() => setSelected(i)}><strong>{f.name}</strong><span>{f.status} · {f.progress.toFixed(1)}%</span><progress max="100" value={f.progress} />{f.error && <span role="alert">{f.error}</span>}</button>)}</nav>
    {row && <section className="sandbox-panel"><h2>{row.name}</h2><p>{row.status} · Upload bytes: {(row.upload || 0).toFixed(0)}% · {row.pages.length}/{row.total || '?'} pages · {row.seconds?.toFixed(2) || '—'} seconds</p><progress max="100" value={row.progress} />{row.error && <p role="alert">{row.error} <button disabled={busy || row.status === 'Queued'} onClick={() => run([row])}>Retry file</button></p>}
      <ul>{row.pages.map(p => <li key={p.page}>Page {p.page}: {p.status} · Engine {p.engine} · {p.seconds}s · {p.ocr_quality?.fallback_engine ? `Fallback: ${p.ocr_quality.fallback_engine}` : p.engine === 'pdf_text' ? 'Embedded PDF text (OCR not needed)' : 'Actual OCR'} · OCR confidence {p.ocr_quality?.mean_confidence ?? 'N/A'}{p.ocr_quality && '%'}{p.ocr_quality?.review_required && ' · Review required'}</li>)}</ul>
      <div className="sandbox-actions"><button aria-pressed={tab === 'structured'} onClick={() => setTab('structured')}>Categorized extraction</button><button aria-pressed={tab === 'form'} onClick={() => setTab('form')}>MSD application form</button><button aria-pressed={tab === 'debug'} onClick={() => setTab('debug')}>JSON / debug</button></div>
      {tab === 'form' ? row.msdForm ? <MsdApplicationForm draft={row.msdForm} disabled={busy} onChange={msdForm=>update(row.id,{msdForm})}/> : <p>Extract documents to populate the MSD form for this document.</p> : tab === 'debug' ? <pre>{JSON.stringify({ pages: row.pages, result: row.result, msdForm: row.msdForm }, null, 2)}</pre> : <div className="sandbox-results"><section><h3>Raw OCR / PDF text</h3><pre>{row.pages.map(p => `--- Page ${p.page} (${p.engine}) ---\n${p.text}`).join('\n\n') || 'Awaiting OCR'}</pre></section><section><h3>Structured extraction</h3>{row.result && <><p>Completeness: {row.result.overall.completeness_percent}% · Confidence: {row.result.overall.confidence_percent ?? 'N/A'}%</p><small>{row.result.overall.definition}</small>{Object.entries(row.result.categories).map(([name, c], categoryIndex) => <details key={name} open><summary>{categoryIndex + 1}. {name} · Completeness {c.completeness_percent}% · Confidence {c.confidence_percent ?? 'N/A'}{c.confidence_percent !== null && '%'}</summary>{c.missing.length > 0 && <p className="sandbox-warning">Not found: {c.missing.map(key => key.replace(/^@/, '').replaceAll('_', ' ')).join(', ')}</p>}{c.items.map((item, i) => <article key={i} className={item.flagged ? 'sandbox-warning' : ''}><strong>{item.key.replace(/^@/, '').replaceAll('_', ' ')}</strong><span> · {Math.round((item.confidence || 0) * 100)}% {item.flagged && '· REVIEW'}</span><p>Source page(s): {[...new Set([...(item.source_pages || []), ...(item.source_page ? [item.source_page] : [])])].join(', ') || 'Not found'}</p><pre>{JSON.stringify(item.value ?? recordValues(item), null, 2)}</pre></article>)}</details>)}<details open><summary>Graduated field checks</summary>{row.result.graduation_diagnostics.map((d, i) => <p key={i}>Page {d.page}: {d.evidence}<br />{d.note}</p>)}</details></>}</section></div>}
    </section>}</div>
  </main>
}
