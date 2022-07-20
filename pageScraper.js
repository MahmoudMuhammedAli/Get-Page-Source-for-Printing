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
    // Wait for 5 seconds

    console.log(await page.content());
    await browser.close();
  },
};

module.exports = scraperObject;
