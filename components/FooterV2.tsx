"use client";

import Link from "next/link";
import Reveal from "./motion/Reveal";
import StaggerChildren, { staggerItem } from "./motion/StaggerChildren";
import { motion } from "framer-motion";

const footerColumns = [
  {
    title: "Product",
    links: [
      { href: "/support", label: "Support" },
      { href: "/privacy", label: "Privacy" },
    ],
  },
  {
    title: "Company",
    links: [{ href: "mailto:support@hesya.app", label: "Contact" }],
  },
  {
    title: "Legal",
    links: [{ href: "/privacy", label: "Privacy Policy" }],
  },
  {
    title: "Connect",
    links: [{ href: "mailto:support@hesya.app", label: "support@hesya.app" }],
  },
];

export default function FooterV2() {
  return (
    <footer className="section-dark relative px-[var(--gutter)] pb-12 pt-16 md:pt-20">
      <div className="container-hesya">
        <div className="mb-16 grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {footerColumns.map((col) => (
            <Reveal key={col.title}>
              <div>
                <h3 className="text-eyebrow mb-4 text-white/40">{col.title}</h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-micro link-animated text-white/60 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <StaggerChildren as="div" className="flex flex-col items-center gap-6 text-center">
          <motion.p
            variants={staggerItem}
            className="text-micro text-white/50"
          >
            A calm focus companion for iPhone.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="select-none font-sans text-[clamp(4rem,12vw,9rem)] font-bold uppercase leading-none tracking-tight text-white/[0.06]"
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
