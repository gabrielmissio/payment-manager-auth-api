const getCognitoResponseError = ({ $response } = {}) => $response && $response.error;

module.exports = {
  getCognitoResponseError
};
