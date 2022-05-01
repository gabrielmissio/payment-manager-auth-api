const { ResponseHelper } = require('../helpers');
const { AuthService } = require('../../domain/services');
const {
  ErrorMessagesEnum: {
    INCORRECT_USERNAME_OR_PASSWORD,
    PASSWORD_CHANGED_SUCCESSFULLY,
    INVALID_CONFIRMATION_CODE,
    INVALID_SESSION
  }
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
    const isSuccess = await AuthService.changePassword({
      ...request.body,
      accessToken: request.headers.authorization.split('Bearer ')[1]
    });

    if (!isSuccess) return ResponseHelper.unauthorized(INCORRECT_USERNAME_OR_PASSWORD);

    return ResponseHelper.ok({ message: PASSWORD_CHANGED_SUCCESSFULLY }); // TODO: implement serialize
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
    const isSuccess = await AuthService.confirmForgotPassword(request.body);
    if (!isSuccess) return ResponseHelper.unauthorized(INVALID_CONFIRMATION_CODE);

    return ResponseHelper.ok({ message: PASSWORD_CHANGED_SUCCESSFULLY }); // TODO: implement serialize
  } catch (error) {
    console.error(error);
    return ResponseHelper.exceptionHandler(error);
  }
};

const respondAuthChallenge = async (request) => {
  try {
    // TODO: implement validation
    const authModel = await AuthService.respondAuthChallenge(request.body);
    if (!authModel) return ResponseHelper.unauthorized(INVALID_SESSION);

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
