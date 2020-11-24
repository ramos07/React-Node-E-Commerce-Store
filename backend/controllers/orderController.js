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

// @desc Get an order by the id
// @route GET /api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
        'user',
        'name email'
    )

    // if order exists else throw error
    if (order) {
        res.json(order)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

// @desc Update order to paid
// @route PUT /api/orders/:id/pay
// @access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
    // Get order from DB
    const order = await Order.findById(req.params.id)

    // if order exists update the fields else throw error
    if (order) {
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.payer.email_address,
        }

        // Save the updated order in the DB
        const updatedOrder = await order.save()

        // Send back updated order
        res.json(updatedOrder)
    } else {
        res.status(404)
        throw new Error('Could not update order')
    }
})

// @desc Get logged in user orders
// @route PUT /api/orders/myorders
// @access Private
const getUserOrders = asyncHandler(async (req, res) => {
    // Get orders from DB
    const orders = await Order.find({ user: req.user._id })

    res.json(orders)
})

export { addOrderItems, getOrderById, updateOrderToPaid, getUserOrders }
