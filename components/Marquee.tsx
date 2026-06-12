const rowA = [
  "You answer first",
  "We rescue the rest",
  "24/7 missed-call rescue",
  "Keep your number",
  "Texts you the job",
  "AI instead of voicemail",
  "Live the same day",
];

const rowB = [
  "First 30 days protected",
  "One-job guarantee",
  "No setup fee",
  "Cancel any cycle",
  "No contract",
  "Every call recorded",
  "Built for plumbers only",
];

function Row({
  items,
  tone,
  reverse = false,
}: {
  items: string[];
  tone: "rust" | "ink";
  reverse?: boolean;
}) {
  const isInk = tone === "ink";
  return (
    <div className={`overflow-hidden ${isInk ? "bg-ink" : "bg-rust-400"}`}>
      <div className={`wl-marquee-track py-3 ${reverse ? "wl-marquee-reverse" : ""}`}>
        {[0, 1].map((dup) => (
          <div
            key={dup}
            aria-hidden={dup === 1}
            className="flex shrink-0 items-center"
          >
            {items.map((t) => (
              <span key={t} className="flex items-center">
                <span
                  className={`mx-6 whitespace-nowrap font-display text-sm font-black uppercase tracking-wider md:text-base ${
                    isInk ? "text-paper" : "text-ink"
                  }`}
                >
                  {t}
                </span>
                <span
                  className={`h-1.5 w-1.5 shrink-0 rotate-45 ${
                    isInk ? "bg-rust-400" : "bg-ink/70"
                  }`}
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <section aria-label="What you get with WaterLine" className="border-y border-ink/10">
      <Row items={rowA} tone="rust" />
      <Row items={rowB} tone="ink" reverse />
    </section>
  );
}
