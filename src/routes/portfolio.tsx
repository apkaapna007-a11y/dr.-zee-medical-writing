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
      { property: "og:image", content: "https://drzeewrites.com/og-portfolio.png" },
    ],
    links: [{ rel: "canonical", href: "https://drzeewrites.com/portfolio" }],
  }),
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
    const headers = tableRows[0];
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
    const line = lines[i];

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
      while (i + 1 < lines.length && lines[i + 1].startsWith("- ")) {
        i++;
        listItems.push(lines[i].replace("- ", ""));
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
      while (i + 1 < lines.length && /^\d+\.\s/.test(lines[i + 1])) {
        i++;
        listItems.push(lines[i].replace(/^\d+\.\s/, ""));
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
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">Portfolio</p>
            <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl leading-[1.1] md:text-5xl">
              Work samples, grouped by who has to read them.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Full samples and downloadable PDFs are available on request; client work under NDA is
              described without identifying details. Select items include a complete, readable sample.
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

                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
                  <span>{p.audience}</span>
                  <span className="inline-flex items-center gap-1.5">
                    {p.category === "Downloadable PDFs" ? (
                      <>
                        <Download className="size-3.5" aria-hidden /> PDF on request
                      </>
                    ) : p.fullContent ? (
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
