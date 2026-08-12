import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Download, Eye, FileText } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ReviewShowcase } from "@/components/site/ReviewShowcase";
import { PORTFOLIO, PORTFOLIO_CATEGORIES } from "@/content/site";
import { cn } from "@/lib/utils";

import { AUTHOR_PERSON, DEFAULT_OG_IMAGE, ORGANIZATION_SCHEMA, SITE_URL, WEBSITE_SCHEMA, jsonLd, pageHead, webPageSchema } from "@/lib/seo";
export const Route = createFileRoute("/portfolio")({
  head: () => {
    const head = pageHead({
      title: "Medical Writing Portfolio — 24 Samples | Dr Zee",
      description:
        "Browse 24 physician-authored medical writing samples across patient education, HCP articles, paediatrics, medical SEO, drug monographs, evidence reviews, case studies, and white papers.",
      path: "/portfolio",
      keywords:
        "medical writing portfolio, paediatric writing samples, patient education samples, clinical article samples, medical SEO portfolio",
    });
    return {
      ...head,
      scripts: [
        jsonLd({
          ...webPageSchema({
            title: "Medical Writing Portfolio — 24 Samples | Dr Zee",
            description:
              "A curated portfolio of physician-authored samples for healthcare, pharmaceutical, med-comms, and digital health clients.",
            path: "/portfolio",
            type: "CollectionPage",
          }),
          mainEntity: {
            "@type": "ItemList",
            name: "Dr Zee medical writing samples",
            numberOfItems: PORTFOLIO.length,
            itemListElement: PORTFOLIO.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.title,
              description: item.blurb,
            })),
          },
          author: { "@id": `${SITE_URL}/about#person` },
        }),
      ],
    }
  },
  component: Portfolio,
});

function renderMarkdown(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[][] = [];
  let key = 0;

  function flushTable() {
    if (tableRows.length === 0) return;
    const headers = tableRows[0] ?? [];
    const body = tableRows.slice(2);
    elements.push(
      <div key={key++} className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th
                  key={i}
                  className="border-b border-border/60 px-3 py-2 text-left font-semibold"
                >
                  {h.trim()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td key={ci} className="border-b border-border/40 px-3 py-2 text-muted-foreground">
                    {cell.trim()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>,
    );
    tableRows = [];
    inTable = false;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i] ?? "";

    if (line.startsWith("|")) {
      inTable = true;
      const cells = line
        .split("|")
        .filter((c) => c.trim() !== "");
      tableRows.push(cells);
      continue;
    }

    if (inTable) flushTable();

    if (line.startsWith("## ")) {
      elements.push(
        <h3 key={key++} className="mt-8 mb-3 font-display text-xl leading-snug">
          {line.replace("## ", "")}
        </h3>,
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h4 key={key++} className="mt-6 mb-2 text-lg font-semibold">
          {line.replace("### ", "")}
        </h4>,
      );
    } else if (line.trim() === "") {
      continue;
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [line.replace("- ", "")];
      while (i + 1 < lines.length && (lines[i + 1] ?? "").startsWith("- ")) {
        i++;
        listItems.push((lines[i] ?? "").replace("- ", ""));
      }
      elements.push(
        <ul key={key++} className="my-3 grid gap-2">
          {listItems.map((item, j) => (
            <li key={j} className="flex gap-2 text-sm text-muted-foreground">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ul>,
      );
    } else if (/^\d+\.\s/.test(line)) {
      const listItems: string[] = [line.replace(/^\d+\.\s/, "")];
      while (i + 1 < lines.length && /^\d+\.\s/.test(lines[i + 1] ?? "")) {
        i++;
        listItems.push((lines[i] ?? "").replace(/^\d+\.\s/, ""));
      }
      elements.push(
        <ol key={key++} className="my-3 grid gap-2 list-decimal list-inside">
          {listItems.map((item, j) => (
            <li key={j} className="text-sm text-muted-foreground">
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ol>,
      );
    } else {
      elements.push(
        <p key={key++} className="my-3 text-sm leading-relaxed text-muted-foreground">
          <span dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
        </p>,
      );
    }
  }

  if (inTable) flushTable();
  return elements;
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const items = filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-card/30">
        <div className="pointer-events-none absolute inset-0 premium-grid opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-6">
          <Reveal>
            <p className="eyebrow">Portfolio</p>
            <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl leading-[0.98] md:text-6xl">
              Work samples, grouped by who has to read them.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Explore 24 original demonstration samples across eight medical writing categories. Client work under NDA is described without identifying details; downloadable deliverables are available on request.
            </p>
            <div className="mt-7 max-w-2xl rounded-2xl border border-border/70 bg-background/70 p-5 text-sm leading-relaxed text-muted-foreground shadow-[0_16px_40px_-28px_oklch(0.18_0.04_250_/_0.35)] backdrop-blur-xl">
              <p>
                <strong className="text-foreground">Authorship & clinical review:</strong> Every sample is written for this portfolio by Dr. Zeeshan Islam, MBBS, MCPS (Paediatrics), and structured for the stated audience. Clinical claims are framed against current guidance or primary literature; these demonstration pieces are for professional review and are not personal medical advice.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ReviewShowcase />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20 lg:px-6">
        <Reveal>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter portfolio">
            {["All", ...PORTFOLIO_CATEGORIES].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={cn(
                  "min-h-11 rounded-full border px-4 text-xs font-semibold transition-all",
                  filter === c
                    ? "border-transparent bg-primary text-primary-foreground"
                    : "border-border/80 bg-card/70 text-muted-foreground hover:-translate-y-0.5 hover:border-accent hover:bg-secondary hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.05}>
              <article className="group flex h-full flex-col rounded-2xl glass lift p-7">
                <div className="flex items-center justify-between gap-4"><span className="eyebrow">{p.category}</span><span className="font-display text-xl text-brass">{String(i + 1).padStart(2, "0")}</span></div>
                <h2 className="mt-3 text-xl leading-snug">{p.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                    Author: Dr. Zeeshan Islam, MBBS, MCPS (Paediatrics) · Physician-led clinical review
                  </p>

                {(p.preview || p.fullContent) && (
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => setExpanded(expanded === p.title ? null : p.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                      aria-expanded={expanded === p.title}
                    >
                      <Eye className="size-3.5" aria-hidden />
                      {expanded === p.title
                        ? "Hide sample"
                        : p.fullContent
                          ? "Read full sample"
                          : "Read preview"}
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
                        {p.fullContent ? (
                          <div className="rounded-lg border border-border/60 bg-muted/40 p-5">
                            {renderMarkdown(p.fullContent)}
                          </div>
                        ) : (
                          <p className="rounded-lg border border-border/60 bg-muted/40 p-4 text-sm leading-relaxed text-muted-foreground">
                            {p.preview}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-7 flex items-center justify-between border-t border-border/60 pt-5 text-xs text-muted-foreground">
                  <span>{p.audience}</span>
                  <span className="inline-flex items-center gap-1.5">
                    {p.fullContent ? (
                      <>
                        <FileText className="size-3.5" aria-hidden /> Full sample above
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
