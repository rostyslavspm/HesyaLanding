"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useRef, useCallback, type ReactNode } from "react";

interface TiltOnMouseProps {
  children: ReactNode;
  className?: string;
  /** Maximum tilt angle in degrees (default: 4) */
  maxTilt?: number;
  /** Perspective distance (default: 800) */
  perspective?: number;
}

const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };

/**
 * TiltOnMouse — applies 3D rotateX/rotateY based on mouse position.
 * Desktop only, disabled on touch devices and reduced motion.
 * Creates subtle dimensionality on the hero phone mockup.
 */
export default function TiltOnMouse({
  children,
  className,
  maxTilt = 4,
  perspective = 800,
}: TiltOnMouseProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, springConfig);
  const springY = useSpring(rotateY, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalize to -1..1
      const nx = (e.clientX - centerX) / (rect.width / 2);
      const ny = (e.clientY - centerY) / (rect.height / 2);

      // Invert Y for natural tilt feel
      rotateX.set(-ny * maxTilt);
      rotateY.set(nx * maxTilt);
    },
    [maxTilt, rotateX, rotateY],
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective,
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
}
