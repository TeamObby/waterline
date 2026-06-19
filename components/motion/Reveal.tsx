"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

type Tag = "div" | "section" | "span" | "ul" | "li" | "p" | "h1" | "h2" | "h3";

/**
 * Single element that fades + rises into view once, when scrolled near.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: Tag;
}) {
  const reduce = useReducedMotion();
  const MotionTag = (motion as any)[as];
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Container that staggers its <StaggerItem> children into view.
 */
export function Stagger({
  children,
  className,
  as = "div",
  stagger = 0.08,
  delayChildren = 0.04,
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
  stagger?: number;
  delayChildren?: number;
}) {
  const reduce = useReducedMotion();
  const MotionTag = (motion as any)[as];
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren } },
      }}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
  y = 16,
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
  y?: number;
}) {
  const MotionTag = (motion as any)[as];
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
      }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Gentle infinite float — for decorative floating chips/badges.
 */
export function FloatLoop({
  children,
  className,
  distance = 6,
  duration = 3.5,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
