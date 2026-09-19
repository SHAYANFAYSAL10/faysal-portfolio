import { projects } from "@/data/projects";
import ProjectCard from "@/components/project-card";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="03" eyebrow="PROJECTS" title="Things I've worked on" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 120} className="h-full">
              <ProjectCard project={project} index={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
