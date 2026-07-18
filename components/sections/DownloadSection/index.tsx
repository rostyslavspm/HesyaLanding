"use client";

import { useEffect, useRef } from "react";
import { BTN, SECTIONS, TYPE, URLS } from "@/lib/design-system";
import {
  gsap,
  GSAP_DURATION,
  GSAP_EASE,
  registerGsapPlugins,
} from "@/lib/motion/gsap";
import { prefersReducedMotion } from "@/lib/motion/prefersReducedMotion";

export default function DownloadSection() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    registerGsapPlugins();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
      });

      tl.from(".download-headline", {
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
    }, container);

    return () => ctx.revert();
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
          <h2 className={`download-headline ${TYPE.marketingDisplay}`}>
            Presence that lives where you reach
          </h2>
          <a
            href={URLS.testflight}
            className={`download-cta btn-magnetic shrink-0 ${BTN.ctaBanner}`}
          >
            Get the beta
          </a>
        </div>
      </div>
    </section>
  );
}
