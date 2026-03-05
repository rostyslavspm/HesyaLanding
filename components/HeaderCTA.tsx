import MagneticButton from "./motion/MagneticButton";

type HeaderCTAProps = {
  href: string;
  label?: string;
};

export default function HeaderCTA({
  href,
  label = "Try on TestFlight",
}: HeaderCTAProps) {
  return (
    <MagneticButton>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="glass inline-flex items-center justify-center rounded-full px-5 py-2 text-micro outline-none transition-transform hover:-translate-y-[1px] active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        style={{
          color: "var(--foreground)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
        }}
        aria-label={label}
      >
        {label}
      </a>
    </MagneticButton>
  );
}
