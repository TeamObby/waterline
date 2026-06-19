"use client";

import { useMemo, useState } from "react";
import { PhoneIcon, ShieldIcon, WrenchIcon } from "./Icons";
import { Reveal } from "./motion/Reveal";
import { CountUp } from "./motion/CountUp";

const WATERLINE_COST = 399; // every 4 weeks

const formatMoney = (n: number) =>
  "$" + Math.round(n).toLocaleString("en-US");

export function Calculator() {
  const [callsPerMonth, setCallsPerMonth] = useState(16);
  const [avgJob, setAvgJob] = useState(400);

  const { missedPerMonth, perWeek, perMonth, perYear, coversBy } =
    useMemo(() => {
      const missedPerMonth = callsPerMonth;
      const perMonth = missedPerMonth * avgJob;
      const perWeek = perMonth / 4.3;
      const perYear = perMonth * 12;
      const coversBy = perMonth / WATERLINE_COST;
      return { missedPerMonth, perWeek, perMonth, perYear, coversBy };
    }, [callsPerMonth, avgJob]);

  return (
    <section id="calculator" className="relative bg-paper py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-paper-warm to-transparent" />
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-rust-500" />
            Missed-call leak check
          </span>
          <h2 className="mt-5 text-4xl font-black leading-[1.1] md:text-5xl">
            See what missed calls are really costing you.
          </h2>
          <p className="mt-5 max-w-prose text-lg text-ink-muted">
            Two sliders &mdash; missed calls a month and your average job. See
            what voicemail is quietly costing you every month, then let us run
            it on your real calls.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          {/* Inputs */}
          <Reveal className="card overflow-hidden p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Your numbers
            </p>

            <Slider
              label="Calls per month"
              hint="Roughly how many calls a month hit voicemail because you couldn't grab the phone."
              min={10}
              max={60}
              step={1}
              value={callsPerMonth}
              onChange={setCallsPerMonth}
              display={`${callsPerMonth} ${callsPerMonth === 1 ? "call" : "calls"}`}
              icon={<PhoneIcon className="h-4 w-4 text-water-700" />}
            />

            <Slider
              label="Your average job"
              hint="Drain, water heater, repipe &mdash; whatever your typical residential ticket runs."
              min={150}
              max={4500}
              step={50}
              value={avgJob}
              onChange={setAvgJob}
              display={formatMoney(avgJob)}
              icon={<WrenchIcon className="h-4 w-4 text-water-700" />}
            />

            <button
              type="button"
              onClick={() => {
                setCallsPerMonth(16);
                setAvgJob(400);
              }}
              className="mt-6 text-xs font-medium text-ink-muted underline-offset-4 hover:text-ink hover:underline"
            >
              Reset to defaults
            </button>

            <div className="mt-7 rounded-2xl border border-rust-400/25 bg-rust-400/[0.06] p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                <ShieldIcon className="h-4 w-4 text-rust-500" />
                Most plumbers lowball this
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                You only remember the calls you saw ring. The ones that hit
                voicemail while you were under a sink never show up. Even at{" "}
                <span className="font-semibold text-ink">10 a month</span>, the
                number above is almost always too low &mdash; not too high.
              </p>
            </div>
          </Reveal>

          {/* Results */}
          <Reveal
            delay={0.1}
            className="relative overflow-hidden rounded-3xl border border-ink/10 bg-ink p-7 text-paper shadow-lift md:p-9"
          >
            <div
              aria-hidden
              className="absolute inset-0 -z-0 opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 80% 0%, rgba(15,94,154,0.45), transparent 55%), radial-gradient(circle at 0% 100%, rgba(224,130,42,0.22), transparent 55%)",
              }}
            />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-water-200">
                Voicemail is probably costing you about
              </p>

              <div className="mt-3 flex items-end gap-3">
                <CountUp
                  value={perMonth}
                  prefix="$"
                  duration={0.8}
                  className="font-display text-5xl font-semibold leading-none text-paper sm:text-6xl md:text-7xl"
                />
                <span className="pb-2 text-sm text-paper/70">/ month</span>
              </div>
              <p className="mt-2 text-sm text-paper/70">
                That&rsquo;s{" "}
                <span className="font-semibold text-paper">
                  {Math.round(missedPerMonth)} missed calls a month
                </span>{" "}
                slipping to the next plumber on Google.
              </p>

              <dl className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <Stat label="Per week" value={perWeek} prefix="$" />
                <Stat label="Per year" value={perYear} prefix="$" highlight />
                <Stat label="Missed calls / yr" value={missedPerMonth * 12} />
              </dl>

              <div className="my-7 h-px w-full bg-white/10" />

              <div className="flex items-start gap-3 rounded-2xl border border-leaf-500/30 bg-leaf-500/[0.10] p-4">
                <ShieldIcon className="mt-0.5 h-5 w-5 text-leaf-500" />
                <div className="text-sm leading-relaxed text-paper">
                  <p>
                    WaterLine is{" "}
                    <span className="font-semibold text-paper">$399</span>{" "}
                    every 4 weeks.
                  </p>
                  <p className="mt-1 text-paper/80">
                    {coversBy >= 1.1 ? (
                      <>
                        That covers itself{" "}
                        <span className="font-semibold text-leaf-500">
                          {coversBy.toFixed(1)}&times;
                        </span>{" "}
                        over every month at these numbers.
                      </>
                    ) : coversBy >= 0.9 ? (
                      <>
                        At these numbers, WaterLine roughly pays for itself
                        every month &mdash; before any upside.
                      </>
                    ) : (
                      <>
                        At these numbers, WaterLine doesn&rsquo;t obviously
                        pay for itself. Only sign up if you know there&rsquo;s
                        a leak.
                      </>
                    )}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-paper/85">
                Want us to run this on last week&rsquo;s real calls instead of
                guesses?
              </p>
              <a href="#cta" className="btn-primary mt-3 w-full">
                Get My Leak Check
              </a>
              <p className="mt-3 text-center text-xs text-paper/60">
                Free 10-minute Missed-Call Leak Check. No setup, no contract.
              </p>
            </div>
          </Reveal>
        </div>

        <p className="mt-6 max-w-prose text-xs text-ink-muted">
          Rough math, your numbers. Not a quote &mdash; it counts every missed
          call at your average job. The Leak Check runs the same math on your
          real calls from last week so you&rsquo;re working off facts, not a
          slider.
        </p>
      </div>
    </section>
  );
}

