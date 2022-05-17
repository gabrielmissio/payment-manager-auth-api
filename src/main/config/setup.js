const { Cors, JsonParser, CookieParser } = require('../middlewares');

module.exports = (app) => {
  app.use(Cors);
  app.use(JsonParser);
  app.use(CookieParser);
};
