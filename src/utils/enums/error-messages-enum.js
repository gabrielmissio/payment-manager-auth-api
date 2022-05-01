const ErrorMessagesEnum = {
  INCORRECT_USERNAME_OR_PASSWORD: 'incorrect username or password',
  PASSWORD_CHANGED_SUCCESSFULLY: 'password changed successfully',
  INVALID_CONFIRMATION_CODE: 'invalid confirmation code, please request a new one',
  INVALID_SESSION: 'invalid session for the provided user'
};

module.exports = Object.freeze(ErrorMessagesEnum);
