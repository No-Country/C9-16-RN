const Users = require('./users.models')
const Roles = require('./roles.models')

const initModels = () => {
    Roles.hasMany(Users)
    Users.belongsTo(Roles)
}

module.exports = initModels