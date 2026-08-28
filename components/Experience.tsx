import { certifications, education } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-eyebrow mb-3">04 · Background</p>
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Education &amp; Certifications
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-lg border border-border bg-surface p-8">
            <p className="font-mono text-[11px] uppercase tracking-widest text-teal">{education.period}</p>
            <h3 className="mt-2 font-display text-xl font-semibold text-ink">{education.degree}</h3>
            <p className="mt-1 text-muted">{education.school}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-md border border-border bg-surface2 px-3 py-2">
                <span className="font-mono text-xs text-faint">gpa</span>
                <span className="font-mono text-sm font-medium text-amber">{education.gpa}</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber-soft px-3 py-2">
                <span className="font-mono text-xs text-amber">{education.note}</span>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-faint">
              certifications.log
            </p>
            <ul className="flex flex-col divide-y divide-border rounded-lg border border-border bg-surface">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-start justify-between gap-6 px-6 py-4">
                  <span className="text-sm text-ink">{c.name}</span>
                  <span className="shrink-0 font-mono text-[11px] uppercase tracking-wide text-faint">
                    {c.issuer}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
