class UnauthorizedError extends Error {
  constructor(description) {
    super(`Unauthorized Error: ${description}`);
    this.description = description;
    this.code = 401;
    this.name = 'UnauthorizedError';
  }
}

module.exports = UnauthorizedError;
