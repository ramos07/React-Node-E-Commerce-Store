import Order from '../models/orderModel.js'
import asyncHandler from 'express-async-handler' // Middleware to handle exceptions inside async express routes

// @desc Create a new order
// @route GET /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body

    // Make sure order is not empty
    if (orderItems && orderItems.length === 0) {
        res.status(400) // Bad request
        throw new Error('No order items')
        return
    } else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        })

        const createdOrder = await order.save()

        res.status(201).json(createdOrder)
    }
})

export { addOrderItems }
