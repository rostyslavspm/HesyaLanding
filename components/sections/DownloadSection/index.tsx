"use client";

import { useEffect, useRef } from "react";
import { BTN, SECTIONS, TYPE, URLS } from "@/lib/design-system";
import { gsap, GSAP_DURATION, GSAP_EASE } from "@/lib/motion/gsap";
import { prefersReducedMotion } from "@/lib/motion/prefersReducedMotion";

export default function DownloadSection() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const element = container.current;
    if (!element) return;

    let observer: IntersectionObserver | undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });

      tl.from(".download-lockup", {
        scale: 0.98,
        opacity: 0,
        duration: GSAP_DURATION.reveal,
        ease: GSAP_EASE.out,
      }).from(
        ".download-cta",
        {
          opacity: 0,
          duration: GSAP_DURATION.revealCopy,
          ease: GSAP_EASE.out,
        },
        "-=0.2"
      );

      // Plays once the section is ~15% up the viewport — roughly the old
      // ScrollTrigger "top 85%" — via IntersectionObserver instead of
      // ScrollTrigger, which fought with Lenis's own scroll listener under
      // fast direction-reversal scrolling (see gsap.ts).
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            tl.play();
            observer?.disconnect();
          }
        },
        { rootMargin: "0px 0px -15% 0px", threshold: 0 }
      );
      observer.observe(element);
    }, container);

    return () => {
      observer?.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={container}
      id="download"
      aria-label="Download Hesya"
      className={`${SECTIONS.sky} section-bleed-x relative overflow-hidden section-pad`}
    >
      <div className="download-glow" aria-hidden />

      <div className="container-marketing relative z-[1]">
        <div className="download-content">
          <div className="download-lockup">
            <h2 className={`download-headline ${TYPE.marketingDisplay}`}>
              The way back is never far
            </h2>
            <p className="mt-4 max-w-[38ch] text-micro text-[var(--foreground-secondary)]">
              Free on iPhone. No account, no subscription, nothing to cancel.
            </p>
          </div>
          <a
            href={URLS.appStore}
            className={`download-cta btn-magnetic shrink-0 ${BTN.ctaBanner}`}
          >
            Get the app
          </a>
        </div>
      </div>
    </section>
  );
}
