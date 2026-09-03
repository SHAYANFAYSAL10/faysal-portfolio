import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium tracking-[0.25em] text-slate-400">
            EXPERIENCE
          </p>

          <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
            Where I&apos;ve worked
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.role}`}>
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-slate-100">
                  {experience.role}
                </h3>

                <p className="text-slate-400">
                  {experience.company}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {experience.startDate} — {experience.endDate}
                </p>
              </div>

              <div className="mt-5">
                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex gap-3 leading-7 text-slate-400"
                    >
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}