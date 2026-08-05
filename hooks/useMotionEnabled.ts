"use client";

import { useSyncExternalStore } from "react";
import {
  prefersReducedMotion,
  subscribeReducedMotion,
} from "@/lib/motion/prefersReducedMotion";

function subscribe(onStoreChange: () => void): () => void {
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const unsubscribeReducedMotion = subscribeReducedMotion(onStoreChange);
  finePointer.addEventListener("change", onStoreChange);

  return () => {
    unsubscribeReducedMotion();
    finePointer.removeEventListener("change", onStoreChange);
  };
}

export function getMotionEnabledSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  if (prefersReducedMotion()) return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function useMotionEnabled(): boolean {
  return useSyncExternalStore(
    subscribe,
    getMotionEnabledSnapshot,
    () => false
  );
}
