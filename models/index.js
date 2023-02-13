const User = require("./user");
const Medication = require("./Medication");
const Information = require("./Information")

User.hasMany(Medication, {
    foreignKey: "user_id"
});

Medication.belongsTo(User, {
    foreignKey: "user_id"
});

User.hasMany(Information, {
    foreignKey: "user_id"
})

Information.belongsTo(User, {
    foreignKey: "user_id"
})

module.exports = { User, Medication, Information };
