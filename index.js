const browserObject = require("./browser");
const scraperController = require("./pageController");
const express = require("express");
const app = express();
const port = process.env.PORT || 5555;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
//Handle the request
app.get("/scrape", async (req, res) => {
  let url = req.query.url;
  console.log("🚀 ~ file: index.js ~ line 13 ~ app.get ~ url", url);
  //show the request.body
  console.log("🚀 ~ file: index.js ~ line 15 ~ app.get ~ req.body", req.body);
  let browserInstance = browserObject.startBrowser();
  let browser;
  try {
    browser = await browserInstance;
    await scraperController(browser, url);
    res.send("Scraping complete");
  } catch (err) {
    console.log("Could not resolve the browser instance => ", err);
  }
});
//Handle the request
app.get("/scrape/:url", async (req, res) => {
  let url = req.params.url;
  let browser;
  try {
    browser = await browserInstance;
    await scraperController(browser, url);
    res.send(1);
  } catch (err) {
    console.log("Could not resolve the browser instance => ", err);
    res.send(0);
  }
});
