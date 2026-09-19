import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";

const highlights = [
  { label: "Backend", value: "PHP · Laravel · CodeIgniter" },
  { label: "Data", value: "MySQL · SQL Server" },
  { label: "Workflow", value: "ProcessMaker 4 · BPMN" },
  { label: "APIs", value: "REST · Auth · Validation" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="01" eyebrow="ABOUT" title="A little about me" />

        <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
          <Reveal className="space-y-5 text-base leading-8 text-slate-400 sm:text-lg">
            <p>
              I&apos;m a Software Engineer focused on building{" "}
              <span className="text-accent">reliable and scalable</span> web
              applications. My primary experience is with PHP, Laravel, MySQL,
              REST APIs, and ProcessMaker 4.
            </p>

            <p>
              I enjoy solving backend problems, improving application
              performance, and building systems that can handle complex
              business requirements. My experience includes workflow
              automation, reporting systems, secure APIs, and large-scale
              Excel exports.
            </p>

            <p>
              I also have a strong foundation in data structures and algorithms,
              with experience solving problems across multiple competitive
              programming platforms.
            </p>
          </Reveal>

          <div className="grid content-start gap-4">
            {highlights.map((item, i) => (
              <Reveal key={item.label} delay={i * 100}>
                <div className="group rounded-xl border border-navy-700 bg-navy-800/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-navy-800">
                  <p className="font-mono text-xs tracking-widest text-accent">
                    {item.label.toUpperCase()}
                  </p>
                  <p className="mt-2 text-slate-200">{item.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
