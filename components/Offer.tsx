import { CheckIcon, ShieldIcon } from "./Icons";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";
import { CountUp } from "./motion/CountUp";

const includes = [
  "Up to 50 rescued calls every 4 weeks",
  "$4 per rescued call after 50",
  "No setup fee",
  "No contract — cancel any cycle after the first",
  "Your custom rule sheet built in one short call",
  "Weekly Results Report every Monday at 7am",
];

export function Offer() {
  return (
    <section id="offer" className="bg-paper-warm py-20 md:py-28">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">The offer</span>
          <h2 className="mt-5 text-4xl font-black leading-[1.1] md:text-5xl">
            What it costs (and why one job pays for it).
          </h2>
          <p className="mt-5 max-w-prose text-lg text-ink-muted">
            One job pays for it. Drains are about $400; water heaters about
            $1,800; repipes about $4,500 &mdash; plenty in the $300&ndash;$1,000+
            range. If you don&rsquo;t believe you&rsquo;re losing at least one
            real job a month to voicemail, you shouldn&rsquo;t sign up.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          {/* Pricing card */}
          <Reveal delay={0}>
          <article className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white p-6 shadow-lift sm:p-8 md:p-10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-water-100/60 blur-2xl" />
            <p className="relative text-sm font-semibold uppercase tracking-[0.18em] text-water-700">
              Waterline for plumbers
            </p>
            <div className="relative mt-4 flex items-baseline gap-2">
              <span className="font-display text-6xl font-semibold text-ink md:text-7xl">
                <CountUp value={399} prefix="$" />
              </span>
              <span className="text-sm font-medium text-ink-muted">
                every 4 weeks
              </span>
            </div>
            <p className="relative mt-2 text-sm text-ink-muted">
              For up to 50 rescued calls, then $4 per extra. Cancel any cycle
              after the first.
            </p>

            <Stagger as="ul" className="relative mt-7 grid gap-2.5">
              {includes.map((line) => (
                <StaggerItem as="li" key={line} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf-500/15 text-leaf-600">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-ink">{line}</span>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="relative mt-8 rounded-2xl border border-ink/8 bg-paper-warm p-4 text-sm text-ink-muted">
              <p>
                <span className="font-semibold text-ink">Overage example:</span>{" "}
                If we rescue 60 calls in a 4-week period, the first 50 are
                included and 10 &times; $4 = <span className="font-semibold text-ink">$40 extra</span>.
              </p>
            </div>

            <div className="relative mt-4 rounded-2xl border border-leaf-500/25 bg-leaf-500/[0.06] p-4 text-sm leading-relaxed text-ink">
              <p>
                <span className="font-semibold text-leaf-600">Risk floor:</span>{" "}
                It only ever touches calls you were already missing. It
                cannot lose you a customer you would have answered.{" "}
                <span className="font-semibold">Worst case, you&rsquo;re back to voicemail.</span>
              </p>
            </div>

            <a href="#cta" className="btn-primary mt-8 w-full">
              Get a 10-Minute Missed-Call Leak Check
            </a>
          </article>
          </Reveal>

          {/* Guarantee card */}
          <Reveal delay={0.1}>
          <article
            id="guarantee"
            className="relative overflow-hidden rounded-3xl border border-leaf-500/25 bg-gradient-to-br from-leaf-500/[0.08] to-paper p-6 shadow-card sm:p-8 md:p-10"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-500 text-white">
                <ShieldIcon className="h-6 w-6" />
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-leaf-600">
                First 30 days · One-Job Guarantee
              </p>
            </div>

            <h3 className="mt-5 font-display text-3xl font-black leading-tight text-ink md:text-[2.25rem]">
              One real job, or you get your money back.
            </h3>

            <p className="mt-4 text-ink-muted">
              If we don&rsquo;t clearly rescue at least one real job you
              would&rsquo;ve missed in the first 30 days &mdash; real homeowner,
              real address, a job you couldn&rsquo;t have picked up live &mdash;
              we refund that cycle.{" "}
              <span className="font-semibold text-ink">No arguing.</span>
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <GuaranteeLine>
                We pull up the rescued-call list together.
              </GuaranteeLine>
              <GuaranteeLine>
                If there&rsquo;s no clear saved job, we refund.
              </GuaranteeLine>
              <GuaranteeLine>You keep any jobs you did book.</GuaranteeLine>
            </ul>

            <div className="mt-7 rounded-2xl border border-ink/8 bg-white p-5 text-sm leading-relaxed text-ink">
              <p>
                <span className="font-semibold">Best case,</span> it catches
                extra real jobs every week.
              </p>
              <p className="mt-1.5">
                <span className="font-semibold">Worst case,</span> your first
                4 weeks are protected.
              </p>
            </div>
          </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function GuaranteeLine({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-500" />
      <span className="text-ink">{children}</span>
    </li>
  );
}
