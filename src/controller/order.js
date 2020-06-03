const Order=require('../models/order')
const Product = require('../models/product')


placeOrder =async  (req,res)=>{
    try{
        const product = await Product.findById(req.body.productId)
        if(!product){
            throw new Error
        }
        //Check the availability in Stock
        if(product.quantity>=req.body.quantity){

        var orderObj = {
            "UserId":req.user._id,
            "products":[{
            "productid": product._id.toString(),
			"img":  product.img,
			"name" : product.name,
            "quantity" : req.body.quantity,
            "price": product.price,
            }
            ],
            "total_bill" : product.price * req.body.quantity,
            "address":req.user.addresses[req.body.address_no]
        }
        
        product.quantity = product.quantity-req.body.quantity
        await product.save()
        const order = new Order(orderObj)
        await order.save().then((od)=>{
            req.user.orders.push(od._id)
        })

        await req.user.save()

        
        res.status(200).send("Order Placed!!!\n"+order)
    }else{
        throw new Error("Less Stock!!!, Order Less!!!.Sorry For inconvineince. ")
    }

    }catch(e){
        res.send("Invalid Request "+e)
    }
}

module.exports=placeOrder