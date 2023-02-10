const router = require("express").Router();
const { Medication } = require("../../models");

// /api/medication

// POST for adding new medication
router.post("/", async (req, res) => {
    try {
        const medicationData = await Medication.create({
            name: req.body.name,
            dosage: req.body.dosage,
            notes: req.body.notes,
            user_id: req.body.user_id
        });
        res.status(200).json(medicationData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;