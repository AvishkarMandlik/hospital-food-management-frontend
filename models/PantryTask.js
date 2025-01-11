const mongoose = require('mongoose');

// Define the schema for the PantryTask model
const PantryTaskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  assignedTo: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending'
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
  }
});

// Create the model using the schema
const PantryTask = mongoose.model('PantryTask', PantryTaskSchema);

module.exports = PantryTask;
