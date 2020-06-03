const express = require('express')
const auth = require('../middleware/auth')
const cart = require('../controller/cart')
const router = new express.Router()

// Autheticate All the request 
router.all("*", auth)

// Add to cart
router.post('/api/addToCart', cart.addToCart)

//Remove From the Cart
router.post('/api/removeFromCart',cart.removeFromCart )

module.exports= router