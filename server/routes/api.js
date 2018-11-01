const express = require('express')
const router = express.Router()
const obj = require('./db.json')

const mongoose = require('mongoose')
const dbUrl = obj.uri
console.log(dbUrl)

mongoose.connect(dbUrl, {useNewUrlParser: true}, err => {
  if (err) {
    console.error('Error!', + err)
  } else {
    console.log('db is connected')
  }
})

router.get('/', (req, res) => {
  res.send('from API Routes')
})

module.exports = router

