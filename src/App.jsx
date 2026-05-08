import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import SignalFromNoise from './components/SignalFromNoise.jsx'

const FEATURES = [
  { icon: 'filter',        title: 'Smart Filtering',     body: 'Processes thousands of signals from social media and news, surfacing only what is relevant and actionable for your specific needs.' },
  { icon: 'map-pin',       title: 'Context Awareness',   body: 'Reads your location, weather, time of day, and routines to deliver insights that are contextually relevant right now.' },
  { icon: 'brain-circuit', title: 'Adaptive Learning',   body: 'Continuously trains on your preferences, feedback, and behavior. The more you use it, the sharper it gets.' },
  { icon: 'zap',           title: 'Actionable Output',   body: 'No more information overload. Every insight comes with a suggested action — draft a reply, schedule a meeting, set a reminder.' },
  { icon: 'shield-check',  title: 'Privacy First',       body: 'Your data stays yours. On-device processing for sensitive inputs. End-to-end encryption. Zero third-party data selling.' },
  { icon: 'layers',        title: 'Multi-Source Fusion', body: 'Combines signals from Twitter, Reddit, News APIs, weather services, and your calendar into one unified intelligence layer.' }
]

const SOURCES = [
  { icon: 'twitter',        label: 'Twitter / X' },
  { icon: 'message-circle', label: 'Reddit' },
  { icon: 'newspaper',      label: 'News APIs' },
  { icon: 'cloud-sun',      label: 'Weather' },
  { icon: 'calendar',       label: 'Calendar' },
  { icon: 'rss',            label: 'RSS Feeds' }
]

const TESTIMONIALS = [
  { quote: 'COSAI replaced my 45-minute morning scroll with a 2-minute brief that actually matters. It is like having a chief of staff for information.', name: 'Priyanka Saikia',     role: 'VP of Product, Guwahati' },
  { quote: 'The adaptive learning is real. After a week, it knew I would want to see that cybersecurity funding round before I even searched for it.',     name: 'Lalrinmawia Hmar',    role: 'Founder & CEO, Aizawl' },
  { quote: 'Location-aware briefs are a game changer. COSAI told me about a tech meetup near my hotel that I would have completely missed otherwise.',     name: 'Rohit Borthakur',      role: 'CTO, Jorhat' }
]

function Counter ({ to, suffix = '' }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    let raf, start
    const dur = 1400
    const step = ts => {
      if (!start) start = ts
      const p = Math.min(1, (ts - start) / dur)
      setN(Math.floor(p * to))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [to])
  return <span>{n.toLocaleString()}{suffix}</span>
}

