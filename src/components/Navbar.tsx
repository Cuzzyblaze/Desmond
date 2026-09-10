import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-ink/85 backdrop-blur-md border-b border-ink-border' : 'py-5 bg-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto section-pad flex items-center justify-between">
        <a href="#home" className="font-display text-lg font-semibold tracking-tight text-paper">
          Desmond Didacus
        </a>

        <ul className="hidden md:flex items-center gap-9 text-sm text-paper-dim">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-paper transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={getWhatsAppLink("Hi Desmond, I'd like to talk about a project.")}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-ink-border px-5 py-2.5 text-sm text-paper hover:border-signal hover:text-signal transition-colors"
        >
          Let's Work Together →
        </a>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-paper p-2 -mr-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`md:hidden fixed inset-0 top-[64px] bg-ink transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pt-8">
          {links.map((l, i) => (
            <li
              key={l.href}
              style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
              className={`transition-all duration-300 ${
                open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-2xl font-display text-paper border-b border-ink-border"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-6 mt-8">
          <a
            href={getWhatsAppLink("Hi Desmond, I'd like to talk about a project.")}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-medium text-paper"
          >
            Let's Work Together →
          </a>
        </div>
      </div>
    </header>
  );
}
