export default function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6">
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-5 text-sm font-medium tracking-[0.25em] text-slate-400">
          SOFTWARE ENGINEER
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-100 sm:text-6xl md:text-7xl">
          S. M. Faysal Alam
        </h1>

        <h2 className="mt-4 max-w-3xl text-2xl font-semibold text-slate-400 sm:text-3xl">
          I build reliable software and scalable web applications.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          Software Engineer focused on Laravel, PHP, REST APIs, databases,
          workflow automation, and performance optimization.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-md border border-slate-600 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-slate-300 hover:bg-slate-800"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="rounded-md bg-slate-100 px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-white"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}