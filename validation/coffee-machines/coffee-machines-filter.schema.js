const Joi = require("joi");
const { coffeeMachinesProductTypes } = require("../../helpers");

const coffeeMachinesFilterSchema = Joi.object({
  product_type: Joi.string()
    .valid.apply(Joi, Object.values(coffeeMachinesProductTypes))
    .optional(),
  is_water_line_compatible: Joi.number().valid(1, 0).optional(),
});

module.exports = coffeeMachinesFilterSchema;
