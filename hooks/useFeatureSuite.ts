"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { HESYA_FEATURES } from "@/lib/content/features";
import {
  consumePendingFeatureHash,
  restoreFeatureHash,
} from "@/lib/motion/hashBoot";
import {
  FEATURE_SCROLL_EVENT,
  isFeatureId,
  scrollToFeatureBlock,
} from "@/lib/motion/scroll";
import { DURATION } from "@/lib/motion/tokens";

// A hair longer than the programmatic scroll it's guarding
// (DURATION.transition), so the observer stays quiet until that scroll
// animation has actually finished settling.
const SCROLL_SUPPRESS_MS = DURATION.transition * 1000 + 100;

/**
 * Drives the suite's section nav. Every feature block is in the document, so
 * the active state follows scroll position (IntersectionObserver) and a click
 * scrolls to the block. Programmatic scrolls briefly suppress the observer so
 * the two don't fight over the active id mid-flight.
 */
export function useFeatureSuite() {
  const [activeId, setActiveId] = useState(HESYA_FEATURES[0].id);
  const suppressUntil = useRef(0);

  const selectFeature = useCallback((id: string) => {
    if (!isFeatureId(id)) return;

    setActiveId(id);
    suppressUntil.current = performance.now() + SCROLL_SUPPRESS_MS;
    window.history.replaceState(null, "", `/#${id}`);
    window.dispatchEvent(
      new CustomEvent(FEATURE_SCROLL_EVENT, { detail: { id } })
    );
    scrollToFeatureBlock(id);
  }, []);

  // Boot: honour an incoming hash.
  useEffect(() => {
    const pending = consumePendingFeatureHash();
    if (pending) {
      // sessionStorage/hash aren't available during SSR, so this can only be
      // known post-mount — moving it into a lazy useState initializer would
      // make the client's first hydration render diverge from the server's.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveId(pending);
      restoreFeatureHash(pending);
      suppressUntil.current = performance.now() + SCROLL_SUPPRESS_MS;
      requestAnimationFrame(() => scrollToFeatureBlock(pending));
      return;
    }

    const hash = window.location.hash.slice(1);
    if (isFeatureId(hash)) {
      setActiveId(hash);
      suppressUntil.current = performance.now() + SCROLL_SUPPRESS_MS;
      requestAnimationFrame(() => scrollToFeatureBlock(hash));
    }
  }, []);

  // Follow scroll position.
  useEffect(() => {
    const blocks = HESYA_FEATURES.map((f) =>
      document.getElementById(f.id)
    ).filter((el): el is HTMLElement => Boolean(el));

    if (!blocks.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (performance.now() < suppressUntil.current) return;

        // The block occupying the most of the reading area wins.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const next = visible[0]?.target?.id;
        if (next && isFeatureId(next)) {
          setActiveId((current) => (current === next ? current : next));
        }
      },
      {
        // Active zone starts below the docked nav and ends before the fold.
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    blocks.forEach((b) => observer.observe(b));
    return () => observer.disconnect();
  }, []);

  // External jumps (footer links, hash changes).
  useEffect(() => {
    const onFeatureScroll = (event: Event) => {
      const id = (event as CustomEvent<{ id: string }>).detail?.id;
      if (id && isFeatureId(id)) setActiveId(id);
    };

    const onHashChange = () => {
      const id = window.location.hash.slice(1);
      if (!isFeatureId(id)) return;
      setActiveId(id);
      suppressUntil.current = performance.now() + SCROLL_SUPPRESS_MS;
      scrollToFeatureBlock(id);
    };

    window.addEventListener(FEATURE_SCROLL_EVENT, onFeatureScroll);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener(FEATURE_SCROLL_EVENT, onFeatureScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return { activeId, selectFeature };
}
