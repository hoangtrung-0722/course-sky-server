const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

router.get("/teacher_options", controller.getTeacherOptions);

module.exports = router;