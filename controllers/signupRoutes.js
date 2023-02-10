const router = require("express").Router();

// create a route to render signup handlebar page
router.get("/", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("signUp");
});

module.exports = router;
