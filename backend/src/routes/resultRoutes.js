const express = require('express');
const router = express.Router();
const { createResult,getResultsForStudent } = require('../controllers/resultController');
const { checkRole } = require('../middlewares/auth');

router.post('/',checkRole(['teacher','admin']),createResult);
router.get('/student',checkRole(['student']),getResultsForStudent);

module.exports = router;
