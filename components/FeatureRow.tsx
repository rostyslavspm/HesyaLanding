"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureChecklist from "./ui/FeatureChecklist";
import GradientBlob from "./ui/GradientBlob";
import { DURATION, GSAP_EASE, STAGGER } from "../lib/motion";

gsap.registerPlugin(ScrollTrigger);

export type FeatureRowProps = {
  eyebrow: string;
  title: string;
  body: string | string[];
  bullets: string[];
  visual: ReactNode;
  gradientColor: string;
  reverse?: boolean;
  altTint?: boolean;
};

export default function FeatureRow({
  eyebrow,
  title,
  body,
  bullets,
  visual,
  gradientColor,
  reverse = false,
  altTint = false,
}: FeatureRowProps) {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (!prefersReduced) {
        gsap.from(".feature-text", {
          scrollTrigger: { trigger: container.current, start: "top 75%" },
          y: 30,
          opacity: 0,
          duration: DURATION.sectionEnter,
          stagger: STAGGER.default,
          ease: GSAP_EASE.standard,
        });
        gsap.from(".feature-visual", {
          scrollTrigger: { trigger: container.current, start: "top 75%" },
          y: 40,
          opacity: 0,
          duration: DURATION.heroLayer,
          delay: 0.15,
          ease: GSAP_EASE.standard,
        });
      }
    }, container);
    return () => ctx.revert();
  }, []);

  const bodyParagraphs = Array.isArray(body) ? body : [body];

  return (
    <section
      ref={container}
      className={`section-standard section-divider-soft ${altTint ? "section-light-alt" : "section-light"}`}
    >
      <div className="container-hesya">
        <div
          className={`grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-[4.5rem] ${
            reverse ? "md:[direction:rtl]" : ""
          }`}
        >
          <div className={`feature-text ${reverse ? "md:[direction:ltr]" : ""}`}>
            <p className="text-eyebrow mb-4 text-[var(--foreground-muted)]">{eyebrow}</p>
            <h2 className="mb-6 text-[clamp(2rem,4vw,3.08rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-[var(--color-soft-obsidian)]">
              {title}
            </h2>
            {bodyParagraphs.map((para) => (
              <p key={para} className="text-body mb-4 max-w-xl text-[var(--foreground-muted)] last:mb-6">
                {para}
              </p>
            ))}
            <FeatureChecklist items={bullets} />
          </div>

          <div
            className={`feature-visual relative flex items-center justify-center ${
              reverse ? "md:[direction:ltr]" : ""
            }`}
          >
            <GradientBlob color={gradientColor} />
            <div className="relative z-10 w-full max-w-[500px]">{visual}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
