"use client";

import FadeIn from "./FadeIn";

export default function PatternSection() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-xl text-center">
        <FadeIn>
          <h2 className="mb-8 text-2xl font-light tracking-tight sm:text-3xl">
            Hesya notices. It doesn&apos;t judge.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mb-6 text-base leading-relaxed text-foreground-secondary">
            Your device use has patterns — long focus sessions,
            scattered switching, restless seeking. These aren&apos;t problems.
            They&apos;re natural rhythms.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mb-12 text-base leading-relaxed text-foreground-secondary">
            Hesya observes them quietly, on your device,
            and offers a gentle invitation when one surfaces.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="glass mx-auto max-w-xs rounded-2xl px-8 py-5">
            <p
              className="text-base italic"
              style={{ color: "var(--wave)" }}
            >
              &ldquo;Want a small pause?&rdquo;
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
