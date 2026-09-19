import Reveal from "@/components/reveal";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/faysal-alam-834b4326b/" },
  { label: "GitHub", href: "https://github.com/SHAYANFAYSAL10" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-navy-700 bg-navy-800/50 px-6 py-16 text-center sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 animate-float rounded-full bg-accent/15 blur-3xl"
            />

            <div className="relative">
              <p className="font-mono text-sm tracking-[0.25em] text-accent">
                04. WHAT&apos;S NEXT?
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
                Let&apos;s work together
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                I&apos;m always interested in discussing software engineering
                opportunities, interesting projects, and challenging technical
                problems.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:YOUR_EMAIL_HERE"
                  className="rounded-md bg-accent px-8 py-3.5 text-sm font-semibold text-navy-900 shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:shadow-accent/40"
                >
                  Say Hello
                </a>

                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-md border border-navy-700 px-6 py-3.5 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
                  >
                    {link.label}
                    <span className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                ))}
              </div>

              <a
                href="#top"
                className="mt-8 inline-block text-sm text-slate-500 transition hover:text-accent"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
