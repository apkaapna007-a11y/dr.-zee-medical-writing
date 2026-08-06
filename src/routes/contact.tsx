import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Briefcase, Linkedin, Mail, Send, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT_EMAIL, LINKEDIN_URL, UPWORK_URL, FIVERR_URL } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DrZeeWrites Medical Writing" },
      {
        name: "description",
        content:
          "Commission physician-led medical writing, review or editing. Email hello@drzeewrites.com or send a project brief.",
      },
      { property: "og:title", content: "Contact — DrZeeWrites Medical Writing" },
      {
        property: "og:description",
        content: "Send a brief and receive a scoped proposal within two business days.",
      },
    ],
  }),
  component: Contact,
});

const CHANNELS = [
  { icon: Mail, label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: Linkedin, label: "LinkedIn", href: LINKEDIN_URL },
  { icon: Briefcase, label: "Upwork", href: UPWORK_URL },
  { icon: Sparkles, label: "Fiverr", href: FIVERR_URL },
];

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Project enquiry — ${String(data.get("service") || "Medical writing")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Organisation: ${data.get("organisation")}`,
      `Email: ${data.get("email")}`,
      `Service: ${data.get("service")}`,
      "",
      String(data.get("message") || ""),
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl leading-[1.1] md:text-5xl">
              Send the brief. I'll send a scoped approach.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Include your audience, format and deadline. Replies within two business days.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <form onSubmit={onSubmit} className="rounded-xl glass p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="min-h-11 rounded-md border border-input bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Your name"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="organisation" className="text-sm font-medium">
                  Organisation
                </label>
                <input
                  id="organisation"
                  name="organisation"
                  className="min-h-11 rounded-md border border-input bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Company or institution"
                />
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="min-h-11 rounded-md border border-input bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="you@organisation.com"
                />
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <label htmlFor="service" className="text-sm font-medium">
                  Service needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="min-h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {[
                    "Medical Writing",
                    "Scientific Writing",
                    "Medical Reviewing",
                    "Medical Editing",
                    "Patient Education",
                    "Healthcare SEO Content",
                    "Literature Reviews",
                    "White Papers",
                    "Drug Monographs",
                  ].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Project brief
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="rounded-md border border-input bg-background p-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Audience, format, word count, deadline…"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Send className="size-4" aria-hidden /> Send enquiry
            </button>
            <p aria-live="polite" className="mt-3 text-sm text-muted-foreground">
              {sent
                ? "Your email client should now be open with the brief pre-filled."
                : "Submitting opens your email client with the details pre-filled."}
            </p>
          </form>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid content-start gap-3">
            {CHANNELS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex min-h-11 items-center gap-3 rounded-xl glass lift px-5 py-4 text-sm"
              >
                <Icon className="size-4 text-accent" aria-hidden />
                <span>{label}</span>
              </a>
            ))}
            <p className="mt-3 rounded-xl bg-muted/60 p-5 text-sm leading-relaxed text-muted-foreground">
              Enquiries about clinical advice cannot be answered here. Content on this site is
              professional information, not medical advice.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
