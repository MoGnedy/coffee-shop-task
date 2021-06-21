const _ = require("lodash");
const defaultMessage = "Something went wrong";

const setError = (value, keys) => {
  let result = {};
  let temp = result;
  for (let i = 0; i < keys.length; i++) {
    if (i === keys.length - 1) {
      temp[keys[i]] = value;
      continue;
    }
    temp = temp[keys[i]] = {};
  }
  return result;
};

const getErrorMessage = (err, language) => {
  try {
    const label = err.context.label;
    return (
      err.message.replace(/"/g, "").replace(label, "").trim() || defaultMessage
    );
  } catch (error) {
    return defaultMessage;
  }
};

const getJoiErrorMessages = (error, language = null) => {
  if (error && typeof error === "object" && Array.isArray(error.details)) {
    const errors = {};
    error.details.map((err) => {
      const message = getErrorMessage(err, language);
      _.merge(errors, setError(message, err.path));
    });
    return errors;
  }
  return defaultMessage;
};

module.exports = getJoiErrorMessages;
