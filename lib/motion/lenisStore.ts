/**
 * Shared Lenis-instance store — replaces a `window.__hesyaLenis` global.
 * SmoothScroll (the sole owner) publishes the instance here on
 * create/destroy; anything that needs it (scroll helpers, header hooks)
 * reads or subscribes instead of polling `window` for it to appear.
 */
export type LenisLike = {
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

let instance: LenisLike | null = null;
const listeners = new Set<() => void>();

export function setLenisInstance(next: LenisLike | null): void {
  instance = next;
  listeners.forEach((listener) => listener());
}

export function getLenisInstance(): LenisLike | null {
  return instance;
}

export function subscribeLenisInstance(onChange: () => void): () => void {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}
