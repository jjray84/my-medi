const router = require('express').Router();
const { User } = require("../models");
const previousUser = require('../utils/auth');

// 127.0.0.1:3001/homepage
// If user is logged in, render homepage.handlebars
router.get('/', previousUser, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
    });

    userData.map((project) => project.get({ plain: true }));
    res.redirect("/homepage");

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/homepage', previousUser, async (req, res) => {
  res.render('homepage', {
    logged_in: req.session.logged_in,
  })
})

// 127.0.0.1:3001/login
// If user is logged in, send them to 127.0.0.1:3001/homepage, if they're not logged in, render login.handlebars
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;