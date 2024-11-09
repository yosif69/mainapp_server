const { Router } = require("express");
const { getAllUsers,login, CreateUser, updateOneUser } = require("../controller/ControllerCreateYourAccount");

const CreateYourAccountRoutes = Router();

// مسار جلب جميع المستخدمين
CreateYourAccountRoutes.get("/getAllUsers", getAllUsers);

// مسار تسجيل الدخول
CreateYourAccountRoutes.post("/login", login);

// مسار إنشاء مستخدم جديد
CreateYourAccountRoutes.post("/CreateUser", CreateUser);

CreateYourAccountRoutes.post("/updateOneUser", updateOneUser);


module.exports = CreateYourAccountRoutes;
