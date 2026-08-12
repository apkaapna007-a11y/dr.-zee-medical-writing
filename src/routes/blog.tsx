import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { POSTS } from "@/content/site";

import { AUTHOR_PERSON, DEFAULT_OG_IMAGE, ORGANIZATION_SCHEMA, SITE_URL, WEBSITE_SCHEMA, jsonLd, pageHead, webPageSchema } from "@/lib/seo";
export const Route = createFileRoute("/blog")({
  head: ({ params }) => {
    const isArticle = Boolean((params as { slug?: string }).slug);
    const head = pageHead({
      title: "Medical Writing Resources & Insights | Dr Zee",
      description:
        "Evidence-based articles by Dr Zee on medical SEO, patient education, clinical evidence appraisal, and trustworthy healthcare content.",
      path: "/blog",
      keywords: "medical writing blog, medical SEO insights, patient education writing, clinical evidence appraisal",
    });
    return {
      ...head,
      links: isArticle ? [] : head.links,
      scripts: isArticle ? [] : [
        jsonLd({
          ...webPageSchema({
            title: "Medical Writing Resources & Insights | Dr Zee",
            description:
              "Evidence-led articles on medical writing, clinical communication, patient education, and healthcare SEO.",
            path: "/blog",
            type: "CollectionPage",
          }),
          author: { "@id": `${SITE_URL}/about#person` },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: POSTS.map((post, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `${SITE_URL}/blog/${post.slug}`,
              name: post.title,
            })),
          },
        }),
      ],
    }
  },
  component: Blog,
});

function Blog() {
  const location = useLocation();
  if (location.pathname.replace(/\/$/, "") !== "/blog") {
    return <Outlet />;
  }
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">Resources</p>
            <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl leading-[1.1] md:text-5xl">
              Evidence-based healthcare articles and medical writing insights.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-4 md:grid-cols-3">
          {POSTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="flex h-full flex-col rounded-xl glass lift p-6"
              >
                <span className="eyebrow">{p.tag}</span>
                <h2 className="mt-3 text-xl leading-snug">{p.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                  <p className="text-xs text-muted-foreground">
                    <time dateTime={p.date}>
                      {new Date(p.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>{" "}
                    · {p.readingTime} read
                  </p>
                  <ArrowRight className="size-4 text-accent" aria-hidden />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
