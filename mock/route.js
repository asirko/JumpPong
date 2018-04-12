const bodyParser = require('body-parser');
const auth = require('./api/auth.middleware');
const API_ROOT = '/api';

module.exports = function(app) {

  // initialize middleware
  app.use(API_ROOT, bodyParser.json());
  app.use(API_ROOT, auth.middleware);

  app.use(API_ROOT + '/users', require('./api/user'));

};
