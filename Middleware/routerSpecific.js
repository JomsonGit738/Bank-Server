//Router specific middleware

//import jsonwebtoken
const jwt = require('jsonwebtoken')

//logic
//define logic for checking user login or not
const loginMiddleware = (req,res,next)=>{
    console.log("Router specific middleware... invoked");
    
    //get token
    const token = req.headers['access-token']

    //verify token
    try{
        const jwtresponse = jwt.verify(token,"supersecreatkey12345")
        console.log(jwtresponse);
        //passing loginAcno to request
        req.debitAcno = jwtresponse.loginAcno
        //to process the request...
        next()
    }
    catch(error){
        res.status(401).json("Please Log In")
    }
    
}

module.exports = {
    loginMiddleware
}