"use strict";


module.exports = Roles;


////////////////////////////////////////////////////////////


function Roles(sequelize, DataTypes) {

  var Roles = sequelize.define(
    'Roles',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
        // defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: true,
      underscored: true,
      paranoid: true,
    }
  );

  return Roles;
};
