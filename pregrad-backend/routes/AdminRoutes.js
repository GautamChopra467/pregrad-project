const express = require("express")

const router = express.Router();

const {ADMINREGISTER} = require("../utils/constants/app_constants").ROUTES.ADMIN;

const {ADMIN} = require("../utils/constants/app_constants").ROUTES.AUTH;

const {registerAdmin,AdminInfo,verifiedCompany} = require("../controllers/AdminController");

const {CheckAdmin} = require("../Middleware/AuthMiddlewareAdmin");

const Handler = require("../ErrorHandling/Authentication/AdminAuthError");

router.route(ADMINREGISTER).post(Handler.register,registerAdmin);

router.route(ADMIN).post(CheckAdmin);

router.route("/getadmininfo/:id").get(AdminInfo);

router.route("/verifiedCompany/:id").put(verifiedCompany)

module.exports = router;