const prodactHoodie_MODEL = require("../models/prodactHoodie");

const login = async (req, res) => {
    const {  Size, price } = req.body;
      // const userName = req.body.userName;
    //   const pass = req.body.pass;
  
    const user = await prodactHoodie_MODEL.findOne({ userName: Size }).catch((e) =>
      res.status(500).json({ error: true, errorMessage: e.message })
    );
  
    console.log("user: " , user);
  
    if (!user) {
      res.status(550).json({ error: true, errorMessage: "no user" });
      return;
    }
  
    if (user.price == price) {
      res.status(200).json({ auth: true, user: user });
    } else {
      res.status(545).json({ auth: false, errorMesage: "bad price" });
    }
  };
  
  const updateOneUser =async (req,res)=>{
    const {name,updatedUser}=req.body
    const user = await USER_MODEL.updateOne({name},updatedprodact).catch((e) =>
      res.status(500).json({ error: true, errorMessage: e.message })
    );
    if (user) {
      res.status(200).json({user});
      return;
    }else{
      res.status(550).json({ error: true, errorMessage: "no user" });
    }
  }
  
 
  const createpordact =  (req, res) => {
    const {  name,Size,  price  ,  } = req.body;
    
    prodactHoodie_MODEL.create({
        name: name,
        Size:Size,
        price,
       
  
      })
      .then((createRes) => {
          res.status(200).json({
            prodact: createRes._doc,
          });
        })
        .catch((e) => {
          res.status(500).json({
            error: true,
            errorMessage: e.message,
          });
        });
    };
    const  getAllpordact = (req, res) => {
      prodactHoodie_MODEL.findOne()
        .then((users) => {
          res.status(200).json({ users });
        })
        .catch((e) =>
          res.status(500)
        .json({ error: true, errorMessage: e.message })
        );
    };
  

    
  
  module.exports = {
    login,
    updateOneUser,
    createpordact,
    getAllpordact,
  };