import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 border-t border-ink-border">
      <div className="max-w-content mx-auto section-pad text-center">
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper max-w-2xl mx-auto text-balance">
          Have an idea, problem or business process you want to digitize?
        </h2>
        <p className="mt-5 text-paper-dim">Let's turn it into a practical digital solution.</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-signal px-7 py-3.5 text-sm font-medium text-paper hover:bg-signal-glow transition-colors"
          >
            Start a Project
          </a>
          <a
            href={getWhatsAppLink("Hi Desmond, I have a project I'd like to discuss.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink-border px-7 py-3.5 text-sm font-medium text-paper hover:border-signal transition-colors"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
