import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Footer () {
  useEffect(() => { if (window.lucide) window.lucide.createIcons() }, [])
  return (
    <footer className="bg-slate-900 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <i data-lucide="brain" className="w-4 h-4 text-white"></i>
              </div>
              <span className="text-lg font-semibold text-white tracking-tight">COSAI</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Chief of Assistant AI — your intelligent filter for a noisy world.
              Delivering actionable insights, not information overload.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Twitter" className="text-slate-500 hover:text-brand-400 transition-colors"><i data-lucide="twitter" className="w-5 h-5"></i></a>
              <a href="#" aria-label="LinkedIn" className="text-slate-500 hover:text-brand-400 transition-colors"><i data-lucide="linkedin" className="w-5 h-5"></i></a>
              <a href="#" aria-label="GitHub" className="text-slate-500 hover:text-brand-400 transition-colors"><i data-lucide="github" className="w-5 h-5"></i></a>
            </div>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Product</h4>
            <ul className="space-y-2.5">
              <li><a href="/#features" className="text-slate-400 text-sm hover:text-brand-400 transition-colors">Features</a></li>
              <li><a href="/#how-it-works" className="text-slate-400 text-sm hover:text-brand-400 transition-colors">How It Works</a></li>
              <li><a href="/#try-it" className="text-slate-400 text-sm hover:text-brand-400 transition-colors">Try It</a></li>
              <li><Link to="/onboarding" className="text-slate-400 text-sm hover:text-brand-400 transition-colors">Waitlist</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/blog" className="text-slate-400 text-sm hover:text-brand-400 transition-colors">Blog</Link></li>
              <li><a href="#" className="text-slate-400 text-sm hover:text-brand-400 transition-colors">About</a></li>
              <li><Link to="/privacy" className="text-slate-400 text-sm hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-400 text-sm hover:text-brand-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">© {new Date().getFullYear()} COSAI. All rights reserved.</p>
          <p className="text-slate-500 text-xs">Designed with intelligence in mind.</p>
        </div>
      </div>
    </footer>
  )
}
