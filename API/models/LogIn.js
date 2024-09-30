const { Schema, model } = require("mongoose");
const bcrypt = require('bcryptjs');

// استخدم نفس الدوال الموجودة في bcrypt
bcrypt.hash(password, saltRounds, function(err, hash) {
    // احفظ كلمة المرور المشفرة في قاعدة البيانات
});

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

// تشفير كلمة المرور قبل حفظ المستخدم
LogInSchema.pre("save", async function (next) {
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

const LogIn_MODEL = model("LogIn", LogInSchema);

module.exports = LogIn_MODEL;
