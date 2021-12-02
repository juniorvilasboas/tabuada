const express = require('express')
const router = express.Router()
const indexController = require('../controller/index')

router.get('/', indexController.home)

module.exports = router