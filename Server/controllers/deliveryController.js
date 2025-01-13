const Delivery = require('../models/Delivery');

exports.getDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.find();
    res.json(deliveries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createDelivery = async (req, res) => {
  const { mealBox, deliveryPersonnel, patientId, status, timestamp, notes } = req.body;
  const delivery = new Delivery({ mealBox, deliveryPersonnel, patientId, status, timestamp, notes });

  try {
    await delivery.save();
    res.status(201).json(delivery);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
