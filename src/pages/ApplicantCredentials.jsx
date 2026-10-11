import {useEffect, useState} from 'react'
import {csrf} from '../lib/api'

const empty = {credential_type:'prc_license', title:'', credential_number:'', issuing_body:'', country:'Philippines', issue_date:'', expiry_date:''}
async function registry(method='GET', body, id='') {
  await csrf()
  const cookie=document.cookie.split('; ').find(v=>v.startsWith('XSRF-TOKEN='))
  const response=await fetch(`/backend/api/credential-registry${id ? `/${id}` : ''}`, {
    method, credentials:'include', headers:{Accept:'application/json','Content-Type':'application/json',
      'X-XSRF-TOKEN':cookie ? decodeURIComponent(cookie.slice(11)) : ''},
    ...(body ? {body:JSON.stringify(body)} : {}),
  })
  const data=await response.json()
  if(!response.ok) throw new Error(Object.values(data.errors||{}).flat()[0] || data.message || 'Unable to save credential.')
  return data.data
}

export default function ApplicantCredentials() {
  const [rows,setRows]=useState([]),[form,setForm]=useState(empty),[error,setError]=useState(''),[notice,setNotice]=useState(''),[busy,setBusy]=useState(false)
  const refresh=async()=>setRows(await registry())
  useEffect(()=>{refresh().catch(e=>setError(e.message))},[])
  async function save(e){e.preventDefault();setBusy(true);setError('');setNotice('');try{await registry('POST',Object.fromEntries(Object.entries(form).map(([k,v])=>[k,v||null])));setForm(empty);await refresh();setNotice('Credential saved. LBS will review your information.')}catch(e){setError(e.message)}finally{setBusy(false)}}
  return <section className="page-card">
    <div className="eyebrow">Applicant information</div><h1>Credentials</h1>
    <p>Enter your licenses, certificates and qualifications now. Email confirmation and LBS review remain separate steps.</p>
    <p><a href="/smart-registration">Edit your profile and upload supporting documents</a></p>
    {error&&<p className="form-error" role="alert">{error}</p>}{notice&&<p className="form-success" role="status">{notice}</p>}
    <form onSubmit={save} style={{display:'grid',gap:16,maxWidth:760}}>
      <label>Credential type<select value={form.credential_type} onChange={e=>setForm({...form,credential_type:e.target.value})}>
        {['prc_license','nursing_diploma','international_license','specialty_certification','training_certificate','professional_membership','language_certificate','other'].map(v=><option key={v} value={v}>{v.replaceAll('_',' ')}</option>)}
      </select></label>
      {[['title','Title',true],['credential_number','Credential number'],['issuing_body','Issuing organization'],['country','Country'],['issue_date','Issue date'],['expiry_date','Expiry date']].map(([key,label,required])=><label key={key}>{label}<input type={key.endsWith('_date')?'date':'text'} required={!!required} maxLength={key==='credential_number'?160:190} value={form[key]} onChange={e=>setForm({...form,[key]:e.target.value})}/></label>)}
      <button className="primary-button" type="submit" disabled={busy}>{busy?'Saving…':'Save credential'}</button>
    </form>
    <h2>Saved credentials</h2>{rows.length ? rows.map(row=><article className="page-card" key={row.id}><strong>{row.title}</strong><p>{row.issuing_body} · {row.verification_status}</p></article>):<p>No credentials entered yet.</p>}
  </section>
}
