const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authConfig = require("../config/auth");

module.exports.signUp = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  user.save((err, user) => {
    if (err) {
      console.log("Err: ", err);
      res.status(500).send({ message: "Register fail" });
      return;
    }
  });

  res.send({ message: "User was registered successfully!" });
};

module.exports.signIn = (req, res) => {
  User.findOne({ username: req.body.username }, async (err, user) => {
    if (err) {
      console.log("Error while finding username: ", err);
      res.status(500).send({ message: "Username isn't exist" });
      return;
    }

    const passwordMatch = bcrypt.compareSync(
      req.body.password,
      user.password,
      (err) => {
        if (err) {
          console.log("Error while hashing password: ", err);
          res.send(500).send({ message: "Wrong password" });
          return;
        }
      }
    );

    if (passwordMatch) {
      try {
        const accessToken = jwt.sign(
          { id: user.id },
          authConfig.tokenSecret,
          { expiresIn: authConfig.tokenLife }
        );
        res.send({ 
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          accessToken: accessToken });
      } catch (err) {
        console.log(err);
      }
    }
  });
};
