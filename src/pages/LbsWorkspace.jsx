import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { request } from '../lib/api'

const sections = [
  { title: 'My Applications', links: [['Job applications','/applications'],['Processing checklist','/processing'],["Applicant registration review",'/application-status'],['Registration','/smart-registration']] },
  { title: 'Documents & CV', links: [['My documents','/documents'],['CV maker','/cv-maker'],['Credentials','/credentials'],['Renewals','/credential-renewal'],['Qualifications','/qualifications'],['Portfolio','/portfolio']] },
  { title: 'Help & Support', links: [['Help centre','/help'],['Welfare assistance','/welfare'],['Policy & privacy','/policy-center']] },
]
const titles = { '/dashboard':'Home', '/jobs':'Job Opportunities', '/appointments':'Appointments', '/messages':'Messages', '/profile':'My Profile', '/notifications':'Notifications', '/career-intelligence':'Career intelligence', '/learning':'Learning', '/mentoring':'Mentoring', '/events':'Events', '/engagement':'Engagement', '/initiatives':'Programs', '/digital-member-id':"Digital applicant ID", '/policies':'Policies & advocacy' }
export function LbsWorkspaceContext({ pathname }) {
  const group = sections.find(s => s.links.some(([,path]) => pathname === path))
  const current = group?.links.find(([,path]) => path === pathname)?.[0] || titles[pathname] || 'Workspace'
  return <div className="lbs-route-context"><nav className="lbs-breadcrumbs" aria-label="Breadcrumb"><Link to="/dashboard">Home</Link>{pathname !== '/dashboard' && <><span aria-hidden="true">/</span><span aria-current="page">{current}</span></>}</nav>
    {group && <nav className="lbs-workspace-tabs" aria-label={group.title}>{group.links.map(([label,path]) => <NavLink key={path} to={path}>{label}</NavLink>)}</nav>}
  </div>
}

