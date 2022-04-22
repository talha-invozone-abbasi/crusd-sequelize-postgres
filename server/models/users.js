"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "First Name should not be null",
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "First Name should not be null",
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "First Name should not be null",
        },
        unique: {
          args: true,
          msg: "Email is already in use",
        },
        validate: {
          isEmail: {
            args: true,
            msg: "Invalid Email Pattern",
          },
        },
      },
    },
    {}
  );
  Users.associate = (modals) => {
    Users.hasMany(modals.Books, {
      foreignKey: "userId",
    });
  };
  return Users;
};
