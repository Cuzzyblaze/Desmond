const stats = [
  { value: '5+', label: 'Years Building Digital Projects' },
  { value: 'Multiple', label: 'Websites & Digital Platforms' },
  { value: 'Web', label: 'Applications & Automation' },
  { value: 'End-to-End', label: 'Digital Product Development' },
];

export default function Experience() {
  return (
    <section className="py-20 border-t border-ink-border">
      <div className="max-w-content mx-auto section-pad grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-3xl md:text-4xl font-semibold text-paper">{s.value}</div>
            <div className="mt-2 text-sm text-paper-dim leading-snug">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
