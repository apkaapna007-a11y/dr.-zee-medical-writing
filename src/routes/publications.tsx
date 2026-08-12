import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PUBLICATIONS } from "@/content/site";

import { AUTHOR_PERSON, DEFAULT_OG_IMAGE, ORGANIZATION_SCHEMA, SITE_URL, WEBSITE_SCHEMA, jsonLd, pageHead, webPageSchema } from "@/lib/seo";
export const Route = createFileRoute("/publications")({
  head: () => {
    const head = pageHead({
      title: "Publications & Research — Dr Zee, Physician Writer",
      description:
        "Research publications and evidence summaries from Dr. Zeeshan Islam, covering paediatric medicine, bronchiolitis, and outpatient therapeutics.",
      path: "/publications",
      keywords: "paediatric medical publications, clinical research summaries, physician author, paediatric medicine",
    });
    return {
      ...head,
      scripts: [
        jsonLd({
          ...webPageSchema({
            title: "Publications & Research — Dr Zee, Physician Writer",
            description:
              "A record of research outputs and publication summaries in paediatric medicine.",
            path: "/publications",
            type: "CollectionPage",
          }),
          mainEntity: {
            "@type": "ItemList",
            name: "Dr Zee publications and research summaries",
            itemListElement: PUBLICATIONS.map((publication, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "CreativeWork",
                name: publication.title,
                isPartOf: { "@type": "Periodical", name: publication.journal },
                dateCreated: publication.year,
                author: { "@id": `${SITE_URL}/about#person` },
              },
            })),
          },
        }),
      ],
    }
  },
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
              This page distinguishes portfolio evidence summaries from independently verifiable publications. Published work should be linked to a journal or DOI; the entries below are portfolio samples unless a source link is explicitly provided.
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
                <p className="mt-4 text-xs text-muted-foreground">{p.venue} · Portfolio sample; publication status available on request</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  );
}
