"use client";

import Link from "next/link";
import { useEffect } from "react";
import { HESYA_FEATURES } from "@/lib/content/features";
import FeatureAnchorLink from "@/components/FeatureAnchorLink";
import { BTN, URLS } from "@/lib/design-system";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[300] md:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close menu"
      />

      <div
      id="mobile-nav"
      className="absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col bg-[var(--color-hero-bg)] p-6 shadow-2xl"
    >
        <div className="flex items-center justify-between">
          <span
            className="text-heading"
            style={{ color: "var(--color-on-dark)", fontFamily: "var(--font-serif)" }}
          >
            Hesya
          </span>
          <button
            type="button"
            onClick={onClose}
            className="text-[var(--color-on-dark-secondary)]"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <nav className="mt-8 flex flex-1 flex-col gap-6" aria-label="Mobile navigation">
          <div>
            <p className="text-eyebrow text-[var(--color-on-dark-muted)]">Features</p>
            <ul className="mt-3 space-y-2 pl-0">
              {HESYA_FEATURES.map((feature) => (
                <li key={feature.id} className="list-none">
                  <FeatureAnchorLink
                    featureId={feature.id}
                    onNavigate={onClose}
                    className="text-body text-[var(--color-on-dark-secondary)]"
                  >
                    {feature.title}
                  </FeatureAnchorLink>
                </li>
              ))}
            </ul>
          </div>

          {[
            { href: "/manifesto", label: "Philosophy" },
            { href: "/support", label: "Support" },
            { href: "/privacy", label: "Privacy" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="text-body text-[var(--color-on-dark-secondary)]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 border-t border-[var(--border-dark)] pt-6">
          <a href="mailto:support@hesya.app" className="nav-link">
            Contact
          </a>
          <a
            href={URLS.testflight}
            target="_blank"
            rel="noopener noreferrer"
            className={BTN.ctaFilled}
          >
            Get the beta
          </a>
        </div>
      </div>
    </div>
  );
}
