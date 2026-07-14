"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useChromeHeight } from "@/hooks/useChromeHeight";
import { useHeaderScroll } from "../hooks/useHeaderScroll";
import { EASE_HESYA } from "../lib/motion";
import DesktopNav from "./sections/Navbar/DesktopNav";
import NavbarActions from "./sections/Navbar/NavbarActions";
import MobileMenu from "./sections/Navbar/MobileMenu";

type HeaderProps = {
  variant?: "light" | "dark";
};

export default function Header({ variant = "light" }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  useHeaderScroll(headerRef);
  useChromeHeight(headerRef, "--header-height");

  const isDark = variant === "dark";

  return (
    <>
      <motion.header
        ref={headerRef}
        className={`header-sticky px-[var(--gutter)] py-4 md:py-5 ${
          isDark ? "header-dark" : ""
        }`}
        initial={prefersReducedMotion ? false : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 0.5, delay: 0.05, ease: EASE_HESYA }
        }
      >
        <div className="container-marketing grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          <Link
            href="/"
            className="shrink-0 justify-self-start text-sm font-semibold uppercase tracking-[0.12em]"
            style={{
              color: isDark ? "var(--color-on-dark)" : "var(--foreground)",
              fontFamily: "var(--font-sans)",
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
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
