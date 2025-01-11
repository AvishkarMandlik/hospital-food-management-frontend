const PantryStaff = require('../models/PantryStaff');

exports.getPantryStaff = async (req, res) => {
  try {
    const staff = await PantryStaff.find();
    res.json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addPantryStaff = async (req, res) => {
  try {
    const staff = new PantryStaff(req.body);
    const savedStaff = await staff.save();
    res.status(201).json(savedStaff);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
