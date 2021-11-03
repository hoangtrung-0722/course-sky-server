const User = require("../models/User")

module.exports.getTeacherOptions = async (req, res) => {
    try {
        const users = await User.find({}).select("firstName + lastName").lean();
        users.forEach(user => {
            user.fullName = `${user.firstName} ${user.lastName}`;
        })
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json("Unable to load users");
    }
}