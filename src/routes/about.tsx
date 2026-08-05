import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, HeartPulse, PenLine, Quote } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr Zee — Paediatrician & Medical Writer" },
      {
        name: "description",
        content:
          "Paediatrician (MBBS, MCPS) with intensive care experience, now writing and reviewing evidence-based medical content for healthcare and life-science teams.",
      },
      { property: "og:title", content: "About Dr Zee — Paediatrician & Medical Writer" },
      {
        property: "og:description",
        content:
          "Medical qualifications, clinical experience and the writing philosophy behind DrZeeWrites.",
      },
    ],
  }),
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
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">About</p>
            <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl leading-[1.1] md:text-5xl">
              A practising paediatrician who writes for the people who read the evidence.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 grid max-w-4xl gap-5 text-base leading-relaxed text-muted-foreground">
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
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <p className="eyebrow flex items-center gap-2">
            <GraduationCap className="size-4" aria-hidden /> Medical qualifications
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {QUALIFICATIONS.map((q, i) => (
            <Reveal key={q.title} delay={i * 0.05}>
              <div className="h-full rounded-xl surface p-6">
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

      <section className="mx-auto max-w-6xl px-5 py-20">
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
            <li className="rounded-xl surface p-6">
              Every clinical claim traced to primary literature or current guidance — no
              second-hand citation.
            </li>
            <li className="rounded-xl surface p-6">
              Audience calibration first: a caregiver leaflet and an HCP article are different
              disciplines, not different tones.
            </li>
            <li className="rounded-xl surface p-6">
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
