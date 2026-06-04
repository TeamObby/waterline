"use client";

import { useState } from "react";
import {
  ChevronIcon,
  ShieldIcon,
  PhoneIcon,
  ChatIcon,
  WrenchIcon,
  CheckIcon,
} from "./Icons";

const timeline = [
  {
    when: "Day 0",
    title: "Setup (about an hour)",
    body: "One short call to build your rule sheet: service area, zip codes, hours, after-hours rules, jobs you want, jobs you don't, what counts as an emergency, how we should talk, what not to say. We put WaterLine behind your existing number. You test it with a few calls.",
    Icon: PhoneIcon,
  },
  {
    when: "Week 1",
    title: "Rescued-call texts start landing",
    body: "“Name – Address – Issue – Urgency” straight to your phone or dispatch text thread, usually within about a minute of the call ending.",
    Icon: ChatIcon,
  },
  {
    when: "Weeks 2–4",
    title: "You keep working",
    body: "We quietly catch what would've gone to voicemail. No dashboards to babysit. No new apps. Same number on your truck.",
    Icon: WrenchIcon,
  },
  {
    when: "Day 30",
    title: "Guarantee check",
    body: "We open the rescued-call list together. If there isn't at least one real job you would've missed without WaterLine, your first 4 weeks are refunded.",
    Icon: ShieldIcon,
  },
];

export function First30Days() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-paper-warm py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Your first 30 days</span>
          <h2 className="mt-5 text-4xl font-black leading-[1.1] md:text-5xl">
            One short call to set up. Then it runs in the background.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-center">
          {/* Accordion */}
          <ol className="space-y-3">
            {timeline.map((t, i) => {
              const isOpen = open === i;
              const StepIcon = t.Icon;
              return (
                <li
                  key={t.title}
                  className={`overflow-hidden rounded-2xl border bg-white transition duration-200 ${
                    isOpen
                      ? "border-water-500/30 shadow-lift"
                      : "border-ink/8 shadow-card hover:border-ink/15"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 p-5 text-left"
                  >
                    <span
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${
                        isOpen
                          ? "bg-water-700 text-paper"
                          : "bg-water-50 text-water-700"
                      }`}
                    >
                      <StepIcon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                        {t.when}
                      </span>
                      <span
                        className={`mt-0.5 block font-display text-lg font-black leading-snug ${
                          isOpen ? "text-water-700" : "text-ink"
                        }`}
                      >
                        {t.title}
                      </span>
                    </span>
                    <span
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? "bg-water-700 text-paper"
                          : "bg-paper-warm text-ink-muted"
                      }`}
                    >
                      <ChevronIcon
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  {/* Expanding body */}
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pl-[4.75rem] text-sm leading-relaxed text-ink-muted">
                        {t.body}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* Showcase panel — distinct artifact per step */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink p-7 text-paper shadow-lift">
            <div
              aria-hidden
              className="absolute inset-0 -z-0 opacity-70"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 80% 0%, rgba(15,94,154,0.45), transparent 55%), radial-gradient(circle at 0% 100%, rgba(224,130,42,0.22), transparent 55%)",
              }}
            />
            <div className="relative flex flex-col gap-6">
              <div key={open} className="wl-fade">
                <StepVisual index={open} />
              </div>

              {/* Progress dots */}
              <div className="flex items-center gap-2">
                {timeline.map((t, i) => (
                  <button
                    key={t.when}
                    type="button"
                    aria-label={`Show ${t.when}`}
                    onClick={() => setOpen(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === open ? "w-8 bg-rust-400" : "w-4 bg-white/15 hover:bg-white/30"
                    }`}
                  />
                ))}
                <span className="ml-3 font-mono text-xs text-paper/50">
                  {String(open + 1).padStart(2, "0")} / 0{timeline.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-start gap-3 rounded-2xl border border-leaf-500/25 bg-leaf-500/[0.06] p-5">
          <ShieldIcon className="mt-0.5 h-5 w-5 text-leaf-600" />
          <p className="text-sm leading-relaxed text-ink">
            <span className="font-semibold text-leaf-600">No saved job in 30 days?</span>{" "}
            Your first 4 weeks are refunded. You keep any jobs you did book either way.
          </p>
        </div>
      </div>
    </section>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-water-200">
      {children}
    </p>
  );
}

