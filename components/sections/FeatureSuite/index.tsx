"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureCard from "./FeatureCard";
import SuiteTabs, { useFeatureTabSpy } from "./SuiteTabs";
import { SECTIONS, TYPE } from "@/lib/design-system";
import { useChromeHeight } from "@/hooks/useChromeHeight";
import { isFeatureId } from "@/lib/motion/scroll";
import { prefersReducedMotion } from "@/lib/motion/prefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureSuite() {
  const container = useRef<HTMLElement>(null);
  const stickyChromeRef = useRef<HTMLElement>(null);
  const { activeId, scrollToFeature } = useFeatureTabSpy();

  useChromeHeight(stickyChromeRef, "--suite-sticky-height");

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!isFeatureId(hash)) return;

    const timer = window.setTimeout(() => {
      scrollToFeature(hash);
    }, 100);

    return () => window.clearTimeout(timer);
  }, [scrollToFeature]);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 32,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      id="features"
      aria-label="What Hesya offers"
      className={`${SECTIONS.stone} section-bleed-x section-pad`}
    >
      <div className="container-marketing border-grid-x">
        <header
          ref={stickyChromeRef}
          data-chrome="feature-suite-sticky"
          className="sticky z-[var(--z-sticky-subnav)] bg-[var(--color-stone-100)]"
          style={{ top: "var(--header-height)" }}
        >
          <div className="border-b border-[var(--border-strong)] py-8 md:py-6">
            <h2 className={`${TYPE.suiteHeading} max-w-[900px]`}>
              What Hesya offers
            </h2>
          </div>

          <SuiteTabs activeId={activeId} onSelect={scrollToFeature} />
        </header>

        <div className="bg-hatch-diagonal flex flex-col border-x border-b border-[var(--border-subtle)] py-9">
          <FeatureCard />
        </div>
      </div>
    </section>
  );
}
