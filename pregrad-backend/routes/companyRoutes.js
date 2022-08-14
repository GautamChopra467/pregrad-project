const express = require('express')

const router = express.Router()

const { registerCompany,getCompanyInfo,companyDetails,getCompanyDetails,editProfile,editAccount,getInternships} = require('../controllers/companyController')

const {createInternship,Internship,singleInternship,editInternship,closeInternship} = require('../controllers/internshipController')

// register 

router.route('/register').post(registerCompany)

router.route('/getcompanyinfo/:id').get(getCompanyInfo)

router.route('/companydetails/:id').post(companyDetails)

router.route('/getcompanydetails/:id').get(getCompanyDetails)

router.route('/addinternships/:id').post(createInternship)

router.route('/editprofile/:id').put(editProfile)

router.route('/editaccount/:id').put(editAccount)

router.route('/getinternships/:id').get(getInternships)

router.route('/internship/:id').get(Internship)

router.route('/singleinternship/:id').get(singleInternship)

router.route('/editinternships/:id').put(editInternship)

router.route('/closeinternship/:id').put(closeInternship)


module.exports = router