"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE_HESYA } from "../lib/motion";

type Props = {
  onClose: () => void;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function NotifyModal({ onClose }: Props) {
  const titleId = useId();
  const descId = useId();
  const emailId = useId();
  const prefersReducedMotion = useReducedMotion();

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const canSubmit = useMemo(() => isValidEmail(email) && status !== "loading", [email, status]);

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.3, ease: EASE_HESYA };

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const root = panelRef.current;
        if (!root) return;
        const focusables = root.querySelectorAll<HTMLElement>(
          'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);

    setTimeout(() => inputRef.current?.focus(), 0);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  async function submit() {
    setError(null);

    const trimmed = email.trim();
    if (!isValidEmail(trimmed)) {
      setError("Please enter a valid email.");
      setStatus("error");
      return;
    }

    try {
      setStatus("loading");
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (e: unknown) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <motion.div
      className="modal-panel"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
    >
      <button
        type="button"
        className="modal-backdrop"
        aria-label="Close"
        onClick={onClose}
      />

      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="glass-elevated relative w-full max-w-[520px] rounded-[var(--radius-lg)] p-8"
        style={{ boxShadow: "var(--shadow-hero)" }}
        initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
        transition={transition}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full px-3 py-2 text-micro focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
          style={{ color: "var(--foreground-muted)" }}
        >
          Close
        </button>

        <div className="flex flex-col gap-6 text-center">
          <div>
            <p className="text-eyebrow">NOTIFY</p>
            <h2 id={titleId} className="text-display-sm" style={{ fontStyle: "italic" }}>
              Get notified on launch.
            </h2>
            <p id={descId} className="mt-3 text-body-sm text-reading">
              We&apos;ll email you once when Hesya is ready on iPhone. No spam. Unsubscribe anytime.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.2, ease: EASE_HESYA }
                }
              >
                <p className="text-body" style={{ color: "var(--foreground)" }}>
                  You&apos;re on the list.
                </p>
                <p className="text-micro" style={{ color: "var(--foreground-muted)" }}>
                  We&apos;ll reach out when Hesya is available.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="glass rounded-full px-6 py-3 text-body-sm focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
                  style={{ color: "var(--foreground)" }}
                >
                  Done
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                className="flex flex-col gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.15, ease: EASE_HESYA }
                }
              >
                <div className="flex flex-col gap-3 text-left">
                  <label htmlFor={emailId} className="text-micro" style={{ color: "var(--foreground-muted)" }}>
                    Email
                  </label>
                  <input
                    ref={inputRef}
                    id={emailId}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="glass w-full rounded-[var(--radius-md)] px-4 py-3 text-body-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
                    style={{ color: "var(--foreground)" }}
                  />
                  {error ? (
                    <p className="text-micro" style={{ color: "var(--state-overwhelmed)" }}>
                      {error}
                    </p>
                  ) : null}
                </div>

                <button
                  type="button"
                  onClick={submit}
                  disabled={!canSubmit}
                  className="glass rounded-full px-6 py-3 text-body-sm transition-transform disabled:opacity-60 disabled:hover:translate-y-0 hover:-translate-y-[1px] active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
                  style={{ color: "var(--foreground)" }}
                >
                  {status === "loading" ? "Adding…" : "Notify me"}
                </button>

                <p className="text-micro" style={{ color: "var(--foreground-muted)" }}>
                  iOS only &middot; Free &middot; No tracking
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
