const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Users = require('./users.models')


const Instructors = db.define('instructors', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    certifications: {
        type: DataTypes.TEXT,
    },
    workExperience: {
        type: DataTypes.TEXT,
        field: 'work_experience'
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            key: 'id',
            model: Users,
        }
    }
})

module.exports = Instructors