const rolesControllers = require('./roles.controllers')

const getAllRoles = (req, res) => {
    rolesControllers.getAllRoles()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ message: err.message }))
}

const postRole = (req, res) => {
    const { name } = req.body

    if (name) {
        rolesControllers.createRole({ name })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(400).json({ message: err.message }))
    } else {
        res.status(400).json({
            message: 'Fields must be completed',
            fields: {
                name: 'string'
            }
        })
    }
}

const patchRole = (req, res) => {
    const id = req.params.id
    const { name } = req.body
    rolesControllers.updateRole(id, { name })
        .then(data => {
            if (data[0]) {
                res.status(200).json({ message: `Role with ${id}, edited succesfull` })
            } else {
                res.status(400).json({ message: `Invalid ID: ${id}` })
            }
        })
        .catch(err => res.status(401).json({ message: err.message }))
}

const deleteRole = (req, res) => {
    const id = req.params.id
    rolesControllers.deleteRole(id)
        .then(data => {
            if (data) {
                res.status(201).json()
            } else {
                res.status(400).json({ message: `Invalid Id: ${id}` })
            }
        })
        .catch(err => res.status(400).json({ message: err.message }))
}

module.exports = {
    getAllRoles,
    postRole,
    patchRole,
    deleteRole
}