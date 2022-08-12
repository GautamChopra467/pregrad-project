const express = require('express')

const router = express.Router()

const { registerCompany,getCompanyInfo,companyDetails,getCompanyDetails,editProfile,editAccount} = require('../controllers/companyController')

const {createInternship} = require('../controllers/internshipController')

// register 

router.route('/register').post(registerCompany)

router.route('/getcompanyinfo/:id').get(getCompanyInfo)

router.route('/companydetails/:id').post(companyDetails)

router.route('/getcompanydetails/:id').get(getCompanyDetails)

router.route('/addinternships/:id').post(createInternship)

router.route('/editprofile/:id').put(editProfile)

router.route('/editaccount/:id').put(editAccount)

module.exports = router