"use client";

import FadeIn from "./FadeIn";

const examples = ["Peace", "Balance", "Presence"];

export default function AnchorPhilosophy() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-xl text-center">
        <FadeIn>
          <h2 className="mb-8 text-2xl font-light tracking-tight sm:text-3xl">
            What word anchors you?
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mb-6 text-base leading-relaxed text-foreground-secondary">
            An anchor word is a value or intention that matters to you.
            It stays visible on your Lock Screen, your Home Screen,
            and at the center of every pause.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mb-12 text-base leading-relaxed text-foreground-secondary">
            Not an affirmation. Not a goal.
            <br />
            A quiet reminder of what you already know.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex items-center justify-center gap-6">
            {examples.map((word) => (
              <span
                key={word}
                className="font-serif text-xl tracking-[0.06em] uppercase"
                style={{ color: "var(--wave)" }}
              >
                {word}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
