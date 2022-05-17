const { MissingParamError } = require('../../utils/errors');
const { COGNITO_CLIENT } = require('../../main/config/aws-resources');
const { USER_POOL_ID, USER_POOL_CLIENT_ID } = require('../../main/config/env');
const { ExceptionsAdapter } = require('../adapters');

const login = async ({ username, password }) => {
  // if (!username) throw new MissingParamError('username');
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

  try {
    const response = await COGNITO_CLIENT.adminInitiateAuth(parameters).promise();
    return response;
  } catch (error) {
    return ExceptionsAdapter.signinExceptionHandler(error);
  }
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

  try {
    const response = await COGNITO_CLIENT.changePassword(parameters).promise();
    return response;
  } catch (error) {
    return ExceptionsAdapter.changePasswordExceptionHandler(error);
  }
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

  try {
    const response = await COGNITO_CLIENT.confirmForgotPassword(parameters).promise();
    return response;
  } catch (error) {
    return ExceptionsAdapter.confirmForgotPasswordExceptionHandler(error);
  }
};

const respondAuthChallenge = async ({ username, password, session }) => {
  if (!username) throw new MissingParamError('username');
  if (!password) throw new MissingParamError('password');
  if (!session) throw new MissingParamError('session');

  const parameters = {
    ChallengeName: 'NEW_PASSWORD_REQUIRED',
    ClientId: USER_POOL_CLIENT_ID,
    UserPoolId: USER_POOL_ID,
    Session: session,
    ChallengeResponses: {
      USERNAME: username,
      NEW_PASSWORD: password
    }
  };

  try {
    const response = await COGNITO_CLIENT.adminRespondToAuthChallenge(parameters).promise();
    return response;
  } catch (error) {
    return ExceptionsAdapter.respondAuthChallengeExceptionHandler(error);
  }
};

module.exports = {
  login,
  changePassword,
  forgotPassword,
  confirmForgotPassword,
  respondAuthChallenge
};
