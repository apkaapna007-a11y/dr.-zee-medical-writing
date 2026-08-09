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

export function ReviewShowcase() {
  const [active, setActive] = useState<ReviewSample | null>(null);

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
            Physician-authored, referenced to primary literature and current guidelines. Tap a cover
            for a quick preview, or open the full review page.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {LITERATURE_REVIEWS.map((r, i) => (
          <Reveal key={r.slug} delay={i * 0.07}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl glass lift">
              <button
                type="button"
                onClick={() => setActive(r)}
                className="relative block w-full overflow-hidden border-b border-border/60 text-left"
                aria-label={`Preview ${r.title}`}
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

                <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-border/60 pt-5 text-sm">
                  <Link
                    to="/reviews/$slug"
                    params={{ slug: r.slug }}
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-primary px-4 text-primary-foreground transition-opacity hover:opacity-90"
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
                <img
                  src={active.cover}
                  alt={`Cover page of ${active.title}`}
                  className="w-full rounded-xl border border-border/60 object-cover object-top"
                />
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
