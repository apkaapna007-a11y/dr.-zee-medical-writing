import {
  ArrowRight,
  ClipboardCheck,
  FileText,
  HeartPulse,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { MedicalTrustCard } from "@/components/site/MedicalTrustCard";
import { TOOL_PAGES } from "@/content/tools";
import {
  SITE_URL,
  breadcrumbSchema,
  jsonLd,
  medicalWebPageSchema,
  pageHead,
  webPageSchema,
} from "@/lib/seo";

export const Route = createFileRoute("/tools")({
  head: () => {
    const title = "Free Pediatric Tools for Parents | Dr Zee, Paediatrician";
    const description =
      "Free pediatrician-led tools for daycare planning, infant handovers, appointments, routines, feeding logs, and childcare health conversations.";
    return {
      ...pageHead({
        title,
        description,
        path: "/tools",
        keywords:
          "pediatric tools for parents, daycare checklist tool, baby feeding log, pediatric appointment checklist",
      }),
      scripts: [
        jsonLd(webPageSchema({ title, description, path: "/tools", type: "CollectionPage" })),
        jsonLd(
          medicalWebPageSchema({
            title,
            description,
            path: "/tools",
            about: "Pediatric parent education tools",
          }),
        ),
        jsonLd({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: TOOL_PAGES.map((tool, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: tool.title,
            url: `${SITE_URL}/tools/${tool.slug}`,
          })),
        }),
        jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pediatric tools", path: "/tools" },
          ]),
        ),
      ],
    };
  },
  component: ToolsHub,
});

const ICONS = [ClipboardCheck, FileText, HeartPulse, Sparkles, FileText, ShieldCheck];

function ToolsHub() {
  const location = useLocation();
  if (location.pathname !== "/tools") return <Outlet />;
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          className="pointer-events-none absolute inset-0 rule-grid opacity-[0.25]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-6">
          <Reveal>
            <p className="eyebrow">Free parent resources</p>
            <h1 className="mt-4 max-w-4xl text-balance font-display text-4xl leading-[1.05] md:text-6xl">
              Practical pediatric tools for clearer decisions.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Use these browser-based worksheets and planners to prepare for daycare, organise
              observations, and ask better questions of a clinician or childcare provider.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#tools"
                className="glow-cta inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground"
              >
                Explore the tools <ArrowRight className="size-4" />
              </a>
              <Link
                to="/childcare"
                className="inline-flex min-h-12 items-center gap-2 rounded-full glass px-7 text-sm font-semibold hover:border-accent"
              >
                Read childcare guidance
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <section id="tools" className="mx-auto max-w-6xl px-5 py-20 lg:px-6">
        <Reveal>
          <p className="eyebrow">Choose a starting point</p>
          <h2 className="mt-3 max-w-2xl text-3xl leading-tight md:text-4xl">
            Each tool creates something you can use right away.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Your entries stay in your browser session. The tools do not diagnose, prescribe, store
            medical records, or replace a clinician’s assessment.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TOOL_PAGES.map((tool, index) => {
            const Icon = ICONS[index];
            return (
              <Reveal key={tool.slug} delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-2xl glass lift p-7">
                  <Icon className="size-5 text-accent" aria-hidden />
                  <p className="mt-6 eyebrow">{tool.eyebrow}</p>
                  <h3 className="mt-3 text-xl leading-snug">{tool.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {tool.description}
                  </p>
                  <Link
                    to="/tools/$slug"
                    params={{ slug: tool.slug }}
                    className="mt-auto inline-flex items-center gap-2 border-t border-border/60 pt-5 text-xs font-semibold uppercase tracking-[0.14em] text-accent hover:underline"
                  >
                    Open tool <ArrowRight className="size-4" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-20 lg:px-6">
        <MedicalTrustCard reviewedOn="2026-08-27" />
      </section>
      <section className="border-y border-border/60 bg-muted/40">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-6">
          <h2 className="text-2xl md:text-3xl">Use tools for preparation, not diagnosis.</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            For breathing difficulty, severe dehydration, a seizure, an unresponsive child, or
            another emergency, contact local emergency services immediately. For non-urgent
            concerns, use a generated worksheet to support a conversation with your child’s
            clinician.
          </p>
        </div>
      </section>
    </main>
  );
}
