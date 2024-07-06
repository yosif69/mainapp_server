const prodactRoutes = require("./prodactRoutes");
const userRouter = require("./user.routes");

const Routes = [
    userRouter,
    prodactRoutes
];

module.exports = Routes;