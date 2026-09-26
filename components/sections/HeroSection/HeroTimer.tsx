"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { HERO_SESSION } from "@/lib/content/heroMoments";
import {
  prefersReducedMotion,
  subscribeReducedMotion,
} from "@/lib/motion/prefersReducedMotion";

/**
 * The running session's timer, live over the screenshot's empty glass pill.
 * Elapsed time, counting up. The app ticks once a real minute (minutes only,
 * never mm:ss); the hero compresses that to one minute every few seconds so
 * time visibly passes. Decorative — the phone image's alt carries the meaning.
 */
export default function HeroTimer() {
  const [minutes, setMinutes] = useState<number>(HERO_SESSION.startMinutes);
  const ref = useRef<HTMLDivElement>(null);
  const isStatic = useSyncExternalStore(
    subscribeReducedMotion,
    prefersReducedMotion,
    () => true
  );

  useEffect(() => {
    if (isStatic) return;
    const el = ref.current;
    if (!el) return;

    let interval: ReturnType<typeof setInterval> | undefined;
    let onScreen = false;

    const sync = () => {
      const shouldRun = onScreen && document.visibilityState === "visible";
      if (shouldRun && !interval) {
        interval = setInterval(() => {
          setMinutes((m) => m + 1);
        }, HERO_SESSION.tickMs);
      } else if (!shouldRun && interval) {
        clearInterval(interval);
        interval = undefined;
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      sync();
    });
    observer.observe(el);
    document.addEventListener("visibilitychange", sync);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      if (interval) clearInterval(interval);
    };
  }, [isStatic]);

  const shown = isStatic ? HERO_SESSION.startMinutes : minutes;

  return (
    <div ref={ref} className="hero-timer" aria-hidden>
      <span className="hero-timer-glow" />
      <span key={shown} className="hero-timer-value">
        {shown} min
      </span>
    </div>
  );
}
