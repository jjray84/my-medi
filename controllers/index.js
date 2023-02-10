const router = require("express").Router();
const apiRoutes = require("./api");
const signupRoutes = require("./signupRoutes");
const checkUserRoute = require("./checkUserRoute")

// register subroutes to the main route
router.use("/signUp", signupRoutes);
router.use("/api", apiRoutes);
router.use("/", checkUserRoute)

module.exports = router;
