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
 * Renders at max-w-[260px] with aspect-[450/920] to prevent CLS.
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
      className={`relative max-w-[260px] w-full aspect-[450/920] ${className ?? ""}`}
      title={fallbackLabel}
    >
      {!imageError && (
        <Image
          src={src}
          alt={alt}
          width={450}
          height={920}
          className="w-full h-auto block"
          onError={() => setImageError(true)}
          priority={priority}
          sizes={sizes}
        />
      )}
      {imageError && fallbackLabel && (
        <span
          className="absolute inset-0 flex items-center justify-center text-micro"
          style={{ color: "var(--foreground-muted)", opacity: 0.4 }}
          aria-hidden="true"
        >
          {fallbackLabel}
        </span>
      )}
    </div>
  );
}
