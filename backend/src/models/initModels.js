const Users = require('./users.models')
const Instructors = require('./instructors.models')
const Disciplines = require('./disciplines.models')
const Courses = require('./courses.models')
const Classes = require('./classes.models')

const initModels = () => {
    Users.hasOne(Instructors)
    Instructors.belongsTo(Users)

    Disciplines.hasMany(Courses)
    Courses.belongsTo(Disciplines)

    Courses.hasMany(Classes)
    Classes.belongsTo(Courses)
}

module.exports = initModels