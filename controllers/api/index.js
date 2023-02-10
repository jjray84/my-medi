const router = require("express").Router();
const signUpRoute = require("./signup");
const loginRoute = require("./login");
const logoutRoute = require("./logout")
const medicationRoutes = require("./medicationRoutes");

router.use("/signup", signUpRoute);
router.use("/login", loginRoute);
router.use("/logout",logoutRoute);
router.use("/medication", medicationRoutes);

module.exports = router;
