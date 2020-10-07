import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

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

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// Before saving the password into the DB encrypt and hash the password
userSchema.pre('save', async function (next) {
    // If the password has not been modified then just move on else just hash the password
    if (!this.isModified('password')) {
        next()
    }

    // Generate a salt with 10 rounds
    const salt = await bcrypt.genSalt(10)
    // Encrypt and hash password
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User
