import { useEffect, useRef } from 'react'

const HEADLINES = [
  { kicker: 'BREAKING', text: 'Markets reel as policy shock ripples through sectors' },
  { kicker: 'OPINION',  text: 'The end of attention as we knew it' },
  { kicker: 'ANALYSIS', text: 'Why the index keeps lying to us' },
  { kicker: 'EXCLUSIVE',text: 'Inside the room where the deal collapsed' },
  { kicker: 'TRENDING', text: 'What everyone got wrong about Tuesday' },
  { kicker: 'ALERT',    text: 'Outage spreads to second region overnight' }
]
const POSTS = [
  { meta: '@journalist · 2m', text: 'Sources confirm the meeting did not happen.' },
  { meta: '@analyst · 14s',   text: 'This take is not aging well.' },
  { meta: '@desk · 4m',       text: "We're tracking three independent reports." },
  { meta: '@feed · 38s',      text: 'Replying to thread of 412 with hot takes.' },
  { meta: '@bot · 1m',        text: 'Engagement up 1,240% on this clip.' }
]
const QUOTES = [
  'this changes everything',
  'huge if true — wait for it',
  'everyone is missing the real story',
  "you won't believe what happens next"
]
const HASHTAGS = ['#breaking', '#thread', '#urgent', '#exclusive', '#hottake', '#viral']
const TICKERS = [
  { sym: 'IDX', val: '▲ 4.21%', dir: 'up' },
  { sym: 'VOL', val: '▼ 2.04%', dir: 'down' },
  { sym: 'FX',  val: '▲ 0.18%', dir: 'up' },
  { sym: 'BND', val: '▼ 1.32%', dir: 'down' }
]
const NOTIFS = [
  { app:'Calendar',  cls:'cal',    icon:'■', when:'now',    title:'Meeting about to start — Team standup' },
  { app:'Reminders', cls:'rem',    icon:'●', when:'5m ago', title:'Bookfair: purchase tickets before 6pm' },
  { app:'Calendar',  cls:'cal',    icon:'■', when:'1h',     title:'Register for design conference' },
  { app:'Health',    cls:'health', icon:'▲', when:'now',    title:'Time for a 20-min walk' },
  { app:'Mail',      cls:'mail',   icon:'◆', when:'7m ago', title:'Pharmacy: prescription is ready' },
  { app:'Alerts',    cls:'alert',  icon:'!', when:'now',    title:'Renew library books before midnight' }
]

const rand = (a, b) => a + Math.random() * (b - a)
const pick = arr => arr[Math.floor(Math.random() * arr.length)]

const LANES = [
  { topPct: () => rand(8, 22),  leftPct: () => rand(8, 92),  anim: 'drift-b' },
  { topPct: () => rand(78, 92), leftPct: () => rand(8, 92),  anim: 'drift-t' },
  { topPct: () => rand(20, 80), leftPct: () => rand(4, 22),  anim: 'drift-l' },
  { topPct: () => rand(20, 80), leftPct: () => rand(78, 96), anim: 'drift-r' }
]

function buildHeadline () {
  const h = pick(HEADLINES)
  return `<div class="sn-headline"><span class="kicker">${h.kicker}</span>${h.text}</div>`
}
function buildCard () {
  const p = pick(POSTS)
  const alert = Math.random() < 0.18
  return `<div class="sn-card${alert ? ' alert' : ''}">
    <div class="meta"><span class="dot"></span>${alert ? 'PUSH ALERT' : p.meta}</div>
    <div>${alert ? 'Multiple outlets reporting unconfirmed claims.' : p.text}</div>
  </div>`
}
function buildPill () {
  const types = ['live', 'mono', 'tag']
  const t = pick(types)
  if (t === 'live') return `<span class="sn-pill live">LIVE · ${Math.floor(rand(2,9))}.${Math.floor(rand(1,9))}M</span>`
  if (t === 'mono') {
    const n = (rand(1.2, 9.9)).toFixed(1) + 'k'
    const labels = [`+${n} likes`, `${Math.floor(rand(120,9999))} shares`, `${Math.floor(rand(20,420))} replies`]
    return `<span class="sn-pill">${pick(labels)}</span>`
  }
  return `<span class="sn-pill">${pick(HASHTAGS)}</span>`
}
function buildBadge () {
  return `<span class="sn-badge">${pick(['BREAKING','URGENT','UPDATE','LIVE','EXCLUSIVE'])}</span>`
}
function buildTicker () {
  const t = pick(TICKERS)
  return `<span class="sn-ticker"><span class="sym">${t.sym}</span><span class="val ${t.dir}">${t.val}</span></span>`
}
function buildQuote () {
  return `<span class="sn-quote">${pick(QUOTES)}</span>`
}

const builders = []
;[
  [buildHeadline, 2], [buildCard, 4], [buildPill, 4],
  [buildBadge, 1], [buildTicker, 2], [buildQuote, 2]
].forEach(([fn, w]) => { for (let i=0;i<w;i++) builders.push(fn) })

export default function SignalFromNoise () {
  const noiseRef = useRef(null)
  const notifsRef = useRef(null)

  useEffect(() => {
    const noise = noiseRef.current
    if (!noise) return
    noise.innerHTML = ''
    const FRAG_COUNT = window.innerWidth < 700 ? 22 : 44
    for (let i = 0; i < FRAG_COUNT; i++) {
      const lane = pick(LANES)
      const el = document.createElement('div')
      el.className = 'sn-frag'
      el.innerHTML = pick(builders)()
      el.style.top = lane.topPct() + '%'
      el.style.left = lane.leftPct() + '%'
      const dur = rand(11, 18)
      const delay = rand(-dur, 0)
      el.style.animation = `${lane.anim} ${dur}s linear ${delay}s infinite`
      el.style.opacity = '0'
      noise.appendChild(el)
    }
  }, [])

  useEffect(() => {
    const root = notifsRef.current
    if (!root) return
    const VISIBLE_MAX = 4
    const INTERVAL = 1900
    let idx = 0
    const pushOne = () => {
      const n = NOTIFS[idx % NOTIFS.length]
      idx++
      const el = document.createElement('div')
      el.className = 'sn-notif ' + n.cls
      el.innerHTML = `
        <div class="icon">${n.icon}</div>
        <div class="app">${n.app}</div>
        <div class="when">${n.when}</div>
        <div class="title">${n.title}</div>`
      root.appendChild(el)
      setTimeout(() => el.classList.add('shown'), 30)
      while (root.children.length > VISIBLE_MAX) {
        const old = root.firstElementChild
        old.classList.add('removing')
        setTimeout(() => old.remove(), 450)
        break
      }
    }
    pushOne()
    const id = setInterval(pushOne, INTERVAL)
    return () => { clearInterval(id); if (root) root.innerHTML = '' }
  }, [])

  return (
    <div className="sn-stage">
      <div className="sn-noise" ref={noiseRef} />
      <div className="sn-lens-wrap">
        <div className="sn-lens-glow" />
        <div className="sn-phone">
          <div className="sn-screen">
            <div className="sn-notch" />
            <div className="sn-lock">
              <div className="sn-lock-date">Tuesday, May 12</div>
              <div className="sn-lock-hh">9:41</div>
            </div>
            <div className="sn-notifs" ref={notifsRef} />
          </div>
        </div>
      </div>
    </div>
  )
}
