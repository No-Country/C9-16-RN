require('dotenv').config()

const config = {
    port: process.env.PORT || 9000,
    nodeEnv: process.env.NODE_ENV || 'development',
    jwtSecret: process.env.JWT_SECRET,
    db: {
        port: process.env.DB_PORT || 000,
        username: process.env.DB_USER || '',
        password: process.env.DB_PASS || '',
        host: process.env.DB_HOST || 'localhost',
        name: process.env.DB_NAME,
    }
}

module.exports = config