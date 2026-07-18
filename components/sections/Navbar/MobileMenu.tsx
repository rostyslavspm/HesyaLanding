"use client";

import Link from "next/link";
import {
  useEffect,
  useState,
  useSyncExternalStore,
  type TransitionEvent,
} from "react";
import { BTN, URLS } from "@/lib/design-system";
import {
  prefersReducedMotion,
  subscribeReducedMotion,
} from "@/lib/motion/prefersReducedMotion";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(open);
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    prefersReducedMotion,
    () => true
  );

  useEffect(() => {
    if (open) {
      setMounted(true);
      if (reduceMotion) {
        setVisible(true);
        return;
      }
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
      return () => cancelAnimationFrame(id);
    }

    setVisible(false);
    if (reduceMotion) {
      setMounted(false);
    }
  }, [open, reduceMotion]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!mounted) return null;

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    if (event.propertyName !== "transform") return;
    if (!open) setMounted(false);
  };

  return (
    <div
      className="mobile-menu fixed inset-0 z-[300] md:hidden"
      data-open={visible ? "true" : "false"}
      data-reduced={reduceMotion ? "true" : "false"}
    >
      <button
        type="button"
        className="mobile-menu-backdrop absolute inset-0"
        onClick={onClose}
        aria-label="Close menu"
      />

      <div
        id="mobile-nav"
        className="mobile-menu-panel absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col bg-[var(--color-hero-bg)] p-6 shadow-2xl"
        role="dialog"
        aria-modal="true"
        onTransitionEnd={handleTransitionEnd}
      >
        <div className="flex items-center justify-between">
          <span
            className="text-brand"
            style={{ color: "var(--color-on-dark)" }}
          >
            Hesya
          </span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[var(--color-on-dark-secondary)] transition-transform duration-200 ease-[var(--ease-hesya)] active:scale-[0.96]"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <nav
          className="mt-8 flex flex-1 flex-col gap-6"
          aria-label="Mobile navigation"
        >
          {[
            { href: "/#features", label: "Features" },
            { href: "/manifesto", label: "Philosophy" },
            { href: "/support", label: "Support" },
            { href: "/privacy", label: "Privacy" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="text-body text-[var(--color-on-dark-secondary)]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 border-t border-[var(--border-dark)] pt-6">
          <a href="mailto:support@hesya.app" className="nav-link">
            Contact
          </a>
          <a
            href={URLS.testflight}
            target="_blank"
            rel="noopener noreferrer"
            className={BTN.ctaFilled}
          >
            Get the beta
          </a>
        </div>
      </div>
    </div>
  );
}
