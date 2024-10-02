const { Schema, model } = require("mongoose");

// مخطط تسجيل الحساب الجديد
const CreateYourAccountSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true, // التأكد من عدم تكرار نفس البريد الإلكتروني لكل مستخدم
  },
  userName: {
    type: String,
    required: true,
    unique: true, // التأكد من عدم تكرار اسم المستخدم
  },
  pass: {
    type: String,
    required: true, // كلمة المرور مطلوبة
  },
});

// إنشاء نموذج المستخدم لحفظ الحساب الجديد
const CreateYourAccount_MODEL = model("CreateYourAccount", CreateYourAccountSchema);

module.exports = CreateYourAccount_MODEL;
