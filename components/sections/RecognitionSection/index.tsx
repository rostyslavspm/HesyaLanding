"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { RECOGNITION_QUOTES } from "@/lib/content/recognitionQuotes";
import { SECTIONS, TYPE } from "@/lib/design-system";
import {
  prefersReducedMotion,
  subscribeReducedMotion,
} from "@/lib/motion/prefersReducedMotion";

const ROTATE_MS = 10000;

export default function RecognitionSection() {
  const [index, setIndex] = useState(0);
  const isStatic = useSyncExternalStore(
    subscribeReducedMotion,
    prefersReducedMotion,
    () => true
  );

  useEffect(() => {
    if (isStatic) return;

    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % RECOGNITION_QUOTES.length);
    }, ROTATE_MS);

    return () => clearInterval(interval);
  }, [isStatic]);

  const activeQuote = RECOGNITION_QUOTES[index];

  return (
    <section
      id="recognition"
      aria-label="Recognizing drift"
      className={`${SECTIONS.mist} section-bleed-x border-y border-[var(--border-subtle)] section-pad-compact`}
    >
      <div className="container-marketing">
        <div className="mx-auto flex max-w-[680px] flex-col items-center text-center">
          <p className="text-eyebrow text-[var(--foreground-muted)]">You already feel it</p>

          <h2 className={`${TYPE.marketingDisplay} mt-3 text-[var(--foreground)]`}>
            Drift has a shape.
          </h2>

          <div
            className="relative mt-8 min-h-[4.5rem] w-full"
            aria-live={isStatic ? undefined : "polite"}
            aria-atomic="true"
          >
            {isStatic ? (
              <p className="text-lg leading-[1.65] text-[var(--foreground-secondary)]">
                &ldquo;{activeQuote}&rdquo;
              </p>
            ) : (
              RECOGNITION_QUOTES.map((quote, quoteIndex) => (
                <p
                  key={quote}
                  className="absolute inset-x-0 text-lg leading-[1.65] text-[var(--foreground-secondary)] transition-opacity duration-700"
                  style={{ opacity: quoteIndex === index ? 1 : 0 }}
                  aria-hidden={quoteIndex !== index}
                >
                  &ldquo;{quote}&rdquo;
                </p>
              ))
            )}
          </div>

          <p className="mt-6 text-micro text-[var(--foreground-muted)]">
            Hesya doesn&apos;t fix this with control — it offers a quiet way back.
          </p>
        </div>
      </div>
    </section>
  );
}
