"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Reveal from "./motion/Reveal";

const STEPS = [
  {
    src: "/screenshots/screen-home.png",
    alt: "Home screen",
    caption: "Notice your patterns",
    description: "Hesya quietly observes your rhythm — switching, stretching, drifting — and shows it on your lock screen.",
  },
  {
    src: "/screenshots/screen-lockscreen.png",
    alt: "Lock screen",
    caption: "A gentle pause",
    description: "When it senses drift, Hesya offers a brief moment. Not a block — an invitation to check in with yourself.",
  },
  {
    src: "/screenshots/screen-breathing.png",
    alt: "Breathing ritual",
    caption: "Take a breath",
    description: "Three cycles of the physiological sigh. A simple act that shifts your nervous system from reactive to present.",
  },
  {
    src: "/screenshots/screen-affect.png",
    alt: "Affect",
    caption: "Return to presence",
    description: "Name what you feel, set a small intention, and see your anchor word — the last thing before you continue.",
  },
];

const clamp = (n: number, a = 0, b = 1) => Math.min(b, Math.max(a, n));

export default function ScreenshotsSection({ id = "screens" }: { id?: string }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);

  const stepTransition = prefersReducedMotion ? "none" : "background 500ms var(--ease-hesya), box-shadow 500ms var(--ease-hesya)";
  const captionTransition = prefersReducedMotion ? "none" : "color 500ms var(--ease-hesya), transform 500ms var(--ease-hesya)";
  const underlineTransition = prefersReducedMotion ? "none" : "opacity 500ms var(--ease-hesya), background 500ms var(--ease-hesya)";
  const driftTransition = prefersReducedMotion ? "none" : "transform 120ms linear";
  const imageTransition = prefersReducedMotion ? "none" : "opacity 650ms var(--ease-hesya)";
  const lastIndexRef = useRef(0);

  // TUNE THIS: pacing per step (higher = slower, more luxurious)
  const perStepVH = 90;
  const totalHeight = useMemo(() => `${STEPS.length * perStepVH}vh`, []);

  // Optional: parallax drift amount for phone/glow (subtle)
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;

      const scrollInto = -rect.top; // px into section
      const scrollRange = rect.height - viewportH; // px total while section is in view

      const p = clamp(scrollRange > 0 ? scrollInto / scrollRange : 0);
      setProgress(p);

      const raw = p * (STEPS.length - 1);
      const next = Math.round(raw);

      const last = lastIndexRef.current;
      if (next !== last) {
        lastIndexRef.current = next;
        setActiveIndex(next);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Parallax: very subtle drift (px)
  const phoneDrift = (progress - 0.5) * -18; // range approx -9..+9
  const glowDrift = (progress - 0.5) * 28; // range approx -14..+14

  return (
    <section
      id={id}
      ref={sectionRef}
      aria-label="App walkthrough"
      className="relative px-[var(--gutter)]"
      style={{ height: totalHeight }}
    >
      <div className="container-hesya sticky top-24 grid items-start gap-12 md:grid-cols-2 md:gap-16">
        {/* LEFT: editorial + guided steps */}
        <div className="relative">
          <div className="max-w-[28rem]">
            <Reveal variant="slide-left">
              <p className="text-eyebrow">A WALKTHROUGH</p>
            </Reveal>
            <Reveal variant="slide-left" delay={0.08}>
              <h2 className="mt-4 text-display-sm" style={{ fontStyle: "italic" }}>
                A quiet sequence.
              </h2>
            </Reveal>
          </div>

          {/* guide rail */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-[7.75rem] hidden h-[calc(100%-7.75rem)] w-px md:block"
            style={{ background: "color-mix(in srgb, var(--border) 60%, transparent)" }}
          />

          <div className="mt-10 flex flex-col gap-10 md:mt-12 md:gap-12">
            {STEPS.map(({ caption, description }, i) => {
              const isActive = i === activeIndex;

              return (
                <div key={i} className="relative pl-0 md:pl-8">
                  {/* dot */}
                  <div
                    aria-hidden
                    className="absolute left-0 top-[0.35rem] hidden md:block"
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      background: isActive
                        ? "color-mix(in srgb, var(--foreground) 72%, transparent)"
                        : "color-mix(in srgb, var(--foreground-muted) 40%, transparent)",
                      boxShadow: isActive ? "0 0 0 6px rgba(255,255,255,0.03)" : "none",
                      transform: "translateX(-50%)",
                      transition: stepTransition,
                    }}
                  />

                  <p
                    className="text-heading"
                    style={{
                      color: isActive ? "var(--foreground)" : "var(--foreground-muted)",
                      fontFamily: isActive ? "var(--font-serif)" : undefined,
                      transform: isActive ? "translateX(8px)" : "translateX(0px)",
                      transition: captionTransition,
                    }}
                  >
                    {caption}
                  </p>

                  <p
                    className="mt-2 text-body-sm max-w-[22rem]"
                    style={{
                      color: "var(--foreground-secondary)",
                      opacity: isActive ? 0.85 : 0,
                      transition: captionTransition,
                    }}
                  >
                    {description}
                  </p>

                  {/* subtle underline / emphasis */}
                  <div
                    aria-hidden
                    className="mt-4 h-px w-24"
                    style={{
                      background: isActive
                        ? "color-mix(in srgb, var(--foreground) 35%, transparent)"
                        : "color-mix(in srgb, var(--border) 60%, transparent)",
                      opacity: isActive ? 0.85 : 0.35,
                      transition: underlineTransition,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: sticky phone + parallax glow */}
        <div className="relative flex justify-center pt-[7.75rem] md:pt-[7.75rem] md:justify-end">
          <div className="md:sticky md:top-28">
            <div className="relative w-[260px] sm:w-[300px] md:w-[340px]">
              {/* glow behind device (parallax) */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-14 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, var(--orb-glow) 0%, transparent 60%)",
                  opacity: 0.16,
                  filter: "blur(14px)",
                  transform: `translate3d(0, ${glowDrift}px, 0)`,
                  transition: driftTransition,
                }}
              />

              {/* device stack */}
              <div
                className="relative"
                style={{
                  filter: "drop-shadow(var(--shadow-hero))",
                  transform: `translate3d(0, ${phoneDrift}px, 0)`,
                  transition: driftTransition,
                }}
              >
                {STEPS.map(({ src, alt }, i) => (
                  <div
                    key={src}
                    className={i === 0 ? "relative" : "absolute inset-0"}
                    style={{
                      opacity: activeIndex === i ? 1 : 0,
                      transition: imageTransition,
                      pointerEvents: "none",
                    }}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      width={450}
                      height={920}
                      className="block h-auto w-full select-none"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>
            </div>

            <p
              className="mt-4 text-center text-micro"
              style={{ color: "var(--foreground-muted)" }}
            >
              iPhone-only · designed to feel native
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
