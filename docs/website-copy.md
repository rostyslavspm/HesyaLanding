# Hesya Landing — Website Copy

All user-visible text on the Hesya landing site, by page and section in scroll order. Voice: "Quiet Authority" — sparse, a little oracular, short lines; the page speaks less than you expect.

> Last synced: September 26, 2026 (Quiet Authority restyle). Source of truth is the code — update this file alongside copy changes.

---

## Metadata & SEO (home)

**Title:** Hesya — Mindful Focus & Intention Tracker for iPhone

**Description:** Hesya is a free iPhone app for holding one intention at a time. Name what matters, and when your attention drifts, a quiet cue returns you to your own words — no blocking, no streaks, no scores, no accounts. Free on the App Store.

**OG image:** generated (`app/opengraph-image.tsx`) — "Choose where your attention goes." headline over the hero. *(Out of sync with the current hero headline; update separately.)*

---

## Landing Page

Sections in order: Hero → Recognition → Features ("The shape of a session") → Manifesto teaser → Download → Footer, under a sticky header.

### Header

- **Brand:** Hesya
- **Nav:** Features, Philosophy, Support, Privacy
- **Contact** (desktop, `mailto:support@hesya.app`)
- **CTA:** Get the app — hidden while the hero's own CTA is on screen

### Hero

**Headline:** Name what matters. / Stay with it.

**CTA:** Get the app

**Phone:** the app's Running Session screen — "In progress" / "Morning orientation and prioritization", with a live timer ("15 min", counting down).

### Recognition

**Eyebrow:** Awareness

**Heading:** Drift is not a failing.

### Features — "The shape of a session"

Section nav: Declare · Return · Reflect · Presence

| Moment | Heading | Line |
|---|---|---|
| Declare | Begin by naming one thing | In your own words. Kept exactly as you wrote them. |
| Return | When you drift, one quiet cue | Your own words return to you. The choosing stays yours. |
| Reflect | At the end, a moment to notice | One question. No score. Skipping is an answer too. *(link: Read the philosophy)* |
| Presence | Always in view, never in the way | What you named waits on your Lock Screen. Nothing more. |

### Manifesto teaser

**Heading:** The light does not choose for you.

**Body:** We live inside an environment built to take attention. Hesya does not add to it. It removes what stands between you and the thing you meant to do, then steps back. You choose what matters; Hesya only helps you keep to it.

**Link:** Read the full manifesto

### Download

**Heading:** One intention is enough to begin.

**Line:** Free. Private. No account.

**CTA:** Get the app

### Footer

**Brand:** Hesya · **Links:** Features, Manifesto, Support, Privacy, Contact · Hesya © {year}

### 404

**Label:** 404 · **Heading:** This page drifted. · **Line:** The page you're looking for doesn't exist, or has moved. · **Link:** Back to Hesya

---

## Privacy Policy Page (/privacy)

**Page title:** Privacy Policy — Hesya

**Meta description:** Your sessions, intents, and reflections stay on your device. The only thing that ever leaves is a small set of anonymous, identifier-free usage counts.

**Back link:** <- Back to Hesya

**Last updated:** June 16, 2026

### Overview
Hesya is a focus companion: you declare an intention, protect a session, and reflect when it ends. It is built so that your data stays yours. This page explains exactly what the app does with information — and what it deliberately doesn't do.

### What stays on your device
Everything you create or configure lives only on your iPhone:
- **Sessions & intents:** what you typed, when you started and finished.
- **Reflections & journal:** moods and notes after a session.
- **Settings:** cue preferences, quiet hours, the apps you select as distracting.

Deleting the app deletes all of it. There is no copy on any server.

### Screen Time (optional)
If you grant Screen Time access, Hesya uses Apple's FamilyControls framework for one purpose: during a session you started, it asks iOS to signal when time in apps *you selected* crosses a threshold, so it can offer a gentle cue back to your intent.

**Important:** Apple's framework never tells Hesya *which* app you used — only that the threshold was crossed. No app names, usage history, or browsing activity are ever visible to Hesya, stored, or transmitted. The permission is optional; every feature except drift cues works without it.

### Anonymous usage events
To understand whether the app's core flows work, Hesya records a few anonymous events — for example "a session was started" or "onboarding was completed." Each event contains only the event name, a timestamp, the app version, and a structural category (such as the session type).

There is deliberately **no identifier of any kind** — no device ID, install ID, user ID, or IP logging. These are population-level counts that cannot be linked to you or your device. They are sent to our own first-party server; no third-party analytics service is involved. Reflection notes and intent text never leave your device.

### Third-Party Services & Children
Hesya does not integrate with any third-party analytics, advertising, or tracking SDKs. There is no cross-app or cross-site tracking. Hesya does not knowingly collect information from children; the app is rated 4+.

