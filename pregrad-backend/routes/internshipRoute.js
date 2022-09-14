const express = require("express");
const router = express.Router()

const {reportInternship} = require("../controllers/internshipController")

const {REPORT} = require("../utils/constants/app_constants").ROUTES.INTERNSHIP;

router.route(REPORT).post(reportInternship);

module.exports = router;