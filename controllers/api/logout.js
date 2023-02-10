const router = require("express").Router();

router.get("/", function (req, res) {
  req.session.user_id = null;
  req.session.logged_in = false;
  req.session.save(() => {
    req.session.save(function (err) {
      if (err) next(err);
      req.session.regenerate(function (err) {
        if (err) next(err);
        res.redirect("/");
      });
    });
  });
});

module.exports = router;
