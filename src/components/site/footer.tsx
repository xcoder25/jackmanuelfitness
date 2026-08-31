const SOCIALS = [
  { href: "https://www.instagram.com/jack_manuel_fitness/", label: "Instagram" },
  { href: "https://www.tiktok.com/@jackmanuelfitness1", label: "TikTok" },
  { href: "https://www.facebook.com/jackmanuelfitness", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-2xl tracking-wide text-fg">JACK MANUEL FITNESS</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            Jack Manuel Fitness Limited. Personal training, group sessions, and brand work from
            Lagos.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <a href="#train" className="text-muted hover:text-fg transition-colors duration-150">
            Programs
          </a>
          <a href="#book" className="text-muted hover:text-fg transition-colors duration-150">
            Book
          </a>
          <a
            href="mailto:manueljack929@gmail.com"
            className="text-muted hover:text-fg transition-colors duration-150"
          >
            manueljack929@gmail.com
          </a>
          <a
            href="https://wa.me/2348030997843"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-fg transition-colors duration-150"
          >
            WhatsApp
          </a>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {SOCIALS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-fg transition-colors duration-150"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <p className="border-t border-border px-4 py-4 text-center text-xs text-subtle">
        © {new Date().getFullYear()} Jack Manuel Fitness Limited. All rights reserved.
      </p>
    </footer>
  );
}
