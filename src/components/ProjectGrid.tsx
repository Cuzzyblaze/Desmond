import { useMemo, useState } from 'react';
import { categoryFilters, projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<typeof categoryFilters[number]>('All');
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.categories.includes(activeFilter as any));
  }, [activeFilter]);

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-content mx-auto section-pad">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper">Selected Work</h2>
            <p className="mt-3 text-paper-dim max-w-md">
              A selection of digital products, platforms and systems I've designed and built.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categoryFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                activeFilter === f
                  ? 'bg-signal text-paper border-signal'
                  : 'border-ink-border text-paper-dim hover:border-signal/60 hover:text-paper'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={i === 0 && activeFilter === 'All'}
              onOpen={setOpenSlug}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-paper-dim text-sm py-16 text-center">No projects in this category yet.</p>
        )}
      </div>

      <ProjectModal slug={openSlug} onClose={() => setOpenSlug(null)} />
    </section>
  );
}
