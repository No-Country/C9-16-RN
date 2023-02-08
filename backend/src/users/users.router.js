const router = require('express').Router()
const passport = require('passport')
const userServices = require('./users.services')
const { teacherValidate } = require('../middlewares/role.middleware')
require('../middlewares/auth.middleware')(passport)

router.route('/')
    .get(userServices.getAllUsers)
    .post(userServices.postUser)

router.route('/me')
    .get(passport.authenticate('jwt', { session: false }), userServices.getMyUser)
    .post(passport.authenticate('jwt', { session: false }), userServices.patchMyUser)
    .delete(passport.authenticate('jwt', { session: false }), userServices.deleteMyUser)

router.route('/:id')
    .get(userServices.getUserById)

module.exports = router