"use client";

import Link from "next/link";
import Reveal from "./motion/Reveal";
import StaggerChildren, { staggerItem } from "./motion/StaggerChildren";
import { motion } from "framer-motion";

const footerColumns = [
  {
    title: "Product",
    links: [
      { href: "/#suite-section", label: "How it works" },
      { href: "/#trust-section", label: "Privacy model" },
      { href: "/privacy", label: "Privacy" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/support", label: "Support & FAQ" },
      { href: "https://testflight.apple.com/join/2sE4MyhY", label: "TestFlight beta", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "mailto:support@hesya.app", label: "Request data details", external: true },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "mailto:support@hesya.app", label: "support@hesya.app", external: true },
      { href: "https://hesya.app", label: "hesya.app", external: true },
    ],
  },
];

export default function FooterV2() {
  return (
    <footer className="section-dark relative px-[var(--gutter)] pb-12 pt-14 md:pt-16">
      <div className="container-hesya">
        <div
          className="mb-10 h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.26) 48%, rgba(255,255,255,0.04) 100%)",
          }}
        />
        <div className="mb-14 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {footerColumns.map((col) => (
            <Reveal key={col.title}>
              <div>
                <h3 className="text-eyebrow mb-4 text-white/40">{col.title}</h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-micro link-animated-on-dark text-white/60 hover:text-white"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-micro link-animated-on-dark text-white/60 hover:text-white"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <StaggerChildren as="div" className="flex flex-col items-center gap-5 text-center">
          <motion.p
            variants={staggerItem}
            className="text-micro text-white/50"
          >
            A calm focus companion for iPhone.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="select-none font-sans text-[clamp(4rem,12vw,9.5rem)] font-bold uppercase leading-none tracking-tight text-white/[0.06]"
            aria-hidden="true"
          >
            Hesya
          </motion.p>

          <motion.p variants={staggerItem} className="text-micro text-white/30">
            Hesya &copy; {new Date().getFullYear()}
          </motion.p>
        </StaggerChildren>
      </div>
    </footer>
  );
}
