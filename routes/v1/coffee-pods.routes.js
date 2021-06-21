const express = require("express");
const Router = express.Router();

const {
  getCoffeePods,
} = require("../../controllers/coffee-pods.controller");
const { paramsValidator } = require("../../middlewares");
const coffeePodsFilterSchema = require("../../validation/coffee-pods/coffee-pods-filter.schema");

Router.get("/", paramsValidator(coffeePodsFilterSchema), getCoffeePods);

module.exports = Router;
