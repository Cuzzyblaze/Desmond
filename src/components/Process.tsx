const steps = [
  {
    n: '01',
    title: 'Understand',
    description: 'Understand the business, problem, audience and desired outcome.',
  },
  {
    n: '02',
    title: 'Plan',
    description: 'Turn the idea into a clear structure, user flow and technical solution.',
  },
  {
    n: '03',
    title: 'Build',
    description: 'Design and develop the actual website, application, automation or digital system.',
  },
  {
    n: '04',
    title: 'Improve',
    description: 'Test, refine, optimize and continuously improve the product.',
  },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 border-t border-ink-border">
      <div className="max-w-content mx-auto section-pad">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper max-w-lg">
          From Idea to Working System
        </h2>

        <div className="mt-14 grid md:grid-cols-4 gap-px bg-ink-border rounded-2xl overflow-hidden">
          {steps.map((s) => (
            <div key={s.n} className="bg-ink p-8 hover:bg-ink-card transition-colors group">
              <span className="font-mono text-sm text-signal-dim">{s.n}</span>
              <h3 className="font-display text-xl font-semibold text-paper mt-4">{s.title}</h3>
              <p className="mt-2 text-sm text-paper-dim leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
