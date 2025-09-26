const express = require('express');
const { getOpportunities, addOpportunity } = require('../controllers/opportunityController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// Students can view opportunities, admins can add
router.get('/', auth(['student','admin']), getOpportunities);
router.post('/', auth('admin'), addOpportunity);

module.exports = router;
