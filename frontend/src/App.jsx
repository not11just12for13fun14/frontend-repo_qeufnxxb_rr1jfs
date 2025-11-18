import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-500 grid place-items-center text-white font-bold">VC</div>
          <span className="font-semibold text-lg">VetCare</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#services" className="hover:text-teal-600 transition">Services</a>
          <a href="#species" className="hover:text-teal-600 transition">Pets</a>
          <a href="#pricing" className="hover:text-teal-600 transition">Pricing</a>
          <a href="#faq" className="hover:text-teal-600 transition">FAQ</a>
          <a href="#book" className="px-3 py-1.5 rounded-md bg-teal-600 text-white hover:bg-teal-700 transition">Book</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="w-6 h-0.5 bg-slate-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-slate-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-slate-800"></div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="px-4 py-3 flex flex-col gap-3 text-sm">
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <a href="#species" onClick={() => setOpen(false)}>Pets</a>
            <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
            <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
            <a href="#book" onClick={() => setOpen(false)} className="px-3 py-1.5 rounded-md bg-teal-600 text-white text-center">Book</a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="bg-gradient-to-br from-teal-50 to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Friendly, modern vet care for dogs, cats and small furries</h1>
          <p className="mt-4 text-slate-600">We care for dogs, cats, rabbits, hamsters and guinea pigs with same‑day appointments, transparent pricing and a calm, fear‑free approach.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#book" className="px-5 py-3 rounded-md bg-teal-600 text-white hover:bg-teal-700">Book an appointment</a>
            <a href="#services" className="px-5 py-3 rounded-md border border-slate-300 hover:bg-white">See services</a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1"><span>★</span><span>4.9 rating</span></div>
            <div className="flex items-center gap-1"><span>⏱</span><span>Same‑day slots</span></div>
            <div className="flex items-center gap-1"><span>💚</span><span>Fear‑free handling</span></div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-white shadow-xl ring-1 ring-black/5 grid place-items-center text-7xl">🐶</div>
          <div className="absolute -bottom-6 -left-6 bg-white shadow rounded-xl px-4 py-2 text-sm">Cat vaccines 10% off this month</div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    { title: 'Check‑ups & wellness', desc: 'Annual exams, vaccinations and tailored prevention plans.' },
    { title: 'Urgent care', desc: 'Same‑day availability for non‑life‑threatening issues.' },
    { title: 'Surgery & dentistry', desc: 'Routine procedures with modern pain control.' },
    { title: 'Diagnostics', desc: 'Blood work, x‑ray, ultrasound and in‑house labs.' },
    { title: 'Nutrition & behavior', desc: 'Weight management and behavior consults.' },
    { title: 'Senior care', desc: 'Gentle support for aging pets.' },
  ]
  return (
    <section id="services" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold">What we do</h2>
      <p className="text-slate-600 mt-2">Comprehensive care for the pets you love.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((x) => (
          <div key={x.title} className="p-5 rounded-xl border hover:shadow-sm transition bg-white">
            <div className="text-3xl">🩺</div>
            <h3 className="mt-2 font-medium">{x.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{x.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Species() {
  const pets = ['Dogs', 'Cats', 'Rabbits', 'Hamsters', 'Guinea pigs']
  return (
    <section id="species" className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold">We treat</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {pets.map(p => (
            <span key={p} className="px-3 py-1.5 rounded-full bg-white border text-sm">{p}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const plans = [
    { name: 'Wellness Visit', price: 55, features: ['30‑min exam', 'Vaccination review', 'Personal plan'] },
    { name: 'Urgent Care', price: 85, features: ['Same‑day slot', 'Stabilization', 'Treatment plan'] },
    { name: 'Dental Clean', price: 220, features: ['Pre‑op consult', 'Scale & polish', 'Home care kit'] },
  ]
  return (
    <section id="pricing" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold">Straightforward pricing</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {plans.map(p => (
          <div key={p.name} className="rounded-2xl border bg-white p-6 flex flex-col">
            <h3 className="font-medium">{p.name}</h3>
            <div className="mt-3 text-3xl font-bold">£{p.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 flex-1">
              {p.features.map(f => <li key={f}>✓ {f}</li>)}
            </ul>
            <a href="#book" className="mt-6 px-4 py-2 rounded-md bg-teal-600 text-white text-center hover:bg-teal-700">Book now</a>
          </div>
        ))}
      </div>
    </section>
  )
}

function Newsletter() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const subscribe = async (e) => {
    e.preventDefault()
    setMsg('')
    try {
      const res = await fetch(`${API_BASE}/newsletter`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) })
      const data = await res.json()
      setMsg(data.message || 'Thanks for subscribing!')
      setEmail('')
    } catch (err) {
      setMsg('Something went wrong. Please try again later.')
    }
  }
  return (
    <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-semibold">Tips for happier, healthier pets</h3>
          <p className="mt-2 text-white/90">Join our monthly email with seasonal advice and offers.</p>
        </div>
        <form onSubmit={subscribe} className="flex gap-2">
          <input value={email} onChange={e => setEmail(e.target.value)} required type="email" placeholder="you@example.com" className="w-full md:w-auto flex-1 px-4 py-3 rounded-md text-slate-900" />
          <button className="px-5 py-3 rounded-md bg-white text-teal-700 font-medium hover:bg-teal-50">Subscribe</button>
        </form>
        {!!msg && <div className="md:col-span-2 text-sm text-white/90">{msg}</div>}
      </div>
    </section>
  )
}

function Booking() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', pet_name: '', species: 'dog', preferred_date: '', preferred_time: '', reason: '' })
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      const res = await fetch(`${API_BASE}/appointments`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      setStatus(data.message || 'Request sent! We will confirm shortly.')
      setForm({ name: '', email: '', phone: '', pet_name: '', species: 'dog', preferred_date: '', preferred_time: '', reason: '' })
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="book" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold">Book an appointment</h2>
      <form onSubmit={submit} className="mt-6 grid md:grid-cols-2 gap-4 bg-white p-6 rounded-2xl border">
        <input className="px-4 py-3 rounded-md border" placeholder="Your name" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} required />
        <input className="px-4 py-3 rounded-md border" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} required />
        <input className="px-4 py-3 rounded-md border" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form, phone: e.target.value})} required />
        <input className="px-4 py-3 rounded-md border" placeholder="Pet name" value={form.pet_name} onChange={e=>setForm({...form, pet_name: e.target.value})} required />
        <select className="px-4 py-3 rounded-md border" value={form.species} onChange={e=>setForm({...form, species: e.target.value})}>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="rabbit">Rabbit</option>
          <option value="hamster">Hamster</option>
          <option value="guinea pig">Guinea pig</option>
        </select>
        <input className="px-4 py-3 rounded-md border" type="date" value={form.preferred_date} onChange={e=>setForm({...form, preferred_date: e.target.value})} required />
        <input className="px-4 py-3 rounded-md border md:col-span-2" placeholder="Preferred time (e.g. morning)" value={form.preferred_time} onChange={e=>setForm({...form, preferred_time: e.target.value})} required />
        <textarea className="px-4 py-3 rounded-md border md:col-span-2" placeholder="Reason (optional)" value={form.reason} onChange={e=>setForm({...form, reason: e.target.value})} />
        <button className="mt-2 px-5 py-3 rounded-md bg-teal-600 text-white hover:bg-teal-700 md:col-span-2">Request appointment</button>
        {!!status && <div className="md:col-span-2 text-sm text-teal-700">{status}</div>}
      </form>
    </section>
  )
}

