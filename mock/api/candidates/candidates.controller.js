
exports.get401 = function(req, res) {
  res.status(401)
    .send('Not authorized');
};

