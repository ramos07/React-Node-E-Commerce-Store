import express from 'express'
import {
    authUser,
    getUserProfile,
    registerUser,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

// @desc Register a new user
// @route POST /api/users
// @access Public
router.route('/').post(registerUser)

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
router.post('/login', authUser)

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
router.route('/profile').get(protect, getUserProfile)

export default router
