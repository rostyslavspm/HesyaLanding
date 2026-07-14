"use client";

import { useEffect } from "react";

function getScrollY(): number {
  const lenis = window.__hesyaLenis;
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
    let retryTimer: number | undefined;
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
        const lenis = window.__hesyaLenis;
        if (!lenis || lenisHandler) return;

        lenis.on("scroll", onScroll);
        lenisHandler = onScroll;
      };

      update(element);
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      attachLenis();

      retryTimer = window.setInterval(() => {
        attachLenis();
        if (lenisHandler) {
          window.clearInterval(retryTimer);
          update(element);
        }
      }, 50);

      cleanupListeners = () => {
        window.cancelAnimationFrame(frame);
        if (retryTimer) window.clearInterval(retryTimer);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        if (lenisHandler) {
          window.__hesyaLenis?.off("scroll", lenisHandler);
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
