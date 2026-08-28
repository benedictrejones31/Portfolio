import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-grid bg-grid pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(242,184,75,0.08),_transparent_60%)]" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fadeUp opacity-0 [animation-delay:0.05s]">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber-soft px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-amber">
              <span className="h-1.5 w-1.5 rounded-full bg-amber animate-blink" />
              {profile.status.fresher}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal-soft px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-teal">
              {profile.status.availability}
            </span>
          </div>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-sm text-teal">{profile.role}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.tagline}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-md bg-amber px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-bg transition-transform hover:scale-[1.03]"
            >
              Hire Me
            </a>
            <a
              href="#work"
              className="rounded-md border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-teal hover:text-teal"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-amber hover:text-amber"
            >
              Work With Me
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-faint">
            <span>{profile.location}</span>
            <span className="text-border">|</span>
            <span>Open to full-time roles & freelance projects</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs animate-fadeUp opacity-0 [animation-delay:0.25s] md:max-w-sm">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-border bg-surface">
            <Image
              src="/profile.jpg"
              alt="Portrait of Benedict Rejones"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 320px, 384px"
            />
            <div className="pointer-events-none absolute inset-3 rounded-sm border-2 border-amber/80" />
            <div className="pointer-events-none absolute left-3 top-3 -translate-y-full pt-2">
              <span className="rounded-sm bg-amber px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-bg">
                status: available
              </span>
            </div>
            <div className="pointer-events-none absolute bottom-3 right-3 rounded-sm bg-bg/80 px-2 py-1 font-mono text-[10px] text-teal backdrop-blur-sm">
              class of 2026
            </div>
            <div className="pointer-events-none absolute inset-x-3 top-3 h-px bg-amber/70 shadow-[0_0_12px_2px_rgba(242,184,75,0.5)] animate-scan" />
          </div>
          <p className="mt-4 text-center font-mono text-[11px] text-faint">
            status.py — candidate.available_for(&quot;fulltime&quot;, &quot;freelance&quot;)
          </p>
        </div>
      </div>
    </section>
  );
}
