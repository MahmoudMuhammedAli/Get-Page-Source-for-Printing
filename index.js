const browserObject = require("./browser");
const scraperController = require("./pageController");
const express = require("express");
const app = express();
const port = process.env.PORT || 5555;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.get("/scrape", async (req, res) => {
  let url = req.query.url;
  console.log("🚀 ~ file: index.js ~ line 13 ~ app.get ~ url", url);
  let browserInstance = browserObject.startBrowser();
  let browser;
  try {
    browser = await browserInstance;
    let pageHTML = await scraperController(browser, url);
    res.send({
      status: 1,
      data: pageHTML,
      message: "Successfully scraped the page",
    });
  } catch (err) {
    console.log("Could not resolve the browser instance => ", err);
    res.send({
      status: 0,
      data: err,
    });
  }
});
// show app is running on /
app.get("/", (req, res) => {
  res.send("App is running on /");
});
