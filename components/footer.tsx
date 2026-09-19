export default function Footer() {
  return (
    <footer className="border-t border-navy-800 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} S. M. Faysal Alam</p>
        <p className="font-mono text-xs">
          Built with Next.js, React, TypeScript &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
