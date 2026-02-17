"use client";

export default function BreathingCircle({ size = 120 }: { size?: number }) {
  return (
    <div
      className="relative mx-auto flex items-center justify-center"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Ambient glow */}
      <div
        className="animate-breath-cycle absolute rounded-full"
        style={{
          width: size * 1.3,
          height: size * 1.3,
          background: "radial-gradient(circle, var(--wave) 0%, transparent 70%)",
          filter: "blur(20px)",
          opacity: 0.3,
        }}
      />
      {/* Core circle */}
      <div
        className="animate-breath-cycle rounded-full"
        style={{
          width: size * 0.5,
          height: size * 0.5,
          background: "radial-gradient(circle at 40% 40%, var(--mid), var(--wave))",
        }}
      />
    </div>
  );
}
