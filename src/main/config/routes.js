const router = require('express').Router();

const { AuthController } = require('../../presentation/controllers');
const {
  ExpressRouterAdapter: { adapt }
} = require('../adapters');

module.exports = (app) => {
  app.use('/', router);

  router.post('/signin', adapt(AuthController.signin, true));
  router.post('/change-password', adapt(AuthController.changePassword));
  router.post('/forgot-password', adapt(AuthController.forgotPassword));
  router.post('/confirm-forgot-password', adapt(AuthController.confirmForgotPassword));
  router.post('/respond-auth-challenge', adapt(AuthController.respondAuthChallenge));
};
