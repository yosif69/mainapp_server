const { Schema, model } = require("mongoose");

const prodactSchema = new Schema({
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



const prodact_MODEL = model("Product", prodactSchema);

module.exports = prodact_MODEL;