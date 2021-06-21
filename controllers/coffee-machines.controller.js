const { CoffeeMachinesRepository } = require("../repositories");

const getCoffeeMachines = async (req, res) => {
  const queryParams = req.query;

  const coffeeMachines = await CoffeeMachinesRepository.findAllBy(queryParams);

  const data = coffeeMachines.map((coffeeMachine) => coffeeMachine.sku);

  res.json(data);
};

module.exports = {
  getCoffeeMachines,
};
