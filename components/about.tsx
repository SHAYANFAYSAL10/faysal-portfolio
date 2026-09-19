import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";

const highlights = [
  { label: "Backend", value: "PHP · Laravel · CodeIgniter" },
  { label: "SaaS", value: "Multi-tenancy · stancl/tenancy" },
  { label: "APIs", value: "REST · Laravel Passport · Validation" },
  { label: "Data", value: "MySQL · SQL Server" },
  { label: "Workflow", value: "ProcessMaker 4 · BPMN" },
  { label: "Tools", value: "Docker · Git" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="01" eyebrow="ABOUT" title="A little about me" />

        <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
          <Reveal className="space-y-5 text-base leading-8 text-slate-400 sm:text-lg">
            <p>
              I&apos;m a Software Engineer at Reddot Digital IT with nearly two
              years of experience building{" "}
              <span className="text-accent">secure, fast backends</span> in
              PHP, Laravel and MySQL. I graduated in Computer Science and
              Engineering from RUET.
            </p>

            <p>
              I&apos;ve built a multi-tenant SaaS platform with stancl/tenancy,
              secured APIs with Laravel Passport, extended ProcessMaker 4 BPMN
              workflows, and shipped reporting tools that export large datasets
              to Excel through queues without timeouts. I enjoy finding slow
              queries and N+1 problems and making things faster. Day to day I
              work with Git and Docker.
            </p>

            <p>
              Outside work I keep my problem-solving sharp: I&apos;ve solved{" "}
              <span className="text-accent">385+ problems</span> across
              Codeforces, LeetCode, VJudge and GeeksforGeeks, and competed in
              40+ Codeforces contests.
            </p>
          </Reveal>

          <div className="grid auto-rows-fr gap-3">
            {highlights.map((item, i) => (
              <Reveal key={item.label} delay={i * 100} className="h-full">
                <div className="group flex h-full flex-col justify-center rounded-xl border border-navy-700 bg-navy-800/50 px-5 py-3.5 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-navy-800">
                  <p className="font-mono text-xs tracking-widest text-accent">
                    {item.label.toUpperCase()}
                  </p>
                  <p className="mt-1 text-slate-200">{item.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
