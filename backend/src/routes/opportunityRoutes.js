const express = require('express');
const router = express.Router();
const { addOpportunity, getOpportunities } = require('../controllers/opportunityController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, addOpportunity);
router.get('/', auth, getOpportunities);

module.exports = router;
