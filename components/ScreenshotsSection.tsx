"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";

const STEPS = [
  { src: "/screenshots/screen-home.png", alt: "Home screen", caption: "Notice your patterns" },
  { src: "/screenshots/screen-lockscreen.png", alt: "Lock screen", caption: "A gentle pause" },
  { src: "/screenshots/screen-breathing.png", alt: "Breathing ritual", caption: "Take a breath" },
  { src: "/screenshots/screen-affect.png", alt: "Affect", caption: "Return to presence" },
];

export default function ScreenshotsSection({ id = "screens" }: { id?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const els = stepRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (!visible) return;
        const idx = Number((visible.target as HTMLElement).dataset.index);
        if (!Number.isNaN(idx)) setActiveIndex(idx);
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: [0, 0.15, 0.35, 0.55, 0.75, 1] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} className="section-standard" aria-label="App walkthrough">
      <div className="container-hesya grid items-start gap-12 md:grid-cols-2 md:gap-16">
        {/* Left: step captions */}
        <div className="flex flex-col gap-16 md:gap-24">
          <div className="max-w-[28rem]">
            <p className="text-eyebrow">A WALKTHROUGH</p>
            <h2 className="mt-4 text-display-sm" style={{ fontStyle: "italic" }}>
              A quiet sequence.
            </h2>
          </div>

          {STEPS.map(({ caption }, i) => (
            <div
              key={i}
              data-index={i}
              ref={(el) => { stepRefs.current[i] = el; }}
              className="min-h-[5rem]"
            >
              <FadeIn delay={i * 0.08}>
                <p
                  className="text-heading"
                  style={{
                    color: activeIndex === i ? "var(--foreground)" : "var(--foreground-muted)",
                    fontFamily: activeIndex === i ? "var(--font-serif)" : undefined,
                    transition: `color var(--dur-transition) var(--ease-hesya)`,
                  }}
                >
                  {caption}
                </p>
              </FadeIn>
            </div>
          ))}
        </div>

        {/* Right: sticky phone */}
        <div className="relative flex justify-center md:justify-end">
          <div className="md:sticky md:top-28">
            <div
              className="relative aspect-[9/19] w-[260px] overflow-hidden sm:w-[300px] md:w-[340px]"
              style={{
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-hero)",
                border: "1px solid var(--border)",
              }}
            >
              {STEPS.map(({ src, alt }, i) => (
                <div
                  key={src}
                  className="absolute inset-0"
                  style={{
                    opacity: activeIndex === i ? 1 : 0,
                    transition: `opacity var(--dur-ritual) var(--ease-hesya)`,
                    pointerEvents: "none",
                  }}
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={450}
                    height={920}
                    className="h-full w-full object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>

            <p className="mt-4 text-center text-micro" style={{ color: "var(--foreground-muted)" }}>
              iPhone-only · designed to feel native
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
