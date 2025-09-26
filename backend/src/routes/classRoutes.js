const express = require('express');
const router = express.Router();
const { addClass, getClasses } = require('../controllers/classController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, addClass);
router.get('/', auth, getClasses);

module.exports = router;
