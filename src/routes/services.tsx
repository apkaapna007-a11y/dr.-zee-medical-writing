import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/content/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Medical Writing Services — DrZeeWrites" },
      {
        name: "description",
        content:
          "Medical writing, scientific writing, medical reviewing and editing, patient education, healthcare SEO, literature reviews, white papers and drug monographs.",
      },
      { property: "og:title", content: "Medical Writing Services — DrZeeWrites" },
      {
        property: "og:description",
        content:
          "Nine physician-led editorial services for healthcare, pharma, CRO and digital health teams.",
      },
      { property: "og:image", content: "https://drzeewrites.com/og-services.png" },
    ],
    links: [{ rel: "canonical", href: "https://drzeewrites.com/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What medical writing services does DrZeeWrites offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Nine physician-led services: medical writing, scientific writing, medical reviewing, medical editing, patient education, healthcare SEO content, literature reviews, white papers and drug monographs.",
              },
            },
            {
              "@type": "Question",
              name: "Who writes the content at DrZeeWrites?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "All content is written and reviewed by Dr. Zeeshan Islam, a practising paediatrician (MBBS, MCPS) with intensive care experience.",
              },
            },
            {
              "@type": "Question",
              name: "What is the typical turnaround for a proposal?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Scoped proposals with a sample approach are delivered within two business days of receiving a brief.",
              },
            },
          ],
        }),
      },
    ],
  }),
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
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">Services</p>
            <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl leading-[1.1] md:text-5xl">
              Nine ways a physician can strengthen your medical content.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Engagements run from single documents to ongoing editorial retainers. Every
              deliverable arrives referenced, style-compliant and clinically reviewed.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.05}>
              <article className="flex h-full flex-col rounded-xl glass lift p-6">
                <h2 className="text-lg">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                <ul className="mt-5 grid gap-2 border-t border-border/60 pt-5 text-sm">
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

      <section className="border-y border-border/60 bg-muted/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <p className="eyebrow">How we work</p>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.06}>
                <div className="h-full rounded-xl glass p-6">
                  <span className="font-display text-3xl text-accent">{p.step}</span>
                  <h3 className="mt-3 text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <div className="rounded-2xl ink-panel px-8 py-12 md:px-14">
            <h2 className="max-w-2xl text-3xl">Tell me what your reviewers keep flagging.</h2>
            <Link
              to="/contact"
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-md bg-background px-6 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              Request a proposal <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
