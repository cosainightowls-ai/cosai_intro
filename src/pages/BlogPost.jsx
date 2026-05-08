import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { posts } from './posts.js'

export default function BlogPost () {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  useEffect(() => {
    if (window.lucide) window.lucide.createIcons()
    if (post) {
      document.title = `${post.title} — COSAI Journal`
    }
    window.scrollTo(0, 0)
  }, [post])

  if (!post) {
    return (
      <div>
        <Nav />
        <section className="pt-32 pb-24 max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-semibold mb-4">Post not found</h1>
          <Link to="/blog" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700">
            Back to blog
          </Link>
        </section>
        <Footer />
      </div>
    )
  }

  const related = posts.filter(p => p.slug !== post.slug && p.tag === post.tag).slice(0, 3)
  const fallback = posts.filter(p => p.slug !== post.slug).slice(0, 3)
  const recommended = related.length ? related : fallback

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    keywords: (post.keywords || []).join(', '),
    author: { '@type': 'Organization', name: 'COSAI' },
    publisher: { '@type': 'Organization', name: 'COSAI' },
    mainEntityOfPage: `https://cosai.app/blog/${post.slug}`
  }

  return (
    <div>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <article className="pt-32 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-600 mb-8 transition-colors">
            All posts
          </Link>

          <span className="inline-block text-xs font-semibold text-brand-600 uppercase tracking-widest mb-4">{post.tag}</span>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight mb-6">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-slate-400 font-mono pb-8 mb-8 border-b border-slate-100">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime || '5 min read'}</span>
            {post.keywords && (
              <>
                <span>·</span>
                <span className="hidden sm:inline">{post.keywords.slice(0, 2).join(', ')}</span>
              </>
            )}
          </div>

          <div className="prose prose-slate prose-lg max-w-none">
            {post.body.map((para, i) => (
              <p key={i} className="text-slate-700 text-lg leading-relaxed mb-6">{para}</p>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-slate-100">
            <div className="bg-gradient-to-br from-brand-50 to-purple-50 rounded-2xl p-8 border border-brand-100">
              <h3 className="text-xl font-semibold mb-2">Try COSAI</h3>
              <p className="text-slate-600 mb-5">A calmer relationship with information starts with one short brief a day. Join the waitlist for early access.</p>
              <Link to="/onboarding" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-sm">
                Join the waitlist
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold tracking-tight mb-8">More from the journal</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recommended.map(p => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="bg-white rounded-2xl border border-slate-100 hover:shadow-xl hover:border-brand-200 p-6 transition-all duration-300 group">
                <p className="text-xs text-brand-600 font-semibold uppercase tracking-wider mb-2">{p.tag}</p>
                <h3 className="text-base font-semibold mb-2 group-hover:text-brand-600 transition-colors">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
