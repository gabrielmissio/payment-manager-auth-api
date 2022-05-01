const router = require('express').Router();

const { AuthController } = require('../../presentation/controllers');
const {
  ExpressRouterAdapter: { adapt }
} = require('../adapters');

module.exports = (app) => {
  app.use('/', router);

  router.post('/signin', adapt(AuthController.signin));
};