function Slider({
  label,
  hint,
  min,
  max,
  step,
  value,
  onChange,
  display,
  icon,
}: {
  label: string;
  hint: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (n: number) => void;
  display: string;
  icon: React.ReactNode;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="mt-7 first:mt-6">
      <div className="flex items-center justify-between gap-3">
        <label className="flex items-center gap-2 text-sm font-semibold text-ink">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-water-50">
            {icon}
          </span>
          {label}
        </label>
        <span className="font-mono text-base font-semibold tabular-nums text-ink">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="wl-range mt-3 w-full"
        style={{ ["--pct" as string]: `${pct}%` }}
        aria-label={label}
      />
      <p className="mt-2 text-xs text-ink-muted">{hint}</p>
    </div>
  );
}

function Stat({
  label,
  value,
  prefix = "",
  highlight = false,
}: {
  label: string;
  value: number;
  prefix?: string;
  highlight?: boolean;
}) {
  return (
    <div className="rounded-xl bg-white/[0.06] px-3 py-3">
      <dt className="text-[10px] font-medium uppercase tracking-wider text-paper/60">
        {label}
      </dt>
      <dd
        className={`mt-1 font-display text-xl font-semibold tabular-nums md:text-2xl ${
          highlight ? "text-rust-400" : "text-paper"
        }`}
      >
        <CountUp value={value} prefix={prefix} duration={0.8} />
      </dd>
    </div>
  );
}
