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
  /** Intrinsic pixel size of the asset (defaults to full-device captures) */
  width?: number;
  height?: number;
}

/**
 * PhoneMockup — frameless iPhone screenshot.
 *
 * Image drives the aspect ratio. Avoid `object-fit: cover` on a separately
 * sized frame — subpixel aspect mismatch crops chrome at the edges.
 */
export default function PhoneMockup({
  src,
  alt,
  fallbackLabel,
  priority = false,
  sizes = "(max-width: 640px) 260px, 340px",
  className,
  width = 1260,
  height = 2736,
}: PhoneMockupProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`phone-mockup relative w-full ${className ?? ""}`}
      title={fallbackLabel}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(105deg, oklch(1 0 0 / 0.12) 0%, transparent 42%)",
          borderRadius: "inherit",
        }}
      />

      {!imageError && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="phone-mockup-image screenshot-outline"
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
