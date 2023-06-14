//import dotenv
//config: Loads .env file contents into process.env.
require('dotenv').config();
//import express
const express = require('express')
//import CORS
const cors = require('cors')

//import connecion.js
require('./db/connection')

//import router
const router = require('./Routes/router')

//import appMiddleware
const Middleware = require("./Middleware/appMiddleware")

//creates express server
const server = express()

//setup port number for server (static) || predefined process env port (dynamic)
const PORT = 3000 || process.env.PORT

//use cors( to share data), json parser(json parsing) in server app
server.use(cors())
server.use(express.json())
server.use(Middleware.appMiddleware)
server.use(router)

//run athe server app in a specified port
server.listen(PORT,()=>{
    console.log(`Bank Server started at port ${PORT}`);
})

//to resolve http request using express server
server.get('/',(request,response)=>{
    response.send("<h2>bank server started...</h2>")
})

// //to delete
// server.delete('/',(request,response)=>{
//     response.send("I am DELETE method")
// })

//to post
// server.post('/',(request,response)=>{

//     response.send("I am POST method")

// })