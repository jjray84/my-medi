const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("information", {
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
