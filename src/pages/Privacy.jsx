import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default function Privacy () {
  useEffect(() => { if (window.lucide) window.lucide.createIcons() }, [])

  return (
    <div>
      <Nav />

      <section className="pt-32 pb-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold text-brand-400 uppercase tracking-widest mb-4">Legal</span>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Privacy Policy</h1>
          <p className="mt-4 text-slate-400">Last updated: May 8, 2026</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <article className="max-w-3xl mx-auto px-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-slate-900 [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:text-slate-600 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2 [&_li]:text-slate-600 [&_li]:leading-relaxed [&_a]:text-brand-600 [&_a]:underline hover:[&_a]:text-brand-700 [&_strong]:text-slate-900 [&_strong]:font-semibold">
          <p className="text-slate-600 leading-relaxed">
            COSAI ("we", "us", "our") is an early-access product operated by COSAI Nightowls.
            This Privacy Policy explains what information we collect when you use our website
            and waitlist demo, how we use it, and the choices you have. By using the site you
            agree to the practices described here.
          </p>

          <h2>1. Information we collect</h2>
          <p>We try to collect as little as we can while still running the product. The categories below describe what we may collect.</p>
          <ul>
            <li><strong>Waitlist information.</strong> When you join the waitlist we collect the name and email address you submit. These are stored in a Google Sheet that only the COSAI team can access.</li>
            <li><strong>Onboarding demo inputs.</strong> Selections you make during the interactive demo (interests, role, source toggles, context permissions) are kept in your browser. They are <em>not</em> transmitted to us unless you explicitly submit the waitlist form at the end.</li>
            <li><strong>Technical information.</strong> Like most websites, our hosting provider (Cloudflare) automatically receives standard request data such as IP address, user agent, referrer, and timestamps. This is used to operate, secure, and debug the site.</li>
            <li><strong>Cookies and local storage.</strong> The site does not set marketing or tracking cookies. Some features (such as the demo) use browser local storage to remember your selections during the session.</li>
          </ul>

          <h2>2. How we use information</h2>
          <ul>
            <li>To contact you when an early-access invite becomes available.</li>
            <li>To operate, maintain, secure, and improve the site and demo.</li>
            <li>To understand aggregate usage and prioritize features.</li>
            <li>To comply with applicable law and respond to lawful requests.</li>
          </ul>
          <p>We do <strong>not</strong> sell or rent your personal information, and we do not use your waitlist email for advertising.</p>

          <h2>3. Sharing of information</h2>
          <p>We share limited information only with service providers who help us run the product:</p>
          <ul>
            <li><strong>Cloudflare</strong> — hosting and content delivery for this website.</li>
            <li><strong>Google Workspace</strong> — Google Apps Script and Google Sheets store waitlist submissions.</li>
          </ul>
          <p>These providers process information on our behalf under their own terms and security commitments. We may also disclose information if required by law, to protect our rights, or in connection with a corporate transaction.</p>

          <h2>4. Data retention</h2>
          <p>Waitlist entries are kept until you ask us to remove them, until COSAI launches and you accept (or decline) the invite, or until they are no longer needed for the purpose for which they were collected — whichever comes first. Server logs are retained for a short period for security and debugging.</p>

          <h2>5. Security</h2>
          <p>We use industry-standard safeguards (encryption in transit, access controls, restricted accounts) to protect information. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>

          <h2>6. Your rights and choices</h2>
          <p>Depending on where you live, you may have rights to access, correct, delete, or restrict use of your personal information, and to object to certain processing. To exercise any of these rights, email us at <a href="mailto:cosainightowls@gmail.com">cosainightowls@gmail.com</a>. You can unsubscribe from the waitlist at any time by replying to any email we send you or by contacting us.</p>

          <h2>7. Children</h2>
          <p>COSAI is not directed to children under 13 (or the equivalent minimum age in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, contact us and we will delete it.</p>

          <h2>8. International users</h2>
          <p>The site is operated from India. If you access it from outside India, your information may be transferred to, stored, and processed in jurisdictions whose laws may differ from your own.</p>

          <h2>9. Changes to this policy</h2>
          <p>We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top. Material changes will be highlighted on the site or sent to your waitlist email.</p>

          <h2>10. Contact</h2>
          <p>Questions about this policy or our data practices? Email <a href="mailto:cosainightowls@gmail.com">cosainightowls@gmail.com</a>.</p>

          <div className="mt-16 pt-8 border-t border-slate-200">
            <Link to="/" className="text-sm text-slate-500 hover:text-brand-600 transition-colors">Back to home</Link>
          </div>
        </article>
      </section>

      <Footer />
    </div>
  )
}
