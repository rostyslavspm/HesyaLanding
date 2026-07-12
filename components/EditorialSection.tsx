"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EditorialSection() {
  const container = useRef<HTMLDivElement>(null);
  const pearlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    const ctx = gsap.context(() => {
      const onPointerMove = (e: MouseEvent | TouchEvent) => {
        if (!container.current) return;
        const rect = container.current.getBoundingClientRect();
        let clientX: number;
        let clientY: number;
        if ("touches" in e && e.touches.length > 0) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        } else if ("clientX" in e) {
          clientX = (e as MouseEvent).clientX;
          clientY = (e as MouseEvent).clientY;
        } else {
          return;
        }
        mouseX = ((clientX - rect.left) / rect.width - 0.5) * 2;
        mouseY = ((clientY - rect.top) / rect.height - 0.5) * 2;
      };

      const el = container.current;
      if (el) {
        el.addEventListener("mousemove", onPointerMove);
        el.addEventListener("touchmove", onPointerMove, { passive: true });
        el.addEventListener("mouseenter", () => { isHovering = true; });
        el.addEventListener("touchstart", () => { isHovering = true; }, { passive: true });
        const reset = () => { isHovering = false; mouseX = 0; mouseY = 0; };
        el.addEventListener("mouseleave", reset);
        el.addEventListener("touchend", reset);
      }

      gsap.ticker.add(() => {
        if (!pearlRef.current) return;
        gsap.to(pearlRef.current, {
          x: `calc(-50% + ${mouseX * 120}px)`,
          y: `calc(-50% + ${mouseY * 120}px)`,
          duration: isHovering ? 2.5 : 3,
          ease: "power2.out",
          overwrite: "auto",
        });
      });

      gsap.from(".editorial-text", {
        scrollTrigger: { trigger: container.current, start: "top 70%" },
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="section-dark relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden py-24 md:py-32"
    >
      <div
        ref={pearlRef}
        className="pointer-events-none absolute h-[600px] w-[600px] rounded-full md:h-[800px] md:w-[800px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(130,158,147,0.25) 0%, rgba(130,158,147,0.08) 40%, transparent 70%)",
          filter: "blur(60px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="editorial-text container-hesya relative z-10 max-w-3xl text-center">
        <h2 className="text-display-sans mb-6 text-white">Three breaths.</h2>
        <p
          className="text-2xl italic text-white/60 md:text-3xl"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          A pause between drift and choice.
        </p>
      </div>
    </section>
  );
}
