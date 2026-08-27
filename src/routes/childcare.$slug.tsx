import { ArrowLeft, ArrowRight, CalendarDays, Clock, ExternalLink, Tag } from "lucide-react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { MedicalTrustCard } from "@/components/site/MedicalTrustCard";
import { CHILDCARE_POSTS, type ChildcarePost } from "@/content/childcare";
import { AUTHOR_PERSON, ORGANIZATION_SCHEMA, SITE_URL, WEBSITE_SCHEMA, breadcrumbSchema, jsonLd, medicalWebPageSchema, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/childcare/$slug")({
  loader: ({ params }) => {
    const post = CHILDCARE_POSTS.find((item) => item.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Childcare article not found — DrZeeWrites" },
          { name: "robots", content: "noindex, follow" },
        ],
      };
    }

    const post = loaderData.post as ChildcarePost;
    const path = `/childcare/${post.slug}`;
    const description = post.excerpt;
    const url = `${SITE_URL}${path}`;

    return {
      ...pageHead({
        title: `${post.title} | Dr Zee, Paediatrician`,
        description,
        path,
        type: "article",
        keywords: `${post.tag}, childcare guidance, paediatrician advice, parent checklist`,
      }),
      scripts: [
        jsonLd(WEBSITE_SCHEMA),
        jsonLd(ORGANIZATION_SCHEMA),
        jsonLd(medicalWebPageSchema({
          title: post.title,
          description,
          path,
          about: `${post.tag}, childcare health, and parent education`,
        })),
        jsonLd(breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Childcare guidance", path: "/childcare" },
          { name: post.title, path },
        ])),
        jsonLd({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": `${url}#article`,
          url,
          headline: post.title,
          description,
          datePublished: post.date,
          dateModified: post.date,
          author: { "@id": AUTHOR_PERSON["@id"] },
          reviewedBy: { "@id": AUTHOR_PERSON["@id"] },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntityOfPage: { "@id": `${url}#medical-webpage` },
          articleSection: post.tag,
          keywords: [post.tag, "childcare", "daycare", "paediatrician", "parent education"],
          inLanguage: "en-GB",
        }),
      ],
    };
  },
  component: ChildcarePostPage,
  notFoundComponent: ChildcareNotFound,
});

function ChildcareNotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-28 text-center">
      <h1 className="font-display text-3xl">Childcare guide not found</h1>
      <p className="mt-4 text-sm text-muted-foreground">That guide does not exist or has been moved.</p>
      <Link to="/childcare" className="mt-8 inline-flex min-h-11 items-center gap-1.5 rounded-full bg-primary px-5 text-sm text-primary-foreground">
        Back to childcare hub <ArrowRight className="size-4" aria-hidden />
      </Link>
    </section>
  );
}

function ChildcarePostPage() {
  const { post } = Route.useLoaderData() as { post: ChildcarePost };
  const currentIndex = CHILDCARE_POSTS.findIndex((item) => item.slug === post.slug);
  const nextPost = currentIndex < CHILDCARE_POSTS.length - 1 ? CHILDCARE_POSTS[currentIndex + 1] : null;
  const prevPost = currentIndex > 0 ? CHILDCARE_POSTS[currentIndex - 1] : null;

  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <Reveal>
            <Link to="/childcare" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground">
              <ArrowLeft className="size-3.5" aria-hidden /> Childcare guidance
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Tag className="size-3.5" aria-hidden />{post.tag}</span>
              <span className="inline-flex items-center gap-1.5"><CalendarDays className="size-3.5" aria-hidden /><time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time></span>
              <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5" aria-hidden />{post.readingTime} read</span>
            </div>
            <h1 className="mt-6 text-balance font-display text-3xl leading-[1.15] md:text-5xl">{post.title}</h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{post.excerpt}</p>
            <div className="mt-8">
              <MedicalTrustCard reviewedOn={post.date} />
            </div>
          </Reveal>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-16">
        <Reveal>
          <div className="rounded-xl glass p-6 md:p-8">
            <h2 className="text-sm font-semibold uppercase tracking-wide">Key takeaways</h2>
            <ul className="mt-4 grid gap-3">
              {post.keyTakeaways.map((takeaway) => (
                <li key={takeaway} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />{takeaway}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10">
          {post.sections.map((section, index) => (
            <Reveal key={section.heading} delay={index * 0.04}>
              <section>
                <h2 className="font-display text-2xl leading-snug md:text-3xl">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                  {section.body.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <aside className="mt-14 rounded-xl border border-border/70 bg-muted/40 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide">Sources and further reading</h2>
            <ul className="mt-4 grid gap-3">
              {post.sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noreferrer" className="inline-flex items-start gap-2 text-sm text-accent hover:underline">
                    <ExternalLink className="mt-0.5 size-4 shrink-0" aria-hidden />{source.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">This article is general health education and does not replace an examination, diagnosis, or individualized advice from your child’s clinician. Childcare policies and local regulations may differ.</p>
          </aside>
        </Reveal>
      </article>

      <section className="border-t border-border/60">
        <div className="mx-auto grid max-w-3xl gap-4 px-5 py-16 sm:grid-cols-2">
          {prevPost && <Link to="/childcare/$slug" params={{ slug: prevPost.slug }} className="group rounded-xl glass p-6 transition-colors hover:border-accent"><span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"><ArrowLeft className="size-3.5" aria-hidden /> Previous guide</span><p className="mt-3 text-sm font-semibold leading-snug group-hover:text-accent">{prevPost.title}</p></Link>}
          {nextPost && <Link to="/childcare/$slug" params={{ slug: nextPost.slug }} className="group rounded-xl glass p-6 text-right transition-colors hover:border-accent sm:col-start-2"><span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">Next guide <ArrowRight className="size-3.5" aria-hidden /></span><p className="mt-3 text-sm font-semibold leading-snug group-hover:text-accent">{nextPost.title}</p></Link>}
        </div>
      </section>
    </>
  );
}
