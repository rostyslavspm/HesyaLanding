"use client";

import { useState } from "react";
import Image from "next/image";

interface PhoneMockupProps {
  src: string;
  alt: string;
  /** Text shown if the image fails to load */
  fallbackLabel?: string;
  /** Mark above-the-fold images as priority */
  priority?: boolean;
  /** Next.js responsive sizes hint */
  sizes?: string;
  className?: string;
}

/**
 * PhoneMockup — consistent iPhone mockup frame.
 *
 * Renders at max-w-[260px] with aspect-[660/1434] to prevent CLS.
 * Frameless design with proportionate iPhone rounded corners.
 * Includes an optional error fallback label when the screenshot is missing.
 */
export default function PhoneMockup({
  src,
  alt,
  fallbackLabel,
  priority = false,
  sizes = "(max-width: 640px) 260px, 260px",
  className,
}: PhoneMockupProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`relative max-w-[260px] w-full aspect-[660/1434] ${className ?? ""}`}
      style={{ clipPath: "inset(0 round 16%)" }}
      title={fallbackLabel}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{ background: "linear-gradient(105deg, oklch(1 0 0 / 0.15) 0%, transparent 45%)" }}
      />

      {!imageError && (
        <Image
          src={src}
          alt={alt}
          width={660}
          height={1434}
          className="screenshot-outline block h-auto w-full"
          style={{ borderRadius: "16%" }}
          onError={() => setImageError(true)}
          priority={priority}
          sizes={sizes}
        />
      )}
      {imageError && fallbackLabel && (
        <span
          className="absolute inset-0 z-0 flex items-center justify-center text-micro"
          style={{ color: "var(--foreground-muted)", opacity: 0.4 }}
          aria-hidden="true"
        >
          {fallbackLabel}
        </span>
      )}
    </div>
  );
}
