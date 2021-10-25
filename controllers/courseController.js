const Course = require("../models/Course");

module.exports.createCourse = async (req, res) => {
  const course = await Course.create(
    {
      courseName: req.body.courseName,
      description: req.body.description,
      teacher: req.body.teacher,
    },
    (err, course) => {
      if (err) {
        console.log(err);
        res.status(500).json("Unable to create course");
      } else {
        res.json(course);
      }
    }
  );
};
