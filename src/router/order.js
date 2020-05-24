const express=require("express")
const Order=require('../models/order')
const Product = require('../models/product')
const User = require('../models/users')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/api/placeOrder',auth,async (req,res)=>{
    try{
        const product = await Product.findById(req.body.productId)
        if(!product){
            throw new Error
        }
        
        var orderObj = {
            "UserId":req.user._id,
            "products":[{
            "productid": product._id.toString(),
			"img":  product.img,
			"name" : product.name,
            "quantity" : req.quantity,
            "price": product.price,
            }
            ],
            "total_bill" : product.price * req.body.quantity,
            "address":req.user.addresses[req.body.address_no]
        }
        
        
        const order = new Order(orderObj)
        await order.save().then((od)=>{
            req.user.orders.push(od._id)
        })

        await req.user.save()

        
        res.status(200).send("Order Placed!!!\n"+order)

    }catch(e){
        res.send("Invalid Request"+e)
    }
})



module.exports = router