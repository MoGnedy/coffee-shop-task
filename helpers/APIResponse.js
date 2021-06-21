const { httpStatusCodes } = require("./responseStatusCodes");

class APIResponse {
  constructor(data = null, status = httpStatusCodes.SUCCESS, metaData = {}) {
    this.status = /2../.test(status);
    this.data = status ? data : null;
    this.errors = status ? null : data;
    this.meta_data = metaData && typeof metaData === "object" ? metaData : {};
  }

  setStatus(statusCode) {
    this.status = statusCode;
  }

  setMessage(message) {
    this.message = message;
  }

  setData(data) {
    this.data = data;
  }
}

module.exports = APIResponse;
