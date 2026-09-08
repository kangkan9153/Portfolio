import { chromium } from 'playwright';
(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'screenshot.png' });
  console.log("Screenshot taken.");
  await browser.close();
})();
