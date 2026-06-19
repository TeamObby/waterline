import { ArrowRightIcon, ShieldIcon } from "./Icons";
import { Reveal } from "./motion/Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-paper md:py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(15,94,154,0.5), transparent 50%), radial-gradient(circle at 80% 90%, rgba(224,130,42,0.25), transparent 50%)",
        }}
      />
      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow !border-white/15 !bg-white/5 !text-water-100">
            <span className="h-1.5 w-1.5 rounded-full bg-rust-400" />
            You answer first. We rescue the rest.
          </span>
          <Reveal as="h2" y={24} className="mt-6 font-display text-4xl font-black leading-[1.05] text-paper md:text-6xl">
            You&rsquo;re already paying to make the phone ring.
            <span className="block text-water-200">
              WaterLine just picks up when you can&rsquo;t.
            </span>
          </Reveal>
          <p className="mt-6 text-lg text-paper/75">
            Gut feel: how many calls hit voicemail last week? If we rescue even
            one real job you would&rsquo;ve missed, this covers itself.
          </p>

          <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#cta" className="btn-primary">
              Get a 10-Minute Missed-Call Leak Check
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#fast-start"
              className="btn border border-white/20 bg-white/[0.06] text-paper hover:bg-white/[0.1] focus-visible:ring-white/20"
            >
              See it on your own line
            </a>
          </Reveal>

          <div className="mx-auto mt-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm text-paper/85">
            <ShieldIcon className="h-4 w-4 text-leaf-500" />
            One-Job Guarantee. First 4 weeks refunded if we don&rsquo;t clearly save one.
          </div>
        </div>
      </div>
    </section>
  );
}
