const router = require('express').Router()
const roleServices = require('./roles.services')
const { adminValidate } = require('../middlewares/role.middleware')
const passport = require('passport')
require('../middlewares/auth.middleware')(passport)

router.route('/')
    .get(passport.authenticate('jwt', { session: false }), adminValidate, roleServices.getAllRoles)
    .post(passport.authenticate('jwt', { session: false }), adminValidate, roleServices.postRole)

router.route('/:id')
    .patch(passport.authenticate('jwt', { session: false }), adminValidate, roleServices.patchRole)
    .delete(passport.authenticate('jwt', { session: false }), adminValidate, roleServices.deleteRole)

module.exports = router