const express = require('express');
const controller = require('./offers.controller');

const router = express.Router();

router.get('/', controller.getAll);
router.post('/', controller.upsertOffer);
router.delete('/:id', controller.deleteOffer);

module.exports = router;
