const express = require("express");
const router = express.Router();
const controller = require("../controllers/courseController");

router.get("/", (req, res, next) => {res.send("leu leu")});
router.get("/create", controller.createCourse);

module.exports = router;