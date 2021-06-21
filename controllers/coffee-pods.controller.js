const { CoffeePodsRespository } = require("../repositories");

const getCoffeePods = async (req, res) => {
  const queryParams = req.query;

  const coffeePods = await CoffeePodsRespository.findAllBy(queryParams);

  const data = coffeePods.map((coffeePod) => coffeePod.sku);

  res.json(data);
};

module.exports = {
  getCoffeePods,
};
