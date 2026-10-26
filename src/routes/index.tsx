import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Northpeak Partners — Senior operators for growth" },
      { name: "description", content: "Four senior operators fixing strategy, revenue, talent and execution as one system." },
      { property: "og:title", content: "Northpeak Partners — Senior operators for growth" },
      { property: "og:description", content: "Four senior operators fixing strategy, revenue, talent and execution as one system." },
    ],
  }),
  component: Index,
});

const operators = [
  { t: "Revenue Design", d: "Decades shaping revenue models, territories, quotas and forecasts so your plan is backed by numbers you can trust." },
  { t: "Product & Market", d: "Brings products to market and builds repeatable motions that connect what you make with what buyers want." },
  { t: "People & Organization", d: "Designs hiring plans, pay structures and team capabilities that match the strategy you're actually running." },
  { t: "Go-to-Market Strategy", d: "Scaled B2B sales across multiple regions and aligns positioning, messaging and selling into one clear story." },
];
const fixes = [
  { t: "Strategy", d: "Where to play, who to serve, what comes first." },
  { t: "Revenue", d: "Pricing, forecasting and commercial structure." },
  { t: "Talent", d: "Org design, incentives and skill gaps." },
  { t: "Execution", d: "Enablement, narrative and operating cadence." },
];
const stories = [
  { t: "The forecast that wasn't the problem", d: "A growth-stage company asked for better forecasting. Digging in, we found territory, messaging and incentives all pulling in different directions.", f: "Rebuilt the whole revenue engine." },
  { t: "Entering a new region", d: "A software vendor needed a launch plan abroad. We paired market strategy with a hiring profile and a financial model.", f: "Live in one quarter with an aligned team." },
  { t: "Tripling revenue", d: "An investor-backed company aimed to triple annual revenue. We began with positioning, then widened scope as hiring and enablement gaps appeared.", f: "An engine built to hold up at scale." },
];
const reasons = [
  "We look at the full picture, not just one department.",
  "Each of us has held the roles you're hiring for.",
  "We recommend what you need, even when it's smaller.",
  "We stay to help run the plan, not just write it.",
];

function Btn({ children }: { children: React.ReactNode }) {
  return <a href="#contact" className="inline-block rounded-full bg-highlight px-7 py-3 font-semibold text-highlight-foreground transition hover:opacity-90">{children}</a>;
}

function Index() {
  return (
    <div className="font-sans">
      <header className="bg-primary text-primary-foreground">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="font-display text-2xl font-bold">Northpeak</span>
          <Btn>Book a session</Btn>
        </nav>
        <section className="mx-auto max-w-6xl px-6 pb-28 pt-16">
          <h1 className="max-w-3xl font-display text-5xl font-bold leading-tight md:text-7xl">We solve growth problems where they start</h1>
          <p className="mt-6 max-w-2xl text-lg opacity-80">Four seasoned operators. A century of combined experience. One connected approach to Strategy, Revenue, Talent and Execution.</p>
          <div className="mt-10"><Btn>Book the Diagnostic Council</Btn></div>
        </section>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-display text-4xl font-bold">Skip the frameworks. Work with operators.</h2>
        <p className="mt-6 text-lg text-muted-foreground">We're four senior leaders who have built and repaired go-to-market engines around the world. No junior teams — you work with us directly, as a group or one-on-one, depending on the problem.</p>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-bold tracking-widest text-highlight">HOW WE WORK</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-card p-8 shadow-sm">
              <span className="font-display text-5xl text-highlight">1</span>
              <h3 className="mt-4 font-display text-2xl font-bold">The Diagnostic Council</h3>
              <p className="mt-1 text-sm text-muted-foreground">60–90 minutes</p>
              <p className="mt-4 text-muted-foreground">All four of us join one session. No sales pitch — we identify what's broken, who should be involved, and where to start.</p>
            </div>
            <div className="rounded-2xl bg-card p-8 shadow-sm">
              <span className="font-display text-5xl text-highlight">2</span>
              <h3 className="mt-4 font-display text-2xl font-bold">A right-sized engagement</h3>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <div><p className="font-semibold text-foreground">Focused Sprint</p><p>One lead runs the work with peer reviews at milestones. For contained problems. $50K–$120K · 30–90 days.</p></div>
                <div><p className="font-semibold text-foreground">Full Council</p><p>Several specialists redesign the whole engine. For stalled growth or integrations. $150K–$350K · 90–180 days.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-4xl font-bold">The operators</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {operators.map((o) => (
            <div key={o.t} className="rounded-2xl border bg-card p-6">
              <div className="mb-4 h-1 w-10 rounded bg-highlight" />
              <h4 className="font-display text-xl font-bold">{o.t}</h4>
              <p className="mt-3 text-sm text-muted-foreground">{o.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-bold tracking-widest text-highlight">WHAT WE FIX</p>
          <h2 className="mt-3 font-display text-4xl font-bold">We join the pieces others treat separately.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {fixes.map((f) => (
              <div key={f.t} className="border-t border-highlight pt-6">
                <h5 className="font-display text-2xl font-bold">{f.t}</h5>
                <p className="mt-2 opacity-80">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-bold tracking-widest text-highlight">CLIENT STORIES</p>
        <h2 className="mt-3 font-display text-4xl font-bold">How problems connect — and get solved.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <div key={s.t} className="flex flex-col rounded-2xl bg-secondary p-8">
              <h4 className="font-display text-xl font-bold">{s.t}</h4>
              <p className="mt-3 flex-1 text-muted-foreground">{s.d}</p>
              <p className="mt-6 font-semibold">Result: {s.f}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-4xl font-bold">Why clients choose us</h2>
          <ul className="mt-8 space-y-4">
            {reasons.map((r) => (
              <li key={r} className="flex gap-4 text-lg"><span className="text-highlight">●</span>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="bg-primary py-24 text-center text-primary-foreground">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-display text-4xl font-bold">Stop guessing. Talk to the operators.</h2>
          <p className="mt-4 opacity-80">Book a 90-minute session with the Council. We'll share what we see, what you need and what it will cost.</p>
          <div className="mt-8"><Btn>Book the Council</Btn></div>
        </div>
      </section>
      <footer className="py-8 text-center text-sm text-muted-foreground">© 2026 Northpeak Partners</footer>
    </div>
  );
}
