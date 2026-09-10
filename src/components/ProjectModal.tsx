import { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCover from './ProjectCover';

export default function ProjectModal({ slug, onClose }: { slug: string | null; onClose: () => void }) {
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    document.body.style.overflow = project ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} case study`}
      className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-sm overflow-y-auto"
    >
      <div className="max-w-content mx-auto section-pad py-10 md:py-16">
        <button
          onClick={onClose}
          aria-label="Close case study"
          className="fixed top-6 right-6 md:right-10 z-10 p-2.5 rounded-full bg-ink-card border border-ink-border text-paper hover:border-signal transition-colors"
        >
          <X size={18} />
        </button>

        <span className="font-mono text-[11px] uppercase tracking-wide text-signal-dim">
          {project.categoryLabel}
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper mt-3 max-w-2xl text-balance">
          {project.tagline}
        </h2>

        <div className="rounded-2xl overflow-hidden border border-ink-border mt-10 aspect-[16/9]">
          <ProjectCover project={project} />
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          <div className="md:col-span-2 space-y-10">
            <div>
              <h3 className="font-display text-lg font-semibold text-paper mb-3">Overview</h3>
              <p className="text-paper-dim leading-relaxed">{project.description}</p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-paper mb-3">The Problem</h3>
              <p className="text-paper-dim leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-paper mb-3">The Solution</h3>
              <p className="text-paper-dim leading-relaxed">{project.solution}</p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-paper mb-3">Key Features</h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {project.features.map((f) => (
                  <li key={f} className="text-paper-dim text-sm flex gap-2 before:content-['—'] before:text-signal-dim">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-paper mb-3">Project Outcome</h3>
              <p className="text-paper-dim leading-relaxed">{project.outcome}</p>
            </div>
          </div>

          <aside className="space-y-8">
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-wide text-paper-dim mb-2">My Role</h4>
              <p className="text-paper text-sm leading-relaxed">{project.role}</p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-wide text-paper-dim mb-2">
                Technology / Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-1 rounded-md bg-ink-soft text-paper-dim border border-ink-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-medium text-paper hover:bg-signal-glow transition-colors"
              >
                Visit Project <ArrowUpRight size={15} />
              </a>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
