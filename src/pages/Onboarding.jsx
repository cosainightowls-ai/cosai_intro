import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

const TOPICS = ['AI & Machine Learning', 'Startups & VC', 'Markets & Finance', 'Climate & Energy', 'Product Design', 'Cybersecurity', 'Health & Biotech', 'Crypto & Web3', 'Engineering', 'Leadership']
const SOURCES = [
  { id: 'twitter',  icon: 'twitter',        title: 'Twitter / X',     desc: 'Trending topics, follows, lists' },
  { id: 'reddit',   icon: 'message-circle', title: 'Reddit',          desc: 'Subreddits, discussions, AMAs' },
  { id: 'news',     icon: 'newspaper',      title: 'News APIs',       desc: 'Reuters, AP, Bloomberg, TechCrunch' },
  { id: 'calendar', icon: 'calendar',       title: 'Calendar & Email',desc: 'Context from your schedule & communications' }
]

// Replace with your deployed Google Apps Script Web App URL.
// See instructions in README / chat: deploy a doPost script that appends [name, email] to the sheet.
const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzMwjfTED_76p2aEB6LkMAJcQ3vB_6IeXHDp3ZR8xG1TbsiM08gd9v2dV19voZFZQ-Q/exec'

const NEWS_MAP = {
  'AI & Machine Learning': '🤖 New transformer architecture achieves 40% efficiency gains. 2 papers match your research interests.',
  'Startups & VC':         '🚀 Series A funding in EdTech surged 28% this quarter. 3 companies in your watchlist raised rounds.',
  'Markets & Finance':     '📈 Fed signals rate hold. Your portfolio sectors projected to benefit — detailed analysis ready.',
  'Climate & Energy':      '🌍 EU carbon border tax enters next phase. 5 companies in your sector flagged for impact.',
  'Product Design':        '🎨 Figma launched AI-powered prototyping. Competitor analysis based on your product stack available.',
  'Cybersecurity':         '🔒 Critical vulnerability in OpenSSL variants. Your tech stack may be affected — patch timeline inside.',
  'Health & Biotech':      '🧬 FDA fast-tracked approval for a novel mRNA therapy. Related to your biotech watchlist.',
  'Crypto & Web3':         '⚙️ Ethereum L2 adoption up 340%. DeFi protocol you follow reached $1B TVL milestone.',
  'Engineering':           '⚙️ Rust 2.0 roadmap released with major async improvements. Relevant to your backend stack.',
  'Leadership':            '👑 New HBR study: remote team effectiveness framework. Aligns with your management reading list.'
}

