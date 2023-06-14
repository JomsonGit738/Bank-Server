//define application specific middleware
//use middleware before using router in index.js to work in the middle
const appMiddleware = (req,res,next)=>{
    console.log("Application specific middleware....loading");
    next()
}

//exporting middleware
module.exports={
    appMiddleware
}