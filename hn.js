const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // insert url from desired page to be targetted at "???"
  await page.goto('???', {waitUntil: 'networkidle2'});
  // insert name of file at "???" for desired targetted page to go into 
  await page.pdf({path: '???.pdf', format: 'A4'});

  await browser.close();
})();