const { InternalServerError, UnauthorizedError } = require('../../utils/errors');

const isNumeric = (value) => /^-?\d+$/.test(value);

const ok = (data, cookie) => ({ data, cookie, code: 200 });

const unauthorized = (error) => ({ data: { error: new UnauthorizedError(error).message }, code: 401 });

const exceptionHandler = (error) => ({
  code: (isNumeric(error.code) && error.code) || 500,
  data: { error: error.description || new InternalServerError().message }
});

module.exports = {
  ok,
  unauthorized,
  exceptionHandler
};
