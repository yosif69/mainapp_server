const { Router } = require("express");
const { pordactHoodie , getAllHoodie} = require("../controller/ControllerprodactHoodie");

const prodactRoutesHoodie = Router();

prodactRoutesHoodie.get("/getAllHoodie", getAllHoodie);
prodactRoutesHoodie.post("/pordactHoodie", pordactHoodie  )
// userRouter.post("/login", (req , res) =>  login(req , res));

module.exports = prodactRoutesHoodie;