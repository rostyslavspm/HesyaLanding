"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureChecklist from "./ui/FeatureChecklist";
import GradientBlob from "./ui/GradientBlob";

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
    const ctx = gsap.context(() => {
      gsap.from(".feature-text", {
        scrollTrigger: { trigger: container.current, start: "top 75%" },
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });
      gsap.from(".feature-visual", {
        scrollTrigger: { trigger: container.current, start: "top 75%" },
        y: 40,
        opacity: 0,
        duration: 1.1,
        delay: 0.2,
        ease: "power3.out",
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const bodyParagraphs = Array.isArray(body) ? body : [body];

  return (
    <section
      ref={container}
      className={`py-20 md:py-32 ${altTint ? "bg-white" : "section-light"}`}
    >
      <div className="container-hesya">
        <div
          className={`grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 ${
            reverse ? "md:[direction:rtl]" : ""
          }`}
        >
          <div className={`feature-text ${reverse ? "md:[direction:ltr]" : ""}`}>
            <p className="text-eyebrow mb-4 text-[var(--foreground-muted)]">{eyebrow}</p>
            <h2 className="text-display-sans mb-6 text-[var(--color-soft-obsidian)]">{title}</h2>
            {bodyParagraphs.map((para) => (
              <p key={para} className="text-body mb-4 text-[var(--foreground-muted)] last:mb-6">
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
            <div className="relative z-10 w-full max-w-sm">{visual}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
