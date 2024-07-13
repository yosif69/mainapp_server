const { Router } = require("express");
const { prodactShoes, getAllShoes} = require("../controller/ControllerprodactShoes");

const prodactRoutes = Router();

prodactRoutes.get("/getAllShoes", getAllShoes);
prodactRoutes.post("/prodactShoes", prodactShoes  )

module.exports = prodactRoutes; 