const express = require('express')
const events = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Event = require('../models/Event')
events.use(cors())

process.env.SECRET_KEY = 'secret'

events.post('/register', (req, res) => {
  const today = new Date()
  const eventData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  }

  event.findOne({
    where: {
      email: req.body.email
    }
  })
    //TODO bcrypt
    .then(event => {
      if (!event) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          eventData.password = hash
          event.create(eventData)
            .then(event => {
              res.json({ status: event.email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'event already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

events.post('/login', (req, res) => {
  event.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(event => {
      if (event) {
        if (bcrypt.compareSync(req.body.password, event.password)) {
          let token = jwt.sign(event.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        }
      } else {
        res.status(400).json({ error: 'event does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})

events.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  event.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(event => {
      if (event) {
        res.json(event)
      } else {
        res.send('event does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = events
