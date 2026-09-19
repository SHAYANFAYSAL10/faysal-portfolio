import { experiences } from "@/data/experience";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="02" eyebrow="EXPERIENCE" title="Where I've worked" />

        <ol className="relative space-y-10 border-l border-navy-700 pl-8 sm:pl-10">
          {experiences.map((experience, i) => (
            <li key={`${experience.company}-${experience.role}`} className="relative">
              <span className="absolute -left-[calc(2rem+7px)] top-7 flex h-3.5 w-3.5 sm:-left-[calc(2.5rem+7px)]">
                {i === 0 && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                )}
                <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-accent bg-navy-900" />
              </span>

              <Reveal delay={i * 120}>
                <article className="rounded-xl border border-navy-700 bg-navy-800/40 p-6 transition duration-300 hover:border-accent/40 hover:bg-navy-800/70 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-100">
                        {experience.role}{" "}
                        <span className="text-accent">@ {experience.company}</span>
                      </h3>
                    </div>

                    <p className="rounded-full border border-navy-700 px-3 py-1 font-mono text-xs text-slate-400">
                      {experience.startDate} — {experience.endDate}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {experience.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex gap-3 leading-7 text-slate-400"
                      >
                        <span className="mt-1 shrink-0 text-accent">▹</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
