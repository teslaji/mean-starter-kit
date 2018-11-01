import { Router } from '@angular/router';
const express = require('express')
const router = express.Router()

router.get('/', (req,res)  => {
    res.send('from API Routes')
})

module.exports = router