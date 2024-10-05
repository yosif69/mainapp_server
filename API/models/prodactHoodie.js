const { Schema, model } = require("mongoose");

const prodactHoodieSchema = new Schema({
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



const prodactHoodie_MODEL = model("prodactHoodie", prodactHoodieSchema);

module.exports = prodactHoodie_MODEL;