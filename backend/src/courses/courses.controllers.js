const Courses = require('../models/courses.models')
const uuid = require('uuid')

const getAllCourses = async () => {
    const response = await Courses.findAll({
        where: {
            status: 'active'
        }
    })
    return response
}

const getCourseById = async (id) => {
    const response = await Courses.findOne({
        where: {
            id: id,
            status: 'active',
        }
    })
    return response
}

const getCourseByName = async (name) => {
    const response = await Courses.findOne({
        where: {
            name: name,
            status: 'active',
        }
    })
    return response
}

const createCourse = async (data) => {
    const newCourse = await Courses.create({
        id: uuid.v4(),
        name: data.name,
        description: data.description,
        price: data.price,
        status: data.status,
        disciplineId: data.disciplineId
    })
    return newCourse
}

const updateCourse = async (id, data) => {
    const response = await Courses.update(data, {
        where: {
            id: id,
        }
    })
    return response
}

const deleteCourse = async (id) => {
    const response = await Courses.destroy({
        where: {
            id: id,
        }
    })
    return response
}

module.exports = {
    getAllCourses,
    getCourseById,
    getCourseByName,
    createCourse,
    updateCourse,
    deleteCourse,
}