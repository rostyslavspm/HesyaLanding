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
        className="pointer-events-none absolute inset-0 animate-hero-drift"
        style={{
          background:
            "radial-gradient(55% 40% at 55% 35%, var(--orb-glow) 0%, transparent 65%)",
          opacity: 0.4,
        }}
      />

      <div className="container-hesya relative z-10 grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="flex w-full max-w-[34rem] flex-col items-center gap-6 text-center md:items-start md:text-left md:gap-8">
          <h1 className="text-display text-hero">
            When your attention slips,
            <br />
            Hesya invites you back.
          </h1>

          <p className="max-w-[36rem] text-body text-reading">
            An iPhone companion that helps you notice distraction and
            return to what matters — without noise or guilt.
          </p>

          <p className="mt-6 text-micro" style={{ color: "var(--foreground-muted)" }}>
            Built to feel native. Designed to stay quiet.
          </p>

          <div className="flex flex-col items-center gap-3 md:items-start">
            <AppStoreBadge
              onClick={onOpenNotify}
              label="Get notified on launch"
              footer={null}
            />
            <p
              className="text-micro whitespace-nowrap"
              style={{ color: "var(--foreground-muted)" }}
            >
              Free&nbsp;&middot;&nbsp;No tracking&nbsp;&middot;&nbsp;iOS
            </p>
            <p
              className="text-micro whitespace-nowrap"
              style={{ color: "var(--foreground-muted)" }}
            >
              iOS only&nbsp;&middot;&nbsp;Launching soon
            </p>
            <a
              href="#how-it-works"
              className="text-micro"
              style={{ color: "var(--foreground-muted)" }}
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <div className="relative w-[260px] sm:w-[300px] md:w-[340px]">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-10 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, var(--orb-glow) 0%, transparent 60%)",
                opacity: 0.18,
                filter: "blur(10px)",
              }}
            />
            <div
              className="relative animate-shadow-breathe"
              style={{ filter: "drop-shadow(var(--shadow-hero))" }}
            >
              <Image
                src="/screenshots/screen-home.png"
                alt="Hesya home screen"
                width={450}
                height={920}
                className="h-auto w-full select-none"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
