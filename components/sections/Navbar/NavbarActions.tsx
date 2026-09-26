"use client";

import type { Ref } from "react";
import { BTN, URLS } from "@/lib/design-system";
import { useHeroCtaInView } from "@/hooks/useHeroCtaInView";

type NavbarActionsProps = {
  variant?: "light" | "dark";
  menuOpen?: boolean;
  onOpenMenu?: () => void;
  triggerRef?: Ref<HTMLButtonElement>;
};

export default function NavbarActions({
  variant = "dark",
  menuOpen = false,
  onOpenMenu,
  triggerRef,
}: NavbarActionsProps) {
  const isDark = variant === "dark";
  const heroCtaInView = useHeroCtaInView();
  const textLink = isDark ? "nav-link" : "nav-link-light";

  // Responsive show/hide lives on plain wrappers: `.nav-link` and
  // `.btn-cta-filled` set `display`, and design-system.css is unlayered, so a
  // component class on the same element would beat Tailwind's `hidden`.
  return (
    <div className="justify-self-end flex items-center gap-3 md:gap-4">
      <span className="hidden lg:block">
        <a href="mailto:support@hesya.app" className={textLink}>
          Contact
        </a>
      </span>

      <span
        className="header-cta hidden sm:block"
        data-concealed={heroCtaInView ? "true" : "false"}
      >
        <a
          href={URLS.appStore}
          target="_blank"
          rel="noopener noreferrer"
          className={`${BTN.ctaFilled} whitespace-nowrap`}
        >
          Get the app
        </a>
      </span>

      <button
        ref={triggerRef}
        type="button"
        className="menu-trigger"
        onClick={onOpenMenu}
        aria-label="Open menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
      >
        <span className="menu-trigger-bars" aria-hidden>
          <span />
          <span />
        </span>
      </button>
    </div>
  );
}
