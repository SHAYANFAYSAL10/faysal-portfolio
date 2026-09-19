import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="group relative h-full overflow-hidden rounded-xl border border-navy-700 bg-navy-800/50 p-7 transition duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-9 w-9 text-accent"
          >
            <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
          </svg>

          <span className="font-mono text-sm text-slate-600 transition group-hover:text-accent/70">
            {String(index).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-6 text-xl font-semibold text-slate-100 transition group-hover:text-accent">
          {project.title}
        </h3>

        <p className="mt-4 flex-1 leading-7 text-slate-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="font-mono text-xs text-slate-500">
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
