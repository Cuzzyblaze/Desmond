import { ArrowUpRight } from 'lucide-react';
import { Project } from '../data/projects';
import ProjectCover from './ProjectCover';

export default function ProjectCard({
  project,
  featured = false,
  onOpen,
}: {
  project: Project;
  featured?: boolean;
  onOpen: (slug: string) => void;
}) {
  return (
    <article
      className={`group rounded-2xl border border-ink-border bg-ink-card overflow-hidden flex flex-col hover:border-signal/60 transition-colors ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <button
        onClick={() => onOpen(project.slug)}
        className={`relative overflow-hidden ${featured ? 'aspect-[16/8]' : 'aspect-[16/10]'} w-full`}
      >
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]">
          <ProjectCover project={project} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-card via-transparent to-transparent opacity-70" />
      </button>

      <div className="p-6 flex flex-col gap-3 flex-1">
        <span className="font-mono text-[11px] uppercase tracking-wide text-signal-dim">
          {project.categoryLabel}
        </span>
        <h3 className="font-display text-xl font-semibold text-paper">{project.name}</h3>
        <p className="text-sm text-paper-dim leading-relaxed">{project.tagline}</p>

        <div className="flex flex-wrap gap-2 mt-1">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2 py-1 rounded-md bg-ink-soft text-paper-dim border border-ink-border"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 flex items-center gap-5">
          <button
            onClick={() => onOpen(project.slug)}
            className="text-sm font-medium text-paper inline-flex items-center gap-1 hover:text-signal transition-colors"
          >
            Explore Case Study →
          </button>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-paper-dim inline-flex items-center gap-1 hover:text-signal transition-colors"
            >
              View Project <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
