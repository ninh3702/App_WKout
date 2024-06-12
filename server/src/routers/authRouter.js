const Router = require("express");
const {
  register,
  login,
  verification,
  forgotPassword,
  handleLoginWithGoogle,
  getDataUser,
} = require("../controllers/authController");

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/verification", verification);
authRouter.post("/forgotPassword", forgotPassword);
authRouter.post("/google-signin", handleLoginWithGoogle);
authRouter.get("/getDataUser", getDataUser);
module.exports = authRouter;
