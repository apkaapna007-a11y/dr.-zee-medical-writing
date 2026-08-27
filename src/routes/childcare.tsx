import { ArrowRight, BookOpen, ClipboardCheck, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { MedicalTrustCard } from "@/components/site/MedicalTrustCard";
import { CHILDCARE_POSTS } from "@/content/childcare";
import { AUTHOR_PERSON, ORGANIZATION_SCHEMA, SITE_URL, WEBSITE_SCHEMA, breadcrumbSchema, jsonLd, medicalWebPageSchema, pageHead, webPageSchema } from "@/lib/seo";

export const Route = createFileRoute("/childcare")({
  head: () => {
    const title = "Childcare Guidance for Parents | Dr Zee, Paediatrician";
    const description =
      "Evidence-based childcare guidance from Dr Zeeshan Islam, a paediatrician with intensive-care experience. Practical help for choosing daycare, preparing your baby, and handling common childcare health questions.";
    const head = pageHead({
      title,
      description,
      path: "/childcare",
      keywords:
        "childcare guidance, daycare checklist, baby daycare preparation, paediatrician parenting advice, infant childcare safety",
    });

    return {
      ...head,
      scripts: [
        jsonLd(WEBSITE_SCHEMA),
        jsonLd(ORGANIZATION_SCHEMA),
        jsonLd({
          ...webPageSchema({ title, description, path: "/childcare", type: "CollectionPage" }),
          author: { "@id": `${SITE_URL}/about#person` },
          about: ["childcare", "daycare safety", "infant health", "parent education"],
          mainEntity: {
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Choosing safe, supportive childcare",
                url: `${SITE_URL}/childcare#choosing-care`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Preparing your baby for daycare",
                url: `${SITE_URL}/childcare#preparing-for-daycare`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Childcare health and illness guidance",
                url: `${SITE_URL}/childcare#childcare-health`,
              },
            ],
          },
        }),
        jsonLd(medicalWebPageSchema({
          title,
          description,
          path: "/childcare",
          about: "Childcare health, daycare safety, infant care, and parent education",
        })),
        jsonLd(breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Childcare guidance", path: "/childcare" },
        ])),
      ],
    };
  },
  component: Childcare,
});

const TOPICS = [
  {
    icon: ClipboardCheck,
    id: "choosing-care",
    slug: "questions-to-ask-before-choosing-daycare",
    eyebrow: "Choosing care",
    title: "Questions to ask before choosing a daycare",
    body: "Use a pediatrician’s perspective to assess written health policies, staff training, supervision, safe sleep, communication, and emergency readiness before enrolling your child.",
  },
  {
    icon: ShieldCheck,
    id: "infant-safety",
    slug: "daycare-safety-checklist-for-infants",
    eyebrow: "Infant safety",
    title: "What to look for in infant daycare safety",
    body: "Ask specific questions about sleep, feeding, allergies, hygiene, supervision, emergency readiness, and the everyday systems that keep babies safe.",
  },
  {
    icon: HeartPulse,
    id: "preparing-for-daycare",
    slug: "prepare-baby-for-daycare",
    eyebrow: "Starting daycare",
    title: "Prepare your baby for a confident transition",
    body: "Practical guidance for feeding, bottles, naps, routines, drop-off, separation, and the first week of childcare—without expecting every family or baby to follow the same schedule.",
  },
  {
    icon: HeartPulse,
    id: "childcare-health",
    slug: "daycare-illness-policy-questions",
    eyebrow: "Childcare health",
    title: "Understand illness and return-to-care decisions",
    body: "Clear, evidence-based explanations of common childcare health questions, including when to keep a child home, what to ask about illness policies, and when to contact a clinician.",
  },
];

