const router = require("express").Router();

// create a route to render signup handlebar page
router.get("/", (req, res) => {
  res.render("signUp");
});

module.exports = router;
