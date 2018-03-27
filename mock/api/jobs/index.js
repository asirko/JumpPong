const express = require('express');
const controller = require('./jobs.controller');

const router = express.Router();

router.get('/categories', controller.getCategories);

module.exports = router;
