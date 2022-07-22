const express = require("express");
const router = express.Router();

const {studentAchievement,getAchievementInfo,deleteAchievement,updateAchievement,updatedAchievement,studentProject,getProjectsInfo,deleteProject,updateProject,updatedProject} = require('../controllers/studentController')

router.route('/achievements').post(studentAchievement)

router.route('/getachievements/:id').get(getAchievementInfo)

router.route('/deleteachievement/:u_id/:id').delete(deleteAchievement)

router.route('/updateachievement/:u_id/:id').get(updateAchievement)

router.route('/updatedachievement/:u_id/:id').put(updatedAchievement)

//project routes

router.route('/projects').post(studentProject)

router.route('/getprojects/:id').get(getProjectsInfo)

router.route('/deleteproject/:u_id/:id').delete(deleteProject)

router.route('/updateproject/:u_id/:id').get(updateProject)

router.route('/updatedproject/:u_id/:id').put(updatedProject)

 
module.exports = router