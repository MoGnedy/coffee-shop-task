"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CoffeeMachine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CoffeeMachine.init(
    {
      sku: {
        type: DataTypes.STRING,
      },
      model: {
        type: DataTypes.STRING,
      },
      product_type: {
        type: DataTypes.STRING,
      },
      is_water_line_compatible: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "CoffeeMachine",
      tableName: "coffee_machines",
    }
  );
  return CoffeeMachine;
};
