const referentials = require('./referentials.mock');

exports.getAll = function(req, res) {
  res.send(referentials.all);
};

