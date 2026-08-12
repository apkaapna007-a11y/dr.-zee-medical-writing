import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT_EMAIL } from "@/components/site/Footer";

import { AUTHOR_PERSON, DEFAULT_OG_IMAGE, ORGANIZATION_SCHEMA, SITE_URL, WEBSITE_SCHEMA, jsonLd, pageHead, webPageSchema } from "@/lib/seo";
export const Route = createFileRoute("/terms")({
  head: () => {
    const head = pageHead({
      title: "Terms of Use & Medical Disclaimer — DrZeeWrites",
      description: "Terms governing use of DrZeeWrites, including intellectual property, engagement terms, and the medical information disclaimer.",
      path: "/terms",
    });
    return { ...head, scripts: [jsonLd(webPageSchema({ title: "Terms of Use & Medical Disclaimer — DrZeeWrites", description: "Website terms and medical disclaimer for DrZeeWrites.", path: "/terms" }))] }
  },
  component: Terms,
});

function Terms() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
      <Reveal>
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 font-display text-4xl">Terms of Use</h1>
        <div className="mt-8 grid gap-6 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-lg text-foreground">Medical disclaimer</h2>
            <p className="mt-2">
              All content on this website is provided for professional and educational information
              only. It does not constitute medical advice, diagnosis or treatment, and it does not
              create a doctor–patient relationship. Always consult a qualified clinician about
              individual care.
            </p>
          </div>
          <div>
            <h2 className="text-lg text-foreground">Intellectual property</h2>
            <p className="mt-2">
              Text, portfolio descriptions and design on this site are the property of DrZeeWrites
              and may not be reproduced without written permission. Rights to commissioned work
              transfer as agreed in the individual engagement contract.
            </p>
          </div>
          <div>
            <h2 className="text-lg text-foreground">Engagements</h2>
            <p className="mt-2">
              Project scope, revision rounds, timelines and fees are confirmed in writing before
              work begins. Deliverables are provided for client review; final regulatory or
              promotional approval remains the client's responsibility.
            </p>
          </div>
          <div>
            <h2 className="text-lg text-foreground">External links</h2>
            <p className="mt-2">
              Links to third-party platforms are provided for convenience. DrZeeWrites is not
              responsible for their content or practices.
            </p>
          </div>
          <div>
            <h2 className="text-lg text-foreground">Contact</h2>
            <p className="mt-2">Questions about these terms: {CONTACT_EMAIL}.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
