import { PhoneIcon, ChatIcon, CheckIcon, ArrowRightIcon } from "./Icons";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";

const demoSteps = [
  {
    Icon: PhoneIcon,
    text: "Call your own business line and let it ring out",
  },
  {
    Icon: ChatIcon,
    text: "Hear WaterLine answer in your company’s name",
  },
  {
    Icon: PhoneIcon,
    text: "Feel your own phone start blowing up",
  },
  {
    Icon: CheckIcon,
    text: "Get the lead texted to you before we hang up",
  },
];

export function FastStart() {
  return (
    <section
      id="fast-start"
      className="relative overflow-hidden bg-paper py-20 md:py-28"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-56 bg-gradient-to-b from-water-50 to-transparent" />
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-rust-500" />
              Fast start
            </span>
            <h2 className="mt-5 text-4xl font-black leading-[1.1] md:text-5xl">
              Don&rsquo;t believe us. Call yourself.
            </h2>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
              Before you decide, we&rsquo;ll do a free 10-minute Missed-Call Leak
              Check on last week&rsquo;s calls so you can see how much work is
              already slipping to the next plumber on Google. On that same call,
              we&rsquo;ll set WaterLine up on your number so you can try it live.
            </p>
            <a href="#cta" className="btn-primary mt-8">
              Get My 10-Minute Leak Check
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <p className="mt-4 max-w-prose text-sm text-ink-muted">
              Once forwarding is on, the next missed call can be your first
              rescued job.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl border border-ink/8 bg-white p-7 shadow-lift md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-water-700">
              On the call, you&rsquo;ll
            </p>
            <Stagger as="ul" className="mt-6 grid gap-4">
              {demoSteps.map((s, i) => (
                <StaggerItem as="li" key={s.text} className="flex items-start gap-4">
                  <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-water-50 text-water-700">
                    <s.Icon className="h-5 w-5" />
                    <span className="absolute -right-1.5 -top-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[11px] font-bold text-paper">
                      {i + 1}
                    </span>
                  </span>
                  <span className="pt-2 text-sm font-medium leading-snug text-ink">
                    {s.text}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
