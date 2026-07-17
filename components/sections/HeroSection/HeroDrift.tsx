"use client";

import { useEffect, useRef } from "react";
import { gsap, GSAP_DURATION, GSAP_EASE } from "@/lib/motion/gsap";
import { useMotionEnabled } from "@/hooks/useMotionEnabled";

export default function HeroDrift() {
  const enabled = useMotionEnabled();
  const rafId = useRef(0);
  const pending = useRef<{ mx: number; my: number } | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const viewport = document.getElementById("hero-viewport");
    const displacement = document.getElementById("hero-drift-displacement");
    const blurLayer = document.querySelector<HTMLElement>(".hero-backdrop-blur");

    if (!viewport || !displacement) return;

    const quickDisplacement = gsap.quickTo(displacement, "scale", {
      duration: GSAP_DURATION.drift,
      ease: GSAP_EASE.out,
    });

    const quickBlur = blurLayer
      ? gsap.quickTo(blurLayer, "opacity", {
          duration: GSAP_DURATION.drift,
          ease: GSAP_EASE.out,
        })
      : null;

    const apply = (mx: number, my: number) => {
      const rect = viewport.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const halfDiagonal =
        Math.hypot(rect.width, rect.height) / 2 || 1;
      const d = Math.hypot(mx - cx, my - cy) / halfDiagonal;

      quickDisplacement(d * 15);
      quickBlur?.(d);
    };

    const flush = () => {
      rafId.current = 0;
      if (!pending.current) return;
      apply(pending.current.mx, pending.current.my);
      pending.current = null;
    };

    const onMove = (event: MouseEvent) => {
      pending.current = { mx: event.clientX, my: event.clientY };
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(flush);
      }
    };

    const onLeave = () => {
      pending.current = null;
      quickDisplacement(0);
      quickBlur?.(0);
    };

    viewport.addEventListener("mousemove", onMove, { passive: true });
    viewport.addEventListener("mouseleave", onLeave);

    return () => {
      viewport.removeEventListener("mousemove", onMove);
      viewport.removeEventListener("mouseleave", onLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      quickDisplacement(0);
      quickBlur?.(0);
    };
  }, [enabled]);

  return null;
}
