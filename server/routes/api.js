const express = require('express')
const router = express.Router()
const obj = require('./db.json')
const mongoose = require('mongoose')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
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
      let payload = { subject: registeredUser._id }
      let token = jwt.sign(payload, 'secretkey')
        res.status(200).send({token})
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
        let payload = {subject: user._id }
        let token = jwt.sign(payload, 'secretkey')
        res.status(200).send({token})
      }
    }
  })
})

module.exports = router
