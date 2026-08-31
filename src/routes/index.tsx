import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Building2, Dumbbell, Flame, Shield, Users, Zap } from "lucide-react";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { BookForm } from "@/components/site/book-form";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({ component: Home });

const STATS = [
  { value: "12+", label: "Years coaching" },
  { value: "1:1", label: "And group sessions" },
  { value: "Ltd", label: "Registered in Nigeria" },
  { value: "Lagos", label: "Train here or on-site" },
];

const PROGRAMS = [
  {
    icon: Dumbbell,
    title: "1:1 coaching",
    copy: "Private sessions with Jack. Strength, conditioning, and a plan you can keep. For beginners through serious athletes.",
  },
  {
    icon: Zap,
    title: "Raw power",
    copy: "Functional strength: load, grip, carry, and real output. Built for people who want results they can feel, not a filter.",
  },
  {
    icon: Users,
    title: "Group training",
    copy: "Hustle Gang sessions. High energy, clear programming, and a room that actually works. Teams and small groups welcome.",
  },
  {
    icon: Shield,
    title: "Brand & events",
    copy: "Appearances, activations, content, and live demos. Book Jack for campaigns, launches, and stages that need real strength.",
  },
];

const CLIENTS = [
  {
    icon: Flame,
    title: "Individuals",
    copy: "Get stronger, move better, and stay consistent. Sessions in Lagos, with a program you can run between visits.",
  },
  {
    icon: Users,
    title: "Teams",
    copy: "Offsites, squads, and friend groups who want a session that is not a gimmick. We run the room. You show up.",
  },
  {
    icon: Building2,
    title: "Brands",
    copy: "Product launches, fitness campaigns, and talent bookings. One point of contact. Clear brief. On-time delivery.",
  },
];

const STEPS = [
  { n: "01", title: "Send the brief", copy: "Tell us the goal, dates, and whether this is training or a booking." },
  { n: "02", title: "We confirm", copy: "The team replies on WhatsApp with availability, location, and rate." },
  { n: "03", title: "You train", copy: "Show up. Do the work. Leave stronger than you arrived." },
];

function Home() {
  return (
    <div id="top" className="min-h-screen bg-bg text-fg">
      <Header />
      <main>
        <section className="relative min-h-[100svh] overflow-hidden">
          <img
            src="/images/hero-gym.jpg"
            alt="Empty industrial gym, stacked iron plates and a barbell under hard light"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-bg/70" />
          <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
              Jack Manuel Fitness Limited · Lagos
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-[clamp(3.25rem,12vw,8rem)] leading-[0.9] tracking-wide text-fg">
              My strength is my superpower
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Raw power coaching, group sessions, and brand work. Book Jack for training that is
              real — or a stage that needs the same voltage.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#book">Book a session</a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="#train">See programs</a>
              </Button>
            </div>
            <a
              href="#about"
              className="mt-12 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted hover:text-fg"
            >
              <ArrowDown className="size-4" />
              Scroll
            </a>
          </div>
        </section>

        <section className="border-y border-border bg-surface">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-4 py-7 sm:px-6 ${i % 2 === 1 ? "border-l border-border" : ""} ${i > 1 ? "border-t border-border md:border-t-0" : ""} md:border-l md:first:border-l-0`}
              >
                <p className="font-display text-4xl tracking-wide text-fg">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">Coach</p>
              <h2 className="mt-3 font-display text-5xl tracking-wide text-fg sm:text-6xl">
                Okoro Ogbonna
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Founder and CEO of Jack Manuel Fitness Limited. From Ebonyi State. Twelve years of
                early mornings, heavy iron, and a method that does not fake the work.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Strength is real. Not a filter. Jack trains people for raw power and functional
                output — the kind that carries load when it counts. Clients come for results.
                Brands come for presence that cannot be staged.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-border">
              <img
                src="/images/street-iron.jpg"
                alt="Iron bars and a jerry can on a Lagos street at dusk"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="train" className="scroll-mt-20 border-t border-border bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">Programs</p>
            <h2 className="mt-3 max-w-xl font-display text-5xl tracking-wide text-fg sm:text-6xl">
              We do not train for the mirror
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              We train for the mindset. Clear programs. Honest coaching. Book the lane that fits.
            </p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {PROGRAMS.map((p) => (
                <article
                  key={p.title}
                  className="flex flex-col rounded-xl border border-border bg-elevated p-6"
                >
                  <p.icon className="size-5 text-fg" strokeWidth={1.75} />
                  <h3 className="mt-4 font-display text-3xl tracking-wide text-fg">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.copy}</p>
                  <a
                    href="#book"
                    className="mt-5 inline-flex h-11 items-center text-sm font-medium text-fg underline-offset-4 hover:underline"
                  >
                    Request this
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="clients" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">Clients</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-fg sm:text-6xl">
              Who this is for
            </h2>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {CLIENTS.map((c) => (
                <article key={c.title} className="rounded-xl border border-border bg-surface p-6">
                  <c.icon className="size-5 text-fg" strokeWidth={1.75} />
                  <h3 className="mt-4 font-display text-3xl tracking-wide text-fg">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.copy}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {STEPS.map((s) => (
                <div key={s.n} className="border-t border-border pt-5">
                  <p className="font-display text-2xl tracking-wide text-fg">{s.n}</p>
                  <h3 className="mt-2 text-sm font-medium text-fg">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div className="grid gap-4 md:grid-cols-3">
              <figure className="md:col-span-2 overflow-hidden rounded-xl border border-border">
                <img
                  src="/images/barbell-chalk.jpg"
                  alt="Chalk dust on a knurled barbell"
                  className="h-64 w-full object-cover sm:h-80 md:h-full"
                />
              </figure>
              <div className="grid gap-4">
                <figure className="overflow-hidden rounded-xl border border-border">
                  <img
                    src="/images/kettlebell.jpg"
                    alt="Kettlebell and iron chain on concrete"
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <figure className="overflow-hidden rounded-xl border border-border">
                  <img
                    src="/images/plates.jpg"
                    alt="Stacked iron plates on a gym floor"
                    className="h-48 w-full object-cover"
                  />
                </figure>
              </div>
            </div>
            <blockquote className="mt-10 max-w-3xl border-l-2 border-fg pl-5">
              <p className="font-display text-3xl leading-tight tracking-wide text-fg sm:text-4xl">
                Believe in yourself. There is no limit to what you can achieve.
              </p>
              <footer className="mt-3 text-sm text-muted">Jack Manuel</footer>
            </blockquote>
          </div>
        </section>

        <section id="book" className="scroll-mt-20 border-t border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">Book</p>
              <h2 className="mt-3 font-display text-5xl tracking-wide text-fg sm:text-6xl">
                Start here
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Training, group sessions, and brand bookings. Send a request. We reply with
                availability and pricing. Lagos-based. Travel by arrangement.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-muted">
                <li>
                  Bookings: Prince John Francis Ozekome ·{" "}
                  <a className="text-fg underline-offset-4 hover:underline" href="tel:+2348030997843">
                    0803 099 7843
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a
                    className="text-fg underline-offset-4 hover:underline"
                    href="mailto:manueljack929@gmail.com"
                  >
                    manueljack929@gmail.com
                  </a>
                </li>
                <li>
                  WhatsApp:{" "}
                  <a
                    className="text-fg underline-offset-4 hover:underline"
                    href="https://wa.me/2348030997843"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Message the desk
                  </a>
                </li>
              </ul>
            </div>
            <BookForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
