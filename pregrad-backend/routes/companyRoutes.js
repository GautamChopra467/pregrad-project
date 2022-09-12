const express = require('express')

const router = express.Router()

const { registerCompany,getCompanyInfo,companyDetails,getCompanyDetails,editProfile,editAccount,getInternships} = require('../controllers/companyController')

const {createInternship,Internship,singleInternship,editInternship,closeInternship,allInternship,getApplicants,rejectedApplicants} = require('../controllers/internshipController')

const {
    REGISTER,
    GETCOMPANYINFO,
    POSTCOMPANYDETAILS,
    GETCOMPANYDETAILS,
    ADDINTERNSHIPS,
    EDITPROFILE,
    EDITACCOUNT,
    GETINTERNSHIPS,
    INTERNSHIP,
    SINGLEINTERNSHIP,
    EDITINTERNSHIP,
    CLOSEINTERNSHIP,
    ALLINTERNSHIP,
    APPLICATIONS,
    REJECTEDAPPLICANTS
} = require("../utils/constants/app_constants").ROUTES.COMPANY;

// register 

router.route(REGISTER).post(registerCompany)

router.route(GETCOMPANYINFO).get(getCompanyInfo)

router.route(POSTCOMPANYDETAILS).post(companyDetails)

router.route(GETCOMPANYDETAILS).get(getCompanyDetails)

router.route(ADDINTERNSHIPS).post(createInternship)

router.route(EDITPROFILE).put(editProfile)

router.route(EDITACCOUNT).put(editAccount)

router.route(GETINTERNSHIPS).get(getInternships)

router.route(INTERNSHIP).get(Internship)

router.route(SINGLEINTERNSHIP).get(singleInternship)

router.route(EDITINTERNSHIP).put(editInternship)

router.route(CLOSEINTERNSHIP).put(closeInternship)

router.route(ALLINTERNSHIP).get(allInternship)

router.route(APPLICATIONS).get(getApplicants)

router.route(REJECTEDAPPLICANTS).put(rejectedApplicants)

module.exports = router