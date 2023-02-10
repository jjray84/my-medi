const router = require("express").Router();
const signUpRoute = require("./signup");

router.use("/signup", signUpRoute);

module.exports = router;
