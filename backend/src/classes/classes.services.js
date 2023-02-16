const classesControllers = require('./classes.controllers')
const handleResponse = require('../utils/handleResponse')

const getAllClasses = (req, res) => {
    classesControllers.getAllClasses()
        .then(data => handleResponse.success({
            res,
            status: 200,
            message: 'All classes successfully retrieved',
            data
        }))
        .catch(err => handleResponse.error({
            res,
            status: 400,
            message: err.message
        }))
}

const getClassById = (req, res) => {
    const id = req.params.id
    classesControllers.getClassById(id)
        .then(data => {
            if (data) {
                handleResponse.success({
                    res,
                    status: 200,
                    message: `Class with id: ${id} successfully retrieved`,
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


const postClass = (req, res) => {
    const { name, description, courseId } = req.body
    if (name && description && courseId) {
        classesControllers.createClass({ name, description, courseId })
            .then(data => handleResponse.success({
                res,
                status: 200,
                message: 'Class created successfully ',
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
                'name': 'string',
                'description': 'string',
                'courseId': 'uuid',
            }
        })
    }
}

const patchClass = (req, res) => {
    const id = req.params.id
    const { name, description, courseId } = req.body

    classesControllers.updateClass(id, { name, description, courseId })
        .then(data => {
            if (data[0]) {
                handleResponse.success({
                    res,
                    status: 200,
                    message: `Class with id: ${id}, edited succesfull`,
                    data
                })
            } else {
                handleResponse.error({
                    res,
                    status: 400,
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

const putClass = (req, res) => {
    const id = req.params.id
    const { name, description, courseId } = req.body

    if (name && description && courseId) {
        classesControllers.updateClass(id, { name, description, courseId })
            .then(data => {
                if (data[0]) {
                    handleResponse.success({
                        res,
                        status: 200,
                        message: `Class with id: ${id}, edited succesfull`,
                        data
                    })
                } else {
                    handleResponse.error({
                        res,
                        status: 400,
                        message: 'Invalid Id'
                    })
                }
            })
            .catch(err => handleResponse.error({
                res,
                status: 404,
                message: err.message
            }))
    } else {
        handleResponse.error({
            res,
            status: 400,
            message: 'lack of completing fields',
            fields: {
                'name': 'string',
                'description': 'string',
                'courseId': 'uuid',
            }
        })
    }
}

const deleteClass = (req, res) => {
    const id = req.params.id
    classesControllers.deleteClass(id)
        .then(data => {
            if (data) {
                handleResponse.success({
                    res,
                    status: 404,
                })
            } else {
                handleResponse.error({
                    res,
                    status: 400,
                    message: 'Invalid id'
                })
            }
        })
        .catch(err => handleResponse.error({
            res,
            status: 404,
            message: err.message
        }))
}

module.exports = {
    getAllClasses,
    getClassById,
    postClass,
    patchClass,
    putClass,
    deleteClass,
}