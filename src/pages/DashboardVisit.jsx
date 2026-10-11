import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { request } from '../lib/api'

export default function DashboardVisit() {
  const [state, setState] = useState({ loading: true })
  const [retry, setRetry] = useState(0)
  const pending = sessionStorage.getItem('lbs-walk-in-return') === '1'
  useEffect(() => {
    const controller = new AbortController()
    let busy = false
    const load = async () => {
      if (busy || document.hidden) return
      busy = true
      try {
        const payload = await request('/api/lbs-queue', { signal: controller.signal })
        if (!Array.isArray(payload?.data?.tickets)) throw new Error('Invalid visit data')
        if (!controller.signal.aborted) setState({ data: payload.data })
      } catch {
        if (!controller.signal.aborted) setState({ error: true })
      } finally { busy = false }
    }
    load()
    const timer = setInterval(load, 15000)
    document.addEventListener('visibilitychange', load)
    return () => { controller.abort(); clearInterval(timer); document.removeEventListener('visibilitychange', load) }
  }, [retry])
  const data = state.data
  const ticket = data?.tickets.find(t => t.visit_date === data.today && ['reserved', 'waiting', 'called', 'serving', 'missed'].includes(t.status)) || data?.tickets.find(t => t.visit_date === data.today)
  const counter = data?.counters.find(c => String(c.id) === String(ticket?.counter_id))?.name
  const labels = { reserved: 'Awaiting arrival', waiting: 'Waiting', called: 'Called', serving: 'In service', missed: 'Missed call', completed: 'Completed', cancelled: 'Cancelled', expired: 'Expired' }
  return <section className="nld-card nld-queue nld-own-visit" aria-labelledby="own-visit-title">
    <div className="nld-card-head"><div><span className="nld-eyebrow">YOUR OFFICE VISIT</span><h2 id="own-visit-title">My queue ticket</h2></div><Link to="/appointments">Visit history →</Link></div>
    {pending && (!ticket || ticket.status === 'reserved') && <p className="lbs-arrival-banner"><a href="/lbs-walk-in.html">Continue your reception QR check-in →</a></p>}
    {state.loading ? <p role="status">Loading your visit…</p> : state.error ? <div role="status"><p>Your ticket could not be refreshed.</p><button className="nld-outline" onClick={() => setRetry(n => n + 1)}>Retry my ticket</button></div> : ticket ? <>
      <div className="lbs-own-ticket"><div><span className="nld-eyebrow">{ticket.source === 'qr_walkin' ? 'QR WALK-IN' : ticket.source === 'walkin' ? 'WALK-IN' : 'SERVICE VISIT'}</span><strong>{ticket.number}</strong><span>{data.services.find(s => s.id === ticket.service_id)?.name || 'Service visit'}</span></div><div aria-live="polite"><span className="nld-badge">{labels[ticket.status] || ticket.status}</span><p>{['called', 'serving'].includes(ticket.status) ? `Proceed to ${counter || 'your assigned counter'}.` : ticket.status === 'waiting' ? `${ticket.waiting_ahead ?? 0} waiting ahead for your service.` : ticket.status === 'reserved' ? 'Check in when you arrive at reception.' : ticket.status === 'missed' ? 'Please speak with reception to rejoin the queue.' : 'This visit is saved in your history.'}</p></div></div>
      <p className="nld-queue-updated">{ticket.visit_date} · Asia/Manila · updates every 15 seconds</p>
    </> : <p className="nld-state">No visit today. Scan the QR poster at LBS reception to receive your walk-in ticket.</p>}
  </section>
}
