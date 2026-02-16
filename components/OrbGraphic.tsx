"use client";

export default function OrbGraphic({ size = 200 }: { size?: number }) {
  const half = size / 2;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Ambient glow — matches orbAmbient blur: 28pt */}
      <div
        className="animate-breathe-glow absolute rounded-full"
        style={{
          width: size * 1.4,
          height: size * 1.4,
          background:
            "radial-gradient(circle, var(--wave) 0%, var(--accent) 40%, transparent 70%)",
          filter: "blur(28px)",
        }}
      />

      {/* Core orb — radial gradient matching GradientOrbView.swift */}
      <div
        className="animate-breathe relative rounded-full"
        style={{
          width: size * 0.7,
          height: size * 0.7,
          background:
            "radial-gradient(circle at 40% 40%, var(--mid), var(--wave))",
          boxShadow: `0 0 ${half * 0.4}px var(--accent)`,
        }}
      />
    </div>
  );
}
