const express = require('express');
const router = express.Router();
const transactionsController = require('../controllers/transactionsController');

router.get('/transfers/:transferId', transactionsController.getTransferById);
router.post('/transfers', transactionsController.createTransfer);

module.exports = router;