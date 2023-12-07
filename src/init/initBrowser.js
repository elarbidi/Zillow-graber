const {firefox} = require("playwright")
const browserConfig = require("../../config/browserConfig") 

async function intiBrowser(){
    try {
    const browser = await firefox.launch(browserConfig)
    return browser
    }catch{
        throw new Error("can't initialise the broweser / check ./src/initBrowser.js");
    }
}
module.exports = intiBrowser
