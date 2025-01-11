// models/Delivery.js
const mongoose = require('mongoose');

const DeliverySchema = new mongoose.Schema({
  mealBox: String,
  deliveryPersonnel: String,
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  status: String,
  timestamp: Date,
  notes: String,
});

module.exports = mongoose.model('Delivery', DeliverySchema);
