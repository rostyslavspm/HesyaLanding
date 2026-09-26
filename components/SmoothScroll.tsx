"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

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

    // No lenis.on("scroll") → window "scroll" re-dispatch: Lenis scrolls the
    // window natively, so listeners already get real scroll events, and Lenis
    // listens to window "scroll" itself — re-dispatching looped until the
    // call stack overflowed.

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

  // Back/forward should keep the position the browser restores; a normal link
  // should start the new page at the top.
  const isHistoryNav = useRef(false);
  useEffect(() => {
    const onPop = () => {
      isHistoryNav.current = true;
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // A Lenis glide still in flight when you click a link kept running on the
  // next page — clicking right after a flick opened the home page mid-scroll,
  // with the hero already off-screen. Kill the glide on every route change.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    if (isHistoryNav.current) {
      isHistoryNav.current = false;
      const id = requestAnimationFrame(() => {
        lenis.scrollTo(window.scrollY, { immediate: true, force: true });
      });
      return () => cancelAnimationFrame(id);
    }
    // Hash targets (/#features) are scrolled by the feature-suite logic.
    if (!window.location.hash) {
      lenis.scrollTo(0, { immediate: true, force: true });
    } else {
      lenis.stop();
      lenis.start();
    }
  }, [pathname]);

  return <>{children}</>;
}
