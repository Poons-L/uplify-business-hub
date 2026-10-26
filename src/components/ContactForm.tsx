import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().max(150).optional(),
  phone: z.string().trim().max(40).optional(),
  message: z.string().trim().min(1, "Tell us a little about your challenge").max(2000),
});

const field =
  "w-full rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus:border-highlight";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const raw = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setStatus("sending");
    const d = parsed.data;
    const { error } = await supabase.from("contact_requests").insert({
      name: d.name,
      email: d.email,
      company: d.company || null,
      phone: d.phone || null,
      message: d.message,
    });
    if (error) {
      setStatus("idle");
      setError("Something went wrong. Please try again.");
      return;
    }
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="mt-8 rounded-2xl border border-primary-foreground/20 p-8">
        <p className="font-display text-2xl font-bold">Thank you — we’ve got it.</p>
        <p className="mt-2 opacity-80">One of the operators will be in touch within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4 text-left sm:grid-cols-2" noValidate>
      <input name="name" placeholder="Full name *" className={field} maxLength={100} />
      <input name="email" type="email" placeholder="Work email *" className={field} maxLength={255} />
      <input name="company" placeholder="Company" className={field} maxLength={150} />
      <input name="phone" placeholder="Phone" className={field} maxLength={40} />
      <textarea name="message" rows={4} placeholder="What growth problem are you facing? *" className={`${field} sm:col-span-2`} maxLength={2000} />
      {error && <p className="text-sm text-highlight sm:col-span-2">{error}</p>}
      <div className="sm:col-span-2 text-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-gradient-to-r from-brand-deep to-highlight px-7 py-3 font-semibold text-highlight-foreground transition hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Book your Diagnostic Session"}
        </button>
      </div>
    </form>
  );
}
