import Reveal from "@/components/reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
}

export default function SectionHeading({ index, eyebrow, title }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14">
      <p className="mb-3 flex items-center gap-3 font-mono text-sm tracking-[0.25em] text-accent">
        <span>{index}.</span>
        <span>{eyebrow}</span>
        <span className="h-px w-16 bg-linear-to-r from-accent/60 to-transparent sm:w-32" />
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}
