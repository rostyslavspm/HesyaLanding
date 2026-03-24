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
      const el = ref.current;
      if (!el) { ticking = false; return; }
      const scrolled = window.scrollY > offset;
      el.toggleAttribute("data-scrolled", scrolled);

      /* Inline-style backdrop-filter & color-mix because Tailwind v4
         PostCSS strips these from class-based CSS rules. */
      if (scrolled) {
        el.style.backdropFilter = "blur(24px)";
        el.style.webkitBackdropFilter = "blur(24px)";
        el.style.background =
          "color-mix(in srgb, var(--background) 94%, transparent)";
        el.style.borderBottom = "1px solid var(--border)";
      } else {
        el.style.backdropFilter = "blur(18px)";
        el.style.webkitBackdropFilter = "blur(18px)";
        el.style.background =
          "color-mix(in srgb, var(--background) 84%, transparent)";
        el.style.borderBottom =
          "1px solid color-mix(in srgb, var(--border) 75%, transparent)";
      }

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
