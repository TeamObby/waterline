import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";

const reportLines = [
  { label: "Total calls in", value: "47" },
  { label: "Calls you answered yourself", value: "31" },
  { label: "Calls WaterLine rescued", value: "9" },
  { label: "Junk filtered out", value: "7" },
  { label: "Rough dollars captured", value: "~$2,400" },
];

const rescued = [
  { name: "Maria Lopez", addr: "4412 Oak St", note: "Water heater leaking — today" },
  { name: "Dan Whitford", addr: "118 Birch Ln", note: "Slow kitchen drain" },
  { name: "K. Patel", addr: "9 Sycamore Ct", note: "Toilet running, after hours" },
];

export function WeeklyReport() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal>
            <span className="eyebrow">Weekly Results Report</span>
            <h2 className="mt-5 text-4xl font-black leading-[1.1] md:text-5xl">
              One email. Every Monday at 7am.
            </h2>
            <p className="mt-5 max-w-prose text-lg text-ink-muted">
              Your scorecard for the missed-call leak &mdash; and proof the
              thing is working. Good week or bad, the report still sends.
            </p>
            <Stagger as="ul" className="mt-7 space-y-2.5 text-ink">
              <Bullet>Total calls in</Bullet>
              <Bullet>Calls you answered yourself</Bullet>
              <Bullet>
                Calls WaterLine rescued (names, addresses, rough job types)
              </Bullet>
              <Bullet>Junk filtered out</Bullet>
              <Bullet>Rough dollars captured based on your job mix</Bullet>
            </Stagger>
            <p className="mt-7 max-w-prose text-ink-muted">
              You&rsquo;re already paying to make the phone ring.{" "}
              <span className="font-semibold text-ink">
                WaterLine shows you how many of those calls were saved from
                voicemail.
              </span>
            </p>
          </Reveal>

          {/* Email mock */}
          <Reveal delay={0.1} className="relative">
            <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-3xl bg-water-100" />
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-lift">
              <div className="flex items-center justify-between border-b border-ink/8 bg-paper-warm px-5 py-3 text-xs text-ink-muted">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-rust-500/70" />
                  <span className="h-2 w-2 rounded-full bg-paper-edge" />
                  <span className="h-2 w-2 rounded-full bg-paper-edge" />
                </span>
                <span className="font-mono">Mon 7:00 AM &middot; from WaterLine</span>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-water-700">
                  Weekly Results &middot; Apr 22–28
                </p>
                <h3 className="mt-1 font-display text-2xl font-black text-ink">
                  Hey Mike &mdash; here&rsquo;s last week.
                </h3>

                <dl className="mt-6 divide-y divide-ink/8 border-y border-ink/8">
                  {reportLines.map((r) => (
                    <div
                      key={r.label}
                      className="flex items-center justify-between py-3"
                    >
                      <dt className="text-sm text-ink-muted">{r.label}</dt>
                      <dd className="font-mono text-base font-semibold text-ink">
                        {r.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    Rescued this week
                  </p>
                  <Stagger as="ul" className="mt-3 space-y-2">
                    {rescued.map((r) => (
                      <StaggerItem
                        as="li"
                        key={r.name}
                        className="flex items-start justify-between gap-4 rounded-xl border border-ink/8 bg-paper-warm px-4 py-2.5 text-sm"
                      >
                        <span>
                          <span className="font-semibold text-ink">{r.name}</span>{" "}
                          <span className="text-ink-muted">&middot; {r.addr}</span>
                          <span className="block text-xs text-ink-muted">{r.note}</span>
                        </span>
                        <span className="pill bg-leaf-500/10 text-leaf-600">rescued</span>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>

                <p className="mt-6 text-xs text-ink-muted">
                  Reply to this email anytime to tweak your rule sheet.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <StaggerItem as="li" className="flex items-start gap-3">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-water-500" />
      <span>{children}</span>
    </StaggerItem>
  );
}
