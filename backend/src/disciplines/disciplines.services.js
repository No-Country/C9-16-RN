const disciplinesControllers = require('./disciplines.controllers')
const handleResponse = require('../utils/handleResponse')

const getAllDisciplines = (req, res) => {
    disciplinesControllers.getAllDisciplines()
        .then(data => handleResponse.success({
            res,
            status: 200,
            message: 'All disciplines successfully retrieved',
            data
        }))
        .catch(err => handleResponse.error({
            res,
            status: 400,
            message: err.message
        }))
}

const postDiscipline = (req, res) => {
    const { name } = req.body
    if (name) {
        disciplinesControllers.createDiscipline({ name })
            .then(data => handleResponse.success({
                res,
                status: 200,
                message: 'discipline created successfully',
                data
            }))
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
                'name': 'string'
            }
        })
    }
}

const patchDiscipline = (req, res) => {
    const id = req.params.id
    const { name } = req.body

    disciplinesControllers.updateDiscipline(id, { name })
        .then(data => {
            if (data[0]) {
                handleResponse.success({
                    res,
                    status: 200,
                    message: `Discipline with id: ${id}, edited succesfull`,
                    data
                })
            } else {
                handleResponse.error({
                    res,
                    status: 400,
                    message: 'Invalid ID'
                })
            }
        })
        .catch(err => handleResponse.error({
            res,
            status: 404,
            message: err.message
        }))
}

const deleteDiscipline = (req, res) => {
    const id = req.params.id

    disciplinesControllers.deleteDiscipline(id)
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
                    status: 400,
                    message: 'Invalid ID'
                })
            }
        })
        .catch(err => handleResponse.error({
            res,
            status: 400,
            message: err.message
        }))
}

module.exports = {
    getAllDisciplines,
    postDiscipline,
    patchDiscipline,
    deleteDiscipline,
}