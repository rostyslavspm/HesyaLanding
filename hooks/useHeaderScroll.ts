"use client";

import { useEffect } from "react";
import { getLenisInstance, subscribeLenisInstance } from "@/lib/motion/lenisStore";

function getScrollY(): number {
  const lenis = getLenisInstance();
  if (lenis && typeof lenis.scroll === "number") {
    return lenis.scroll;
  }
  return window.scrollY;
}

export function useHeaderScroll(
  ref: React.RefObject<HTMLElement | null>,
  offset = 24
) {
  useEffect(() => {
    let cancelled = false;
    let frame = 0;
    let lenisHandler: (() => void) | null = null;
    let unsubscribeLenis: (() => void) | undefined;
    let cleanupListeners: (() => void) | undefined;

    const update = (element: HTMLElement) => {
      const scrolled = getScrollY() > offset;
      element.toggleAttribute("data-scrolled", scrolled);
      frame = 0;
    };

    const bind = (element: HTMLElement) => {
      const onScroll = () => {
        if (frame) return;
        frame = requestAnimationFrame(() => update(element));
      };

      const attachLenis = () => {
        const lenis = getLenisInstance();
        if (!lenis || lenisHandler) return;

        lenis.on("scroll", onScroll);
        lenisHandler = onScroll;
        update(element);
      };

      update(element);
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      attachLenis();

      // Lenis mounts async (SmoothScroll's own effect); the store notifies
      // the moment it's ready instead of polling for it.
      unsubscribeLenis = subscribeLenisInstance(attachLenis);

      cleanupListeners = () => {
        window.cancelAnimationFrame(frame);
        unsubscribeLenis?.();
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        if (lenisHandler) {
          getLenisInstance()?.off("scroll", lenisHandler);
        }
      };
    };

    const waitForElement = () => {
      if (cancelled) return;

      const element = ref.current;
      if (!element) {
        requestAnimationFrame(waitForElement);
        return;
      }

      bind(element);
    };

    waitForElement();

    return () => {
      cancelled = true;
      cleanupListeners?.();
    };
  }, [ref, offset]);
}
