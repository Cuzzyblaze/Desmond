import { Globe, LayoutDashboard, Workflow, Filter, ShoppingCart, Layers } from 'lucide-react';

const services = [
  {
    icon: Globe,
    name: 'Websites',
    description: 'Modern, responsive websites designed around business goals, branding and user experience.',
  },
  {
    icon: LayoutDashboard,
    name: 'Web Applications',
    description: 'Custom web applications, dashboards, portals and database-driven systems.',
  },
  {
    icon: Workflow,
    name: 'Business Automation',
    description: 'Automating repetitive workflows and processes to reduce manual work.',
  },
  {
    icon: Filter,
    name: 'Sales Funnels',
    description: 'Landing pages, lead capture systems and conversion-focused sales funnels.',
  },
  {
    icon: ShoppingCart,
    name: 'E-commerce Platforms',
    description: 'Online stores, payment integrations, product systems and customer experiences.',
  },
  {
    icon: Layers,
    name: 'Digital Platforms',
    description: 'Learning platforms, membership systems, marketplaces and specialized business platforms.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 border-t border-ink-border">
      <div className="max-w-content mx-auto section-pad">
        <div className="mb-14 max-w-lg">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper">What I Build</h2>
          <p className="mt-3 text-paper-dim">
            Practical digital systems, matched to the shape of the problem — not a fixed menu of templates.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, name, description }) => (
            <div
              key={name}
              className="group rounded-2xl border border-ink-border bg-ink-card p-7 hover:border-signal/50 transition-colors"
            >
              <Icon size={22} className="text-signal-dim group-hover:text-signal transition-colors" strokeWidth={1.6} />
              <h3 className="font-display text-lg font-semibold text-paper mt-5">{name}</h3>
              <p className="mt-2 text-sm text-paper-dim leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
