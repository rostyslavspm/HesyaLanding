import { isFeatureId } from "./scroll";

const PENDING_HASH_KEY = "hesya:pending-feature-hash";

export function interceptFeatureHashOnMount(): string | null {
  if (typeof window === "undefined") return null;

  const hash = window.location.hash.slice(1);
  if (!isFeatureId(hash)) return null;

  sessionStorage.setItem(PENDING_HASH_KEY, hash);
  history.replaceState(null, "", window.location.pathname + window.location.search);

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  window.scrollTo(0, 0);
  return hash;
}

export function consumePendingFeatureHash(): string | null {
  if (typeof window === "undefined") return null;

  const hash = sessionStorage.getItem(PENDING_HASH_KEY);
  sessionStorage.removeItem(PENDING_HASH_KEY);

  return hash && isFeatureId(hash) ? hash : null;
}

export function restoreFeatureHash(hash: string): void {
  history.replaceState(null, "", `#${hash}`);
}
