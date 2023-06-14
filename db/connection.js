//define node app and mongodb database connectivity

//import mongoose in connection.js
const mongoose = require('mongoose')

//get to connection string from .env file: process.env
const connectionString = process.env.DATABASE //DATABASE variable from .env

//connect node with mongodb with mongoose using connecion String
mongoose.connect(connectionString,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then((data)=>{
    console.log("mongodb connection sucessful, bro!");
}).catch((error)=>{
    console.log(error," mongodb connection failed, bro!");
})