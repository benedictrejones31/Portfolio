import { modelCard, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-eyebrow mb-3">01 · About</p>
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Model Card
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Treating a self-summary like the artifact an ML engineer would actually write.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-lg border border-border bg-surface p-8">
            <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-teal">model_card.yaml</span>
              <span className="rounded-full bg-teal-soft px-2 py-1 font-mono text-[10px] uppercase text-teal">
                available
              </span>
            </div>
            <dl className="space-y-5 font-mono text-sm">
              <div>
                <dt className="text-faint">task_type</dt>
                <dd className="mt-1 text-ink">{modelCard.taskType}</dd>
              </div>
              <div>
                <dt className="text-faint">primary_domain</dt>
                <dd className="mt-1 text-ink">{modelCard.primaryDomain}</dd>
              </div>
              <div>
                <dt className="text-faint">intended_use</dt>
                <dd className="mt-1 leading-relaxed text-ink">{modelCard.intendedUse}</dd>
              </div>
              <div>
                <dt className="text-faint">status</dt>
                <dd className="mt-1 leading-relaxed text-ink">{modelCard.limitations}</dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {modelCard.metrics.map((m) => (
                <div
                  key={m.label}
                  className="card-hover rounded-lg border border-border bg-surface p-4"
                >
                  <p className="font-display text-2xl font-semibold text-amber">{m.value}</p>
                  <p className="mt-1 font-mono text-[11px] leading-tight text-faint">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