function StepVisual({ index }: { index: number }) {
  // Day 0 — the rule sheet we build together
  if (index === 0) {
    const rows: [string, string, "ok" | "no"][] = [
      ["Service area", "Austin, TX +3 zips", "ok"],
      ["Hours", "Mon–Sat · 7a–6p", "ok"],
      ["Jobs you want", "Heaters · leaks · repipes", "ok"],
      ["Jobs you skip", "New construction", "no"],
    ];
    return (
      <div>
        <Kicker>Your rule sheet</Kicker>
        <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4">
          <ul className="divide-y divide-white/10">
            {rows.map(([k, v, t]) => (
              <li key={k} className="flex items-center justify-between gap-3 py-2.5">
                <span className="text-xs text-paper/60">{k}</span>
                <span className="flex items-center gap-2 text-sm font-medium text-paper">
                  {v}
                  <span
                    className={`inline-flex h-4 w-4 items-center justify-center rounded-full ${
                      t === "ok" ? "bg-leaf-500 text-white" : "bg-white/15 text-paper/50"
                    }`}
                  >
                    {t === "ok" ? (
                      <CheckIcon className="h-3 w-3" />
                    ) : (
                      <span className="h-2 w-2 rounded-full bg-current" />
                    )}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-3 text-xs text-paper/50">
          Built with you on one short call, then we go live behind your number.
        </p>
      </div>
    );
  }

  // Week 1 — the rescued-call text landing on your phone
  if (index === 1) {
    return (
      <div>
        <Kicker>Rescued-call text · ~1 min</Kicker>
        <div className="mt-3 ml-auto max-w-[92%] rounded-2xl rounded-br-md bg-water-700 px-4 py-3 shadow-card">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-water-100">
            Rescued call · just now
          </p>
          <p className="mt-1 text-sm leading-snug text-paper">
            <span className="font-semibold">Maria Lopez</span> · 4412 Oak St
            <br />
            Water heater leaking · today if possible
          </p>
          <p className="mt-2 text-[11px] text-water-100">
            Tap to call back · same number she dialed
          </p>
        </div>
        <p className="mt-3 text-xs text-paper/50">
          Straight to your phone or dispatch thread — no app, no login.
        </p>
      </div>
    );
  }

  // Weeks 2–4 — running quietly in the background
  if (index === 2) {
    const caught = [
      ["Dan Whitford", "Slow kitchen drain"],
      ["K. Patel", "Toilet running · after hours"],
    ];
    return (
      <div>
        <Kicker>Running in the background</Kicker>
        <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-2.5">
            <span className="relative inline-flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf-500/60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-leaf-500" />
            </span>
            <p className="text-sm font-semibold text-paper">WaterLine is live</p>
            <span className="ml-auto text-[11px] text-paper/50">no app to babysit</span>
          </div>
          <ul className="mt-3 space-y-2">
            {caught.map(([name, note]) => (
              <li
                key={name}
                className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-500" />
                <span>
                  <span className="font-semibold text-paper">{name}</span>
                  <span className="block text-xs text-paper/55">{note}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-3 text-xs text-paper/50">
          Same number on your truck. You just keep working.
        </p>
      </div>
    );
  }

  // Day 30 — the guarantee check
  return (
    <div>
      <Kicker>Day 30 · guarantee check</Kicker>
      <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-paper/60">Rescued calls reviewed</span>
          <span className="font-mono text-lg font-semibold text-paper">9</span>
        </div>
        <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-leaf-500 text-white">
            <CheckIcon className="h-3.5 w-3.5" />
          </span>
          <span className="text-sm font-medium text-paper">
            At least one real job clearly saved
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-start gap-2.5 rounded-xl border border-leaf-500/30 bg-leaf-500/10 p-3">
        <ShieldIcon className="mt-0.5 h-4 w-4 shrink-0 text-leaf-500" />
        <p className="text-xs leading-relaxed text-paper/80">
          Guarantee met — otherwise your first 4 weeks are refunded, no arguing.
        </p>
      </div>
    </div>
  );
}
