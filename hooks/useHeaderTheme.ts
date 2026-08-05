"use client";

import { useEffect, useState } from "react";
import { subscribeLenisInstance, getLenisInstance } from "@/lib/motion/lenisStore";

/**
 * Tracks which theme the sticky header should wear right now, by checking
 * what's actually sitting behind it — any element marked
 * `data-header-theme="dark"` (the night-sky hero, the reaching-hand
 * manifesto section, or any future dark section) darkens the header while
 * it's underneath; everywhere else falls back to `staticVariant`.
 *
 * This replaces a one-shot "swap dark→light after the hero" rule, which
 * left the header stuck light over any *later* dark section on the same
 * page. Pages with no marked sections (support/privacy/manifesto) never
 * match anything, so they keep `staticVariant` unchanged, always.
 */
export function useHeaderTheme(
  staticVariant: "light" | "dark"
): "light" | "dark" {
  const [theme, setTheme] = useState<"light" | "dark">(staticVariant);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "[data-header-theme]"
    );
    if (!sections.length) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const headerHeight =
        Number.parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-height"
          )
        ) || 0;
      // Probe just under the header's own bottom edge — whichever marked
      // section currently occupies that band is what the header sits on.
      const probeY = headerHeight - 1;

      // Once any section on the page is explicitly marked, that marking is
      // authoritative: default to light everywhere else, regardless of
      // `staticVariant` (which only describes the very first paint, before
      // this effect has measured anything — e.g. the home page's hero).
      let next: "light" | "dark" = "light";
      sections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          next = el.dataset.headerTheme === "dark" ? "dark" : "light";
        }
      });
      setTheme(next);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    getLenisInstance()?.on("scroll", onScroll);
    const unsubscribeLenis = subscribeLenisInstance(() => {
      getLenisInstance()?.on("scroll", onScroll);
    });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      getLenisInstance()?.off("scroll", onScroll);
      unsubscribeLenis();
    };
  }, [staticVariant]);

  return theme;
}
