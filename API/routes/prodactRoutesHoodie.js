const { Router } = require("express");
const { createpordact , getAllHoodie} = require("../controller/ControllerprodactHoodie");

const prodactRoutesHoodie = Router();

prodactRoutesHoodie.get("/getAllHoodie", getAllHoodie);
prodactRoutesHoodie.post("/createpordact", createpordact  )
// userRouter.post("/login", (req , res) =>  login(req , res));

module.exports = prodactRoutesHoodie;