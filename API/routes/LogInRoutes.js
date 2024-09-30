const { Router } = require("express");
const { LogIn, getAllLogIn, login } = require("../controller/ControllerLogIn");

const LogInRoutes = Router();

// مسار جلب جميع المستخدمين
LogInRoutes.get("/getAllLogIn", getAllLogIn);

// مسار تسجيل الدخول
LogInRoutes.post("/login", login);

// مسار إنشاء مستخدم جديد
LogInRoutes.post("/createLogIn", LogIn);

module.exports = LogInRoutes;
