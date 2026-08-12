import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, HeartPulse, PenLine, Quote } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

import { AUTHOR_PERSON, DEFAULT_OG_IMAGE, ORGANIZATION_SCHEMA, SITE_URL, WEBSITE_SCHEMA, jsonLd, pageHead, webPageSchema } from "@/lib/seo";
export const Route = createFileRoute("/about")({
  head: () => {
    const head = pageHead({
      title: "About Dr Zee — Physician & Medical Content Specialist",
      description:
        "Meet Dr. Zeeshan Islam, MBBS, MCPS (Paediatrics): a practising physician and medical content specialist with paediatric and intensive-care experience.",
      path: "/about",
      type: "profile",
      keywords:
        "Dr Zee physician, paediatrician medical writer, MBBS MCPS paediatrics, medical content specialist",
    });
    return {
      ...head,
      scripts: [
        jsonLd({
          ...webPageSchema({
            title: "About Dr Zee — Physician & Medical Content Specialist",
            description:
              "Professional profile, clinical background, writing expertise, and editorial philosophy of Dr. Zeeshan Islam.",
            path: "/about",
            type: "ProfilePage",
          }),
          mainEntity: AUTHOR_PERSON,
        }),
      ],
    }
  },
  component: About,
});

const QUALIFICATIONS = [
  { title: "MBBS", detail: "Bachelor of Medicine, Bachelor of Surgery" },
  { title: "MCPS Paediatrics", detail: "Member, College of Physicians & Surgeons" },
  { title: "Paediatric Intensive Care", detail: "Clinical rotations and PICU service" },
  { title: "Medical Writing", detail: "Regulatory-adjacent, med-comms and educational content" },
];

const EXPERIENCE = [
  {
    role: "Paediatric Registrar / Medical Officer",
    detail:
      "General paediatrics, neonatal care and emergency presentations — acute assessment, stabilisation and family communication.",
  },
  {
    role: "Paediatric Intensive Care",
    detail:
      "Management of sepsis, respiratory failure and post-operative critical care within multidisciplinary teams.",
  },
  {
    role: "Medical Writer & Reviewer",
    detail:
      "Manuscripts, literature reviews, monographs, patient education and healthcare SEO content for international clients.",
  },
];

function About() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-card/30">
        <div className="pointer-events-none absolute inset-0 premium-grid opacity-30" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-24 md:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.7fr)] md:items-center md:gap-16 md:py-32 lg:px-6">
          <div>
            <Reveal>
              <p className="eyebrow">About Dr Zee</p>
              <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl leading-[0.98] md:text-6xl">
                A practising paediatrician who writes for the people who read the evidence.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 grid max-w-3xl gap-5 text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
                <p>
                  My clinical training is in paediatric medicine and intensive care — environments
                  where the difference between a clear instruction and an ambiguous one is measured in
                  outcomes. That standard travels with me into every document I write.
                </p>
                <p>
                  Today I work with healthcare organisations, pharmaceutical companies, digital health
                  startups and medical communications agencies. My remit spans evidence-based medical
                  writing, scientific writing, independent medical review, healthcare SEO content,
                  patient education materials and medical editing.
                </p>
                <p>
                  I'm not a generalist content writer who researches medicine. I'm a physician who
                  writes — which means the clinical reasoning, the guideline context and the
                  limitations of the evidence are already in the draft before it reaches your reviewer.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.18}>
            <aside className="rounded-[1.75rem] border border-border/70 bg-background/70 p-6 shadow-[0_28px_80px_-34px_oklch(0.18_0.04_250_/_0.32)] backdrop-blur-xl sm:p-8">
              <div className="flex items-center justify-between border-b border-border/70 pb-5">
                <span className="eyebrow">In brief</span>
                <HeartPulse className="size-4 text-accent" aria-hidden />
              </div>
              <div className="mt-7 grid gap-5">
                <div><p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Credentials</p><p className="mt-1 font-display text-xl">MBBS · MCPS Paediatrics</p></div>
                <div><p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Clinical lens</p><p className="mt-1 font-display text-xl">Paediatrics & intensive care</p></div>
                <div><p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Editorial promise</p><p className="mt-1 font-display text-xl">Clear, referenced, honest</p></div>
              </div>
              <div className="mt-8 border-t border-border/70 pt-5 text-sm leading-relaxed text-muted-foreground">
                Physician-led content for teams where accuracy, clarity and trust are non-negotiable.
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-6">
        <Reveal>
          <p className="eyebrow flex items-center gap-2">
            <GraduationCap className="size-4" aria-hidden /> Medical qualifications
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {QUALIFICATIONS.map((q, i) => (
            <Reveal key={q.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl glass p-7">
                <h2 className="text-lg">{q.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{q.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <p className="eyebrow flex items-center gap-2">
              <HeartPulse className="size-4" aria-hidden /> Clinical experience
            </p>
          </Reveal>
          <ol className="mt-10 grid gap-6">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.role} delay={i * 0.06}>
                <li className="grid gap-2 border-l-2 border-accent/50 pl-6 md:grid-cols-[280px_1fr] md:gap-8">
                  <h2 className="text-lg">{e.role}</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">{e.detail}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-6">
        <Reveal>
          <p className="eyebrow flex items-center gap-2">
            <PenLine className="size-4" aria-hidden /> Writing philosophy
          </p>
          <blockquote className="mt-8 max-w-3xl">
            <Quote className="size-6 text-accent" aria-hidden />
            <p className="mt-4 font-display text-2xl leading-snug md:text-3xl">
              Accuracy is the floor, not the achievement. The work is making accurate medicine
              readable, useful and honest about what the evidence does not yet show.
            </p>
          </blockquote>
          <ul className="mt-10 grid gap-4 text-sm text-muted-foreground md:grid-cols-3">
            <li className="rounded-2xl glass p-7">
              Every clinical claim traced to primary literature or current guidance — no
              second-hand citation.
            </li>
            <li className="rounded-2xl glass p-7">
              Audience calibration first: a caregiver leaflet and an HCP article are different
              disciplines, not different tones.
            </li>
            <li className="rounded-2xl glass p-7">
              Uncertainty is stated, not smoothed over. Credibility is the deliverable.
            </li>
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            to="/cv"
            className="mt-10 inline-flex min-h-11 items-center rounded-md border border-border bg-card px-6 text-sm font-semibold transition-colors hover:border-accent"
          >
            View full CV
          </Link>
        </Reveal>
      </section>
    </>
  );
}
