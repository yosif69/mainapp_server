const { Schema, model } = require("mongoose");

const LogInSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true, // للتأكد من عدم تكرار نفس البريد الإلكتروني
  },
  userName: {
    type: String,
    required: true,
    unique: true, // للتأكد من عدم تكرار نفس اسم المستخدم
  },
  pass: {
    type: String,
    required: true,
  },
});

// حذف التشفير من الكود
const LogIn_MODEL = model("LogIn", LogInSchema);

module.exports = LogIn_MODEL;
