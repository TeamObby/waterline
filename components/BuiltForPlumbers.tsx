import { ArrowRightIcon } from "./Icons";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";

const stressCalls = [
  "The 9 pm “pipe just burst” panic call",
  "The guy on speakerphone in a loud basement",
  "The customer who cuts it off mid-sentence",
  "The impatient caller who hangs up at 40 seconds",
];

const obsessions = [
  "An opening line strong enough to cut through background noise",
  "A calm, steady tone that works at 9 am and 11 pm",
  "As few questions as possible, so it feels like help, not an interrogation",
];

export function BuiltForPlumbers() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-paper md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 0%, rgba(15,94,154,0.45), transparent 55%), radial-gradient(circle at 0% 100%, rgba(224,130,42,0.20), transparent 55%)",
        }}
      />
      <div className="container-page relative">
        <Reveal className="max-w-3xl">
          <span className="eyebrow !border-white/15 !bg-white/5 !text-water-100">
            <span className="h-1.5 w-1.5 rounded-full bg-rust-400" />
            Built for plumbers only
          </span>
          <h2 className="mt-5 font-display text-4xl font-black leading-[1.1] text-paper md:text-5xl">
            This isn&rsquo;t a chatbot in a plumber costume.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-paper/75">
            Most AI receptionists are built for &ldquo;any business&rdquo;:
            dentists, salons, law firms. That means they&rsquo;re perfect for no
            one. Waterline is tuned around one call: a homeowner with a plumbing
            problem, calling a plumber who&rsquo;s already on a job.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-water-200">
              We pressure-test it against the calls you actually get
            </p>
            <Stagger as="ul" className="mt-5 grid gap-3">
              {stressCalls.map((s) => (
                <StaggerItem as="li" key={s} className="flex items-start gap-3 text-paper/90">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-rust-400" />
                  <span className="leading-relaxed">{s}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          <Reveal className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-water-200">
              We obsess over
            </p>
            <Stagger as="ul" className="mt-5 grid gap-3">
              {obsessions.map((o) => (
                <StaggerItem as="li" key={o} className="flex items-start gap-3 text-paper/90">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-500" />
                  <span className="leading-relaxed">{o}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>

        <Reveal className="mt-10 flex flex-col items-start gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:flex-row md:items-center md:justify-between md:p-8">
          <p className="max-w-2xl text-lg leading-snug text-paper/90">
            Every call is checked against one standard:{" "}
            <span className="font-semibold text-paper">
              &ldquo;Would you be proud if you had said that?&rdquo;
            </span>{" "}
            If not, we adjust and ship a fix.
          </p>
          <a
            href="#cta"
            className="btn-primary shrink-0"
          >
            See It on Your Own Line
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
