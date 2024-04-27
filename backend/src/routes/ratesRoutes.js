const express = require('express');
const router = express.Router();
const ratesController = require('../controllers/ratesController');

router.get('/quotes/:quoteId', ratesController.getQuoteById);
router.post('/quotes', ratesController.createQuote);

module.exports = router;