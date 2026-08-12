import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, FileText, Lock, Maximize2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ReviewDownload } from "@/components/site/ReviewDownload";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LITERATURE_REVIEWS, type ReviewSample } from "@/content/reviews";

const COVER_STYLES = [
  "from-primary via-primary/85 to-accent/80 text-primary-foreground",
  "from-ink via-primary/80 to-brass/80 text-ink-foreground",
  "from-secondary via-accent/45 to-background text-foreground",
] as const;

function ReviewCover({ review, index }: { review: ReviewSample; index: number }) {
  const style = COVER_STYLES[index % COVER_STYLES.length];
  return (
    <div className={`relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br ${style}`}>
      <div className="pointer-events-none absolute inset-0 premium-grid opacity-20" aria-hidden />
      <div className="absolute inset-x-6 top-6 flex items-center justify-between">
        <span className="text-[0.58rem] font-bold uppercase tracking-[0.2em] opacity-75">DrZeeWrites</span>
        <span className="font-display text-xl opacity-80">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="absolute inset-x-6 bottom-7">
        <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] opacity-70">Literature review</span>
        <p className="mt-3 max-w-[13rem] font-display text-2xl leading-[1.02]">{review.shortTitle}</p>
        <div className="mt-6 h-px w-12 bg-current opacity-50" />
        <p className="mt-3 text-xs opacity-75">Physician-authored · {review.pages} pages</p>
      </div>
    </div>
  );
}

export function ReviewShowcase() {
  const [active, setActive] = useState<ReviewSample | null>(null);

  const activeIndex = active ? Math.max(0, LITERATURE_REVIEWS.findIndex((review) => review.slug === active.slug)) : 0;

  return (
    <section id="literature-reviews" className="relative mx-auto max-w-6xl px-5 py-20 md:py-24 lg:px-6">
      <Reveal>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Featured samples · Literature reviews</p>
            <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl leading-[1.02] md:text-5xl">
              Three full reviews you can read end to end.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Physician-authored, referenced to primary literature and current guidelines. Tap a cover
            for a quick preview, or open the full review page.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {LITERATURE_REVIEWS.map((r, i) => (
          <Reveal key={r.slug} delay={i * 0.07}>
            <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] glass lift">
              <button
                type="button"
                onClick={() => setActive(r)}
                className="relative block w-full overflow-hidden border-b border-border/60 text-left"
                aria-label={`Preview ${r.title}`}
              >
                <ReviewCover review={r} index={i} />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/90 to-transparent" />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-[11px] tracking-wide text-muted-foreground backdrop-blur">
                  <FileText className="size-3" aria-hidden /> PDF · {r.pages} pages · {r.span}
                </span>
                <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-[11px] text-muted-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  {r.gated ? (
                    <>
                      <Lock className="size-3" aria-hidden /> Premium
                    </>
                  ) : (
                    <>
                      <Maximize2 className="size-3" aria-hidden /> Preview
                    </>
                  )}
                </span>
              </button>

                <div className="flex flex-1 flex-col p-7">
                <h3 className="text-lg leading-snug">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.summary}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border/70 bg-secondary/50 px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">{r.audience}</p>

                <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-border/60 pt-5 text-sm">
                  <Link
                    to="/reviews/$slug"
                    params={{ slug: r.slug }}
                    className="glow-cta inline-flex min-h-11 items-center gap-1.5 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground"
                  >
                    Read review <ArrowUpRight className="size-4" aria-hidden />
                  </Link>
                  <ReviewDownload review={r} variant="outline" label={r.gated ? "Unlock" : "Download"} />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
          {active && (
            <>
              <DialogHeader>
                <DialogTitle className="text-balance font-display text-2xl leading-snug">
                  {active.title}
                </DialogTitle>
                <DialogDescription>{active.audience}</DialogDescription>
              </DialogHeader>

              <div className="mt-2 grid gap-6 sm:grid-cols-[minmax(0,220px)_1fr]">
                <div className="overflow-hidden rounded-xl border border-border/60">
                  <ReviewCover review={active} index={activeIndex} />
                </div>
                <div>
                  <dl className="grid grid-cols-3 gap-3 text-center text-xs">
                    <div className="rounded-lg border border-border/60 p-2.5">
                      <dt className="text-muted-foreground">Pages</dt>
                      <dd className="mt-1 text-sm">{active.pages}</dd>
                    </div>
                    <div className="rounded-lg border border-border/60 p-2.5">
                      <dt className="text-muted-foreground">Evidence</dt>
                      <dd className="mt-1 text-sm">{active.span}</dd>
                    </div>
                    <div className="rounded-lg border border-border/60 p-2.5">
                      <dt className="text-muted-foreground">Access</dt>
                      <dd className="mt-1 text-sm">{active.gated ? "Premium" : "Open"}</dd>
                    </div>
                  </dl>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {active.summary}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {active.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to="/reviews/$slug"
                      params={{ slug: active.slug }}
                      onClick={() => setActive(null)}
                      className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-primary px-4 text-sm text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Full review page <ArrowUpRight className="size-4" aria-hidden />
                    </Link>
                    <ReviewDownload review={active} variant="outline" />
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
