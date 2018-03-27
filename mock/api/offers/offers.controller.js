const offersMock = require('./offers.mock');

exports.upsertOffer = function(req, res) {
  const offer = req.body;
  res.send(offersMock.upsert(offer));
};

exports.getAll = function(req, res) {
  res.send(offersMock.getVisibleOffers());
};

exports.deleteOffer = function(req, res) {
  const id = +req.params.id;
  const offer = offersMock.getById(id);
  offer.isArchived = true;
  res.send(offer);
};

