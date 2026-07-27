import Header from "./Header";

type MarketingChromeProps = {
  variant?: "light" | "dark";
};

export default function MarketingChrome({
  variant = "dark",
}: MarketingChromeProps) {
  return <Header variant={variant} />;
}
