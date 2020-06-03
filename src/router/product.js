const express = require('express')
const {addProducts,getProducts} = require("../controller/product")
const router = new express.Router()


router.post('/api/addProduct', addProducts)

router.get('/api/getProducts', getProducts)


 
module.exports = router 