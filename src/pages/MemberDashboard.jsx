import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { request } from '../lib/api'
import './MemberDashboard.css'
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
  if (state.error) return <div className="nld-state" role="status"><p>{state.status === 403 ? 'This service becomes available when your account meets the membership access requirements.' : 'This service is temporarily unavailable. Your records have not been changed.'}</p>{state.status === 403 ? <Link to="/application-status">View membership status →</Link> : <button type="button" onClick={onRetry}>Try again</button>}</div>
  if (empty) return <p className="nld-state">{empty}</p>
  return children
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
  const next = !membership ? { title: 'Your NurseLink journey, in one place', copy: 'Review your membership progress, career opportunities and member services.', to: '/application-status', action: 'View membership status' }
    : needsInformation ? { title: 'Your membership application needs an update', copy: membership.reviewer_notes || 'Review the information requested by the NurseLink team and update your application.', to: '/application-status', action: 'Review requested information' }
    : approved ? { title: 'Take the next step in your nursing career', copy: 'Explore opportunities and keep your professional profile and credentials up to date.', to: '/jobs', action: 'Explore opportunities' }
    : inReview ? { title: 'Your membership application is with the team', copy: 'Follow your application status and check Messages for any requests from NurseLink.', to: '/application-status', action: 'Track membership review' }
    : { title: 'Continue your NurseLink membership application', copy: 'Complete your profile, add supporting information and review your application before submission.', to: '/smart-registration', action: 'Continue registration' }

  return <div className="nld-dashboard" data-release="20260912-dashboard">
    <div className="nld-heading"><div><span className="nld-eyebrow">LBS NURSELINK · MEDICAL SERVICES DIVISION</span><h1>Welcome back, {user?.name || 'Member'}.</h1><p>Your career, membership and next steps, connected.</p></div><button className="nld-outline" type="button" onClick={retry} disabled={Object.values(services).some((s) => s.loading)}>Refresh</button></div>
    <section className="nld-next" aria-labelledby="nld-next-title"><div><span className="nld-eyebrow">YOUR NEXT STEP</span><h2 id="nld-next-title">{next.title}</h2><p>{next.copy}</p><Link className="nld-primary" to={next.to}>{next.action} <span aria-hidden="true">→</span></Link></div><div className="nld-next-side"><span className="nld-label">Membership</span><strong>{membership ? label(membership.status) : services.membership?.error ? 'Status unavailable' : 'Checking status…'}</strong><span>{membership?.member_number || 'Member number issued after approval'}</span><small>Membership and job applications have separate statuses.</small></div></section>
    <div className="nld-columns"><div><ApplicantSections applications={applications} applicationState={services.applications} user={user} photoUrl={services.photo?.payload?.data?.profile_photo_url} />
      <section className="nld-card"><div className="nld-card-head"><h2>My job applications</h2><Link to="/applications">View all →</Link></div><ServiceState state={services.applications} onRetry={retry} empty={!applications.length && 'No job applications yet. Browse opportunities when your member access is active.'}>{applications.slice(0, 3).map((app) => <article className="nld-application" key={app.id}><div className="nld-row"><div><h3>{app.title || `Application #${app.id}`}</h3><p>{[app.employer_name, app.city, app.country].filter(Boolean).join(' · ')}</p></div><span className="nld-badge">{label(app.status)}</span></div><div className="nld-row nld-application-footer"><small>{date(app.submitted_at) ? `Submitted ${date(app.submitted_at)}` : 'Submission date not available'}</small><button type="button" onClick={() => setSelected(selected === app.id ? null : app.id)} aria-expanded={selected === app.id} aria-controls={`nld-application-${app.id}`}>{selected === app.id ? 'Hide details' : 'View details'}</button></div>{selected === app.id && <div className="nld-details" id={`nld-application-${app.id}`}><dl><div><dt>Reference</dt><dd>{app.reference_code || app.id}</dd></div><div><dt>Employment type</dt><dd>{app.employment_type || 'Not specified'}</dd></div><div><dt>Specialty</dt><dd>{app.specialty || 'Not specified'}</dd></div></dl>{app.cover_note && <p>{app.cover_note}</p>}<Link to="/applications">Open application workspace →</Link></div>}</article>)}</ServiceState></section>
      <section className="nld-card"><div className="nld-card-head"><h2>Your professional profile</h2><Link to="/profile">Update profile →</Link></div><p className="nld-muted">Keep your clinical experience, qualifications and supporting records current.</p><div className="nld-services"><Link to="/portfolio"><strong>Professional portfolio</strong><span>Experience and achievements →</span></Link><a href="/nurselink-cv-maker.html"><strong>CV maker</strong><span>Build from your profile →</span></a><Link to="/credentials"><strong>Credentials</strong><span>Licenses and supporting records →</span></Link><Link to="/documents"><strong>Documents</strong><span>Manage your supporting files →</span></Link></div></section>
      <section className="nld-card"><div className="nld-card-head"><h2>Recommended jobs</h2><Link to="/jobs">Browse jobs →</Link></div><ServiceState state={services.jobs} onRetry={retry} empty={!jobs.length && 'No opportunities are available right now. Check back for new listings.'}><div className="nld-jobs">{jobs.slice(0, 2).map((job) => <article key={job.id}><span className="nld-eyebrow">{job.specialty || 'NURSING OPPORTUNITY'}</span><h3>{job.title}</h3><p>{[job.employer_name, job.country].filter(Boolean).join(' · ')}</p>{job.employment_type && <span className="nld-badge">{label(job.employment_type)}</span>}<Link to="/jobs">View opportunities →</Link></article>)}</div></ServiceState></section>
    </div><aside>
      <section className="nld-card"><div className="nld-card-head"><h2>NurseLink membership</h2></div><ServiceState state={services.membership} onRetry={retry}><span className="nld-badge">{label(membership?.status)}</span><p className="nld-muted">{approved ? `Standing: ${membership?.standing_label || label(membership?.standing)}` : 'Complete your registration and track the team’s review.'}</p>{!approved && <><div className="nld-progress" role="progressbar" aria-label="Membership application completion" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}><span style={{ width: `${progress}%` }} /></div><small>{progress}% registration completion</small></>}<Link className="nld-outline" to="/application-status">View membership progress →</Link></ServiceState></section>
      <section className="nld-card"><div className="nld-card-head"><h2>Recent notifications</h2><Link to="/notifications">View all →</Link></div><ServiceState state={services.notifications} onRetry={retry} empty={!notifications.length && 'No notifications yet. Updates from NurseLink will appear here.'}>{notifications.slice(0, 3).map((note) => <div className="nld-notification" key={note.id}><strong>{note.title || 'NurseLink update'}</strong><p>{note.message}</p><small>{date(note.created_at)}</small></div>)}</ServiceState><Link className="nld-outline" to="/messages">Open messages →</Link></section>
      <section className="nld-card"><h2>Grow with NurseLink</h2><div className="nld-resource-links"><Link to="/learning"><strong>Learning</strong><span>Professional development →</span></Link><Link to="/mentoring"><strong>Mentoring</strong><span>Career guidance and peer support →</span></Link><Link to="/events"><strong>Events & community</strong><span>Connect with your network →</span></Link><Link to="/digital-member-id"><strong>Digital member ID</strong><span>Your membership identity →</span></Link></div></section>
      <section className="nld-support"><span className="nld-eyebrow">HERE TO HELP</span><h2>Support, wherever you are</h2><p>Reach the NurseLink team for questions and welfare assistance.</p><Link to="/welfare">Open welfare & support →</Link></section>
    </aside></div>
  </div>
}
