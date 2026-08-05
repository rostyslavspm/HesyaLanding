import { test, expect } from "@playwright/test";

/**
 * Thin smoke suite. Not visual regression — targets the stateful logic an
 * audit flagged as the codebase's actual risk surface: hash-boot deep
 * linking (lib/motion/hashBoot.ts -> hooks/useFeatureSuite.ts) and the
 * scroll-driven header theme (hooks/useHeaderTheme.ts).
 */

const ROUTES: { path: string; title: RegExp }[] = [
  { path: "/", title: /Name one thing/i },
  { path: "/manifesto", title: /Hesya/i },
  { path: "/support", title: /Hesya/i },
  { path: "/privacy", title: /Hesya/i },
];

for (const { path, title } of ROUTES) {
  test(`${path} renders`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(title);
  });
}

test("hash deep link lands on the right feature block and marks it active", async ({
  page,
}) => {
  await page.goto("/#declare");

  const block = page.locator("#declare");
  await expect(block).toBeInViewport({ ratio: 0.2 });

  const activeTab = page.locator('[data-active="true"]');
  await expect(activeTab).toHaveAttribute("href", "#declare");
});

test("header theme follows the section behind it while scrolling", async ({
  page,
}) => {
  const header = page.locator("header.header-sticky");

  await page.goto("/");
  await expect(header).toHaveClass(/header-dark/); // over the night-sky hero

  await page.locator("#features").scrollIntoViewIfNeeded();
  await expect(header).not.toHaveClass(/header-dark/); // over a light section

  await page.locator("#philosophy").scrollIntoViewIfNeeded();
  await expect(header).toHaveClass(/header-dark/); // over the manifesto teaser
});
