const express = require('express')
const router = express.Router()
const userController = require('../controller/user.controller')

router.get('/login',userController.getLoginForm)
router.get('/signup',userController.getSignForm)

module.exports = router