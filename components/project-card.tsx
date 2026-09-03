import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-slate-800 p-6 transition hover:border-slate-600">
      <h3 className="text-xl font-semibold text-slate-100">
        {project.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}