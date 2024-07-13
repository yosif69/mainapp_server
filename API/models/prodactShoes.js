const { Schema, model } = require("mongoose");

const prodactShoes = new Schema({
  name: String,
  price: Number,
  Size: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },


});



const prodactShoes_MODEL = model("prodactShoes", prodactShoesSchema);

module.exports = prodactShoes_MODEL;