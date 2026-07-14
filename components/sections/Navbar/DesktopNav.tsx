"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { HESYA_FEATURES } from "@/lib/content/features";
import FeatureAnchorLink from "@/components/FeatureAnchorLink";

function NavDropdown({
  label,
  children,
  variant = "dark",
}: {
  label: string;
  children: ReactNode;
  variant?: "light" | "dark";
}) {
  const [open, setOpen] = useState(false);
  const panelClass = variant === "dark" ? "glass-dark" : "glass";
  const linkBase = variant === "dark" ? "nav-link" : "nav-link-light";

  return (
    <li
      className="relative list-none"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`${linkBase} inline-flex items-center gap-1`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpen(false);
        }}
      >
        <span>{label}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      <div
        className={`absolute left-0 top-full z-50 min-w-[220px] pt-2 transition-all ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        role="menu"
      >
        <ul
          className={`${panelClass} list-none rounded-xl border border-[var(--border)] p-2 shadow-lg`}
        >
          {children}
        </ul>
      </div>
    </li>
  );
}

type DesktopNavProps = {
  variant?: "light" | "dark";
};

export default function DesktopNav({ variant = "dark" }: DesktopNavProps) {
  const linkClass = variant === "dark" ? "nav-link" : "nav-link-light";

  return (
    <nav className="hidden min-h-0 md:block" aria-label="Main navigation">
      <ul className="flex list-none items-center gap-1 pl-0">
        <NavDropdown label="Features" variant={variant}>
          {HESYA_FEATURES.map((feature) => (
            <li key={feature.id} className="list-none" role="none">
              <FeatureAnchorLink
                featureId={feature.id}
                role="menuitem"
                className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                  variant === "dark"
                    ? "text-[var(--color-on-dark-secondary)] hover:bg-white/10 hover:text-[var(--color-on-dark)]"
                    : "text-[var(--foreground-muted)] hover:bg-black/5 hover:text-[var(--foreground)]"
                }`}
              >
                {feature.title}
              </FeatureAnchorLink>
            </li>
          ))}
        </NavDropdown>

        <li className="list-none">
          <Link href="/manifesto" className={linkClass}>
            Philosophy
          </Link>
        </li>
        <li className="list-none">
          <Link href="/support" className={linkClass}>
            Support
          </Link>
        </li>
        <li className="list-none">
          <Link href="/privacy" className={linkClass}>
            Privacy
          </Link>
        </li>
      </ul>
    </nav>
  );
}
