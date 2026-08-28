import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-eyebrow mb-3">06 · Track Record</p>
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Achievements
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="flex items-start gap-4 rounded-lg border border-border bg-surface p-6"
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal" />
              <div>
                <p className="font-medium text-ink">{a.title}</p>
                <p className="mt-1 text-sm text-muted">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
