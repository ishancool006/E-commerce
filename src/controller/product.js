const Product = require('../models/product')

const getProducts =async (req,res)=>{
    try {
        const products = await Product.find({})
        res.send(products)
    } catch (e) {
        res.status(500).send()
    }
}


const addProducts =async (req,res)=>{
    const product = new Product(req.body)
    try {
        await product.save()
        res.status(201).send(product)
    } catch (e) {
        res.status(400).send(e)
    }
}

module.exports ={
    getProducts, 
    addProducts
}