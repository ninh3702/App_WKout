const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const asyncHandle = require("express-async-handler");
const jwt = require("jsonwebtoken");
const getJWT = async (email, id) => {
  const payload = { email, id };
  const token = jwt.sign(payload, process.env.JWT, {
    expiresIn: "7d",
  });
  return token;
};

const register = asyncHandle(async (req, res) => {
  const { username, email, password } = req.body;

  const existingUser = await UserModel.findOne({ email });

  if (existingUser) {
    res.status(401);
    throw new Error("User has already exsist");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new UserModel({
    username,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  res.status(200).json({
    message: "Register new user successfully",
    data: {
      ...newUser,
      accesstoken: getJWT(email),
    },
  });

  res.send("hehe");
});

module.exports = { register };
