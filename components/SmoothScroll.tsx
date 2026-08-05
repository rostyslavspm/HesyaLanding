"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap } from "@/lib/motion/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { setLenisInstance } from "@/lib/motion/lenisStore";

/**
 * SmoothScroll — Lenis wrapper providing buttery smooth scroll.
 * Drives Lenis's rAF loop off GSAP's ticker (so both stay on one clock),
 * but doesn't touch GSAP ScrollTrigger — see lib/motion/gsap.ts for why.
 * Fully disabled when user prefers reduced motion.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });
    lenisRef.current = lenis;
    setLenisInstance(lenis);

    lenis.on("scroll", () => {
      window.dispatchEvent(new Event("scroll"));
    });

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    window.dispatchEvent(new Event("scroll"));

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
      lenisRef.current = null;
      setLenisInstance(null);
    };
  }, [prefersReducedMotion]);

  return <>{children}</>;
}
