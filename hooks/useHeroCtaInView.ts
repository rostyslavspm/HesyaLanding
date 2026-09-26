"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * True while the hero's own "Get the app" button is on screen, so the header
 * can hold its duplicate back — one invitation per view. Pages without a hero
 * CTA report false and the header CTA shows as usual.
 */
export function useHeroCtaInView() {
  const pathname = usePathname();
  // Assume the hero CTA is visible on the home page before mount so the
  // header CTA doesn't flash in and back out on first paint.
  const [inView, setInView] = useState(pathname === "/");

  useEffect(() => {
    const target = document.getElementById("hero-cta");
    if (!target) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- DOM-only knowledge, post-mount
      setInView(false);
      return;
    }

    const header = document.querySelector<HTMLElement>("header.header-sticky");
    const headerHeight = header?.offsetHeight ?? 0;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: `-${headerHeight}px 0px 0px 0px`, threshold: 0 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [pathname]);

  return inView;
}
