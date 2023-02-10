const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

class Medication extends Model {}

Medication.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        dosage: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        notes: {
            type: Datatypes.TEXT
        },
        user_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "medication"
    }
);

module.exports = Medication;