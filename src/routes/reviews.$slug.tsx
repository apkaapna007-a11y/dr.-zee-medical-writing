import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, CalendarDays, FileText, Users } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ReviewDownload } from "@/components/site/ReviewDownload";
import { getReviewBySlug, LITERATURE_REVIEWS, type ReviewSample } from "@/content/reviews";

import { AUTHOR_PERSON, DEFAULT_OG_IMAGE, ORGANIZATION_SCHEMA, SITE_URL, WEBSITE_SCHEMA, jsonLd, pageHead, webPageSchema } from "@/lib/seo";
export const Route = createFileRoute("/reviews/$slug")({
  loader: ({ params }) => {
    const review = getReviewBySlug(params.slug);
    if (!review) throw notFound();
    return { review };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Review unavailable — DrZeeWrites" }, { name: "robots", content: "noindex, follow" }],
      };
    }
    const r = loaderData.review;
    const title = `${r.title} — Literature Review | DrZeeWrites`;
    const description = `${r.pages}-page physician-authored literature review (${r.span}). ${r.summary}`.slice(0, 158);
    const path = `/reviews/${params.slug}`;
    const url = `${SITE_URL}${path}`;
    return {
      ...pageHead({
        title,
        description,
        path,
        type: "article",
        keywords: r.keywords.join(", "),
      }),
      scripts: [
        jsonLd({
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          "@id": `${url}#article`,
          url,
          headline: r.title,
          abstract: r.abstract,
          description,
          keywords: r.keywords.join(", "),
          inLanguage: "en-GB",
          datePublished: `${r.year}-01-01`,
          audience: { "@type": "MedicalAudience", audienceType: r.audience },
          author: { "@id": `${SITE_URL}/about#person` },
          publisher: { "@id": `${SITE_URL}/#organization` },
          isAccessibleForFree: !r.gated,
          mainEntityOfPage: { "@id": `${url}#webpage` },
        }),
        jsonLd({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Portfolio", item: `${SITE_URL}/portfolio` },
            { "@type": "ListItem", position: 2, name: r.shortTitle, item: url },
          ],
        }),
      ],
    };
  },
  component: ReviewPage,
  notFoundComponent: ReviewNotFound,
});

function ReviewNotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-28 text-center">
      <h1 className="font-display text-3xl">Review not found</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        That literature review isn’t available. Browse the full set instead.
      </p>
      <Link
        to="/portfolio"
        className="mt-8 inline-flex min-h-11 items-center gap-1.5 rounded-full bg-primary px-5 text-sm text-primary-foreground"
      >
        Back to portfolio <ArrowUpRight className="size-4" aria-hidden />
      </Link>
    </section>
  );
}

function ReviewPage() {
  const { review } = Route.useLoaderData() as { review: ReviewSample };
  const others = LITERATURE_REVIEWS.filter((r) => r.slug !== review.slug);

  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[minmax(0,300px)_1fr] md:py-24">
          <Reveal>
            <img
              src={review.cover}
              alt={`Cover page of ${review.title}`}
              className="w-full rounded-2xl border border-border/60 object-cover object-top shadow-lg"
            />
          </Reveal>

          <Reveal delay={0.06}>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" aria-hidden /> Portfolio
            </Link>
            <p className="eyebrow mt-6">Literature review</p>
            <h1 className="mt-4 text-balance font-display text-3xl leading-[1.15] md:text-4xl">
              {review.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {review.abstract}
            </p>

            <dl className="mt-8 grid max-w-lg grid-cols-3 gap-3 text-sm">
              <div className="rounded-xl glass p-4">
                <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <FileText className="size-3.5" aria-hidden /> Pages
                </dt>
                <dd className="mt-1">{review.pages}</dd>
              </div>
              <div className="rounded-xl glass p-4">
                <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CalendarDays className="size-3.5" aria-hidden /> Evidence
                </dt>
                <dd className="mt-1">{review.span}</dd>
              </div>
              <div className="rounded-xl glass p-4">
                <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Users className="size-3.5" aria-hidden /> Access
                </dt>
                <dd className="mt-1">{review.gated ? "Premium" : "Open"}</dd>
              </div>
            </dl>

            <p className="mt-6 text-xs text-muted-foreground">{review.audience}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={review.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-primary px-5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                Read the PDF <ArrowUpRight className="size-4" aria-hidden />
              </a>
              <ReviewDownload review={review} variant="outline" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <h2 className="font-display text-2xl">What’s inside</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {review.highlights.map((h) => (
              <li key={h} className="flex gap-3 rounded-xl glass p-5 text-sm text-muted-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                {h}
              </li>
            ))}
          </ul>

          <ul className="mt-8 flex flex-wrap gap-2">
            {review.tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border/70 px-3 py-1 text-xs text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <Reveal>
          <h2 className="font-display text-2xl">More reviews</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {others.map((r) => (
              <Link
                key={r.slug}
                to="/reviews/$slug"
                params={{ slug: r.slug }}
                className="flex items-start gap-4 rounded-xl glass lift p-5"
              >
                <img
                  src={r.cover}
                  alt=""
                  loading="lazy"
                  className="h-24 w-18 shrink-0 rounded-md border border-border/60 object-cover object-top"
                />
                <span>
                  <span className="block text-sm leading-snug">{r.title}</span>
                  <span className="mt-2 block text-xs text-muted-foreground">
                    {r.pages} pages · {r.span}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
