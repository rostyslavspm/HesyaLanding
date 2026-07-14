"use client";

import { useEffect, type RefObject } from "react";

/**
 * Writes a measured element height to a CSS custom property on :root.
 * Used so sticky offsets and scroll anchors match real chrome, not token guesses.
 */
export function useChromeHeight(
  ref: RefObject<HTMLElement | null>,
  cssVar: string
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const root = document.documentElement;

    const measure = () => {
      root.style.setProperty(cssVar, `${element.offsetHeight}px`);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, cssVar]);
}
