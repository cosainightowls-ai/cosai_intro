import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { label: 'Features',     icon: 'sparkles',    type: 'hash', href: '/#features' },
  { label: 'How It Works', icon: 'compass',     type: 'hash', href: '/#how-it-works' },
  { label: 'Try It',       icon: 'play-circle', type: 'hash', href: '/#try-it' },
  { label: 'Blog',         icon: 'book-open',   type: 'route', href: '/blog' }
]

export default function Nav () {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { if (window.lucide) window.lucide.createIcons() }, [pathname, open, scrolled])

  // Close drawer on route change
  useEffect(() => { setOpen(false) }, [pathname])

  // Lock body scroll while drawer open + ESC to close
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = e => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const baseNav = 'fixed top-0 left-0 right-0 z-50 transition-all duration-300'
  const scrolledCls = 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-100'
  const transparent = !scrolled && pathname === '/' && !open

  return (
    <>
      <nav className={`${baseNav} ${transparent ? '' : scrolledCls}`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 active:opacity-70 transition-opacity">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center shadow-sm shadow-brand-600/30">
              <i data-lucide="brain" className="w-4 h-4 text-white"></i>
            </div>
            <span className={`text-lg font-semibold tracking-tight ${transparent ? 'text-white' : 'text-slate-900'}`}>COSAI</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {LINKS.map(l => l.type === 'route' ? (
              <Link key={l.label} to={l.href} className={`text-sm transition-colors ${transparent ? 'text-slate-300 hover:text-white' : 'text-slate-500 hover:text-brand-600'}`}>{l.label}</Link>
            ) : (
              <a key={l.label} href={l.href} className={`text-sm transition-colors ${transparent ? 'text-slate-300 hover:text-white' : 'text-slate-500 hover:text-brand-600'}`}>{l.label}</a>
            ))}
          </div>

          <Link to="/onboarding" className="hidden md:inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm">
            Join Waitlist
          </Link>

          <button
            onClick={() => setOpen(o => !o)}
            className={`md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl transition-all ${transparent ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'} active:scale-95`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-drawer"
          >
            <span className="relative w-5 h-5 block">
              <span className={`absolute left-0 right-0 top-1/2 h-0.5 bg-current rounded transition-all duration-300 ${open ? 'rotate-45 -translate-y-1/2' : '-translate-y-[6px]'}`}></span>
              <span className={`absolute left-0 right-0 top-1/2 h-0.5 bg-current rounded transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100 -translate-y-1/2'}`}></span>
              <span className={`absolute left-0 right-0 top-1/2 h-0.5 bg-current rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-1/2' : 'translate-y-[4px]'}`}></span>
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer + backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
      </div>

      <aside
        id="mobile-drawer"
        className={`md:hidden fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between h-16 px-5 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <i data-lucide="brain" className="w-4 h-4 text-white"></i>
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">COSAI</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-slate-500 hover:bg-slate-100 active:scale-95 transition-all"
            aria-label="Close menu"
          >
            <i data-lucide="x" className="w-5 h-5"></i>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Navigate</p>
          <ul className="space-y-1">
            {LINKS.map(l => (
              <li key={l.label}>
                {l.type === 'route' ? (
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors"
                  >
                    <span className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center">
                      <i data-lucide={l.icon} className="w-4 h-4 text-brand-600"></i>
                    </span>
                    <span className="text-base font-medium">{l.label}</span>
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors"
                  >
                    <span className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center">
                      <i data-lucide={l.icon} className="w-4 h-4 text-brand-600"></i>
                    </span>
                    <span className="text-base font-medium">{l.label}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>

          <p className="px-3 pt-6 pb-2 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Connect</p>
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors">
                <span className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
                  <i data-lucide="twitter" className="w-4 h-4 text-slate-600"></i>
                </span>
                <span className="text-base">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors">
                <span className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
                  <i data-lucide="linkedin" className="w-4 h-4 text-slate-600"></i>
                </span>
                <span className="text-base">LinkedIn</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <Link
            to="/onboarding"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-brand-600 hover:bg-brand-700 text-white font-medium px-4 py-3 rounded-xl shadow-md shadow-brand-600/25 active:scale-[0.98] transition-all"
          >
            <i data-lucide="rocket" className="w-4 h-4"></i>
            Join the Waitlist
          </Link>
          <p className="text-[11px] text-center text-slate-400 mt-3">Early access · No spam</p>
        </div>
      </aside>
    </>
  )
}
