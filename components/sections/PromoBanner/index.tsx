import { URLS } from "@/lib/design-system";

export default function PromoBanner() {
  return (
    <div className="banner-promo" role="region" aria-label="Beta announcement">
      <p>Hesya is in beta.</p>
      <a
        href={URLS.testflight}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get the beta on TestFlight"
      >
        Get the beta →
      </a>
    </div>
  );
}
