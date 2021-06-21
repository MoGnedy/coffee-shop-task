"use strict";
const coffeePods = require("./data/coffee-pods.json");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("coffee_pods", coffeePods, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("coffee_pods", coffeePods, {});
  }
};
