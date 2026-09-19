const focusAreas = ["Laravel", "PHP", "REST APIs", "MySQL", "ProcessMaker 4"];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -left-32 top-1/4 h-96 w-96 animate-float rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-24 bottom-1/4 h-[28rem] w-[28rem] animate-float rounded-full bg-sky-500/10 blur-3xl [animation-delay:-7s]" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl">
        <p className="mb-6 animate-fade-up font-mono text-sm tracking-[0.25em] text-accent [animation-delay:100ms]">
          HI, MY NAME IS
        </p>

        <h1 className="max-w-4xl animate-fade-up text-5xl font-bold tracking-tight text-slate-100 [animation-delay:200ms] sm:text-6xl md:text-7xl">
          S. M. Faysal Alam
        </h1>

        <h2 className="mt-4 max-w-3xl animate-fade-up text-2xl font-semibold leading-tight text-slate-400 [animation-delay:300ms] sm:text-4xl">
          I build{" "}
          <span className="animate-gradient bg-linear-to-r from-accent via-sky-400 to-accent bg-[length:200%_auto] bg-clip-text text-transparent">
            reliable software
          </span>{" "}
          and scalable web applications.
        </h2>

        <p className="mt-6 max-w-2xl animate-fade-up text-base leading-7 text-slate-400 [animation-delay:400ms] sm:text-lg">
          Software Engineer with nearly 2 years of experience building secure,
          fast backends in PHP, Laravel and MySQL, from multi-tenant SaaS
          platforms and REST APIs to reporting tools and ProcessMaker 4
          workflows.
        </p>

        <ul className="mt-8 flex animate-fade-up flex-wrap gap-2 [animation-delay:500ms]">
          {focusAreas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-navy-700 bg-navy-800/60 px-3 py-1 font-mono text-xs text-slate-300"
            >
              {area}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex animate-fade-up flex-wrap gap-4 [animation-delay:600ms]">
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-md bg-accent px-6 py-3 text-sm font-semibold text-navy-900 shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:shadow-accent/40"
          >
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">View My Work</span>
          </a>

          <a
            href="#contact"
            className="rounded-md border border-accent/60 px-6 py-3 text-sm font-semibold text-accent transition hover:-translate-y-0.5 hover:bg-accent-soft"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 animate-fade-up [animation-delay:900ms] sm:block"
      >
        <span className="flex h-10 w-6 justify-center rounded-full border-2 border-slate-500 pt-2 transition hover:border-accent">
          <span className="h-2 w-1 animate-scroll-dot rounded-full bg-accent" />
        </span>
      </a>
    </section>
  );
}
