const router = require("express").Router();
const apiRoutes = require("./api");
const signupRoutes = require("./signupRoutes");

// register subroutes to the main route
router.use("/signUp", signupRoutes);
router.use("/api", apiRoutes);

module.exports = router;
