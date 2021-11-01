const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    maxlength: 200
  },
  teacher: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  maxStudent: {
    type: Number
  }
});

module.exports = mongoose.model("Course", schema);