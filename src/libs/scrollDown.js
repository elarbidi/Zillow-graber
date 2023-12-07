const _ = require("lodash");

async function scrollDown(page) {
    try {
        previousHeight = await page.evaluate('document.body.scrollHeight');
        await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
        await page.waitForFunction(`document.body.scrollHeight > ${previousHeight}`);
        await page.waitForTimeout(_.random(3000,5000));
      }catch(e) { }
  }
  
  module.exports = scrollDown