const CoffeePod = require("../models").CoffeePod;

const findAllBy = async (queryParams) => {
  return CoffeePod.findAll({
    where: queryParams,
    attributes: ["sku"],
  });
};

module.exports = {
  findAllBy,
};
