import { projects } from "@/data/projects";
import ProjectCard from "@/components/project-card";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium tracking-[0.25em] text-slate-400">
            PROJECTS
          </p>

          <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
            Things I&apos;ve worked on
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}