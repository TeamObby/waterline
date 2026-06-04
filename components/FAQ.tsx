import { ChevronIcon } from "./Icons";

const faqs = [
  {
    q: "Do I have to change my phone number?",
    a: "No. Your main number stays on your truck, cards, website, and Google.",
  },
  {
    q: "What happens if I answer the call?",
    a: "WaterLine never touches it. We only step in when your phone would've sent the caller to voicemail.",
  },
  {
    q: "Will callers know it's AI?",
    a: "It sounds like an office assistant. If someone asks directly, it tells the truth.",
  },
  {
    q: "How fast do I get the job details?",
    a: "By text, usually within about a minute of the call ending.",
  },
  {
    q: "Can I call back from my own number?",
    a: "Yes. You call back from the same number they dialed.",
  },
  {
    q: "Do you charge for spam or wrong numbers?",
    a: "No. Spam, junk, wrong numbers, robocalls, and quick hang-ups are filtered and never billed as rescued calls.",
  },
  {
    q: "What if I go over 50 rescued calls?",
    a: "It's $4 per rescued call after 50 in a 4-week period. If you're over 50 real missed calls, you're probably not short on work.",
  },
  {
    q: "Is there a contract?",
    a: "No long-term contract. You're billed every 4 weeks and can stop before the next bill.",
  },
  {
    q: "Can I change my rule sheet later?",
    a: "Yes. You can tweak service area, hours, job types, and wording any time.",
  },
  {
    q: "Will WaterLine quote prices or diagnose problems?",
    a: "No. It takes the problem, address, and urgency and gets out of the way so you can handle pricing and advice.",
  },
  {
    q: "How does after-hours work?",
    a: "You decide in the rule sheet: which calls you want after hours, what to say, what's urgent, and what can wait.",
  },
  {
    q: "Who is this not for?",
    a: "Shops that truly never miss real calls, anyone outside US residential plumbing, or anyone looking for a generic AI to replace every receptionist.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-paper py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-5 text-4xl font-black leading-[1.1] md:text-5xl">
              Plain answers.
            </h2>
            <p className="mt-5 max-w-prose text-ink-muted">
              Still chewing on something? Email{" "}
              <a
                href="mailto:hello@waterline.example"
                className="font-medium text-water-700 underline-offset-4 hover:underline"
              >
                hello@waterline.example
              </a>
              . We answer ourselves.
            </p>
          </div>

          <div className="divide-y divide-ink/8 rounded-2xl border border-ink/8 bg-white shadow-card">
            {faqs.map((f) => (
              <details key={f.q} className="group px-5 py-4 sm:px-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                  <span className="font-display text-base font-semibold text-ink sm:text-lg">
                    {f.q}
                  </span>
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-paper-warm text-ink-muted transition group-open:rotate-180 group-open:bg-water-100 group-open:text-water-700">
                    <ChevronIcon className="h-4 w-4" />
                  </span>
                </summary>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-muted">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
