const prodactRoutesHoodie = require("./prodactRoutesHoodie");
const userRouter = require("./user.routes");
const prodactShoesRoutes = require("./prodactShoesRoutes");
const prodactRoutesPants = require("./prodactRoutesPants");


const Routes = [
    userRouter,
    prodactRoutesHoodie,
    prodactShoesRoutes,
    prodactRoutesPants,
    
];

module.exports = Routes;