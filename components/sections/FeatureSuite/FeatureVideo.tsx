"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  prefersReducedMotion,
  subscribeReducedMotion,
} from "@/lib/motion/prefersReducedMotion";

type FeatureVideoProps = {
  id: string;
  alt: string;
};

/**
 * A feature's screen as a short, caption-free, looping video instead of a
 * static screenshot. Plays only while on screen and the tab is visible;
 * under reduced motion it never fetches or plays video, showing only the
 * poster frame.
 */
export default function FeatureVideo({ id, alt }: FeatureVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const isStatic = useSyncExternalStore(
    subscribeReducedMotion,
    prefersReducedMotion,
    () => true
  );

  useEffect(() => {
    if (isStatic) return;
    const el = ref.current;
    if (!el) return;

    let onScreen = false;
    const sync = () => {
      const shouldPlay = onScreen && document.visibilityState === "visible";
      if (shouldPlay) el.play().catch(() => {});
      else el.pause();
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
    };
  }, [isStatic]);

  const base = `/videos/hesya-${id}`;

  return (
    <video
      ref={ref}
      width={420}
      height={912}
      muted
      loop
      playsInline
      preload={isStatic ? "none" : "metadata"}
      poster={`${base}-poster.jpg`}
      aria-label={alt}
      className="feature-block-image screenshot-outline fade-in-image"
      data-loaded={isStatic || loaded ? "true" : "false"}
      data-priority="false"
      onLoadedData={() => setLoaded(true)}
    >
      <source src={`${base}.webm`} type="video/webm" />
      <source src={`${base}.mp4`} type="video/mp4" />
    </video>
  );
}
