const { Router } = require("express");
const { createpordact } = require("../controller/ControllerProdact");

const prodactRoutes = Router();

prodactRoutes.post("/createpordact", createpordact)
// userRouter.post("/login", (req , res) =>  login(req , res));

module.exports = prodactRoutes;