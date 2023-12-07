const _ = require("lodash");

async function scrollDown(page) {
    try {
        let previousHeight = 0
        let domHight = await page.evaluate(`document.querySelector('#search-page-list-container').scrollHeight`);
        let scrollMatrix = 100
        while(previousHeight < domHight){
            console.log(previousHeight , domHight)
        await page.evaluate(`document.querySelector('#search-page-list-container').scrollTo(0, ${previousHeight})`);
        domHight = await page.evaluate(`document.querySelector('#search-page-list-container').scrollHeight`);
        previousHeight += _.random(100,200)
        //await page.waitForTimeout(_.random(3000,5000));
        }
      }catch(e) { }
  }
  
  module.exports = scrollDown