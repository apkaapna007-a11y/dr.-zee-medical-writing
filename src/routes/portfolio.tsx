import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Download, Eye, FileText } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ReviewShowcase } from "@/components/site/ReviewShowcase";
import { PORTFOLIO, PORTFOLIO_CATEGORIES } from "@/content/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Medical Writing Samples | DrZeeWrites" },
      {
        name: "description",
        content:
          "Writing samples across patient education, HCP articles, medical blogs, white papers, drug monographs, literature reviews and case studies.",
      },
      { property: "og:title", content: "Portfolio — Medical Writing Samples" },
      {
        property: "og:description",
        content: "Physician-authored samples across eight medical content categories.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const items = filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter);

  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">Portfolio</p>
            <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl leading-[1.1] md:text-5xl">
              Work samples, grouped by who has to read them.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Full samples and downloadable PDFs are available on request; client work under NDA is
              described without identifying details.
            </p>
          </Reveal>
        </div>
      </section>

      <ReviewShowcase />

      <section className="mx-auto max-w-6xl px-5 py-16">

        <Reveal>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter portfolio">
            {["All", ...PORTFOLIO_CATEGORIES].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={cn(
                  "min-h-11 rounded-full border px-4 text-sm transition-colors",
                  filter === c
                    ? "border-transparent bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-accent hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.05}>
              <article className="flex h-full flex-col rounded-xl glass lift p-6">
                <span className="eyebrow">{p.category}</span>
                <h2 className="mt-3 text-xl leading-snug">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>

                {p.preview && (
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => setExpanded(expanded === p.title ? null : p.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                      aria-expanded={expanded === p.title}
                    >
                      <Eye className="size-3.5" aria-hidden />
                      {expanded === p.title ? "Hide preview" : "Read preview"}
                      <ChevronDown
                        className={cn(
                          "size-3.5 transition-transform",
                          expanded === p.title && "rotate-180",
                        )}
                        aria-hidden
                      />
                    </button>
                    <div
                      className={cn(
                        "grid transition-all duration-300 ease-out",
                        expanded === p.title
                          ? "mt-3 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="rounded-lg border border-border/60 bg-muted/40 p-4 text-sm leading-relaxed text-muted-foreground">
                          {p.preview}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
                  <span>{p.audience}</span>
                  <span className="inline-flex items-center gap-1.5">
                    {p.category === "Downloadable PDFs" ? (
                      <>
                        <Download className="size-3.5" aria-hidden /> PDF on request
                      </>
                    ) : (
                      <>
                        <FileText className="size-3.5" aria-hidden /> Sample on request
                      </>
                    )}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {items.length === 0 && (
          <p className="mt-10 text-sm text-muted-foreground">
            Samples in this category are available on request.
          </p>
        )}
      </section>
    </>
  );
}
