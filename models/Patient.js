const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  diseases: [String],
  allergies: [String],
  roomNumber: Number,
  bedNumber: Number,
  floorNumber: Number,
  age: Number,
  gender: String,
  contactInfo: String,
  emergencyContact: String,
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);