export function LbsDrawerAccessibility({ open, setOpen }) {
  useEffect(() => {
    const side = document.getElementById('lbs-member-sidebar')
    const main = document.getElementById('lbs-main-content')
    const mobile = window.matchMedia('(max-width: 950px)')
    if (!side || !main) return undefined
    const previous = document.activeElement
    let frame
    const sync = () => {
      side.inert = mobile.matches && !open
      main.inert = mobile.matches && open
      if (!mobile.matches && open) setOpen(false)
    }
    sync()
    if (open && mobile.matches) frame = requestAnimationFrame(() => side.querySelector('button')?.focus())
    const keydown = event => {
      if (!open || !mobile.matches) return
      if (event.key === 'Escape') { event.preventDefault(); setOpen(false); return }
      if (event.key !== 'Tab') return
      const items = [...side.querySelectorAll('a[href],button:not([disabled]),input,select,[tabindex="0"]')].filter(x => x.getClientRects().length && !x.closest('[hidden]'))
      if (!items.length) return
      const first = items[0], last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', keydown)
    mobile.addEventListener('change', sync)
    return () => {
      cancelAnimationFrame(frame)
      side.inert = false; main.inert = false
      document.removeEventListener('keydown', keydown)
      mobile.removeEventListener('change', sync)
      if (open && previous?.isConnected) previous.focus()
    }
  }, [open, setOpen])
  return null
}

function ApiState({ error, retry }) {
  return <div className="lbs-empty" role="status"><h2>{error?.status === 403 ? "Applicant registration access is required" : 'Appointments could not be loaded'}</h2><p>{error?.status === 403 ? "Check your applicant registration review for the next required action. No appointment information has been changed." : 'Your records have not been changed. Please retry or contact the recruitment team.'}</p><Link className="lbs-button" to="/application-status">View applicant registration review</Link>{error?.status !== 403 && <button className="lbs-button" onClick={retry}>Try again</button>}</div>
}
export function LbsAppointments() {
  const [state,setState] = useState({ loading:true, rows:[] })
  const [refresh,setRefresh] = useState(0)
  const [view,setView] = useState('all')
  useEffect(() => {
    const controller = new AbortController()
    setState({ loading:true, rows:[] })
    ;(async () => {
      try {
        const payload = await request('/api/job-applications', { signal:controller.signal })
        const all = Array.isArray(payload?.data) ? payload.data : []
        const jobs = all.slice(0,50)
        const rows = []; let unavailable = 0; let unsupported = 0; let index = 0
        await Promise.all(Array.from({ length:Math.min(4,jobs.length) }, async () => {
          while (index < jobs.length && !controller.signal.aborted) {
            const job = jobs[index++]
            try {
              const result = await request(`/api/job-applications/${encodeURIComponent(job.id)}/communications`, { signal:controller.signal })
              for (const interview of result?.data?.interviews || []) rows.push({ ...interview, job })
            } catch (error) { if (error.status === 404) unsupported++; else if (!controller.signal.aborted) unavailable++ }
          }
        }))
        rows.sort((a,b) => String(a.scheduled_start || '').localeCompare(String(b.scheduled_start || '')))
        if (!controller.signal.aborted) setState({ rows, unavailable, unsupported, limited:all.length > 50 })
      } catch (error) { if (!controller.signal.aborted) setState({ error, rows:[] }) }
    })()
    return () => controller.abort()
  }, [refresh])
  const label = v => String(v || 'Not provided').replace(/_/g,' ')
  const visible = state.rows.filter(r => view === 'all' || (view === 'closed' ? ['completed','cancelled'].includes(r.status) : !['completed','cancelled'].includes(r.status)))
  return <div className="lbs-page"><header className="lbs-page-heading"><div><span className="lbs-eyebrow">YOUR SCHEDULE</span><h1>Appointments & interviews</h1><p>Interview schedules linked to your existing job applications.</p></div><button className="lbs-button" disabled={state.loading} onClick={() => setRefresh(n => n+1)}>Refresh</button></header>
    <section className="lbs-card"><div className="lbs-section-heading"><h2>Your interviews</h2><label className="lbs-filter">Show<select value={view} onChange={e=>setView(e.target.value)}><option value="all">All interviews</option><option value="active">Open interviews</option><option value="closed">Completed or cancelled</option></select></label></div>
      {state.loading ? <p role="status">Checking appointment records…</p> : state.error ? <ApiState error={state.error} retry={()=>setRefresh(n=>n+1)} /> : <>
        {(state.unavailable > 0 || state.limited) && <p className="lbs-information" role="status">{state.limited ? 'The latest 50 applications are included. ' : ''}{state.unavailable > 0 ? `${state.unavailable} application schedule(s) could not be checked. ` : ''}Use My Applications to review individual records.</p>}
        {visible.length ? <div className="lbs-appointment-list">{visible.map(row => <article className="lbs-appointment" key={`${row.job.id}-${row.id}`}><div><span className="lbs-status">{label(row.status)}</span><h3>{row.job.title || 'Interview'}</h3><p>{row.job.employer_name || 'Employer details unavailable'}</p><dl><div><dt>Schedule</dt><dd>{row.scheduled_start ? String(row.scheduled_start).replace('T',' ').slice(0,16) : 'Schedule not provided'}{row.timezone ? ` · ${row.timezone}` : ' · timezone not provided'}</dd></div><div><dt>Format</dt><dd>{label(row.mode)}</dd></div>{row.location_or_link && <div><dt>Location / joining details</dt><dd className="lbs-wrap">{row.location_or_link}</dd></div>}</dl>{row.partner_notes && <p>{row.partner_notes}</p>}</div><Link className="lbs-button" to="/applications">Manage in My Applications</Link></article>)}</div> : <div className="lbs-empty"><h3>No interviews to display</h3><p>{state.unsupported ? 'Some applications do not yet have a verified partner scheduling connection. Check My Applications or message the team for updates.' : 'When an employer schedules an interview through NurseLink, it will appear here.'}</p><Link className="lbs-button" to="/applications">View my applications</Link></div>}
      </>}
    </section><lbs-service-queue />
  </div>
}
export function LbsHelp() {
  const questions = [
    ['How do I check my application?', "Open My Applications for each job’s current status. Applicant registration review is a separate process and has its own page.", '/applications','View job applications'],
    ['Where do I update my CV?', 'Update your profile and professional portfolio, then open the CV maker. Keep source records current instead of maintaining separate copies of the same details.', '/cv-maker','Open CV maker'],
    ['Where are my documents?', 'Documents & CV brings together uploaded files, credentials, qualifications and your CV. Use the relevant section for each record.', '/documents','Open documents'],
    ['How do I check an interview?', 'Appointments lists interview records available through your applications. Open the application workspace to manage a response or contact the team.', '/appointments','View appointments'],
    ['Can I request a service visit online?', 'Open Appointments to request a visit for an enabled office service. Check in when you arrive. A service visit does not change your recruitment application.', '/appointments','View service visits'],
  ]
  return <div className="lbs-page"><header className="lbs-page-heading"><div><span className="lbs-eyebrow">HERE TO HELP</span><h1>Help & support</h1><p>Find the right workspace or contact the NurseLink team.</p></div><Link className="lbs-button primary" to="/messages">Message the team</Link></header><section className="lbs-card"><h2>Common questions</h2>{questions.map(([title,copy,path,action])=><details className="lbs-faq" key={path}><summary>{title}</summary><p>{copy}</p><Link to={path}>{action} →</Link></details>)}</section><div className="lbs-card-grid"><section className="lbs-card"><h2>Welfare assistance</h2><p>Open the existing welfare workspace for assistance and case follow-up.</p><Link className="lbs-button" to="/welfare">Open welfare services</Link></section><section className="lbs-card"><h2>Your account & privacy</h2><p>Review your account details, current policies and privacy information.</p><Link className="lbs-button" to="/policy-center">View policies</Link></section></div></div>
}
