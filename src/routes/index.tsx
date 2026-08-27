import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  FileText,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES, PORTFOLIO, TESTIMONIALS, POSTS } from "@/content/site";
import heroAurora from "@/assets/hero-aurora.jpg";

import { AUTHOR_PERSON, DEFAULT_OG_IMAGE, ORGANIZATION_SCHEMA, SITE_URL, WEBSITE_SCHEMA, jsonLd, pageHead, webPageSchema } from "@/lib/seo";
export const Route = createFileRoute("/")({
  head: () => {
    const head = pageHead({
      title: "Dr Zee — Physician & Medical Content Specialist",
      description:
        "Dr. Zee is a physician and paediatric medical content specialist writing patient education, HCP articles, medical SEO, drug monographs, evidence reviews, and healthcare technology content.",
      path: "/",
      keywords:
        "physician medical writer, paediatric medical writer, medical content specialist, patient education, clinical articles, medical SEO",
    });
    return {
      ...head,
      scripts: [
        jsonLd(WEBSITE_SCHEMA),
        jsonLd(ORGANIZATION_SCHEMA),
        jsonLd({
          ...webPageSchema({
            title: "Dr Zee — Physician & Medical Content Specialist",
            description:
              "Physician-authored medical writing and clinical content for healthcare, pharmaceutical, med-comms, and digital health teams.",
            path: "/",
          }),
          mainEntity: AUTHOR_PERSON,
        }),
      ],
    }
  },
  component: Home,
});

const TRUST = [
  { icon: Stethoscope, label: "MBBS, MCPS Paediatrics" },
  { icon: ShieldCheck, label: "PICU clinical experience" },
  { icon: BookOpen, label: "Evidence-first, fully referenced" },
  { icon: BadgeCheck, label: "AMA / Vancouver styling" },
];

const STATS: { value: string; label: string }[] = [
  { value: "9", label: "Specialist services" },
  { value: "48h", label: "Proposal turnaround" },
  { value: "100%", label: "Referenced & physician-authored" },
];


function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <img
          src={heroAurora}
          alt=""
          aria-hidden
          width={1600}
          height={1008}
          className="pointer-events-none absolute inset-0 size-full object-cover opacity-[0.07]"
        />
        <div className="pointer-events-none absolute inset-0 halo" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 rule-grid opacity-[0.25]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 grain opacity-[0.03]" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:py-24 md:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.7fr)] md:items-center md:gap-16 md:py-32 lg:px-6">
          <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <Sparkles className="size-3.5 text-brass" aria-hidden />
              Physician · Medical Writer · Scientific Editor
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-7 max-w-4xl text-balance font-display text-[2.6rem] leading-[1.04] sm:text-6xl md:text-7xl">
              Complex medical science,{" "}
              <span className="gold-text italic">translated with clinical precision.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I'm a paediatrician (MBBS, MCPS) with intensive care experience who writes, reviews
              and edits medical content for healthcare organisations, pharmaceutical companies,
              digital health startups and medical communications agencies. I also create clear,
              evidence-based childcare guidance for parents and caregivers.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="glow-cta inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground"
              >
                Start a project <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex min-h-12 items-center gap-2 rounded-full glass px-7 text-sm font-semibold transition-colors hover:border-accent"
              >
                View writing samples
              </Link>
              <Link
                to="/childcare"
                className="inline-flex min-h-12 items-center gap-2 rounded-full glass px-7 text-sm font-semibold transition-colors hover:border-accent"
              >
                For parents <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <dl className="mt-16 grid gap-px overflow-hidden rounded-2xl glass sm:grid-cols-3">
              {STATS.map((s) => (
                <div key={s.label} className="px-6 py-6">
                  <dt className="font-display text-3xl gold-text">{s.value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.36}>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {TRUST.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-xl glass px-4 py-3.5 text-sm"
                >
                  <Icon className="size-4 shrink-0 text-accent" aria-hidden />
                  <span className="text-muted-foreground">{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          </div>
          <Reveal delay={0.18}>
            <aside className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-accent/10 blur-2xl" aria-hidden />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/75 p-6 shadow-[0_28px_80px_-32px_oklch(0.18_0.04_250_/_0.35)] backdrop-blur-xl sm:p-8">
                <div className="flex items-center justify-between border-b border-border/70 pb-5">
                  <span className="eyebrow">Clinical perspective</span>
                  <span className="font-display text-2xl text-brass">01</span>
                </div>
                <div className="mt-9 flex size-16 items-center justify-center rounded-2xl bg-primary text-xl font-semibold tracking-tight text-primary-foreground shadow-lg">
                  DZ
                </div>
                <p className="mt-6 font-display text-2xl leading-tight text-foreground">
                  Evidence you can read, trust and act on.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Medical writing shaped by paediatric practice, intensive-care experience and careful editorial judgement.
                </p>
                <div className="mt-8 grid gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground">
                  <div className="flex items-center justify-between gap-4"><span>Primary focus</span><span className="font-semibold text-foreground">Paediatrics</span></div>
                  <div className="flex items-center justify-between gap-4"><span>Best for</span><span className="font-semibold text-foreground">Healthcare teams</span></div>
                  <div className="flex items-center justify-between gap-4"><span>Approach</span><span className="font-semibold text-foreground">Evidence-first</span></div>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>


      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-6">
        <Reveal>
          <p className="eyebrow">Services</p>
          <h2 className="mt-3 max-w-2xl text-3xl leading-[1.02] md:text-4xl">
            Editorial work that holds up to clinical scrutiny.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <article className="group h-full rounded-2xl glass lift p-7">
                <FileText className="size-5 text-accent" aria-hidden />
                <h3 className="mt-4 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <Link
            to="/services"
            className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            All nine services <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>

      <section className="border-y border-border/60 bg-muted/40">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">Featured portfolio</p>
            <h2 className="mt-3 max-w-2xl text-3xl leading-[1.02] md:text-4xl">Selected work across audiences.</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {PORTFOLIO.slice(0, 3).map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <article className="group h-full rounded-2xl glass lift p-7">
                  <span className="eyebrow">{p.category}</span>
                  <h3 className="mt-3 text-lg leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                  <p className="mt-4 text-xs text-muted-foreground">{p.audience}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/40">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">Latest articles</p>
            <h2 className="mt-3 max-w-2xl text-3xl leading-[1.02] md:text-4xl">Notes on evidence and editorial practice.</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {POSTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="flex h-full flex-col rounded-xl glass lift p-6"
                >
                  <span className="eyebrow">{p.tag}</span>
                  <h3 className="mt-3 text-lg leading-snug">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {p.readingTime} read
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <Link
              to="/blog"
              className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              All articles <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">Client feedback</p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <figure className="h-full rounded-xl glass p-6">
                <blockquote className="font-display text-lg leading-snug">"{t.quote}"</blockquote>
                <figcaption className="mt-5 text-sm text-muted-foreground">
                  {t.name} · {t.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <Reveal>
          <div className="overflow-hidden rounded-2xl ink-panel px-8 py-14 md:px-14">
            <h2 className="max-w-2xl text-3xl md:text-4xl">
              Need content a clinician would sign their name to?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed opacity-80">
              Share your brief, audience and deadline. You'll get a scoped proposal with a sample
              approach within two business days.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-md bg-background px-6 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              Get in touch <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
