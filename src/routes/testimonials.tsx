import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { TESTIMONIALS } from "@/content/site";

import { AUTHOR_PERSON, DEFAULT_OG_IMAGE, ORGANIZATION_SCHEMA, SITE_URL, WEBSITE_SCHEMA, jsonLd, pageHead, webPageSchema } from "@/lib/seo";
export const Route = createFileRoute("/testimonials")({
  head: () => {
    const head = pageHead({
      title: "Client Testimonials — Dr Zee Medical Writing",
      description:
        "Feedback from healthcare, pharmaceutical, med-comms, and digital health clients about working with Dr Zee on clinical content and medical writing.",
      path: "/testimonials",
      keywords: "medical writer testimonials, physician medical writer reviews, healthcare content writer feedback",
    });
    return {
      ...head,
      scripts: [
        jsonLd({
          ...webPageSchema({
            title: "Client Testimonials — Dr Zee Medical Writing",
            description:
              "Client feedback about physician-led medical writing, clinical review, and healthcare content projects.",
            path: "/testimonials",
          }),
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: TESTIMONIALS.length,
            itemListElement: TESTIMONIALS.map((testimonial, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Review",
                reviewBody: testimonial.quote,
                author: { "@type": "Person", name: testimonial.name },
                reviewRating: undefined,
              },
            })),
          },
        }),
      ],
    }
  },
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">Testimonials</p>
            <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl leading-[1.1] md:text-5xl">
              Reviewed by the people who commission clinical content.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-4 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <figure className="h-full rounded-xl glass p-8">
                <Quote className="size-5 text-accent" aria-hidden />
                <blockquote className="mt-4 font-display text-xl leading-snug">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{t.name}</span> · {t.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-10 text-sm text-muted-foreground">
            Working together recently?{" "}
            <Link to="/contact" className="font-semibold text-accent hover:underline">
              Send a few lines
            </Link>{" "}
            — this page expands as engagements complete.
          </p>
        </Reveal>
      </section>
    </>
  );
}
