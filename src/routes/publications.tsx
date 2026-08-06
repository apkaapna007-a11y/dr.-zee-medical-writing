import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PUBLICATIONS } from "@/content/site";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications & Research Summaries — DrZeeWrites" },
      {
        name: "description",
        content:
          "Published articles, research summaries and forthcoming clinical publications in paediatric medicine and intensive care.",
      },
      { property: "og:title", content: "Publications & Research Summaries" },
      {
        property: "og:description",
        content: "Peer-facing writing and clinical research output from Dr Zee.",
      },
    ],
  }),
  component: Publications,
});

function Publications() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">Publications</p>
            <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl leading-[1.1] md:text-5xl">
              Peer-facing writing and clinical research output.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              This record grows as work moves through submission and review. Items marked in
              preparation are shared once published.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <ol className="grid gap-4">
          {PUBLICATIONS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <li className="rounded-xl glass p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="eyebrow">{p.type}</span>
                  <span className="text-xs text-muted-foreground">{p.year}</span>
                </div>
                <h2 className="mt-3 text-xl leading-snug">{p.title}</h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  {p.summary}
                </p>
                <p className="mt-4 text-xs text-muted-foreground">{p.venue}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  );
}
