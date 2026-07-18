"use client";

import { useCallback, useEffect, useState } from "react";
import { HESYA_FEATURES } from "@/lib/content/features";
import {
  consumePendingFeatureHash,
  restoreFeatureHash,
} from "@/lib/motion/hashBoot";
import {
  FEATURE_SCROLL_EVENT,
  isFeatureId,
  scrollToAnchor,
} from "@/lib/motion/scroll";

export function useFeatureSuite() {
  const [activeId, setActiveId] = useState(HESYA_FEATURES[0].id);

  const selectFeature = useCallback((id: string, options?: { scroll?: boolean }) => {
    if (!isFeatureId(id)) return;

    setActiveId(id);
    window.history.replaceState(null, "", `/#${id}`);
    window.dispatchEvent(
      new CustomEvent(FEATURE_SCROLL_EVENT, { detail: { id } })
    );

    if (options?.scroll) {
      scrollToAnchor("features");
    }
  }, []);

  useEffect(() => {
    const pending = consumePendingFeatureHash();
    if (pending) {
      setActiveId(pending);
      restoreFeatureHash(pending);
      requestAnimationFrame(() => scrollToAnchor("features"));
    } else {
      const hash = window.location.hash.slice(1);
      if (isFeatureId(hash)) setActiveId(hash);
    }

    const onFeatureScroll = (event: Event) => {
      const id = (event as CustomEvent<{ id: string }>).detail?.id;
      if (id && isFeatureId(id)) setActiveId(id);
    };

    const onHashChange = () => {
      const id = window.location.hash.slice(1);
      if (isFeatureId(id)) setActiveId(id);
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
