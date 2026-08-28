import { profile } from "@/lib/data";
import ContactForm from "./ContactForm";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: "+91-9500870696", href: "tel:+919500870696" },
  { label: "GitHub", value: "benedictrejones31", href: profile.github },
  { label: "LinkedIn", value: "W-benedict-rejones", href: profile.linkedin },
  { label: "LeetCode", value: "benedictrejones", href: profile.leetcode }
  
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-eyebrow mb-3">07 · Contact</p>
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Let&apos;s build something that ships
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          I&apos;m a fresher actively looking for full-time AI/ML and software roles, and open to freelance
          web, ML, and automation projects. Send a message below or reach out directly — recruiters and
          potential clients both welcome.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />

          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="card-hover flex items-center justify-between rounded-lg border border-border bg-surface px-6 py-5"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-faint">{l.label}</p>
                  <p className="mt-1 text-ink">{l.value}</p>
                </div>
                <span className="font-mono text-amber">↗</span>
              </a>
            ))}
            <div className="rounded-lg border border-amber/30 bg-amber-soft px-6 py-5">
              <p className="font-mono text-[11px] uppercase tracking-widest text-amber">Available for</p>
              <p className="mt-2 text-sm text-ink">
                Full-time AI/ML & software roles, plus freelance web development, ML deployment, AI agents,
                and automation projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
