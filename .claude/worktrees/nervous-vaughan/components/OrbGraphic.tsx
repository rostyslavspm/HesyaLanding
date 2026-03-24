"use client";

/**
 * OrbGraphic — animated breathing orb.
 * Matches the Hesya app ritual orb: radial gradient (white center → warm edge),
 * ambient glow bloom, and a white specular highlight at top-left.
 * Three layers: bloom → main orb → specular.
 * Uses CSS vars from globals.css so it adapts to dark mode.
 */
export default function OrbGraphic({ size = 160 }: { size?: number }) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size * 1.5, height: size * 1.5 }}
      aria-hidden="true"
    >
      {/* Bloom — outer glow, breathes slightly out of phase */}
      <div
        className="animate-breathe-glow absolute rounded-full"
        style={{
          width: size * 1.5,
          height: size * 1.5,
          background: "radial-gradient(circle, var(--orb-glow) 0%, transparent 70%)",
          filter: `blur(${size * 0.22}px)`,
        }}
      />

      {/* Mid glow — tighter, matches orbRitual blur: 20pt */}
      <div
        className="animate-breathe absolute rounded-full"
        style={{
          width: size * 1.1,
          height: size * 1.1,
          background: "radial-gradient(circle, var(--orb-edge) 0%, transparent 70%)",
          filter: `blur(${size * 0.12}px)`,
        }}
      />

      {/* Main orb — radial gradient from white center to warm edge */}
      <div
        className="animate-breathe relative rounded-full"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle at 38% 32%, var(--orb-center) 0%, var(--orb-edge) 100%)`,
          boxShadow: `0 ${size * 0.06}px ${size * 0.18}px rgba(0,0,0,0.14)`,
        }}
      >
        {/* Specular highlight — top-left white sheen */}
        <div
          className="absolute rounded-full"
          style={{
            top: "12%",
            left: "14%",
            width: "38%",
            height: "38%",
            background: "radial-gradient(circle, rgba(255,255,255,0.38) 0%, transparent 100%)",
            filter: `blur(${size * 0.04}px)`,
          }}
        />
      </div>
    </div>
  );
}
