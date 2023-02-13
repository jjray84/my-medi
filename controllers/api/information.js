const router = require("express").Router();
const { Information } = require("../../models");

router.get("/", async (req, res) => {
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
      // personal_number: req.body.personal_number,
      // emergency_contact: req.body.emergency_contact,
      // emergency_number: req.body.emergency_number,
      // blood_type: req.body.blood_type,
      // allergies: req.body.allergies,
      // transplants: req.body.transplants,
      // devices: req.body.devices,
      // user_id: req.body.user_id,
      ...req.body,
    });

    res.json(newInformation);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
