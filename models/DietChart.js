const mongoose = require('mongoose');

const dietChartSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  morningMeal: String,
  eveningMeal: String,
  nightMeal: String,
  ingredients: [String],
  specialInstructions: String,
}, { timestamps: true });

module.exports = mongoose.model('DietChart', dietChartSchema);
