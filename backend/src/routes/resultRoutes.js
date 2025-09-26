const express = require('express');
const router = express.Router();
const { addResult, getResultsByStudent } = require('../controllers/resultController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, addResult);
router.get('/:student_id', auth, getResultsByStudent);

module.exports = router;
