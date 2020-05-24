const express = require('express')
const Product = require('../models/product')
const router = new express.Router()


router.post('/api/addProduct', async (req, res) => {
    const product = new Product(req.body)

    try {
        await product.save()
        res.status(201).send(product)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/api/getProducts', async (req, res) => {
    try {
        const product = await Product.find({})
        res.send(product)
    } catch (e) {
        res.status(500).send()
    }
})


 
module.exports = router 