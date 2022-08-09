const express = require('express')

const router = express.Router()

const { registerCompany} = require('../controllers/companyController')

// register 

router.route('/register').post(registerCompany)

module.exports = router