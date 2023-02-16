const router = require('express').Router()
const classServices = require('./classes.services')

router.route('/')
    .get(classServices.getAllClasses)
    .post(classServices.postClass)

router.route('/:id')
    .get(classServices.getClassById)
    .patch(classServices.patchClass)
    .put(classServices.putClass)
    .delete(classServices.deleteClass)

module.exports = router