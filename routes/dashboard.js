const express = require('express');
const router = express.Router();

// Ensure your controller imports are correct
const deliveryController = require('../controllers/deliveryController');
const patientController = require('../controllers/patientController');
const pantryController = require('../controllers/pantryController');

// Delivery routes
router.get('/deliveries', async (req, res) => {
    try {
        const deliveries = await deliveryController.getDeliveries(req, res);
        res.status(200).json(deliveries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/deliveries', async (req, res) => {
    try {
        const delivery = await deliveryController.createDelivery(req, res);
        res.status(201).json(delivery);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Patient routes
router.get('/patients', async (req, res) => {
    try {
        const patients = await patientController.getPatients(req, res);
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Pantry routes
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await pantryController.getPantryTasks(req, res);
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
