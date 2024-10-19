const prodactRoutesHoodie = require("./prodactRoutesHoodie");
// const userRouter = require("./user.routes");
const prodactShoesRoutes = require("./prodactShoesRoutes");
const prodactRoutesPants = require("./prodactRoutesPants");
const LogInRoutes = require("./LogInRoutes");
const CreateYourAccountRoutes = require("./CreateYourAccountRoutes");




const Routes = [
    // userRouter,
    prodactRoutesHoodie,
    prodactShoesRoutes,
    prodactRoutesPants,
    LogInRoutes,
    CreateYourAccountRoutes
    
    
    
];

module.exports = Routes;