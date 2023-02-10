const router = require("express").Router();
const signUpRoute = require("./signup");
const loginRoute = require("./login");
const logoutRoute = require("./logout")

router.use("/signup", signUpRoute);
router.use("/login", loginRoute);
router.use("/logout",logoutRoute);

module.exports = router;
