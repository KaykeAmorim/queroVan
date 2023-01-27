const express = require('express')
const factoryController = require('../factory/controller')
const {RegistrationController} = require('./controller')
const Cryptograph = require('../security/cryptograph')
const router = express.Router()

router.get('/singup', factoryController.build(RegistrationController, 'loadRegistrationPage'))
router.post('/register', Cryptograph.password, factoryController.build(RegistrationController, 'singup'))

module.exports = router