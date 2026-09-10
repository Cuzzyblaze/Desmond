import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

/**
 * Persistent floating "Book me" / chat button. Always opens a WhatsApp
 * conversation with Desmond's number — see src/data/config.ts.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink("Hi Desmond, I'd like to book a project with you.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Book me on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-signal pl-4 pr-5 py-3.5 text-sm font-medium text-paper shadow-[0_8px_30px_rgba(61,107,255,0.35)] hover:bg-signal-glow transition-colors"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">Book me</span>
    </a>
  );
}
