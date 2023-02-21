const usersControllers = require('./users.controllers')
const { uploadFile } = require('../utils/firebase')

const handleResponse = require('../utils/handleResponse')

const getAllUsers = (req, res) => {
    usersControllers.getAllUsers()
        .then(data => handleResponse.success({
            res,
            status: 200,
            message: 'All users successfully retrieved',
            data
        }))
        .catch(err => handleResponse.error({
            res,
            status: 400,
            message: err.message
        }))
}

const getUserById = (req, res) => {
    const id = req.params.id

    usersControllers.getUserById(id)
        .then(data => {
            if (data) {
                handleResponse.success({
                    res,
                    status: 200,
                    message: `User with id: ${id} successfully retrieved`,
                    data
                })
            } else {
                handleResponse.error({
                    res,
                    status: 404,
                    message: 'Invalid Id'
                })
            }
        })
        .catch(err => handleResponse.error({
            res,
            status: 400,
            message: err.message
        }))
}

const postUser = async (req, res) => {
    const { body: { firstName, lastName, email, password, phone, roleId, imageUrl }, file } = req

    if (firstName && lastName && email && password && phone && roleId) {
        const URL = file ? await uploadFile(file, 'users', res) : imageUrl
            usersControllers.createUser({ firstName, lastName, email, password, phone, URL, roleId })
                .then(data => handleResponse.success({
                    res,
                    status: 200,
                    message: 'User created successfully',
                    data
                }))
                .catch(err => handleResponse.error({
                    res,
                    status: 400,
                    message: err.message
                }))
    } else {
        handleResponse.error({
            res,
            status: 400,
            message: 'lack of completing fields',
            fields: {
                'firstName': 'string',
                'lastName': 'string',
                'email': 'example@example.com',
                'password': 'string',
                'phone': '+593999999999',
                'profileImage': 'url',
                'roleId': 'number'
            }
        })
    }
}

const patchUser = (req, res) => {
    const id = req.params.id
    const { firstName, lastName, email, password, phone, profileImage, roleId } = req.body

    usersControllers.updateUser(id, { firstName, lastName, email, password, phone, profileImage, roleId })
        .then(data => {
            if (data[0]) {
                handleResponse.success({
                    res,
                    status: 200,
                    message: `User with id: ${id}, edited succesfull`,
                    data
                })
            } else {
                handleResponse.error({
                    res,
                    status: 404,
                    message: 'Invalid Id'
                })
            }
        })
        .catch(err => handleResponse.error({
            res,
            status: 404,
            message: err.message
        }))
}

const deleteUser = (req, res) => {
    const id = req.params.id

    usersControllers.deleteUser(id)
        .then(data => {
            if (data) {
                handleResponse.success({
                    res,
                    status: 404,
                    data
                })
            } else {
                handleResponse.error({
                    res,
                    status: 404,
                    message: 'Invalid Id'
                })
            }
        })
        .catch(err => handleResponse.error({
            res,
            status: 400,
            message: err.message
        }))
}

const getMyUser = (req, res) => {
    const id = req.user.id

    usersControllers.getUserById(id)
        .then(data => handleResponse.success({
            res,
            status: 200,
            message: 'Your user successfully retrieved',
            data
        }))
        .catch(err => handleResponse.error({
            res,
            status: 400,
            message: err.message
        }))
}

const patchMyUser = (req, res) => {
    const id = req.user.id
    const { firstName, lastName, email, password, phone, profileImage, roleId } = req.body
    usersControllers.updateUser(id, { firstName, lastName, email, password, phone, profileImage, roleId })
        .then(() => handleResponse.success({
            res,
            status: 200,
            message: `User with id: ${id}, edited succesfull`,
            data
        }))
        .catch(err => handleResponse.error({
            res,
            status: 404,
            message: err.message
        }))
}

const deleteMyUser = (req, res) => {
    const id = req.user.id

    usersControllers.updateUser(id, { status: 'inactive' })
        .then(() =>
            handleResponse.success({
                res,
                status: 200,
                message: 'your account has been deactivated',
                data
            }))
        .catch(err => handleResponse.error({
            res,
            status: 400,
            message: err.message
        }))
}

module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser,
    getMyUser,
    patchMyUser,
    deleteMyUser,
}