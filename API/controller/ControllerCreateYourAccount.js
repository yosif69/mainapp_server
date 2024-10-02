const CreateYourAccount_MODEL = require("../models/CreateYourAccount");

// دالة تسجيل الدخول
const login = async (req, res) => {
  const { userName, pass } = req.body;

  try {
    // البحث عن المستخدم باستخدام اسم المستخدم
    const user = await CreateYourAccount_MODEL.findOne({ userName: userName });

    // إذا لم يتم العثور على المستخدم
    if (!user) {
      return res.status(550).json({ error: true, errorMessage: "no user" });
    }

    // مقارنة كلمة المرور المدخلة مع كلمة المرور المخزنة
    if (user.pass === pass) {
      return res.status(200).json({ auth: true, user: user });
    } else {
      return res.status(545).json({ auth: false, errorMessage: "bad pass" });
    }
  } catch (error) {
    return res.status(500).json({ error: true, errorMessage: error.message });
  }
};

// دالة تحديث مستخدم
const updateOneUser = async (req, res) => {
  const { name, updatedUser } = req.body;

  try {
    const user = await CreateYourAccount_MODEL.updateOne({ name }, updatedUser);

    if (user) {
      return res.status(200).json({ user });
    } else {
      return res.status(550).json({ error: true, errorMessage: "no user" });
    }
  } catch (error) {
    return res.status(500).json({ error: true, errorMessage: error.message });
  }
};

// دالة اختبار بسيطة
const test = async (req, res) => {
  return res.status(200).json({ test: "test" });
};

// دالة إنشاء حساب جديد
const CreateUser = (req, res) => {
  const { email, userName, pass } = req.body;

  CreateYourAccount_MODEL.create({
    email: email,
    userName,
    pass,
  })
    .then((createRes) => {
      res.status(200).json({
        message: "Account created successfully",
        user: createRes._doc,
      });
    })
    .catch((e) => {
      res.status(500).json({
        error: true,
        errorMessage: e.message,
      });
    });
};

// دالة جلب جميع المستخدمين
const getAllUsers = async (req, res) => {
  try {
    const users = await CreateYourAccount_MODEL.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: true, errorMessage: error.message });
  }
};

module.exports = {
  CreateUser, // إنشاء الحساب
  updateOneUser,
  login,
  test,
  getAllUsers, // جلب جميع المستخدمين
};
