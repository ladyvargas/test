const express = require('express');
const scoreController = require('../controllers/scoreController');
const validateInput = require('../middleware/validateInput');

const router = express.Router();

router.post('/calculate-score', validateInput, scoreController.calculateScore);
router.get('/health', scoreController.healthCheck);

module.exports = router;