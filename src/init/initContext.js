const { devices } = require("playwright");

async function initContext(browser) {
    try {
        const context = await browser.newContext();
        return context
    } catch {
        throw new Error("can't init a new Context")
    }
}
module.exports = initContext