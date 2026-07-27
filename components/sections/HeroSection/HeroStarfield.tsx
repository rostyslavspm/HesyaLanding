"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * The night sky — a 2D-canvas star field, following Superhuman's hero pattern
 * (a `fireflies` canvas over the subject) rather than a photograph. Two things
 * live here:
 *
 *  1. A parallax field of cool, dim stars in three depth layers. Depth comes
 *     from the layers moving at different rates against the pointer — the fix
 *     for "the mist had no depth."
 *  2. One warm Eärendil star at a time. It blooms in somewhere new in the upper
 *     sky, holds, then fades so another can take its place — never following the
 *     cursor. The metaphor: among everything that pulls at you, one thing shines
 *     (§06.4, "one warm point of light"). It is the only warm light in the field.
 *
 * Reduced motion → one static frame, one steady star. Hidden tab → paused.
 */

type FieldStar = {
  x: number; // 0..1 of width
  y: number; // 0..1 of height
  r: number; // radius in px
  depth: number; // 0 (far) .. 1 (near) — parallax weight
  base: number; // base alpha
  twSpeed: number;
  twPhase: number;
};

// The warm focus star lives in the upper sky, inset from the edges.
const FOCUS_X = [0.1, 0.9] as const;
const FOCUS_Y = [0.08, 0.46] as const;
const MIN_JUMP = 0.28; // don't reappear too close to the last spot
const FADE_IN = 1400;
const HOLD = 2600;
const FADE_OUT = 1900;
const REST = 700; // dark beat between stars
const INTERACT_COOLDOWN = 1400;

