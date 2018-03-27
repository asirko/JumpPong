const express = require('express');
const controller = require('./chatbot.controller');

const router = express.Router();

router.put('/:idForm', controller.getNextQuestion);

module.exports = router;
