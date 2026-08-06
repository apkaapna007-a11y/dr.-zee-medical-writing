import { ArrowUpRight, Download, FileText } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { LITERATURE_REVIEWS } from "@/content/reviews";

export function ReviewShowcase() {
  return (
    <section id="literature-reviews" className="relative mx-auto max-w-6xl px-5 py-20">
      <Reveal>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Featured samples · Literature reviews</p>
            <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl leading-[1.15] md:text-4xl">
              Three full reviews you can read end to end.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Physician-authored, referenced to primary literature and current guidelines. Open any
            PDF — nothing is gated.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {LITERATURE_REVIEWS.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.07}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl glass lift">
              <a
                href={r.file}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block overflow-hidden border-b border-border/60"
                aria-label={`Open ${r.title} (PDF, ${r.pages} pages)`}
              >
                <img
                  src={r.cover}
                  alt={`Cover page of the literature review: ${r.title}`}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/90 to-transparent" />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-[11px] tracking-wide text-muted-foreground backdrop-blur">
                  <FileText className="size-3" aria-hidden /> PDF · {r.pages} pages · {r.span}
                </span>
              </a>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg leading-snug">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.summary}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border/70 px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">{r.audience}</p>

                <div className="mt-auto flex items-center gap-3 border-t border-border/60 pt-5 text-sm">
                  <a
                    href={r.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-primary px-4 text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Read review <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                  <a
                    href={r.file}
                    download
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border px-4 text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                  >
                    <Download className="size-4" aria-hidden /> Download
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
