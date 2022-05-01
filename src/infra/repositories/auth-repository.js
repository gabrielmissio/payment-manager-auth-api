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

module.exports = {
  signin
};
