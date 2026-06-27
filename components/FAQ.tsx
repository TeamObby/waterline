"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronIcon } from "./Icons";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const faqs = [
  {
    q: "What happens to my number?",
    a: "You keep your same number and carrier. We add one forwarding rule that only triggers when you don't answer. Turn it off anytime.",
  },
  {
    q: "What if I answer my own phone?",
    a: "Then nothing changes. It only touches calls you were already missing.",
  },
  {
    q: "What if my customers don't like AI?",
    a: "They're not choosing between you and AI. They're choosing between AI and voicemail. This gets them to you faster, and every call is recorded so you can judge for yourself.",
  },
  {
    q: "How fast is setup?",
    a: "One forwarding rule. We set it. Live in one business day.",
  },
  {
    q: "What does it cost?",
    a: "$399 every 4 weeks for up to 50 rescued calls, then $4 per extra. No setup fee. No contract; cancel any cycle after the first. If we don't clearly rescue at least one real job you would've missed in the first 30 days, that cycle is refunded.",
  },
  {
    q: "What if I want to stop?",
    a: "Turn off the forwarding rule and you're back to how things are today. Your number was never ours to hold.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-paper py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-5 text-4xl font-black leading-[1.1] md:text-5xl">
              Plain answers.
            </h2>
            <p className="mt-5 max-w-prose text-ink-muted">
              Still chewing on something? Email{" "}
              <a
                href="mailto:Team@waterlinevoice.com"
                className="font-medium text-water-700 underline-offset-4 hover:underline"
              >
                Team@waterlinevoice.com
              </a>
              . We answer ourselves.
            </p>
          </Reveal>

          <Stagger className="divide-y divide-ink/8 rounded-2xl border border-ink/8 bg-white shadow-card">
            {faqs.map((f) => (
              <StaggerItem key={f.q}>
                <FaqItem q={f.q} a={f.a} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  return (
    <div className="px-5 py-4 sm:px-6">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="font-display text-base font-semibold text-ink sm:text-lg">
          {q}
        </span>
        <span
          className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition ${
            open
              ? "rotate-180 bg-water-100 text-water-700"
              : "bg-paper-warm text-ink-muted"
          }`}
        >
          <ChevronIcon className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-muted">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
