import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler' // Middleware to handle exceptions inside async express routes

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    // Find a user by email
    const user = await User.findOne({ email })

    // If the user exists and the password matches the one store return the details
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: null,
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

export { authUser }
