import { useState } from 'react';
import { Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../data/config';

const projectTypes = [
  'Website',
  'Web Application',
  'Business Automation',
  'Sales Funnel',
  'E-commerce Store',
  'Learning Platform',
  'Other',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    name: '',
    email: '',
    projectType: projectTypes[0],
    budget: '',
    message: '',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend/email service is wired up yet.
    // Connect an email API (e.g. Resend, Formspree, or a custom endpoint) here —
    // this UI already collects everything it needs to send.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-ink-border">
      <div className="max-w-content mx-auto section-pad grid lg:grid-cols-5 gap-14">
        <div className="lg:col-span-2">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper text-balance">
            Let's build something useful.
          </h2>
          <p className="mt-4 text-paper-dim leading-relaxed max-w-sm">
            Prefer a quicker route? Reach out directly on WhatsApp or connect on
            LinkedIn.
          </p>

          <div className="mt-9 space-y-4 text-sm">
            <a
              href={getWhatsAppLink("Hi Desmond, I'd like to get in touch.")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-paper hover:text-signal transition-colors"
            >
              <MessageCircle size={17} className="text-signal-dim" />
              {siteConfig.whatsappDisplay}
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-paper hover:text-signal transition-colors"
            >
              <Linkedin size={17} className="text-signal-dim" />
              linkedin.com/in/desmond-didacus
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-paper hover:text-signal transition-colors"
            >
              <Instagram size={17} className="text-signal-dim" />
              @desmond_didacus
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          {submitted ? (
            <div className="rounded-2xl border border-ink-border bg-ink-card p-10 text-center">
              <h3 className="font-display text-xl font-semibold text-paper">Enquiry received</h3>
              <p className="mt-3 text-paper-dim text-sm">
                Thanks for reaching out — I'll get back to you shortly. For a faster
                reply, message me directly on{' '}
                <a
                  href={getWhatsAppLink("Hi Desmond, I just sent a project enquiry via your site.")}
                  target="_blank"
                  rel="noreferrer"
                  className="text-signal hover:underline"
                >
                  WhatsApp
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wide text-paper-dim mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={values.name}
                    onChange={(e) => setValues({ ...values, name: e.target.value })}
                    className="w-full rounded-lg bg-ink-card border border-ink-border px-4 py-3 text-sm text-paper focus:border-signal outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wide text-paper-dim mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={values.email}
                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                    className="w-full rounded-lg bg-ink-card border border-ink-border px-4 py-3 text-sm text-paper focus:border-signal outline-none transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-wide text-paper-dim mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    value={values.projectType}
                    onChange={(e) => setValues({ ...values, projectType: e.target.value })}
                    className="w-full rounded-lg bg-ink-card border border-ink-border px-4 py-3 text-sm text-paper focus:border-signal outline-none transition-colors"
                  >
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-xs font-mono uppercase tracking-wide text-paper-dim mb-2">
                    Budget / Range (optional)
                  </label>
                  <input
                    id="budget"
                    value={values.budget}
                    onChange={(e) => setValues({ ...values, budget: e.target.value })}
                    className="w-full rounded-lg bg-ink-card border border-ink-border px-4 py-3 text-sm text-paper focus:border-signal outline-none transition-colors"
                    placeholder="e.g. ₦300,000 – ₦800,000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wide text-paper-dim mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={values.message}
                  onChange={(e) => setValues({ ...values, message: e.target.value })}
                  className="w-full rounded-lg bg-ink-card border border-ink-border px-4 py-3 text-sm text-paper focus:border-signal outline-none transition-colors resize-none"
                  placeholder="Tell me a bit about what you're trying to build."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-signal px-7 py-3.5 text-sm font-medium text-paper hover:bg-signal-glow transition-colors"
              >
                Send Project Enquiry →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
