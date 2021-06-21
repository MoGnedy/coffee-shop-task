const { getJoiErrorMessages, httpStatusCodes } = require("../helpers");
const APIResponse = require("../helpers/APIResponse");

const getDataToValidate = (req) => {
  const method = req.method;

  switch (method) {
    case "GET":
      return req.query;
    case "POST":
    case "PUT":
    case "PATCH":
      return req.body;
    default:
      return null;
  }
};

const paramsValidator = (schema) => (req, res, next) => {
  try {
    const dataToValidate = getDataToValidate(req);
    const { value, error } = schema.validate(dataToValidate, {
      abortEarly: false,
    });
    if (error) {
      const errors = getJoiErrorMessages(error);
      const response = new APIResponse(
        errors,
        httpStatusCodes.UNPROCESSABLE_ENTITY
      );
      return res.status(httpStatusCodes.UNPROCESSABLE_ENTITY).json(response);
    }
    next();
  } catch (error) {
    const response = new APIResponse(httpStatusCodes.SERVER_ERROR);
    return res.status(httpStatusCodes.SERVER_ERROR).json(response);
  }
};

module.exports = paramsValidator;
