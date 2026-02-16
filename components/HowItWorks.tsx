"use client";

import FadeIn from "./FadeIn";

const steps = [
  {
    title: "Your anchor word stays visible",
    description:
      "Keep a personal word on your Lock Screen and Home Screen — a quiet reminder of what matters to you.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="12" stroke="var(--accent)" strokeWidth="2" />
        <text x="16" y="20" textAnchor="middle" fill="var(--accent)" fontSize="10" fontWeight="600">
          A
        </text>
      </svg>
    ),
  },
  {
    title: "Notice your patterns",
    description:
      "Hesya quietly observes your app-switching to recognize four states — steady pace, long focus, scattered switching, and restless seeking.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="6" fill="var(--accent)" opacity="0.8" />
        <circle cx="16" cy="16" r="10" stroke="var(--accent)" strokeWidth="1.5" opacity="0.5" />
        <circle cx="16" cy="16" r="14" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "A short, guided reset",
    description:
      "Three breathing cycles, name what you feel, reconnect with your anchor word, and choose what comes next. About 2–3 minutes.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M8 20C8 20 12 12 16 12C20 12 24 20 24 20"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 24C6 24 12 16 16 16C20 16 26 24 26 24"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <h2 className="mb-16 text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            How it works
          </h2>
        </FadeIn>

        <div className="grid gap-12 sm:grid-cols-3 sm:gap-8">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.1}>
              <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                  {step.icon}
                </div>
                <h3 className="text-lg font-medium">{step.title}</h3>
                <p className="text-sm leading-relaxed text-foreground-secondary">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
