import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { posts } from './posts.js'

const TAG_ACCENT = {
  'Manifesto':    { bg: 'bg-brand-50',     text: 'text-brand-700' },
  'Design notes': { bg: 'bg-purple-50',    text: 'text-purple-700' },
  'Product':      { bg: 'bg-emerald-50',   text: 'text-emerald-700' },
  'Trust':        { bg: 'bg-amber-50',     text: 'text-amber-700' },
  'Essay':        { bg: 'bg-rose-50',      text: 'text-rose-700' },
  'Roadmap':      { bg: 'bg-sky-50',       text: 'text-sky-700' },
  'Comparison':   { bg: 'bg-indigo-50',    text: 'text-indigo-700' },
  'How-to':       { bg: 'bg-teal-50',      text: 'text-teal-700' },
  'Engineering':  { bg: 'bg-slate-100',    text: 'text-slate-700' }
}

export default function Blog () {
  useEffect(() => { if (window.lucide) window.lucide.createIcons() }, [])

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'The COSAI Journal',
    description: 'Notes on attention, feeds, and building a calmer relationship with the internet.',
    blogPost: posts.map(p => ({
      '@type': 'BlogPosting',
      headline: p.title,
      datePublished: p.date,
      keywords: (p.keywords || []).join(', '),
      url: `https://cosai.app/blog/${p.slug}`
    }))
  }

  return (
    <div>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold text-brand-600 uppercase tracking-widest mb-4">The COSAI Journal</span>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Notes on attention, signal, and calmer software</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Essays, design notes, and product thinking from the team building an AI Chief of Staff for your day.
          </p>
        </div>
      </section>

      {/* Featured + grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(p => {
              const accent = TAG_ACCENT[p.tag] || TAG_ACCENT['Manifesto']
              return (
                <Link
                  to={`/blog/${p.slug}`}
                  key={p.slug}
                  className="group bg-white rounded-2xl border border-slate-100 hover:shadow-xl hover:border-brand-200 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="h-40 bg-gradient-to-br from-brand-600 via-brand-500 to-purple-500 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-30 mix-blend-overlay"
                         style={{backgroundImage:'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 40%), radial-gradient(circle at 70% 80%, rgba(180,140,242,0.5), transparent 50%)'}}></div>
                    <div className="absolute bottom-4 left-4">
                      <span className={`inline-block text-xs font-semibold ${accent.bg} ${accent.text} px-3 py-1 rounded-full`}>{p.tag}</span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-xs text-slate-400 mb-2 font-mono uppercase tracking-wider">{p.date} · {p.readTime || '5 min'}</p>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-600 transition-colors">{p.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{p.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-600">
                      Read more
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Want the journal in your inbox?</h2>
          <p className="text-slate-500 mb-8">One short essay every couple of weeks. No spam, ever.</p>
          <Link to="/onboarding" className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-medium px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-brand-600/25">
            Join the waitlist
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
