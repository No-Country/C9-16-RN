const uuid = require('uuid')
const Instructors = require('../models/instructors.models')

const createInstructor = async (userId) => {
    const newInstructor = await Instructors.create({
        id: uuid.v4(),
        userId: userId,
    })
    return newInstructor
}

const updateInstructor = async (userId, data) => {
    const response = await Instructors.update(data, {
        where: {
            userId: userId,
        }
    })
    return response
}

const deleteInstructor = async (userId) => {
    const response = await Instructors.destroy({
        where: {
            userId: userId,
        }
    })
    return response
}

module.exports = {
    createInstructor,
    updateInstructor,
    deleteInstructor,
}