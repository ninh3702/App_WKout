const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const asyncHandle = require("express-async-handler");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
require("dotenv").config();

const getDataUser = asyncHandle(async (req, res) => {
  const email = req.body;
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    res.status(200).json({
      message: "getData successfully",
      data: {
        id: existingUser.id,
        email: existingUser.email,
        photo: existingUser.photo,
        name: existingUser.name,
        accesstoken: existingUser.accesstoken,
      },
    });
  }
});

const register = asyncHandle(async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await UserModel.findOne({ email });

  if (existingUser) {
    res.status(401);
    throw new Error("User has already exsist");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new UserModel({
    name,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  res.status(200).json({
    message: "Register new user successfully",
    data: {
      email: newUser.email,
      id: newUser.id,
      accesstoken: await getJWT(email, newUser.id),
      name: newUser.name,
    },
  });
});

const login = asyncHandle(async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await UserModel.findOne({ email });

  if (!existingUser) {
    res.status(403);
    throw new Error("User not found");
  }

  const isMatchPassword = await bcrypt.compare(password, existingUser.password);

  if (!isMatchPassword) {
    res.status(401);
    throw new Error("Email or Password is not correct");
  }
  res.status(200).json({
    message: "Login successfully",
    data: {
      id: existingUser.id,
      email: existingUser.email,
      accesstoken: await getJWT(email, existingUser.id),
    },
  });
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD,
  },
});

const getJWT = async (email, id) => {
  const payload = { email, id };
  const token = jwt.sign(payload, process.env.JWT, {
    expiresIn: "7d",
  });
  return token;
};

const handleSendMail = async (val) => {
  try {
    await transporter.sendMail(val);

    return "ok";
  } catch (error) {
    return error;
  }
};

const verification = asyncHandle(async (req, res) => {
  const { email } = req.body;
  const verificationCode = Math.round(1000 + Math.random() * 9000);

  try {
    const data = {
      from: `Me <${process.env.GMAIL_USERNAME}>`,
      to: email, // list of receivers
      subject: "Verification email code", // Subject line
      text: "Your code to verification email", // plain text body
      html: `<h1>${verificationCode}</h1>`, // html body
    };
    await handleSendMail(data);
    res.status(200).json({
      message: "Send verification Code successfully",
      data: {
        code: verificationCode,
      },
    });
  } catch (error) {
    res.status(401);
    throw new Error("cant send email");
  }
});

const forgotPassword = asyncHandle(async (req, res) => {
  const { email } = req.body;
  const randomPassword = Math.round(100000 + Math.random() * 99000);
  const data = {
    from: `New Password <${process.env.GMAIL_USERNAME}>`,
    to: email, // list of receivers
    subject: "Verification email code", // Subject line
    text: "Your code to reset password", // plain text body
    html: `<h1>${randomPassword}</h1>`, // html body
  };

  const user = await UserModel.findOne({ email });

  if (user) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(`${randomPassword}`, salt);

    await UserModel.findByIdAndUpdate(user._id, {
      password: hashedPassword,
      isChangePassword: true,
    })
      .then(() => {
        console.log("Done");
      })
      .catch((error) => console.log(error));

    await handleSendMail(data)
      .then(() => {
        res.status(200).json({
          message: "Send reset Code successfully",
          data: [],
        });
      })
      .catch((error) => {
        res.status(401);
        throw new Error("Cant send email");
      });
    console.log(user._id);
  } else {
    res.status(401);
    throw new Error("User not found");
  }
});

const handleLoginWithGoogle = asyncHandle(async (req, res) => {
  const userInfo = req.body;

  const existingUser = await UserModel.findOne({ email: userInfo.email });

  let user = { ...userInfo };
  if (existingUser) {
    await UserModel.findByIdAndUpdate(existingUser.id, {
      ...userInfo,
      updatedAt: Date.now(),
    });

    user.accesstoken = await getJWT(userInfo.email, existingUser.id);
    console.log(user);
  } else {
    const newUser = new UserModel({
      email: userInfo.email,
      name: userInfo.name,
      ...userInfo,
    });
    console.log(newUser);
    await newUser.save();
    user.accesstoken = await getJWT(userInfo.email, newUser.id);
  }
  console.log(user);
  res.status(200).json({
    message: "login with google successfully",
    data: user,
  });
});

module.exports = {
  register,
  login,
  verification,
  forgotPassword,
  handleLoginWithGoogle,
  getDataUser,
};
