const express = require('express')
const router = express.Router()
const obj = require('./db.json')
const mongoose = require('mongoose')
const User = require('../models/user')
const dbUrl = obj.uri
console.log(dbUrl)

mongoose.connect(dbUrl, {
  useNewUrlParser: true
}, err => {
  if (err) {
    console.error('Error!' + err)
  } else {
    console.log('Connected to MongoDb')
  }
})


router.get('/', (req, res) => {
  res.send('from API Routes')
})

router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((err, registeredUser) => {
    if (err) {
      console.log(error)
    } else {
      res.status(200).send(registeredUser)
    }
  })

})

router.post('/login', (req, res) => {
  let userData = req.body
  User.findOne({email: userData.email}, (error, user) => {
    if (error) {
      console.log(error)
    } else {
      if (!user) {
        res.status(401).send('Invalid Email')
      } else
      if (user.password !== userData.password) {
        res.status(401).send('Invalid Password')
      } else {
        res.status(200).send(user)
      }
    }
  })
})

module.exports = router
