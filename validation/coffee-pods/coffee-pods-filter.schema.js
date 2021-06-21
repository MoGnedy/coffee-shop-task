const Joi = require("joi");
const { coffeePodsProductTypes, coffeeFlavors, packSizes } = require("../../helpers");


const coffeePodsFilterSchema = Joi.object({
  product_type: Joi.string()
    .valid.apply(Joi, Object.values(coffeePodsProductTypes))
    .optional(),
  coffee_flavor: Joi.string()
    .valid.apply(Joi, Object.values(coffeeFlavors))
    .optional(),
  pack_size: Joi.string()
    .valid.apply(Joi, Object.values(packSizes))
    .optional(),
});

module.exports = coffeePodsFilterSchema;
