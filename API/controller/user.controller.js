const USER_MODEL = require("../models/user.model");

const login = async (req, res) => {
  const { userName, pass } = req.body;
    // const userName = req.body.userName;
  //   const pass = req.body.pass;

  const user = await USER_MODEL.findOne({ userName: userName }).catch((e) =>
    res.status(500).json({ error: true, errorMessage: e.message })
  );

  console.log("user: " , user);

  if (!user) {
    res.status(550).json({ error: true, errorMessage: "no user" });
    return;
  }

  if (user.pass == pass) {
    res.status(200).json({ auth: true, user: user });
  } else {
    res.status(545).json({ auth: false, errorMesage: "bad pass" });
  }
};

const updateOneUser =async (req,res)=>{
  const {name,updatedUser}=req.body
  const user = await USER_MODEL.updateOne({name},updatedUser).catch((e) =>
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

module.exports = {
  login,
  updateOneUser,
  test
};