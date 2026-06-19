"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

/**
 * Animates a whole number from its previous value up to `value`.
 * - On first scroll into view it counts up from 0.
 * - When `value` changes later (e.g. a slider moves) it tweens to the new value.
 * Respects prefers-reduced-motion (jumps straight to the value).
 *
 * Uses serializable props (prefix/suffix) rather than a format function so it
 * can be rendered from server components.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const prev = useRef(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (reduce) {
      prev.current = value;
      setDisplay(value);
      return;
    }
    if (!inView) return;
    const controls = animate(prev.current, value, {
      duration,
      ease: EASE,
      onUpdate: (v) => setDisplay(v),
    });
    prev.current = value;
    return () => controls.stop();
  }, [value, inView, reduce, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix + Math.round(display).toLocaleString("en-US") + suffix}
    </span>
  );
}
