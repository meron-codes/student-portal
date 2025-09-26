const express = require('express');
const { getResults, addResult } = require('../controllers/resultController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// Students and admins can see results
router.get('/', auth(['student', 'admin']), getResults);

// Only admin can add new results
router.post('/', auth('admin'), addResult);

module.exports = router;
