const express=require("express")
const auth = require('../middleware/auth')
const placeOrder= require('../controller/order')
const router = new express.Router()

router.post('/api/placeOrder',auth,placeOrder)


module.exports = router