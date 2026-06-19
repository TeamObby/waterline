"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon, ShieldIcon, WrenchIcon } from "./Icons";
import { FloatLoop } from "./motion/Reveal";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-paper-grid opacity-60" />
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-water-50 to-transparent" />
      <div className="container-page grid gap-12 pt-14 pb-20 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:pt-20 md:pb-28">
        <motion.div
          className="flex flex-col justify-center"
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
        >
          <motion.span variants={item} className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-rust-500" />
            24/7 Missed-Call Rescue System for plumbers
          </motion.span>
          <motion.h1
            variants={item}
            className="mt-5 text-balance font-display text-[2.15rem] font-black leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-[3.25rem]"
          >
            Plumbers: Stop donating emergency jobs to{" "}
            <span className="[text-decoration-line:underline] [text-decoration-color:#F1A24A80] [text-decoration-thickness:0.5em] [text-underline-offset:-0.12em] [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
              the next guy on Google.
            </span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted"
          >
            We run a 24/7 Missed-Call Rescue System for plumbers.{" "}
            <span className="font-semibold text-ink">You answer first. We rescue the rest.</span>{" "}
            Turn missed calls into rescued plumbing jobs without hiring anyone,
            changing your number, or letting AI touch a call you would have
            answered yourself.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
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
          </motion.div>
          <motion.div
            variants={item}
            className="mt-6 flex items-start gap-3 rounded-xl border border-leaf-500/20 bg-leaf-500/[0.06] p-4"
          >
            <ShieldIcon className="mt-0.5 h-5 w-5 text-leaf-600" />
            <p className="text-sm leading-relaxed text-ink">
              <span className="font-semibold text-leaf-600">First 30 days protected.</span>{" "}
              If we don&rsquo;t clearly save you at least one real job you
              would&rsquo;ve missed, you get that first 4 weeks back. No arguing.
            </p>
          </motion.div>
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted"
          >
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
          </motion.div>
        </motion.div>

        <HeroVisual reduce={!!reduce} />
      </div>
    </section>
  );
}

function HeroVisual({ reduce }: { reduce: boolean }) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Scene panel */}
      <motion.div
        className="relative w-full max-w-md rounded-3xl border border-ink/8 bg-gradient-to-br from-water-50 to-paper-warm p-4 shadow-lift"
        initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
      >
        <motion.div
          className="absolute -top-3 left-6 z-10 flex items-center gap-2 rounded-full bg-ink px-3 py-1 text-xs font-medium text-paper"
          initial={reduce ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5, ease: EASE }}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-rust-400" />
          Under the sink, 2:14 PM
        </motion.div>

        {/* Real photo: the call coming in mid-job */}
        <div className="overflow-hidden rounded-2xl border border-ink/10 shadow-card">
          <Image
            src="/images/hero/hero2-img.png"
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
        <motion.div
          className="ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-water-700 px-4 py-3 text-paper shadow-card"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65, ease: EASE }}
        >
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
        </motion.div>
      </motion.div>

      {/* Floating chip */}
      <motion.div
        className="absolute -right-2 top-3 hidden md:block"
        initial={reduce ? false : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8, ease: EASE }}
      >
        <FloatLoop className="-rotate-3 rounded-xl border border-ink/8 bg-white px-3 py-2 text-xs shadow-card">
          <p className="flex items-center gap-1.5 font-semibold text-ink">
            <WrenchIcon className="h-3.5 w-3.5 text-water-500" />
            One $1,800 water heater
          </p>
          <p className="text-ink-muted">covers WaterLine for 4+ months</p>
        </FloatLoop>
      </motion.div>
    </div>
  );
}
