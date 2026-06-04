import {
  PhoneIcon,
  VoicemailIcon,
  ChatIcon,
  ListIcon,
  ClockIcon,
  DollarIcon,
  CheckIcon,
} from "./Icons";

const steps = [
  {
    title: "Keep your number.",
    body: "Number on truck, website, and Google stays the same.",
    Icon: PhoneIcon,
  },
  {
    title: "Your phone rings first.",
    body: "Every call hits you or your office first. No exceptions.",
    Icon: PhoneIcon,
  },
  {
    title: "If you answer, we’re out.",
    body: "You pick up, WaterLine never touches it, never logs it, never bills it.",
    Icon: CheckIcon,
  },
  {
    title: "If it would go to voicemail, WaterLine answers.",
    body: "Only then. No stealing live calls. No forwarding every call to a robot.",
    Icon: VoicemailIcon,
  },
  {
    title: "It sounds like your office.",
    body: "We build a simple rule sheet with you: service area, hours, jobs you want, jobs you skip, how you talk, what not to promise.",
    Icon: ChatIcon,
  },
  {
    title: "It collects the basics.",
    body: "Name, address, problem, urgency, new or existing customer. No plumbing advice. No pricing.",
    Icon: ListIcon,
  },
  {
    title: "You get a text in about a minute.",
    body: "“Name – Address – Issue – Urgency” straight to your phone or dispatch text thread.",
    Icon: ClockIcon,
  },
  {
    title: "You call back from your own number.",
    body: "Same number they dialed. One thread. No new app, no weird caller IDs.",
    Icon: PhoneIcon,
  },
  {
    title: "Monday 7am, you get your Weekly Results Report.",
    body: "Calls in, calls you answered, calls WaterLine rescued, junk filtered, rough dollars captured.",
    Icon: DollarIcon,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-paper-warm py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">How WaterLine works</span>
          <h2 className="mt-5 text-4xl font-black leading-[1.1] md:text-5xl">
            Same number. Your phone rings first. We only answer what
            would&rsquo;ve gone to voicemail.
          </h2>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="group relative rounded-2xl border border-ink/8 bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:border-water-500/30 hover:shadow-lift"
            >
              {/* Ghost step number */}
              <span
                aria-hidden
                className="pointer-events-none absolute right-4 top-2 select-none font-display text-5xl font-black leading-none text-ink/[0.08] transition-colors duration-200 group-hover:text-water-500/20"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-water-50 text-water-700 transition duration-200 group-hover:bg-water-700 group-hover:text-paper">
                  <s.Icon className="h-5 w-5" />
                </span>
              </div>

              <h3 className="relative mt-4 font-display text-lg font-black leading-snug text-ink">
                {s.title}
              </h3>
              <p className="relative mt-1.5 text-sm leading-relaxed text-ink-muted">
                {s.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-center justify-center gap-2 rounded-2xl border border-water-500/20 bg-gradient-to-r from-water-50 via-paper to-water-50 px-6 py-6 text-center shadow-card sm:flex-row md:text-lg">
          <span className="font-display font-bold text-water-700">
            Human beats automation.
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-ink/25 sm:block" />
          <span className="text-ink-muted">Automation beats missed calls.</span>
        </div>
      </div>
    </section>
  );
}
