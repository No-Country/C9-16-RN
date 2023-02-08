const router = require('express').Router()
const authServices = require('./auth.services')
const { postUser } = require('../users/users.services')

router.post('/register', postUser)
router.post('/login', authServices.login)

module.exports = router