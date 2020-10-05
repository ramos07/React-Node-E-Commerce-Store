import express from 'express'
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler' // Middleware to handle exceptions inside async express routes
import mongoose from 'mongoose'

const router = express.Router()

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get(
    '/',
    asyncHandler(async (req, res) => {
        // Get all the products from MongoDB
        const products = await Product.find({})
        res.json(products)
    })
)

// @desc Fetch single product
// @route GET /api/product/:id
// @access Public
router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const product = await Product.findById(req.params.id)
        if (product) {
            res.json(product)
        } else {
            res.status(404)
            throw new Error('Product Not Found')
        }
    })
)

export default router
