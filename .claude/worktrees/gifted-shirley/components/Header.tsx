"use client";

import { useRef } from "react";
import Link from "next/link";
import { useNotifyModal } from "./NotifyModalProvider";
import HeaderCTA from "./HeaderCTA";
import { useHeaderScroll } from "../hooks/useHeaderScroll";

type HeaderProps = {
  onOpenNotify?: () => void;
};

export default function Header({ onOpenNotify }: HeaderProps) {
  const openFromContext = useNotifyModal();
  const openNotify = onOpenNotify ?? openFromContext;
  const headerRef = useRef<HTMLElement>(null);
  useHeaderScroll(headerRef);

  return (
    <header
      ref={headerRef}
      className="header-sticky relative px-[var(--gutter)] py-4 md:py-5"
    >
      <div className="container-hesya flex items-center justify-between gap-6">
        {/* Brand */}
        <Link
          href="/"
          className="text-heading"
          style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}
        >
          Hesya
        </Link>

        {/* Right cluster */}
        <div className="flex items-center gap-4">
          {/* Nav pill (desktop/tablet) */}
          <nav
            className="hidden sm:flex items-center rounded-full px-4 py-2"
            aria-label="Main navigation"
            style={{
              background: "var(--surface-tinted)",
              border: "1px solid var(--border)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }}
          >
            <div className="flex items-center gap-8 px-2">
              <Link
                href="/privacy"
                className="text-micro"
                style={{ color: "var(--foreground-muted)" }}
              >
                Privacy
              </Link>
              <Link
                href="/support"
                className="text-micro"
                style={{ color: "var(--foreground-muted)" }}
              >
                Support
              </Link>
              <a
                href="mailto:support@hesya.app"
                className="text-micro"
                style={{ color: "var(--foreground-muted)" }}
              >
                Contact
              </a>
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden sm:block">
            <HeaderCTA onClick={openNotify} label="Get notified" />
          </div>

          {/* Mobile CTA only (nav hidden) */}
          <div className="sm:hidden">
            <HeaderCTA onClick={openNotify} label="Notify me" />
          </div>
        </div>
      </div>
    </header>
  );
}
