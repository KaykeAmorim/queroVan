const express = require('express')
const factoryController = require('../factory/controller')
const {LoginController} = require('./controller')
const Cryptograph = require('../security/cryptograph')
const router = express.Router()

router.get('/login', factoryController.build(LoginController, 'loadLoginPage'))
router.post('/authorization', Cryptograph.password, factoryController.build(LoginController, 'login'))

module.exports = router