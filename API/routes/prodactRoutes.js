const { Router } = require("express");
const { createpordact , getAllpordact} = require("../controller/ControllerProdact");

const prodactRoutes = Router();

prodactRoutes.post("/getAllpordact", getAllpordact);
prodactRoutes.post("/createpordact", createpordact  )
// userRouter.post("/login", (req , res) =>  login(req , res));

module.exports = prodactRoutes; 