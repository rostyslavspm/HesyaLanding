"use client";

import { useSyncExternalStore } from "react";
import {
  prefersReducedMotion,
  subscribeReducedMotion,
} from "@/lib/motion/prefersReducedMotion";

export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    prefersReducedMotion,
    () => false
  );
}
