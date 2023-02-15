const teacherValidate = (req, res, next) => {
    const role = req.user.role

    if (role === 'teacher') {
        return next()
    }
    return res.status(401).json({ message: 'Access Denny' })
}

module.exports = { teacherValidate }