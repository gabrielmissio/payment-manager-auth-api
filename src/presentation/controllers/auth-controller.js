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

const login = async (request) => {
  try {
    // TODO: implement validation
    const authModel = await AuthService.login(request.body);
    if (!authModel) return ResponseHelper.unauthorized(INCORRECT_USERNAME_OR_PASSWORD);

    const cookie = {
      name: 'access_token',
      value: authModel.AuthenticationResult.AccessToken
    };
    const response = { message: 'Logged in successfully 😊 👌' };

    return ResponseHelper.ok(response, cookie);
  } catch (error) {
    console.error(error);
    return ResponseHelper.exceptionHandler(error);
  }
};

const logout = async () => {
  try {
    const cookie = {
      name: 'access_token'
    };
    const response = { message: 'Successfully logged out 😏 🍀' };

    return ResponseHelper.ok(response, cookie);
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
  login,
  logout,
  changePassword,
  forgotPassword,
  confirmForgotPassword,
  respondAuthChallenge
};
