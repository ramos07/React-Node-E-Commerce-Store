import bcrypt from 'bcryptjs'

/**
 * Data to be used for seeder script
 */
const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10), // Generate hash for password
        isAdmin: true,
    },
    {
        name: 'John Wayne',
        email: 'jwayne@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'James Harden',
        email: 'jharden@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users
