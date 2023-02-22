const instructorControllers = require('./instructors.controllers')
const handleResponse = require('../utils/handleResponse')

const patchInstructor = (req, res) => {
    const userId = req.user.id
    console.log(userId)
    const { certifications, workExperience } = req.body
    instructorControllers.updateInstructor(userId, { certifications, workExperience })
        .then(() => handleResponse.success({
            res,
            status: 200,
            message: `Instructor with id: ${userId}, edited succesfull`,
        }))
        .catch(err => handleResponse.error({
            res,
            status: 404,
            message: err.message,
        }))
}

module.exports = {
    patchInstructor,
}