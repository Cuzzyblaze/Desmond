const groups = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS'] },
  { title: 'Backend', items: ['PHP', 'Node.js', 'APIs', 'Databases'] },
  { title: 'Platforms', items: ['WordPress', 'WooCommerce', 'Elementor', 'LearnDash'] },
  {
    title: 'Automation',
    items: ['Workflow Automation', 'API Integrations', 'Email Automation', 'Business Process Automation'],
  },
  { title: 'Tools', items: ['Git', 'GitHub', 'Figma', 'Canva', 'AI Development Tools'] },
];

export default function TechStack() {
  return (
    <section className="py-24 md:py-32 border-t border-ink-border">
      <div className="max-w-content mx-auto section-pad">
        <div className="mb-14 max-w-lg">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper">Technologies</h2>
          <p className="mt-3 text-paper-dim">
            Tools used in shipped projects — grouped by where they sit in a build.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="font-mono text-[11px] uppercase tracking-wide text-signal-dim mb-4">
                {g.title}
              </h3>
              <ul className="space-y-2.5">
                {g.items.map((item) => (
                  <li key={item} className="text-sm text-paper-dim">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
