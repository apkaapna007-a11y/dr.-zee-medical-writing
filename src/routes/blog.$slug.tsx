import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Tag } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { POSTS, type Post } from "@/content/site";

import { AUTHOR_PERSON, DEFAULT_OG_IMAGE, ORGANIZATION_SCHEMA, SITE_URL, WEBSITE_SCHEMA, jsonLd, pageHead, webPageSchema } from "@/lib/seo";
export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found — DrZeeWrites" }, { name: "robots", content: "noindex, follow" }],
      };
    }
    const p = loaderData.post;
    const description = p.excerpt;
    const path = `/blog/${p.slug}`;
    const url = `${SITE_URL}${path}`;
    return {
      ...pageHead({
        title: `${p.title} — Dr Zee`,
        description,
        path,
        type: "article",
        keywords: p.tag,
      }),
      scripts: [
        jsonLd({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": `${url}#article`,
          url,
          headline: p.title,
          description,
          datePublished: p.date,
          dateModified: p.date,
          author: { "@id": `${SITE_URL}/about#person` },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntityOfPage: { "@id": `${url}#webpage` },
          keywords: p.tag,
          inLanguage: "en-GB",
        }),
      ],
    };
  },
  component: BlogPost,
  notFoundComponent: BlogNotFound,
});

function BlogNotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-28 text-center">
      <h1 className="font-display text-3xl">Article not found</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        That article doesn't exist or has been moved.
      </p>
      <Link
        to="/blog"
        className="mt-8 inline-flex min-h-11 items-center gap-1.5 rounded-full bg-primary px-5 text-sm text-primary-foreground"
      >
        Back to resources <ArrowRight className="size-4" aria-hidden />
      </Link>
    </section>
  );
}

function BlogPost() {
  const { post } = Route.useLoaderData() as { post: Post };
  const currentIndex = POSTS.findIndex((p) => p.slug === post.slug);
  const nextPost = currentIndex < POSTS.length - 1 ? POSTS[currentIndex + 1] : null;
  const prevPost = currentIndex > 0 ? POSTS[currentIndex - 1] : null;

  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <Reveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" aria-hidden /> All articles
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Tag className="size-3.5" aria-hidden />
                {post.tag}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-3.5" aria-hidden />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-3.5" aria-hidden />
                {post.readingTime} read
              </span>
            </div>
            <h1 className="mt-6 text-balance font-display text-3xl leading-[1.15] md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{post.excerpt}</p>
          </Reveal>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-16">
        <Reveal>
          <div className="rounded-xl glass p-6 md:p-8">
            <h2 className="text-sm font-semibold uppercase tracking-wide">Key takeaways</h2>
            <ul className="mt-4 grid gap-3">
              {post.keyTakeaways.map((t) => (
                <li key={t} className="flex gap-3 text-sm text-muted-foreground">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10">
          {post.sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 0.04}>
              <div>
                <h2 className="font-display text-2xl leading-snug">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                  {section.body.split("\n\n").map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </article>

      <section className="border-t border-border/60">
        <div className="mx-auto grid max-w-3xl gap-4 px-5 py-16 sm:grid-cols-2">
          {prevPost && (
            <Link
              to="/blog/$slug"
              params={{ slug: prevPost.slug }}
              className="group rounded-xl glass p-6 transition-colors hover:border-accent"
            >
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <ArrowLeft className="size-3.5" aria-hidden /> Previous
              </span>
              <p className="mt-3 text-sm font-semibold leading-snug group-hover:text-accent">
                {prevPost.title}
              </p>
            </Link>
          )}
          {nextPost && (
            <Link
              to="/blog/$slug"
              params={{ slug: nextPost.slug }}
              className="group rounded-xl glass p-6 text-right transition-colors hover:border-accent sm:col-start-2"
            >
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                Next <ArrowRight className="size-3.5" aria-hidden />
              </span>
              <p className="mt-3 text-sm font-semibold leading-snug group-hover:text-accent">
                {nextPost.title}
              </p>
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
