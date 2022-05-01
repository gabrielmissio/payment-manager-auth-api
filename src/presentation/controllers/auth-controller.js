const { ResponseHelper } = require('../helpers');
const { AuthService } = require('../../domain/services');
const {
  ErrorMessagesEnum: { INCORRECT_USERNAME_OR_PASSWORD }
} = require('../../utils/enums');

const signin = async (request) => {
  try {
    // TODO: implement validation
    const authModel = await AuthService.signin(request.body);
    if (!authModel) return ResponseHelper.unauthorized(INCORRECT_USERNAME_OR_PASSWORD);

    return ResponseHelper.ok(authModel); // TODO: implement serialize
  } catch (error) {
    console.error(error);
    return ResponseHelper.exceptionHandler(error);
  }
};

const changePassword = async (request) => {
  try {
    // TODO: implement validation
    const response = await AuthService.changePassword({
      ...request.body,
      accessToken: request.headers.authorization.split('Bearer ')[1]
    });

    return ResponseHelper.ok(response); // TODO: implement serialize
  } catch (error) {
    console.error(error);
    return ResponseHelper.exceptionHandler(error);
  }
};

const forgotPassword = async (request) => {
  try {
    // TODO: implement validation
    const response = await AuthService.forgotPassword(request.body);

    return ResponseHelper.ok(response); // TODO: implement serialize
  } catch (error) {
    console.error(error);
    return ResponseHelper.exceptionHandler(error);
  }
};

const confirmForgotPassword = async (request) => {
  try {
    // TODO: implement validation
    const response = await AuthService.confirmForgotPassword(request.body);

    return ResponseHelper.ok(response); // TODO: implement serialize
  } catch (error) {
    console.error(error);
    return ResponseHelper.exceptionHandler(error);
  }
};

const respondAuthChallenge = async (request) => {
  try {
    // TODO: implement validation
    const authModel = await AuthService.respondAuthChallenge(request.body);

    return ResponseHelper.ok(authModel); // TODO: implement serialize
  } catch (error) {
    console.error(error);
    return ResponseHelper.exceptionHandler(error);
  }
};

module.exports = {
  signin,
  changePassword,
  forgotPassword,
  confirmForgotPassword,
  respondAuthChallenge
};
