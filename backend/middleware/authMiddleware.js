import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler' // Middleware to handle exceptions inside async express routes

// Middleware to protect routes
const protect = asyncHandler(async (req, res, next) => {
    let token

    // Make sure Authorization headers exist that it contains the Bearer keyword
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        // Try to decode the token
        try {
            // Split the Bearer from the actual token and get the actual token
            token = req.headers.authorization.split(' ')[1]

            // Decoded token with Header, Payload
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Fetch the user with the decoded id
            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not Authorized: Invalid Token')
        }
    }

    // Check if there is no token
    if (!token) {
        res.status(401)
        throw new Error('Not Authorized: No Token')
    }
})

export { protect }
