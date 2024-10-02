const { Router } = require("express");
const { getAllUsers,login, CreateUser } = require("../controller/ControllerCreateYourAccount");

const CreateYourAccountRoutes = Router();

// مسار جلب جميع المستخدمين
CreateYourAccountRoutes.get("/getAllUsers", getAllUsers);

// مسار تسجيل الدخول
CreateYourAccountRoutes.post("/login", login);

// مسار إنشاء مستخدم جديد
CreateYourAccountRoutes.post("/CreateUser", CreateUser);

module.exports = CreateYourAccountRoutes;
