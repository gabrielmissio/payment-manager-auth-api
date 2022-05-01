const { MissingParamError } = require('../../utils/errors');
const { AuthRepository } = require('../../infra/repositories');

const signin = async (payload) => {
  if (!payload) throw new MissingParamError('payload');

  const authModel = await AuthRepository.signin(payload);
  return authModel;
};

const changePassword = async (payload) => {
  if (!payload) throw new MissingParamError('payload');

  const response = await AuthRepository.changePassword(payload);
  return response;
};

const forgotPassword = async (payload) => {
  if (!payload) throw new MissingParamError('payload');

  const response = await AuthRepository.forgotPassword(payload);
  return response;
};

const confirmForgotPassword = async (payload) => {
  if (!payload) throw new MissingParamError('payload');

  const response = await AuthRepository.confirmForgotPassword(payload);
  return response;
};

module.exports = {
  signin,
  changePassword,
  forgotPassword,
  confirmForgotPassword
};