function FAQ() {
  const faqs = [
    { q: 'Do you see exotic pets?', a: 'We focus on dogs, cats, rabbits, hamsters and guinea pigs. For other species we are happy to recommend specialists.' },
    { q: 'Do you offer payment plans?', a: 'Yes, we offer clear estimates and staged treatment plans for larger procedures.' },
    { q: 'Is parking available?', a: 'Yes, there is onsite parking and step‑free access.' },
  ]
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold">Common questions</h2>
      <div className="mt-6 divide-y rounded-xl border bg-white">
        {faqs.map((f, i) => (
          <button key={f.q} onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left px-6 py-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">{f.q}</span>
              <span>{open === i ? '−' : '+'}</span>
            </div>
            {open === i && <p className="mt-2 text-sm text-slate-600">{f.a}</p>}
          </button>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm text-slate-600">
        <div>
          <div className="font-semibold text-slate-900">VetCare</div>
          <p className="mt-2">Open Mon‑Sat • 8am‑6pm</p>
        </div>
        <div>
          <div className="font-medium text-slate-900">Contact</div>
          <p className="mt-2">01234 567890</p>
          <p>hello@vetcare.example</p>
        </div>
        <div>
          <div className="font-medium text-slate-900">Location</div>
          <p className="mt-2">123 High Street, YourTown</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [healthy, setHealthy] = useState(true)
  useEffect(() => {
    const ping = async () => {
      try {
        const res = await fetch(`${API_BASE}/`)
        if (!res.ok) throw new Error('bad')
        setHealthy(true)
      } catch {
        setHealthy(false)
      }
    }
    ping()
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      {!healthy && (
        <div className="bg-amber-50 text-amber-800 text-sm text-center py-2">Backend not reachable right now. Forms will be queued.</div>
      )}
      <Hero />
      <Services />
      <Species />
      <Pricing />
      <Newsletter />
      <Booking />
      <FAQ />
      <Footer />
    </div>
  )
}
