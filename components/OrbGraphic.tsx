"use client";

export default function OrbGraphic({ size = 200 }: { size?: number }) {
  const r = size / 2;
  const coreR = r * 0.5;
  const ringR = r * 0.7;
  const outerR = r * 0.9;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Outer glow ring */}
      <svg
        className="animate-breathe-ring absolute inset-0"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          cx={r}
          cy={r}
          r={outerR}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1"
          opacity="0.25"
        />
      </svg>

      {/* Middle ring */}
      <svg
        className="animate-breathe-ring absolute inset-0"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ animationDelay: "0.5s" }}
      >
        <circle
          cx={r}
          cy={r}
          r={ringR}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          opacity="0.35"
        />
      </svg>

      {/* Core orb */}
      <div
        className="animate-breathe rounded-full"
        style={{
          width: coreR * 2,
          height: coreR * 2,
          background:
            "radial-gradient(circle at 40% 40%, var(--accent-light), var(--accent-dark))",
          boxShadow: "0 0 40px var(--accent-light)",
        }}
      />
    </div>
  );
}
