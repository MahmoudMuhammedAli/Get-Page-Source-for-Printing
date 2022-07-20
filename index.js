const browserObject = require("./browser");
const scraperController = require("./pageController");

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
scraperController(
  browserInstance,
  "https://cp.freaksofnature.me/home/tickets_invoice?t=fda7c5aa7a4e42e9a379a3051cf7202ee008a029"
);
