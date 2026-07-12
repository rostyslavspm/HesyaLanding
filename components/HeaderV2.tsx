"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useHeaderScroll } from "../hooks/useHeaderScroll";
import { DURATION, EASE_HESYA } from "../lib/motion";

const TESTFLIGHT_URL = "https://testflight.apple.com/join/2sE4MyhY";

export default function HeaderV2() {
  const headerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [announcementDismissed, setAnnouncementDismissed] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("hesya-announcement-dismissed") === "1";
  });
  const [onDark, setOnDark] = useState(false);
  useHeaderScroll(headerRef);

  useEffect(() => {
    let ticking = false;

    const updateDarkState = () => {
      const hero = document.getElementById("hero-section");
      if (!hero) {
        setOnDark(false);
        ticking = false;
        return;
      }

      const { top, bottom } = hero.getBoundingClientRect();
      const heroIntersectsHeaderZone = top < 180 && bottom > 120;
      setOnDark(heroIntersectsHeaderZone);
      ticking = false;
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        requestAnimationFrame(updateDarkState);
        ticking = true;
      }
    };

    updateDarkState();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <>
      {!announcementDismissed && (
        <div className="relative z-50 border-b border-white/10 bg-[var(--color-surface-dark)] py-2.5 text-center">
          <div className="container-hesya relative">
            <p className="text-micro text-white/70">
              Hesya is in beta on TestFlight —{" "}
              <a
                href={TESTFLIGHT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white"
              >
                try it free
              </a>
            </p>
            <button
              type="button"
              onClick={() => {
                setAnnouncementDismissed(true);
                window.localStorage.setItem("hesya-announcement-dismissed", "1");
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70"
              aria-label="Dismiss announcement"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <motion.header
        ref={headerRef}
        {...(onDark ? { "data-on-dark": true } : {})}
        className="header-sticky relative py-3 md:py-4"
        initial={prefersReducedMotion ? false : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: DURATION.reveal, delay: 0.05, ease: EASE_HESYA }
        }
      >
        <div className="container-hesya flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="header-brand text-heading"
              style={{
                color: onDark ? "var(--foreground-on-dark)" : "var(--foreground)",
                fontFamily: "var(--font-serif)",
              }}
            >
              Hesya
            </Link>
            <span
              className="rounded-full px-2 py-1 text-[11px] font-medium uppercase tracking-[0.08em]"
              style={{
                color: onDark ? "rgba(255,255,255,0.6)" : "var(--foreground-muted)",
                background: onDark ? "rgba(255,255,255,0.12)" : "rgba(38,35,34,0.06)",
              }}
            >
              Beta
            </span>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex items-center gap-3 sm:hidden">
              <Link
                href="/privacy"
                className={`text-micro ${onDark ? "link-animated-on-dark text-white/78" : "link-animated text-[var(--foreground-muted)]"}`}
              >
                Privacy
              </Link>
              <Link
                href="/support"
                className={`text-micro ${onDark ? "link-animated-on-dark text-white/78" : "link-animated text-[var(--foreground-muted)]"}`}
              >
                Support
              </Link>
            </div>
            <nav
              className={`hidden items-center rounded-full px-4 py-2 sm:flex ${
                onDark ? "glass-dark" : "glass"
              }`}
              aria-label="Main navigation"
            >
              <div className="flex items-center gap-8 px-2">
                <Link
                  href="/privacy"
                  className={`header-nav-link text-micro ${
                    onDark ? "link-animated-on-dark" : "link-animated"
                  }`}
                  style={{
                    color: onDark ? "var(--foreground-muted-on-dark)" : "var(--foreground-muted)",
                  }}
                >
                  Privacy
                </Link>
                <Link
                  href="/support"
                  className={`header-nav-link text-micro ${
                    onDark ? "link-animated-on-dark" : "link-animated"
                  }`}
                  style={{
                    color: onDark ? "var(--foreground-muted-on-dark)" : "var(--foreground-muted)",
                  }}
                >
                  Support
                </Link>
              </div>
            </nav>

            <a
              href="mailto:support@hesya.app"
              className={`header-nav-link hidden text-micro md:inline ${
                onDark ? "link-animated-on-dark" : "link-animated"
              }`}
              style={{
                color: onDark ? "var(--foreground-muted-on-dark)" : "var(--foreground-muted)",
              }}
            >
              Contact
            </a>

            <a
              href={TESTFLIGHT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gradient text-micro !px-4 !py-2 md:!px-5"
            >
              <span className="hidden sm:inline">Try TestFlight</span>
              <span className="sm:hidden">TestFlight</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </motion.header>
    </>
  );
}

