const router = require("express").Router();

router.post("/", (req, res) => {
  // get user sent data from request body
  const { userName, email, password } = req.body;

  // TODO : connect to db and create a new user with the data

  // return success or failure based on the output

  res.send("done");
});

module.exports = router;
