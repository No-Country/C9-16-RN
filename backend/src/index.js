const express = require('express')
const cors = require('cors')
const { port } = require('./config')
const db = require('./utils/database')
const initModels = require('./models/initModels')


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
    res.status(200).json({
        message: 'OK',
        endpoint: `localhost:${port}/api/v1/`
    })
})

app.listen(port, () => console.log('Succes 😼😼😼 ' + port))