async function initPage(context){
    try{
        const page = await context.newPage()
        return page
    }catch{
        throw new Error("can't init a new page")
    } 
}