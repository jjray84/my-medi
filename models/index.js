const User = require("./user");
const Medication = require("./Medication");

User.hasMany(Medication, {
    foreignKey: "user_id"
});

Medication.belongsTo(User, {
    foreignKey: "user_id"
});

module.exports = { User, Medication };
