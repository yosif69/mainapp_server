const prodactPants_MODEL = require("../models/prodactPants");

const login = async (req, res) => {
    const {  Size, price } = req.body;
      // const userName = req.body.userName;
    //   const pass = req.body.pass;
  
    const user = await prodactPants_MODEL.findOne({ userName: Size }).catch((e) =>
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
    const user = await prodactPants_MODEL.updateOne({name},updatedprodact).catch((e) =>
      res.status(500).json({ error: true, errorMessage: e.message })
    );
    if (user) {
      res.status(200).json({user});
      return;
    }else{
      res.status(550).json({ error: true, errorMessage: "no user" });
    }
  }

  const updateManyPants =async (req,res)=>{
    // const {name,updatedUser}=req.body
    console.log(req.body);
    const user = await prodactPants_MODEL.updateMany(req.body).catch((e) =>
      res.status(500).json({ error: true, errorMessage: e.message })
    );
    if (user) {
      res.status(200).json({user});
      return;
    }else{
      res.status(550).json({ error: true, errorMessage: "no user" });
    }
  }

  const test =async (req,res)=>{
    res.status(200).json({test: "test",});
  }
  
 
  const prodactPants =  (req, res) => {
    const {  name,Size,  price  ,  } = req.body;
    
    prodactPants_MODEL.create({
        name: name,
        Size,
        price,
       
  
      })
      .then((createRes) => {
          res.status(200).json({
            prodactShoes: createRes._doc,
          });
        })
        .catch((e) => {
          res.status(500).json({
            error: true,
            errorMessage: e.message,
          });
        });
    };
    const  getAllPants = (req, res) => {
        prodactPants_MODEL.find()
          .then((Pants) => {
            res.status(200).json({ 
              type:"Pants",
              data:Pants
             });
          })
          .catch((e) =>
            res.status(500)
          .json({ error: true, errorMessage: e.message })
          );
      };
  

    
  
  module.exports = {
    login,
    updateOneUser,
    updateManyPants,
     prodactPants,
    test,
    getAllPants,
  };