const CoffeeMachine = require("../models").CoffeeMachine;

const findAllBy = async (queryParams) => {
  return CoffeeMachine.findAll({
    where: queryParams,
    attributes: ["sku"],
  });
};

module.exports = {
  findAllBy,
};
