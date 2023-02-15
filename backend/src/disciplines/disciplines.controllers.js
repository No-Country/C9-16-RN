const Disciplines = require('../models/disciplines.models')
const uuid = require('uuid')

const getAllDisciplines = async () => {
    const response = await Disciplines.findAll()
    return response
}

const createDiscipline = async (data) => {
    const newDiscipline = await Disciplines.create({
        id: uuid.v4(),
        name: data.name,
    })
    return newDiscipline
}

const updateDiscipline = async (id, data) => {
    const response = await Disciplines.update(data, {
        where: {
            id: id,
        }
    })
    return response
}

const deleteDiscipline = async (id) => {
    const response = await Disciplines.destroy({
        where: {
            id: id,
        }
    })
    return response
}

module.exports = {
    getAllDisciplines,
    createDiscipline,
    updateDiscipline,
    deleteDiscipline,
}