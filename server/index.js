const express = require("express");
const authRouter = require("./src/routers/authRouter");
const connectDB = require("./src/configs/connectDb");
const errorMiddleHandler = require("./src/middlewares/errorMiddleware");
const userRouter = require("./src/routers/userRouter");
const { verification } = require("./src/controllers/authController");
const verifyToken = require("./src/middlewares/verifyMiddleware");
const app = express();
require("dotenv").config;

const PORT = 3001;
app.use(express.json());
app.use("/auth", authRouter);
app.use("/users", verifyToken, userRouter);
connectDB();
app.use(errorMiddleHandler);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`sever starting at http://localhost:${PORT}`);
});
