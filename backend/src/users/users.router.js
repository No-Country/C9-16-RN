const router = require('express').Router()
const passport = require('passport')
const userServices = require('./users.services')
const instructorServices = require('../instructors/instructors.services')
const { teacherValidate } = require('../middlewares/role.middleware')
const uploadFile = require('../middlewares/upload.middleware')
require('../middlewares/auth.middleware')(passport)

router.route('/')
    .get(userServices.getAllUsers)

router.route('/me')
    .get(passport.authenticate('jwt', { session: false }), userServices.getMyUser)
    .patch(passport.authenticate('jwt', { session: false }), uploadFile.upload, userServices.patchMyUser)
    .delete(passport.authenticate('jwt', { session: false }), userServices.deleteMyUser)

router.route('/me/instructor')
    .patch(passport.authenticate('jwt', { session: false }), instructorServices.patchInstructor)

/* router.route('/:id')
    .get(userServices.getUserById) */

module.exports = router