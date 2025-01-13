const express = require('express');
const { getPatients, createPatient } = require('../controllers/patientController');
const router = express.Router();

router.get('/', getPatients); // This handles GET requests to /api/patients
router.post('/', createPatient); // This handles POST requests to /api/patients

module.exports = router;
