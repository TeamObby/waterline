import { CheckIcon, ShieldIcon } from "./Icons";

const proofs = [
  {
    title: "Every call on tape",
    body: "A link in every summary text and full playback in your dashboard. Nothing to take on faith.",
  },
  {
    title: "Hear-it-first demo",
    body: "On your own line. You call yourself, hear it answer as your shop, and feel your phone ring.",
  },
  {
    title: "Boxed-in behavior",
    body: "It cannot quote prices, diagnose, promise times, or “book jobs.” It only captures and connects.",
  },
  {
    title: "One proven voice",
    body: "Calm, steady, plumbing-tested for every shop. What’s custom is your name, services, hours, area, and wording.",
  },
  {
    title: "Nothing dies",
    body: "Even misreads and hang-ups drop into your texts so you can call them back.",
  },
  {
    title: "Results plus guarantee",
    body: "A weekly results report and the refund guarantee close the belief gap.",
  },
];

export function BeliefSafety() {
  return (
    <section className="bg-paper-warm py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-rust-500" />
            Proof, not platitudes
          </span>
          <h2 className="mt-5 text-4xl font-black leading-[1.1] md:text-5xl">
            AI that can&rsquo;t embarrass your shop.
          </h2>
          <p className="mt-5 max-w-prose text-lg text-ink-muted">
            The real fear is simple: &ldquo;AI will embarrass my shop.&rdquo; So
            we give proof, not platitudes.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {proofs.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-ink/8 bg-white p-6 shadow-card"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-leaf-500/15 text-leaf-600">
                <CheckIcon className="h-4 w-4" />
              </span>
              <h3 className="mt-4 font-display text-lg font-black leading-snug text-ink">
                {p.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                {p.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-start gap-3 rounded-2xl border border-leaf-500/25 bg-leaf-500/[0.07] p-5 md:items-center">
          <ShieldIcon className="mt-0.5 h-5 w-5 shrink-0 text-leaf-600 md:mt-0" />
          <p className="text-ink">
            <span className="font-semibold">Every call is recorded.</span> If you
            hear something you don&rsquo;t like, we fix it.
          </p>
        </div>
      </div>
    </section>
  );
}
