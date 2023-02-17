const express = require('express')
const cors = require('cors')
const { api } = require('../config')
const db = require('./utils/database')
const responseHandlers = require('./utils/handleResponse')
const initModels = require('./models/initModels')
const usersRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const rolesRouter = require('./roles/roles.router')
const disciplinesRouter = require('./disciplines/disciplines.router')
const coursesRouter = require('./courses/courses.router')
const classesRouter = require('./classes/classes.router')


const app = express()
app.use(express.json())

const corsConfig = {
    allowedHeaders: ['sessionId', 'Content-Type'],
    exposedHeaders: ['sessionId'],
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false
}

app.use(cors(corsConfig))

db.authenticate()
    .then(() => console.log('DB autentication successfully'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('DB synced'))
    .catch((err) => console.log(err))

initModels()

app.get('/', (req, res) => {
    responseHandlers.success({
        res,
        status: 200,
        message: 'OK',
        data: {
            'users': 'https://movemind-academy.onrender.com/api/v1/MoveMind-Academy/users',
            'login': 'https://movemind-academy.onrender.com/api/v1/MoveMind-Academy/auth/login',
            'register': 'https://movemind-academy.onrender.com/api/v1/MoveMind-Academy/auth/register',
            'courses': 'https://movemind-academy.onrender.com/api/v1/MoveMind-Academy/courses',
            'disciplines': 'https://movemind-academy.onrender.com/api/v1/MoveMind-Academy/disciplines',
            'courses': 'https://movemind-academy.onrender.com/api/v1/MoveMind-Academy/courses',
            'classes': 'https://movemind-academy.onrender.com/api/v1/MoveMind-Academy/clases',
        }
    })
})

app.use('/api/v1/MoveMind-Academy/auth', authRouter)
app.use('/api/v1/MoveMind-Academy/users', usersRouter)
app.use('/api/v1/MoveMind-Academy/roles', rolesRouter)
app.use('/api/v1/MoveMind-Academy/disciplines', disciplinesRouter)
app.use('/api/v1/MoveMind-Academy/courses', coursesRouter)
app.use('/api/v1/MoveMind-Academy/classes', classesRouter)

app.use('*', (req, res) => {
    responseHandlers.error({
        res,
        status: 404,
        message: 'URL not found, please try with https://movemind-academy.onrender.com'
    })
})

app.listen(api.port, () => console.log('Succes 😼😼😼 ' + api.port))