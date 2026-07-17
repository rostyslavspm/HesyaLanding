"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { HESYA_FEATURES } from "@/lib/content/features";
import {
  computeTargetScroll,
  getFeatureSegmentRatio,
  progressToFeatureIndex,
  setFeaturePinTrigger,
} from "@/lib/motion/featurePin";
import { registerGsapPlugins, gsap, ScrollTrigger } from "@/lib/motion/gsap";
import {
  consumePendingFeatureHash,
  restoreFeatureHash,
} from "@/lib/motion/hashBoot";
import { prefersReducedMotion } from "@/lib/motion/prefersReducedMotion";
import {
  FEATURE_SCROLL_EVENT,
  getFeatureSections,
  isFeatureId,
  resolveActiveSection,
} from "@/lib/motion/scroll";

function debounce(fn: () => void, ms: number): () => void {
  let timer = 0;
  return () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(fn, ms);
  };
}

function waitForLenis(callback: () => void, attempts = 40): void {
  if (typeof window === "undefined") return;
  if (window.__hesyaLenis) {
    callback();
    return;
  }
  if (attempts <= 0) return;
  window.setTimeout(() => waitForLenis(callback, attempts - 1), 50);
}

function buildDeckTimeline(
  panels: HTMLElement[],
  screens: HTMLElement[]
): gsap.core.Timeline {
  const count = panels.length;
  const segment = 1;

  panels.forEach((panel, index) => {
    gsap.set(panel, {
      opacity: index === 0 ? 1 : 0,
      y: index === 0 ? 0 : 30,
    });
  });

  screens.forEach((screen, index) => {
    gsap.set(screen, { opacity: index === 0 ? 1 : 0 });
  });

  const tl = gsap.timeline({
    defaults: { ease: "none", duration: segment },
  });

  for (let i = 0; i < count - 1; i++) {
    const at = i * segment;
    tl.to(panels[i], { opacity: 0, y: -30, duration: segment }, at);
    tl.fromTo(
      panels[i + 1],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: segment },
      at
    );
    tl.to(screens[i], { opacity: 0, duration: segment }, at);
    tl.to(screens[i + 1], { opacity: 1, duration: segment }, at);
  }

  return tl;
}

