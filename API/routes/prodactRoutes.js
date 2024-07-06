const { Router } = require("express");
const { createpordact , getAllpordact} = require("../controller/ControllerProdact");

const prodactRoutes = Router();

prodactRoutes.post("/createpordact")
prodactRoutes.post("/", getAllpordact)
// userRouter.post("/login", (req , res) =>  login(req , res));

module.exports = prodactRoutes;