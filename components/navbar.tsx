import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide"
        >
          Faysal Alam
        </Link>

        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}