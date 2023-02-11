const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config")

class Information extends Model {};

Information.init(
    {
        personal_number: {
            type: DataTypes.INTEGER[10]
        },
        emergency_contact: {
            type: DataTypes.STRING
        },
        emergency_number: {
            type: DataTypes.INTEGER[10]
        },
        blood_type: {
            type: DataTypes.STRING
        },
        allergies: {
            type: DataTypes.STRING
        },
        transplants: {
            type: DataTypes.STRING
        }, 
        devices: {
            type: DataTypes.STRING
        }, 
        user_id: {
            type: DataTypes.INTEGER,
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
        modelName: "information"
    }
)

module.exports = Information;