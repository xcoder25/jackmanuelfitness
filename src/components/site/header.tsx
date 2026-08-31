import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#train", label: "Programs" },
  { href: "#clients", label: "Clients" },
  { href: "#book", label: "Book" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
        "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
        scrolled || open ? "bg-bg/95 border-b border-border" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-display text-xl tracking-wide text-fg">
          JACK MANUEL
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-fg transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href="#book">Book a session</a>
          </Button>
        </nav>
        <button
          type="button"
          className="md:hidden inline-flex size-11 items-center justify-center text-fg"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <nav
          className="md:hidden border-t border-border bg-bg px-4 pb-6 pt-2"
          aria-label="Mobile"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex h-12 items-center text-base text-fg"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="mt-2 w-full">
            <a href="#book" onClick={() => setOpen(false)}>
              Book a session
            </a>
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
