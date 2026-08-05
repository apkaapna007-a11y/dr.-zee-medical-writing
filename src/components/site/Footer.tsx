import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Briefcase, Sparkles } from "lucide-react";

export const CONTACT_EMAIL = "hello@drzeewrites.com";
export const LINKEDIN_URL = "https://www.linkedin.com/";
export const UPWORK_URL = "https://www.upwork.com/";
export const FIVERR_URL = "https://www.fiverr.com/";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl">
            Dr Zee<span className="text-accent">Writes</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Physician-led medical writing, scientific communication and editorial review for
            healthcare, pharma, digital health and med-comms teams.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label="Email Dr Zee"
              className="inline-flex size-11 items-center justify-center rounded-md border border-border bg-card transition-colors hover:border-accent"
            >
              <Mail className="size-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex size-11 items-center justify-center rounded-md border border-border bg-card transition-colors hover:border-accent"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Upwork profile"
              className="inline-flex size-11 items-center justify-center rounded-md border border-border bg-card transition-colors hover:border-accent"
            >
              <Briefcase className="size-4" />
            </a>
            <a
              href={FIVERR_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Fiverr profile"
              className="inline-flex size-11 items-center justify-center rounded-md border border-border bg-card transition-colors hover:border-accent"
            >
              <Sparkles className="size-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Site" className="grid content-start gap-2 text-sm">
          <p className="eyebrow mb-1">Explore</p>
          <Link to="/about" className="text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link to="/services" className="text-muted-foreground hover:text-foreground">
            Services
          </Link>
          <Link to="/portfolio" className="text-muted-foreground hover:text-foreground">
            Portfolio
          </Link>
          <Link to="/publications" className="text-muted-foreground hover:text-foreground">
            Publications
          </Link>
          <Link to="/blog" className="text-muted-foreground hover:text-foreground">
            Resources
          </Link>
        </nav>

        <nav aria-label="Legal" className="grid content-start gap-2 text-sm">
          <p className="eyebrow mb-1">Legal</p>
          <Link to="/cv" className="text-muted-foreground hover:text-foreground">
            CV
          </Link>
          <Link to="/contact" className="text-muted-foreground hover:text-foreground">
            Contact
          </Link>
          <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-muted-foreground hover:text-foreground">
            Terms of Use
          </Link>
        </nav>
      </div>
      <div className="border-t border-border/60">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} DrZeeWrites. All rights reserved. Content on this site is for
          professional information only and is not medical advice.
        </p>
      </div>
    </footer>
  );
}
