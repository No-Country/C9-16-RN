const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Courses = require('./courses.models')

const Classes = db.define('classes', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    courseId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'course_id',
        references: {
            key: 'id',
            model: Courses
        }
    },
    imageURL: {
        type: DataTypes.STRING,
    }
})

module.exports = Classes