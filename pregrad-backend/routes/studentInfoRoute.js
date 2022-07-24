const express = require("express");
const router = express.Router();

const {
    studentAchievement,
    getAchievementInfo,
    deleteAchievement,
    updateAchievement,
    updatedAchievement
    ,studentProject
    ,getProjectsInfo
    ,deleteProject
    ,updateProject
    ,updatedProject,
    studentEducation,
    getEducationInfo,
    deleteEducation,
    updateEducation,
    updatedEducation,
    studentWorkExperience,
    getWorkExperienceInfo,
    deleteWorkExperience,
    updatedWorkExperience,
    updateWorkExperience,
    allStudentData

} = require('../controllers/studentController')


// getAll Data

router.route('/profile/:id').get(allStudentData)


// achievement route

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

 
//student route

router.route('/education').post(studentEducation)

router.route('/geteducation/:id').get(getEducationInfo)

router.route('/deleteeducation/:u_id/:id').delete(deleteEducation)

router.route('/updateeducation/:u_id/:id').get(updateEducation)

router.route('/updatededucation/:u_id/:id').put(updatedEducation)

// workexperience route

router.route('/workexperience').post(studentWorkExperience)

router.route('/getworkexperience/:id').get(getWorkExperienceInfo)

router.route('/deleteworkexperience/:u_id/:id').delete(deleteWorkExperience)

router.route('/updateworkexperience/:u_id/:id').get(updateWorkExperience)

router.route('/updatedworkexperience/:u_id/:id').put(updatedWorkExperience)

module.exports = router