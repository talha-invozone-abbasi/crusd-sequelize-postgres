const Users = require("../models").Users;

const CreateUser = (req, res) => {
  const { firstName, lastName, email } = req.body;

  return Users.create({
    firstName,
    lastName,
    email,
  }).then((user) => {
    res
      .status(201)
      .send({ success: true, message: "User successfully created", user });
  });
};
const GetAllUser = (req, res) => {
  return Users.findAll().then((user) => {
    res
      .status(200)
      .send({ success: true, message: " successfully Fetcched", user });
  });
};

module.exports = {
  CreateUser,
  GetAllUser,
};
