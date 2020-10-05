import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        // We use the unique attribute to avoid having duplicate emails in the database
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    }
)

const User = mongoose.model('User', userSchema)

export default User
