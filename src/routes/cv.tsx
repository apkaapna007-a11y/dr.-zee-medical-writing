import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Mail } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT_EMAIL } from "@/components/site/Footer";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Dr Zee, Paediatrician & Medical Writer" },
      {
        name: "description",
        content:
          "Professional CV of a paediatrician (MBBS, MCPS) and medical writer: qualifications, clinical experience, editorial skills and tools.",
      },
      { property: "og:title", content: "CV — Dr Zee, Paediatrician & Medical Writer" },
      {
        property: "og:description",
        content: "Downloadable professional resume covering clinical and editorial experience.",
      },
    ],
  }),
  component: CV,
});

const SECTIONS = [
  {
    heading: "Education",
    items: [
      "MBBS — Bachelor of Medicine, Bachelor of Surgery",
      "MCPS Paediatrics — College of Physicians & Surgeons",
    ],
  },
  {
    heading: "Clinical experience",
    items: [
      "Paediatric medicine — inpatient, outpatient and emergency presentations",
      "Paediatric intensive care — sepsis, respiratory failure, post-operative care",
      "Neonatal care and family communication",
    ],
  },
  {
    heading: "Editorial experience",
    items: [
      "Medical and scientific writing for pharma, med-comms and digital health clients",
      "Independent medical review and clinical accuracy checking",
      "Patient education and health-literacy calibrated materials",
      "Healthcare SEO content aligned to E-E-A-T standards",
    ],
  },
  {
    heading: "Skills & tools",
    items: [
      "AMA and Vancouver referencing · reference managers",
      "Systematic and narrative literature searching (PubMed, Cochrane, guidelines)",
      "Evidence grading and critical appraisal",
      "Style-guide compliance and tracked review cycles",
    ],
  },
];

function CV() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">Curriculum vitae</p>
            <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl leading-[1.1] md:text-5xl">
              Clinical training and editorial practice, in one document.
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=CV%20request%20%E2%80%94%20DrZeeWrites`}
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Download className="size-4" aria-hidden /> Request the PDF CV
              </a>
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-card px-6 text-sm font-semibold transition-colors hover:border-accent"
              >
                <Mail className="size-4" aria-hidden /> Contact
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.heading} delay={(i % 2) * 0.05}>
              <div className="h-full rounded-xl glass p-7">
                <h2 className="text-xl">{s.heading}</h2>
                <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-muted-foreground">
                  {s.items.map((it) => (
                    <li key={it} className="border-l-2 border-accent/40 pl-4">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
