/**
 * Hero product moments — Hesya voice & UI states (not user pain).
 */
export const RETURN_PROMPT = {
  context: "You've been away for a little while.",
  intention: "Be present at dinner",
  offer: "Return to what you named, without guilt?",
  reply: "yes, bring me back",
};

export const HERO_PHONE = {
  src: "/screenshots/screen-lockscreen.png",
  alt: "Hesya your intention on the Lock Screen",
  fallbackLabel: "Lock Screen",
} as const;

export const HERO_WIDGETS = [
  { id: "intent", label: "Today's intention", value: "Be present at dinner" },
  { id: "state", label: "Session", value: "Quietly holding" },
  { id: "return", label: "When you drift", value: "A gentle return" },
] as const;
