const express = require('express');
const controller = require('./candidates.controller');

const router = express.Router();

router.get('/401', controller.get401);

module.exports = router;
