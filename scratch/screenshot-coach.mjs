import { chromium } from "playwright";

async function main() {
  const browser = await chromium.launch({ channel: "msedge" });
  const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } });
  await page.goto("http://127.0.0.1:8080");
  await page.waitForTimeout(500);

  // Scroll to #about so IntersectionObserver triggers
  const aboutEl = await page.locator("#about");
  await aboutEl.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);

  await aboutEl.screenshot({ path: "screenshots/coach-section.png" });
  console.log("Coach screenshot saved to screenshots/coach-section.png");
  await browser.close();
}

main().catch(console.error);
