"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { isFeatureId, scrollToFeatureAnchor } from "@/lib/motion/scroll";

type FeatureAnchorLinkProps = {
  featureId: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
  role?: string;
};

export default function FeatureAnchorLink({
  featureId,
  className,
  children,
  onNavigate,
  role,
}: FeatureAnchorLinkProps) {
  return (
    <Link
      href={`/#${featureId}`}
      className={className}
      role={role}
      onClick={(event) => {
        if (!isFeatureId(featureId)) return;

        event.preventDefault();
        onNavigate?.();
        scrollToFeatureAnchor(featureId);
      }}
    >
      {children}
    </Link>
  );
}
