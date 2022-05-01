const { MissingParamError } = require('../../utils/errors');
const { AuthRepository } = require('../../infra/repositories');

const signin = async (payload) => {
  if (!payload) throw new MissingParamError('payload');

  const authModel = await AuthRepository.signin(payload);
  return authModel;
};

module.exports = {
  signin
};
