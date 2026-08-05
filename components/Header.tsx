"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useChromeHeight } from "@/hooks/useChromeHeight";
import { useHeaderScroll } from "../hooks/useHeaderScroll";
import { useHeaderTheme } from "@/hooks/useHeaderTheme";
import DesktopNav from "./sections/Navbar/DesktopNav";
import NavbarActions from "./sections/Navbar/NavbarActions";
import MobileMenu from "./sections/Navbar/MobileMenu";

type HeaderProps = {
  variant?: "light" | "dark";
};

export default function Header({ variant = "light" }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  useHeaderScroll(headerRef);
  useChromeHeight(headerRef, "--header-height");

  // Dark chrome only makes sense while a dark section is actually behind
  // the header — it re-darkens for any later [data-header-theme="dark"]
  // section and falls back to `variant` everywhere else.
  const isDark = useHeaderTheme(variant) === "dark";

  return (
    <>
      <header
        ref={headerRef}
        className={`header-sticky header-enter px-[var(--gutter)] py-3 md:py-3.5 ${
          isDark ? "header-dark" : ""
        }`}
      >
        <div className="container-marketing grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          <Link
            href="/"
            className="text-brand shrink-0 justify-self-start"
            style={{
              color: isDark ? "var(--color-on-dark)" : "var(--foreground)",
            }}
          >
            Hesya
          </Link>

          <div className="justify-self-center">
            <DesktopNav variant={isDark ? "dark" : "light"} />
          </div>

          <NavbarActions
            variant={isDark ? "dark" : "light"}
            menuOpen={menuOpen}
            onOpenMenu={() => setMenuOpen(true)}
          />
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
