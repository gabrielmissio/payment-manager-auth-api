const { MissingParamError } = require('../../utils/errors');
const { COGNITO_CLIENT } = require('../../main/config/aws-resources');
const { USER_POOL_ID, USER_POOL_CLIENT_ID } = require('../../main/config/env');

const signin = async ({ username, password }) => {
  if (!username) throw new MissingParamError('username');
  if (!password) throw new MissingParamError('password');

  const parameters = {
    AuthFlow: 'ADMIN_NO_SRP_AUTH',
    ClientId: USER_POOL_CLIENT_ID,
    UserPoolId: USER_POOL_ID,
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password
    }
  };

  return COGNITO_CLIENT.adminInitiateAuth(parameters).promise();
};

const changePassword = async ({ previousPassword, proposedPassword, accessToken }) => {
  if (!previousPassword) throw new MissingParamError('previousPassword');
  if (!proposedPassword) throw new MissingParamError('proposedPassword');
  if (!accessToken) throw new MissingParamError('accessToken');

  const parameters = {
    PreviousPassword: previousPassword,
    ProposedPassword: proposedPassword,
    AccessToken: accessToken
  };

  return COGNITO_CLIENT.changePassword(parameters).promise();
};

const forgotPassword = async ({ username }) => {
  if (!username) throw new MissingParamError('username');

  const parameters = {
    ClientId: USER_POOL_CLIENT_ID,
    Username: username
  };

  return COGNITO_CLIENT.forgotPassword(parameters).promise();
};

const confirmForgotPassword = async ({ username, password, confirmationCode }) => {
  if (!username) throw new MissingParamError('username');
  if (!password) throw new MissingParamError('password');
  if (!confirmationCode) throw new MissingParamError('confirmationCode');

  const parameters = {
    ClientId: USER_POOL_CLIENT_ID,
    ConfirmationCode: confirmationCode,
    Username: username,
    Password: password
  };

  return COGNITO_CLIENT.confirmForgotPassword(parameters).promise();
};

module.exports = {
  signin,
  changePassword,
  forgotPassword,
  confirmForgotPassword
};
