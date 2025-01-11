const express = require('express');
const router = express.Router();

// Ensure your controller imports are correct
const deliveryController = require('../controllers/deliveryController');
const patientController = require('../controllers/patientController');
const pantryController = require('../controllers/pantryController');
// const alertsController = require('../controllers/alertsController');  // Uncomment if you're using this later

// Delivery routes
router.get('/deliveries', deliveryController.getDeliveries);
router.post('/deliveries', deliveryController.createDelivery);

// Patient routes
router.get('/patients', patientController.getPatients);

// Pantry routes
router.get('/tasks', pantryController.getPantryTasks);

// Alert routes (optional, can be uncommented if you implement alerts)
// router.get('/alerts', alertsController.getAlerts);

module.exports = router;
