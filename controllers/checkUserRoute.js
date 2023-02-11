const router = require("express").Router();
const { User, Medication } = require("../models");
const previousUser = require("../utils/auth");

// 127.0.0.1:3001/homepage
// If user is logged in, render homepage.handlebars
router.get("/", previousUser, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
    });

    userData.map((project) => project.get({ plain: true }));
    res.redirect("/homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/homepage", previousUser, async (req, res) => {
  try {
    // get all the medications using findAll for the current logged in user
    // render the medications in homepage
    const medicationData = await Medication.findAll({
      where: { user_id: req.session.user_id },
      raw: true,
    });
    res.render("homepage", {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      medications: medicationData,
    });
  } catch (error) {
    res.render("homepage", {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  }
});

// 127.0.0.1:3001/login
// If user is logged in, send them to 127.0.0.1:3001/homepage, if they're not logged in, render login.handlebars
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
