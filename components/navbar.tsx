"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 20);
      setProgress(max > 0 ? window.scrollY / max : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-navy-700/60 bg-navy-900/80 shadow-lg shadow-navy-950/40 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group flex items-center gap-2 text-lg font-semibold tracking-wide text-slate-100"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/50 font-mono text-sm text-accent transition group-hover:rotate-6 group-hover:bg-accent-soft">
            FA
          </span>
          <span className="hidden sm:inline">Faysal Alam</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative rounded-md px-4 py-2 text-sm transition-colors hover:text-accent ${
                active === item.href ? "text-accent" : "text-slate-300"
              }`}
            >
              <span className="mr-1 font-mono text-xs text-accent/70">0{i + 1}.</span>
              {item.label}
              <span
                className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300 ${
                  active === item.href ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative h-10 w-10 md:hidden"
        >
          <span
            className={`absolute left-2 right-2 h-0.5 rounded bg-accent transition-all duration-300 ${
              menuOpen ? "top-1/2 rotate-45" : "top-3"
            }`}
          />
          <span
            className={`absolute left-2 right-2 top-1/2 h-0.5 rounded bg-accent transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-2 right-2 h-0.5 rounded bg-accent transition-all duration-300 ${
              menuOpen ? "top-1/2 -rotate-45" : "top-7"
            }`}
          />
        </button>
      </nav>

      <div
        inert={!menuOpen}
        className={`grid overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-1 px-6 pb-6">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-3 text-slate-300 transition hover:bg-navy-800 hover:text-accent"
              >
                <span className="mr-2 font-mono text-xs text-accent">0{i + 1}.</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-linear-to-r from-accent via-sky-400 to-accent"
        style={{ transform: `scaleX(${progress})` }}
      />
    </header>
  );
}
