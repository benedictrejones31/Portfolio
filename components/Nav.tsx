"use client";

import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "about" },
  { href: "#services", label: "services" },
  { href: "#work", label: "work" },
  { href: "#experience", label: "Education" },
  { href: "#skills", label: "skills" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-amber animate-blink" />
          <span className="font-mono text-sm tracking-tight text-ink">
            {profile.name.toLowerCase().replace(" ", "_")}
          </span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-amber"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-md border border-border px-4 py-2 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-amber hover:text-amber"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
