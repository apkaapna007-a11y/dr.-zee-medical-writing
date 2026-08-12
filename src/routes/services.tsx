import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/content/site";

import { AUTHOR_PERSON, DEFAULT_OG_IMAGE, ORGANIZATION_SCHEMA, SITE_URL, WEBSITE_SCHEMA, jsonLd, pageHead, webPageSchema } from "@/lib/seo";
export const Route = createFileRoute("/services")({
  head: () => {
    const head = pageHead({
      title: "Medical Writing Services for Healthcare Teams | Dr Zee",
      description:
        "Physician-led medical writing, patient education, clinical review, medical SEO, drug monographs, literature reviews, case studies, and healthcare white papers.",
      path: "/services",
      keywords:
        "medical writing services, physician medical writer, patient education writer, medical SEO writer, drug monographs, literature reviews",
    });
    return {
      ...head,
      scripts: [
        jsonLd({
          ...webPageSchema({
            title: "Medical Writing Services for Healthcare Teams | Dr Zee",
            description:
              "Nine physician-led services for healthcare, pharmaceutical, med-comms, and digital health teams.",
            path: "/services",
          }),
          mainEntity: {
            "@type": "ItemList",
            name: "Medical writing services",
            itemListElement: SERVICES.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Service",
                name: service.title,
                description: service.summary,
                provider: { "@id": `${SITE_URL}/#organization` },
              },
            })),
          },
        }),
        jsonLd({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What medical writing services does Dr Zee offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Dr Zee offers paediatric clinical writing, patient education, HCP articles, medical SEO writing, drug monographs, literature reviews, clinical case studies, healthcare white papers, and medical editing.",
              },
            },
            {
              "@type": "Question",
              name: "Who writes the content?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Content is written and medically reviewed by Dr. Zeeshan Islam, MBBS, MCPS (Paediatrics), a practising physician with paediatric and intensive-care experience.",
              },
            },
          ],
        }),
        jsonLd(ORGANIZATION_SCHEMA),
      ],
    }
  },
  component: Services,
});

const PROCESS = [
  { step: "01", title: "Brief & scope", detail: "Audience, objective, evidence base and deadline." },
  { step: "02", title: "Evidence map", detail: "Source selection, guideline check, outline sign-off." },
  { step: "03", title: "Draft", detail: "Written to your style guide with a full reference list." },
  { step: "04", title: "Review cycles", detail: "Two revision rounds included, tracked and documented." },
];

function Services() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-card/30">
        <div className="pointer-events-none absolute inset-0 premium-grid opacity-30" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:py-24 md:grid-cols-[minmax(0,1fr)_18rem] md:items-end md:gap-16 md:py-32 lg:px-6">
          <Reveal>
            <p className="eyebrow">Services · Physician-led</p>
            <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl leading-[0.98] md:text-6xl">
              Nine ways a physician can strengthen your medical content.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Engagements run from single documents to ongoing editorial retainers. Every deliverable arrives referenced, style-compliant and clinically reviewed.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border/70 bg-background/70 p-5 backdrop-blur-xl">
              <p className="eyebrow">The standard</p>
              <p className="mt-4 font-display text-2xl leading-tight">Clear enough for patients. Rigorous enough for reviewers.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.05}>
              <article className="group flex h-full flex-col rounded-2xl glass lift p-7">
                <div className="flex items-center justify-between">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-secondary text-xs font-bold text-secondary-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <span className="eyebrow opacity-60">Service</span>
                </div>
                <h2 className="mt-7 text-xl">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                  <ul className="mt-6 grid gap-2.5 border-t border-border/60 pt-6 text-sm">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="size-3.5 shrink-0 text-accent" aria-hidden />
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/35">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24 lg:px-6">
          <Reveal>
            <p className="eyebrow">How we work</p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.06}>
                <div className="h-full rounded-2xl glass p-7">
                  <span className="font-display text-3xl text-accent">{p.step}</span>
                  <h3 className="mt-3 text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] ink-panel px-7 py-12 md:px-14 md:py-16">
            <h2 className="max-w-2xl text-3xl">Tell me what your reviewers keep flagging.</h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-background px-6 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:bg-background/90"
            >
              Request a proposal <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
