"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { DURATION, GSAP_EASE } from "../lib/motion";

gsap.registerPlugin(ScrollTrigger);

const TESTFLIGHT_URL = "https://testflight.apple.com/join/2sE4MyhY";

export default function FinaleV2() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (!prefersReduced) {
        gsap.from(".finale-content", {
          scrollTrigger: { trigger: container.current, start: "top 85%" },
          y: 36,
          opacity: 0,
          duration: DURATION.heroLayer,
          stagger: 0.12,
          ease: GSAP_EASE.standard,
        });
      }
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="finale-section"
      ref={container}
      className="section-standard-sm relative overflow-hidden bg-white"
    >
      <div className="container-hesya flex flex-col items-center text-center">
        <div className="panel-elevated w-full max-w-4xl rounded-[var(--radius-xl)] px-6 py-12 md:px-12 md:py-14">
          <p className="finale-content text-eyebrow mb-4 text-[var(--foreground-muted)]">Ready to begin</p>
          <h2 className="finale-content text-display-sans mb-5 text-[var(--color-soft-obsidian)]">
            One intention is enough.
          </h2>
          <p className="finale-content text-body mx-auto mb-8 max-w-2xl text-[var(--foreground-muted)]">
            Hesya is in beta on TestFlight. Free, private, and quiet by design with no accounts
            and no identifying profile.
          </p>
          <div className="finale-content flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={TESTFLIGHT_URL} className="btn-primary-gradient btn-magnetic">
              Try the beta on TestFlight
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/support"
              className="text-sm font-medium text-[var(--foreground-muted)] underline-offset-4 hover:text-[var(--foreground)] hover:underline"
            >
              See setup steps
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
