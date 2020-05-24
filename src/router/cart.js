const express = require('express')
const auth = require('../middleware/auth')
const Product = require('../models/product')
const User = require('../models/users')
const mongoose = require("mongoose");
const router = new express.Router()



router.post('/api/addToCart', auth, async (req, res) => {
    try {
        const product = await Product.findById(req.body.productId)
        if(product.quantity>=req.body.quantity){   
            req.user.cart.push(req.body);
            console.log(req.user);
		    await req.user.save();
        }
        else{
            res.status(417).send("Less quantity in stocks")
        }
        console.log(req.user.cart);
        
        res.send(req.user.cart)
    } catch (e) {
        res.status(500).send()
    }
   
})
router.post('/api/removeFromCart',auth,async (req,res)=>{
    try {
		const cart = req.user.cart.filter((product) => {
			return product.productId != req.body.productId;
		})
		req.user.cart = cart;
		await req.user.save();
		res.status(200).send("Removed");
	} catch(e) {
		res.status(500).send({message: e.message});
	}	
})



module.exports= router