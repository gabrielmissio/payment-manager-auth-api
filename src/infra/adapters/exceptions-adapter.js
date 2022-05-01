const signinExceptionHandler = (error) => {
  if (error.code === 'NotAuthorizedException') return null;

  throw error;
};

const changePasswordExceptionHandler = (error) => {
  if (error.code === 'NotAuthorizedException') return null;

  throw error;
};

module.exports = {
  signinExceptionHandler,
  changePasswordExceptionHandler
};
