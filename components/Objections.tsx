const items = [
  {
    q: "“We already have an answering service.”",
    a: "Keep it. WaterLine sits behind your own number and catches the calls that still hit voicemail, sit on hold too long, or come back with thin notes. It's there for the leak.",
  },
  {
    q: "“I don't want a robot talking to my customers.”",
    a: "Fair. WaterLine only answers when you can't. It sticks to simple questions from your rule sheet. No fake small talk, no plumbing advice. If someone asks if it's automated, it tells them.",
  },
  {
    q: "“$399 is a lot.”",
    a: "It is if voicemail isn't costing you jobs. If it is, one decent job a month pays for it. One water heater can cover months. That's why the first 30 days are tied to saving at least one real job.",
  },
  {
    q: "“We answer most calls.”",
    a: "You probably do. The leak is the ones that land when you're under a sink, driving, at dinner, or when two ring at once. Those are usually the calls with money on them.",
  },
  {
    q: "“I'm too busy to set this up.”",
    a: "That's exactly when calls go to voicemail. Setup is one short call. After that, it runs in the background.",
  },
  {
    q: "“Just send me info.”",
    a: "You're reading it. The useful next step is a quick missed-call leak check on your real numbers and, if it pencils out, a 30-day protected run. No pressure.",
  },
];

export function Objections() {
  return (
    <section id="objections" className="bg-paper-warm py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Straight answers</span>
          <h2 className="mt-5 text-4xl font-black leading-[1.1] md:text-5xl">
            What plumbers usually ask.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {items.map((it) => (
            <article
              key={it.q}
              className="card p-6 transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <p className="font-display text-lg font-semibold leading-snug text-ink">
                {it.q}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {it.a}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