export default function App () {
  const introRef = useRef(null)
  useEffect(() => { if (window.lucide) window.lucide.createIcons() }, [])

  return (
    <div>
      <Nav />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0d0e22] to-[#1a1238]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-brand-400/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pt-28 sm:pt-24 pb-16 grid lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-600/10 border border-brand-500/20 text-brand-400 text-xs font-medium px-3 py-1.5 rounded-full mb-8 animate-fade-in-up" style={{opacity:0}}>
              <span className="relative flex h-2 w-2">
                <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-400"></span>
              </span>
              Now in Early Access
            </div>
            <h1 className="text-[2.25rem] sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] animate-fade-in-up delay-100" style={{opacity:0}}>
              Your Chief of<br/>
              <span className="text-brand-400">Assistant AI</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl animate-fade-in-up delay-200" style={{opacity:0}}>
              COSAI filters the noise from social media, news, and your environment — delivering only the actionable insights that matter. It learns your preferences, adapts in real time, and gets smarter every day.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up delay-300" style={{opacity:0}}>
              <Link to="/onboarding" className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 active:scale-[0.98] text-white font-medium px-6 sm:px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/30">
                Try the Demo
              </Link>
              <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 active:scale-[0.98] text-white font-medium px-6 sm:px-8 py-3.5 rounded-xl transition-all border border-white/10">
                <i data-lucide="play-circle" className="w-4 h-4"></i>
                See How It Works
              </a>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4 text-slate-300 animate-fade-in-up delay-400" style={{opacity:0}}>
              <div>
                <p className="text-sm text-white font-medium"><Counter to={2400} suffix="+" /> on waitlist</p>
                <p className="text-xs text-slate-500">Join the future of personal AI</p>
              </div>
              <div className="hidden sm:block h-8 w-px bg-white/10"></div>
              <div>
                <p className="text-sm text-white font-medium"><Counter to={94} suffix="%" /> less feed time</p>
                <p className="text-xs text-slate-500">Reported by early testers</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block animate-fade-in-up delay-300 float-animation" style={{opacity:0}}>
            <div className="glass rounded-2xl p-6 max-w-md ml-auto">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-brand-600 rounded-lg flex items-center justify-center">
                  <i data-lucide="brain" className="w-4 h-4 text-white"></i>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">COSAI Morning Brief</p>
                  <p className="text-slate-500 text-xs">Personalized for you · 7:32 AM</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <i data-lucide="cloud-sun" className="w-4 h-4 text-amber-400"></i>
                    <span className="text-xs text-slate-400">Weather · San Francisco</span>
                  </div>
                  <p className="text-white text-sm">22°C, partly cloudy. Great day for your scheduled run — no rain expected until 6 PM.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <i data-lucide="trending-up" className="w-4 h-4 text-green-400"></i>
                    <span className="text-xs text-slate-400">Tech News · 3 relevant</span>
                  </div>
                  <p className="text-white text-sm">OpenAI released GPT-5. Based on your interests: 2 AI papers, 1 funding round in your sector.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <i data-lucide="zap" className="w-4 h-4 text-brand-400"></i>
                    <span className="text-xs text-slate-400">Action Item</span>
                  </div>
                  <p className="text-white text-sm">Your competitor just launched a feature you discussed last week. Want me to draft a response strategy?</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#signal-from-noise" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors">
          <span className="text-xs">Scroll to explore</span>
          <i data-lucide="chevron-down" className="w-4 h-4 animate-bounce"></i>
        </a>
      </section>

      {/* Signal from Noise — explanatory intro */}
      <section id="signal-from-noise" ref={introRef} className="relative py-20 bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold text-[#b48cf2] uppercase tracking-widest mb-4 font-mono">Signal · From · Noise</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white font-serif italic">
              Everything is screaming for your attention.
            </h2>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
              Headlines, hot takes, breaking alerts, tickers, threads. COSAI sits in the middle of all of it — a calm lens that pulls the relevant signal out and lets the rest dissolve into the dark.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden">
            <SignalFromNoise />
          </div>
          <p className="text-center text-xs text-slate-500 mt-6 font-mono uppercase tracking-widest">
            Live demo · The phone shows what survives the filter. Everything else drifts away.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="py-12 border-b border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Pulls signal from the sources you already use</p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-12 gap-y-4 sm:gap-y-6">
            {SOURCES.map(s => (
              <div key={s.label} className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                <i data-lucide={s.icon} className="w-5 h-5"></i>
                <span className="text-sm font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold text-brand-600 uppercase tracking-widest mb-4">The Problem</span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">You're drowning in information.<br/>Starving for insight.</h2>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Every day, professionals scroll through hundreds of headlines, posts, and alerts — only to find a handful that actually matter. The signal-to-noise ratio is broken.
          </p>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div><p className="text-4xl font-bold text-brand-600">6h</p><p className="text-sm text-slate-500 mt-2">Average daily info consumption</p></div>
            <div><p className="text-4xl font-bold text-brand-600">94%</p><p className="text-sm text-slate-500 mt-2">Of consumed info is irrelevant</p></div>
            <div><p className="text-4xl font-bold text-brand-600">3x</p><p className="text-sm text-slate-500 mt-2">Decision fatigue vs. 5 years ago</p></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold text-brand-600 uppercase tracking-widest mb-4">Core Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Intelligence that adapts to <span className="text-brand-600">you</span></h2>
            <p className="mt-4 text-slate-500 text-lg">COSAI doesn't just fetch information — it understands context, filters noise, and delivers what you need to act on.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map(f => (
              <div key={f.title} className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-brand-200 transition-all duration-300 group">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-600 transition-colors duration-300">
                  <i data-lucide={f.icon} className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors duration-300"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold text-brand-600 uppercase tracking-widest mb-4">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">From chaos to clarity in three steps</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { n: '1', t: 'Connect Your Sources', b: 'Link social accounts, news preferences, and grant location access. Takes under 2 minutes.' },
              { n: '2', t: 'COSAI Filters & Learns', b: 'AI processes streams in real time, applying your preferences and context to separate signal from noise.' },
              { n: '3', t: 'Act on What Matters', b: 'Receive concise, actionable briefs with suggested next steps — not another feed to scroll.' }
            ].map((s, i, arr) => (
              <div key={s.n} className="relative text-center">
                <div className="w-14 h-14 bg-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-600/20">
                  <span className="text-white font-bold text-lg">{s.n}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{s.t}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.b}</p>
                {i < arr.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-brand-300 to-brand-100"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Try it CTA */}
      <section id="try-it" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-400/5 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold text-brand-400 uppercase tracking-widest mb-4">Interactive Demo</span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Try the COSAI experience</h2>
          <p className="mt-4 text-slate-400 text-lg">Walk through a simulated onboarding to see how COSAI personalizes itself to you.</p>
          <div className="mt-8">
            <Link to="/onboarding" className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-medium px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-brand-600/25">
              Start Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold text-brand-600 uppercase tracking-widest mb-4">Early Feedback</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What early testers say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({length: 5}).map((_, i) => (
                    <i key={i} data-lucide="star" className="w-4 h-4 fill-amber-400 text-amber-400"></i>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-700 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Ready to cut through the noise?</h2>
          <p className="text-brand-100 text-lg mb-10 max-w-xl mx-auto">Join thousands of professionals who are reclaiming their attention with COSAI.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/onboarding" className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 hover:bg-brand-50 font-medium px-8 py-3.5 rounded-xl transition-all shadow-lg">
              Try the Demo
            </Link>
            <Link to="/blog" className="inline-flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-medium px-8 py-3.5 rounded-xl transition-all border border-brand-500">
              <i data-lucide="book-open" className="w-4 h-4"></i>
              Read the Journal
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
