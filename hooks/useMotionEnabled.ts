"use client";

import { useSyncExternalStore } from "react";

function subscribe(onStoreChange: () => void): () => void {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

  reduced.addEventListener("change", onStoreChange);
  finePointer.addEventListener("change", onStoreChange);

  return () => {
    reduced.removeEventListener("change", onStoreChange);
    finePointer.removeEventListener("change", onStoreChange);
  };
}

export function getMotionEnabledSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function useMotionEnabled(): boolean {
  return useSyncExternalStore(
    subscribe,
    getMotionEnabledSnapshot,
    () => false
  );
}
