const express = require("express");
const Router = express.Router();

const {
  getCoffeeMachines,
} = require("../../controllers/coffee-machines.controller");
const { paramsValidator } = require("../../middlewares");
const coffeeMachinesFilterSchema = require("../../validation/coffee-machines/coffee-machines-filter.schema");

Router.get("/", paramsValidator(coffeeMachinesFilterSchema), getCoffeeMachines);

module.exports = Router;
