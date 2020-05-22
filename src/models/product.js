const mongoose = require("mongoose");
const validator = require('validator');

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	img: String,
	category: {
		type: String,
		required: true,
		trim: true
    },
    price: {
		type: Number,
		required: true,
		validate(val) {
			if(val <= 0) {
				throw new Error('Price cannot be negative');
			}
		}
	},
	description: String,
	quantity: {
		type: Number,
		required: true,
		validate(val) {
			if(val <= 0) {
				throw new Error('Quantity cannot be negative');
			}
		}
	}
}) 

const Product = mongoose.model('Product', productSchema);

module.exports = Product;