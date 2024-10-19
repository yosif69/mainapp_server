const { Router } = require("express");
const { register, getAllLogIn, login } = require("../controller/ControllerLogIn");

const LogInRoutes = Router();

// مسار جلب جميع المستخدمين
LogInRoutes.get("/getAllLogIn", getAllLogIn);

// مسار تسجيل الدخول
LogInRoutes.post("/login", login);

// مسار إنشاء مستخدم جديد
LogInRoutes.post("/register", register);

module.exports = LogInRoutes;