export function useFeaturePinScroll(
  pinContainerRef: React.RefObject<HTMLDivElement | null>
) {
  const [activeId, setActiveId] = useState(HESYA_FEATURES[0].id);
  const scrollingToRef = useRef<string | null>(null);
  const pinReadyRef = useRef(false);
  const mobileLenisHandlerRef = useRef<(() => void) | null>(null);

  const scrollToFeature = useCallback((id: string, immediate = false) => {
    if (!isFeatureId(id)) return;

    scrollingToRef.current = id;
    setActiveId(id);

    const runScroll = () => {
      const lenis = window.__hesyaLenis;
      const reducedMotion = prefersReducedMotion();
      const segmentRatio = getFeatureSegmentRatio(id);
      const targetScroll = computeTargetScroll(segmentRatio);

      window.history.replaceState(null, "", `/#${id}`);
      window.dispatchEvent(
        new CustomEvent(FEATURE_SCROLL_EVENT, { detail: { id } })
      );

      if (lenis && targetScroll !== null && pinReadyRef.current) {
        lenis.scrollTo(targetScroll, {
          duration: immediate || reducedMotion ? 0 : 0.8,
          immediate: immediate || reducedMotion,
          force: true,
          onComplete: () => {
            window.setTimeout(() => {
              scrollingToRef.current = null;
            }, 80);
          },
        });
        return;
      }

      const element = document.getElementById(id);
      if (!element) {
        scrollingToRef.current = null;
        return;
      }

      const styles = getComputedStyle(document.documentElement);
      const headerHeight =
        Number.parseFloat(styles.getPropertyValue("--header-height")) || 82;
      const suiteStickyHeight =
        Number.parseFloat(styles.getPropertyValue("--suite-sticky-height")) || 0;
      const gap =
        Number.parseFloat(styles.getPropertyValue("--scroll-anchor-gap")) || 16;
      const offset = -(headerHeight + suiteStickyHeight + gap);
      const top = element.getBoundingClientRect().top + window.scrollY + offset;

      if (lenis && !reducedMotion) {
        lenis.scrollTo(top, {
          duration: immediate ? 0 : 0.8,
          immediate,
          force: true,
          onComplete: () => {
            scrollingToRef.current = null;
          },
        });
        return;
      }

      window.scrollTo({ top, behavior: immediate || reducedMotion ? "auto" : "smooth" });
      window.setTimeout(() => {
        scrollingToRef.current = null;
      }, immediate ? 0 : 800);
    };

    waitForLenis(runScroll);
  }, []);

  const runHashBoot = useCallback(() => {
    const hash = consumePendingFeatureHash();
    if (!hash) return;

    ScrollTrigger.refresh();
    waitForLenis(() => scrollToFeature(hash, true));
    restoreFeatureHash(hash);
  }, [scrollToFeature]);

  useEffect(() => {
    registerGsapPlugins();
    const pinContainer = pinContainerRef.current;
    if (!pinContainer) return;

    const refreshDebounced = debounce(() => ScrollTrigger.refresh(), 150);

    const syncMobileFromScroll = () => {
      if (pinReadyRef.current || scrollingToRef.current) return;
      const sections = getFeatureSections();
      const next = resolveActiveSection(sections);
      if (next) setActiveId(next);
    };

    const detachMobileLenis = () => {
      const lenis = window.__hesyaLenis;
      const handler = mobileLenisHandlerRef.current;
      if (lenis && handler) {
        lenis.off("scroll", handler);
      }
      mobileLenisHandlerRef.current = null;
    };

    const attachMobileLenis = () => {
      if (pinReadyRef.current || mobileLenisHandlerRef.current) return;

      const lenis = window.__hesyaLenis;
      if (!lenis) return;

      const handler = () => {
        requestAnimationFrame(syncMobileFromScroll);
      };

      lenis.on("scroll", handler);
      mobileLenisHandlerRef.current = handler;
      syncMobileFromScroll();
    };

    let mobileLenisRetryTimer = 0;

    window.addEventListener("resize", refreshDebounced);
    window.addEventListener("orientationchange", refreshDebounced);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      detachMobileLenis();

      const panels = Array.from(
        pinContainer.querySelectorAll<HTMLElement>("[data-feature-panel]")
      );
      const screens = Array.from(
        pinContainer.querySelectorAll<HTMLElement>("[data-feature-screen]")
      );

      const deckTimeline = buildDeckTimeline(panels, screens);

      const styles = getComputedStyle(document.documentElement);
      const headerHeight =
        Number.parseFloat(styles.getPropertyValue("--header-height")) || 82;
      const suiteStickyHeight =
        Number.parseFloat(styles.getPropertyValue("--suite-sticky-height")) || 0;
      const pinTop = headerHeight + suiteStickyHeight;

      const trigger = ScrollTrigger.create({
        trigger: pinContainer,
        start: `top top+=${pinTop}`,
        end: "+=300%",
        pin: true,
        scrub: 0.45,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        animation: deckTimeline,
        onUpdate(self) {
          if (!scrollingToRef.current) {
            const idx = progressToFeatureIndex(self.progress);
            setActiveId(HESYA_FEATURES[idx].id);
          }
        },
      });

      setFeaturePinTrigger(trigger);
      pinReadyRef.current = true;
      ScrollTrigger.refresh();
      runHashBoot();

      return () => {
        deckTimeline.kill();
        trigger.kill();
        setFeaturePinTrigger(null);
        pinReadyRef.current = false;
        ScrollTrigger.refresh();
      };
    });

    mm.add("(max-width: 767px)", () => {
      setFeaturePinTrigger(null);
      pinReadyRef.current = false;
      syncMobileFromScroll();
      ScrollTrigger.refresh();

      attachMobileLenis();
      mobileLenisRetryTimer = window.setInterval(() => {
        attachMobileLenis();
        if (mobileLenisHandlerRef.current) {
          window.clearInterval(mobileLenisRetryTimer);
        }
      }, 50);

      const pending = consumePendingFeatureHash();
      if (pending) {
        waitForLenis(() => scrollToFeature(pending, true));
        restoreFeatureHash(pending);
      }

      return () => {
        window.clearInterval(mobileLenisRetryTimer);
        detachMobileLenis();
        ScrollTrigger.refresh();
      };
    });

    const onFeatureScroll = (event: Event) => {
      const id = (event as CustomEvent<{ id: string }>).detail?.id;
      if (!id) return;
      scrollingToRef.current = id;
      setActiveId(id);
    };

    const onHashChange = () => {
      const id = window.location.hash.slice(1);
      if (!isFeatureId(id)) return;
      scrollToFeature(id);
    };

    window.addEventListener(FEATURE_SCROLL_EVENT, onFeatureScroll);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      mm.revert();
      window.clearInterval(mobileLenisRetryTimer);
      detachMobileLenis();
      window.removeEventListener("resize", refreshDebounced);
      window.removeEventListener("orientationchange", refreshDebounced);
      window.removeEventListener(FEATURE_SCROLL_EVENT, onFeatureScroll);
      window.removeEventListener("hashchange", onHashChange);
      setFeaturePinTrigger(null);
      pinReadyRef.current = false;
    };
  }, [pinContainerRef, runHashBoot, scrollToFeature]);

  return { activeId, scrollToFeature };
}