function Childcare() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="pointer-events-none absolute inset-0 rule-grid opacity-[0.25]" aria-hidden />
        <div className="pointer-events-none absolute -right-20 top-10 size-72 rounded-full bg-accent/10 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">For parents & caregivers</p>
              <h1 className="mt-4 text-balance font-display text-4xl leading-[1.05] md:text-6xl">
                Safer childcare decisions, guided by a paediatrician.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Evidence-based childcare guidance for the everyday decisions families make about daycare,
                infant routines, illness, feeding, sleep, and early health. Written in clear language by
                Dr. Zeeshan Islam, MBBS, MCPS (Paediatrics), with pediatric and intensive-care experience.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#topics"
                  className="glow-cta inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground"
                >
                  Explore childcare topics <ArrowRight className="size-4" />
                </a>
                <Link
                  to="/about"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full glass px-7 text-sm font-semibold transition-colors hover:border-accent"
                >
                  Meet the pediatrician
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl glass p-6">
                <Stethoscope className="size-5 text-accent" aria-hidden />
                <p className="mt-4 font-semibold">Clinically informed</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Pediatric experience translated into practical parent guidance.</p>
              </div>
              <div className="rounded-2xl glass p-6">
                <BookOpen className="size-5 text-accent" aria-hidden />
                <p className="mt-4 font-semibold">Evidence referenced</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Recommendations are connected to reputable medical sources.</p>
              </div>
              <div className="rounded-2xl glass p-6">
                <ShieldCheck className="size-5 text-accent" aria-hidden />
                <p className="mt-4 font-semibold">Safety first</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Red flags and limits of general advice are clearly separated.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="topics" className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-6">
        <Reveal>
          <p className="eyebrow">Childcare guidance</p>
          <h2 className="mt-3 max-w-2xl text-3xl leading-[1.05] md:text-4xl">Start with the decisions parents face most.</h2>
          <p className="mt-3 text-xs text-muted-foreground">{CHILDCARE_POSTS.length} physician-authored guides are now available in this cluster.</p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            This hub will grow into a library of practical, physician-authored guides. Each topic is designed
            to answer a real parent question while helping families know what to ask their childcare provider
            and when to seek individual medical advice.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {TOPICS.map(({ icon: Icon, id, slug, eyebrow, title, body }, index) => (
            <Reveal key={id} delay={index * 0.06}>
              <article id={id} className="h-full rounded-2xl glass lift p-7">
                <Icon className="size-5 text-accent" aria-hidden />
                <p className="mt-6 eyebrow">{eyebrow}</p>
                <h3 className="mt-3 text-xl leading-snug">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <Link to="/childcare/$slug" params={{ slug }} className="mt-6 inline-flex items-center gap-2 border-t border-border/60 pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent hover:underline">
                  Read the guide <ArrowRight className="size-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 lg:px-6">
        <Reveal>
          <MedicalTrustCard reviewedOn="2026-08-27" />
        </Reveal>
      </section>

      <section className="border-y border-border/60 bg-muted/40">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-6">
          <Reveal>
            <p className="eyebrow">Free parent resources</p>
            <h2 className="mt-3 max-w-2xl text-3xl leading-[1.05] md:text-4xl">Take the right questions with you.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">Download and print these pediatrician-led checklists before a daycare tour or infant-care conversation.</p>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <a href="/downloads/daycare-tour-checklist.html" download className="group rounded-2xl glass lift p-6">
              <p className="eyebrow">Printable checklist · HTML</p>
              <h3 className="mt-3 text-xl">Daycare Tour Checklist</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Questions about licensing, staffing, safe sleep, feeding, illness policies, emergencies, and family fit.</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:underline">Download checklist <ArrowRight className="size-4" /></span>
            </a>
            <a href="/downloads/infant-daycare-safety-checklist.html" download className="group rounded-2xl glass lift p-6">
              <p className="eyebrow">Printable checklist · HTML</p>
              <h3 className="mt-3 text-xl">Infant Daycare Safety Checklist</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">A focused review of infant sleep, feeding, allergies, supervision, hygiene, and emergency readiness.</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:underline">Download checklist <ArrowRight className="size-4" /></span>
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1fr_0.8fr] md:items-center md:py-28 lg:px-6">
          <Reveal>
            <p className="eyebrow">A clinical perspective for families</p>
            <h2 className="mt-3 max-w-2xl text-3xl leading-[1.05] md:text-4xl">Clear guidance, without replacing your child’s own clinician.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl glass p-7">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Childcare information can help you prepare and ask better questions. It cannot diagnose your child
                or replace an examination. Always follow your childcare provider’s written policy and contact your
                pediatrician for advice based on your child’s individual history.
              </p>
              <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
                Visit the medical resources <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
