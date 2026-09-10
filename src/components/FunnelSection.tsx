import { ArrowDown } from 'lucide-react';

const stages = ['Visitor', 'Landing Page', 'Lead Capture', 'Follow-up', 'Offer', 'Payment', 'Customer', 'Retention'];

export default function FunnelSection() {
  return (
    <section className="py-24 md:py-32 border-t border-ink-border">
      <div className="max-w-content mx-auto section-pad grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper text-balance">
            I don't just build websites. I build digital journeys.
          </h2>
          <p className="mt-5 text-paper-dim leading-relaxed max-w-md">
            A website is often one piece of a larger system. A visitor becomes a lead,
            a lead becomes a customer, and a customer stays a customer — each step
            designed with the ones before and after it in mind.
          </p>
        </div>

        <div className="rounded-2xl border border-ink-border bg-ink-card p-8">
          <div className="flex flex-col items-center">
            {stages.map((stage, i) => (
              <div key={stage} className="flex flex-col items-center">
                <div className="px-5 py-2.5 rounded-full border border-ink-border bg-ink text-sm text-paper font-mono">
                  {stage}
                </div>
                {i < stages.length - 1 && <ArrowDown size={16} className="my-2 text-signal-dim" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
