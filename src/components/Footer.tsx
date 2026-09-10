import { Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../data/config';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-border py-14">
      <div className="max-w-content mx-auto section-pad flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        <div>
          <div className="font-display text-lg font-semibold text-paper">{siteConfig.name}</div>
          <p className="mt-2 text-sm text-paper-dim">
            Software Developer • Web Applications • Automation • Digital Systems
          </p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-6">
          <ul className="space-y-2.5 text-sm text-paper-dim">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-paper transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 h-fit">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full border border-ink-border text-paper-dim hover:text-signal hover:border-signal transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-2.5 rounded-full border border-ink-border text-paper-dim hover:text-signal hover:border-signal transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="p-2.5 rounded-full border border-ink-border text-paper-dim hover:text-signal hover:border-signal transition-colors"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-content mx-auto section-pad mt-10 pt-6 border-t border-ink-border text-xs text-paper-dim/70">
        © 2026 {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
