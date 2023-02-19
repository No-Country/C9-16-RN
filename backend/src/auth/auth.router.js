const router = require('express').Router()
const authServices = require('./auth.services')
const { postUser } = require('../users/users.services')
const uploadFile = require('../middlewares/upload.middleware')

router.post('/register', uploadFile.upload, postUser)
router.post('/login', authServices.login)

module.exports = router