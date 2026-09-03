import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium tracking-[0.25em] text-slate-400">
            CONTACT
          </p>

          <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
            Let&apos;s work together
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m always interested in discussing software engineering
            opportunities, interesting projects, and challenging technical
            problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:YOUR_EMAIL_HERE"
              className="rounded-md border border-slate-600 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-slate-300 hover:bg-slate-800"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/faysal-alam-834b4326b/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-600 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-slate-300 hover:bg-slate-800"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/SHAYANFAYSAL10"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-600 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-slate-300 hover:bg-slate-800"
            >
              GitHub
            </a>

            <a
              href="#top"
              className="px-2 py-3 text-sm font-medium text-slate-400 transition hover:text-slate-100"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
