const express = require('express');
const { getPantryStaff, addPantryStaff } = require('../controllers/pantryController');
const router = express.Router();

router.get('/', getPantryStaff);
router.post('/', addPantryStaff);

module.exports = router;
