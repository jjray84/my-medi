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

// PUT for updating existing medication by id
router.put("/:id", async (req, res) => {
    try {
        const medicationData = await Medication.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (!medicationData[0]) {
            res.status(404).json({ message: "No medication with this id"});
            return;
        }
        res.status(200).json(medicationData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;