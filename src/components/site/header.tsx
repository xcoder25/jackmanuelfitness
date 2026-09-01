import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#train", label: "Programs" },
  { href: "#clients", label: "Clients" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#book", label: "Book" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-bg/85 backdrop-blur-md border-b border-border/80 shadow-lg shadow-black/20"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="group flex items-center gap-2 font-display text-2xl tracking-wide text-fg transition-opacity hover:opacity-90"
        >
          <span className="size-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform" />
          <span>JACK MANUEL</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-muted transition-colors duration-200 hover:text-fg after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-fg after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="group ml-2">
            <a href="#book" className="flex items-center gap-1.5">
              <span>Book session</span>
              <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </Button>
        </nav>
        <button
          type="button"
          className="md:hidden inline-flex size-11 items-center justify-center text-fg rounded-md hover:bg-surface transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <nav
          className="md:hidden border-t border-border bg-bg/95 backdrop-blur-lg px-4 pb-8 pt-3"
          aria-label="Mobile"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-menu-item flex h-14 items-center text-base font-medium text-fg border-b border-border/40 hover:text-amber-400 active:text-amber-400 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mobile-menu-item mt-5">
            <Button asChild className="w-full btn-ripple" size="lg">
              <a href="#book" onClick={() => setOpen(false)}>
                Book a session
              </a>
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
