const { Router } = require("express");
const { pordactHoodie , getAllHoodie, updateManyProducts} = require("../controller/ControllerprodactHoodie");

const prodactRoutesHoodie = Router();

prodactRoutesHoodie.get("/getAllHoodie", getAllHoodie);
prodactRoutesHoodie.post("/pordactHoodie", pordactHoodie  )
prodactRoutesHoodie.post("/updateManyProducts", updateManyProducts  )
// userRouter.post("/login", (req , res) =>  login(req , res));

module.exports = prodactRoutesHoodie;