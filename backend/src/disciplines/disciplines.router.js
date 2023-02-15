const router = require('express').Router()
const disciplineServices = require('./disciplines.services')

router.route('/')
    .get(disciplineServices.getAllDisciplines)
    .post(disciplineServices.postDiscipline)

router.route('/:id')
    .patch(disciplineServices.patchDiscipline)
    .delete(disciplineServices.deleteDiscipline)

module.exports = router