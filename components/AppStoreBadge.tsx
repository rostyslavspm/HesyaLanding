export default function AppStoreBadge() {
  return (
    <a
      href="#"
      aria-label="Download on the App Store"
      className="inline-block transition-opacity hover:opacity-80"
    >
      <svg
        width="150"
        height="50"
        viewBox="0 0 150 50"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Download on the App Store"
      >
        <rect width="150" height="50" rx="10" fill="currentColor" className="text-foreground" />
        <text x="75" y="20" textAnchor="middle" fill="var(--background)" fontSize="9" fontFamily="var(--font-dm-sans), system-ui">
          Download on the
        </text>
        <text x="75" y="36" textAnchor="middle" fill="var(--background)" fontSize="16" fontWeight="600" fontFamily="var(--font-dm-sans), system-ui">
          App Store
        </text>
      </svg>
    </a>
  );
}
