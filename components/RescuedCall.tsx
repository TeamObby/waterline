import { CheckIcon, XIcon } from "./Icons";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";

const counts = [
  "A real homeowner",
  "Calling your main number",
  "You or your office didn't answer",
  "The call would've gone to voicemail",
  "Waterline answered instead",
  "We collected useful job details",
];

const neverBilled = [
  "Spam and robocalls",
  "Obvious junk and telemarketers",
  "Wrong numbers",
  "Hang-ups after a couple seconds",
  "Test calls we run with you",
];

export function RescuedCall() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">What counts as a rescued call</span>
          <h2 className="mt-5 text-4xl font-black leading-[1.1] md:text-5xl">
            Billing should feel obvious and fair.
          </h2>
          <p className="mt-5 text-lg text-ink-muted">
            Your Weekly Results Report shows every rescued call by name and
            address &mdash; so you can see exactly what you&rsquo;re paying for.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
          <StaggerItem className="card p-7">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-leaf-500 text-white">
                <CheckIcon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-black text-ink">
                A rescued call is...
              </h3>
            </div>
            <ul className="mt-5 grid gap-2.5">
              {counts.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-500" />
                  {c}
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem className="card p-7">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-ink/85 text-paper">
                <XIcon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-black text-ink">
                Never billed as rescued calls
              </h3>
            </div>
            <ul className="mt-5 grid gap-2.5">
              {neverBilled.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-ink-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/30" />
                  {c}
                </li>
              ))}
            </ul>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
