const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Roles = db.define('roles', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
})

module.exports = Roles