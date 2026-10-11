import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { request } from '../lib/api'
import './MemberDashboard.css'
import DashboardVisit from './DashboardVisit'
import ApplicantSections from './ApplicantSections'

const endpoints = { membership: '/api/membership/me', applications: '/api/job-applications', jobs: '/api/job-opportunities', notifications: '/api/notifications', photo: '/api/profile-photo' }
const label = (value) => String(value || 'Not started').replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
const records = (state) => Array.isArray(state?.payload?.data) ? state.payload.data : []
const date = (value) => {
  if (!value) return null
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? null : parsed.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
}

function ServiceState({ state, children, empty, onRetry }) {
  if (!state || state.loading) return <p className="nld-state" role="status">Loading your records…</p>
  if (state.error) return <div className="nld-state" role="status"><p>{state.status === 403 ? "This service becomes available when your account meets the applicant registration access requirements." : 'This service is temporarily unavailable. Your records have not been changed.'}</p>{state.status === 403 ? <Link to="/application-status">View applicant registration status →</Link> : <button type="button" onClick={onRetry}>Try again</button>}</div>
  if (empty) return <p className="nld-state">{empty}</p>
  return children
}

function DashboardQueue({ refresh }) {
  const [queue, setQueue] = useState({ loading: true, rows: [] })
  const [retry, setRetry] = useState(0)
  useEffect(() => {
    const controller = new AbortController()
    let busy = false
    const load = async () => {
      if (busy || document.hidden) return
      busy = true
      try {
        const payload = await request('/api/lbs-queue/display', { signal: controller.signal })
        if (!Array.isArray(payload?.data)) throw new Error('Invalid queue response')
        if (!controller.signal.aborted) setQueue({ loading: false, rows: payload.data, updated: new Date() })
      } catch {
        if (!controller.signal.aborted) setQueue({ loading: false, rows: [], error: true })
      } finally { busy = false }
    }
    load()
    const timer = setInterval(load, 15000)
    document.addEventListener('visibilitychange', load)
    return () => { controller.abort(); clearInterval(timer); document.removeEventListener('visibilitychange', load) }
  }, [refresh, retry])
  return <section className="nld-card nld-queue" aria-labelledby="dashboard-queue-title">
    <div className="nld-queue-heading"><img src="/backend/api/nurselink/appearance-assets/sidebar-a0b815a2-5936-4745-a66d-b0eb4e1d9c8d.png" alt="LBS Recruitment Solutions" /><div><span className="nld-eyebrow">SERVICE QUEUE</span><h2 id="dashboard-queue-title">Now serving</h2></div></div>
    <p className="nld-muted">Follow your ticket number and proceed to the named counter when called.</p>
    {queue.loading ? <p role="status">Loading the service queue…</p> : queue.error ? <div role="status"><p>The live queue is temporarily unavailable.</p><button type="button" className="nld-outline" onClick={() => setRetry(n => n + 1)}>Retry queue</button></div> : <>
      {queue.rows.length ? <div className="nld-queue-tickets">{queue.rows.slice(0, 4).map((ticket, index) => <article key={`${ticket.number}-${index}`}><strong>{ticket.number}</strong><span>{ticket.counter || 'Service counter'}</span><small>{label(ticket.status)}</small></article>)}</div> : <p className="nld-state">No active calls. Your ticket will appear here when it is called.</p>}
      <p className="nld-queue-updated">Updated {queue.updated?.toLocaleTimeString()} · refreshes every 15 seconds{queue.rows.length > 4 && ` · showing 4 of ${queue.rows.length} active calls`}</p>
    </>}
    <div className="nld-queue-links"><Link className="nld-outline" to="/appointments">My service visits →</Link><a href="/lbs-queue-display.html" target="_blank" rel="noopener noreferrer">Open full queue display ↗</a></div>
  </section>
}

