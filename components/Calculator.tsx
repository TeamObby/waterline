"use client";

import { useMemo, useState } from "react";
import { DollarIcon, PhoneIcon, ShieldIcon, WrenchIcon } from "./Icons";

const WATERLINE_COST = 399; // every 4 weeks

const formatMoney = (n: number) =>
  "$" + Math.round(n).toLocaleString("en-US");

export function Calculator() {
  const [missedPerWeek, setMissedPerWeek] = useState(6);
  const [avgJob, setAvgJob] = useState(400);
  const [bookingRate, setBookingRate] = useState(33); // %

  const { jobsPerWeek, perWeek, perMonth, perYear, coversBy } = useMemo(() => {
    const jobsPerWeek = (missedPerWeek * bookingRate) / 100;
    const perWeek = jobsPerWeek * avgJob;
    const perMonth = perWeek * 4;
    const perYear = perWeek * 52;
    const coversBy = perMonth / WATERLINE_COST;
    return { jobsPerWeek, perWeek, perMonth, perYear, coversBy };
  }, [missedPerWeek, avgJob, bookingRate]);

  return (
    <section id="calculator" className="relative bg-paper py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-paper-warm to-transparent" />
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-rust-500" />
            Missed-call leak check
          </span>
          <h2 className="mt-5 text-4xl font-black leading-[1.1] md:text-5xl">
            Do the math on your own numbers.
          </h2>
          <p className="mt-5 max-w-prose text-lg text-ink-muted">
            Three sliders. Real numbers. See what voicemail is quietly
            costing you every month &mdash; and how fast WaterLine pays for
            itself.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          {/* Inputs */}
          <div className="card overflow-hidden p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Your numbers
            </p>

            <Slider
              label="Missed calls per week"
              hint="Calls that hit voicemail because you couldn't grab the phone."
              min={0}
              max={25}
              step={1}
              value={missedPerWeek}
              onChange={setMissedPerWeek}
              display={`${missedPerWeek} ${missedPerWeek === 1 ? "call" : "calls"}`}
              icon={<PhoneIcon className="h-4 w-4 text-water-700" />}
            />

            <Slider
              label="Your average job"
              hint="Drain, faucet, water heater &mdash; whatever your typical residential ticket runs."
              min={150}
              max={2500}
              step={50}
              value={avgJob}
              onChange={setAvgJob}
              display={formatMoney(avgJob)}
              icon={<WrenchIcon className="h-4 w-4 text-water-700" />}
            />

            <Slider
              label="How many would've booked?"
              hint="Most plumbers land 1 in 3 missed calls if they reach back fast. Drag to your gut feel."
              min={10}
              max={60}
              step={1}
              value={bookingRate}
              onChange={setBookingRate}
              display={`${bookingRate}%`}
              icon={<DollarIcon className="h-4 w-4 text-water-700" />}
            />

            <button
              type="button"
              onClick={() => {
                setMissedPerWeek(6);
                setAvgJob(400);
                setBookingRate(33);
              }}
              className="mt-6 text-xs font-medium text-ink-muted underline-offset-4 hover:text-ink hover:underline"
            >
              Reset to defaults
            </button>
          </div>

          {/* Results */}
          <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-ink p-7 text-paper shadow-lift md:p-9">
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
                Walking out the door
              </p>

              <div className="mt-3 flex items-end gap-3">
                <span className="font-display text-6xl font-semibold leading-none text-paper md:text-7xl">
                  {formatMoney(perMonth)}
                </span>
                <span className="pb-2 text-sm text-paper/70">/ month</span>
              </div>
              <p className="mt-2 text-sm text-paper/70">
                Based on{" "}
                <span className="font-semibold text-paper">
                  {jobsPerWeek.toFixed(1)} jobs a week
                </span>{" "}
                slipping to the next plumber on Google.
              </p>

              <dl className="mt-7 grid grid-cols-3 gap-3">
                <Stat label="Per week" value={formatMoney(perWeek)} />
                <Stat label="Per year" value={formatMoney(perYear)} highlight />
                <Stat
                  label="Jobs lost / yr"
                  value={Math.round(jobsPerWeek * 52).toLocaleString()}
                />
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

              <a href="#cta" className="btn-primary mt-6 w-full">
                Plug this leak in 30 days
              </a>
              <p className="mt-3 text-center text-xs text-paper/60">
                One-Job Guarantee. First 4 weeks refunded if we don&rsquo;t clearly save one.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-prose text-xs text-ink-muted">
          Rough math, your numbers. Not a quote. Most 1&ndash;3 truck shops we
          talk to land between $1,500 and $6,000 in missed jobs a month before
          they start tracking it.
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
  highlight = false,
}: {
  label: string;
  value: string;
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
        {value}
      </dd>
    </div>
  );
}
