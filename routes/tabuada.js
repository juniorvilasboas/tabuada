const express = require('express')
const router = express.Router()
const tabuadaController = require('../controller/tabuada')

router.get('/list', tabuadaController.list)
router.get('/do/:num', tabuadaController.tabuada)

module.exports = router