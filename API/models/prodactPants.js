const { Schema, model } = require("mongoose");

const prodactPantsSchema = new Schema({
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



const prodactPants_MODEL = model("prodactPants", prodactPantsSchema);

module.exports = prodactPants_MODEL;