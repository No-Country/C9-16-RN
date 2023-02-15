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
            'users': 'http://localhost:9000/api/v1/MoveMind-Academy/users',
            'login': 'http://localhost:9000/api/v1/MoveMind-Academy/auth/login',
            'register': 'http://localhost:9000/api/v1/MoveMind-Academy/auth/register',
            'courses': 'http://localhost:9000/api/v1/MoveMind-Academy/courses',
            'disciplines': 'http://localhost:9000/api/v1/MoveMind-Academy/disciplines',
        }
    })
})

app.use('/api/v1/MoveMind-Academy/auth', authRouter)
app.use('/api/v1/MoveMind-Academy/users', usersRouter)
app.use('/api/v1/MoveMind-Academy/roles', rolesRouter)
app.use('/api/v1/MoveMind-Academy/disciplines', disciplinesRouter)


app.use('*', (req, res) => {
    responseHandlers.error({
        res,
        status: 404,
        message: 'URL not found, please try with http://localhost:9000/'
    })
})

app.listen(api.port, () => console.log('Succes 😼😼😼 ' + api.port))