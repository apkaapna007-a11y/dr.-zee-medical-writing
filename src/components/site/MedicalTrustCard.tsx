import { Link } from "@tanstack/react-router";
import { BadgeCheck, BookOpenCheck, Stethoscope } from "lucide-react";

export function MedicalTrustCard({ reviewedOn }: { reviewedOn: string }) {
  return (
    <aside className="rounded-2xl border border-accent/25 bg-accent/[0.06] p-6" aria-label="Medical authorship and review information">
      <div className="flex items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Stethoscope className="size-5" aria-hidden />
        </div>
        <div>
          <p className="eyebrow text-accent">Clinical trust</p>
          <p className="mt-2 font-display text-xl leading-snug">Written and medically reviewed by Dr. Zeeshan Islam</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            MBBS, MCPS (Paediatrics) · Practising paediatrician with intensive-care experience.
          </p>
        </div>
      </div>
      <div className="mt-6 grid gap-3 border-t border-border/60 pt-5 text-sm text-muted-foreground sm:grid-cols-2">
        <p className="flex items-start gap-2"><BadgeCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden /><span><strong className="text-foreground">Reviewed:</strong> <time dateTime={reviewedOn}>{reviewedOn}</time></span></p>
        <p className="flex items-start gap-2"><BookOpenCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden /><span>References are provided for important health and safety guidance.</span></p>
      </div>
      <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
        This page provides general education. It cannot diagnose your child, replace an examination, or override your childcare provider’s written policy or local requirements.
      </p>
      <Link to="/about" className="mt-5 inline-flex text-sm font-semibold text-accent hover:underline">About the author and credentials →</Link>
    </aside>
  );
}
