const { Schema, model } = require("mongoose");

const prodactShoesSchema = new Schema({
  name: String,
  price: Number,
  Size: {
    type: Array,
    required: true,
  },
  img: {
    type: String,
  },


});



const prodactShoes_MODEL = model("prodactShoes", prodactShoesSchema);

module.exports = prodactShoes_MODEL;