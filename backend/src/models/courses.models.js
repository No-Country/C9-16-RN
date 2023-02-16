const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Disciplines = require('./disciplines.models')

const Courses = db.define('courses', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active',
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    disciplineId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'discipline_id',
        references: {
            key: 'id',
            model: Disciplines
        }
    }
})

module.exports = Courses