import { HESYA_FEATURES } from "@/lib/content/features";
import { prefersReducedMotion } from "./prefersReducedMotion";

export const FEATURE_SCROLL_EVENT = "hesya:feature-scroll";

declare global {
  interface Window {
    __hesyaLenis?: {
      scroll: number;
      scrollTo: (
        target: HTMLElement | number,
        options?: {
          offset?: number;
          duration?: number;
          immediate?: boolean;
          force?: boolean;
          onComplete?: () => void;
        }
      ) => void;
      on: (event: "scroll", callback: () => void) => void;
      off: (event: "scroll", callback: () => void) => void;
    };
  }
}

export function isFeatureId(id: string): boolean {
  return HESYA_FEATURES.some((feature) => feature.id === id);
}

export function getScrollAnchorOffset(): number {
  const root = document.documentElement;
  const styles = getComputedStyle(root);

  const headerHeight =
    Number.parseFloat(styles.getPropertyValue("--header-height")) || 82;
  const suiteStickyHeight =
    Number.parseFloat(styles.getPropertyValue("--suite-sticky-height")) || 0;
  const gap =
    Number.parseFloat(styles.getPropertyValue("--scroll-anchor-gap")) || 16;

  return headerHeight + suiteStickyHeight + gap;
}

export function resolveActiveSection(sections: HTMLElement[]): string | null {
  if (sections.length === 0) return null;

  const anchorLine = getScrollAnchorOffset();
  const viewportBottom = window.innerHeight;

  let bestId = sections[0].id;
  let bestVisible = -1;

  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    const visibleTop = Math.max(rect.top, anchorLine);
    const visibleBottom = Math.min(rect.bottom, viewportBottom);
    const visible = Math.max(0, visibleBottom - visibleTop);

    if (visible > bestVisible) {
      bestVisible = visible;
      bestId = section.id;
    }
  }

  return bestId;
}

export function getFeatureSections(): HTMLElement[] {
  return HESYA_FEATURES.map((feature) => document.getElementById(feature.id)).filter(
    Boolean
  ) as HTMLElement[];
}

export function scrollToAnchor(id: string, onComplete?: () => void): void {
  const element = document.getElementById(id);
  if (!element) return;

  const offset = -getScrollAnchorOffset();
  const top = element.getBoundingClientRect().top + window.scrollY + offset;
  const lenis = typeof window !== "undefined" ? window.__hesyaLenis : undefined;
  const reducedMotion = prefersReducedMotion();

  if (lenis && !reducedMotion) {
    lenis.scrollTo(top, {
      duration: 1.1,
      force: true,
      onComplete,
    });
    return;
  }

  window.scrollTo({
    top,
    behavior: reducedMotion ? "auto" : "smooth",
  });

  if (onComplete) {
    window.setTimeout(onComplete, reducedMotion ? 0 : 1100);
  }
}

export function scrollToFeatureAnchor(id: string, onComplete?: () => void): void {
  if (!isFeatureId(id)) return;

  window.history.replaceState(null, "", `/#${id}`);
  window.dispatchEvent(
    new CustomEvent(FEATURE_SCROLL_EVENT, { detail: { id } })
  );

  scrollToAnchor(id, onComplete);
}
