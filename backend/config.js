require('dotenv').config()

const config = {
    api: {
        port: process.env.PORT || 9000,
        nodeEnv: process.env.NODE_ENV || 'development',
        host: process.env.HOST || 'http://localhost:9000',
        jwtSecret: process.env.JWT_SECRET,
    },
    db: {
        development: {
            dialect: 'postgres',
            host: process.env.DB_PORT,
            port: process.env.DB_PORT,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database:  process.env.DB_NAME,
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true
            },
        },
        production: {
            dialect: 'postgres',
            host: process.env.DB_PORT,
            port: process.env.DB_PORT,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database:  process.env.DB_NAME,
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true
            },
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        },
        testing: {
            dialect: 'postgres',
            host: process.env.DB_PORT,
            port: process.env.DB_PORT,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database:  process.env.DB_NAME,
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true
            }
        },
    }
}

module.exports = config