const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/Users')
var Events = require('./routes/Events')

app.use('/users', Users)
app.use('/events', Events)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
