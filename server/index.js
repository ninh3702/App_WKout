const express = require("express");
const authRouter = require("./src/routers/authRouter");
const connectDB = require("./src/configs/connectDb");
const errorMiddleHandler = require("./src/middlewares/errorMiddleware");
const app = express();
require("dotenv").config;

const PORT = 3001;
app.use(express.json());
app.use("/auth", authRouter);

connectDB();
app.use(errorMiddleHandler);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`sever starting at http://localhost:${PORT}`);
});
