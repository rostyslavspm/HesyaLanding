"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { MANIFESTO_TEASER } from "@/lib/content/manifesto";
import { TYPE } from "@/lib/design-system";
import { gsap, GSAP_DURATION, GSAP_EASE, STAGGER } from "@/lib/motion/gsap";
import { prefersReducedMotion } from "@/lib/motion/prefersReducedMotion";

export default function ManifestoTeaser() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const element = container.current;
    if (!element) return;

    let observer: IntersectionObserver | undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });

      // The beam arrives before the words it illuminates.
      tl.from(".reaching-hand-field", {
        opacity: 0,
        duration: GSAP_DURATION.reveal,
        ease: GSAP_EASE.hero,
      }).from(
        ".manifesto-copy > *",
        {
          y: 16,
          opacity: 0,
          duration: GSAP_DURATION.revealCopy,
          stagger: STAGGER.default,
          ease: GSAP_EASE.out,
        },
        "-=0.3"
      );

      // Plays once the section is ~a quarter of the way up the viewport —
      // roughly the old ScrollTrigger "top 75%" — via IntersectionObserver
      // instead of ScrollTrigger, which fought with Lenis's own scroll
      // listener under fast direction-reversal scrolling (see gsap.ts).
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            tl.play();
            observer?.disconnect();
          }
        },
        { rootMargin: "0px 0px -25% 0px", threshold: 0 }
      );
      observer.observe(element);
    }, container);

    return () => {
      observer?.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={container}
      id="philosophy"
      aria-label="On attention, agency, and presence"
      data-header-theme="dark"
      className="reaching-hand section-bleed-x relative overflow-hidden section-pad"
    >
      <div className="reaching-hand-field" aria-hidden />
      <div className="reaching-hand-grain" aria-hidden />

      <div className="container-marketing">
        <div className="manifesto-copy max-w-[46rem]">
          <h2 className={`${TYPE.marketingDisplay} text-[var(--color-on-dark)]`}>
            The light does not choose for you.
          </h2>

          <p className="manifesto-lead mt-8">{MANIFESTO_TEASER}</p>

          <Link href="/manifesto" className="manifesto-link mt-10">
            <span>Read the full manifesto</span>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
