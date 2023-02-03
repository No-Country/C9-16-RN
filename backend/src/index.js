const express = require('express')
const { port } = require('./config')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'OK',
        endpoint: `localhost:${port}/api/v1/`
    })
})

app.listen(port, () => console.log('Succes 😼😼😼 ' + port))