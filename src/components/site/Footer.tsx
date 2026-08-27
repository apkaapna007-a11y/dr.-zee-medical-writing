import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Briefcase, Sparkles, ArrowUpRight } from "lucide-react";

export const CONTACT_EMAIL = "hello@drzeewrites.com";
export const LINKEDIN_URL = "https://www.linkedin.com/";
export const UPWORK_URL = "https://www.upwork.com/";
export const FIVERR_URL = "https://www.fiverr.com/";

const SOCIALS = [
  { href: `mailto:${CONTACT_EMAIL}`, label: "Email Dr Zee", icon: Mail },
  { href: LINKEDIN_URL, label: "LinkedIn profile", icon: Linkedin },
  { href: UPWORK_URL, label: "Upwork profile", icon: Briefcase },
  { href: FIVERR_URL, label: "Fiverr profile", icon: Sparkles },
] as const;

export function Footer() {
  return (
    <footer className="mt-32 bg-ink-panel">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-6 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.45fr_0.7fr_0.7fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl border border-ink-foreground/15 bg-ink-foreground/[0.08] p-1.5">
                <img src="/logo-mark.png" alt="" className="size-full object-contain" />
              </span>
              <p className="eyebrow text-ink-foreground/65">DrZeeWrites · Physician-led</p>
            </div>
            <p className="mt-4 font-display text-3xl tracking-tight text-ink-foreground">
              Medical content with
              <span className="block text-accent">clinical intelligence.</span>
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-foreground/70">
              Physician-led medical writing for healthcare teams, plus clear, evidence-based
              childcare guidance for parents and caregivers.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {SOCIALS.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-ink-foreground/15 bg-ink-foreground/[0.06] text-ink-foreground/75 transition-all hover:-translate-y-0.5 hover:border-accent/70 hover:bg-accent/15 hover:text-ink-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Site" className="grid content-start gap-3 text-sm">
            <p className="eyebrow mb-2 text-ink-foreground/55">Explore</p>
            <Link
              to="/about"
              className="text-ink-foreground/70 transition-colors hover:text-ink-foreground"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-ink-foreground/70 transition-colors hover:text-ink-foreground"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-ink-foreground/70 transition-colors hover:text-ink-foreground"
            >
              Portfolio
            </Link>
            <Link
              to="/publications"
              className="text-ink-foreground/70 transition-colors hover:text-ink-foreground"
            >
              Publications
            </Link>
            <Link
              to="/blog"
              className="text-ink-foreground/70 transition-colors hover:text-ink-foreground"
            >
              Resources
            </Link>
            <Link
              to="/childcare"
              className="text-ink-foreground/70 transition-colors hover:text-ink-foreground"
            >
              For Parents
            </Link>
            <Link
              to="/tools"
              className="text-ink-foreground/70 transition-colors hover:text-ink-foreground"
            >
              Pediatric Tools
            </Link>
          </nav>

          <nav aria-label="Legal" className="grid content-start gap-3 text-sm">
            <p className="eyebrow mb-2 text-ink-foreground/55">Continue</p>
            <Link
              to="/cv"
              className="text-ink-foreground/70 transition-colors hover:text-ink-foreground"
            >
              CV & credentials
            </Link>
            <Link
              to="/contact"
              className="text-ink-foreground/70 transition-colors hover:text-ink-foreground"
            >
              Start a project
            </Link>
            <Link
              to="/testimonials"
              className="text-ink-foreground/70 transition-colors hover:text-ink-foreground"
            >
              Client feedback
            </Link>
            <Link
              to="/privacy"
              className="text-ink-foreground/70 transition-colors hover:text-ink-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-ink-foreground/70 transition-colors hover:text-ink-foreground"
            >
              Terms of Use
            </Link>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-ink-foreground/12 pt-6 text-xs text-ink-foreground/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} DrZeeWrites. All rights reserved.</p>
          <p className="max-w-xl leading-relaxed md:text-right">
            Professional information only. Portfolio samples are not personal medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
