const InternalServerError = require('./internal-server-error');
const MissingParamError = require('./missing-param-error');
const UnauthorizedError = require('./unauthorized-error');

module.exports = {
  InternalServerError,
  MissingParamError,
  UnauthorizedError
};
