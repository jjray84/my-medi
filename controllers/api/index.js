const router = require("express").Router();
const signUpRoute = require("./signup");
const loginRoute = require("./login")

router.use("/signup", signUpRoute);
router.use("/login", loginRoute)

module.exports = router;
