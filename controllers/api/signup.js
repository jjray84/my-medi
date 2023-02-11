const { User } = require("../../models");

const router = require("express").Router();

// route for signup api will be /api/signup
router.post("/", (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.json({ user: user, message: "Account created!" });
    })
    .catch((err) => {
      console.error(err.errors);
      res.status(400).send(err.errors);
    });
});

module.exports = router;
