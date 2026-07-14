# Hesya Landing Page

Landing page for [Hesya](https://hesya.app) — a calm focus companion for iPhone.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- GSAP + Lenis (scroll) + Framer Motion (chrome micro-interactions)
- Deployed on Vercel

## Pages

- `/` — Marketing homepage
- `/manifesto` — Philosophy / manifesto
- `/privacy` — Privacy policy
- `/support` — Support & FAQ

## Development

```bash
npm install
npm run dev
```

## Build & lint

```bash
npm run build
npm run lint
```

## Assets

### Hero & manifesto backgrounds

Place in `public/images/`:

- `hero-forest.jpg` — hero backdrop (see `lib/content/assetSpecs.ts`)
- `manifesto-scene.jpg` — manifesto teaser left panel

### Feature screenshots

Place in `public/screenshots/`:

- `screen-intention.png` — Declare
- `screen-lockscreen.png` — Return
- `screen-ready.png` — Reflect
- `Homescreen-widget.png` — Presence

Hero phone mockup uses `screen-lockscreen.png` via `lib/content/heroMoments.ts`.

Asset specs and creative briefs: `lib/content/assetSpecs.ts`.

## Beta

TestFlight: `https://testflight.apple.com/join/2sE4MyhY`
