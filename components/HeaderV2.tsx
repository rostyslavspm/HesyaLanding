"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useHeaderScroll } from "../hooks/useHeaderScroll";
import { EASE_HESYA } from "../lib/motion";

const TESTFLIGHT_URL = "https://testflight.apple.com/join/2sE4MyhY";

export default function HeaderV2() {
  const headerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  useHeaderScroll(headerRef);

  useEffect(() => {
    const onScroll = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = !pastHero;

  return (
    <>
      {!announcementDismissed && (
        <div className="relative z-50 bg-[var(--color-surface-dark)] px-[var(--gutter)] py-2.5 text-center">
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
            onClick={() => setAnnouncementDismissed(true)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70"
            aria-label="Dismiss announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <motion.header
        ref={headerRef}
        {...(onDark ? { "data-on-dark": true } : {})}
        className="header-sticky relative px-[var(--gutter)] py-4 md:py-5"
        initial={prefersReducedMotion ? false : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 0.5, delay: 0.05, ease: EASE_HESYA }
        }
      >
        <div className="container-hesya flex items-center justify-between gap-6">
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

          <div className="flex items-center gap-3 md:gap-4">
            <nav
              className={`hidden items-center rounded-full px-4 py-2 sm:flex ${
                onDark ? "glass-dark" : "glass"
              }`}
              aria-label="Main navigation"
            >
              <div className="flex items-center gap-8 px-2">
                <Link
                  href="/privacy"
                  className="header-nav-link text-micro link-animated"
                  style={{
                    color: onDark ? "var(--foreground-muted-on-dark)" : "var(--foreground-muted)",
                  }}
                >
                  Privacy
                </Link>
                <Link
                  href="/support"
                  className="header-nav-link text-micro link-animated"
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
              className="header-nav-link hidden text-micro md:inline"
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

