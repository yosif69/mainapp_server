const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  name: String,
  age: Number,
  phone: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },
  userName: String,
  pass: {
    type: String,
    required: true,
  },
});

// تشفير كلمة المرور قبل حفظ المستخدم
userSchema.pre("save", async function (next) {
  if (!this.isModified("pass")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.pass = await bcrypt.hash(this.pass, salt);
    next();
  } catch (error) {
    next(error);
  }
});

const USER_MODEL = model("user", userSchema);

module.exports = USER_MODEL;
