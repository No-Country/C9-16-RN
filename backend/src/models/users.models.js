const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Users = db.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'fisrt_name',
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'last_name',
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profileImage: {
        type: DataTypes.STRING,
        field: 'profile_image',
    },
    role: {
        type: DataTypes.ENUM('student', 'instructor'),
        allowNull: false,
        defaultValue: 'student',
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active'
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'is_verified',
        defaultValue: false
    }
},{
    inheritance: true
})

module.exports = Users