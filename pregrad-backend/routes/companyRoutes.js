const express = require('express')

const router = express.Router()
const { registerCompany,loginCompany} = require('../controllers/companyController')

router.route('/register').post(registerCompany)

router.route('/login').post(loginCompany)

module.exports = router