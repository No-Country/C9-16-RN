const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Disciplines = db.define('disciplines', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
}, {
    timestamps: false
})

module.exports = Disciplines