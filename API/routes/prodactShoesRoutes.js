const { Router } = require("express");
const { prodactShoes, getAllShoes} = require("../controller/ControllerprodactShoes");

const prodactShoesRoutes = Router();

prodactShoesRoutes.get("/getAllShoes", getAllShoes);
prodactShoesRoutes.post("/prodactShoes", prodactShoes  )

module.exports = prodactShoesRoutes; 