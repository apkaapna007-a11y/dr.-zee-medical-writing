import { useState } from "react";
import { Download, Lock, ShieldCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { accessSchema, useReviewAccess } from "@/lib/review-access";
import type { ReviewSample } from "@/content/reviews";

type Props = {
  review: ReviewSample;
  variant?: "solid" | "outline";
  label?: string;
  className?: string;
};

/**
 * Download control for a review PDF. Ungated reviews download directly;
 * premium ones ask for a name and email once, then stay unlocked.
 */
export function ReviewDownload({ review, variant = "solid", label, className }: Props) {
  const { unlocked, hydrated, grant } = useReviewAccess();
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const base =
    "inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full px-4 text-sm transition-colors";
  const style =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:opacity-90"
      : "border border-border text-muted-foreground hover:border-accent hover:text-foreground";
  const classes = [base, style, className].filter(Boolean).join(" ");

  const open_ = review.gated && !unlocked;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const result = accessSchema.safeParse({
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      organisation: String(form.get("organisation") ?? ""),
    });
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    grant(result.data);
    setOpen(false);
    window.open(review.file, "_blank", "noopener,noreferrer");
  }

  if (!review.gated || (hydrated && unlocked)) {
    return (
      <a href={review.file} download className={classes}>
        <Download className="size-4" aria-hidden /> {label ?? "Download PDF"}
      </a>
    );
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={classes} disabled={!open_}>
        <Lock className="size-4" aria-hidden /> {label ?? "Unlock PDF"}
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl leading-snug">Unlock this review</DialogTitle>
            <DialogDescription>
              {review.shortTitle} · {review.pages} pages. Tell me where to credit the read and the
              PDF opens right away.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={onSubmit} className="mt-2 space-y-4" noValidate>
            <div className="space-y-1.5">
              <label htmlFor="gate-name" className="text-sm text-muted-foreground">
                Full name
              </label>
              <input
                id="gate-name"
                name="name"
                maxLength={100}
                autoComplete="name"
                className="min-h-11 w-full rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-accent"
              />
              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="gate-email" className="text-sm text-muted-foreground">
                Work email
              </label>
              <input
                id="gate-email"
                name="email"
                type="email"
                maxLength={255}
                autoComplete="email"
                className="min-h-11 w-full rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-accent"
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="gate-org" className="text-sm text-muted-foreground">
                Organisation <span className="text-xs">(optional)</span>
              </label>
              <input
                id="gate-org"
                name="organisation"
                maxLength={120}
                autoComplete="organization"
                className="min-h-11 w-full rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-accent"
              />
              {errors.organisation && (
                <p className="text-xs text-destructive">{errors.organisation}</p>
              )}
            </div>

            <button
              type="submit"
              className="min-h-11 w-full rounded-full bg-primary px-4 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              Open the PDF
            </button>

            <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
              <ShieldCheck className="mt-0.5 size-3.5 shrink-0" aria-hidden />
              Stored only in your browser. No mailing list, no third-party sharing.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
