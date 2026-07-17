import type { ScrollTrigger } from "gsap/ScrollTrigger";
import { HESYA_FEATURES } from "@/lib/content/features";

export const FEATURE_SEGMENT_RATIOS: Record<string, number> = {
  declare: 0,
  return: 0.25,
  reflect: 0.5,
  presence: 0.75,
};

let pinTrigger: ScrollTrigger | null = null;

export function setFeaturePinTrigger(trigger: ScrollTrigger | null): void {
  pinTrigger = trigger;
}

export function getFeaturePinTrigger(): ScrollTrigger | null {
  return pinTrigger;
}

export function getFeatureSegmentRatio(id: string): number {
  return FEATURE_SEGMENT_RATIOS[id] ?? 0;
}

export function getFeatureIndex(id: string): number {
  return HESYA_FEATURES.findIndex((feature) => feature.id === id);
}

export function computeTargetScroll(segmentRatio: number): number | null {
  if (!pinTrigger) return null;
  const { start, end } = pinTrigger;
  return start + (end - start) * segmentRatio;
}

export function progressToFeatureIndex(progress: number): number {
  const clamped = Math.min(1, Math.max(0, progress));
  const index = Math.floor(clamped * HESYA_FEATURES.length);
  return Math.min(HESYA_FEATURES.length - 1, index);
}
