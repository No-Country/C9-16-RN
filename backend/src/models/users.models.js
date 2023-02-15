const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Roles = require('./roles.models')

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
    profileImage: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'profile_image',
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        field: 'role_id',
        references: {
            key: 'id',
            model: Roles
        }
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
})

module.exports = Users