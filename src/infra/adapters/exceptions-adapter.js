const signinExceptionHandler = (error) => {
  if (error.code === 'NotAuthorizedException') return null;

  throw error;
};

const changePasswordExceptionHandler = (error) => {
  if (error.code === 'NotAuthorizedException') return null;

  throw error;
};

const confirmForgotPasswordExceptionHandler = (error) => {
  if (error.code === 'ExpiredCodeException') return null;

  throw error;
};

module.exports = {
  signinExceptionHandler,
  changePasswordExceptionHandler,
  confirmForgotPasswordExceptionHandler
};
