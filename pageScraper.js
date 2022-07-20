const scraperObject = {
  url: "",
  setUrl(url) {
    this.url = url;
  },
  async scraper(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url, {
      waitUntil: "domcontentloaded",
    });
    //todo excute the function styleForPrintThermal() to make teh page look like a thermal printer
    await page.evaluate(() => {
      styleForPrintThermal();
    });
    await page.waitForSelector("#qrcode1");

    const res = await page.content();
    await browser.close();
    return res;
  },
};

module.exports = scraperObject;
