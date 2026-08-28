import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-eyebrow mb-3">05 · Stack</p>
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          What I build with
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div
              key={group}
              className="card-hover rounded-lg border border-border bg-surface p-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-teal">{group}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="tag-chip">
                    {s}
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
