const uuid = require('uuid')
const Users = require('../models/users.models')
const { hashPassword } = require('../utils/crypto')

const getAllUsers = async () => {
    const response = await Users.findAll({
        where: {
            status: 'active'
        }
    })
    return response
}

const getUserById = async (id) => {
    const response = await Users.findOne({
        where: {
            id: id,
            status: 'active'
        }
    })
    return response
}

const createUser = async (data) => {
    const newUser = await Users.create({
        id: uuid.v4(),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hashPassword(data.password),
        phone: data.phone,
        profileImage: data.URL,
        roleId: data.roleId,
    })
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