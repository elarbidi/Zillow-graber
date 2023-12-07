

async function searchPage(page){
    //data-test="property-card
    try{
        const allAssets = await page.$$('ul  article')
        return allAssets
    }catch{
        throw new Error(`can't find items in the search page`)
    }
}
module.exports = searchPage