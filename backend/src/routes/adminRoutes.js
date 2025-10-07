const express = require('express');
const router = express.Router();
const { addResult, editResult, deleteResult } = require('../controllers/adminController');

router.post('/add-result', addResult);
router.put('/edit-result/:id', editResult);
router.delete('/delete-result/:id', deleteResult);

module.exports = router;
