import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

// Initialize config file
dotenv.config()

// Establish connection with MongoDB database.
connectDB()

const app = express()

// Body parser to accept JSON data
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running')
})

// Product routes
app.use('/api/products', productRoutes)
// User routes
app.use('/api/users', userRoutes)
// Order routes
app.use('/api/orders', orderRoutes)

// Error handling middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green
            .bold
    )
})
