export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-ink-border">
      <div className="max-w-content mx-auto section-pad grid md:grid-cols-5 gap-14 items-start">
        <div className="md:col-span-2">
          <div className="aspect-[4/5] rounded-2xl border border-ink-border overflow-hidden">
            <img src="/profile.jpg" alt="Desmond Didacus" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper">More Than Just Code</h2>

          <div className="mt-6 space-y-5 text-paper-dim leading-relaxed max-w-xl">
            <p>
              I'm Desmond Didacus, a Software Developer focused on building practical digital
              products and systems.
            </p>
            <p>
              Over the years, I've worked on websites, web applications, automation systems,
              e-commerce platforms, educational platforms and business-focused digital
              solutions.
            </p>
            <p>
              I enjoy taking an idea that exists as a problem, concept or rough sketch and
              turning it into something people can actually use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}