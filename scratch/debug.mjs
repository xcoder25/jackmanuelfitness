import { chromium } from "playwright";

async function main() {
  const browser = await chromium.launch({ channel: "msedge" });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto("http://127.0.0.1:8080");
  await page.waitForTimeout(500);

  // Scroll through the page to trigger all IntersectionObservers
  for (let y = 0; y < 6000; y += 600) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(150);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);

  await page.screenshot({ path: "screenshots/fullpage.png", fullPage: true });
  console.log("Fullpage screenshot saved to screenshots/fullpage.png");
  await browser.close();
}

main().catch(console.error);
