import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { POSTS } from "@/content/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Resources & Insights — DrZeeWrites" },
      {
        name: "description",
        content:
          "Evidence-based healthcare articles and medical writing insights on E-E-A-T, plain language, and appraising clinical literature.",
      },
      { property: "og:title", content: "Resources & Insights — DrZeeWrites" },
      {
        property: "og:description",
        content: "Notes on evidence, plain language and credible healthcare content.",
      },
    ],
  }),
  component: Blog,
});

function Blog() {
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
              <article className="flex h-full flex-col rounded-xl surface lift p-6">
                <span className="eyebrow">{p.tag}</span>
                <h2 className="mt-3 text-xl leading-snug">{p.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.excerpt}
                </p>
                <p className="mt-6 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                  <time dateTime={p.date}>
                    {new Date(p.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>{" "}
                  · {p.readingTime} read
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
