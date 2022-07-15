const express = require("express");
const router = express.Router();

const {studentAchievement} = require('../controllers/studentController')

router.route('/achievements').post(studentAchievement)

module.exports = router