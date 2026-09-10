const items = [
  '5+ Years Experience',
  'Real-World Projects',
  'Web · Software · Automation',
  'Business-Focused Development',
];

export default function CredibilityStrip() {
  return (
    <div className="border-y border-ink-border">
      <div className="max-w-content mx-auto section-pad py-6 flex flex-wrap gap-x-10 gap-y-3 justify-between text-sm font-mono text-paper-dim">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
