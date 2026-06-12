"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const navLinks = [
  { href: "#calculator", label: "Leak check" },
  { href: "#how", label: "How it works" },
  { href: "#offer", label: "Offer" },
  { href: "#faq", label: "FAQ" },
  { href: "#cta", label: "Get started" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05080e]/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link
          href="/"
          aria-label="WaterLine home"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-paper/70 transition hover:text-paper"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#cta" className="btn-primary !py-2.5 !text-sm">
            Get my Leak Check
          </a>
          {/* Hamburger (mobile only) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/12 text-paper transition hover:border-white/30 md:hidden"
          >
            {open ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/10 transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-page flex flex-col py-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-3 text-sm font-medium text-paper/80 transition hover:text-paper"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-full"
          >
            Get my Leak Check
          </a>
        </nav>
      </div>
    </header>
  );
}
