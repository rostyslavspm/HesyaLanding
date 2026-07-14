"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MANIFESTO_TEASER } from "@/lib/content/manifesto";
import { MANIFESTO_IMAGE } from "@/lib/content/assetSpecs";
import { SECTIONS, TYPE } from "@/lib/design-system";
import { prefersReducedMotion } from "@/lib/motion/prefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export default function ManifestoTeaser() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(".manifesto-visual", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        y: 32,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".manifesto-copy", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        y: 32,
        opacity: 0,
        duration: 1.2,
        delay: 0.1,
        ease: "power3.out",
      });
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
          <p className="text-eyebrow text-[var(--color-on-dark-muted)]">
            On attention, agency, and presence
          </p>

          <h2 className={`${TYPE.marketingDisplay} mt-4 text-[var(--color-on-dark)]`}>
            Becoming present.
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-[1.7] text-[var(--color-on-dark-secondary)]">
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
