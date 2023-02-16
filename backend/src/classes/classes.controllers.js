const Classes = require('../models/classes.models')
const uuid = require('uuid')

const getAllClasses = async () => {
    const response = await Classes.findAll()
    return response
}

const getClassById = async (id) => {
    const response = await Classes.findOne({
        where: {
            id: id,
        }
    })
    return response
}
const createClass = async (data) => {
    const newCourse = await Classes.create({
        id: uuid.v4(),
        name: data.name,
        description: data.description,
        courseId: data.courseId
    })
    return newCourse
}

const updateClass = async (id, data) => {
    const response = await Classes.update(data, {
        where: {
            id: id,
        }
    })
    return response
}

const deleteClass = async (id) => {
    const response = await Classes.destroy({
        where: {
            id: id,
        }
    })
    return response
}

module.exports = {
    getAllClasses,
    getClassById,
    createClass,
    updateClass,
    deleteClass,
}