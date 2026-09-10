import { getWhatsAppLink } from '../data/config';

export default function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-28 md:pt-48 md:pb-36 overflow-hidden grid-backdrop">
      {/* subtle system-node backdrop, purely decorative */}
      <svg
        className="pointer-events-none absolute right-[-6%] top-16 w-[560px] max-w-none opacity-[0.35] hidden lg:block"
        viewBox="0 0 560 420"
        fill="none"
        aria-hidden="true"
      >
        <g className="animate-drift" style={{ transformOrigin: '280px 210px' }}>
          <path d="M60 80 L220 140 L220 260 L400 320" stroke="#26272E" strokeWidth="1.5" />
          <path d="M220 140 L380 90" stroke="#26272E" strokeWidth="1.5" />
          <circle cx="60" cy="80" r="4" fill="#3D6BFF" className="animate-pulseDot" />
          <circle cx="220" cy="140" r="4" fill="#7C93D9" />
          <circle cx="220" cy="260" r="4" fill="#7C93D9" />
          <circle cx="400" cy="320" r="4" fill="#3D6BFF" className="animate-pulseDot" />
          <circle cx="380" cy="90" r="4" fill="#7C93D9" />
        </g>
        <text x="30" y="360" fill="#3D6BFF" fontFamily="IBM Plex Mono" fontSize="12" opacity="0.7">
          {'{ status: "building" }'}
        </text>
      </svg>

      <div className="relative max-w-content mx-auto section-pad">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-sm text-paper-dim mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-signal animate-pulseDot" />
            </span>
            Available for selected projects
          </div>

          <h1 className="font-display text-[2.6rem] leading-[1.08] sm:text-6xl md:text-[4.2rem] md:leading-[1.05] font-semibold text-paper text-balance">
            I build digital systems that turn ideas into reality.
          </h1>

          <p className="mt-7 text-lg text-paper-dim max-w-xl leading-relaxed">
            Software Developer with 5+ years of experience building websites, web
            applications, automation systems, e-commerce platforms and sales funnels
            that solve real-world business problems.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-signal px-7 py-3.5 text-sm font-medium text-paper hover:bg-signal-glow transition-colors"
            >
              View My Work →
            </a>
            <a
              href={getWhatsAppLink("Hi Desmond, I'd like to work together on a project.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-border px-7 py-3.5 text-sm font-medium text-paper hover:border-signal transition-colors"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
