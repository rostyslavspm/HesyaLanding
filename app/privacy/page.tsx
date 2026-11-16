import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import MarketingChrome from "../../components/MarketingChrome";
import Footer from "../../components/Footer";
import JsonLd, { createBreadcrumbs, WEBSITE_ID } from "../../components/JsonLd";
import { LAYOUT_CLASS, TYPE } from "@/lib/design-system";

const PRIVACY_DESCRIPTION =
  "Your words and history stay on your devices. No accounts, no advertising, no tracking; anonymous usage counts only if you turn them on.";

export const metadata: Metadata = {
  title: "Privacy Policy — Hesya",
  description: PRIVACY_DESCRIPTION,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy — Hesya",
    description: PRIVACY_DESCRIPTION,
    url: "https://hesya.app/privacy",
    siteName: "Hesya",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Privacy Policy — Hesya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Hesya",
    description: PRIVACY_DESCRIPTION,
    images: ["/opengraph-image"],
  },
};

const privacyPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy — Hesya",
  url: "https://hesya.app/privacy",
  description: PRIVACY_DESCRIPTION,
  isPartOf: {
    "@id": WEBSITE_ID,
  },
};

const privacyBreadcrumbs = createBreadcrumbs([
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy" },
]);

const SUPPORT_EMAIL = (
  <a href="mailto:support@hesya.app" className={TYPE.linkAccent}>
    support@hesya.app
  </a>
);

/** The page's emphasis box (elevated surface), used for the encrypted-words note. */
const EMPHASIS_BOX =
  "rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--color-abyss-elevated)] p-6";

/** The seven columns of the policy's "What can leave your device" table. */
const DATA_FLOW_FIELDS = [
  "What",
  "When",
  "Exactly what is sent",
  "Why",
  "Who receives it",
  "Kept for",
  "Legal basis (GDPR)",
] as const;

type DataFlowField = (typeof DATA_FLOW_FIELDS)[number];
type DataFlow = Record<DataFlowField, ReactNode> & { What: string };

/**
 * One card per table row, each a definition list of the seven fields, so the
 * table reads on a phone without horizontal scroll. Cell text is verbatim.
 */
