"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class CoffeePods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CoffeePods.init(
    {
      sku: {
        type: DataTypes.STRING,
      },
      product_type: {
        type: DataTypes.STRING,
      },
      coffee_flavor: {
        type: DataTypes.STRING,
      },
      pack_size: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "CoffeePod",
      tableName: "coffee_pods",
    }
  );
  return CoffeePods;
};
