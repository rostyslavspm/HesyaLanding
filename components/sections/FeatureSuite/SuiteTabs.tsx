"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { HESYA_FEATURES } from "@/lib/content/features";
import {
  FEATURE_SCROLL_EVENT,
  getFeatureSections,
  isFeatureId,
  resolveActiveSection,
  scrollToFeatureAnchor,
} from "@/lib/motion/scroll";

type SuiteTabsProps = {
  activeId: string;
  onSelect: (id: string) => void;
};

export default function SuiteTabs({ activeId, onSelect }: SuiteTabsProps) {
  return (
    <div className="tab-bar" role="tablist" aria-label="Hesya features">
      {HESYA_FEATURES.map((feature) => {
        const Icon = feature.icon;
        const isActive = activeId === feature.id;

        return (
          <button
            key={feature.id}
            id={`tab-${feature.id}`}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={feature.id}
            data-active={isActive ? "true" : "false"}
            className="tab-item"
            style={{ "--tab-accent": feature.accent } as CSSProperties}
            onClick={() => onSelect(feature.id)}
          >
            <Icon
              className="h-5 w-5 shrink-0"
              aria-hidden
              strokeWidth={1.75}
              style={{ color: isActive ? feature.accent : undefined }}
            />
            <span
              className="text-product-label"
              style={{ color: isActive ? feature.accent : undefined }}
            >
              {feature.title}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function useFeatureTabSpy(defaultId = HESYA_FEATURES[0].id) {
  const [activeId, setActiveId] = useState(defaultId);
  const scrollingToRef = useRef<string | null>(null);

  useEffect(() => {
    let frame = 0;
    let lenisHandler: (() => void) | null = null;

    const syncFromScroll = () => {
      if (scrollingToRef.current) return;

      const sections = getFeatureSections();
      const next = resolveActiveSection(sections);
      if (next) {
        setActiveId(next);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(syncFromScroll);
    };

    const attachLenis = () => {
      const lenis = window.__hesyaLenis;
      if (!lenis || lenisHandler) return;

      lenis.on("scroll", onScroll);
      lenisHandler = onScroll;
    };

    syncFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", syncFromScroll);
    attachLenis();

    const retryTimer = window.setInterval(() => {
      attachLenis();
      if (lenisHandler) {
        window.clearInterval(retryTimer);
        syncFromScroll();
      }
    }, 50);

    const onFeatureScroll = (event: Event) => {
      const id = (event as CustomEvent<{ id: string }>).detail?.id;
      if (!id) return;

      scrollingToRef.current = id;
      setActiveId(id);
    };

    const onHashChange = () => {
      const id = window.location.hash.slice(1);
      if (!isFeatureId(id)) return;

      scrollingToRef.current = id;
      setActiveId(id);
    };

    window.addEventListener(FEATURE_SCROLL_EVENT, onFeatureScroll);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      cancelAnimationFrame(frame);
      window.clearInterval(retryTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", syncFromScroll);
      window.removeEventListener(FEATURE_SCROLL_EVENT, onFeatureScroll);
      window.removeEventListener("hashchange", onHashChange);
      const lenis = window.__hesyaLenis;
      if (lenis && lenisHandler) {
        lenis.off("scroll", lenisHandler);
      }
    };
  }, []);

  const scrollToFeature = useCallback((id: string) => {
    scrollingToRef.current = id;
    setActiveId(id);

    scrollToFeatureAnchor(id, () => {
      window.setTimeout(() => {
        scrollingToRef.current = null;
        const sections = getFeatureSections();
        const next = resolveActiveSection(sections);
        if (next) {
          setActiveId(next);
        }
      }, 80);
    });
  }, []);

  return { activeId, scrollToFeature };
}
