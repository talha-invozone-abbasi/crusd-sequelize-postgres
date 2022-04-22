"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define(
    "Books",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Fill the required fields",
        },
      },
      author: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Fill the required fields",
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: {
          args: false,
          msg: "Fill the required fields",
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        refrence: {
          modal: "Users",
          key: "id",
          userId: "userId",
        },
      },
    },
    {}
  );
  Books.associate = (models) => {
    Books.belongsTo(models.Users, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
  };
  return Books;
};
