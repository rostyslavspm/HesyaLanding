import FadeIn from "./FadeIn";

type WhatHesyaDoesSectionProps = {
  id?: string;
};

const BENEFITS = [
  { title: "Notice", text: "See when your rhythm changes — switching, stretching, drifting." },
  { title: "Pause", text: "A gentle cue creates a moment of space before reacting." },
  { title: "Return", text: "Choose where to place your attention — with calm, not guilt." },
];

/**
 * What Hesya Does — 3 benefit cards (scan-first, still poetic).
 */
export default function WhatHesyaDoesSection({ id = "what" }: WhatHesyaDoesSectionProps) {
  return (
    <section id={id} className="section-standard bg-chapter-soft" aria-label="What Hesya does">
      <div className="container-hesya">
        <div className="mx-auto max-w-[42rem] text-center">
          <FadeIn delay={0}>
            <p className="text-eyebrow">WHAT HESYA DOES</p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="mt-6 text-body text-reading">
              We create a moment of space between distraction and response —
              so you can breathe, and decide where to place your attention.
            </p>
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {BENEFITS.map((b) => (
            <div key={b.title} className="glass rounded-[var(--radius-md)] p-6">
              <h3 className="text-heading" style={{ color: "var(--foreground)" }}>
                {b.title}
              </h3>
              <p className="mt-3 text-body-sm text-reading">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
