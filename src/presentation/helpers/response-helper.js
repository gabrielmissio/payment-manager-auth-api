const { InternalServerError } = require('../../utils/errors');

const isNumeric = (value) => /^-?\d+$/.test(value);

const ok = (data) => ({ data, code: 200 });

const exceptionHandler = (error) => ({
  code: (isNumeric(error.code) && error.code) || 500,
  data: { error: error.description || new InternalServerError().message }
});

module.exports = {
  ok,
  exceptionHandler
};
