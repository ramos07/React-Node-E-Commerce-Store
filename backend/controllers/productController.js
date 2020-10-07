import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler' // Middleware to handle exceptions inside async express routes

const getProducts = asyncHandler(async (req, res) => {
    // Get all the products from MongoDB
    const products = await Product.find({})
    res.json(products)
})

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product Not Found')
    }
})

export { getProducts, getProductById }
