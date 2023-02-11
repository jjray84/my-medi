const router = require("express").Router();
const signUpRoute = require("./signup");
const loginRoute = require("./login");
const logoutRoute = require("./logout")
const medicationRoutes = require("./medicationRoutes");
const informationRoutes = require("./information");

router.use("/signup", signUpRoute);
router.use("/login", loginRoute);
router.use("/logout",logoutRoute);
router.use("/medications", medicationRoutes);
router.use("/information", informationRoutes)

module.exports = router;
