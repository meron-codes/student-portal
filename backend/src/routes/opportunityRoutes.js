const express = require('express');
const router = express.Router();
const { createOpportunity,getOpportunitiesForStudent } = require('../controllers/opportunityController');
const { checkRole } = require('../middlewares/auth');

router.post('/',checkRole(['admin']),createOpportunity);
router.get('/student',checkRole(['student']),getOpportunitiesForStudent);

module.exports = router;
