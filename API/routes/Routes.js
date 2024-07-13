const prodactRoutesHoodie = require("./prodactRoutesHoodie");
const userRouter = require("./user.routes");
const prodactShoesRoutes = require("./prodactShoesRoutes");

const Routes = [
    userRouter,
    prodactRoutesHoodie,
    prodactShoesRoutes,
];

module.exports = Routes;