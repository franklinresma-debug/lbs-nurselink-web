import { Link } from 'react-router-dom'

const cvSections = [
  ['Personal Information', '/profile'], ['Educational Attainment', '/portfolio'],
  ['Work Experiences', '/portfolio'], ['Work References', '/portfolio'],
  ['Skills & Languages', '/portfolio'], ['Trainings & Seminars', '/portfolio'],
  ['Achievements & Memberships', '/portfolio'], ['Career Summary', '/profile'],
]

export default function ApplicantSections({ applications, applicationState, user, photoUrl }) {
  const linedUp = applications.filter(a => ['shortlisted', 'interview', 'offered'].includes(a.status))
  return <section className="nld-card nld-arms" aria-labelledby="arms-applicant-title">
    <div className="nld-card-head"><h2 id="arms-applicant-title">LBS applicant workspace</h2><a href="/nurselink-cv-maker.html">Open CV maker →</a></div>
    <p className="nld-muted">Your recruitment records and NurseLink professional services, together.</p>
    {photoUrl && <img src={photoUrl} alt="Your profile" width="80" height="80" style={{borderRadius:"50%",objectFit:"cover"}} />}<div className="nld-applicant-facts"><div><span>Applicant name</span><strong>{user?.name || 'Not available'}</strong></div><div><span>ARMS control number</span><strong>Not linked</strong><small>Existing ARMS records require a verified import.</small></div></div>
    <h3>Line-up status</h3>
    {!applicationState || applicationState.loading ? <p role="status">Loading recruitment status…</p> : applicationState.error ? <p>Recruitment status is unavailable with your current access. <Link to="/application-status">View membership access</Link></p> : linedUp.length ? linedUp.map(a => <div className="nld-notification" key={a.id}><strong>{a.title}</strong><p>{a.employer_name} · {a.status.replace(/_/g, ' ')}</p><Link to="/applications">View application →</Link></div>) : <p>No active line-ups are recorded in NurseLink.</p>}
    <details className="nld-cv-sections"><summary>Curriculum Vitae · 8 sections</summary><div className="nld-services">{cvSections.map(([name,to]) => <Link key={name} to={to}><strong>{name}</strong><span>Open source records →</span></Link>)}</div><p className="nld-muted">Work references can be maintained as private portfolio records. Memberships and achievements belong in your professional portfolio.</p></details>
    <div className="nld-services"><Link to="/documents"><strong>My Documents</strong><span>Initial and processing documents →</span></Link><Link to="/messages"><strong>My Messages</strong><span>Read and manage conversations →</span></Link><Link to="/jobs"><strong>LBS Vacancies</strong><span>Recommended jobs and vacancy search →</span></Link><Link to="/applications"><strong>My Applied Jobs</strong><span>Date, position, company and status →</span></Link></div>
    <details><summary>Downloadable forms</summary><div className="nld-resource-links">{[
      ['LBS Application Form (Medical)', 'LBS_MSD_FORM_2017_LOGO.pdf'],
      ['LBS Application Form (Engineering & Skills)', 'LBS_ESD_FORM_2017_LOGO.pdf'],
      ['LBS CV Format Template (Medical)', 'LBS_MSD_CV_FORMAT_2017.doc'],
      ['LBS CV Format Template (Engineering & Skills)', 'LBS_ESD_CV_FORMAT_2017.DOC'],
    ].map(([title,file])=><a key={file} href={`https://arms.lbsrecruitment.com.ph/public/docs/new/${file}`} target="_blank" rel="noopener noreferrer">{title}</a>)}</div><p>These downloads use the existing LBS ARMS forms.</p><a href="/nurselink-cv-maker.html">Create and save your NurseLink CV as PDF →</a></details>
  </section>
}
