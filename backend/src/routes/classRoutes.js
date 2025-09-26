const express = require('express');
const { getClasses, addClass } = require('../controllers/classController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// Students can view classes, admins can manage
router.get('/', auth(['student','admin']), getClasses);
router.post('/', auth('admin'), addClass);

module.exports = router;
