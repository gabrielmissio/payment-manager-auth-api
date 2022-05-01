const REGION = process.env.REGION || 'localhost';

module.exports = {
  REGION,
  NODE_ENV: process.env.NODE_ENV || 'dev',
  USER_POOL_ID: process.env.USER_POOL_ID || null,
  USER_POOL_CLIENT_ID: process.env.USER_POOL_CLIENT_ID || null
};
