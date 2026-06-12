import { DropIcon, VoicemailIcon } from "./Icons";

const situations = [
  "Under a sink, wet-handed",
  "On a ladder",
  "Driving between jobs",
  "Already with a customer",
  "After hours with your family",
  "Two calls hit at once",
];

const paidChannels = [
  "Google / LSA",
  "Truck wraps and yard signs",
  "Your website",
  "Years of word-of-mouth",
];

export function Problem() {
  return (
    <section id="problem" className="relative bg-paper py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">The missed-call leak</span>
          <h2 className="mt-5 text-4xl font-black leading-[1.1] md:text-5xl">
            The most expensive calls are the ones
            <span className="block text-ink-muted">you never know about.</span>
          </h2>
          <p className="mt-5 max-w-prose text-lg text-ink-muted">
            You&rsquo;re under a sink, driving between jobs, or on a ladder. The
            phone rings. Then it stops. That homeowner with a leaking water
            heater doesn&rsquo;t leave a voicemail. Burst-pipe customers
            don&rsquo;t leave voicemails; they call the next plumber on Google.
            The job is gone and you never even see it.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <ul className="grid gap-3 sm:grid-cols-2">
            {situations.map((s) => (
              <li
                key={s}
                className="flex items-start gap-3 rounded-xl border border-ink/8 bg-white p-4 text-sm font-medium text-ink shadow-card"
              >
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-rust-500" />
                {s}
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-ink/8 bg-paper-warm p-6">
            <div className="flex items-center gap-3 text-ink">
              <VoicemailIcon className="h-5 w-5 text-rust-600" />
              <p className="font-semibold">Phone rings. You can&rsquo;t grab it.</p>
            </div>
            <p className="mt-3 text-ink-muted">
              Voicemail picks up. Homeowner hangs up and calls the next
              plumber on Google.
            </p>
            <div className="mt-6 border-t border-ink/8 pt-5">
              <p className="text-sm font-medium uppercase tracking-wide text-ink-muted">
                You already paid to make that phone ring
              </p>
              <ul className="mt-3 grid gap-2">
                {paidChannels.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm text-ink">
                    <DropIcon className="h-4 w-4 text-water-500" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Math */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-ink/8 bg-ink p-8 text-paper shadow-lift md:p-12">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-water-200">
                Gut check
              </p>
              <h3 className="mt-3 font-display text-3xl font-black leading-tight text-paper md:text-4xl">
                How many of those ring out every month?
              </h3>
              <p className="mt-4 max-w-prose text-paper/70">
                One missed emergency call is worth about $1,800. Repipes are
                around $4,500. It only takes a couple a month to dwarf what
                WaterLine costs.
              </p>
            </div>

            <dl className="grid grid-cols-3 gap-3 rounded-2xl bg-white/5 p-4 text-center">
              <Metric value="~$1,800" label="Emergency call" />
              <Metric value="~$4,500" label="Repipe" highlight />
              <Metric value="$0" label="Voicemail left" />
            </dl>
          </div>

          <div className="my-8 h-px w-full bg-white/10" />

          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <p className="font-display text-2xl leading-snug text-paper md:text-3xl">
              One <span className="text-rust-400">$1,800 water heater</span>{" "}
              covers WaterLine for 4+ months.
            </p>
            <p className="text-paper/70">
              The money doesn&rsquo;t disappear because you&rsquo;re bad at
              business. It disappears because nobody picked up during those
              ten seconds.{" "}
              <span className="font-semibold text-paper">
                That&rsquo;s the missed-call leak. WaterLine plugs it.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({
  value,
  label,
  highlight = false,
}: {
  value: string;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div className="rounded-xl bg-white/5 px-3 py-4">
      <dt className="text-[11px] font-medium uppercase tracking-wider text-paper/60">
        {label}
      </dt>
      <dd
        className={`mt-1 font-display text-2xl font-semibold md:text-3xl ${
          highlight ? "text-rust-400" : "text-paper"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}