const DATA_FLOWS: DataFlow[] = [
  {
    What: "Anonymous usage counts",
    When: (
      <>
        Only if you turn on <em>Share anonymous usage</em> (off unless you
        choose it)
      </>
    ),
    "Exactly what is sent":
      "The event’s name (for example “a session began”), the time, the app version and build, and sometimes one fixed category: the kind of cue, how you answered it, whether drift detection is set up, or how cues felt in the weekly reflection (one of a few fixed choices). No words, moods, notes, plans or durations, and no identifier of any kind",
    Why: "To learn whether the app’s main steps work",
    "Who receives it": "Cloudflare, our processor",
    "Kept for":
      "Individual events are deleted after three months; only totals (such as “sessions started per day”) are looked at",
    "Legal basis (GDPR)":
      "Your consent (Art. 6(1)(a)), which you can withdraw at any time. If you are under 16, ask a parent before turning it on",
  },
  {
    What: "The Live Activity on your iPhone",
    When: "Only when you start a session on your Mac and your iPhone has Live Activities on",
    "Exactly what is sent": (
      <>
        A push token that identifies your iPhone to Apple’s push service (not
        to us), a random session identifier, the session’s start time, and the
        session’s words{" "}
        <strong>encrypted with a key only your own devices hold</strong>
      </>
    ),
    Why: "To show the session on your locked iPhone",
    "Who receives it":
      "Cloudflare (our processor) passes it to Apple’s push service, which delivers it",
    "Kept for": "Not kept: the server forwards it and stores nothing",
    "Legal basis (GDPR)": "Providing the feature you use (Art. 6(1)(b))",
  },
  {
    What: "Emails you send us",
    When: <>Only if you write to {SUPPORT_EMAIL}</>,
    "Exactly what is sent": "Your email address and your message",
    Why: "To answer you",
    "Who receives it":
      "Google (Gmail), the email service we use, which handles mail under its own privacy terms",
    "Kept for":
      "Deleted, and removed from Trash, within 14 days after our conversation ends",
    "Legal basis (GDPR)":
      "Our legitimate interest in answering you (Art. 6(1)(f))",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={[privacyPageJsonLd, privacyBreadcrumbs]} />
      <MarketingChrome variant="dark" />
      <main id="main" className="min-h-[100dvh] bg-[var(--color-abyss)] text-[var(--color-silver)] py-32 px-6" aria-label="Privacy policy">
        <div className={LAYOUT_CLASS.prose}>
          <Link href="/" className={`${TYPE.pageBack} mb-12`}>
            &larr; Back to Hesya
          </Link>

          <div className="mb-16">
            <h1 className={`${TYPE.editorialItalic} mb-4 text-[var(--color-silver)]`}>
              Privacy Policy
            </h1>
            <p className={TYPE.proseMuted}>Last updated: November 16, 2026</p>
          </div>

          <div className="text-prose-stack space-y-12">
            <section>
              <h2 className={`${TYPE.editorialSection} mb-4`}>Who we are</h2>
              <p className="mb-4">
                Hesya is made by Rostyslav Slobodianiuk, an individual developer
                based in the Netherlands.
                <br />
                Contact address: Nieuwe Boteringestraat 61A, 9712 PJ Groningen,
                the Netherlands
                <br />
                Email: {SUPPORT_EMAIL}
              </p>
              <p>
                The developer is the “controller” of the little personal data
                described below, as the EU’s General Data Protection Regulation
                (GDPR) uses the word.
              </p>
            </section>

            <section>
              <h2 className={`${TYPE.editorialSection} mb-4`}>In short</h2>
              <p>
                Hesya is a focus companion. You name what deserves your
                attention, begin a session, and look back when it ends. Your
                words and history stay on your own devices. When something has
                to travel between your Mac and your iPhone through our server,
                it travels encrypted so that only your devices can read it.
                Hesya has no accounts, no advertising and no tracking, it never
                sells data or shares it for advertising, and it never learns
                which apps you use.
              </p>
            </section>

            <section>
              <h2 className={`${TYPE.editorialSection} mb-4`}>What stays on your devices</h2>
              <p className="mb-4">
                Everything you write or choose is stored on your device, inside
                the app:
              </p>
              <ul className="list-disc space-y-3 ps-6">
                <li>
                  <strong>Sessions and intents:</strong> what you wrote, the
                  first step and what may pull you away (if you added them),
                  and when the session started and ended.
                </li>
                <li>
                  <strong>Reflections and the Journal:</strong> the mood and
                  note you leave after a session, and your weekly reflection
                  answers.
                </li>
                <li>
                  <strong>Plans and the day’s line:</strong> sessions you plan
                  ahead, and your one-line answer to the day’s question.
                </li>
                <li>
                  <strong>Cue history:</strong> when a cue was offered and how
                  you answered, so Hesya can speak less over time.
                </li>
                <li>
                  <strong>Settings:</strong> cue preferences, quiet hours,
                  reminders and the apps you choose.
                </li>
              </ul>
              <p className="mt-4">
                None of this is sent to us, and we run no server that stores
                it. Your moods and notes are never sent to us in any form.
              </p>
            </section>

            <section>
              <h2 className={`${TYPE.editorialSection} mb-4`}>What can leave your device</h2>
              <div className="space-y-6">
                {DATA_FLOWS.map((flow) => (
                  <dl
                    key={flow.What}
                    className="min-w-0 space-y-4 rounded-[var(--radius-xl)] border border-[var(--border-subtle)] p-6 [overflow-wrap:anywhere] sm:grid sm:grid-cols-[minmax(0,9rem)_minmax(0,1fr)] sm:gap-x-6 sm:gap-y-4 sm:space-y-0"
                  >
                    {DATA_FLOW_FIELDS.map((field) => (
                      <div key={field} className="sm:contents">
                        <dt className={`${TYPE.uiMicroLabel} mb-1 text-[var(--color-silver-dim)] sm:mb-0 sm:pt-1`}>
                          {field}
                        </dt>
                        <dd className={field === "What" ? "font-medium text-[var(--color-silver)]" : undefined}>
                          {flow[field]}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ))}
              </div>
              <p className="mt-6">
                <strong>Internet addresses.</strong> Like any internet service,
                Cloudflare receives your device’s IP address when the app sends
                one of the requests above. It uses the address only to deliver
                the request and to limit how often requests can be sent (our
                legitimate interest in keeping the service secure, Art.
                6(1)(f)). We have turned off request logging for our server,
                and we do not store IP addresses.
              </p>
              <div className={`${EMPHASIS_BOX} mt-6`}>
                <p>
                  <strong>The encrypted words.</strong> Your Mac encrypts the
                  session’s words with a key your iPhone created. The key
                  travels only between your own devices, through your private
                  iCloud or the local link between them. Neither we, Cloudflare
                  nor Apple can read the words. Your iPhone decrypts them to
                  show them on the card.
                </p>
              </div>
            </section>

            <section>
              <h2 className={`${TYPE.editorialSection} mb-4`}>Your iPhone and Mac together (optional)</h2>
              <p>
                If you pair the Hesya Mac app with your iPhone, the two devices
                keep the same sessions, reflections, plans and shared settings.
                They exchange them{" "}
                <strong>directly with each other over your local network</strong>,
                on a connection encrypted with a key created when you paired
                and stored only in each device’s keychain. Nothing passes
                through us. You can unpair in Settings at any time.
              </p>
            </section>

            <section>
              <h2 className={`${TYPE.editorialSection} mb-4`}>iCloud (optional)</h2>
              <p>
                If you are signed in to iCloud, your sessions, reflections,
                plans and the day’s line are also kept in{" "}
                <strong>your own private iCloud database</strong>, so they
                reach your other devices even when they are not near each other
                or the app is closed. This is between you and Apple: we never
                receive or access it. The content is stored end-to-end
                encrypted, so neither we nor Apple can read it. Apple can see
                only technical details, such as the type of each record, its
                size and when it changed. If iCloud is off, each device works
                on its own. Erasing your history in Hesya also removes this
                iCloud copy.
              </p>
            </section>

            <section>
              <h2 className={`${TYPE.editorialSection} mb-4`}>Screen Time (optional)</h2>
              <p className="mb-4">
                Hesya uses Apple’s Screen Time frameworks only for the apps{" "}
                <strong>you</strong> choose, and only for two things:
              </p>
              <ol className="list-decimal space-y-3 ps-6">
                <li>
                  <strong>Noticing drift during a session.</strong> iOS tells
                  Hesya when time in the apps you chose crosses a threshold, so
                  it can offer a quiet cue back to your intent.
                </li>
                <li>
                  <strong>Pausing before an app (the soft wall).</strong> While
                  a session runs, a plan is waiting, or the day has no line yet,
                  opening one of your chosen apps first shows a short Hesya
                  screen. One tap — <em>Open [app]</em> — always lets you
                  through.
                </li>
              </ol>
              <p className="mt-4">
                Apple’s framework never tells Hesya which app you used, or
                anything about your usage. To show the words{" "}
                <em>Open [app]</em>, iOS gives the pause screen the app’s name;
                it is shown, not stored and not sent. Screen Time is optional:
                every feature except drift cues and the soft wall works without
                it, and you can change your chosen apps, or choose none, in
                Settings.
              </p>
              <p className="mt-4">
                <strong>On the Mac</strong>, you can name{" "}
                <em>apps that pull you away</em> in Settings. macOS tells Hesya
                when any app comes to the front. Hesya compares it with your
                list at that moment. It keeps your list, and — only while it is
                running, and only for the current part of the day — which app
                on your list you chose to open anyway, so it does not ask
                twice. It keeps nothing about which other apps you use, and
                sends nothing.
              </p>
            </section>

            <section>
              <h2 className={`${TYPE.editorialSection} mb-4`}>Crash reports</h2>
              <p>
                If you agreed to share diagnostics with app developers in your
                device’s settings, Apple may pass us crash reports for Hesya,
                without identifying you. Hesya itself keeps its own diagnostics
                on your device and does not send them.
              </p>
            </section>

            <section>
              <h2 className={`${TYPE.editorialSection} mb-4`}>Notifications</h2>
              <p>
                Reminders for your plans are scheduled on your device. The
                session’s Live Activity and Lock Screen card are updated on
                your device. The only exception is the push described above,
                when a session starts on your Mac.
              </p>
            </section>

            <section>
              <h2 className={`${TYPE.editorialSection} mb-4`}>What Hesya does not do</h2>
              <ul className="list-disc space-y-3 ps-6">
                <li>
                  No third-party analytics, advertising or tracking code in the
                  app.
                </li>
                <li>
                  No tracking across apps or websites. Data is never sold, and
                  never shared for advertising or tracking.
                </li>
                <li>No accounts and no sign-in.</li>
                <li>
                  <strong>Do Not Track:</strong> Hesya does not track you, so it
                  behaves the same whether or not your browser or device sends a
                  Do-Not-Track signal.
                </li>
              </ul>
            </section>

            <section>
              <h2 className={`${TYPE.editorialSection} mb-4`}>The website</h2>
              <p>
                This policy also covers hesya.app. The website is hosted on
                Vercel and sets no cookies. To see how many people visit and
                how quickly the pages load, it uses Vercel Web Analytics and
                Vercel Speed Insights: they count page views, the page’s
                address, the referring site, the browser, operating system,
                device type, approximate location (country, region and city),
                and loading times, without cookies and without identifying you.
                Like any website, the host receives your IP address to deliver
                the page; Vercel uses it only in a one-way form to tell visits
                apart, discarded within 24 hours, and we never see it. Our
                legal basis is our legitimate interest in understanding, in
                aggregate, how the site is used (Art. 6(1)(f)). The app and the
                website share nothing: visiting the site is never linked to
                your use of Hesya.
              </p>
            </section>

            <section>
              <h2 className={`${TYPE.editorialSection} mb-4`}>Who processes data for us, and where</h2>
              <ul className="list-disc space-y-3 ps-6">
                <li>
                  <strong>Cloudflare, Inc.</strong> runs our small server: it
                  counts the anonymous usage events and forwards the Live
                  Activity push. It acts as our processor under its Data
                  Processing Addendum.
                </li>
                <li>
                  <strong>Apple</strong>’s push notification service delivers
                  the Live Activity push to your iPhone, under Apple’s developer
                  terms; Apple also provides iCloud under your own agreement
                  with Apple.
                </li>
                <li>
                  <strong>Vercel, Inc.</strong> hosts the website and provides
                  its anonymous visit and speed statistics, as our processor
                  under its Data Processing Addendum.
                </li>
                <li>
                  <strong>Google</strong> provides the email service we use for
                  support (Gmail). Google handles email as an independent
                  provider under its own privacy policy, not on our
                  instructions, and may store it outside the European Economic
                  Area under its own terms.
                </li>
              </ul>
              <p className="mt-4">
                Cloudflare, Apple and Vercel may process data outside the
                European Economic Area, including in the United States. Those
                transfers rely on the EU–US Data Privacy Framework (where the
                company is certified) and on the European Commission’s
                Standard Contractual Clauses.
              </p>
            </section>

            <section>
              <h2 className={`${TYPE.editorialSection} mb-4`}>Deleting your data</h2>
              <ul className="list-disc space-y-3 ps-6">
                <li>
                  <strong>Erase all history</strong> in Settings removes your
                  sessions, reflections, plans and cue history from the device,
                  from your private iCloud copy, and from your paired Mac when
                  the devices next connect.
                </li>
                <li>You can also delete a single session from the Journal.</li>
                <li>
                  <strong>
                    Turn off <em>Share anonymous usage</em>
                  </strong>{" "}
                  at any time in Settings. Events not yet sent are deleted at
                  once.
                </li>
                <li>
                  Deleting the app removes what it stored on that device.{" "}
                  <strong>It does not remove your iCloud copy:</strong> use{" "}
                  <em>Erase all history</em> first, or delete Hesya’s data in
                  iOS Settings → your name at the top → iCloud → Manage
                  Storage. If you back up your device to iCloud or a computer,
                  those backups include app data, as they do for every app.
                </li>
                <li>
                  You can revoke Screen Time, notification or Live Activity
                  access at any time in iOS Settings.
                </li>
              </ul>
            </section>

            <section>
              <h2 className={`${TYPE.editorialSection} mb-4`}>Your rights</h2>
              <p className="mb-4">
                Under the GDPR you have the right to access the personal data we
                hold about you, to have it corrected or erased, to restrict or
                object to its processing, and to data portability. Where
                processing relies on your consent, you can withdraw it at any
                time; this does not affect processing before the withdrawal. In
                practice, Hesya holds no data that identifies you: usage counts
                carry no identifier and cannot be traced back to you, and the
                push relay keeps nothing. Because we cannot identify you from
                that data, we are not required to collect more information just
                to do so (GDPR Art. 11). The only personal data we may hold is
                an email you sent us, which we delete within 14 days after our
                conversation ends. To exercise a right, write to{" "}
                {SUPPORT_EMAIL}.
              </p>
              <p>
                You also have the right to complain to a data-protection
                authority — where you live or work, or in the Netherlands,
                where Hesya is based: the Autoriteit Persoonsgegevens (
                <a
                  href="https://autoriteitpersoonsgegevens.nl"
                  className={TYPE.linkAccent}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  autoriteitpersoonsgegevens.nl
                </a>
                ).
              </p>
            </section>

            <section>
              <h2 className={`${TYPE.editorialSection} mb-4`}>Children</h2>
              <p>
                Hesya is designed for adults and teenagers. It is rated 4+ on
                the App Store, and it does not knowingly collect personal
                information from anyone, including children. The push token
                used for the Live Activity serves only to deliver the feature
                and is not used to identify or track anyone.
              </p>
            </section>

            <section>
              <h2 className={`${TYPE.editorialSection} mb-4`}>Changes</h2>
              <p>
                If this policy changes, the new version is published here with
                a new date, and earlier versions stay available on request. If
                a change affects what leaves your device, Hesya will say so
                inside the app before the change applies, and will ask again
                where your consent is needed.
              </p>
            </section>

            <section className="border-t border-[var(--border-subtle)] pt-8">
              <h2 className={`${TYPE.editorialSection} mb-4`}>Contact</h2>
              <p>Questions about privacy: {SUPPORT_EMAIL}</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