### Your Rights & Retention
Your personal content stays on your device and you control it. Deleting the app removes it entirely. The only information that ever leaves — the anonymous usage events above — contains nothing that identifies you.
- Choose your distracting apps, or none, anytime in Settings
- Revoke Screen Time or Notification permissions through iOS Settings
- Delete all app data by deleting the app

### Contact
For questions about privacy practices, please contact: support@hesya.app

---

## Support & FAQ Page (/support)

**Page title:** Support & FAQ — Hesya

**Meta description:** Get help with Hesya. Frequently asked questions and support contact.

**Back link:** <- Back to Hesya

**Heading:** Support & FAQ

**Intro:** Find answers to common questions about Hesya.

### Getting Started

**Q: How does Hesya work?**
You type what you want to have done — your intent — and start a focus session. Hesya keeps that intent visible while you work: on the in-session screen, the Lock Screen widget, and the Live Activity. If you drift into apps you've marked as distracting, a quiet cue invites you back. When the session ends, a short reflection closes the loop, and finished sessions live in your private journal.

**Q: What is an intent?**
One short line in your own words — "Finish the proposal introduction" or "Be present at dinner." Hesya keeps it verbatim and never rewrites or interprets it. You can add up to three, or start a session with none at all.

**Q: Do I need to grant Screen Time permission?**
No, it's optional. Sessions, the breathing pause, reflections, the journal, and widgets all work without it. Screen Time access enables drift cues: during a session, iOS can tell Hesya when time in the apps you selected as distracting crosses a threshold — without ever revealing which app you used.

### Privacy & Permissions

**Q: What data does Hesya collect?**
Your sessions, intents, reflections, and settings stay on your device. Hesya never records which apps you use. The only thing that ever leaves your device is a small set of anonymous usage counts (for example "a session was started") with no identifier of any kind — they cannot be linked to you. See the Privacy Policy for detail.

**Q: Why does Hesya ask for Screen Time permission?**
Only to power drift cues during sessions you start. Apple's framework tells Hesya that cumulative time in your selected apps crossed a threshold — never which app, never your history. It's optional and revocable anytime in iOS Settings.

**Q: Can I revoke permissions later?**
Yes — iOS Settings > Hesya. The app keeps working without them; drift detection simply falls back to a gentler, time-based signal.

### Using Hesya

**Q: How do I start a session?**
Type your intent on the Focus screen (or leave it empty) and tap Begin — three taps or fewer, by design. The in-session screen shows your intent and a quiet clock; Pause and Complete are always available.

**Q: What's the difference between Deep Work and Present Evening?**
Two flavors of intentional time — one for focused work, one for being present off-screen. They change the framing copy, not the rules.

**Q: What is the breathing pause?**
Three slow cycles of the physiological sigh — inhale, a short top-up, a long exhale (about 40 seconds) — then a quiet "Ready?" with two choices: resume or stay paused. It is always skippable.

**Q: How do I add the Hesya widget?**
Long-press your Home Screen or Lock Screen, tap + / Customize, find Hesya, and add it. The widget shows your current intent and session state. On macOS Tahoe, your session's Live Activity can also appear in the Mac menu bar.

### Troubleshooting

**Q: Drift cues aren't appearing**
Check three things: Screen Time permission is granted (iOS Settings > Hesya), at least one app is selected as distracting (Hesya Settings), and a session is actually active. Cues also stay quiet during pauses, quiet hours, and mute windows — silence is often the product working as designed.

**Q: I'm not receiving notifications**
Check that notification permission is granted in iOS Settings > Hesya, that you're not in Quiet Hours or a mute window, and that Do Not Disturb or Focus modes aren't suppressing them.

**Q: Does Hesya work offline?**
Yes. Everything core works without a connection. The only network traffic is anonymous, identifier-free usage counts, which simply wait until you're back online.

### General

**Q: Is Hesya free?**
Yes — free, with no ads and no in-app purchases.

**Q: Do I need to create an account?**
No. There are no accounts — download and use.

**Q: What devices are supported?**
iPhone on iOS 26 or later. On macOS Tahoe, your session's Live Activity can appear in the Mac menu bar while you work.

**Q: Can I use Hesya on multiple devices?**
Your sessions and journal are stored on each device — there's no cloud sync yet. A native Mac companion is planned.

### Still need help?

We aim to respond within 24-48 hours.

**Button:** Email support@hesya.app

---

## Image Alt Texts

| Image | Alt text |
|-------|----------|
| Hero phone | Hesya during a focus session: "Morning orientation and prioritization", 15 minutes left |
| Declare | Declaring an intention in Hesya |
| Return | Hesya return cue offering keep going, step away, or not now |
| Reflect | Journal entry after a Hesya session |
| Presence | Hesya Home Screen widget keeping your intention in view |