// The focus star reads cool, to sit within the night field rather than pop
// against it — a clear silver-blue light, not a warm hotspot.
const FOCUS_CORE = "230, 238, 250";
const FOCUS_GLOW = "150, 174, 210";
const COOL = "214, 225, 245";

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export default function HeroStarfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let stars: FieldStar[] = [];

    // Pointer parallax target + eased current offset (−1..1 of a small range).
    const target = { x: 0, y: 0 };
    const offset = { x: 0, y: 0 };

    // Focus-star lifecycle
    const focus = {
      x: 0.72,
      y: 0.2,
      phaseStart: 0,
      phase: "rest" as "rest" | "in" | "hold" | "out",
      lastInteract: -Infinity,
    };

    const buildStars = () => {
      // The photograph owns the star field; the canvas adds only a sparse set
      // of nearer sparkles for parallax depth. Kept low so it complements the
      // picture rather than doubling it.
      const count = Math.min(90, Math.round((width * height) / 18000));
      stars = Array.from({ length: count }, () => {
        const depth = 0.4 + Math.random() * 0.6; // skew nearer — these parallax
        return {
          x: Math.random(),
          y: Math.random(),
          r: 0.5 + depth * 1.2,
          depth,
          base: 0.1 + Math.random() * (0.16 + depth * 0.28),
          twSpeed: 0.4 + Math.random() * 1.1,
          twPhase: Math.random() * Math.PI * 2,
        };
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStars();
    };

    const pickFocus = () => {
      let x = rand(FOCUS_X[0], FOCUS_X[1]);
      let y = rand(FOCUS_Y[0], FOCUS_Y[1]);
      let tries = 0;
      while (tries < 8 && Math.hypot(x - focus.x, y - focus.y) < MIN_JUMP) {
        x = rand(FOCUS_X[0], FOCUS_X[1]);
        y = rand(FOCUS_Y[0], FOCUS_Y[1]);
        tries += 1;
      }
      focus.x = x;
      focus.y = y;
    };

    // Warm star's 0..1 brightness across its lifecycle phases.
    const focusGlow = (now: number) => {
      const dt = now - focus.phaseStart;
      switch (focus.phase) {
        case "rest":
          if (dt >= REST) {
            pickFocus();
            focus.phase = "in";
            focus.phaseStart = now;
          }
          return 0;
        case "in":
          if (dt >= FADE_IN) {
            focus.phase = "hold";
            focus.phaseStart = now;
            return 1;
          }
          return easeInOut(dt / FADE_IN);
        case "hold":
          if (dt >= HOLD) {
            focus.phase = "out";
            focus.phaseStart = now;
          }
          return 1;
        case "out":
          if (dt >= FADE_OUT) {
            focus.phase = "rest";
            focus.phaseStart = now;
            return 0;
          }
          return 1 - easeInOut(dt / FADE_OUT);
      }
    };

    const drawField = (t: number) => {
      // ease pointer offset toward target
      offset.x += (target.x - offset.x) * 0.05;
      offset.y += (target.y - offset.y) * 0.05;

      for (const s of stars) {
        // parallax: near stars (high depth) shift more
        const px = (s.x + offset.x * s.depth * 0.03) * width;
        const py = (s.y + offset.y * s.depth * 0.03) * height;
        const tw = 0.6 + 0.4 * Math.sin(t * 0.001 * s.twSpeed + s.twPhase);
        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${COOL}, ${(s.base * tw).toFixed(3)})`;
        ctx.fill();
      }
    };

    const drawFocus = (glow: number) => {
      if (glow <= 0.001) return;
      const cx = (focus.x + offset.x * 0.05) * width;
      const cy = (focus.y + offset.y * 0.05) * height;

      // soft halo
      const haze = 22 + 72 * glow;
      const hz = ctx.createRadialGradient(cx, cy, 0, cx, cy, haze);
      hz.addColorStop(0, `rgba(${FOCUS_GLOW}, ${(0.17 * glow).toFixed(3)})`);
      hz.addColorStop(1, `rgba(${FOCUS_GLOW}, 0)`);
      ctx.fillStyle = hz;
      ctx.beginPath();
      ctx.arc(cx, cy, haze, 0, Math.PI * 2);
      ctx.fill();

      // inner bloom
      const bloom = 4 + 12 * glow;
      const bl = ctx.createRadialGradient(cx, cy, 0, cx, cy, bloom);
      bl.addColorStop(0, `rgba(${FOCUS_CORE}, ${(0.72 * glow).toFixed(3)})`);
      bl.addColorStop(1, `rgba(${FOCUS_GLOW}, 0)`);
      ctx.fillStyle = bl;
      ctx.beginPath();
      ctx.arc(cx, cy, bloom, 0, Math.PI * 2);
      ctx.fill();

      // core
      ctx.beginPath();
      ctx.arc(cx, cy, 1 + 1.4 * glow, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${FOCUS_CORE}, ${Math.min(1, 0.45 + 0.5 * glow).toFixed(3)})`;
      ctx.fill();
    };

    // ── Reduced motion: one steady frame, one settled star ──────────────
    if (reduced) {
      resize();
      focus.x = 0.72;
      focus.y = 0.2;
      ctx.clearRect(0, 0, width, height);
      drawField(0);
      drawFocus(0.5);
      const ro = new ResizeObserver(() => {
        resize();
        ctx.clearRect(0, 0, width, height);
        drawField(0);
        drawFocus(0.5);
      });
      ro.observe(canvas);
      return () => ro.disconnect();
    }

    // ── Animated ────────────────────────────────────────────────────────
    let raf = 0;
    let running = true;

    const loop = (t: number) => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      drawField(t);
      drawFocus(focusGlow(t) ?? 0);
      raf = requestAnimationFrame(loop);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      target.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      target.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      // A move seeds the next star (not cursor-following): if the current one
      // has been up a moment, let it fade and bring another elsewhere.
      const now = performance.now();
      if (
        now - focus.lastInteract > INTERACT_COOLDOWN &&
        focus.phase === "hold"
      ) {
        focus.phase = "out";
        focus.phaseStart = now;
        focus.lastInteract = now;
      }
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        if (raf) cancelAnimationFrame(raf);
        raf = 0;
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    focus.phaseStart = performance.now();
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(loop);

    return () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced]);

  return <canvas ref={canvasRef} className="hero-starfield" aria-hidden />;
}
