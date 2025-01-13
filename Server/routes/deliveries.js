const express = require('express');
const router = express.Router();
const deliveryController = require('../controllers/deliveryController');

// Get all deliveries
router.get('/', deliveryController.getDeliveries);

// Create a new delivery
router.post('/', deliveryController.createDelivery);

module.exports = router;
