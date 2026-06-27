import { CheckIcon, XIcon } from "./Icons";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";

const comparisons = [
  {
    label: "Versus voicemail",
    them: "Beep, hang up, no info.",
    us: "Answers instead of voicemail, keeps them on the line, gives you a clean job to call back.",
  },
  {
    label: "Versus generic AI receptionists",
    them: "Try to replace your office on every call.",
    us: "Never touches calls you answer. Only steps in on calls that were about to die in voicemail.",
  },
  {
    label: "Versus answering services / call centers",
    them: "Shared operators, hold music, thin notes — they still miss calls.",
    us: "Lives behind your own line, only on calls you truly missed, follows your rule sheet.",
  },
  {
    label: "Versus CRMs and job software",
    them: "Organize leads you already caught.",
    us: "Catches leads before they leave for the next plumber.",
  },
];

export function WhyDifferent() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Why this is different</span>
          <h2 className="mt-5 text-4xl font-black leading-[1.1] md:text-5xl">
            Same number. No replacement. No extra phone chaos.
            <span className="block text-ink-muted">
              You answer first. We rescue the rest.
            </span>
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
          {comparisons.map((c) => (
            <StaggerItem
              key={c.label}
              className="group relative overflow-hidden rounded-3xl border border-ink/8 bg-white shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-lift"
            >
              {/* Label bar */}
              <div className="flex items-center gap-2.5 border-b border-ink/8 bg-paper-warm/60 px-6 py-3.5">
                <span className="h-1.5 w-1.5 rounded-full bg-rust-500" />
                <p className="text-sm font-semibold uppercase tracking-wider text-ink">
                  {c.label}
                </p>
              </div>

              <div className="grid sm:grid-cols-2">
                {/* Them */}
                <div className="border-b border-ink/8 p-6 sm:border-b-0 sm:border-r">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink/10 text-ink-muted">
                      <XIcon className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                      Them
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {c.them}
                  </p>
                </div>

                {/* Waterline Voice */}
                <div className="relative bg-gradient-to-br from-leaf-500/[0.10] via-leaf-500/[0.04] to-paper p-6">
                  <span className="absolute right-4 top-4 rounded-full bg-leaf-500/12 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-leaf-600">
                    Better
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-leaf-500 text-white shadow-card">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-wider text-leaf-600">
                      Waterline Voice
                    </p>
                  </div>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-ink">
                    {c.us}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
