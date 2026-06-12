import Image from "next/image";
import { ArrowRightIcon, ShieldIcon, WrenchIcon } from "./Icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-paper-grid opacity-60" />
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-water-50 to-transparent" />
      <div className="container-page grid gap-12 pt-14 pb-20 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:pt-20 md:pb-28">
        <div className="flex flex-col justify-center">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-rust-500" />
            24/7 Missed-Call Rescue System for plumbers
          </span>
          <h1 className="mt-5 font-display text-[2.6rem] font-black leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-[3.5rem]">
            Plumbers: Stop donating emergency jobs to the{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">next guy on Google.</span>
              <span className="absolute bottom-1 left-0 right-0 z-0 h-3 bg-rust-400/50" />
            </span>
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
            We run a 24/7 Missed-Call Rescue System for plumbers.{" "}
            <span className="font-semibold text-ink">You answer first. We rescue the rest.</span>{" "}
            Turn missed calls into rescued plumbing jobs without hiring anyone,
            changing your number, or letting AI touch a call you would have
            answered yourself.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="btn-primary">
              Get a 10-Minute Missed-Call Leak Check
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#fast-start"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-water-700 underline-offset-4 hover:underline"
            >
              Or hear it on your own line
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-leaf-500/20 bg-leaf-500/[0.06] p-4">
            <ShieldIcon className="mt-0.5 h-5 w-5 text-leaf-600" />
            <p className="text-sm leading-relaxed text-ink">
              <span className="font-semibold text-leaf-600">First 30 days protected.</span>{" "}
              If we don&rsquo;t clearly save you at least one real job you
              would&rsquo;ve missed, you get that first 4 weeks back. No arguing.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-ink/30" />
              Keep your number
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-ink/30" />
              No contract
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-ink/30" />
              No new app
            </span>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Scene panel */}
      <div className="relative w-full max-w-md rounded-3xl border border-ink/8 bg-gradient-to-br from-water-50 to-paper-warm p-4 shadow-lift">
        <div className="absolute -top-3 left-6 z-10 flex items-center gap-2 rounded-full bg-ink px-3 py-1 text-xs font-medium text-paper">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-rust-400" />
          Under the sink, 2:14 PM
        </div>

        {/* Real photo: the call coming in mid-job */}
        <div className="overflow-hidden rounded-2xl border border-ink/10 shadow-card">
          <Image
            src="/images/hero/hero-img.png"
            alt="A plumber working under a kitchen sink as a call lights up his phone on the cabinet floor"
            width={1254}
            height={1254}
            priority
            sizes="(max-width: 768px) 100vw, 480px"
            className="h-auto w-full"
          />
        </div>

        {/* Arrow */}
        <div className="my-3 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-wider text-ink-muted">
          <span className="h-px w-10 bg-ink/20" />
          WaterLine answers
          <span className="h-px w-10 bg-ink/20" />
        </div>

        {/* Text message bubble */}
        <div className="ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-water-700 px-4 py-3 text-paper shadow-card">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-water-100">
            Rescued call &middot; just now
          </p>
          <p className="mt-1 text-sm leading-snug">
            <span className="font-semibold">Maria Lopez</span> &middot; 4412 Oak St
            <br />
            Water heater leaking &middot; today if possible
          </p>
          <p className="mt-2 text-[11px] text-water-100">
            Tap to call back &middot; same number she dialed
          </p>
        </div>
      </div>

      {/* Floating chip */}
      <div className="absolute -right-2 top-3 hidden -rotate-3 rounded-xl border border-ink/8 bg-white px-3 py-2 text-xs shadow-card md:block">
        <p className="flex items-center gap-1.5 font-semibold text-ink">
          <WrenchIcon className="h-3.5 w-3.5 text-water-500" />
          One $1,800 water heater
        </p>
        <p className="text-ink-muted">covers WaterLine for 4+ months</p>
      </div>
    </div>
  );
}
