const puppeteer = require('puppeteer');

const xpath = '//*[@id="__next"]/div/div[2]/main/div[1]/div/div[4]/div[2]/div[1]/div[2]';

(async () => {
  console.log('Benchmarking market list render from an initial page load...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const before = Date.now();
  await page.goto('https://app.zeitgeist.pm');
  page.waitForXPath(xpath).then(async () => {
    const after = Date.now();
    console.log(`Time elapsed: ${(after - before) / 1000}s`);
    await page.setViewport({ width: 2000, height: 1500 });
    await page.screenshot({ path: 'screenshot.png' });
    process.exit(0);
  });
})();
