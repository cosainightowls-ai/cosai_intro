import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default function Terms () {
  useEffect(() => { if (window.lucide) window.lucide.createIcons() }, [])

  return (
    <div>
      <Nav />

      <section className="pt-32 pb-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold text-brand-400 uppercase tracking-widest mb-4">Legal</span>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Terms of Service</h1>
          <p className="mt-4 text-slate-400">Last updated: May 8, 2026</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <article className="max-w-3xl mx-auto px-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-slate-900 [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:text-slate-600 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2 [&_li]:text-slate-600 [&_li]:leading-relaxed [&_a]:text-brand-600 [&_a]:underline hover:[&_a]:text-brand-700 [&_strong]:text-slate-900 [&_strong]:font-semibold">
          <p className="text-slate-600 leading-relaxed">
            These Terms of Service ("Terms") govern your access to and use of the COSAI
            website, the interactive onboarding demo, and any related services (collectively,
            the "Service") operated by COSAI Nightowls ("we", "us", "our"). By using the
            Service you agree to be bound by these Terms. If you do not agree, please do not
            use the Service.
          </p>

          <h2>1. Eligibility</h2>
          <p>You must be at least 13 years old (or the minimum age required in your jurisdiction) to use the Service. By using the Service, you represent that you meet this requirement and that any information you provide is accurate.</p>

          <h2>2. Early access and waitlist</h2>
          <p>COSAI is currently in early access. Joining the waitlist does not guarantee that you will receive an invite or that any specific feature will be made available to you. We may change, suspend, or discontinue any part of the Service at any time, with or without notice.</p>

          <h2>3. The interactive demo</h2>
          <p>The onboarding flow on this site is a <strong>simulation</strong> for illustrative purposes. The "personalized brief" shown at the end is generated from canned content based on your selections — it is not a real product output, not financial or professional advice, and should not be relied upon for any decision.</p>

          <h2>4. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for any unlawful, harmful, or fraudulent purpose.</li>
            <li>Attempt to gain unauthorized access to the Service, our infrastructure, or other users' data.</li>
            <li>Interfere with, disrupt, or overload the Service (including via automated requests, scraping at scale, or denial-of-service attempts).</li>
            <li>Submit false, misleading, or other people's personal information through any form on the site.</li>
            <li>Reverse engineer, decompile, or attempt to extract source code from the Service except as permitted by applicable law.</li>
          </ul>

          <h2>5. Intellectual property</h2>
          <p>The Service, including its design, copy, branding, code, and content, is owned by COSAI Nightowls and protected by intellectual property laws. We grant you a personal, non-exclusive, non-transferable, revocable license to access and use the Service for its intended purpose. You may not copy, modify, distribute, sell, or create derivative works without our prior written permission.</p>

          <h2>6. Third-party services</h2>
          <p>The Service relies on third-party providers (such as Cloudflare for hosting and Google Workspace for storing waitlist submissions). Your use of those providers may be subject to their own terms and privacy policies, and we are not responsible for their practices.</p>

          <h2>7. Privacy</h2>
          <p>Our handling of personal information is described in our <Link to="/privacy">Privacy Policy</Link>, which is incorporated into these Terms by reference.</p>

          <h2>8. Disclaimers</h2>
          <p>The Service is provided <strong>"as is"</strong> and <strong>"as available"</strong> without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, non-infringement, accuracy, or uninterrupted operation. We do not warrant that the Service will be error-free, secure, or available at any particular time.</p>

          <h2>9. Limitation of liability</h2>
          <p>To the maximum extent permitted by law, COSAI Nightowls and its team will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill, arising from your use of (or inability to use) the Service. Our total liability for any claim arising out of these Terms or the Service will not exceed one hundred Indian Rupees (₹100) or the amount you paid us, whichever is greater.</p>

          <h2>10. Indemnification</h2>
          <p>You agree to indemnify and hold harmless COSAI Nightowls, its team, and its providers from any claims, damages, liabilities, and expenses (including reasonable legal fees) arising from your use of the Service or your breach of these Terms.</p>

          <h2>11. Termination</h2>
          <p>We may suspend or terminate your access to the Service at any time, for any reason, including if we believe you have violated these Terms. You may stop using the Service at any time. Provisions intended to survive termination (including intellectual property, disclaimers, limitation of liability, and governing law) will continue to apply.</p>

          <h2>12. Governing law</h2>
          <p>These Terms are governed by the laws of India, without regard to its conflict-of-law principles. Any dispute arising out of or relating to these Terms or the Service will be subject to the exclusive jurisdiction of the courts located in India.</p>

          <h2>13. Changes to these Terms</h2>
          <p>We may update these Terms from time to time. When we do, we will revise the "Last updated" date at the top. Continued use of the Service after changes take effect constitutes acceptance of the updated Terms.</p>

          <h2>14. Contact</h2>
          <p>Questions about these Terms? Email <a href="mailto:cosainightowls@gmail.com">cosainightowls@gmail.com</a>.</p>

          <div className="mt-16 pt-8 border-t border-slate-200">
            <Link to="/" className="text-sm text-slate-500 hover:text-brand-600 transition-colors">Back to home</Link>
          </div>
        </article>
      </section>

      <Footer />
    </div>
  )
}
