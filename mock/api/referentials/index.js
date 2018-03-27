const express = require('express');
const controller = require('./referentials.controller');

const router = express.Router();

router.get('/', controller.getAll);

module.exports = router;
