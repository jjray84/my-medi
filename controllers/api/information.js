const router = require("express").Router();
const { Information } = require("../../models");
const previousUser = require("../../utils/auth");

router.get("/", previousUser, async (req, res) => {
  try {
    // get all the medications using findAll for the current logged in user
    // render the medications in homepage
    const informationData = await Information.findOne({
      where: { user_id: req.session.user_id },
      raw: true,
    });

    console.log(informationData);
    res.render("information", {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      user_name: req.session.user_name,
      information: informationData,
    });
  } catch (error) {
    res.render("information", {
      logged_in: req.session.logged_in,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const newInformation = await Information.create({
      ...req.body,
    });
    res.json(newInformation);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

router.put("/", async (req, res) => {
  try {
    const newInformation = await Information.update({
      ...req.body,
    },{where: {user_id: req.session.user_id, }});
    res.json(newInformation);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

module.exports = router;
