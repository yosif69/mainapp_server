const { Router } = require("express");
const { login, updateOneUser, test } = require("../controller/user.controller");

const userRouter = Router();

userRouter.post("/login", login);
userRouter.post("/updateOneUser", updateOneUser);
userRouter.patch("/test", test);
// userRouter.post("/login", (req , res) =>  login(req , res));

module.exports = userRouter;