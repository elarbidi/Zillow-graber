const intiBrowser = require("./init/initbrowser")
const initContext = require("./init/initContext")
const initPage = require("./init/initPage")

const searchPage = require("./pages/SearchPage")

const scrollDown = require("./libs/scrollDown")

async function scrapZillow(type , minPrice , maxPrice){
    type === undefined ? type = 'For Sale' : null
    minPrice === undefined ? minPrice = 'No Min' : null
    maxPrice === undefined ? maxPrice = 'No Max' : null

    console.log(`start getting data for : '${type}'\nmin price : '${minPrice}' \nmax price : '${maxPrice}'`)
    try {
        const browser = await intiBrowser()
        const context = await initContext(browser)
        const page = await initPage(context)
        await page.goto('https://www.zillow.com/homes/',{waitUntil : 'load'})
        await scrollDown(page)
        const items = await searchPage(page)
        await items[0].click()
        await page.getByText("Details",{exact : true}).click()
        await page.waitForSelector('.listing-overview article')
        // const data = await page.evaluate(()=>{
        //     const description =  document.querySelector('.listing-overview article')?.innerText
        //     const price = document.querySelector('.price-text')?.innerText

        // })
        let bedsNumber = await await page.getByTestId('home-info')
        bedsNumber = await bedsNumber.innerText()
        console.log(bedsNumber)
        
        //console.log(description)
        console.log("finish")

    }catch(e){
        console.error(e)
    }
}

scrapZillow()