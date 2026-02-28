import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 1440 });

  try {
    await page.goto('http://localhost:3000/news', { waitUntil: 'networkidle' });
    // Wait for the marquee text as a sign it loaded
    await page.waitForSelector('text=PRAWDA WYCHODZI NA JAW', { timeout: 15000 });
    await page.screenshot({ path: 'verification_final.png', fullPage: false });
    console.log('Final verification screenshot saved to verification_final.png');
  } catch (e) {
    console.error('Verification failed:', e);
  } finally {
    await browser.close();
  }
})();
