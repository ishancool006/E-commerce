const mongoose = require("mongoose");
const validator = require('validator');

const orderSchema = new mongoose.Schema({
	UserId:{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Users'
	},
	date: {
		type: Date,
		required: true,
		default: new Date()  
	},
	products: [
		{
			_id: false,
			productid:String,
			img: String,
			name: String,
			quantity: Number,
			price: Number,
		}
	],
	total_bill: {
		type: Number,
		required: true,
		validate(val) {
			if(val <= 0) {
				throw new Error('Total bill cannot be negative');
			}
		}	
	},
	address: {
		street: String,
		locality: String,
		city: String,
		pincode: String
	}
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;