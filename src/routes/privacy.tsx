import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT_EMAIL } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — DrZeeWrites" },
      {
        name: "description",
        content:
          "How DrZeeWrites collects, uses and protects information submitted through the website and enquiry form.",
      },
      { property: "og:title", content: "Privacy Policy — DrZeeWrites" },
      { property: "og:description", content: "Data handling practices for DrZeeWrites.com." },
    ],
    links: [{ rel: "canonical", href: "https://drzeewrites.com/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
      <Reveal>
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 font-display text-4xl">Privacy Policy</h1>
        <div className="mt-8 grid gap-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            This policy explains what information DrZeeWrites collects when you use this website and
            how it is handled.
          </p>
          <div>
            <h2 className="text-lg text-foreground">Information collected</h2>
            <p className="mt-2">
              The enquiry form opens your own email client; details you enter are sent directly to{" "}
              {CONTACT_EMAIL} and are not stored on this website. Standard hosting logs may record
              anonymised technical data such as browser type and referring page.
            </p>
          </div>
          <div>
            <h2 className="text-lg text-foreground">How information is used</h2>
            <p className="mt-2">
              Contact details and project briefs are used solely to respond to your enquiry, scope
              work and deliver commissioned services. They are never sold or shared for marketing.
            </p>
          </div>
          <div>
            <h2 className="text-lg text-foreground">Confidentiality</h2>
            <p className="mt-2">
              Client documents, unpublished manuscripts and commercially sensitive material are
              treated as confidential and covered by NDA where requested.
            </p>
          </div>
          <div>
            <h2 className="text-lg text-foreground">Your rights</h2>
            <p className="mt-2">
              You may request access to, correction of, or deletion of any personal information held
              in correspondence by emailing {CONTACT_EMAIL}.
            </p>
          </div>
          <div>
            <h2 className="text-lg text-foreground">Cookies</h2>
            <p className="mt-2">
              This site does not use advertising or tracking cookies. Any analytics used are
              privacy-respecting and aggregated.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
