import { chromium } from "playwright";

async function main() {
  const browser = await chromium.launch({ channel: "msedge" });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  
  await page.goto("http://127.0.0.1:8080", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2000);

  // Test manual switching to verify each slide's rendering
  console.log("Switching to Slide 1 (hero-gym)...");
  await page.click('button[aria-label="Go to gym background slide"]');
  await page.waitForTimeout(800);
  await page.screenshot({ path: "screenshots/hero-slide1-gym.png" });

  console.log("Switching to Slide 2 (jack2)...");
  await page.click('button[aria-label="Go to Coach Jack photo 1 slide"]');
  await page.waitForTimeout(800);
  await page.screenshot({ path: "screenshots/hero-slide2-jack2.png" });

  console.log("Switching to Slide 3 (jack3)...");
  await page.click('button[aria-label="Go to Coach Jack workout photo 2 slide"]');
  await page.waitForTimeout(800);
  await page.screenshot({ path: "screenshots/hero-slide3-jack3.png" });

  console.log("All 3 hero slides verified and saved!");
  await browser.close();
}

main().catch(console.error);
