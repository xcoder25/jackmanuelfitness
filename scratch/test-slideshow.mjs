import { chromium } from "playwright";

async function main() {
  const browser = await chromium.launch({ channel: "msedge" });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  
  await page.goto("http://127.0.0.1:8080", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(1000);
  console.log("Capturing Slide 1 (t=1s)...");
  await page.screenshot({ path: "screenshots/hero-gym-slide.png" });

  console.log("Waiting 5s for CSS animation to slide to jack2.jpg (t=6s)...");
  await page.waitForTimeout(5000);
  await page.screenshot({ path: "screenshots/hero-jack2-slide.png" });
  console.log("Captured Slide 2 (jack2.jpg)");

  await browser.close();
}

main().catch(console.error);
