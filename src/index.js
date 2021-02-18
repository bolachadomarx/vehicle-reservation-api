const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

dotenv.config()

app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))



require('./controllers/auth-controller')(app)
require('./controllers/vehicle-controller')(app)

app.use('/', (req, res) => {
  res.json({ message: 'API running' })
})

module.exports = app