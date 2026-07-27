"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Scroll enclosure — drives `--hero-depth` (0→1) as the hero leaves the
 * viewport, so the night field thickens as you descend (brief §04 spatial
 * law). The star field itself is owned by HeroStarfield. Suppressed under
 * reduced motion (CSS zeroes the enclosure), so no work is done there.
 */
export default function HeroDrift() {
  const reduced = usePrefersReducedMotion();
  const frame = useRef(0);

  useEffect(() => {
    if (reduced) return;

    const stage = document.getElementById("hero-viewport");
    if (!stage) return;

    const readDepth = () => {
      const rect = stage.getBoundingClientRect();
      const travel = rect.height || 1;
      const progress = Math.min(Math.max(-rect.top / travel, 0), 1);
      stage.style.setProperty("--hero-depth", progress.toFixed(3));
    };

    const schedule = () => {
      if (!frame.current) {
        frame.current = requestAnimationFrame(() => {
          frame.current = 0;
          readDepth();
        });
      }
    };

    readDepth();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = 0;
    };
  }, [reduced]);

  return null;
}