export default function Onboarding () {
  const [step, setStep] = useState(1)
  const totalSteps = 5
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [topics, setTopics] = useState([])
  const [sources, setSources] = useState([])
  const [location, setLocation] = useState(true)
  const [weather, setWeather] = useState(true)
  const [routine, setRoutine] = useState(false)
  const [nameErr, setNameErr] = useState(false)
  const [email, setEmail] = useState('')
  const [emailErr, setEmailErr] = useState('')
  const [submitState, setSubmitState] = useState('idle') // idle | submitting | done | error

  useEffect(() => { if (window.lucide) window.lucide.createIcons() }, [step])

  const toggle = (list, set, v) =>
    set(list.includes(v) ? list.filter(x => x !== v) : [...list, v])

  const validate = () => {
    if (step === 1) {
      if (!name.trim()) { setNameErr(true); return false }
      setNameErr(false)
      return true
    }
    if (step === 2) return topics.length >= 2
    if (step === 3) return sources.length >= 1
    return true
  }

  const submitWaitlist = async () => {
    const trimmedEmail = email.trim()
    if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
      setEmailErr('Please enter a valid email')
      return
    }
    setEmailErr('')
    setSubmitState('submitting')
    try {
      // Apps Script web apps don't support custom CORS headers reliably,
      // so we use 'no-cors' with a simple form-encoded body. The script still receives the data.
      const body = new URLSearchParams({ name: name.trim(), email: trimmedEmail })
      await fetch(SHEET_ENDPOINT, { method: 'POST', mode: 'no-cors', body })
      setSubmitState('done')
    } catch (err) {
      setSubmitState('error')
    }
  }

  const next = () => { if (validate() && step < totalSteps) setStep(step + 1) }
  const back = () => { if (step > 1) setStep(step - 1) }

  const progress = (step / totalSteps) * 100
  const showInterests = topics.slice(0, 3)

  return (
    <div>
      <Nav />

      <section className="pt-32 pb-24 bg-slate-900 relative overflow-hidden min-h-screen">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-400/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold text-brand-400 uppercase tracking-widest mb-4">Interactive Demo</span>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Try the COSAI experience</h1>
            <p className="mt-4 text-slate-400 text-lg">Walk through a simulated onboarding to see how COSAI personalizes itself to you.</p>
          </div>

          <div className="glass rounded-2xl overflow-hidden">
            <div className="h-1 bg-white/5">
              <div className="h-full bg-brand-500 rounded-r-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
            </div>

            <div className="p-5 sm:p-8 md:p-10">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-medium text-brand-400 uppercase tracking-wider">Step {step} of {totalSteps}</span>
                <div className="flex gap-1.5">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className={`w-2 h-2 rounded-full ${i <= step ? 'bg-brand-500' : 'bg-white/20'}`}></div>
                  ))}
                </div>
              </div>

              {step === 1 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-brand-600/20 rounded-xl flex items-center justify-center">
                      <i data-lucide="user" className="w-5 h-5 text-brand-400"></i>
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-semibold">Welcome to COSAI</h3>
                      <p className="text-slate-400 text-sm">Let's get to know you</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-slate-300 mb-1.5">Your name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={e => { setName(e.target.value); if (nameErr) setNameErr(false) }}
                        placeholder="e.g. Anuradha"
                        className={`w-full bg-white/5 border ${nameErr ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-300 mb-1.5">Your role</label>
                      <input
                        type="text"
                        value={role}
                        onChange={e => setRole(e.target.value)}
                        placeholder="e.g. Product Manager, Founder, Analyst"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-brand-600/20 rounded-xl flex items-center justify-center">
                      <i data-lucide="sparkles" className="w-5 h-5 text-brand-400"></i>
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-semibold">Select your interests</h3>
                      <p className="text-slate-400 text-sm">Choose topics you want COSAI to track</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {TOPICS.map(t => {
                      const on = topics.includes(t)
                      return (
                        <button
                          key={t}
                          onClick={() => toggle(topics, setTopics, t)}
                          className={`px-4 py-2 rounded-full border text-sm transition-all ${on ? 'bg-brand-600 text-white border-brand-600' : 'border-white/15 text-slate-300 hover:border-brand-500 hover:text-brand-400'}`}
                        >
                          {t}
                        </button>
                      )
                    })}
                  </div>
                  <p className="text-xs text-slate-500 mt-4">Select at least 2 topics</p>
                </div>
              )}

              {step === 3 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-brand-600/20 rounded-xl flex items-center justify-center">
                      <i data-lucide="rss" className="w-5 h-5 text-brand-400"></i>
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-semibold">Connect your sources</h3>
                      <p className="text-slate-400 text-sm">Where should COSAI pull information from?</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {SOURCES.map(s => {
                      const on = sources.includes(s.id)
                      return (
                        <button
                          key={s.id}
                          onClick={() => toggle(sources, setSources, s.id)}
                          className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all text-left ${on ? 'border-brand-500' : 'border-white/10 hover:border-brand-500/50'}`}
                        >
                          <div className="flex items-center gap-3">
                            <i data-lucide={s.icon} className="w-5 h-5 text-slate-400"></i>
                            <div>
                              <p className="text-white text-sm font-medium">{s.title}</p>
                              <p className="text-slate-500 text-xs">{s.desc}</p>
                            </div>
                          </div>
                          <div className={`w-5 h-5 rounded border flex items-center justify-center ${on ? 'bg-brand-600 border-brand-600' : 'border-white/20'}`}>
                            {on && (
                              <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            )}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-brand-600/20 rounded-xl flex items-center justify-center">
                      <i data-lucide="compass" className="w-5 h-5 text-brand-400"></i>
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-semibold">Enable context signals</h3>
                      <p className="text-slate-400 text-sm">Help COSAI understand your environment</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { key: 'loc',  state: location, setState: setLocation, icon: 'map-pin',   color: 'text-brand-400',   title: 'Location Access',   desc: 'Local news, weather, events' },
                      { key: 'wea',  state: weather,  setState: setWeather,  icon: 'cloud-sun', color: 'text-amber-400',   title: 'Weather Integration', desc: 'Activity suggestions, commute alerts' },
                      { key: 'rou',  state: routine,  setState: setRoutine,  icon: 'clock',     color: 'text-emerald-400', title: 'Routine Detection', desc: 'Learn your daily patterns for smarter timing' }
                    ].map(t => (
                      <div key={t.key} className="flex items-center justify-between p-4 rounded-xl border border-white/10">
                        <div className="flex items-center gap-3">
                          <i data-lucide={t.icon} className={`w-5 h-5 ${t.color}`}></i>
                          <div>
                            <p className="text-white text-sm font-medium">{t.title}</p>
                            <p className="text-slate-500 text-xs">{t.desc}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => t.setState(!t.state)}
                          className={`relative w-9 h-5 rounded-full transition-colors ${t.state ? 'bg-brand-600' : 'bg-white/10'}`}
                          aria-label={`Toggle ${t.title}`}
                        >
                          <span className={`absolute top-0.5 left-0.5 bg-white rounded-full h-4 w-4 transition-transform ${t.state ? 'translate-x-4' : ''}`}></span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 5 && (
                <div>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-brand-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <i data-lucide="check-circle-2" className="w-8 h-8 text-brand-400"></i>
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-2">Your COSAI is ready!</h3>
                    <p className="text-slate-400 text-sm">Here's a preview of your personalized brief</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="bg-brand-600/10 border border-brand-500/20 rounded-xl p-5 text-center">
                      <p className="text-white text-sm font-medium">☀️ Good morning, {name || 'there'}!</p>
                      <p className="text-slate-400 text-xs mt-1">Here's your personalized COSAI brief for today</p>
                    </div>
                    {weather && (
                      <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                        <div className="flex items-center gap-2 mb-2">
                          <i data-lucide="cloud-sun" className="w-4 h-4 text-amber-400"></i>
                          <span className="text-xs text-slate-400">Weather {location ? '· Your Area' : ''}</span>
                        </div>
                        <p className="text-white text-sm">22°C and clear. Optimal conditions for your afternoon run — UV index moderate.</p>
                      </div>
                    )}
                    {showInterests.map(t => (
                      <div key={t} className="bg-white/5 rounded-xl p-4 border border-white/5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-slate-400">{t}</span>
                        </div>
                        <p className="text-white text-sm">{NEWS_MAP[t]}</p>
                      </div>
                    ))}
                    <div className="bg-brand-600/10 border border-brand-500/20 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <i data-lucide="zap" className="w-4 h-4 text-brand-400"></i>
                        <span className="text-xs text-brand-400 font-medium">Suggested Action</span>
                      </div>
                      <p className="text-white text-sm">
                        {role ? `As a ${role}, ` : ''}you may want to review the {showInterests[0] || 'latest'} update first. Want me to draft a summary or set a reminder?
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    {submitState === 'done' ? (
                      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
                        <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <i data-lucide="check" className="w-6 h-6 text-emerald-400"></i>
                        </div>
                        <p className="text-white font-medium mb-1">You're on the list, {name || 'friend'}!</p>
                        <p className="text-slate-400 text-sm">We saved <b>{email}</b>. We'll send your invite the moment a spot opens.</p>
                      </div>
                    ) : (
                      <>
                        <p className="text-slate-400 text-sm mb-5">COSAI is currently in early access. Drop your email to join the waitlist.</p>
                        <form
                          onSubmit={e => { e.preventDefault(); submitWaitlist() }}
                          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                        >
                          <input
                            type="email"
                            value={email}
                            onChange={e => { setEmail(e.target.value); if (emailErr) setEmailErr('') }}
                            placeholder="anuradha@somewhere.com"
                            required
                            className={`flex-1 bg-white/5 border ${emailErr ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all`}
                          />
                          <button
                            type="submit"
                            disabled={submitState === 'submitting'}
                            className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-xl transition-all shadow-lg shadow-brand-600/25"
                          >
                            <i data-lucide={submitState === 'submitting' ? 'loader' : 'rocket'} className={`w-4 h-4 ${submitState === 'submitting' ? 'animate-spin' : ''}`}></i>
                            {submitState === 'submitting' ? 'Joining…' : 'Join Waitlist'}
                          </button>
                        </form>
                        {emailErr && <p className="text-xs text-red-400 mt-2">{emailErr}</p>}
                        {submitState === 'error' && <p className="text-xs text-red-400 mt-2">Something went wrong. Please try again.</p>}
                        <p className="text-xs text-slate-500 mt-3">No spam. One email when your invite is ready.</p>
                      </>
                    )}
                  </div>
                </div>
              )}

              <div className={`flex items-center mt-8 pt-6 border-t border-white/5 ${step === 1 ? 'justify-end' : 'justify-between'}`}>
                {step > 1 && (
                  <button onClick={back} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                    Back
                  </button>
                )}
                {step < totalSteps && (
                  <button onClick={next} className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-6 py-2.5 rounded-xl transition-all shadow-sm">
                    {step === totalSteps - 1 ? 'Generate Preview' : 'Continue'}
                    {step === totalSteps - 1 && <i data-lucide="sparkles" className="w-4 h-4"></i>}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/" className="text-sm text-slate-500 hover:text-brand-400 transition-colors">Back to home</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
