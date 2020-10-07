import express from 'express'
import { authUser } from '../controllers/userController.js'

const router = express.Router()

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.post('/login', authUser)

export default router
