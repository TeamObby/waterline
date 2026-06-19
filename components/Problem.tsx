import Image from "next/image";
import {
  DropIcon,
  LadderIcon,
  CarIcon,
  UsersIcon,
  MoonIcon,
  PhoneIcon,
  MissedCallIcon,
} from "./Icons";
import { Reveal, Stagger, StaggerItem, FloatLoop } from "./motion/Reveal";
import { CountUp } from "./motion/CountUp";

const situations = [
  { label: "Under a sink", Icon: DropIcon },
  { label: "On a ladder", Icon: LadderIcon },
  { label: "Driving", Icon: CarIcon },
  { label: "With customer", Icon: UsersIcon },
  { label: "After hours", Icon: MoonIcon },
  { label: "Two calls", Icon: PhoneIcon },
];

export function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden bg-paper py-20 md:py-28">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Copy + situation chips */}
          <div>
            <Reveal>
              <span className="eyebrow !text-water-600">
                <span className="h-1.5 w-1.5 rounded-full bg-water-500" />
                The missed-call leak
              </span>
              <h2 className="mt-5 text-4xl font-black leading-[1.1] md:text-5xl">
                The most expensive calls are the ones{" "}
                <span className="text-water-500">you never know about.</span>
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-muted">
                You&rsquo;re busy. The phone rings. You miss it. Voicemail
                answers. The homeowner doesn&rsquo;t wait &mdash; they call the
                next plumber on Google.
              </p>
            </Reveal>

            <Stagger className="mt-8 flex flex-wrap gap-2.5">
              {situations.map((s) => (
                <StaggerItem
                  key={s.label}
                  className="flex min-w-[4.75rem] flex-1 flex-col items-center gap-1.5 rounded-xl border border-ink/8 bg-white px-3 py-3 text-center shadow-card"
                >
                  <s.Icon className="h-5 w-5 text-water-600" />
                  <span className="text-xs font-medium text-ink">{s.label}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Phone visual with floating cards */}
          <Reveal delay={0.1} className="relative">
            <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-[20rem]">
              <Image
                src="/images/problem/incoming-call-phone.png"
                alt="A homeowner's incoming call about a leaking water heater ringing out to voicemail"
                width={800}
                height={1600}
                sizes="(max-width: 1024px) 80vw, 360px"
                className="h-auto w-full"
              />

              {/* Missed-call notification */}
              <FloatLoop
                distance={6}
                duration={4.5}
                className="absolute -right-3 top-10 w-48 rounded-2xl border border-ink/8 bg-white p-3.5 shadow-lift sm:-right-8 sm:w-52"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-alarm-500">
                    <MissedCallIcon className="h-3.5 w-3.5" />
                    Missed call
                  </span>
                  <span className="text-[11px] tabular-nums text-ink-muted">0:17</span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
                  Voicemail picked up. Homeowner called the next plumber.
                </p>
              </FloatLoop>

              {/* Curved arrow */}
              <svg
                aria-hidden
                viewBox="0 0 80 90"
                className="absolute -right-6 top-28 hidden h-24 w-20 text-water-400 sm:block"
                fill="none"
              >
                <path
                  d="M70 4C76 28 70 52 44 64"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="1 7"
                  strokeLinecap="round"
                />
                <path
                  d="M52 60l-9 5 3-10"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Lost-money stat */}
              <FloatLoop
                distance={5}
                duration={5.5}
                delay={0.4}
                className="absolute -bottom-4 -right-1 w-44 rounded-2xl border border-water-500/20 bg-water-50 p-4 shadow-card sm:-right-6 sm:w-48"
              >
                <p className="text-xs font-medium text-ink-muted">
                  Every missed call could be
                </p>
                <p className="mt-1 font-display text-2xl font-black leading-none text-water-600">
                  $650&ndash;$1,200
                </p>
                <p className="mt-1 text-sm font-bold text-ink-muted">gone.</p>
              </FloatLoop>
            </div>
          </Reveal>
        </div>

        {/* The money math */}
        <Reveal className="mt-16 overflow-hidden rounded-3xl border border-ink/8 bg-ink p-6 text-paper shadow-lift sm:p-8 md:p-12">
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

            <dl className="grid grid-cols-1 gap-3 rounded-2xl bg-white/5 p-4 text-center sm:grid-cols-3">
              <Metric value={1800} prefix="~$" label="Emergency call" />
              <Metric value={4500} prefix="~$" label="Repipe" highlight />
              <Metric value={0} prefix="$" label="Voicemail left" />
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
        </Reveal>
      </div>
    </section>
  );
}

function Metric({
  value,
  prefix = "",
  label,
  highlight = false,
}: {
  value: number;
  prefix?: string;
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
        <CountUp value={value} prefix={prefix} />
      </dd>
    </div>
  );
}
