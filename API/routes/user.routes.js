const { Router } = require("express");
const { login, updateOneUser, ceateNewUser,} = require("../controller/user.controller");
const userRouter = Router();

userRouter.post("/login", login);
userRouter.post("/updateOneUser", updateOneUser);
userRouter.post("/ceateNewUser", ceateNewUser);
// userRouter.post("/login", (req , res) =>  login(req , res));
module.exports = userRouter;
