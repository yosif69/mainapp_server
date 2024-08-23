const { Router } = require("express");
const { prodactPants , getAllPants} = require("../controller/ControllerprodactPants");

const prodactRoutesPants = Router();

prodactRoutesPants.get("/getAllPants", getAllPants);
prodactRoutesPants.post("/prodactPants", prodactPants  )
// userRouter.post("/login", (req , res) =>  login(req , res));

module.exports = prodactRoutesPants;