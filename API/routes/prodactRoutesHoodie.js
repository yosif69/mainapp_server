const { Router } = require("express");
const { createpordact , getAllpordact} = require("../controller/ControllerprodactHoodie");

const prodactRoutesHoodie = Router();

prodactRoutesHoodie.get("/getAllpordact", getAllpordact);
prodactRoutesHoodie.post("/createpordact", createpordact  )
// userRouter.post("/login", (req , res) =>  login(req , res));

module.exports = prodactRoutesHoodie;