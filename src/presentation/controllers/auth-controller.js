const { ResponseHelper } = require('../helpers');
const { AuthService } = require('../../domain/services');

const signin = async (request) => {
  try {
    const authModel = await AuthService.signin(request.body);

    return ResponseHelper.ok(authModel); // TODO: implement serialize
  } catch (error) {
    console.error(error);
    return ResponseHelper.exceptionHandler(error);
  }
};

module.exports = {
  signin
};
