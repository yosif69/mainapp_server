const LogIn_MODEL = require("../models/LogIn");

// دالة تسجيل الدخول
const login = async (req, res) => {
  const { userName, pass } = req.body;

  try {
    // البحث عن المستخدم باستخدام اسم المستخدم
    const user = await LogIn_MODEL.findOne({ userName: userName });

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
    const user = await LogIn_MODEL.updateOne({ name }, updatedUser);

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

// دالة إنشاء مستخدم جديد
const LogIn = (req, res) => {
  const { email, userName, pass} = req.body;

  LogIn_MODEL.create({
    email: email,
    userName,
    pass,
  })
    .then((createRes) => {
      res.status(200).json({
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
const getAllLogIn = async (req, res) => {
  try {
    const users = await LogIn_MODEL.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: true, errorMessage: error.message });
  }
};

module.exports = {
  LogIn,
  updateOneUser,
  login,
  test,
  getAllLogIn,
};
