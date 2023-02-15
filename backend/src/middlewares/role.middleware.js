const teacherValidate = (req, res, next) => {
    const role = req.user.role

    if (role.name === 'teacher') {
        return next()
    }
    return res.status(401).json({ message: 'Access Denny' })
}

const adminValidate = (req, res, next) => {
    const role = req.user.role

    if (role.name === 3) {
        return next()
    }
    return res.status(401).json({ message: 'Access Denny' })
}
module.exports = {
    teacherValidate,
    adminValidate
}