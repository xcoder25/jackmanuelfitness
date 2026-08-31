import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { saveInquiry } from "@/lib/inquiries";
import { cn } from "@/lib/cn";

const SESSIONS = [
  "1:1 coaching",
  "Raw power session",
  "Brand / appearance",
  "Group training",
];

export function BookForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [session, setSession] = useState(SESSIONS[0]);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError("Add your name.");
      return;
    }
    if (phone.trim().length < 8) {
      setError("Add a working phone or WhatsApp number.");
      return;
    }
    saveInquiry({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      session,
      note: note.trim(),
    });
    setError("");
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-xl border border-border bg-elevated p-6 sm:p-8">
        <div className="flex size-10 items-center justify-center rounded-md bg-accent text-accent-fg">
          <Check className="size-5" />
        </div>
        <h3 className="mt-4 font-display text-3xl tracking-wide text-fg">Request received</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {name}, your {session.toLowerCase()} request is in. WhatsApp the team now to lock a date
          and rate.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href="https://wa.me/2348030997843" target="_blank" rel="noreferrer">
              Confirm on WhatsApp
            </a>
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setDone(false);
              setName("");
              setPhone("");
              setEmail("");
              setNote("");
            }}
          >
            New request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-border bg-elevated p-5 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
            Name
          </span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
            placeholder="Full name"
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
            Phone / WhatsApp
          </span>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
            placeholder="0803…"
            autoComplete="tel"
            inputMode="tel"
          />
        </label>
      </div>
      <label className="mt-4 block">
        <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
          Email
        </span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
          placeholder="you@email.com"
          autoComplete="email"
        />
      </label>
      <fieldset className="mt-5">
        <legend className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
          What do you need
        </legend>
        <div className="grid grid-cols-2 gap-2">
          {SESSIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSession(s)}
              className={cn(
                "min-h-11 rounded-md border px-3 py-2 text-left text-sm transition-colors duration-150",
                session === s
                  ? "border-fg bg-fg text-bg"
                  : "border-border bg-surface text-muted hover:text-fg",
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>
      <label className="mt-5 block">
        <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
          Goal or brief
        </span>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={4}
          className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-fg placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
          placeholder="Strength goal, event date, brand, or location"
        />
      </label>
      {error ? <p className="mt-3 text-sm text-muted">{error}</p> : null}
      <Button type="submit" className="mt-5 w-full sm:w-auto" size="lg">
        Request a booking
      </Button>
    </form>
  );
}
