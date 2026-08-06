const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 }, // iPhone 13 / mobile standard
    deviceScaleFactor: 2
  });

  const page = await context.newPage();

  const pagesToCapture = [
    { url: 'http://localhost:3000/index.html', name: 'mobile_homepage.png' },
    { url: 'http://localhost:3000/schemes/farmer-schemes/index.html', name: 'mobile_category_hub.png' },
    { url: 'http://localhost:3000/schemes/khadya-sathi/index.html', name: 'mobile_main_scheme.png' },
    { url: 'http://localhost:3000/schemes/khadya-sathi/card-download/index.html', name: 'mobile_sub_page.png' },
    { url: 'http://localhost:3000/disclaimer/index.html', name: 'mobile_disclaimer.png' }
  ];

  const outputDir = path.join(__dirname, 'mobile_screenshots');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  for (const item of pagesToCapture) {
    await page.goto(item.url, { waitUntil: 'networkidle' });
    await page.screenshot({ path: path.join(outputDir, item.name), fullPage: false });
    console.log(`Captured ${item.name}`);
  }

  await browser.close();
  console.log('Mobile screenshot capture complete!');
})();
