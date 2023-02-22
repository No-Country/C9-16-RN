const coursesControllers = require('./courses.controllers')
const handleResponse = require('../utils/handleResponse')

const getAllCourses = (req, res) => {
    coursesControllers.getAllCourses()
        .then(data => handleResponse.success({
            res,
            status: 200,
            message: 'All courses successfully retrieved',
            data
        }))
        .catch(err => handleResponse.error({
            res,
            status: 400,
            message: err.message
        }))
}

const getCourseById = (req, res) => {
    const id = req.params.id
    coursesControllers.getCourseById(id)
        .then(data => {
            if (data) {
                handleResponse.success({
                    res,
                    status: 200,
                    message: `course with id: ${id} successfully retrieved`,
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

const getCourseByName = (req, res) => {
    const { name } = req.body
    coursesControllers.getCourseByName(name)
        .then(data => {
            if (data) {
                handleResponse.success({
                    res,
                    status: 200,
                    message: `course with name: ${name} successfully retrieved`,
                    data
                })
            } else {
                handleResponse.error({
                    res,
                    status: 404,
                    message: `the course with name: ${name} does not exist`
                })
            }
        })
        .catch(err => handleResponse.error({
            res,
            status: 404,
            message: err.message
        }))
}

const postCourse = (req, res) => {
    const idInstructor = req.user.id
    const { name, description, status, price, level, disciplineId } = req.body
    if (name && description && status && price && level && disciplineId) {
        coursesControllers.createCourse({ name, description, status, price, level, disciplineId })
            .then(data => handleResponse.success({
                res,
                status: 200,
                message: 'Course created successfully ',
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
                'status': 'string',
                'price': 'double',
                'disciplineId': 'uuid',
            }
        })
    }
}

const patchCourse = (req, res) => {
    const id = req.params.id
    const { name, description, status, price, disciplineId } = req.body

    coursesControllers.updateCourse(id, { name, description, status, price, disciplineId })
        .then(data => {
            if (data[0]) {
                handleResponse.success({
                    res,
                    status: 200,
                    message: `Course with id: ${id}, edited succesfull`,
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

const putCourse = (req, res) => {
    const id = req.params.id
    const { name, description, status, price, disciplineId } = req.body

    if (name && description && status && price && disciplineId) {
        coursesControllers.updateCourse(id, { name, description, status, price, disciplineId })
            .then(data => {
                if (data[0]) {
                    handleResponse.success({
                        res,
                        status: 200,
                        message: `Course with id: ${id}, edited succesfull`,
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
                'status': 'string',
                'price': 'double',
                'disciplineId': 'uuid',
            }
        })
    }
}

const deleteCourse = (req, res) => {
    const id = req.params.id
    coursesControllers.deleteCourse(id)
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
    getAllCourses,
    getCourseById,
    getCourseByName,
    postCourse,
    patchCourse,
    putCourse,
    deleteCourse,
}