"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type RefObject,
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
  /** Trigger button to return focus to when the menu closes. */
  triggerRef?: RefObject<HTMLButtonElement | null>;
};

export default function MobileMenu({ open, onClose, triggerRef }: MobileMenuProps) {
  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(open);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);
  const pathname = usePathname();
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    prefersReducedMotion,
    () => true
  );

  useEffect(() => {
    if (open) {
      // `mounted` must outlive `open` on close (until onTransitionEnd fires
      // below), so it can't be derived from `open` alone during render.
      // eslint-disable-next-line react-hooks/set-state-in-effect
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
      return;
    }
    // onTransitionEnd normally unmounts; this is the backstop for when the
    // event never fires (tab hidden mid-animation, interrupted transition),
    // so an invisible menu can't linger in the DOM.
    const fallback = setTimeout(() => setMounted(false), 800);
    return () => clearTimeout(fallback);
  }, [open, reduceMotion]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Move focus into the panel once it's actually in the DOM, and hand it
  // back to the trigger that opened it — otherwise a keyboard user tabbing
  // through the (visually full-screen) menu lands on whatever the trigger
  // last focused, or falls out into content hidden behind the overlay.
  useEffect(() => {
    if (open && mounted) {
      closeButtonRef.current?.focus();
      wasOpenRef.current = true;
      return;
    }
    if (!open && wasOpenRef.current) {
      wasOpenRef.current = false;
      triggerRef?.current?.focus();
    }
  }, [open, mounted, triggerRef]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const container = containerRef.current;
      if (!container) return;

      const focusable = Array.from(
        container.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
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
      ref={containerRef}
      className="mobile-menu fixed inset-0 z-[300] md:hidden"
      data-open={visible ? "true" : "false"}
      data-reduced={reduceMotion ? "true" : "false"}
      inert={!open}
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
            ref={closeButtonRef}
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
              aria-current={pathname === href ? "page" : undefined}
              className="inline-flex min-h-11 items-center text-body text-[var(--color-on-dark-secondary)] transition-transform duration-200 ease-[var(--ease-hesya)] active:scale-[0.96]"
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
            href={URLS.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className={BTN.ctaFilled}
          >
            Get the app
          </a>
        </div>
      </div>
    </div>
  );
}
