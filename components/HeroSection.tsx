import Image from "next/image";
import AppStoreBadge from "./AppStoreBadge";

type HeroSectionProps = {
  onOpenNotify?: () => void;
};

export default function HeroSection({ onOpenNotify }: HeroSectionProps) {
  return (
    <section className="section-full relative overflow-hidden" aria-label="Hero">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 40% at 55% 35%, var(--orb-glow) 0%, transparent 65%)",
          opacity: 0.35,
        }}
      />

      <div className="container-hesya relative z-10 grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
        <div className="flex flex-col items-center text-center md:max-w-[34rem] md:items-start md:text-left">
          <h1 className="text-display text-hero">
            When your attention slips,
            <br />
            Hesya invites you back.
          </h1>

          <p className="mt-6 max-w-[36rem] text-body text-reading">
            A gentle iPhone companion that helps you notice distraction and
            return to what matters — without noise, guilt, or gamification.
          </p>

          <div className="mt-10">
            <AppStoreBadge onClick={onOpenNotify} label="Get notified on launch" />
          </div>

          <p className="mt-4 text-micro" style={{ color: "var(--foreground-muted)" }}>
            iOS only · Launching soon
          </p>

          <a
            href="#how-it-works"
            className="mt-6 text-micro"
            style={{ color: "var(--foreground-muted)" }}
          >
            See how it works
          </a>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <div className="relative" style={{ filter: "drop-shadow(var(--shadow-hero))" }}>
            <div
              className="relative aspect-[9/19] w-[260px] overflow-hidden sm:w-[300px] md:w-[340px]"
              style={{
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.08), transparent)",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)" }}
              />
              <Image
                src="/screenshots/screen-home.png"
                alt="Hesya home screen"
                width={450}
                height={920}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
