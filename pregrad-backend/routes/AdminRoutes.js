const express = require("express")

const router = express.Router();

const {ADMINREGISTER} = require("../utils/constants/app_constants").ROUTES.ADMIN;

const {ADMIN} = require("../utils/constants/app_constants").ROUTES.AUTH;

const {registerAdmin,AdminInfo,verifiedCompany,reportedInternship,reports,VerifiedRepotedInternship} = require("../controllers/AdminController");

const {CheckAdmin} = require("../Middleware/AuthMiddlewareAdmin");

const Handler = require("../ErrorHandling/Authentication/AdminAuthError");

router.route(ADMINREGISTER).post(Handler.register,registerAdmin);

router.route(ADMIN).post(CheckAdmin);

router.route("/getadmininfo/:id").get(AdminInfo);

router.route("/verifiedCompany/:id").put(verifiedCompany);

router.route("/reportedinternships").get(reportedInternship);

router.route("/getreports/:i_id").get(reports);

router.route("/verifiedreportedinternship/:id").put(VerifiedRepotedInternship);

module.exports = router;