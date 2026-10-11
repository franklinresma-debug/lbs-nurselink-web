import { useState } from 'react'
import { ocrWorkflowReview, ocrResolveIssue, ocrEmailIntakes, ocrLinkEmailIntake } from '../lib/api'

export default function OcrWorkflowReview() {
  const [membership,setMembership]=useState(new URLSearchParams(location.search).get('membership') || '')
  const [review,setReview]=useState(null)
  const [notes,setNotes]=useState({})
  const [message,setMessage]=useState('')
  const [busy,setBusy]=useState(false)
  const [intakes,setIntakes]=useState(null)
  const [links,setLinks]=useState({})
  async function loadIntakes(){setBusy(true);try{setIntakes(await ocrEmailIntakes())}catch(e){setMessage(e.message)}finally{setBusy(false)}}
  async function linkIntake(id){setBusy(true);try{await ocrLinkEmailIntake(id,links[id]?.email || '',links[id]?.note || '');setIntakes(await ocrEmailIntakes());setMessage('Documents linked for candidate confirmation.')}catch(e){setMessage(e.message)}finally{setBusy(false)}}
  async function load(event) {
    event?.preventDefault(); setBusy(true);setMessage('')
    try {setReview((await ocrWorkflowReview(membership)).data)} catch(e) {setMessage(e.message)} finally {setBusy(false)}
  }
  async function resolve(issue) {
    setBusy(true);setMessage('')
    try {setReview((await ocrResolveIssue(membership,issue.id,notes[issue.id] || '')).data)} catch(e) {setMessage(e.message)} finally {setBusy(false)}
  }
  return <main className="page"><div className="page-header"><div><h1>Document Review</h1><p>Check the original evidence and record how each issue was resolved before approval.</p></div></div>
    <form className="panel" onSubmit={load}><label>Applicant registration record number<input value={membership} onChange={e=>setMembership(e.target.value)} type="number" min="1" required /></label><button className="primary-button" disabled={busy}>Load review</button></form>
    {message && <p role="alert" className="form-error">{message}</p>}
    {review && <section className="panel"><h2>{review.open_count} issues awaiting review</h2>{review.issues.map(issue=><article key={issue.id} style={{padding:'1rem',borderBottom:'1px solid #ddd'}}><strong>{issue.field ? issue.field.replaceAll('_',' ') : issue.code.replaceAll('_',' ')}</strong><p>{issue.message}</p><p>Status: {issue.status}</p>{issue.status==='open' && !['quarantined','processing','security_review'].includes(issue.code) && <><label>Resolution note<textarea minLength={10} maxLength={3000} value={notes[issue.id] || ''} onChange={e=>setNotes({...notes,[issue.id]:e.target.value})} /></label><button className="primary-button" disabled={busy || (notes[issue.id] || '').trim().length<10} onClick={()=>resolve(issue)}>Record resolution</button></>}</article>)}{review.issues.length===0 && <p>No document conflicts were detected. Credential and qualification decisions still require authorized review.</p>}</section>}
    <section className="panel"><h2>Email applications</h2><button className="secondary-button" onClick={loadIntakes} disabled={busy}>Load inbound applications</button>
      {intakes && <><p>{intakes.configured ? 'Mailbox configured.' : 'Mailbox connection needs configuration.'}</p>{intakes.data.map(row=><article key={row.id} style={{padding:'1rem'}}><strong>Application {row.id}</strong><p>{row.status.replaceAll('_',' ')}</p><ul>{(row.documents || []).map(doc=><li key={doc.id}>{doc.security_status==='clean' ? <a href={doc.download_url}>Review {doc.original_name}</a> : <span>Document {doc.id}: {doc.security_status}</span>}</li>)}</ul>{['ready_for_review','identity_review','document_review'].includes(row.status) && <><label>Confirmed candidate account email<input type="email" value={links[row.id]?.email || ''} onChange={e=>setLinks({...links,[row.id]:{...links[row.id],email:e.target.value}})} /></label><label>Identity review note<textarea value={links[row.id]?.note || ''} onChange={e=>setLinks({...links,[row.id]:{...links[row.id],note:e.target.value}})} /></label><button disabled={busy || (links[row.id]?.note || '').length<10} onClick={()=>linkIntake(row.id)}>Link reviewed documents</button></>}</article>)}</>}
    </section>
  </main>
}
