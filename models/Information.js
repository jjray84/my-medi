const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Information extends Model {}

Information.init(
  {
    personal_number: {
      type: DataTypes.STRING,
      defaultValue: "Not Provided",
    },
    emergency_contact: {
      type: DataTypes.STRING,
      defaultValue: "Not Provided",
    },
    emergency_number: {
      type: DataTypes.STRING,
      defaultValue: "Not Provided",
    },
    blood_type: {
      type: DataTypes.STRING,
      defaultValue: "Not Provided",
    },
    allergies: {
      type: DataTypes.STRING,
      defaultValue: "No Known Allergies",
    },
    transplants: {
      type: DataTypes.STRING,
      defaultValue: "N/A",
    },
    devices: {
      type: DataTypes.STRING,
      defaultValue: "N/A",
    },
    notes: {
      type: DataTypes.TEXT,
      defaultValue: "None Provided"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
      unique: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "information",
  }
);

module.exports = Information;
