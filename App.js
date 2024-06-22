//200:saccsess,
//500: general ERROR,
// 404: not founid

const express = require("express");
var cors = require("cors");
const mongoose = require ("mongoose");
const USER_MODEL = require("./API/models/user.model");
const app = express();
app.use(express.json());
app.use(cors());

const mongooseLink = "mongodb+srv://yosifmatar123:Qweasd556677@cluster0.2sa3jfw.mongodb.net/"

app.get("/app", (req, res ) => {
    res.status(200).json({
        name: "yosif",
        age: 20,
    });
});

app.post("/whatsMyName", (req, res) => {
    const {name, lastName} = redq.body;
    
    if (!name ||!lastName) {
         res.status(701).json({
            error :true,
            error: " name and last Name are must!",
        });
        return;
    };

    res.status(200).json({
        name: name + " " ,
        lastName: lastName +" "
    });
});

app.post("/ceateNewUser", (req, res) => {
  const { phone, name,  age, userName ,pass, points, } = req.body;
  
    USER_MODEL.create({
      phone: phone,
      name: name,
     age,
     points,
     userName,
     pass,

    })
    .then((createRes) => {
        res.status(200).json({
          user: createRes._doc,
        });
      })
      .catch((e) => {
        res.status(500).json({
          error: true,
          errorMessage: e.message,
        });
      });
  });



  app.get("/getAllUsers", (req, res) => {
    USER_MODEL.find({name:"yosif"})
      .then((users) => {
        res.status(200).json({ users });
      })
      .catch((e) =>
        res.status(500)
      .json({ error: true, errorMessage: e.message })
      );
  });









mongoose.connect(mongooseLink);

mongoose.connection.on("connected", () => {
    console.log ("mongo connected");
} );



module.exports = app;