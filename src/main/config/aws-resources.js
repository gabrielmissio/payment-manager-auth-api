const AWS = require('aws-sdk');

const { REGION } = require('./env');

const COGNITO_CLIENT = new AWS.CognitoIdentityServiceProvider({
  apiVersion: '2016-04-19',
  region: REGION
});

module.exports = {
  COGNITO_CLIENT
};
