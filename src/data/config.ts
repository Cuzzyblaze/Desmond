// Central, editable site configuration.
// Update contact details, social links and the WhatsApp number here —
// every component that needs them reads from this single file.

export const siteConfig = {
  name: 'Desmond Didacus',
  title: 'Software Developer | Web Applications, Automation & Digital Systems',
  tagline: 'I build digital systems that turn ideas into working products.',

  // Raw digits only, international format, no symbols — used to build wa.me links.
  whatsappNumber: '2348143617786',
  whatsappDisplay: '+234 814 361 7786',

  email: '', // add an email address here when ready

  social: {
    linkedin: 'https://linkedin.com/in/desmond-didacus',
    instagram: 'https://instagram.com/desmond_didacus',
    tiktok: 'https://tiktok.com/@desmond_didacus',
  },
};

/**
 * Builds a wa.me link that opens a WhatsApp chat with a prefilled message.
 * Used by every "Book me" / "Chat on WhatsApp" / "Let's Work Together" CTA.
 */
export function getWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
