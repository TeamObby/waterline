import { Reveal } from "./motion/Reveal";

const items = [
  "You answer first",
  "We rescue the rest",
  "24/7 missed-call rescue",
  "Keep your number",
  "Texts you the job",
  "AI instead of voicemail",
  "Live the same day",
  "First 30 days protected",
  "One-job guarantee",
  "No setup fee",
  "Cancel any cycle",
  "No contract",
  "Every call recorded",
  "Built for plumbers only",
];

export function Marquee() {
  return (
    <section aria-label="What you get with Waterline" className="py-8 md:py-12">
      <div className="container-page">
        <Reveal>
        <div
          className="overflow-hidden border-y border-rust-400/25 bg-rust-400/[0.10]"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="wl-marquee-track py-3.5">
            {[0, 1].map((dup) => (
              <div
                key={dup}
                aria-hidden={dup === 1}
                className="flex shrink-0 items-center"
              >
                {items.map((t) => (
                  <span key={t} className="flex items-center">
                    <span className="mx-6 whitespace-nowrap font-display text-sm font-bold uppercase tracking-wide text-ink/75 md:text-[0.95rem]">
                      {t}
                    </span>
                    <span className="h-1 w-1 shrink-0 rotate-45 bg-rust-500/60" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
