"use client";

import { useEffect } from "react";

export function useHeaderScroll(
  ref: React.RefObject<HTMLElement | null>,
  offset = 24
) {
  useEffect(() => {
    if (!ref.current) return;

    let ticking = false;

    const update = () => {
      const scrolled = window.scrollY > offset;
      ref.current?.toggleAttribute("data-scrolled", scrolled);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update(); // run once on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref, offset]);
}
