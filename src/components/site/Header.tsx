import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Stethoscope, Sun, Moon, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/publications", label: "Publications" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Resources" },
  { to: "/cv", label: "CV" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 shadow-[0_8px_30px_-24px_oklch(0.16_0.04_250_/_0.55)] backdrop-blur-2xl backdrop-saturate-150">
      <div className="mx-auto flex h-[4.75rem] max-w-6xl items-center justify-between gap-4 px-5 lg:px-6">
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="relative flex size-10 items-center justify-center overflow-hidden rounded-xl bg-primary text-primary-foreground shadow-[0_10px_25px_-12px_oklch(0.3_0.08_220_/_0.8)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
            <span className="absolute -right-3 -top-3 size-7 rounded-full bg-accent/50 blur-md" aria-hidden />
            <Stethoscope className="relative size-[1.15rem]" aria-hidden />
          </span>
          <span className="leading-none">
            <span className="block font-display text-[1.1rem] tracking-[-0.025em]">
              Dr Zee<span className="text-accent">Writes</span>
            </span>
            <span className="mt-1 hidden text-[0.56rem] font-bold uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Physician-led medical content
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-2 text-[0.78rem] font-medium text-muted-foreground transition-colors hover:bg-secondary/70 hover:text-foreground"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "rounded-full bg-secondary px-3 py-2 text-[0.78rem] font-semibold text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="ml-2 inline-flex size-9 items-center justify-center rounded-full border border-border/80 bg-card/70 text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <Link
            to="/contact"
            className="glow-cta ml-2 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-[0.78rem] font-bold text-primary-foreground"
          >
            Work with me <ArrowUpRight className="size-3.5" aria-hidden />
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-11 items-center justify-center rounded-full border border-border/80 bg-card/70 text-foreground transition-colors hover:border-accent lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background/95 shadow-xl backdrop-blur-xl lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav aria-label="Mobile" className="mx-auto grid max-w-6xl gap-1 px-5 py-5">
          {[...NAV, { to: "/contact", label: "Contact" } as const].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "rounded-xl bg-secondary px-4 py-3 text-sm font-semibold text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="mt-2 flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
        </nav>
      </div>
    </header>
  );
}
