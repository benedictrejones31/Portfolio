import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-eyebrow mb-3">02 · What I Do</p>
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Hire me full-time or bring me in on a project
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          I work across the AI/ML and web stack — as a full-time engineer or a freelance collaborator.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="card-hover rounded-lg border border-border bg-surface p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-lg font-semibold text-ink">{s.title}</h3>
                <span className="font-mono text-xs text-faint">0{i + 1}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="tag-chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
