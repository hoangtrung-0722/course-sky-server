const mongoose = require("mongoose")
const Course = require("../models/Course");
const User = require("../models/User")

module.exports.createCourse = async (req, res) => {
  await Course.create(
    {
      courseName: req.body.courseName,
      description: req.body.description,
      teacher: req.body.teacher,
      maxStudent: req.body.maxStudent,
    },
    (err, course) => {
      if (err) {
        console.log(err);
        res.status(500).json("Unable to create course\n" + err);
      } else {
        res.json(course);
      }
    }
  );
};

module.exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.json(courses);
  } catch (error) {
    console.log(err);
    res.status(500).json("Unable to load courses");
  }
};
