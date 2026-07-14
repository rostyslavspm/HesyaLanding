import Header from "./Header";
import PromoBanner from "./sections/PromoBanner";

type MarketingChromeProps = {
  variant?: "light" | "dark";
  showPromoBanner?: boolean;
};

export default function MarketingChrome({
  variant = "dark",
  showPromoBanner = true,
}: MarketingChromeProps) {
  return (
    <>
      {showPromoBanner ? <PromoBanner /> : null}
      <Header variant={variant} />
    </>
  );
}
