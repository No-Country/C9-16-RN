const uuid = require('uuid')
const Users = require('../models/users.models')
const Instructors = require('../models/instructors.models')
const { hashPassword } = require('../utils/crypto')
const { createInstructor } = require('../instructors/instructors.controllers')

const getAllUsers = async () => {
    const response = await Users.findAll({
        where: {
            status: 'active'
        }, 
        include:{
            model: Instructors,
            attributes:{
                exclude: ['userId', 'createdAt', 'updatedAt']
            }
        }
    })
    return response
}

const getUserById = async (id) => {
    const response = await Users.findOne({
        where: {
            id: id,
            status: 'active'
        }, 
        include:{
            model: Instructors,
            attributes:{
                exclude: ['userId', 'createdAt', 'updatedAt']
            }
        }
    })
    return response
}

const createUser = async (data) => {
    const userId = uuid.v4()
    const newUser = await Users.create({
        id: userId,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hashPassword(data.password),
        phone: data.phone,
        country: data.country,
        profileImage: data.URL,
        role: data.role,
    })
    if (data.role === 'instructor') {
        await createInstructor(userId)
    }

    return newUser
}

const updateUser = async (id, data) => {
    const response = await Users.update(data, {
        where: {
            id: id,
        }
    })
    return response
}

const deleteUser = async (id) => {
    const response = await Users.destroy({
        where: {
            id: id,
        }
    })
    return response
}

const getUserByEmail = async (email) => {
    const response = await Users.findOne({
        where: {
            email: email,
            status: 'active'
        }
    })
    return response
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserByEmail,
}