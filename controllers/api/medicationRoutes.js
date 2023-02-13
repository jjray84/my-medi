const router = require("express").Router();
const { Medication } = require("../../models");

// /api/medication

// route to render /edit/medications page
router.get("/", async (req, res) => {
  try {
    // get all the medications using findAll for the current logged in user
    // render the medications in homepage
    const medicationData = await Medication.findAll({
      where: { user_id: req.session.user_id },
      raw: true,
    });
    res.render("medications", {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      medications: medicationData,
      user_name: req.session.user_name,
    });
  } catch (error) {
    res.render("medications", {
      logged_in: req.session.logged_in,
    });
  }
});

// POST for adding new medication
router.post("/", async (req, res) => {
  try {
    const medicationData = await Medication.create({
      name: req.body.name,
      dosage: req.body.dosage,
      notes: req.body.notes,
      user_id: req.body.user_id,
    });
    res.status(200).json(medicationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT for updating existing medication by id
router.put("/:id", async (req, res) => {
  try {
    const medicationData = await Medication.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!medicationData[0]) {
      res.status(404).json({ message: "No medication with this id" });
      return;
    }
    res.status(200).json(medicationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedMedicationCount = await Medication.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (deletedMedicationCount === 1) {
      res.send(200);
    } else {
      res.send(404);
    }
  } catch (err) {
    res.send(500);
  }
});

module.exports = router;
