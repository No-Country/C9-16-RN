const Roles = require('../models/roles.models')

const getAllRoles = async () => {
    const response = await Roles.findAll({})
    return response
}

const createRole = async (data) => {
    const newRole = await Roles.create({
        name: data.name,
    })
    return newRole
}

const updateRole = async (id, data) => {
    const response = await Roles.update(data, {
        where: {
            id: id,
        }
    })
    return response
}

const deleteRole = async (id) => {
    const response = await Roles.destroy({
        where: {
            id: id
        }
    })
    return response
}

module.exports = {
    getAllRoles,
    createRole,
    updateRole,
    deleteRole
}