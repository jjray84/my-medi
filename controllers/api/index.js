const router = require("express").Router();
const signUpRoute = require("./signup");
const loginRoute = require("./login");
const medicationRoutes = require("./medicationRoutes");

router.use("/signup", signUpRoute);
router.use("/login", loginRoute);
router.use("/medication", medicationRoutes);

module.exports = router;
