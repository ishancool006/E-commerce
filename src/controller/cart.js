const auth = require('../middleware/auth')
const Product = require('../models/product')
//const User = require('../models/users')
//adding product in cart
addToCart = async (req,res) => {
        
        const product = await Product.findById(req.body.productId).exec(async function (err, product) {
            if(err){
                res.status(500).send("Product Not Found")
                
            }
            if(product){
                if(product.quantity>=req.body.quantity){   
                    req.user.cart.push(req.body);
                    await req.user.save();
                    res.send(req.user.cart)
                }
                else{
                    res.status(417).send("Less quantity in stocks")
                }
                
            }
        })    
}
//removing product in cart
removeFromCart = async (req,res) =>{
    try {
		const cart = req.user.cart.filter((product) => {
			return product.productId != req.body.productId;
		})
		req.user.cart = cart;
		await req.user.save();
		res.status(200).send("Removed"+req.user.cart);
	} catch(e) {
		res.status(500).send({message: e.message});
	}	
}

module.exports= {
    addToCart,
    removeFromCart
}