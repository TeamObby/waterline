import { DollarIcon, ClockIcon, ArrowRightIcon } from "./Icons";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";

const wins = [
  {
    label: "Money",
    Icon: DollarIcon,
    body: "Stop donating emergency jobs to the next plumber on Google. The calls you were already missing turn into rescued work on your board.",
  },
  {
    label: "Freedom",
    Icon: ClockIcon,
    body: "The phone stops owning dinner, Sundays, and 9 pm. You answer when you can; Waterline quietly covers the rest.",
  },
];

export function Prize() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-rust-500" />
            The prize
          </span>
          <h2 className="mt-5 text-4xl font-black leading-[1.1] md:text-5xl">
            More jobs. Fewer nights ruined by the phone.
          </h2>
          <p className="mt-5 max-w-prose text-lg text-ink-muted">
            There are two wins. Even when two or three people call at once, they
            all stay with your shop instead of rolling to voicemail or down the
            Google list.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
          {wins.map((w) => (
            <StaggerItem
              key={w.label}
              className="card p-7 transition hover:-translate-y-0.5 hover:shadow-lift md:p-9"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-water-50 text-water-700">
                <w.Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-black text-ink">
                {w.label}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{w.body}</p>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Pull-quote */}
        <Reveal>
        <figure className="mt-10 overflow-hidden rounded-3xl border border-rust-500/20 bg-gradient-to-br from-rust-400/[0.10] to-paper p-8 shadow-card md:p-12">
          <blockquote className="font-display text-2xl font-black leading-snug text-ink md:text-3xl">
            &ldquo;Stop donating emergency jobs to the next plumber on Google,
            and get your evenings back while you do it.&rdquo;
          </blockquote>
          <a href="#cta" className="btn-primary mt-8">
            Get a 10-Minute Missed-Call Leak Check
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </figure>
        </Reveal>
      </div>
    </section>
  );
}
