export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium tracking-[0.25em] text-slate-400">
            ABOUT
          </p>

          <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
            A little about me
          </h2>
        </div>

        <div className="max-w-3xl space-y-5 text-base leading-8 text-slate-400 sm:text-lg">
          <p>
            I&apos;m a Software Engineer focused on building reliable and
            scalable web applications. My primary experience is with PHP,
            Laravel, MySQL, REST APIs, and ProcessMaker 4.
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
        </div>
      </div>
    </section>
  );
}
