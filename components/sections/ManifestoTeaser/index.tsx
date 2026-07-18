"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { MANIFESTO_TEASER } from "@/lib/content/manifesto";
import { MANIFESTO_IMAGE } from "@/lib/content/assetSpecs";
import { SECTIONS, TYPE } from "@/lib/design-system";
import {
  gsap,
  GSAP_DURATION,
  GSAP_EASE,
  STAGGER,
  registerGsapPlugins,
} from "@/lib/motion/gsap";
import { prefersReducedMotion } from "@/lib/motion/prefersReducedMotion";

export default function ManifestoTeaser() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    registerGsapPlugins();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      });

      tl.from(".manifesto-visual", {
        scale: 0.98,
        opacity: 0,
        duration: GSAP_DURATION.reveal,
        ease: GSAP_EASE.hero,
      }).from(
        ".manifesto-copy > *",
        {
          y: 16,
          opacity: 0,
          duration: GSAP_DURATION.revealCopy,
          stagger: STAGGER.default,
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
      id="philosophy"
      aria-label="On attention, agency, and presence"
      className={`${SECTIONS.forest} section-bleed-x overflow-hidden`}
    >
      <div className="grid min-h-0 grid-cols-1 md:min-h-[560px] md:grid-cols-2">
        <div className="manifesto-visual relative min-h-[360px] md:min-h-full">
          <Image
            src={MANIFESTO_IMAGE.path}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-[center_28%]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-forest-bg)]/10 to-[var(--color-forest-bg)]/80"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[var(--color-forest-bg)]/20 mix-blend-multiply"
          />
        </div>

        <div className="manifesto-copy flex flex-col justify-center px-[var(--gutter)] py-12 md:px-12 md:py-16 lg:px-16 xl:px-20">
          <h2 className={`${TYPE.marketingDisplay} text-[var(--color-on-dark)]`}>
            Becoming present.
          </h2>

          <p className={`mt-6 max-w-lg ${TYPE.featureBody}`}>
            {MANIFESTO_TEASER}
          </p>

          <Link href="/manifesto" className="btn-cta-ghost mt-8 w-fit">
            Read the full manifesto
          </Link>
        </div>
      </div>
    </section>
  );
}
