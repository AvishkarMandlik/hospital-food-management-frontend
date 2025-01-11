const mongoose = require('mongoose');

const pantryStaffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactInfo: String,
  location: String,
}, { timestamps: true });

module.exports = mongoose.model('PantryStaff', pantryStaffSchema);
