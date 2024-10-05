const { Router } = require("express");
const { prodactShoes, getAllShoes, updateManyShoes} = require("../controller/ControllerprodactShoes");

const prodactShoesRoutes = Router();

prodactShoesRoutes.get("/getAllShoes", getAllShoes);
prodactShoesRoutes.post("/prodactShoes", prodactShoes)
prodactShoesRoutes.post("/updateManyShoes", updateManyShoes)


module.exports = prodactShoesRoutes; 