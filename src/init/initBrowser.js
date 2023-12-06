const {chromium} = require("playwright")
const browserConfig = require("../../config/browserConfig") 

async function intiBrowser(){
    try {
    const browser = await chromium.launch(browserConfig)
    return browser
    }catch{
        throw new Error("can't initialise the broweser / check ./src/initBrowser.js");
    }
}
