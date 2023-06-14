//import express
const express = require('express')

//import middleware
const middleware = require('../Middleware/routerSpecific')

//create routes, using express.Router() class
const router = new express.Router()

//import controller
const userController = require('../controllers/userController')

//define routes to resolve http request 


//Register => request resolving
router.post('/employee/register', userController.register)

//Login => request resolving
router.post('/employee/login',userController.login)

//balance => get resolving
router.get('/user/balance/:acno',middleware.loginMiddleware,userController.getBalance)
//request forwarding to => userController.balance

//Fund transfer => post => directing to fundTransfer() in controller
router.post('/user/transfer',middleware.loginMiddleware,userController.fundTransfer)
//middle ware checking currentUser is valid or not

//get All Transactions => post => directing to fundTransfer() in controller
router.get('/user/transactions',middleware.loginMiddleware,userController.getTransactions)

//delete account
router.delete('/user/remove',middleware.loginMiddleware,userController.deleteMyACNO)


//find diffrence between exports and module.exports
//export router
module.exports = router