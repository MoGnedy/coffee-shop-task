"use strict";
const coffeeMachines = require("./data/coffee-machines.json");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("coffee_machines", coffeeMachines, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("coffee_machines", coffeeMachines, {});
  },
};
