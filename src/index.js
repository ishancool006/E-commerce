const express = require("express")
require('./db/mongoose.js')

const productRouter = require('./router/product')
const userRouter = require('./router/users')
const cartRouter = require('./router/cart')
const orderRouter = require('./router/order')
const app = express();
const port = process.env.PORT || 3000

app.use(express.json())
app.use(productRouter);
app.use(userRouter)
app.use(cartRouter)
app.use(orderRouter)
app.listen(port, () => {
	console.log('Server is up on port '+port);
}) 