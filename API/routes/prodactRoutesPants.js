const { Router } = require("express");
const { prodactPants , getAllPants,updateManyPants } = require("../controller/ControllerprodactPants");

const prodactRoutesPants = Router();

prodactRoutesPants.get("/getAllPants", getAllPants);
prodactRoutesPants.post("/prodactPants", prodactPants);
prodactRoutesPants.post("/updateManyPants", updateManyPants)

// userRouter.post("/login", (req , res) =>  login(req , res));

module.exports = prodactRoutesPants;