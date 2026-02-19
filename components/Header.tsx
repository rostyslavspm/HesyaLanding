"use client";

import Link from "next/link";
import AppStoreBadge from "./AppStoreBadge";
import { useNotifyModal } from "./NotifyModalProvider";

type HeaderProps = {
  onOpenNotify?: () => void;
};

/**
 * Header — sticky nav with logo, links, and CTA.
 */
export default function Header({ onOpenNotify }: HeaderProps) {
  const openFromContext = useNotifyModal();
  const openNotify = onOpenNotify ?? openFromContext;

  return (
    <header className="header-sticky px-[var(--gutter)] py-4">
      <div className="container-hesya flex items-center justify-between">
        <Link
          href="/"
          className="text-heading"
          style={{ color: "var(--foreground)", fontFamily: "var(--font-serif)" }}
        >
          Hesya
        </Link>

        <nav className="flex items-center gap-8" aria-label="Main navigation">
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

          <div className="hidden sm:block">
            <AppStoreBadge onClick={openNotify} label="Get notified on launch" />
          </div>
        </nav>
      </div>
    </header>
  );
}
