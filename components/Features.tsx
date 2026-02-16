"use client";

import FadeIn from "./FadeIn";

const features = [
  {
    title: "Pattern detection",
    description: "Observes app-switching to recognize four behavioral states. Everything happens on-device.",
  },
  {
    title: "Guided ritual",
    description: "Three cycles of the physiological sigh, naming what you feel, and setting a small intention.",
  },
  {
    title: "Widgets",
    description: "Six sizes for Home Screen and Lock Screen. Each shows your anchor word and current state.",
  },
  {
    title: "Dynamic Island",
    description: "On supported devices, a gentle invitation appears when Hesya notices a pattern worth pausing for.",
  },
  {
    title: "Smart reminders",
    description: "Optional nudges after sustained activity or long breaks. Quiet hours keep your rest undisturbed.",
  },
  {
    title: "Works offline",
    description: "No internet needed. No accounts, no sync, no cloud. Just you and your device.",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <h2 className="mb-16 text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            Features
          </h2>
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.05}>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="mb-2 font-medium">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-foreground-secondary">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
