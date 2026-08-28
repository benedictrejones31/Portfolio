import { projects } from "@/lib/data";

function GithubButton({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-md border border-border bg-surface2 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-ink transition-colors hover:border-amber hover:text-amber"
    >
      <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
        0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01
        1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
        0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68
        0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82
        2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48
        0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
      View on GitHub
    </a>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-eyebrow mb-3">03 · Featured Work</p>
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Systems that shipped, not just notebooks
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Flagship builds spanning document forgery detection, medical CV, hybrid vision architectures, and offline LLM retrieval.
        </p>

        <div className="mt-12 flex flex-col gap-6">
          {featured.map((p, i) => (
            <div
              key={p.id}
              className="card-hover grid grid-cols-1 gap-6 rounded-lg border border-border bg-surface p-8 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-10"
            >
              <div className="font-mono text-xs text-faint lg:pt-1">
                IMG_{String(i + 1).padStart(3, "0")}
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-teal">{p.category}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">{p.title}</h3>
                <p className="mt-3 text-muted">{p.summary}</p>
                <ul className="mt-4 space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span key={t} className="tag-chip">
                      {t}
                    </span>
                  ))}
                </div>
                {p.githubUrl && (
                  <div className="mt-5">
                    <GithubButton url={p.githubUrl} />
                  </div>
                )}
              </div>
              <div className="flex flex-row items-center gap-2 lg:flex-col lg:items-end lg:text-right">
                <p className="font-display text-lg font-semibold text-amber">{p.metric.value}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-faint">{p.metric.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <p className="section-eyebrow mb-6">Also shipped</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {rest.map((p) => (
              <div
                key={p.id}
                className="card-hover flex flex-col rounded-lg border border-border bg-surface2 p-6"
              >
                <p className="font-mono text-[11px] uppercase tracking-widest text-teal">{p.category}</p>
                <h4 className="mt-2 font-display text-lg font-semibold text-ink">{p.title}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tools.slice(0, 4).map((t) => (
                    <span key={t} className="tag-chip">
                      {t}
                    </span>
                  ))}
                </div>
                {p.githubUrl && (
                  <div className="mt-4">
                    <GithubButton url={p.githubUrl} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
