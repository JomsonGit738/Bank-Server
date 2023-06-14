//import mongoose
const mongoose = require('mongoose')

//using mongoose, define schema for users
const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    acno:{
        type:Number,
        required:true,
        unique:true
    },
    balance:{
        type:Number,
        required:true
    },
    transactions:{
        type:Array,
        required:true
    }
})

//create a model / collection  to store documents as giben schema
const users = mongoose.model("users",userSchema)

//export model - to import in another file, should export it from here
module.exports = users