export default function MemberDashboard() {
  const { user } = useAuth()
  const [services, setServices] = useState({})
  const [refresh, setRefresh] = useState(0)
  const [selected, setSelected] = useState(null)
  useEffect(() => {
    const controller = new AbortController()
    Object.entries(endpoints).forEach(([key, path]) => {
      setServices((current) => ({ ...current, [key]: { loading: true } }))
      request(path, { signal: controller.signal }).then((payload) => {
        if (!controller.signal.aborted) setServices((current) => ({ ...current, [key]: { payload } }))
      }).catch((error) => {
        if (!controller.signal.aborted) setServices((current) => ({ ...current, [key]: { error: true, status: error.status } }))
      })
    })
    return () => controller.abort()
  }, [user?.id, refresh])

  const membership = services.membership?.payload?.data
  const applications = records(services.applications)
  const jobs = records(services.jobs)
  const notifications = records(services.notifications)
  const approved = membership?.status === 'approved'
  const needsInformation = membership?.status === 'needs_information'
  const inReview = ['submitted', 'resubmitted', 'under_review', 'ready_for_approval'].includes(membership?.status)
  const progress = Math.max(0, Math.min(100, Number(user?.application?.progress_percent) || 0))
  const retry = () => setRefresh((n) => n + 1)
  const next = !membership ? { title: 'Your NurseLink journey, in one place', copy: "Review your applicant registration progress, career opportunities and applicant services.", to: '/application-status', action: "View applicant registration status" }
    : needsInformation ? { title: "Your applicant registration application needs an update", copy: membership.reviewer_notes || 'Review the information requested by the NurseLink team and update your application.', to: '/application-status', action: 'Review requested information' }
    : approved ? { title: 'Take the next step in your nursing career', copy: 'Explore opportunities and keep your professional profile and credentials up to date.', to: '/jobs', action: 'Explore opportunities' }
    : inReview ? { title: "Your applicant registration application is with the team", copy: 'Follow your application status and check Messages for any requests from NurseLink.', to: '/application-status', action: "Track applicant registration review" }
    : { title: "Continue your NurseLink applicant registration application", copy: 'Complete your profile, add supporting information and review your application before submission.', to: '/smart-registration', action: 'Continue registration' }

  return <div className="nld-dashboard" data-release="20260925-uiux">
    <div className="nld-heading"><div><span className="nld-eyebrow">LBS NURSELINK · MEDICAL SERVICES DIVISION</span><h1>Welcome back, {user?.name || "Applicant"}.</h1><p>Your applications, documents and next actions, together.</p></div><button className="nld-outline" type="button" onClick={retry} disabled={Object.values(services).some((s) => s.loading)}>Refresh</button></div>
    <section className="nld-next" aria-labelledby="nld-next-title" style={{ background: '#0d5f9d', backgroundImage: 'linear-gradient(135deg,#1778bd 0%,#0d5f9d 56%,#084775 100%)', borderColor: 'rgba(255,255,255,.18)', boxShadow: '0 18px 36px rgba(7,57,104,.18)' }}><div><span className="nld-eyebrow">YOUR NEXT STEP</span><h2 id="nld-next-title">{next.title}</h2><p>{next.copy}</p><Link className="nld-primary" to={next.to}>{next.action} <span aria-hidden="true">→</span></Link></div><div className="nld-next-side"><span className="nld-label">Applicant registration</span><strong>{membership ? label(membership.status) : services.membership?.error ? 'Status unavailable' : 'Checking status…'}</strong><span>{membership?.member_number || "Applicant number issued after approval"}</span><small>Applicant registration and job applications have separate statuses.</small></div></section>
    <DashboardVisit />
    <DashboardQueue refresh={refresh} />
    <div className="nld-columns"><div>
      <section className="nld-card"><div className="nld-card-head"><h2>My job applications</h2><Link to="/applications">View all →</Link></div><ServiceState state={services.applications} onRetry={retry} empty={!applications.length && "No job applications yet. Browse opportunities when your applicant access is active."}>{applications.slice(0, 3).map((app) => <article className="nld-application" key={app.id}><div className="nld-row"><div><h3>{app.title || `Application #${app.id}`}</h3><p>{[app.employer_name, app.city, app.country].filter(Boolean).join(' · ')}</p></div><span className="nld-badge">{label(app.status)}</span></div><div className="nld-row nld-application-footer"><small>{date(app.submitted_at) ? `Submitted ${date(app.submitted_at)}` : 'Submission date not available'}</small><button type="button" onClick={() => setSelected(selected === app.id ? null : app.id)} aria-expanded={selected === app.id} aria-controls={`nld-application-${app.id}`}>{selected === app.id ? 'Hide details' : 'View details'}</button></div>{selected === app.id && <div className="nld-details" id={`nld-application-${app.id}`}><dl><div><dt>Reference</dt><dd>{app.reference_code || app.id}</dd></div><div><dt>Employment type</dt><dd>{app.employment_type || 'Not specified'}</dd></div><div><dt>Specialty</dt><dd>{app.specialty || 'Not specified'}</dd></div></dl>{app.cover_note && <p>{app.cover_note}</p>}<Link to="/applications">Open application workspace →</Link></div>}</article>)}</ServiceState></section>
      <section className="nld-card"><div className="nld-card-head"><h2>Appointments & interviews</h2><Link to="/appointments">View appointments →</Link></div><p className="nld-muted">Check interview schedules linked to your job applications. Manage responses in your application workspace.</p></section>
      <section className="nld-card"><div className="nld-card-head"><h2>Your professional profile</h2><Link to="/profile">Update profile →</Link></div><p className="nld-muted">Keep your clinical experience, qualifications and supporting records current.</p><div className="nld-services"><Link to="/portfolio"><strong>Professional portfolio</strong><span>Experience and achievements →</span></Link><a href="/cv-maker"><strong>CV maker</strong><span>Build from your profile →</span></a><Link to="/credentials"><strong>Credentials</strong><span>Licenses and supporting records →</span></Link><Link to="/documents"><strong>Documents</strong><span>Manage your supporting files →</span></Link></div></section>
      <section className="nld-card"><div className="nld-card-head"><h2>Current job opportunities</h2><Link to="/jobs">Browse jobs →</Link></div><ServiceState state={services.jobs} onRetry={retry} empty={!jobs.length && 'No opportunities are available right now. Check back for new listings.'}><div className="nld-jobs">{jobs.slice(0, 2).map((job) => <article key={job.id}><span className="nld-eyebrow">{job.specialty || 'NURSING OPPORTUNITY'}</span><h3>{job.title}</h3><p>{[job.employer_name, job.country].filter(Boolean).join(' · ')}</p>{job.employment_type && <span className="nld-badge">{label(job.employment_type)}</span>}<Link to="/jobs">View opportunities →</Link></article>)}</div></ServiceState></section>
      <details className="lbs-dashboard-extra"><summary>Additional applicant tools & LBS forms</summary><ApplicantSections applications={applications} applicationState={services.applications} user={user} photoUrl={services.photo?.payload?.data?.profile_photo_url} /></details>
    </div><aside>
      <section className="nld-card"><div className="nld-card-head"><h2>NurseLink applicant registration</h2></div><ServiceState state={services.membership} onRetry={retry}><span className="nld-badge">{label(membership?.status)}</span><p className="nld-muted">{approved ? `Standing: ${membership?.standing_label || label(membership?.standing)}` : 'Complete your registration and track the team’s review.'}</p>{!approved && <><div className="nld-progress" role="progressbar" aria-label="Applicant registration application completion" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}><span style={{ width: `${progress}%` }} /></div><small>{progress}% registration completion</small></>}<Link className="nld-outline" to="/application-status">View applicant registration progress →</Link></ServiceState></section>
      <section className="nld-card"><div className="nld-card-head"><h2>Recent notifications</h2><Link to="/notifications">View all →</Link></div><ServiceState state={services.notifications} onRetry={retry} empty={!notifications.length && 'No notifications yet. Updates from NurseLink will appear here.'}>{notifications.slice(0, 3).map((note) => <div className="nld-notification" key={note.id}><strong>{note.title || 'NurseLink update'}</strong><p>{note.message}</p><small>{date(note.created_at)}</small></div>)}</ServiceState><Link className="nld-outline" to="/messages">Open messages →</Link></section>
      <section className="nld-card"><h2>Grow with NurseLink</h2><div className="nld-resource-links"><Link to="/learning"><strong>Learning</strong><span>Professional development →</span></Link><Link to="/mentoring"><strong>Mentoring</strong><span>Career guidance and peer support →</span></Link><Link to="/events"><strong>Events & community</strong><span>Connect with your network →</span></Link><Link to="/digital-member-id"><strong>Digital applicant ID</strong><span>Your applicant registration identity →</span></Link></div></section>
      <section className="nld-support"><span className="nld-eyebrow">HERE TO HELP</span><h2>Support, wherever you are</h2><p>Reach the NurseLink team for questions and welfare assistance.</p><Link to="/help">Open help & support →</Link></section>
    </aside></div>
  </div>
}
