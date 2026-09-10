import { Project } from '../data/projects';

/**
 * Renders the project's real screenshot when one is supplied via
 * `coverImage`. Otherwise renders a tasteful, deterministic placeholder —
 * never a fabricated screenshot.
 */
export default function ProjectCover({ project, className = '' }: { project: Project; className?: string }) {
  if (project.coverImage) {
    return (
      <img
        src={project.coverImage}
        alt={`${project.name} preview`}
        loading="lazy"
        className={`w-full h-full object-cover ${className}`}
      />
    );
  }

  const initials = project.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

  return (
    <div
      className={`w-full h-full grid-backdrop bg-ink-soft flex items-center justify-center relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-signal/10 via-transparent to-transparent" />
      <span className="font-display text-5xl font-semibold text-paper/15 relative">{initials}</span>
      <span className="absolute bottom-4 left-4 font-mono text-[11px] text-paper-dim/70">
        preview unavailable
      </span>
    </div>
  );
}
