import { Logo } from "./Logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "#how" },
      { label: "Leak check", href: "#calculator" },
      { label: "Pricing", href: "#offer" },
      { label: "Guarantee", href: "#guarantee" },
    ],
  },
  {
    title: "Answers",
    links: [
      { label: "The missed-call leak", href: "#problem" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Get my Leak Check", href: "#cta" },
      { label: "hello@waterline.example", href: "mailto:hello@waterline.example" },
    ],
  },
];

const socials = [
  { label: "X (Twitter)", href: "#", Icon: XLogo },
  { label: "Facebook", href: "#", Icon: FacebookLogo },
  { label: "Instagram", href: "#", Icon: InstagramLogo },
  { label: "LinkedIn", href: "#", Icon: LinkedinLogo },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-x-hidden bg-ink-soft">
      <div className="container-page relative z-10 pt-14">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink shadow-lift">
          {/* Warm/cool glow so it isn't flat navy-on-navy */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 92% -15%, rgba(15,94,154,0.28), transparent 46%), radial-gradient(circle at 0% 120%, rgba(224,130,42,0.16), transparent 44%)",
            }}
          />
          {/* Top accent hairline */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-water-500/40 to-transparent" />

          <div className="relative z-10 p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-[1.25fr_2fr]">
              {/* Brand */}
              <div>
                <Logo size="lg" />
                <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">
                  WaterLine sits behind your existing number and only answers
                  what would&rsquo;ve gone to voicemail &mdash; so good jobs
                  stop slipping to the next plumber on Google.
                </p>
                <div className="mt-6 flex items-center gap-2.5">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/12 bg-white/[0.04] text-paper/70 transition hover:border-rust-400/50 hover:bg-white/[0.08] hover:text-paper"
                    >
                      <s.Icon />
                    </a>
                  ))}
                </div>
              </div>

              {/* Link columns */}
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                {columns.map((col) => (
                  <div key={col.title}>
                    <p className="text-sm font-semibold text-paper">
                      {col.title}
                    </p>
                    <ul className="mt-4 space-y-3">
                      {col.links.map((l) => (
                        <li key={l.label}>
                          <a
                            href={l.href}
                            className="text-sm text-paper/55 transition hover:text-paper"
                          >
                            {l.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-8 h-px w-full bg-white/10" />

            <div className="flex flex-col gap-3 text-xs text-paper/45 md:flex-row md:items-center md:justify-between">
              <p>&copy; {year} WaterLine. Built for US residential plumbers.</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <a
                  href="#"
                  className="underline-offset-4 transition hover:text-paper hover:underline"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="underline-offset-4 transition hover:text-paper hover:underline"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Oversized wordmark, cut off behind the card */}
      <div
        aria-hidden
        className="pointer-events-none relative z-0 -mt-10 flex h-[14vw] items-start justify-center overflow-hidden md:-mt-16"
      >
        <span className="select-none whitespace-nowrap font-display text-[24vw] font-black leading-none tracking-tight text-white/[0.05]">
          WaterLine
        </span>
      </div>
    </footer>
  );
}

function XLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M17.5 3h3.2l-7 8 8.2 10h-6.4l-5-6.1L8.8 21H3.6l7.5-8.6L3.3 3h6.6l4.5 5.9L17.5 3Zm-1.1 16h1.8L7.7 4.8H5.8L16.4 19Z" />
    </svg>
  );
}

function FacebookLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M13.5 8.5V7c0-.7.4-1 1-1H16V3h-2.2c-2.1 0-3.3 1.4-3.3 3.4v2.1H8.5v3h2v9h3v-9h2.3l.4-3h-2.7Z" />
    </svg>
  );
}

function InstagramLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.6" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M6.5 4.75A1.75 1.75 0 1 1 3 4.75a1.75 1.75 0 0 1 3.5 0ZM3.4 8.5h3.1V21H3.4V8.5Zm5.3 0h3v1.7c.5-.9 1.7-2 3.6-2 3 0 4.2 2 4.2 5.1V21h-3.1v-6.1c0-1.6-.6-2.6-2-2.6-1.1 0-1.7.7-2 1.4-.1.3-.1.6-.1 1V21H8.7V8.5Z" />
    </svg>
  );
}
